export type SurveyType = 'Courier' | 'Supplier' | 'Subcontractor';
export type Rating = number | 'N/A';
export type SurveyAccessRole = 'Rank & File' | 'Supervisory' | 'Managerial' | 'Director' | 'Executive';

// A PartnerCompany's type widens SurveyType with 'Uncategorized' — the state
// for master-list rows imported with no accreditation category. Uncategorized
// companies are excluded from survey eligibility (survey assignment already
// filters by SurveyType) until someone manually classifies them.
export type PartnerCompanyType = SurveyType | 'Uncategorized';

// Only meaningful when type === 'Supplier'.
export type SupplierOrigin = 'Local' | 'Foreign';

export type AccreditationStatus = 'Accredited' | 'Unaccredited';

// Computed live from expiryDate at render time — never persisted as the
// source of truth, since "today" changes what these mean.
export type DocumentStatus = 'Current' | 'Expiring Soon' | 'Expired' | 'Missing';

export type BranchStatus = 'Complete' | 'Incomplete' | 'Outdated';

export interface ComplianceDocument {
  provided?: boolean;
  expiryDate?: string;
  // status/daysLeft are derived from expiryDate; they may be present on
  // imported rows as a snapshot, but UI should recompute rather than trust
  // a stale value.
  status?: DocumentStatus;
  daysLeft?: number;
}

// One per BP Code / accreditation entry. A company almost always has exactly
// one branch, but a handful of companies have separate normal and "-NT" BP
// Codes that merge onto the same PartnerCompany as distinct branches.
export interface BranchRecord {
  id: string;
  bpCode: string;
  address?: string;
  federalTaxId?: string;
  industry?: string;
  contactPerson?: string;
  position?: string;
  mobilePhone?: string;
  email?: string;
  // Original category string as it appeared in the source sheet, e.g.
  // "Supplier-Foreign-NT", kept for audit even after being normalized into
  // the parent company's type/supplierOrigin.
  rawCategory?: string;
  supplierRank?: string;
  dateAccredited?: string;
  status?: BranchStatus;
  // Original sheet row number, for tracing an imported branch back to source.
  sourceRow?: number;
  documents?: Record<string, ComplianceDocument>;
}

export interface PartnerCompany {
  id: string;
  name: string;
  type: PartnerCompanyType;
  supplierOrigin?: SupplierOrigin;
  email?: string;
  affiliation?: string;
  createdAt: string;
  registeredAt?: string;
  renewedAt?: string;
  expirationDate?: string;
  reminderFirstThresholdMonths?: number;
  reminderFrequency?: 'daily' | 'weekly' | 'none';
  isArchived?: boolean;
  accreditationStatus?: AccreditationStatus;
  // 1..n; almost always 1. Absent/empty means "not yet migrated" — callers
  // should treat that the same as a single minimal branch.
  branches?: BranchRecord[];
}

export interface SurveyResponse {
  responseId: string;
  surveyType: SurveyType;
  respondentType: string;
  submissionDate: string;
  company: string;
  department?: string;
  address?: string;
  questionId: string;
  questionNumber: number;
  question: string;
  questionCategory: string;
  rating: Rating;
  comment: string;
  respondentEmail?: string;
  archived?: boolean;
  archivedAt?: string;
  archivedBySurveyId?: string;
  archivedBySurveyTitle?: string;
}

export interface FilterState {
  surveyType: SurveyType[];
  questionId: string;
  rating: 'All' | Rating;
  company: string;
  search: string;
}

export interface QuestionDefinition {
  questionId: string;
  questionNumber: number;
  question: string;
  questionCategory: string;
  surveyTypes: SurveyType[];
}

export interface KpiSummary {
  overallSatisfactionScore: number;
  totalResponses: number;
  averageRating: number;
  naPercentage: number;
  highestRatedQuestion: string;
  lowestRatedQuestion: string;
  maxRating?: number;
}

export interface ResponseNotification {
  id: string;
  company: string;
  surveyType: SurveyType;
  respondentType: string;
  submissionDate: string;
  questionCount: number;
  respondentEmail?: string;
  department?: string;
  designation?: string;
}

export interface CustomForm {
  id: string;
  title: string;
  surveyType: SurveyType;
  description: string;
  createdAt: string;
  deadlineDate?: string;
  status?: 'Running' | 'Paused' | 'Completed' | 'Archived';
  accessDepartments?: string[];
  accessRoles?: SurveyAccessRole[];
  // IDs of PartnerCompany entries this survey should evaluate. Undefined/empty
  // means "all companies of this survey's type" (the default, always kept in
  // sync as companies are added/removed in the Partner Registry). Once an
  // admin customizes the list via "Modify Companies to Evaluate", only the
  // still-existing companies among these IDs are used.
  evaluationCompanyIds?: string[];
  maxRating?: number;
  questions: {
    questionId: string;
    questionNumber: number;
    question: string;
    questionCategory: string;
    inputType?: 'text' | 'rating' | 'typed-rating' | 'select' | 'checkbox' | 'date-range' | 'matrix';
    options?: string[];
    subQuestions?: { id: string; label: string; description?: string; validationRange?: { min: number; max: number; allowNa: boolean } }[];
    validationRange?: { min: number; max: number; allowNa: boolean };
    section?: string;
  }[];
}
