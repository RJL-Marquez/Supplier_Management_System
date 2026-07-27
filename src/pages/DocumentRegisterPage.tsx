import { useMemo, useState } from 'react';
import { ClipboardList, Search, Globe, MapPin, Truck, Package, Briefcase, RefreshCw, X, Check } from 'lucide-react';
import { BranchRecord, ComplianceDocument, PartnerCompany, PartnerCompanyType, SupplierOrigin } from '../types/survey';
import { computeDocumentStatus } from '../utils/compliance';
import { getRequiredDocumentKeys, isExpiryDocument } from '../utils/documentRequirements';
import { SimClock, getEffectiveNow, getEffectiveTodayStr } from '../utils/simClock';
import { logAdminActivity } from '../utils/adminActivityLog';
import { typeBadgeClasses } from './PartnerCompaniesPage';

interface DocumentRegisterPageProps {
  partnerCompanies: PartnerCompany[];
  onUpdateCompany: (company: PartnerCompany) => void;
  canRenewDocuments?: boolean;
  simClock?: SimClock | null;
}

// One category tab = one column set, mirroring the Master List's
// "LOCAL SUPPLIER" / "FOREIGN SUPPLIER" blocks: selecting a category filters
// both the rows (companies of that category) AND which document columns show,
// since Couriers/Subcontractors don't carry the Local/Foreign-specific docs.
const CATEGORIES: { key: string; label: string; type: PartnerCompanyType; origin?: SupplierOrigin; icon: typeof Truck }[] = [
  { key: 'supplier-local', label: 'Supplier (Local)', type: 'Supplier', origin: 'Local', icon: MapPin },
  { key: 'supplier-foreign', label: 'Supplier (Foreign)', type: 'Supplier', origin: 'Foreign', icon: Globe },
  { key: 'courier', label: 'Courier', type: 'Courier', icon: Truck },
  { key: 'subcontractor', label: 'Subcontractor', type: 'Subcontractor', icon: Briefcase },
];

const STATUS_STYLES: Record<string, string> = {
  Current: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40',
  'Expiring Soon': 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/40',
  Expired: 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/40',
  'For Update': 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/40',
  Missing: 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-700',
};

// A document can be recorded on any of a company's branches (e.g. a normal +
// "-NT" BP Code) - use whichever branch already has data for this key, else
// fall back to the first branch as the renewal target.
function pickBranchForDoc(company: PartnerCompany, docName: string): BranchRecord | undefined {
  const branches = company.branches ?? [];
  return branches.find((b) => {
    const doc = b.documents?.[docName];
    return doc && (doc.provided || doc.expiryDate);
  }) ?? branches[0];
}

export function DocumentRegisterPage({ partnerCompanies, onUpdateCompany, canRenewDocuments, simClock = null }: DocumentRegisterPageProps) {
  const [categoryKey, setCategoryKey] = useState<string>('supplier-local');
  const [searchQuery, setSearchQuery] = useState('');
  const [renewalTarget, setRenewalTarget] = useState<{ company: PartnerCompany; branchId: string; docName: string } | null>(null);
  const [renewalDate, setRenewalDate] = useState('');

  const effectiveNow = getEffectiveNow(simClock);
  const currentDateStr = getEffectiveTodayStr(simClock);

  const category = CATEGORIES.find((c) => c.key === categoryKey) ?? CATEGORIES[0];
  const docColumns = useMemo(() => getRequiredDocumentKeys(category.type, category.origin), [category]);

  const rows = useMemo(() => {
    let list = partnerCompanies.filter((c) => {
      if (c.isArchived) return false;
      if (c.type !== category.type) return false;
      if (category.type === 'Supplier' && (c.supplierOrigin ?? 'Local') !== category.origin) return false;
      return true;
    });
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((c) =>
        c.name.toLowerCase().includes(q) ||
        (c.branches ?? []).some((b) => b.bpCode?.toLowerCase().includes(q))
      );
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [partnerCompanies, category, searchQuery]);

  const openRenewal = (company: PartnerCompany, docName: string) => {
    if (!canRenewDocuments) return;
    const branch = pickBranchForDoc(company, docName);
    if (!branch) return;
    const doc = branch.documents?.[docName];
    setRenewalDate(doc?.expiryDate || currentDateStr);
    setRenewalTarget({ company, branchId: branch.id, docName });
  };

  const toggleFlag = (company: PartnerCompany, docName: string) => {
    if (!canRenewDocuments) return;
    const branch = pickBranchForDoc(company, docName);
    if (!branch) return;
    const provided = !(branch.documents?.[docName]?.provided);
    const updatedBranches = (company.branches ?? []).map((b) =>
      b.id === branch.id
        ? { ...b, documents: { ...b.documents, [docName]: { provided, status: provided ? 'Current' as const : 'Missing' as const } } }
        : b
    );
    onUpdateCompany({ ...company, branches: updatedBranches });
    logAdminActivity(
      'Updated compliance document',
      `${docName} marked ${provided ? 'provided' : 'not provided'} for "${company.name}"`
    );
  };

  const confirmRenewal = () => {
    if (!renewalTarget || !renewalDate) return;
    const { company, branchId, docName } = renewalTarget;
    const { status, daysLeft } = computeDocumentStatus({ expiryDate: renewalDate }, effectiveNow, docName);
    const updatedBranches = (company.branches ?? []).map((b) =>
      b.id === branchId
        ? { ...b, documents: { ...b.documents, [docName]: { provided: true, expiryDate: renewalDate, status, daysLeft } } }
        : b
    );
    onUpdateCompany({ ...company, branches: updatedBranches });
    logAdminActivity(
      'Renewed compliance document',
      `${docName} renewed for "${company.name}" — new expiry ${renewalDate}`
    );
    setRenewalTarget(null);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '—';
    try {
      return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="space-y-6">
      <div className="panel bg-[#0063a9]/5 border-blue-100 dark:border-blue-900/30 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-[#0063a9] p-2 text-white shrink-0 mt-0.5">
            <ClipboardList size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#0063a9] dark:text-blue-300">Document Register</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Master-List-style compliance matrix. Pick a category below — only the document columns that apply to
              that category are shown, matching the Master List's Local/Foreign Supplier column blocks.
              {canRenewDocuments ? ' Click any expiry-bearing cell to renew it, or a Yes/No cell to toggle it.' : ' Renewing documents requires the Document Renewal permission.'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-nowrap overflow-x-auto rounded-lg border border-slate-200 bg-white p-1 dark:border-transparent dark:bg-slate-950 w-full sm:w-auto" style={{ scrollbarWidth: 'none' }}>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => setCategoryKey(cat.key)}
                className={`shrink-0 flex items-center gap-1.5 whitespace-nowrap rounded-md py-2 px-4 text-xs font-bold transition-all duration-150 cursor-pointer ${
                  categoryKey === cat.key
                    ? 'bg-[#0063a9] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name or BP code..."
            className="field text-xs py-2 !pl-9"
          />
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="panel py-20 text-center text-slate-400">
          <Package size={48} className="mx-auto mb-3 opacity-30 text-slate-300" />
          <p className="text-sm font-semibold">No {category.label} companies found.</p>
        </div>
      ) : (
        <div className="panel p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:border-slate-800 dark:bg-slate-950/60">
                  <th className="px-4 py-3 sticky left-0 bg-slate-50 dark:bg-slate-950/60 z-10">Company</th>
                  <th className="px-4 py-3">BP Code</th>
                  {docColumns.map((docName) => (
                    <th key={docName} className="px-4 py-3 min-w-[150px]">{docName}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {rows.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/20 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-100 sticky left-0 bg-white dark:bg-slate-950 z-10">
                      <div className="flex items-center gap-2">
                        <span>{c.name}</span>
                        <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider border shrink-0 ${typeBadgeClasses(c.type)}`}>
                          {c.type === 'Supplier' ? c.supplierOrigin : c.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                      {(c.branches ?? []).map((b) => b.bpCode).filter(Boolean).join(', ') || '—'}
                    </td>
                    {docColumns.map((docName) => {
                      const branch = pickBranchForDoc(c, docName);
                      const doc: ComplianceDocument = (branch?.documents?.[docName] ?? {}) as ComplianceDocument;
                      const { status, daysLeft } = computeDocumentStatus(doc, effectiveNow, docName);
                      const expiryBased = isExpiryDocument(docName);
                      return (
                        <td key={docName} className="px-4 py-3">
                          <button
                            type="button"
                            disabled={!canRenewDocuments || !branch}
                            onClick={() => (expiryBased ? openRenewal(c, docName) : toggleFlag(c, docName))}
                            title={
                              doc.expiryDate
                                ? `Expires ${formatDate(doc.expiryDate)}${canRenewDocuments ? ' — click to renew' : ''}`
                                : canRenewDocuments
                                ? (expiryBased ? 'Click to set an expiry date' : `Click to mark ${doc.provided ? 'not provided' : 'provided'}`)
                                : docName
                            }
                            className={`w-full inline-flex flex-col items-start gap-0.5 rounded-md px-2 py-1.5 text-[10px] font-semibold border transition ${STATUS_STYLES[status]} ${canRenewDocuments && branch ? 'cursor-pointer hover:ring-2 hover:ring-[#0063a9]/40' : 'cursor-default'}`}
                          >
                            <span className="flex items-center gap-1">
                              {canRenewDocuments && branch && <RefreshCw size={9} />}
                              {status}
                            </span>
                            {expiryBased && doc.expiryDate && (
                              <span className="font-normal opacity-80">
                                {formatDate(doc.expiryDate)}{typeof daysLeft === 'number' ? ` (${daysLeft}d)` : ''}
                              </span>
                            )}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Simple renewal date picker */}
      {renewalTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-transparent dark:bg-slate-950 relative">
            <button
              onClick={() => setRenewalTarget(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
              type="button"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-2.5 text-emerald-600 mb-1">
              <RefreshCw size={20} />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Renew Document</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              <strong className="text-slate-800 dark:text-slate-100">"{renewalTarget.docName}"</strong> for{' '}
              <strong className="text-slate-800 dark:text-slate-100">"{renewalTarget.company.name}"</strong>
            </p>
            <label htmlFor="doc-register-renewal-date" className="field-label text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              New Expiry Date
            </label>
            <input
              id="doc-register-renewal-date"
              type="date"
              className="field text-sm py-2"
              value={renewalDate}
              onChange={(e) => setRenewalDate(e.target.value)}
              autoFocus
            />
            <div className="flex items-center justify-end gap-3 mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
              <button onClick={() => setRenewalTarget(null)} className="secondary-button py-2 px-4 text-xs" type="button">
                Cancel
              </button>
              <button
                onClick={confirmRenewal}
                disabled={!renewalDate}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 px-4 py-2 text-xs font-bold text-white transition cursor-pointer"
                type="button"
              >
                <Check size={14} />
                <span>Confirm Renewal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
