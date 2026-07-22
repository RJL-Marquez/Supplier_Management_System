import * as XLSX from 'xlsx';
import { SurveyResponse, SurveyType } from '../types/survey';
import { ExportTable, exportTablesAsCSV, exportTablesAsExcel } from './exporters';

// Single source of truth for the archived-response export/import shape, so
// a file exported here can always be re-imported losslessly by the parser
// below - every SurveyResponse field, verbatim, one row per response record.
const COLUMNS = [
  'responseId', 'surveyType', 'respondentType', 'submissionDate', 'company',
  'department', 'address', 'questionId', 'questionNumber', 'question',
  'questionCategory', 'rating', 'comment', 'respondentEmail',
  'archived', 'archivedAt', 'archivedBySurveyId', 'archivedBySurveyTitle',
] as const;

function toExportTable(responses: SurveyResponse[]): ExportTable {
  return {
    title: 'Archived Responses',
    columns: [...COLUMNS],
    rows: responses.map((r) => COLUMNS.map((col) => {
      const value = r[col as keyof SurveyResponse];
      if (value === undefined || value === null) return '';
      return typeof value === 'boolean' ? String(value) : value;
    })),
  };
}

export function exportArchivedResponsesAsCSV(responses: SurveyResponse[], filenameBase: string) {
  exportTablesAsCSV([toExportTable(responses)], filenameBase);
}

export function exportArchivedResponsesAsExcel(responses: SurveyResponse[], filenameBase: string) {
  exportTablesAsExcel([toExportTable(responses)], filenameBase);
}

/* ------------------------------------------------------------------ */
/* Re-import                                                            */
/* ------------------------------------------------------------------ */

export interface ArchiveImportLogEntry {
  row: number; // 1-based row within the sheet's data rows
  responseId: string;
  action: 'imported' | 'skipped-duplicate' | 'skipped-invalid';
  reason?: string;
}

export interface ArchiveImportResult {
  responses: SurveyResponse[]; // the full merged list (existing + newly imported)
  log: ArchiveImportLogEntry[];
  stats: { totalRows: number; imported: number; skippedDuplicate: number; skippedInvalid: number };
}

const VALID_SURVEY_TYPES: SurveyType[] = ['Courier', 'Supplier', 'Subcontractor'];

function coerceRating(value: unknown): SurveyResponse['rating'] | undefined {
  if (value === 'N/A' || value === '') return value === '' ? undefined : 'N/A';
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined;
}

function rowToResponse(row: Record<string, unknown>): { response?: SurveyResponse; reason?: string } {
  const responseId = String(row.responseId ?? '').trim();
  const company = String(row.company ?? '').trim();
  const questionId = String(row.questionId ?? '').trim();
  const surveyType = String(row.surveyType ?? '').trim() as SurveyType;

  if (!responseId) return { reason: 'Missing responseId' };
  if (!company) return { reason: 'Missing company' };
  if (!questionId) return { reason: 'Missing questionId' };
  if (!VALID_SURVEY_TYPES.includes(surveyType)) return { reason: `Invalid surveyType "${row.surveyType}"` };

  const rating = coerceRating(row.rating);
  if (rating === undefined) return { reason: `Invalid rating "${row.rating}"` };

  return {
    response: {
      responseId,
      surveyType,
      respondentType: String(row.respondentType ?? '').trim(),
      submissionDate: String(row.submissionDate ?? '').trim(),
      company,
      department: row.department ? String(row.department) : undefined,
      address: row.address ? String(row.address) : undefined,
      questionId,
      questionNumber: Number(row.questionNumber) || 0,
      question: String(row.question ?? ''),
      questionCategory: String(row.questionCategory ?? ''),
      rating,
      comment: String(row.comment ?? ''),
      respondentEmail: row.respondentEmail ? String(row.respondentEmail) : undefined,
      // Re-imported historical data is always archived, regardless of what
      // the "archived" column says - this path exists to restore deleted
      // history, never to sneak rows back into the active/current period.
      archived: true,
      archivedAt: row.archivedAt ? String(row.archivedAt) : undefined,
      archivedBySurveyId: row.archivedBySurveyId ? String(row.archivedBySurveyId) : undefined,
      archivedBySurveyTitle: row.archivedBySurveyTitle ? String(row.archivedBySurveyTitle) : undefined,
    },
  };
}

export function parseArchivedResponsesWorkbook(data: ArrayBuffer | Uint8Array): { row: number; raw: Record<string, unknown> }[] {
  const workbook = XLSX.read(data, { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { raw: false, defval: '' });
  return rows.map((raw, i) => ({ row: i + 1, raw }));
}

// One submission produces many rows (one per question) that all share the
// same responseId - so responseId alone is NOT a unique row key. The unique
// key for a single row is (responseId, questionId).
function rowKey(responseId: string, questionId: string): string {
  return `${responseId}::${questionId}`;
}

export function mergeImportedResponses(
  parsedRows: { row: number; raw: Record<string, unknown> }[],
  existingResponses: SurveyResponse[]
): ArchiveImportResult {
  const existingKeys = new Set(existingResponses.map((r) => rowKey(r.responseId, r.questionId)));
  const merged = [...existingResponses];
  const log: ArchiveImportLogEntry[] = [];
  const stats = { totalRows: parsedRows.length, imported: 0, skippedDuplicate: 0, skippedInvalid: 0 };

  for (const { row, raw } of parsedRows) {
    const responseId = String(raw.responseId ?? '').trim();
    const questionId = String(raw.questionId ?? '').trim();
    const key = rowKey(responseId, questionId);
    if (existingKeys.has(key) && responseId && questionId) {
      log.push({ row, responseId, action: 'skipped-duplicate' });
      stats.skippedDuplicate++;
      continue;
    }

    const { response, reason } = rowToResponse(raw);
    if (!response) {
      log.push({ row, responseId, action: 'skipped-invalid', reason });
      stats.skippedInvalid++;
      continue;
    }

    merged.push(response);
    existingKeys.add(key);
    log.push({ row, responseId: response.responseId, action: 'imported' });
    stats.imported++;
  }

  return { responses: merged, log, stats };
}

export async function importArchivedResponsesFromFile(
  file: File,
  existingResponses: SurveyResponse[]
): Promise<ArchiveImportResult> {
  const buffer = await file.arrayBuffer();
  const rows = parseArchivedResponsesWorkbook(buffer);
  return mergeImportedResponses(rows, existingResponses);
}
