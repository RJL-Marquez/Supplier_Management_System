import { PartnerCompany } from '../types/survey';
import { isNTBranch } from './compliance';

// Mirrors the Master List's own "Category Summary" / "Supplier Rank Summary"
// legend blocks. The crucial difference from the rest of this app: everything
// here is counted per BRANCH (one row per BP Code), and NT is treated as a
// fully separate category from its non-NT counterpart - whereas the registry
// UI merges a company's NT and non-NT BP Codes onto a single PartnerCompany.
// This is why a per-company "Active Partners" count (e.g. 33) is far lower
// than the Master List's per-BP-Code total (e.g. 60): one merged company can
// hold several accredited BP Codes.
export const CATEGORY_BUCKET_KEYS = [
  'Supplier-Local',
  'Supplier-Foreign',
  'Courier',
  'Subcontractor',
  'Supplier-Local-NT',
  'Supplier-Foreign-NT',
  'Courier-NT',
  'Subcontractor-NT',
] as const;

export interface CategoryRankSummary {
  buckets: Record<string, number>;
  total: number;
  major: number;
  regular: number;
}

// Archived and Uncategorized companies are excluded, matching the "active
// registry" semantics: only accredited, live BP Codes are counted, the same
// set the Master List's summary block totals.
export function computeCategoryRankSummary(companies: PartnerCompany[]): CategoryRankSummary {
  const buckets: Record<string, number> = {};
  CATEGORY_BUCKET_KEYS.forEach((key) => {
    buckets[key] = 0;
  });
  let major = 0;
  let regular = 0;

  companies.forEach((c) => {
    if (c.isArchived || c.type === 'Uncategorized') return;
    const base = c.type === 'Supplier' ? `Supplier-${c.supplierOrigin ?? 'Local'}` : c.type;
    const branches = c.branches ?? [];

    // A company with no branch rows still represents one accredited entry.
    if (branches.length === 0) {
      buckets[base] = (buckets[base] ?? 0) + 1;
      return;
    }

    branches.forEach((b) => {
      const key = isNTBranch(b) ? `${base}-NT` : base;
      buckets[key] = (buckets[key] ?? 0) + 1;
      if (c.type === 'Supplier' && b.supplierRank) {
        if (/major/i.test(b.supplierRank)) major++;
        else if (/regular/i.test(b.supplierRank)) regular++;
      }
    });
  });

  const total = Object.values(buckets).reduce((sum, n) => sum + n, 0);
  return { buckets, total, major, regular };
}
