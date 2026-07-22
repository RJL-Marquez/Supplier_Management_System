import { ComplianceDocument, DocumentStatus } from '../types/survey';

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
