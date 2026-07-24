import * as XLSX from 'xlsx';
import { PartnerCompany, Rating, SurveyResponse, SurveyType } from '../types/survey';
import { normalizeCompanyName, nameSimilarity } from './masterListImport';

// Parses the raw Microsoft Forms exports for the three official MBS
// evaluation forms (20-002 Form 2/3/4) directly into SurveyResponse rows,
// using the exact same questionId scheme (Q-SUP-xx / Q-CON-xx / Q-SUB-xx-y)
// and matrix-remark convention that SurveyFillerPage produces for a live
// submission - see questionWeights.ts's ID_MAPPING for how these canonicalize
// into the Qxx ids the scoring engine actually keys off of.

type RatingColumn = {
  kind: 'rating';
  col: number;
  questionId: string;
  questionNumber: number;
  question: string;
  questionCategory: string;
};

type TextColumn = {
  kind: 'text';
  col: number;
  questionId: string;
  questionNumber: number;
  question: string;
  questionCategory: string;
};

// Subcontractor-only: a shared remarks column that attaches its text as the
// `comment` on the matrix sub-question rows already built for this row,
// instead of producing its own response row (mirrors SurveyFillerPage, where
// a matrix question's comment textarea is shared across all its subQuestions).
type MatrixRemarkColumn = {
  kind: 'matrix-remark';
  col: number;
  appliesTo: string[];
};

type ColumnDef = RatingColumn | TextColumn | MatrixRemarkColumn;

interface FormSpec {
  surveyType: SurveyType;
  idCol: number;
  startTimeCol: number;
  completionTimeCol: number;
  emailCol: number;
  designationCol?: number;
  departmentCol?: number;
  nameCol: number;
  addressCol?: number;
  headerAnchor: { col: number; text: string };
  columns: ColumnDef[];
}

const FORM_SPECS: Record<SurveyType, FormSpec> = {
  Supplier: {
    surveyType: 'Supplier',
    idCol: 0,
    startTimeCol: 1,
    completionTimeCol: 2,
    emailCol: 3,
    designationCol: 6,
    departmentCol: 7,
    nameCol: 8,
    headerAnchor: { col: 8, text: 'Supplier Name' },
    columns: [
      { kind: 'text', col: 9, questionId: 'Q-SUP-03', questionNumber: 1, question: 'Period Covered', questionCategory: 'General' },
      { kind: 'rating', col: 10, questionId: 'Q-SUP-05', questionNumber: 2, question: 'Does the supplier use the correct documents to facilitate the delivery of sale transaction? (BIR Registered, DR, SI/BS, OR/CR)', questionCategory: 'Documentation' },
      { kind: 'rating', col: 11, questionId: 'Q-SUP-06', questionNumber: 3, question: 'Are the required documents complete for every transaction?', questionCategory: 'Documentation' },
      { kind: 'rating', col: 12, questionId: 'Q-SUP-07', questionNumber: 4, question: 'Are documents clean, neat and readable?', questionCategory: 'Documentation' },
      { kind: 'rating', col: 13, questionId: 'Q-SUP-08', questionNumber: 5, question: 'Are documents presented/submitted upon delivery?', questionCategory: 'Documentation' },
      { kind: 'rating', col: 14, questionId: 'Q-SUP-09', questionNumber: 6, question: 'Are documents presented/submitted upon payments?', questionCategory: 'Documentation' },
      { kind: 'text', col: 15, questionId: 'Q-SUP-10', questionNumber: 7, question: 'Documentation Remarks', questionCategory: 'Documentation' },
      { kind: 'rating', col: 16, questionId: 'Q-SUP-11', questionNumber: 8, question: 'Does the supplier deliver the product on time based on the agreed schedule?', questionCategory: 'Delivery' },
      { kind: 'rating', col: 17, questionId: 'Q-SUP-12', questionNumber: 9, question: 'Does the supplier deliver the product in proper packaging and in good condition?', questionCategory: 'Delivery' },
      { kind: 'rating', col: 18, questionId: 'Q-SUP-13', questionNumber: 10, question: 'Does the supplier deliver the products sealed and safe and free for possible contamination?', questionCategory: 'Delivery' },
      { kind: 'text', col: 19, questionId: 'Q-SUP-14', questionNumber: 11, question: 'Delivery Remarks', questionCategory: 'Delivery' },
      { kind: 'rating', col: 20, questionId: 'Q-SUP-15', questionNumber: 12, question: 'Does the supplier change the price without any notice to MBS Procurement/BSM?', questionCategory: 'Price' },
      { kind: 'rating', col: 21, questionId: 'Q-SUP-16', questionNumber: 13, question: 'Is the supplier open for negotiation in terms of price?', questionCategory: 'Price' },
      { kind: 'rating', col: 22, questionId: 'Q-SUP-17', questionNumber: 14, question: 'Is the supplier pricing competitive with other suppliers?', questionCategory: 'Price' },
      { kind: 'text', col: 23, questionId: 'Q-SUP-18', questionNumber: 15, question: 'Price/Cost Effectiveness Remarks', questionCategory: 'Price' },
      { kind: 'rating', col: 24, questionId: 'Q-SUP-19', questionNumber: 16, question: 'Does the supplier deliver the product with good quality?', questionCategory: 'Quality' },
      { kind: 'rating', col: 25, questionId: 'Q-SUP-20', questionNumber: 17, question: 'Does the supplier take immediate action for defective product upon delivery/RMA?', questionCategory: 'Quality' },
      { kind: 'rating', col: 26, questionId: 'Q-SUP-21', questionNumber: 18, question: 'Does the supplier replace the defective product immediately?', questionCategory: 'Quality' },
      { kind: 'text', col: 27, questionId: 'Q-SUP-22', questionNumber: 19, question: 'Quality Remarks', questionCategory: 'Quality' },
      { kind: 'rating', col: 28, questionId: 'Q-SUP-23', questionNumber: 20, question: 'Do supplier responsive and easy to contact?', questionCategory: 'Communication' },
      { kind: 'rating', col: 29, questionId: 'Q-SUP-24', questionNumber: 21, question: 'Does the supplier proactively communicate to MBS Representatives in terms of any discrepancy or changes in transaction?', questionCategory: 'Communication' },
      { kind: 'rating', col: 30, questionId: 'Q-SUP-25', questionNumber: 22, question: 'Does the supplier proactively communicate to MBS Representatives fact-based concern on product/technology?', questionCategory: 'Communication' },
      { kind: 'text', col: 31, questionId: 'Q-SUP-26', questionNumber: 23, question: 'Communication Remarks', questionCategory: 'Communication' },
    ],
  },
  Courier: {
    surveyType: 'Courier',
    idCol: 0,
    startTimeCol: 1,
    completionTimeCol: 2,
    emailCol: 3,
    nameCol: 6,
    addressCol: 7,
    headerAnchor: { col: 6, text: 'Courier Name' },
    columns: [
      { kind: 'text', col: 8, questionId: 'Q-CON-03', questionNumber: 1, question: 'Period Covered', questionCategory: 'General' },
      { kind: 'rating', col: 9, questionId: 'Q-CON-04', questionNumber: 2, question: 'Does the courier consistently deliver our goods to our customers on the agreed date or period?', questionCategory: 'Delivery' },
      { kind: 'rating', col: 10, questionId: 'Q-CON-05', questionNumber: 5, question: 'Does the courier service maintain a consistent level of acceptable service over time?', questionCategory: 'Delivery' },
      { kind: 'text', col: 11, questionId: 'Q-CON-06', questionNumber: 6, question: 'Please provide any additional comments on Reliability and Delivery performance.', questionCategory: 'Delivery' },
      { kind: 'rating', col: 12, questionId: 'Q-CON-07', questionNumber: 7, question: "Are the courier's rates competitive and transparent?", questionCategory: 'Commercial' },
      { kind: 'rating', col: 13, questionId: 'Q-CON-08', questionNumber: 8, question: 'Are there any hidden fees or surcharges?', questionCategory: 'Commercial' },
      { kind: 'rating', col: 14, questionId: 'Q-CON-09', questionNumber: 9, question: 'Are they offering flexible payment options, e.g., credit cards or invoicing, and payment credit line?', questionCategory: 'Commercial' },
      { kind: 'text', col: 15, questionId: 'Q-CON-10', questionNumber: 10, question: 'Please provide any additional comments on Cost and pricing.', questionCategory: 'Commercial' },
      { kind: 'rating', col: 16, questionId: 'Q-CON-11', questionNumber: 11, question: 'Do they have advanced tracking systems allowing customers for real-time monitoring of the status and location of their packages?', questionCategory: 'Technology' },
      { kind: 'rating', col: 17, questionId: 'Q-CON-12', questionNumber: 12, question: 'Do they have online platforms and mobile apps provided to customers to schedule pickups, make payments, and arrange deliveries?', questionCategory: 'Technology' },
      { kind: 'text', col: 18, questionId: 'Q-CON-13', questionNumber: 13, question: 'Please provide any additional comments on Technology and online tools.', questionCategory: 'Technology' },
      { kind: 'rating', col: 19, questionId: 'Q-CON-14', questionNumber: 14, question: 'Do they have a helpful and responsive customer support team?', questionCategory: 'Support' },
      { kind: 'rating', col: 20, questionId: 'Q-CON-15', questionNumber: 15, question: "Do they effectively handle the customer's issues, and complaints, e.g., lost shipment, item, defective items?", questionCategory: 'Support' },
      { kind: 'rating', col: 21, questionId: 'Q-CON-16', questionNumber: 16, question: 'Does the courier have a prompt payment process in case of mishandled goods, e.g., broken or missing goods?', questionCategory: 'Support' },
      { kind: 'text', col: 22, questionId: 'Q-CON-17', questionNumber: 17, question: 'Please provide any additional comments on Customer Service and support.', questionCategory: 'Support' },
      { kind: 'rating', col: 23, questionId: 'Q-CON-18', questionNumber: 18, question: "Do they ensure the safety and security of our packages/parcels during transit and delivery to the client's site?", questionCategory: 'Security' },
      { kind: 'rating', col: 24, questionId: 'Q-CON-19', questionNumber: 19, question: 'Do they include insurance options to cover potential loss or damage to our items?', questionCategory: 'Security' },
      { kind: 'text', col: 25, questionId: 'Q-CON-20', questionNumber: 20, question: 'Please provide any additional comments on Security and safety.', questionCategory: 'Security' },
    ],
  },
  Subcontractor: {
    surveyType: 'Subcontractor',
    idCol: 0,
    startTimeCol: 1,
    completionTimeCol: 2,
    emailCol: 3,
    designationCol: 6,
    departmentCol: 7,
    nameCol: 8,
    headerAnchor: { col: 8, text: 'Subcontractor Name' },
    columns: [
      { kind: 'text', col: 9, questionId: 'Q-SUB-01', questionNumber: 1, question: 'Project Name', questionCategory: 'General' },
      { kind: 'text', col: 10, questionId: 'Q-SUB-02', questionNumber: 2, question: 'Products or Services', questionCategory: 'General' },
      { kind: 'text', col: 11, questionId: 'Q-SUB-03', questionNumber: 3, question: 'Project Duration', questionCategory: 'General' },

      { kind: 'rating', col: 12, questionId: 'Q-SUB-04-a', questionNumber: 4, question: "Delivery / Project Timeliness - Except for circumstances beyond the subcontractor's control, tasks and deliverables were completed on time or ahead of the schedule in the contact.", questionCategory: 'Delivery' },
      { kind: 'rating', col: 13, questionId: 'Q-SUB-04-b', questionNumber: 4.1, question: 'Delivery / Project Timeliness - Delivers and use all resources required to the project and turnover all excess materials to MBS Project Manager.', questionCategory: 'Delivery' },
      { kind: 'matrix-remark', col: 14, appliesTo: ['Q-SUB-04-a', 'Q-SUB-04-b'] },

      { kind: 'rating', col: 15, questionId: 'Q-SUB-06-a', questionNumber: 6, question: "Documentation / Invoicing - The subcontractor's invoices/billing were correct, accurate and contained all information of references.", questionCategory: 'Documentation' },
      { kind: 'rating', col: 16, questionId: 'Q-SUB-06-b', questionNumber: 6.1, question: 'Documentation / Invoicing - All required documents are submitted on time or within the time frames of agreement e.g. Service report, billing, COC, etc.', questionCategory: 'Documentation' },
      { kind: 'rating', col: 17, questionId: 'Q-SUB-06-c', questionNumber: 6.2, question: 'Documentation / Invoicing - The proposal provides a clear breakdown matched with what MBS requires.', questionCategory: 'Documentation' },
      { kind: 'matrix-remark', col: 18, appliesTo: ['Q-SUB-06-a', 'Q-SUB-06-b', 'Q-SUB-06-c'] },

      { kind: 'rating', col: 19, questionId: 'Q-SUB-08-a', questionNumber: 8, question: 'Cost Control / Pricing - Give competitive prices, discount, and reasonable prices.', questionCategory: 'Cost' },
      { kind: 'rating', col: 20, questionId: 'Q-SUB-08-b', questionNumber: 8.1, question: 'Cost Control / Pricing - Request for change of orders for additional works/cost ONLY outside the scope of contract.', questionCategory: 'Cost' },
      { kind: 'rating', col: 21, questionId: 'Q-SUB-08-c', questionNumber: 8.2, question: 'Cost Control / Pricing - Indication that the subcontractor has financial problem which cannot meet the terms and conditions stated in contract.', questionCategory: 'Cost' },
      { kind: 'matrix-remark', col: 22, appliesTo: ['Q-SUB-08-a', 'Q-SUB-08-b', 'Q-SUB-08-c'] },

      { kind: 'rating', col: 23, questionId: 'Q-SUB-10-a', questionNumber: 10, question: 'Quality and Technical Competence - The Subcontractor work products complied with the contract, PO scope of work, rules and applicable program guidance.', questionCategory: 'Quality' },
      { kind: 'rating', col: 24, questionId: 'Q-SUB-10-b', questionNumber: 10.1, question: 'Quality and Technical Competence - The subcontractor performed site assessment tasks efficiently and effectively, proposed cost-effective changes in scope, provided an accurate summary and proposed cost-effective recommendations for future work and course of action.', questionCategory: 'Quality' },
      { kind: 'rating', col: 25, questionId: 'Q-SUB-10-c', questionNumber: 10.2, question: 'Quality and Technical Competence - The subcontractor proposed appropriate changes to monitoring points, parameters, and or frequency based on changing site conditions.', questionCategory: 'Quality' },
      { kind: 'rating', col: 26, questionId: 'Q-SUB-10-d', questionNumber: 10.3, question: 'Quality and Technical Competence - The remedial action plan adequately and cost-effectively addressed the site conditions.', questionCategory: 'Quality' },
      { kind: 'rating', col: 27, questionId: 'Q-SUB-10-e', questionNumber: 10.4, question: 'Quality and Technical Competence - The subcontractor initiates Certificate of Completion when the project has been done.', questionCategory: 'Quality' },
      { kind: 'matrix-remark', col: 28, appliesTo: ['Q-SUB-10-a', 'Q-SUB-10-b', 'Q-SUB-10-c', 'Q-SUB-10-d', 'Q-SUB-10-e'] },

      { kind: 'rating', col: 29, questionId: 'Q-SUB-12-a', questionNumber: 12, question: 'Communication - The subcontractor communicated and proposed solutions of project changes, problems, delays and issues to MBS representative as they occurred and ahead of deadlines.', questionCategory: 'Communication' },
      { kind: 'rating', col: 30, questionId: 'Q-SUB-12-b', questionNumber: 12.1, question: 'Communication - The subcontractor responded within a reasonable time frame to telephone messages and emails from MBS representative.', questionCategory: 'Communication' },
      { kind: 'rating', col: 31, questionId: 'Q-SUB-12-c', questionNumber: 12.2, question: 'Communication - The subcontractor is professional in their approach, provide assistance whenever needed, courteous and polite.', questionCategory: 'Communication' },
      { kind: 'matrix-remark', col: 32, appliesTo: ['Q-SUB-12-a', 'Q-SUB-12-b', 'Q-SUB-12-c'] },
    ],
  },
};

function textCell(raw: unknown): string {
  if (raw === null || raw === undefined) return '';
  return String(raw).trim();
}

function parseRatingCell(raw: unknown): Rating {
  const str = textCell(raw);
  if (!str) return 'N/A';
  if (/^n\/?a\b/i.test(str)) return 'N/A';
  const num = Number(str);
  return Number.isFinite(num) ? num : 'N/A';
}

function toIso(raw: unknown): string | null {
  if (raw instanceof Date && !Number.isNaN(raw.getTime())) return raw.toISOString();
  const str = textCell(raw);
  if (!str) return null;
  const parsed = new Date(str);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

type ResponseBase = Pick<
  SurveyResponse,
  'responseId' | 'surveyType' | 'respondentType' | 'submissionDate' | 'company' | 'department' | 'address' | 'respondentEmail'
>;

function buildRowResponses(cells: unknown[], spec: FormSpec, base: ResponseBase): SurveyResponse[] {
  const byId = new Map<string, SurveyResponse>();
  const order: string[] = [];

  for (const col of spec.columns) {
    if (col.kind === 'matrix-remark') {
      const remark = textCell(cells[col.col]);
      if (!remark) continue;
      col.appliesTo.forEach((qid) => {
        const target = byId.get(qid);
        if (target) target.comment = remark;
      });
      continue;
    }

    const response: SurveyResponse = {
      ...base,
      questionId: col.questionId,
      questionNumber: col.questionNumber,
      question: col.question,
      questionCategory: col.questionCategory,
      rating: col.kind === 'rating' ? parseRatingCell(cells[col.col]) : 'N/A',
      comment: col.kind === 'text' ? textCell(cells[col.col]) : '',
    };
    byId.set(col.questionId, response);
    order.push(col.questionId);
  }

  return order.map((id) => byId.get(id)!);
}

// A company match is resolved against the FULL registry (every type, active
// or archived) rather than only companies already classified as this
// surveyType. A perfect name match sitting in the registry as "Uncategorized"
// and archived (typically because the Master List's own Category column was
// left blank for that row) is still the same real company - it just needs
// its classification fixed in Partner Companies, not a brand new record. So
// "matched" means "found under any classification"; "needs-reclassification"
// flags the classification mismatch for the admin instead of silently
// creating a duplicate company or discarding the response.
export type CompanyMatchStatus =
  | { kind: 'matched'; canonicalName: string }
  | { kind: 'needs-reclassification'; canonicalName: string; currentType: PartnerCompany['type']; isArchived: boolean }
  | { kind: 'unmatched' };

function resolveCompanyMatch(rawName: string, surveyType: SurveyType, allCompanies: PartnerCompany[], threshold = 0.82): CompanyMatchStatus {
  const trimmed = rawName.trim();
  if (!trimmed) return { kind: 'unmatched' };

  const exact = allCompanies.find((c) => c.name.trim().toLowerCase() === trimmed.toLowerCase());
  let best: { company: PartnerCompany; score: number } | undefined = exact ? { company: exact, score: 1 } : undefined;

  if (!best) {
    const normTarget = normalizeCompanyName(trimmed);
    for (const candidate of allCompanies) {
      const score = nameSimilarity(normTarget, normalizeCompanyName(candidate.name));
      if (!best || score > best.score) best = { company: candidate, score };
    }
    if (!best || best.score < threshold) return { kind: 'unmatched' };
  }

  const company = best.company;
  if (company.type === surveyType && !company.isArchived) {
    return { kind: 'matched', canonicalName: company.name };
  }
  return { kind: 'needs-reclassification', canonicalName: company.name, currentType: company.type, isArchived: !!company.isArchived };
}

export interface RawEvalAccountProfile {
  email: string;
  designation: string;
  department: string;
}

export interface ReclassificationNotice {
  canonicalName: string;
  currentType: PartnerCompany['type'];
  isArchived: boolean;
}

export interface CompanyMatchInfo {
  rawName: string;
  normalizedName: string;
  status: CompanyMatchStatus['kind'];
  canonicalName?: string;
  currentType?: PartnerCompany['type'];
  isArchived?: boolean;
}

interface ParsedRow {
  cells: unknown[];
  rawCompany: string;
  normalizedCompany: string;
  responseId: string;
  submissionDate: string;
  respondentType: string;
  department: string;
  address?: string;
  respondentEmail?: string;
}

export interface RawEvalPreview {
  surveyType: SurveyType;
  fileName: string;
  totalRows: number;
  skippedBlank: number;
  missingRespondentInfo: number;
  dateRange?: { earliest: string; latest: string };
  /** One entry per distinct company name found in the file. */
  companyMatches: CompanyMatchInfo[];
  /** Parsed row data, opaque to callers - pass back unchanged to commitRawEvaluationImport. */
  rows: ParsedRow[];
}

export type CompanyDecision = 'skip' | 'add-as-partner';

export interface RawEvalImportSummary {
  surveyType: SurveyType;
  fileName: string;
  totalRows: number;
  imported: number;
  skippedBlank: number;
  skippedByDecision: number;
  replaced: number;
  dateRange?: { earliest: string; latest: string };
  missingRespondentInfo: number;
  needsReclassification: ReclassificationNotice[];
  addedCompanies: string[];
  skippedCompanies: string[];
}

export interface RawEvalCommitResult {
  responses: SurveyResponse[];
  newPartnerCompanies: PartnerCompany[];
  summary: RawEvalImportSummary;
}

export async function previewRawEvaluationImport(
  file: File,
  surveyType: SurveyType,
  partnerCompanies: PartnerCompany[],
  accounts: RawEvalAccountProfile[] = []
): Promise<RawEvalPreview> {
  const spec = FORM_SPECS[surveyType];
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array', cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  if (!sheet) throw new Error('The uploaded file has no sheets.');

  const rawRows: unknown[][] = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  if (rawRows.length === 0) throw new Error('The uploaded file has no rows.');

  const header = rawRows[0];
  const anchorText = textCell(header[spec.headerAnchor.col]).replace(/\s+/g, ' ');
  if (!anchorText.toLowerCase().includes(spec.headerAnchor.text.toLowerCase())) {
    const colLetter = XLSX.utils.encode_col(spec.headerAnchor.col);
    throw new Error(
      `This doesn't look like the ${surveyType} Evaluation Form export - expected column ${colLetter} to contain "${spec.headerAnchor.text}".`
    );
  }

  const emailProfile = new Map(accounts.map((a) => [a.email.trim().toLowerCase(), a]));
  const matchByNormalized = new Map<string, CompanyMatchInfo>();
  const rows: ParsedRow[] = [];

  let skippedBlank = 0;
  let missingRespondentInfo = 0;
  let earliest: string | undefined;
  let latest: string | undefined;

  rawRows.slice(1).forEach((cells, i) => {
    const sourceRow = i + 2;
    const rawCompany = textCell(cells[spec.nameCol]);
    if (!rawCompany) {
      skippedBlank += 1;
      return;
    }

    const excelId = textCell(cells[spec.idCol]) || String(sourceRow);
    const responseId = `IMPORT-${surveyType.toUpperCase()}-${excelId}`;

    const submissionDate =
      toIso(cells[spec.completionTimeCol]) ?? toIso(cells[spec.startTimeCol]) ?? new Date().toISOString();
    if (!earliest || submissionDate < earliest) earliest = submissionDate;
    if (!latest || submissionDate > latest) latest = submissionDate;

    const normalizedCompany = normalizeCompanyName(rawCompany);
    if (!matchByNormalized.has(normalizedCompany)) {
      const match = resolveCompanyMatch(rawCompany, surveyType, partnerCompanies);
      matchByNormalized.set(normalizedCompany, {
        rawName: rawCompany,
        normalizedName: normalizedCompany,
        status: match.kind,
        canonicalName: match.kind !== 'unmatched' ? match.canonicalName : undefined,
        currentType: match.kind === 'needs-reclassification' ? match.currentType : undefined,
        isArchived: match.kind === 'needs-reclassification' ? match.isArchived : undefined,
      });
    }

    const email = textCell(cells[spec.emailCol]);
    const profile = emailProfile.get(email.trim().toLowerCase());

    let respondentType = spec.designationCol !== undefined ? textCell(cells[spec.designationCol]) : '';
    let department = spec.departmentCol !== undefined ? textCell(cells[spec.departmentCol]) : '';
    if (!respondentType && profile) respondentType = profile.designation;
    if (!department && profile) department = profile.department;
    if (!respondentType) {
      respondentType = 'Unspecified';
      missingRespondentInfo += 1;
    }
    if (!department) department = 'Unspecified';

    const address = spec.addressCol !== undefined ? textCell(cells[spec.addressCol]) || undefined : undefined;

    rows.push({
      cells,
      rawCompany,
      normalizedCompany,
      responseId,
      submissionDate,
      respondentType,
      department,
      address,
      respondentEmail: email || undefined,
    });
  });

  return {
    surveyType,
    fileName: file.name,
    totalRows: rawRows.length - 1,
    skippedBlank,
    missingRespondentInfo,
    dateRange: earliest && latest ? { earliest, latest } : undefined,
    companyMatches: [...matchByNormalized.values()],
    rows,
  };
}

/**
 * Applies the admin's per-company skip/add-as-partner decisions (only needed
 * for companies preview flagged "unmatched") and produces the final response
 * rows. Safe to call with an empty decisions map when nothing was unmatched.
 */
export function commitRawEvaluationImport(preview: RawEvalPreview, decisions: Record<string, CompanyDecision> = {}): RawEvalCommitResult {
  const spec = FORM_SPECS[preview.surveyType];
  const matchByNormalized = new Map(preview.companyMatches.map((m) => [m.normalizedName, m]));

  const needsReclassification: ReclassificationNotice[] = preview.companyMatches
    .filter((m) => m.status === 'needs-reclassification')
    .map((m) => ({ canonicalName: m.canonicalName!, currentType: m.currentType!, isArchived: !!m.isArchived }));

  const newCompanyByNormalized = new Map<string, PartnerCompany>();
  const skippedNames: string[] = [];
  let skippedByDecision = 0;

  const responses: SurveyResponse[] = [];

  for (const row of preview.rows) {
    const match = matchByNormalized.get(row.normalizedCompany);
    let company: string;

    if (!match || match.status === 'unmatched') {
      const decision = decisions[row.normalizedCompany] ?? 'skip';
      if (decision === 'skip') {
        skippedByDecision += 1;
        if (!skippedNames.includes(row.rawCompany)) skippedNames.push(row.rawCompany);
        continue;
      }
      company = row.rawCompany;
      if (!newCompanyByNormalized.has(row.normalizedCompany)) {
        const now = new Date().toISOString();
        const id = `pc-import-raw-${row.normalizedCompany.toLowerCase().replace(/\s+/g, '-').slice(0, 60)}-${Date.now()}-${newCompanyByNormalized.size}`;
        newCompanyByNormalized.set(row.normalizedCompany, {
          id,
          name: row.rawCompany,
          type: preview.surveyType,
          createdAt: now,
          isArchived: false,
          accreditationStatus: 'Unaccredited',
          branches: [{ id: `${id}-branch-1`, bpCode: '' }],
        });
      }
    } else {
      company = match.canonicalName!;
    }

    const base: ResponseBase = {
      responseId: row.responseId,
      surveyType: preview.surveyType,
      respondentType: row.respondentType,
      submissionDate: row.submissionDate,
      company,
      department: row.department,
      address: row.address,
      respondentEmail: row.respondentEmail,
    };

    responses.push(...buildRowResponses(row.cells, spec, base));
  }

  const importedSubmissions = new Set(responses.map((r) => r.responseId)).size;

  return {
    responses,
    newPartnerCompanies: [...newCompanyByNormalized.values()],
    summary: {
      surveyType: preview.surveyType,
      fileName: preview.fileName,
      totalRows: preview.totalRows,
      imported: importedSubmissions,
      skippedBlank: preview.skippedBlank,
      skippedByDecision,
      replaced: 0,
      dateRange: preview.dateRange,
      missingRespondentInfo: preview.missingRespondentInfo,
      needsReclassification,
      addedCompanies: [...newCompanyByNormalized.values()].map((c) => c.name),
      skippedCompanies: skippedNames,
    },
  };
}
