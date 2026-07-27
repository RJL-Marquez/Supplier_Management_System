import { ComplianceDocument, DocumentStatus, PartnerCompany } from '../types/survey';
import { getRequiredDocumentKeys } from './documentRequirements';

// "Expiring Soon" threshold matches the Master List's own legend (30 days left).
const EXPIRING_SOON_DAYS = 30;

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
  referenceDate: Date = new Date()
): { status: DocumentStatus; daysLeft?: number } {
  if (!doc.expiryDate) {
    return { status: doc.provided ? 'Current' : 'Missing' };
  }
  const daysLeft = daysUntil(doc.expiryDate, referenceDate);
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
    const { status } = computeDocumentStatus(doc ?? {}, referenceDate);
    if (status === 'Expired') expiredCount++;
    else if (status === 'Expiring Soon') expiringSoonCount++;
    else if (status === 'Missing') missingCount++;
  });

  const status: CompanyDocumentStatus =
    expiredCount > 0 ? 'Expired' : expiringSoonCount > 0 ? 'Expiring Soon' : 'Current';

  return { status, expiredCount, expiringSoonCount, missingCount, totalRequired: requiredKeys.length };
}
