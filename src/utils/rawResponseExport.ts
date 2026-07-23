import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SurveyResponse, SurveyType } from '../types/survey';
import { ExportTable, exportTablesAsCSV, exportTablesAsExcel } from './exporters';
import { logExport } from './exportHistory';

// Reproduces the original MBS Partner Evaluation Forms export layout (one
// row per submission, question text as column headers) from this app's
// normalized, one-row-per-question SurveyResponse records - grouped into
// one ExportTable (=> one Excel sheet, or one titled block in the CSV) per
// company evaluated under the given survey type.

interface QuestionColumn {
  questionId: string;
  questionNumber: number;
  question: string;
  // True for text/select-type questions (remarks, "Period Covered", overall
  // feedback, etc.), which always save rating = 'N/A' and put the real
  // answer in `comment` (see SurveyFillerPage's submit handler) - so EVERY
  // response to that questionId being 'N/A' reliably means "this question
  // is inherently text/select, not a rating" (a real typed-rating question
  // occasionally gets an 'N/A' rating too, but never on every single
  // response across a whole dataset).
  isText: boolean;
}

function collectQuestionColumns(responses: SurveyResponse[]): QuestionColumn[] {
  const byId = new Map<string, { questionNumber: number; question: string; allNa: boolean }>();
  responses.forEach((r) => {
    const isNa = typeof r.rating !== 'number';
    const existing = byId.get(r.questionId);
    if (!existing) {
      byId.set(r.questionId, { questionNumber: r.questionNumber, question: r.question, allNa: isNa });
    } else if (!isNa) {
      existing.allNa = false;
    }
  });
  return [...byId.entries()]
    .map(([questionId, v]) => ({ questionId, questionNumber: v.questionNumber, question: v.question, isText: v.allNa }))
    .sort((a, b) => a.questionNumber - b.questionNumber);
}

// A rating-type question's `comment` is just an optional annotation (e.g. an
// explanation for why this one respondent rated it "N/A") - the cell value
// is still the rating itself, or the literal "N/A", never that annotation.
// Only genuine text/select-type questions (isText) show their `comment`.
function cellValue(column: QuestionColumn, answer: SurveyResponse | undefined): string | number {
  if (!answer) return '';
  if (!column.isText) return typeof answer.rating === 'number' ? answer.rating : 'N/A';
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
        ...questionColumns.map((q) => cellValue(q, byQuestionId.get(q.questionId))),
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

function timestamp() {
  return new Date().toISOString().slice(0, 10);
}

// Short informational columns ("Period Covered", "Project Name") stay
// pencil-thin, so they can only fit a couple of short lines before a cell
// starts dominating row height. The one overall-comment column gets real
// width (see overallCommentWidth below), so it can hold much more before
// hitting the same problem. No ellipsis suffix - jsPDF's built-in
// "helvetica" font doesn't reliably render the U+2026 glyph.
const INFO_TEXT_CHAR_LIMIT = 30;
const COMMENT_CHAR_LIMIT = 140;

function truncateForPrint(value: string, limit: number): string {
  return value.length > limit ? value.slice(0, limit) : value;
}

/**
 * One 8.5x13in (Folio) landscape PDF, one dedicated page block per company (autoTable
 * spills a company onto a 2nd+ page on its own if it has enough respondents
 * to overflow the first), so page count naturally tracks response volume
 * instead of being hardcoded.
 *
 * Several adaptations from the Excel/CSV layout, all needed to keep that
 * page count near "1-2 pages" instead of a dozen+ (Excel/CSV are unaffected
 * by any of this - full question text, every column, no truncation):
 *  - Question columns use short "Q1..Qn" codes instead of the full question
 *    text (a full sentence wrapped into a ~25pt-wide column runs to dozens
 *    of lines). A one-time legend page maps the codes back to full text.
 *  - Per-section remarks/comment fields are dropped, keeping only the
 *    form's one closing overall-comment field - repeating the same kind of
 *    free-text answer across 5+ columns is what mainly blew up row height.
 *  - That one remaining comment column gets real column width and a
 *    generous character cap (COMMENT_CHAR_LIMIT); every other column
 *    (ratings and short informational fields like "Period Covered") stays
 *    pencil-thin, capped at INFO_TEXT_CHAR_LIMIT.
 */
const REMARKS_LIKE_PATTERN = /remarks|comment/i;

export function exportRawResponsesAsPDF(responses: SurveyResponse[], surveyType: SurveyType, filenameBase: string) {
  const typeResponses = responses.filter((r) => r.surveyType === surveyType);
  const allQuestionColumns = collectQuestionColumns(typeResponses);
  const tables = buildRawResponseExportTables(responses, surveyType);

  // Per-section remarks/comment fields (e.g. "Delivery Remarks", "Please
  // provide any additional comments on Security and safety.") repeat the
  // same kind of free-text answer many times over - each one needs real
  // column width to avoid wrapping into a dozen+ lines, which is what was
  // blowing the per-company page count past "1-2 pages". So the PDF keeps
  // only the form's closing overall-comment field and drops the rest;
  // informational text fields ("Period Covered", "Project Name", etc.)
  // don't match the remarks/comment wording and are always kept.
  const lastTextIndex = allQuestionColumns.reduce((lastIdx, q, i) => (q.isText ? i : lastIdx), -1);
  const keepFlags = allQuestionColumns.map(
    (q, i) => !(q.isText && i !== lastTextIndex && REMARKS_LIKE_PATTERN.test(q.question))
  );
  const questionColumns = allQuestionColumns.filter((_, i) => keepFlags[i]);
  // Among the (few) text columns still kept, only the very last one is the
  // form's closing free-form comment - that's the one column worth real
  // width. Short informational fields like "Period Covered" only ever hold
  // a couple of words and get the same pencil-thin treatment as ratings;
  // giving them an even share alongside the real comment column (as an
  // earlier version of this did) starved the comment column for room while
  // leaving these short fields absurdly wide for their actual content.
  const lastKeptTextIndex = questionColumns.reduce((lastIdx, q, i) => (q.isText ? i : lastIdx), -1);
  const questionMeta = questionColumns.map((q, i) => ({
    label: `Q${i + 1}`,
    isText: q.isText,
    isOverallComment: q.isText && i === lastKeptTextIndex,
  }));

  // 8.5 x 13in (Folio/Long) in points, landscape.
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: [612, 936] });
  const marginLeft = 24;
  const marginRight = 24;
  const headerHeight = 58;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usableWidth = pageWidth - marginLeft - marginRight;

  // --- Page 1: question key, mapping each short "Qn" code to its full text.
  doc.setFontSize(16);
  doc.setTextColor(0, 99, 169);
  doc.setFont('helvetica', 'bold');
  doc.text(`${surveyType} Raw Data Export - Question Key`, marginLeft, 34);
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.setFont('helvetica', 'normal');
  doc.text('Column codes used on every company sheet in this document map to the questions below. Free-text answers are truncated on those sheets to keep the page count down - see the Excel/CSV export for full remarks.', marginLeft, 50, { maxWidth: usableWidth });

  let legendY = 74;
  const legendLineHeight = 10;
  doc.setFontSize(8);
  questionColumns.forEach((q, i) => {
    const lines = doc.splitTextToSize(`Q${i + 1}. ${q.question}`, usableWidth);
    if (legendY + lines.length * legendLineHeight > pageHeight - 30) {
      doc.addPage();
      legendY = 34;
    }
    doc.setTextColor(20, 20, 20);
    doc.text(lines, marginLeft, legendY);
    legendY += lines.length * legendLineHeight + 4;
  });

  // Metadata columns (ID, Date, Email, Designation, Department) get fixed
  // widths; Company Name is dropped here since the page heading already
  // names the company for every row on the sheet. Rating columns and short
  // informational text columns both stay pencil-thin; every bit of width
  // left over goes to the single overall-comment column.
  const metaHeaders = ['ID', 'Date', 'Email', 'Designation', 'Department'];
  const metaWidths = [16, 42, 78, 48, 46];
  // Wide enough that a 3-char header ("Q10"+, once there are 10+ kept
  // columns) still fits on one line instead of wrapping to "Q1" / "0".
  const ratingColWidth = 18;
  const infoTextColWidth = 44;
  const hasOverallComment = questionMeta.some((q) => q.isOverallComment);
  const usedByNarrowCols = metaWidths.reduce((a, b) => a + b, 0)
    + questionMeta.filter((q) => !q.isText).length * ratingColWidth
    + questionMeta.filter((q) => q.isText && !q.isOverallComment).length * infoTextColWidth;
  const overallCommentWidth = hasOverallComment ? Math.max(140, usableWidth - usedByNarrowCols) : 0;

  const columnStyles: Record<number, { cellWidth: number }> = {};
  metaWidths.forEach((w, i) => { columnStyles[i] = { cellWidth: w }; });
  questionMeta.forEach((q, i) => {
    const width = q.isOverallComment ? overallCommentWidth : q.isText ? infoTextColWidth : ratingColWidth;
    columnStyles[metaWidths.length + i] = { cellWidth: width };
  });

  const shortHeaders = [...metaHeaders, ...questionMeta.map((q) => q.label)];

  tables.forEach((table) => {
    doc.addPage();

    const bodyRows = table.rows.map((row) => {
      // row = [ID, Submission Date, Email, Designation, Department, Company Name, ...answers]
      const [id, submissionDate, email, designation, department, , ...answers] = row;
      const dateOnly = String(submissionDate).split(',')[0];
      const keptAnswers = answers.filter((_, i) => keepFlags[i]);
      return [
        id,
        dateOnly,
        email,
        designation,
        department,
        ...keptAnswers.map((value, i) => {
          const str = String(value);
          if (!questionMeta[i].isText) return str;
          return truncateForPrint(str, questionMeta[i].isOverallComment ? COMMENT_CHAR_LIMIT : INFO_TEXT_CHAR_LIMIT);
        }),
      ];
    });

    autoTable(doc, {
      startY: headerHeight,
      head: [shortHeaders],
      body: bodyRows,
      margin: { top: headerHeight, left: marginLeft, right: marginRight, bottom: 28 },
      styles: { fontSize: 7, cellPadding: 2, overflow: 'linebreak', valign: 'middle' },
      headStyles: { fillColor: [0, 99, 169], textColor: 255, fontStyle: 'bold', fontSize: 7, halign: 'center' },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      columnStyles,
      theme: 'grid',
      // Redrawn on every page this company's table spans, so the company
      // name/subtitle stays visible even if the table overflows to a 2nd page.
      didDrawPage: () => {
        doc.setFontSize(14);
        doc.setTextColor(0, 99, 169);
        doc.setFont('helvetica', 'bold');
        doc.text(table.title, marginLeft, 26);

        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.setFont('helvetica', 'normal');
        doc.text(
          `${surveyType} - Raw Evaluation Submissions - ${table.rows.length} respondent(s) - Generated ${new Date().toLocaleString()} - see Question Key on page 1`,
          marginLeft,
          40
        );
      },
    });
  });

  const pageCount = (doc as unknown as { internal: { getNumberOfPages: () => number } }).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(
      `Page ${i} of ${pageCount} - Microgenesis Supplier Management System`,
      marginLeft,
      pageHeight - 14
    );
  }

  const filename = `${filenameBase}_${timestamp()}.pdf`;
  doc.save(filename);
  logExport({ title: `Raw Data Export (${surveyType})`, format: 'pdf', filename });
}
