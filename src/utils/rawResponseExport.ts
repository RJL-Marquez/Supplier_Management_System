import { SurveyResponse, SurveyType } from '../types/survey';
import { ExportTable, exportTablesAsCSV, exportTablesAsExcel } from './exporters';

// Reproduces the original MBS Partner Evaluation Forms export layout (one
// row per submission, question text as column headers) from this app's
// normalized, one-row-per-question SurveyResponse records - grouped into
// one ExportTable (=> one Excel sheet, or one titled block in the CSV) per
// company evaluated under the given survey type.

interface QuestionColumn {
  questionId: string;
  questionNumber: number;
  question: string;
}

function collectQuestionColumns(responses: SurveyResponse[]): QuestionColumn[] {
  const byId = new Map<string, QuestionColumn>();
  responses.forEach((r) => {
    if (!byId.has(r.questionId)) {
      byId.set(r.questionId, { questionId: r.questionId, questionNumber: r.questionNumber, question: r.question });
    }
  });
  return [...byId.values()].sort((a, b) => a.questionNumber - b.questionNumber);
}

// Text/select-type questions (remarks, "Period Covered", overall feedback,
// etc.) are always saved with rating = 'N/A' and the real answer in
// `comment` (see SurveyFillerPage's submit handler) - so a non-empty
// comment means "this is the actual answer", and only a genuinely blank
// comment means the respondent left/rated this "N/A".
function cellValue(answer: SurveyResponse | undefined): string | number {
  if (!answer) return '';
  if (typeof answer.rating === 'number') return answer.rating;
  return answer.comment && answer.comment.trim() !== '' ? answer.comment : 'N/A';
}

const METADATA_HEADERS = ['ID', 'Submission Date', 'Email', 'Designation', 'Department', 'Company Name'];

function formatSubmissionDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}

export function buildRawResponseExportTables(responses: SurveyResponse[], surveyType: SurveyType): ExportTable[] {
  const typeResponses = responses.filter((r) => r.surveyType === surveyType);
  const questionColumns = collectQuestionColumns(typeResponses);
  const columns = [...METADATA_HEADERS, ...questionColumns.map((q) => q.question)];

  const companies = [...new Set(typeResponses.map((r) => r.company))].sort();

  return companies.map((company) => {
    const companyResponses = typeResponses.filter((r) => r.company === company);
    const firstByResponseId = new Map<string, SurveyResponse>();
    companyResponses.forEach((r) => {
      if (!firstByResponseId.has(r.responseId)) firstByResponseId.set(r.responseId, r);
    });

    const responseIds = [...firstByResponseId.keys()].sort((a, b) =>
      (firstByResponseId.get(a)!.submissionDate ?? '').localeCompare(firstByResponseId.get(b)!.submissionDate ?? '')
    );

    const rows = responseIds.map((responseId, index) => {
      const first = firstByResponseId.get(responseId)!;
      const byQuestionId = new Map(
        companyResponses.filter((r) => r.responseId === responseId).map((a) => [a.questionId, a])
      );
      return [
        index + 1,
        formatSubmissionDate(first.submissionDate),
        first.respondentEmail ?? '',
        first.respondentType ?? '',
        first.department ?? '',
        company,
        ...questionColumns.map((q) => cellValue(byQuestionId.get(q.questionId))),
      ];
    });

    return { title: company, columns, rows };
  });
}

export function exportRawResponsesAsExcel(responses: SurveyResponse[], surveyType: SurveyType, filenameBase: string) {
  exportTablesAsExcel(buildRawResponseExportTables(responses, surveyType), filenameBase);
}

export function exportRawResponsesAsCSV(responses: SurveyResponse[], surveyType: SurveyType, filenameBase: string) {
  exportTablesAsCSV(buildRawResponseExportTables(responses, surveyType), filenameBase);
}
