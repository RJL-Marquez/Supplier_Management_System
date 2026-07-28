import { BranchRecord, ComplianceDocument, DocumentStatus, PartnerCompany } from '../types/survey';
import { getRequiredDocumentKeys } from './documentRequirements';

// "Expiring Soon" threshold matches the Master List's own legend (30 days left).
export const EXPIRING_SOON_DAYS = 30;

// AFS doesn't gradually "expire" like a permit - the Master List's own AFS
// Status column (col X) is this exact formula:
//   =IF(YEAR(afsDate)>=YEAR(TODAY())-1,"Current","For Update")
// i.e. the filed fiscal year stays valid through the following year, then
// flips straight to "For Update" - a fiscal-year comparison, not a day count.
const AFS_FISCAL_YEAR_DOCUMENTS = new Set(['AFS']);

function computeAfsFiscalYearStatus(expiryDate: string, referenceDate: Date): 'Current' | 'For Update' {
  const docYear = Number(expiryDate.slice(0, 4));
  const refYear = referenceDate.getFullYear();
  return docYear >= refYear - 1 ? 'Current' : 'For Update';
}

export function daysUntil(dateStr: string, referenceDate: Date = new Date()): number {
  const target = new Date(dateStr + 'T00:00:00');
  const ref = new Date(referenceDate.toISOString().split('T')[0] + 'T00:00:00');
  return Math.round((target.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24));
}

// Always derives status/daysLeft from expiryDate rather than trusting any
// snapshot stored on the document - "today" changes what these mean, so a
// value computed at import time would go stale.
export function computeDocumentStatus(
  doc: Pick<ComplianceDocument, 'provided' | 'expiryDate'>,
  referenceDate: Date = new Date(),
  docName?: string
): { status: DocumentStatus; daysLeft?: number } {
  if (!doc.expiryDate) {
    return { status: doc.provided ? 'Current' : 'Missing' };
  }
  const daysLeft = daysUntil(doc.expiryDate, referenceDate);
  if (docName && AFS_FISCAL_YEAR_DOCUMENTS.has(docName)) {
    return { status: computeAfsFiscalYearStatus(doc.expiryDate, referenceDate), daysLeft };
  }
  if (daysLeft < 0) return { status: 'Expired', daysLeft };
  if (daysLeft <= EXPIRING_SOON_DAYS) return { status: 'Expiring Soon', daysLeft };
  return { status: 'Current', daysLeft };
}

// Company-wide status is never persisted - always rolled up live from the
// documents required for this company's category (Local/Foreign suppliers
// carry expiry-bearing docs; Couriers/Subcontractors only carry the common
// flag checklist, so they can never land in Expired/Expiring Soon here).
export type CompanyDocumentStatus = 'Current' | 'Expiring Soon' | 'Expired';

export interface CompanyDocumentSummary {
  status: CompanyDocumentStatus;
  expiredCount: number;
  expiringSoonCount: number;
  missingCount: number;
  totalRequired: number;
}

export function computeCompanyDocumentSummary(
  company: Pick<PartnerCompany, 'type' | 'supplierOrigin' | 'branches'>,
  referenceDate: Date = new Date()
): CompanyDocumentSummary {
  const requiredKeys = getRequiredDocumentKeys(company.type, company.supplierOrigin);
  const branches = company.branches ?? [];

  let expiredCount = 0;
  let expiringSoonCount = 0;
  let missingCount = 0;

  requiredKeys.forEach((key) => {
    // A company can have more than one branch (e.g. a normal + "-NT" BP
    // Code); use whichever branch actually has data for this document.
    let doc: ComplianceDocument | undefined;
    for (const branch of branches) {
      const candidate = branch.documents?.[key];
      if (candidate && (candidate.provided || candidate.expiryDate)) {
        doc = candidate;
        break;
      }
    }
    const { status } = computeDocumentStatus(doc ?? {}, referenceDate, key);
    // 'For Update' (AFS outdated fiscal year) is grouped with Expired for the
    // rollup - it's the same "needs action now" severity, just a different
    // cause (outdated filing vs. a passed date).
    if (status === 'Expired' || status === 'For Update') expiredCount++;
    else if (status === 'Expiring Soon') expiringSoonCount++;
    else if (status === 'Missing') missingCount++;
  });

  const status: CompanyDocumentStatus =
    expiredCount > 0 ? 'Expired' : expiringSoonCount > 0 ? 'Expiring Soon' : 'Current';

  return { status, expiredCount, expiringSoonCount, missingCount, totalRequired: requiredKeys.length };
}

// A company can carry a normal BP Code and a separate "-NT" one (kept
// verbatim in bpCode/rawCategory, e.g. "ACC001-NT" / "Supplier-Local-NT") -
// same company, distinct accreditation branch with its own document set.
// Requiring the hyphen avoids false-positives from company/category names
// that merely end in the letters "NT".
export function isNTBranch(branch: Pick<BranchRecord, 'bpCode' | 'rawCategory'>): boolean {
  return /-NT$/i.test((branch.bpCode ?? '').trim()) || /-NT$/i.test((branch.rawCategory ?? '').trim());
}

// Disambiguates which branch an action/log entry applies to once a company
// has been split into multiple rows (NT vs non-NT) - falls back to the plain
// company name when there's only one branch, so the common case is untouched.
export function branchAwareCompanyLabel(company: Pick<PartnerCompany, 'name' | 'branches'>, branch?: BranchRecord): string {
  if (!branch || (company.branches ?? []).length <= 1) return company.name;
  return `${company.name} (${isNTBranch(branch) ? 'NT' : 'Non-NT'})`;
}
