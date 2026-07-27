import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Globe, MapPin, Truck, Package, Briefcase, RefreshCw, X, Check, Users, ShieldCheck, Clock, XCircle, Gauge, LayoutGrid, Settings2, RotateCcw } from 'lucide-react';
import { Area, Bar, BarChart, CartesianGrid, Cell, ComposedChart, LabelList, Legend, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BranchRecord, ComplianceDocument, PartnerCompany, PartnerCompanyType, SupplierOrigin } from '../types/survey';
import { computeCompanyDocumentSummary, computeDocumentStatus } from '../utils/compliance';
import { getRequiredDocumentKeys, isExpiryDocument } from '../utils/documentRequirements';
import { SimClock, getEffectiveNow, getEffectiveTodayStr } from '../utils/simClock';
import { logAdminActivity } from '../utils/adminActivityLog';
import { ChartCard } from '../components/ChartCard';
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

// Pseudo-category: aggregates the Compliance Overview (KPIs/charts) across
// every category at once, same idea as the client's mockup's top summary
// strip. The detail matrix below still needs one category selected, since
// Local/Foreign/etc. carry different document columns.
const ALL_KEY = 'all';

// Compliance Overview widgets a user can show/hide - toggled per category
// (keyed by categoryKey, including 'all'), not globally, since what's
// useful for Supplier (Local) isn't necessarily useful for Courier.
// "Simple" = the original 5 KPIs + 2 charts. "Advanced" adds the extra
// breakdown tables from the client's mockup. There's no separate mode
// concept - Advanced just means more of these same widgets are turned on,
// so a user can still hand-pick any mix via Customize.
const OVERVIEW_WIDGETS: { id: string; label: string; kind: 'kpi' | 'chart' | 'table' }[] = [
  { id: 'kpi-total', label: 'Total Partners', kind: 'kpi' },
  { id: 'kpi-accreditation', label: 'Active Accreditation', kind: 'kpi' },
  { id: 'kpi-expiring', label: 'Expiring ≤ 30 Days', kind: 'kpi' },
  { id: 'kpi-expired', label: 'Expired / For Update', kind: 'kpi' },
  { id: 'kpi-rate', label: 'Compliance Rate', kind: 'kpi' },
  { id: 'chart-compliance', label: 'Compliance Status (donut)', kind: 'chart' },
  { id: 'chart-attention', label: 'Documents Needing Attention (bar)', kind: 'chart' },
  { id: 'chart-trend', label: 'Compliance Rate Trend', kind: 'chart' },
  { id: 'table-doc-status', label: 'Document Status Summary', kind: 'table' },
  { id: 'table-aging', label: 'Expiry Aging Summary', kind: 'table' },
  { id: 'table-upcoming', label: 'Upcoming Expiries (Next 30 Days)', kind: 'table' },
  { id: 'table-risk', label: 'Documents with Highest Expiry Risk', kind: 'table' },
];
// Explicit ids (not kind-filtered) so adding new "Advanced-only" chart/kpi
// widgets later doesn't silently leak into Simple.
const SIMPLE_WIDGET_IDS = ['kpi-total', 'kpi-accreditation', 'kpi-expiring', 'kpi-expired', 'kpi-rate', 'chart-compliance', 'chart-attention'];
const ADVANCED_WIDGET_IDS = OVERVIEW_WIDGETS.map((w) => w.id);
// Defaults to everything on - a first-time visitor should see the full
// mockup-equivalent view, not have to discover the Customize dropdown to
// find the tables. Simple is still one click away via the preset button.
const DEFAULT_WIDGET_IDS = ADVANCED_WIDGET_IDS;
const WIDGET_VISIBILITY_STORAGE_KEY = 'document_register_widget_visibility_v1';

// One snapshot per category per calendar day (keyed by getEffectiveTodayStr,
// so the Database Simulator's time-travel can be used to generate a real
// multi-day trend for testing/demo). Revisiting the same day overwrites
// that day's entry instead of duplicating it.
const COMPLIANCE_HISTORY_STORAGE_KEY = 'document_register_compliance_history_v1';
const COMPLIANCE_HISTORY_LIMIT = 180;
interface ComplianceSnapshot {
  date: string;
  rate: number;
  total: number;
}

const AGING_BUCKETS = [
  { key: 'expired', label: '≤ 0 Days', status: 'Expired', match: (d: number) => d <= 0 },
  { key: 'expiring', label: '1 - 30 Days', status: 'Expiring Soon', match: (d: number) => d >= 1 && d <= 30 },
  { key: 'renewal-60', label: '31 - 60 Days', status: 'For Renewal', match: (d: number) => d >= 31 && d <= 60 },
  { key: 'renewal-90', label: '61 - 90 Days', status: 'For Renewal', match: (d: number) => d >= 61 && d <= 90 },
  { key: 'current', label: '> 90 Days', status: 'Current', match: (d: number) => d > 90 },
] as const;

// Validated status trio for CHART MARKS (pie fills, bar fills, dynamic KPI
// accents) - run through the dataviz six-checks validator against this
// app's actual white/slate-950 panel surfaces and confirmed to pass every
// gate (lightness band, chroma floor, CVD separation, normal-vision floor,
// contrast) in BOTH light and dark with the same three hex values, so no
// separate dark-mode set is needed for these. Scoped to chart marks only -
// the existing pastel STATUS_STYLES pill badges used across the rest of
// the app are untouched.
const CHART_GOOD = '#059669';
const CHART_WARNING = '#a16207';
const CHART_CRITICAL = '#f43f5e';
const CHART_INK = '#172033'; // matches the app's `ink` design token

const STATUS_STYLES: Record<string, string> = {
  Current: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40',
  'Expiring Soon': 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/40',
  Expired: 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/40',
  'For Update': 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/40',
  'For Renewal': 'bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-950/30 dark:text-yellow-400 dark:border-yellow-900/40',
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

// Renders each pie slice's raw count + share of the total just outside the
// slice - values visible without hovering, not just in the tooltip.
const RADIAN = Math.PI / 180;
function renderDonutValueLabel(props: any) {
  const { cx, cy, midAngle, outerRadius, value, percent } = props;
  const radius = outerRadius + 22;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill={CHART_INK} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={14} fontWeight={700}>
      {value} <tspan fillOpacity={0.65}>({Math.round(percent * 100)}%)</tspan>
    </text>
  );
}

export function DocumentRegisterPage({ partnerCompanies, onUpdateCompany, canRenewDocuments, simClock = null }: DocumentRegisterPageProps) {
  const [categoryKey, setCategoryKey] = useState<string>('supplier-local');
  const [searchQuery, setSearchQuery] = useState('');
  const [renewalTarget, setRenewalTarget] = useState<{ company: PartnerCompany; branchId: string; docName: string } | null>(null);
  const [renewalDate, setRenewalDate] = useState('');
  const [widgetVisibility, setWidgetVisibility] = useState<Record<string, string[]>>({});
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const customizeRef = useRef<HTMLDivElement>(null);
  const [complianceHistory, setComplianceHistory] = useState<Record<string, ComplianceSnapshot[]>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(WIDGET_VISIBILITY_STORAGE_KEY);
      if (saved) setWidgetVisibility(JSON.parse(saved));
    } catch {
      // Best-effort only - falls back to the default widget set.
    }
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COMPLIANCE_HISTORY_STORAGE_KEY);
      if (saved) setComplianceHistory(JSON.parse(saved));
    } catch {
      // Best-effort only - trend chart just starts empty.
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (customizeRef.current && !customizeRef.current.contains(event.target as Node)) {
        setIsCustomizeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const effectiveNow = getEffectiveNow(simClock);
  const currentDateStr = getEffectiveTodayStr(simClock);

  const isAllView = categoryKey === ALL_KEY;
  const category = CATEGORIES.find((c) => c.key === categoryKey) ?? CATEGORIES[0];
  const viewLabel = isAllView ? 'All Categories' : category.label;
  const docColumns = useMemo(() => getRequiredDocumentKeys(category.type, category.origin), [category]);

  const visibleWidgetIds = widgetVisibility[categoryKey] ?? DEFAULT_WIDGET_IDS;
  const isWidgetVisible = (id: string) => visibleWidgetIds.includes(id);

  const toggleWidget = (id: string) => {
    const next = visibleWidgetIds.includes(id)
      ? visibleWidgetIds.filter((w) => w !== id)
      : [...visibleWidgetIds, id];
    const updated = { ...widgetVisibility, [categoryKey]: next };
    setWidgetVisibility(updated);
    localStorage.setItem(WIDGET_VISIBILITY_STORAGE_KEY, JSON.stringify(updated));
  };

  const restoreDefaultWidgets = () => {
    const updated = { ...widgetVisibility };
    delete updated[categoryKey];
    setWidgetVisibility(updated);
    localStorage.setItem(WIDGET_VISIBILITY_STORAGE_KEY, JSON.stringify(updated));
  };

  const applyPreset = (ids: string[]) => {
    const updated = { ...widgetVisibility, [categoryKey]: ids };
    setWidgetVisibility(updated);
    localStorage.setItem(WIDGET_VISIBILITY_STORAGE_KEY, JSON.stringify(updated));
  };

  // Every non-archived company in the selected category, unfiltered by
  // search - this is what the Compliance Overview summarizes, so switching
  // categories updates the KPIs/charts but typing in the search box doesn't.
  // "All Categories" skips the type/origin filter entirely.
  const categoryCompanies = useMemo(() => {
    return partnerCompanies.filter((c) => {
      if (c.isArchived) return false;
      if (isAllView) return true;
      if (c.type !== category.type) return false;
      if (category.type === 'Supplier' && (c.supplierOrigin ?? 'Local') !== category.origin) return false;
      return true;
    });
  }, [partnerCompanies, category, isAllView]);

  const rows = useMemo(() => {
    let list = categoryCompanies;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((c) =>
        c.name.toLowerCase().includes(q) ||
        (c.branches ?? []).some((b) => b.bpCode?.toLowerCase().includes(q))
      );
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [categoryCompanies, searchQuery]);

  // Compliance Overview: one KPI/chart summary per selected view, computed
  // once per company (not per document cell) so it stays cheap even at
  // ~1000+ companies. Reuses computeCompanyDocumentSummary's Current/
  // Expiring Soon/Expired rollup as the compliance bucket, same source of
  // truth the table below and the notification bell already use.
  // Per-doc attention is keyed off each company's own required document
  // list (not the page-level docColumns) so this stays correct in "All
  // Categories" view, where companies carry different document sets
  // (e.g. Foreign suppliers don't have GIS/DTI/Import Permit).
  const overview = useMemo(() => {
    let fullyCompliant = 0;
    let partiallyCompliant = 0;
    let nonCompliant = 0;
    let activeAccreditation = 0;
    let expiringSoonDocs = 0;
    let expiredDocs = 0;

    const perDocAttention: Record<string, { expiringSoon: number; expired: number }> = {};
    // Advanced-view breakdowns - only populated for expiry-bearing docs.
    const perDocStatus: Record<string, { current: number; expiringSoon: number; expiredOrForUpdate: number; total: number }> = {};
    const agingCounts: Record<string, number> = {};
    const upcoming: { company: string; doc: string; expiryDate: string; daysLeft: number }[] = [];

    categoryCompanies.forEach((c) => {
      const summary = computeCompanyDocumentSummary(c, effectiveNow);
      if (summary.status === 'Current') fullyCompliant++;
      else if (summary.status === 'Expiring Soon') partiallyCompliant++;
      else nonCompliant++;

      if (c.accreditationStatus === 'Accredited') activeAccreditation++;
      expiringSoonDocs += summary.expiringSoonCount;
      expiredDocs += summary.expiredCount;

      getRequiredDocumentKeys(c.type, c.supplierOrigin).filter(isExpiryDocument).forEach((docName) => {
        const branch = pickBranchForDoc(c, docName);
        const doc: ComplianceDocument = (branch?.documents?.[docName] ?? {}) as ComplianceDocument;
        const { status, daysLeft } = computeDocumentStatus(doc, effectiveNow, docName);

        if (status === 'Expiring Soon' || status === 'Expired' || status === 'For Update') {
          if (!perDocAttention[docName]) perDocAttention[docName] = { expiringSoon: 0, expired: 0 };
          if (status === 'Expiring Soon') perDocAttention[docName].expiringSoon++;
          else perDocAttention[docName].expired++;
        }

        if (!perDocStatus[docName]) perDocStatus[docName] = { current: 0, expiringSoon: 0, expiredOrForUpdate: 0, total: 0 };
        perDocStatus[docName].total++;
        if (status === 'Current') perDocStatus[docName].current++;
        else if (status === 'Expiring Soon') perDocStatus[docName].expiringSoon++;
        else if (status === 'Expired' || status === 'For Update') perDocStatus[docName].expiredOrForUpdate++;

        if (typeof daysLeft === 'number') {
          const bucket = AGING_BUCKETS.find((b) => b.match(daysLeft));
          if (bucket) agingCounts[bucket.key] = (agingCounts[bucket.key] ?? 0) + 1;
        }

        if (status === 'Expiring Soon' && doc.expiryDate && typeof daysLeft === 'number') {
          upcoming.push({ company: c.name, doc: docName, expiryDate: doc.expiryDate, daysLeft });
        }
      });
    });

    const total = categoryCompanies.length;
    const complianceRate = total > 0 ? Math.round((fullyCompliant / total) * 100) : 0;

    const donutData = [
      { name: 'Fully Compliant', value: fullyCompliant, color: CHART_GOOD },
      { name: 'Partially Compliant', value: partiallyCompliant, color: CHART_WARNING },
      { name: 'Non-Compliant', value: nonCompliant, color: CHART_CRITICAL },
    ].filter((d) => d.value > 0);

    const barData = Object.entries(perDocAttention)
      .map(([docName, counts]) => ({
        doc: docName,
        'Expiring Soon': counts.expiringSoon,
        Expired: counts.expired,
      }))
      .sort((a, b) => (b['Expiring Soon'] + b.Expired) - (a['Expiring Soon'] + a.Expired));

    const docStatusTable = Object.entries(perDocStatus)
      .map(([docName, counts]) => ({ doc: docName, ...counts }))
      .sort((a, b) => a.doc.localeCompare(b.doc));

    const agingDocTotal = AGING_BUCKETS.reduce((sum, b) => sum + (agingCounts[b.key] ?? 0), 0);
    const agingTable = AGING_BUCKETS.map((b) => {
      const count = agingCounts[b.key] ?? 0;
      return { ...b, count, percent: agingDocTotal > 0 ? Math.round((count / agingDocTotal) * 100) : 0 };
    });

    const upcomingTable = upcoming.sort((a, b) => a.daysLeft - b.daysLeft).slice(0, 10);

    return {
      total, activeAccreditation, expiringSoonDocs, expiredDocs, complianceRate,
      donutData, barData, docStatusTable, agingTable, upcomingTable,
    };
  }, [categoryCompanies, effectiveNow]);

  // Records today's compliance rate for whichever category is currently
  // being viewed - this is what actually builds the trend chart's history
  // over time. Revisiting the same day just overwrites that day's entry
  // (keeps it live if the underlying data changes) instead of duplicating.
  useEffect(() => {
    if (overview.total === 0) return;
    setComplianceHistory((prev) => {
      const existing = prev[categoryKey] ?? [];
      const last = existing[existing.length - 1];
      let nextList: ComplianceSnapshot[];
      if (last && last.date === currentDateStr) {
        if (last.rate === overview.complianceRate && last.total === overview.total) return prev;
        nextList = [...existing.slice(0, -1), { date: currentDateStr, rate: overview.complianceRate, total: overview.total }];
      } else {
        nextList = [...existing, { date: currentDateStr, rate: overview.complianceRate, total: overview.total }].slice(-COMPLIANCE_HISTORY_LIMIT);
      }
      const updated = { ...prev, [categoryKey]: nextList };
      localStorage.setItem(COMPLIANCE_HISTORY_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [categoryKey, currentDateStr, overview.total, overview.complianceRate]);

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-nowrap overflow-x-auto rounded-lg border border-slate-200 bg-white p-1 dark:border-transparent dark:bg-slate-950 w-full sm:w-auto" style={{ scrollbarWidth: 'none' }}>
          <button
            onClick={() => setCategoryKey(ALL_KEY)}
            className={`shrink-0 flex items-center gap-1.5 whitespace-nowrap rounded-md py-2 px-4 text-xs font-bold transition-all duration-150 cursor-pointer ${
              isAllView
                ? 'bg-[#0063a9] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <LayoutGrid size={12} />
            <span>All Categories</span>
          </button>
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
            placeholder={isAllView ? 'Pick a category to search...' : 'Search name or BP code...'}
            disabled={isAllView}
            className="field text-xs py-2 !pl-9 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {overview.total > 0 && (() => {
        const chartsToShow: ('compliance' | 'attention')[] = [];
        if (isWidgetVisible('chart-compliance')) chartsToShow.push('compliance');
        if (isWidgetVisible('chart-attention')) chartsToShow.push('attention');
        const chartsGridClass = chartsToShow.length === 2 ? 'grid grid-cols-1 lg:grid-cols-5 gap-4' : 'grid grid-cols-1 gap-4';

        return (
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-5 dark:border-slate-800/60 dark:bg-slate-900/20 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Compliance Overview</h3>
                <p className="text-[11px] font-medium text-slate-400">{viewLabel}</p>
              </div>
              <div className="relative" ref={customizeRef}>
                <button
                  type="button"
                  onClick={() => setIsCustomizeOpen((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white transition cursor-pointer shadow-sm"
                >
                  <Settings2 size={12} />
                  <span>Customize</span>
                </button>

                {isCustomizeOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-panel z-30 overflow-hidden dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Customize Overview</p>
                      <span className="text-[10px] text-slate-400">{viewLabel}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick preset:</span>
                      <button
                        type="button"
                        onClick={() => applyPreset(SIMPLE_WIDGET_IDS)}
                        className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900/60 cursor-pointer"
                      >
                        Simple
                      </button>
                      <button
                        type="button"
                        onClick={() => applyPreset(ADVANCED_WIDGET_IDS)}
                        className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900/60 cursor-pointer"
                      >
                        Advanced
                      </button>
                    </div>
                    <div className="max-h-72 overflow-y-auto p-2">
                      <p className="px-2 pt-1 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">KPI Cards</p>
                      {OVERVIEW_WIDGETS.filter((w) => w.kind === 'kpi').map((w) => (
                        <label key={w.id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer text-xs text-slate-700 dark:text-slate-200">
                          <input type="checkbox" checked={isWidgetVisible(w.id)} onChange={() => toggleWidget(w.id)} className="rounded border-slate-300" />
                          <span>{w.label}</span>
                        </label>
                      ))}
                      <p className="px-2 pt-2 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Charts</p>
                      {OVERVIEW_WIDGETS.filter((w) => w.kind === 'chart').map((w) => (
                        <label key={w.id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer text-xs text-slate-700 dark:text-slate-200">
                          <input type="checkbox" checked={isWidgetVisible(w.id)} onChange={() => toggleWidget(w.id)} className="rounded border-slate-300" />
                          <span>{w.label}</span>
                        </label>
                      ))}
                      <p className="px-2 pt-2 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Tables (Advanced)</p>
                      {OVERVIEW_WIDGETS.filter((w) => w.kind === 'table').map((w) => (
                        <label key={w.id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer text-xs text-slate-700 dark:text-slate-200">
                          <input type="checkbox" checked={isWidgetVisible(w.id)} onChange={() => toggleWidget(w.id)} className="rounded border-slate-300" />
                          <span>{w.label}</span>
                        </label>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={restoreDefaultWidgets}
                      className="w-full flex items-center justify-center gap-1.5 border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-azure transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/60"
                    >
                      <RotateCcw size={12} />
                      <span>Restore Default for {viewLabel}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {(isWidgetVisible('kpi-total') || isWidgetVisible('kpi-accreditation') || isWidgetVisible('kpi-expiring') || isWidgetVisible('kpi-expired') || isWidgetVisible('kpi-rate')) && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {isWidgetVisible('kpi-total') && <KpiCard icon={Users} label="Total Partners" value={overview.total} caption={viewLabel} accent="text-[#0063a9]" />}
                {isWidgetVisible('kpi-accreditation') && <KpiCard icon={ShieldCheck} label="Active Accreditation" value={overview.activeAccreditation} caption="Accredited status" accent="text-[#0063a9]" />}
                {isWidgetVisible('kpi-expiring') && <KpiCard icon={Clock} label="Expiring ≤ 30 Days" value={overview.expiringSoonDocs} caption="Documents" accent="text-[#a16207]" />}
                {isWidgetVisible('kpi-expired') && <KpiCard icon={XCircle} label="Expired / For Update" value={overview.expiredDocs} caption="Documents" accent="text-[#f43f5e]" />}
                {isWidgetVisible('kpi-rate') && (
                  <KpiCard
                    icon={Gauge}
                    label="Compliance Rate"
                    value={`${overview.complianceRate}%`}
                    caption="Fully compliant partners"
                    accent={overview.complianceRate >= 90 ? 'text-[#059669]' : overview.complianceRate >= 70 ? 'text-[#a16207]' : 'text-[#f43f5e]'}
                  />
                )}
              </div>
            )}

            {chartsToShow.length > 0 && (
              <div className={chartsGridClass}>
                {isWidgetVisible('chart-compliance') && (
                  <div className={chartsToShow.length === 2 ? 'lg:col-span-2' : ''}>
                    <ChartCard title="Compliance Status" subtitle={viewLabel} contentClassName="h-64">
                      {overview.donutData.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-xs text-slate-400">
                          No companies in this view yet.
                        </div>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={overview.donutData}
                              cx="50%"
                              cy="50%"
                              innerRadius={0}
                              outerRadius={68}
                              paddingAngle={2}
                              dataKey="value"
                              nameKey="name"
                              isAnimationActive={false}
                              label={renderDonutValueLabel}
                              labelLine={false}
                            >
                              {overview.donutData.map((entry) => (
                                <Cell key={entry.name} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip contentStyle={{ fontSize: '11px', borderRadius: 10, border: '1px solid #e2e8f0' }} />
                            <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} iconType="circle" iconSize={8} />
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                    </ChartCard>
                  </div>
                )}
                {isWidgetVisible('chart-attention') && (
                  <div className={chartsToShow.length === 2 ? 'lg:col-span-3' : ''}>
                    <ChartCard title="Documents Needing Attention" subtitle="By document type" contentClassName="h-64">
                      {overview.barData.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-xs text-slate-400">
                          Nothing expiring or overdue in this view.
                        </div>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={overview.barData} layout="vertical" margin={{ left: 8, right: 36 }} barCategoryGap="30%">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-slate-100 dark:stroke-slate-800" />
                            <XAxis type="number" allowDecimals={false} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} />
                            <YAxis type="category" dataKey="doc" width={110} tick={{ fontSize: 11, fill: CHART_INK, fontWeight: 600 }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} />
                            <Tooltip contentStyle={{ fontSize: '11px', borderRadius: 10, border: '1px solid #e2e8f0' }} cursor={{ fill: 'rgba(148,163,184,0.08)' }} />
                            <Legend wrapperStyle={{ fontSize: '11px' }} iconType="circle" iconSize={8} />
                            <Bar dataKey="Expiring Soon" stackId="a" fill={CHART_WARNING} radius={[0, 0, 0, 0]} maxBarSize={20} isAnimationActive={false}>
                              <LabelList dataKey="Expiring Soon" position="right" formatter={(v: number) => (v > 0 ? v : '')} style={{ fontSize: 12, fill: CHART_INK, fontWeight: 700 }} />
                            </Bar>
                            <Bar dataKey="Expired" stackId="a" fill={CHART_CRITICAL} radius={[0, 4, 4, 0]} maxBarSize={20} isAnimationActive={false}>
                              <LabelList dataKey="Expired" position="right" formatter={(v: number) => (v > 0 ? v : '')} style={{ fontSize: 12, fill: CHART_INK, fontWeight: 700 }} />
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </ChartCard>
                  </div>
                )}
              </div>
            )}

            {isWidgetVisible('chart-trend') && (() => {
              const history = complianceHistory[categoryKey] ?? [];
              return (
                <ChartCard title="Compliance Rate Trend" subtitle={viewLabel} contentClassName="h-56">
                  {history.length < 2 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-1">
                      <p className="text-xs text-slate-400">
                        {history.length === 0 ? 'No history recorded yet.' : `Only ${history.length} day of history recorded so far.`}
                      </p>
                      <p className="text-[10px] text-slate-400 max-w-xs">
                        This records a real snapshot of the compliance rate once per day you visit this category - it builds up from here, no invented numbers.
                      </p>
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={history} margin={{ top: 20, right: 16, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0063a9" stopOpacity={0.16} />
                            <stop offset="100%" stopColor="#0063a9" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-slate-100 dark:stroke-slate-800" />
                        <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} tickFormatter={(d: string) => formatDate(d)} />
                        <YAxis domain={[0, 100]} tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={40} />
                        <Tooltip contentStyle={{ fontSize: '11px', borderRadius: 10, border: '1px solid #e2e8f0' }} labelFormatter={(d: string) => formatDate(d)} formatter={(v: number) => [`${v}%`, 'Compliance Rate']} />
                        <Area type="monotone" dataKey="rate" stroke="none" fill="url(#trendFill)" isAnimationActive={false} />
                        <Line type="monotone" dataKey="rate" stroke="#0063a9" strokeWidth={2} dot={{ r: 4, fill: '#0063a9', strokeWidth: 0 }} activeDot={{ r: 6 }} isAnimationActive={false}>
                          <LabelList dataKey="rate" position="top" formatter={(v: number) => `${v}%`} style={{ fontSize: 11, fontWeight: 700, fill: CHART_INK }} />
                        </Line>
                      </ComposedChart>
                    </ResponsiveContainer>
                  )}
                </ChartCard>
              );
            })()}

            {(isWidgetVisible('table-doc-status') || isWidgetVisible('table-aging') || isWidgetVisible('table-upcoming') || isWidgetVisible('table-risk')) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {isWidgetVisible('table-doc-status') && (
                  <ChartCard title="Document Status Summary" subtitle={viewLabel} contentClassName="max-h-64 overflow-y-auto">
                    {overview.docStatusTable.length === 0 ? (
                      <p className="text-xs text-slate-400 text-center py-8">No expiry-bearing documents in this view.</p>
                    ) : (
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                            <th className="py-2 pr-2">Document</th>
                            <th className="py-2 px-2 text-right">Current</th>
                            <th className="py-2 px-2 text-right text-[#a16207]">Expiring</th>
                            <th className="py-2 px-2 text-right text-[#f43f5e]">Expired</th>
                            <th className="py-2 pl-2 text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {overview.docStatusTable.map((row) => (
                            <tr key={row.doc} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                              <td className="py-2 pr-2 font-semibold text-slate-700 dark:text-slate-200">{row.doc}</td>
                              <td className="py-2 px-2 text-right tabular-nums text-[#059669]">{row.current}</td>
                              <td className="py-2 px-2 text-right tabular-nums text-[#a16207]">{row.expiringSoon}</td>
                              <td className="py-2 px-2 text-right tabular-nums text-[#f43f5e]">{row.expiredOrForUpdate}</td>
                              <td className="py-2 pl-2 text-right tabular-nums font-semibold text-slate-700 dark:text-slate-200">{row.total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </ChartCard>
                )}

                {isWidgetVisible('table-aging') && (
                  <ChartCard title="Expiry Aging Summary" subtitle={viewLabel} contentClassName="max-h-64 overflow-y-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                          <th className="py-2 pr-2">Aging</th>
                          <th className="py-2 px-2">Status</th>
                          <th className="py-2 px-2 text-right">Count</th>
                          <th className="py-2 pl-2 text-right">%</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {overview.agingTable.map((row) => (
                          <tr key={row.key} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                            <td className="py-2 pr-2 font-semibold text-slate-700 dark:text-slate-200">{row.label}</td>
                            <td className="py-2 px-2">
                              <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-bold border ${STATUS_STYLES[row.status] ?? STATUS_STYLES.Current}`}>{row.status}</span>
                            </td>
                            <td className="py-2 px-2 text-right tabular-nums text-slate-600 dark:text-slate-300">{row.count}</td>
                            <td className="py-2 pl-2 text-right tabular-nums font-semibold text-slate-700 dark:text-slate-200">{row.percent}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ChartCard>
                )}

                {isWidgetVisible('table-upcoming') && (
                  <ChartCard title="Upcoming Expiries" subtitle="Next 30 days" contentClassName="max-h-64 overflow-y-auto">
                    {overview.upcomingTable.length === 0 ? (
                      <p className="text-xs text-slate-400 text-center py-8">Nothing expiring in the next 30 days.</p>
                    ) : (
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                            <th className="py-2 pr-2">Expiry Date</th>
                            <th className="py-2 px-2">Company</th>
                            <th className="py-2 px-2">Document</th>
                            <th className="py-2 pl-2 text-right">Days Left</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {overview.upcomingTable.map((row, i) => (
                            <tr key={`${row.company}-${row.doc}-${i}`} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                              <td className="py-2 pr-2 text-slate-600 dark:text-slate-300 whitespace-nowrap tabular-nums">{formatDate(row.expiryDate)}</td>
                              <td className="py-2 px-2 font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[140px]">{row.company}</td>
                              <td className="py-2 px-2 text-slate-600 dark:text-slate-300">{row.doc}</td>
                              <td className="py-2 pl-2 text-right tabular-nums font-bold text-[#a16207]">{row.daysLeft}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </ChartCard>
                )}

                {isWidgetVisible('table-risk') && (
                  <ChartCard title="Documents with Highest Expiry Risk" subtitle={viewLabel} contentClassName="max-h-64 overflow-y-auto">
                    {overview.barData.length === 0 ? (
                      <p className="text-xs text-slate-400 text-center py-8">Nothing expiring or overdue in this view.</p>
                    ) : (
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                            <th className="py-2 pr-2">Document</th>
                            <th className="py-2 px-2 text-right text-[#f43f5e]">Expired</th>
                            <th className="py-2 px-2 text-right text-[#a16207]">Expiring &lt; 30d</th>
                            <th className="py-2 pl-2 text-right">Total Risk</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {overview.barData.map((row) => (
                            <tr key={row.doc} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                              <td className="py-2 pr-2 font-semibold text-slate-700 dark:text-slate-200">{row.doc}</td>
                              <td className="py-2 px-2 text-right tabular-nums text-[#f43f5e]">{row.Expired}</td>
                              <td className="py-2 px-2 text-right tabular-nums text-[#a16207]">{row['Expiring Soon']}</td>
                              <td className="py-2 pl-2 text-right tabular-nums font-bold text-slate-700 dark:text-slate-200">{row.Expired + row['Expiring Soon']}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </ChartCard>
                )}
              </div>
            )}
          </div>
        );
      })()}

      {isAllView ? (
        <div className="panel py-20 text-center text-slate-400">
          <LayoutGrid size={48} className="mx-auto mb-3 opacity-30 text-slate-300" />
          <p className="text-sm font-semibold">Pick a specific category above to view its detailed document matrix.</p>
          <p className="text-xs mt-1">Local, Foreign, Courier, and Subcontractor each carry different document columns.</p>
        </div>
      ) : rows.length === 0 ? (
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

function KpiCard({
  icon: Icon,
  label,
  value,
  caption,
  accent,
}: {
  icon: typeof Users;
  label: string;
  value: string | number;
  caption: string;
  accent: string;
}) {
  return (
    <section className="panel !shadow-none border-slate-100 dark:border-slate-800/80">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{label}</h3>
        <span className={`inline-flex items-center justify-center rounded-lg bg-current/10 p-1.5 ${accent}`}>
          <Icon size={14} />
        </span>
      </div>
      <span className="mt-2 block text-[28px] leading-none font-semibold tracking-tight text-slate-900 dark:text-white">{value}</span>
      <span className={`mt-2 block text-[11px] font-medium ${accent}`}>{caption}</span>
    </section>
  );
}
