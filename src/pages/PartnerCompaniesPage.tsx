import { useState, useMemo, useRef, useEffect } from 'react';
import {
  Plus,
  Trash,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  Building,
  Info,
  Calendar,
  Hash,
  Briefcase,
  ClipboardList,
  Award,
  X,
  List,
  LayoutGrid,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  Clock,
  Settings,
  Archive,
  RefreshCw,
  FileText,
  Check,
  ChevronRight,
  Truck,
  Package,
  Upload,
  Loader2,
  Search,
  Globe,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { BranchRecord, ComplianceDocument, DocumentStatus, PartnerCompany, PartnerCompanyType, SurveyResponse, SurveyType } from '../types/survey';
import { getMaxRatingForResponses } from '../utils/analytics';
import { computeCompanyComposite } from '../utils/scoring';
import { computeDocumentStatus } from '../utils/compliance';
import { ImportResult } from '../utils/masterListImport';
import { SimClock, getEffectiveNow, getEffectiveTodayStr } from '../utils/simClock';

function typeBadgeClasses(type: PartnerCompanyType): string {
  switch (type) {
    case 'Courier':
      return 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/20 dark:text-blue-400';
    case 'Supplier':
      return 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400';
    case 'Subcontractor':
      return 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950/20 dark:text-orange-400';
    default:
      return 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-700';
  }
}

// Registries can hold 1000+ companies (the full Master List) - rendering
// every row at once tanks scroll/interaction performance, so the list/table
// is paginated client-side on top of the already-filtered result.
const COMPANIES_PAGE_SIZE = 60;

const DOCUMENT_STATUS_STYLES: Record<DocumentStatus, string> = {
  Current: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40',
  'Expiring Soon': 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/40',
  Expired: 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/40',
  Missing: 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-700',
};

interface PartnerCompaniesPageProps {
  partnerCompanies: PartnerCompany[];
  responses: SurveyResponse[];
  onAddCompany: (
    name: string,
    type: SurveyType,
    affiliation?: string,
    registeredAt?: string,
    renewedAt?: string,
    expirationDate?: string,
    reminderFirstThresholdMonths?: number,
    reminderFrequency?: 'daily' | 'weekly' | 'none'
  ) => void;
  onRemoveCompany: (id: string) => void;
  onUpdateCompany: (company: PartnerCompany) => void;
  onImportMasterList?: (file: File) => Promise<ImportResult>;
  isAdmin?: boolean;
  simClock?: SimClock | null;
}

export function PartnerCompaniesPage({
  partnerCompanies,
  responses,
  onAddCompany,
  onRemoveCompany,
  onUpdateCompany,
  onImportMasterList,
  isAdmin,
  simClock = null,
}: PartnerCompaniesPageProps) {
  // Tabs: Active, Expired, Archived
  const [statusTab, setStatusTab] = useState<'Active' | 'Expired' | 'Archived'>('Active');
  const [currentPage, setCurrentPage] = useState(1);
  // Affiliation filter
  const [activeTab, setActiveTab] = useState<PartnerCompanyType | 'All'>('All');
  // Local/Foreign sub-filter, only meaningful while activeTab === 'Supplier'
  const [originFilter, setOriginFilter] = useState<'All' | 'Local' | 'Foreign'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'general' | 'simplified'>('general');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerModalTab, setRegisterModalTab] = useState<'manual' | 'upload'>('manual');

  // Detail Modal State
  const [selectedCompany, setSelectedCompany] = useState<PartnerCompany | null>(null);
  
  // Custom Renewal Date Picker State - defaults to the effective "today"
  // (simulated date when a simulation is active, otherwise real today).
  const [isRenewalPickerOpen, setIsRenewalPickerOpen] = useState(false);
  const [renewalYear, setRenewalYear] = useState(() => getEffectiveNow(simClock).getFullYear());
  const [renewalMonth, setRenewalMonth] = useState(() => getEffectiveNow(simClock).getMonth());
  const [renewalDay, setRenewalDay] = useState(() => getEffectiveNow(simClock).getDate());
  const [renewalStep, setRenewalStep] = useState<1 | 2 | 3 | 4>(1);

  // Expiry Reminder form states (inside detail modal)
  const [thresholdMonths, setThresholdMonths] = useState<number>(1);
  const [reminderFreq, setReminderFreq] = useState<'daily' | 'weekly' | 'none'>('weekly');

  const maxRating = useMemo(() => {
    return getMaxRatingForResponses(responses);
  }, [responses]);
  
  // Registration Form State
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState<SurveyType>('Courier');
  const [newAffiliation, setNewAffiliation] = useState('');
  const [newRegDate, setNewRegDate] = useState(() => getEffectiveTodayStr(simClock));
  const [newExpDate, setNewExpDate] = useState(() => {
    const d = getEffectiveNow(simClock);
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [newThreshold, setNewThreshold] = useState<number>(1);
  const [newFreq, setNewFreq] = useState<'daily' | 'weekly' | 'none'>('weekly');
  
  // Feedback Messages
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Passcode modal state
  const [companyToDelete, setCompanyToDelete] = useState<PartnerCompany | null>(null);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  // Master List import state
  const importFileInputRef = useRef<HTMLInputElement>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [importError, setImportError] = useState('');

  type SortKey = 'name' | 'type' | 'createdAt' | 'expirationDate';
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' } | null>(null);

  const adminPasscode = 'admin'; // Main passcode requested, mgenesis2026 as backup
  const currentDateStr = getEffectiveTodayStr(simClock);

  const monthsList = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Helper to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const handleSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Compute composite and status counts
  const companyStats = useMemo(() => {
    const stats: Record<string, { totalResponses: number; sumRating: number; countRating: number }> = {};

    responses.forEach((r) => {
      if (!stats[r.company]) {
        stats[r.company] = { totalResponses: 0, sumRating: 0, countRating: 0 };
      }
      stats[r.company].totalResponses += 1;
      if (r.rating !== 'N/A') {
        stats[r.company].sumRating += r.rating as number;
        stats[r.company].countRating += 1;
      }
    });

    return stats;
  }, [responses]);

  const getCompanyScoreDetails = (companyName: string, companyType: PartnerCompanyType) => {
    if (companyType === 'Uncategorized') {
      return { rating: 'N/A', pct: 0, count: 0, label: 'Unrated', hex: '#94a3b8' };
    }
    const composite = computeCompanyComposite(companyName, companyType, responses);
    if (!composite) {
      return { rating: 'N/A', pct: 0, count: 0, label: 'Unrated', hex: '#94a3b8' };
    }
    return {
      rating: `${composite.compositeScore.toFixed(1)}%`,
      pct: Math.round(composite.compositeScore),
      count: composite.evaluationCount,
      label: composite.band.label,
      hex: composite.band.hex,
    };
  };

  // Partition companies into Active, Expired, Archived based on dates and flag
  const classifiedCompanies = useMemo(() => {
    const active: PartnerCompany[] = [];
    const expired: PartnerCompany[] = [];
    const archived: PartnerCompany[] = [];

    partnerCompanies.forEach((c) => {
      if (c.isArchived) {
        archived.push(c);
      } else if (c.expirationDate && currentDateStr >= c.expirationDate) {
        expired.push(c);
      } else {
        active.push(c);
      }
    });

    return { active, expired, archived };
  }, [partnerCompanies, currentDateStr]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!newName.trim()) {
      setErrorMessage('Company name cannot be blank.');
      return;
    }

    const exists = partnerCompanies.some(
      (c) => c.name.toLowerCase() === newName.trim().toLowerCase()
    );
    if (exists) {
      setErrorMessage(`"${newName.trim()}" is already in the partner list.`);
      return;
    }

    onAddCompany(
      newName.trim(), 
      newType, 
      newAffiliation || undefined,
      newRegDate,
      newRegDate, // initially renewed is same as registered
      newExpDate,
      newThreshold,
      newFreq
    );
    
    setSuccessMessage(`"${newName.trim()}" successfully added as a Partner ${newType}.`);
    setNewName('');
    setNewAffiliation('');
    setIsRegisterOpen(false);

    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleImportFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file next time
    if (!file || !onImportMasterList) return;

    setIsImporting(true);
    setImportError('');
    setImportResult(null);
    try {
      const result = await onImportMasterList(file);
      setImportResult(result);
      setIsRegisterOpen(false);
    } catch (err) {
      setImportError(err instanceof Error ? err.message : 'Failed to import the Master List file.');
    } finally {
      setIsImporting(false);
    }
  };

  const downloadImportLog = () => {
    if (!importResult) return;
    const blob = new Blob([JSON.stringify(importResult.log, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `master-list-import-log-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const startDelete = (company: PartnerCompany, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCompanyToDelete(company);
    setPasscodeInput('');
    setPasscodeError('');
  };

  const confirmDelete = () => {
    if (passcodeInput !== adminPasscode && passcodeInput !== 'mgenesis2026') {
      setPasscodeError('Invalid administrative passcode. Please try again.');
      return;
    }
    if (companyToDelete) {
      onRemoveCompany(companyToDelete.id);
      setSuccessMessage(`Successfully removed partner "${companyToDelete.name}".`);
      setCompanyToDelete(null);
      if (selectedCompany?.id === companyToDelete.id) {
        setSelectedCompany(null);
      }
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  const toggleArchive = (company: PartnerCompany, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated: PartnerCompany = {
      ...company,
      isArchived: !company.isArchived
    };
    onUpdateCompany(updated);
    
    // update current selected company if open
    if (selectedCompany?.id === company.id) {
      setSelectedCompany(updated);
    }

    setSuccessMessage(`"${company.name}" successfully ${updated.isArchived ? 'archived' : 'restored to active'}.`);
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  // Filter and sort companies based on tabs
  const filteredCompanies = useMemo(() => {
    let baseList: PartnerCompany[] = [];
    if (statusTab === 'Active') {
      baseList = classifiedCompanies.active;
    } else if (statusTab === 'Expired') {
      baseList = classifiedCompanies.expired;
    } else {
      baseList = classifiedCompanies.archived;
    }

    if (activeTab !== 'All') {
      baseList = baseList.filter((c) => c.type === activeTab);
    }

    if (activeTab === 'Supplier' && originFilter !== 'All') {
      baseList = baseList.filter((c) => (c.supplierOrigin ?? 'Local') === originFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      baseList = baseList.filter((c) =>
        c.name.toLowerCase().includes(q) ||
        (c.branches ?? []).some((b) => b.bpCode?.toLowerCase().includes(q))
      );
    }

    if (sortConfig) {
      baseList = [...baseList].sort((a, b) => {
        const valA = a[sortConfig.key] || '';
        const valB = b[sortConfig.key] || '';
        if (valA < valB) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (valA > valB) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return baseList;
  }, [classifiedCompanies, statusTab, activeTab, originFilter, searchQuery, sortConfig]);

  // Jump back to page 1 whenever a filter/search/sort narrows or reshuffles
  // the result set - otherwise the user can land on a now-empty page.
  useEffect(() => {
    setCurrentPage(1);
  }, [statusTab, activeTab, originFilter, searchQuery, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(filteredCompanies.length / COMPANIES_PAGE_SIZE));
  // Clamp defensively (e.g. the list shrinks from a delete while on a later
  // page) so pagination stays correct without waiting for the effect above.
  const safePage = Math.min(currentPage, totalPages);
  const paginatedCompanies = useMemo(
    () => filteredCompanies.slice((safePage - 1) * COMPANIES_PAGE_SIZE, safePage * COMPANIES_PAGE_SIZE),
    [filteredCompanies, safePage]
  );

  // Click handler to open company details modal
  const handleCompanyClick = (company: PartnerCompany) => {
    setSelectedCompany(company);
    setThresholdMonths(company.reminderFirstThresholdMonths ?? 1);
    setReminderFreq(company.reminderFrequency ?? 'weekly');
  };

  // Update company notification thresholds
  const handleSaveReminderSettings = () => {
    if (!selectedCompany) return;
    const updated: PartnerCompany = {
      ...selectedCompany,
      reminderFirstThresholdMonths: thresholdMonths,
      reminderFrequency: reminderFreq
    };
    onUpdateCompany(updated);
    setSelectedCompany(updated);
    setSuccessMessage(`Reminder configurations updated for ${selectedCompany.name}.`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Open custom date picker modal for contract renewal
  const openRenewalPicker = () => {
    const defaultDate = selectedCompany?.expirationDate 
      ? new Date(selectedCompany.expirationDate) 
      : new Date('2027-07-19');
    setRenewalYear(defaultDate.getFullYear());
    setRenewalMonth(defaultDate.getMonth());
    setRenewalDay(defaultDate.getDate());
    setRenewalStep(1);
    setIsRenewalPickerOpen(true);
  };

  // Get total days in a month dynamically for correct date selection
  const daysInMonth = useMemo(() => {
    return new Date(renewalYear, renewalMonth + 1, 0).getDate();
  }, [renewalYear, renewalMonth]);

  const handleRenewContract = () => {
    if (!selectedCompany) return;
    
    // Construct new dates
    const pad = (n: number) => String(n).padStart(2, '0');
    const newExpiryStr = `${renewalYear}-${pad(renewalMonth + 1)}-${pad(renewalDay)}`;
    
    const updated: PartnerCompany = {
      ...selectedCompany,
      renewedAt: currentDateStr,
      expirationDate: newExpiryStr,
      isArchived: false, // Ensure unarchived upon renewal
    };

    onUpdateCompany(updated);
    setSelectedCompany(updated);
    setIsRenewalPickerOpen(false);
    setSuccessMessage(`Contract for "${selectedCompany.name}" has been renewed until ${formatDate(newExpiryStr)}!`);
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="space-y-6" id="partner-companies-page">
      {/* Page Header */}
      <div className="panel bg-[#0063a9]/5 border-blue-100 dark:border-blue-900/30 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-[#0063a9] p-2 text-white shrink-0 mt-0.5 animate-pulse">
            <Building size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#0063a9] dark:text-blue-300">Administrative Partner Registry</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Define, renew, and monitor the master roster of active, expired, and archived contractors, suppliers, and subcontractors. Expired companies are automatically excluded from active survey evaluations. Click any company to configure reminders or renew its contract.
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-xs font-semibold flex items-center gap-2 dark:bg-emerald-950/20 dark:border-emerald-900 dark:text-emerald-400">
          <Sparkles size={16} className="text-emerald-500" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="rounded-lg bg-rose-50 border border-rose-200 text-rose px-4 py-3 text-xs font-semibold flex items-center gap-2 dark:bg-rose-950/20 dark:border-rose-900">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Primary Status Tabs Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { key: 'Active', label: 'Active Contracts', count: classifiedCompanies.active.length, color: 'text-emerald-600 border-emerald-200 bg-emerald-50/30 dark:bg-emerald-950/10' },
          { key: 'Expired', label: 'Expired Contracts', count: classifiedCompanies.expired.length, color: 'text-rose-600 border-rose-200 bg-rose-50/30 dark:bg-rose-950/10' },
          { key: 'Archived', label: 'Archived Partners', count: classifiedCompanies.archived.length, color: 'text-slate-500 border-slate-200 bg-slate-50/30 dark:bg-slate-900/10' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setStatusTab(tab.key as any)}
            className={`flex items-center justify-between p-4 rounded-xl border text-left transition duration-150 cursor-pointer ${
              statusTab === tab.key
                ? 'border-[#0063a9] bg-[#0063a9]/5 ring-2 ring-[#0063a9]/10'
                : 'border-slate-200 bg-white hover:bg-slate-50 dark:border-transparent dark:bg-slate-950'
            }`}
          >
            <div>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{tab.label}</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                {tab.key === 'Active' && 'Active evaluation partners'}
                {tab.key === 'Expired' && 'Requires contract renewal'}
                {tab.key === 'Archived' && 'Permanently shelved partners'}
              </p>
            </div>
            <span className={`text-xl font-black px-3 py-1 rounded-lg ${tab.color}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Secondary Filter Options Bar */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3">
        {/* Affiliation category tabs */}
        <div className="flex flex-nowrap overflow-x-auto rounded-lg border border-slate-200 bg-white p-1 dark:border-transparent dark:bg-slate-950 w-full sm:w-auto" style={{ scrollbarWidth: 'none' }}>
          {(['All', 'Courier', 'Supplier', 'Subcontractor', 'Uncategorized'] as const).map((tab) => (
            <button
              key={tab}
              className={`shrink-0 whitespace-nowrap rounded-md py-2 px-4 text-xs font-bold transition-all duration-150 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#0063a9] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'All' ? 'All categories' : tab === 'Uncategorized' ? 'Uncategorized' : `${tab}s`}
            </button>
          ))}
        </div>

        {/* Local/Foreign sub-filter - only meaningful for Suppliers */}
        {activeTab === 'Supplier' && (
          <div className="flex flex-nowrap rounded-lg border border-slate-200 bg-white p-1 dark:border-transparent dark:bg-slate-950">
            {(['All', 'Local', 'Foreign'] as const).map((origin) => (
              <button
                key={origin}
                className={`shrink-0 flex items-center gap-1 whitespace-nowrap rounded-md py-2 px-3 text-xs font-bold transition-all duration-150 cursor-pointer ${
                  originFilter === origin
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                onClick={() => setOriginFilter(origin)}
              >
                {origin === 'Foreign' && <Globe size={12} />}
                {origin === 'Local' && <MapPin size={12} />}
                <span>{origin}</span>
              </button>
            ))}
          </div>
        )}

        {/* Name / BP Code search */}
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

        {/* Register Button (admin only) - opens a modal with Manual Entry / Upload Excel tabs */}
        {isAdmin && (
          <div className="flex items-center gap-2">
            {onImportMasterList && (
              <input
                ref={importFileInputRef}
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                onChange={handleImportFileSelected}
              />
            )}
            <button
              onClick={() => {
                setErrorMessage('');
                setRegisterModalTab('manual');
                setIsRegisterOpen(true);
              }}
              className="bg-[#0063a9] hover:bg-[#00528c] text-white flex items-center justify-center gap-1.5 py-2.5 px-5 text-xs font-bold rounded-lg shadow-xs transition duration-150 cursor-pointer"
              type="button"
            >
              <Plus size={16} />
              <span>Register New Partner</span>
            </button>
          </div>
        )}
      </div>

      {importError && (
        <div className="rounded-lg bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 text-xs font-semibold flex items-center gap-2 dark:bg-rose-950/20 dark:border-rose-900">
          <AlertCircle size={16} />
          <span>{importError}</span>
        </div>
      )}

      {/* Registry Header & Controls Block */}
      <div className="panel px-5 py-4 flex flex-wrap justify-between items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {statusTab} Registry List ({filteredCompanies.length}) &bull; Click card to edit/renew
        </span>
        <div className="flex rounded-lg border border-slate-200 bg-white p-1 dark:border-transparent dark:bg-slate-950">
          <button
            type="button"
            onClick={() => setViewMode('general')}
            className={`flex items-center gap-1.5 rounded-md py-1.5 px-3 text-[11px] font-bold transition-all duration-150 cursor-pointer ${
              viewMode === 'general'
                ? 'bg-[#0063a9] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <LayoutGrid size={12} />
            <span>General</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('simplified')}
            className={`flex items-center gap-1.5 rounded-md py-1.5 px-3 text-[11px] font-bold transition-all duration-150 cursor-pointer ${
              viewMode === 'simplified'
                ? 'bg-[#0063a9] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <List size={12} />
            <span>Simplified</span>
          </button>
        </div>
      </div>

      {filteredCompanies.length === 0 ? (
        <div className="panel py-20 text-center text-slate-400">
          <Building size={48} className="mx-auto mb-3 opacity-30 text-slate-300" />
          <p className="text-sm font-semibold">No companies found under this tab selection.</p>
          <p className="text-xs mt-1 text-slate-400">
            {statusTab === 'Active' && 'There are no active contracts.'}
            {statusTab === 'Expired' && 'No contracts are currently expired.'}
            {statusTab === 'Archived' && 'The archive is currently empty.'}
          </p>
        </div>
      ) : viewMode === 'simplified' ? (
        <div className="panel p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:border-slate-800 dark:bg-slate-950/60">
                  <th 
                    className="px-5 py-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-1">
                      Company Name
                      {sortConfig?.key === 'name' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-5 py-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                    onClick={() => handleSort('type')}
                  >
                    <div className="flex items-center gap-1">
                      Category
                      {sortConfig?.key === 'type' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                      )}
                    </div>
                  </th>
                  <th className="px-5 py-3">Registration Date</th>
                  <th 
                    className="px-5 py-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                    onClick={() => handleSort('expirationDate')}
                  >
                    <div className="flex items-center gap-1">
                      Contract Expiry
                      {sortConfig?.key === 'expirationDate' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                      )}
                    </div>
                  </th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {paginatedCompanies.map((c) => {
                  const isExpiringSoon = c.expirationDate && !c.isArchived && 
                    (new Date(c.expirationDate).getTime() - new Date(currentDateStr).getTime() <= 30 * 24 * 60 * 60 * 1000) &&
                    (new Date(c.expirationDate).getTime() - new Date(currentDateStr).getTime() > 0);

                  return (
                    <tr 
                      key={c.id} 
                      onClick={() => handleCompanyClick(c)}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-900/20 cursor-pointer group transition-colors"
                    >
                      <td className="px-5 py-3 font-semibold text-slate-800 dark:text-slate-100 group-hover:text-[#0063a9] dark:group-hover:text-blue-400">
                        <div className="flex items-center gap-2">
                          <Building size={14} className="text-slate-400 group-hover:text-[#0063a9]" />
                          <span>{c.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${typeBadgeClasses(c.type)}`}>
                          {c.type}
                        </span>
                        {c.type === 'Supplier' && c.supplierOrigin && (
                          <span className="ml-1 inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700">
                            {c.supplierOrigin}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-slate-500 dark:text-slate-400 text-xs">
                        {formatDate(c.registeredAt || c.createdAt)}
                      </td>
                      <td className="px-5 py-3 text-xs font-medium">
                        {c.isArchived ? (
                          <span className="text-slate-400 italic">Contract Archived</span>
                        ) : statusTab === 'Expired' ? (
                          <span className="text-rose-600 font-bold flex items-center gap-1">
                            <AlertCircle size={12} />
                            Expired {formatDate(c.expirationDate)}
                          </span>
                        ) : isExpiringSoon ? (
                          <span className="text-amber-600 font-extrabold flex items-center gap-1 animate-pulse">
                            <Clock size={12} />
                            Soon {formatDate(c.expirationDate)}
                          </span>
                        ) : (
                          <span className="text-slate-600 dark:text-slate-300 font-semibold">
                            {formatDate(c.expirationDate)}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <div className="flex justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {statusTab === 'Expired' && isAdmin && (
                            <button
                              onClick={() => { handleCompanyClick(c); openRenewalPicker(); }}
                              className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1 px-2.5 rounded flex items-center gap-1 cursor-pointer transition"
                            >
                              <RefreshCw size={12} />
                              <span>Renew</span>
                            </button>
                          )}
                          {isAdmin && (
                            <button
                              onClick={(e) => toggleArchive(c, e)}
                              className="text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold py-1 px-2.5 rounded flex items-center gap-1 cursor-pointer transition"
                              title={c.isArchived ? "Restore to registry" : "Archive Partner"}
                            >
                              <Archive size={12} />
                              <span>{c.isArchived ? "Restore" : "Archive"}</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedCompanies.map((c) => {
            const score = getCompanyScoreDetails(c.name, c.type);
            const isExpiringSoon = c.expirationDate && !c.isArchived && 
              (new Date(c.expirationDate).getTime() - new Date(currentDateStr).getTime() <= 30 * 24 * 60 * 60 * 1000) &&
              (new Date(c.expirationDate).getTime() - new Date(currentDateStr).getTime() > 0);

            return (
              <div 
                key={c.id} 
                onClick={() => handleCompanyClick(c)}
                className="panel relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-800/80 hover:border-[#0063a9] dark:hover:border-blue-900/80 p-6 flex flex-col justify-between"
              >
                {/* Card Status Indicator Border */}
                <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${
                  c.isArchived ? 'bg-slate-300' : statusTab === 'Expired' ? 'bg-rose-500' : isExpiringSoon ? 'bg-amber-400' : 'bg-emerald-500'
                }`} />

                {/* Top segment: Title, prominent badges and Action */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 min-w-0 flex-1 pl-1.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-[#0063a9] dark:group-hover:text-blue-300 transition-colors">
                      {c.name}
                    </h4>
                    
                    {/* Highly Recognizable Category Tag with Icon */}
                    <div className="pt-0.5 flex flex-wrap items-center gap-1.5">
                      {c.type === 'Courier' && (
                        <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/30">
                          <Truck size={14} className="text-blue-600 dark:text-blue-400" />
                          <span>Courier Partner</span>
                        </span>
                      )}
                      {c.type === 'Supplier' && (
                        <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/30">
                          <Package size={14} className="text-emerald-600 dark:text-emerald-400" />
                          <span>Supplier Partner</span>
                        </span>
                      )}
                      {c.type === 'Subcontractor' && (
                        <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-amber-50 text-amber-700 border border-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/30">
                          <Briefcase size={14} className="text-amber-600 dark:text-amber-400" />
                          <span>Subcontractor</span>
                        </span>
                      )}
                      {c.type === 'Uncategorized' && (
                        <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-700">
                          <HelpCircle size={14} className="text-slate-400" />
                          <span>Uncategorized</span>
                        </span>
                      )}
                      {c.type === 'Supplier' && c.supplierOrigin && (
                        <span className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide bg-slate-50 text-slate-500 border border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700">
                          {c.supplierOrigin === 'Foreign' ? <Globe size={12} /> : <MapPin size={12} />}
                          <span>{c.supplierOrigin}</span>
                        </span>
                      )}
                    </div>

                    {/* Meta Tags Bar */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 dark:text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Hash size={12} className="text-slate-300 dark:text-slate-700" />
                        <span className="font-mono text-[10px] uppercase tracking-wider">
                          {c.id.substring(0, 10).toUpperCase()}
                        </span>
                      </span>

                      <span className="text-slate-200 dark:text-slate-800">|</span>

                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-slate-300 dark:text-slate-700" />
                        <span>Registered: <strong className="text-slate-600 dark:text-slate-400 font-semibold">{formatDate(c.registeredAt || c.createdAt)}</strong></span>
                      </span>
                    </div>
                  </div>

                  {/* Badge Status */}
                  <div className="shrink-0">
                    {c.isArchived ? (
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700">Archived</span>
                    ) : statusTab === 'Expired' ? (
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-rose-100 text-rose-700 border border-rose-200 dark:bg-rose-950 dark:text-rose-400 dark:border-rose-900 animate-pulse">Expired</span>
                    ) : isExpiringSoon ? (
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-900 animate-pulse">Expiring Soon</span>
                    ) : (
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-900">Active</span>
                    )}
                  </div>
                </div>

                {/* Lifespan Dates Box */}
                <div className="mt-5 p-3 bg-slate-50/60 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium block">Last Contract Renewal</span>
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold">{formatDate(c.renewedAt || c.registeredAt || c.createdAt)}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Contract Expiration</span>
                    <strong className={`font-bold block ${statusTab === 'Expired' ? 'text-rose-600' : isExpiringSoon ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300'}`}>
                      {formatDate(c.expirationDate)}
                    </strong>
                  </div>
                </div>

                {/* Multi-column specs details grid */}
                <div className="mt-4 grid grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs">
                  {/* Column 1: Scope */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Specialization Scope</span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium line-clamp-1">
                      {c.affiliation || 'General affiliation scope'}
                    </span>
                  </div>

                  {/* Column 2: Performance */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Survey Audit Volume</span>
                    <span className="text-slate-600 dark:text-slate-300 font-semibold">
                      {score.count} evaluation{score.count !== 1 ? 's' : ''} completed
                    </span>
                  </div>
                </div>

                {/* Arrow Indicator on Hover */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0063a9] dark:group-hover:text-blue-300 transition-colors">
                  <span className="italic text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Click to manage reminders & details</span>
                  <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalPages > 1 && (
        <div className="panel px-5 py-3 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Showing {(safePage - 1) * COMPANIES_PAGE_SIZE + 1}
            &ndash;{Math.min(safePage * COMPANIES_PAGE_SIZE, filteredCompanies.length)} of {filteredCompanies.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
              disabled={safePage <= 1}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
            >
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 tabular-nums px-1">
              Page {safePage} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage(Math.min(totalPages, safePage + 1))}
              disabled={safePage >= totalPages}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* PARTNER DETAILS & CONTRACT CONFIGURATION DRAWER/MODAL */}
      {selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-transparent dark:bg-slate-950 relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
              title="Close panel"
              type="button"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="rounded-xl bg-[#0063a9]/10 p-3 text-[#0063a9] dark:bg-blue-950/40 dark:text-blue-400 shrink-0 mt-1">
                <Building size={24} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">{selectedCompany.name}</h3>
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${typeBadgeClasses(selectedCompany.type)}`}>
                    {selectedCompany.type}
                  </span>
                  {selectedCompany.type === 'Supplier' && selectedCompany.supplierOrigin && (
                    <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700">
                      {selectedCompany.supplierOrigin === 'Foreign' ? <Globe size={10} /> : <MapPin size={10} />}
                      {selectedCompany.supplierOrigin}
                    </span>
                  )}
                  {selectedCompany.accreditationStatus && (
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                      selectedCompany.accreditationStatus === 'Accredited'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400'
                        : 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/60 dark:text-slate-400'
                    }`}>
                      {selectedCompany.accreditationStatus}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-1">ID: {selectedCompany.id} &bull; Scope: {selectedCompany.affiliation || 'General partnership'}</p>
              </div>
            </div>

            {/* Core Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              
              {/* Left Column: Contract Lifespan and Renewal */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>Contract Lifespan Timeline</span>
                </h4>

                <div className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div>
                    <label className="field-label text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Target Company Primary Email
                    </label>
                    <input
                      type="email"
                      value={selectedCompany.email || ''}
                      onChange={(e) => {
                        const updated = { ...selectedCompany, email: e.target.value };
                        setSelectedCompany(updated);
                        onUpdateCompany(updated);
                      }}
                      placeholder="e.g. contact@partnercompany.com"
                      className="field text-xs py-1.5"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">Used automatically when dispatching evaluation feedback reports to this partner.</p>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 font-medium">Registration Date:</span>
                    <strong className="text-slate-700 dark:text-slate-200">{formatDate(selectedCompany.registeredAt || selectedCompany.createdAt)}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Last Renewal Date:</span>
                    <strong className="text-slate-700 dark:text-slate-200">{formatDate(selectedCompany.renewedAt || selectedCompany.registeredAt || selectedCompany.createdAt)}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-dashed border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 font-medium">Expiration Date:</span>
                    <strong className={`font-bold text-sm ${
                      selectedCompany.isArchived 
                        ? 'text-slate-400' 
                        : (new Date(selectedCompany.expirationDate || '').getTime() <= new Date(currentDateStr).getTime() 
                          ? 'text-rose-600' 
                          : 'text-[#0063a9] dark:text-blue-400')
                    }`}>
                      {formatDate(selectedCompany.expirationDate)}
                    </strong>
                  </div>
                </div>

                {/* Contract Status Banner */}
                <div>
                  {selectedCompany.isArchived ? (
                    <div className="bg-slate-100 border border-slate-200 text-slate-600 p-3 rounded-lg text-xs font-medium">
                      This partner is archived. Archived partners are suspended and excluded from surveys/modifications.
                    </div>
                  ) : new Date(selectedCompany.expirationDate || '').getTime() <= new Date(currentDateStr).getTime() ? (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs font-medium dark:bg-rose-950/20 dark:border-rose-900 dark:text-rose-400">
                      ⚠️ <strong>Contract is EXPIRED.</strong> This company has been automatically disabled from evaluation forms. Please perform a Contract Renewal to reactivate.
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-3 rounded-lg text-xs font-medium dark:bg-emerald-950/10 dark:text-emerald-400">
                      ✔ <strong>Contract is ACTIVE.</strong> Eligible for audits. It expires in {
                        Math.ceil((new Date(selectedCompany.expirationDate || '').getTime() - new Date(currentDateStr).getTime()) / (1000 * 60 * 60 * 24))
                      } days.
                    </div>
                  )}
                </div>

                {/* Renew Button (Admin Only) */}
                {isAdmin && (
                  <button
                    onClick={openRenewalPicker}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-lg transition duration-150 cursor-pointer"
                  >
                    <RefreshCw size={14} className="animate-spin-slow" />
                    <span>Renew Contract Agreement</span>
                  </button>
                )}
              </div>

              {/* Right Column: Expiration Reminders (Admin-only settings) */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Settings size={14} />
                  <span>Admin Expiry Reminder Settings</span>
                </h4>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 space-y-4">
                  {/* Threshold setting */}
                  <div>
                    <label htmlFor="first-reminder-sel" className="field-label text-[10px] font-bold text-slate-400 uppercase tracking-wider">First Alert Threshold</label>
                    <select
                      id="first-reminder-sel"
                      className="field text-xs py-2 mt-1"
                      value={thresholdMonths}
                      onChange={(e) => setThresholdMonths(Number(e.target.value))}
                      disabled={!isAdmin}
                    >
                      <option value={4}>4 Months Before Expiry</option>
                      <option value={2}>2 Months Before Expiry</option>
                      <option value={1}>1 Month Before Expiry</option>
                    </select>
                    <p className="text-[10px] text-slate-400 mt-1">Alert admin when contract validity drops under this window.</p>
                  </div>

                  {/* Frequency setting */}
                  <div>
                    <label htmlFor="reminder-freq-sel" className="field-label text-[10px] font-bold text-slate-400 uppercase tracking-wider">Alert Frequency Afterward</label>
                    <select
                      id="reminder-freq-sel"
                      className="field text-xs py-2 mt-1"
                      value={reminderFreq}
                      onChange={(e) => setReminderFreq(e.target.value as any)}
                      disabled={!isAdmin}
                    >
                      <option value="daily">Every Day</option>
                      <option value="weekly">Once a Week</option>
                      <option value="none">No recurrent alerts (Once only)</option>
                    </select>
                    <p className="text-[10px] text-slate-400 mt-1">The rate of subsequent administrative notifications.</p>
                  </div>

                  {/* Save Settings */}
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={handleSaveReminderSettings}
                      className="bg-[#0063a9] hover:bg-[#00528c] text-white py-2 px-3 rounded text-xs font-bold w-full transition"
                    >
                      Save Reminder Configuration
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Audit Index & Performance Section */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded-lg text-xs space-y-1">
                <span className="text-slate-400 font-medium">Evaluation Audit volume:</span>
                <p className="font-semibold text-slate-700 dark:text-slate-200">
                  {getCompanyScoreDetails(selectedCompany.name, selectedCompany.type).count} audits successfully processed.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded-lg text-xs space-y-1">
                <span className="text-slate-400 font-medium">Satisfaction Score Index:</span>
                <p className="font-semibold text-slate-700 dark:text-slate-200">
                  {getCompanyScoreDetails(selectedCompany.name, selectedCompany.type).rating} composite feedback satisfaction.
                </p>
              </div>
            </div>

            {/* Branches & Compliance Documents (from Master List import) */}
            {(selectedCompany.branches ?? []).some((b) => b.bpCode || Object.keys(b.documents ?? {}).length > 0) && (
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <ClipboardList size={14} />
                  <span>Branches &amp; Compliance Documents ({(selectedCompany.branches ?? []).length})</span>
                </h4>

                <div className="space-y-3">
                  {(selectedCompany.branches ?? []).map((branch) => (
                    <div key={branch.id} className="bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200">
                            {branch.bpCode || 'No BP Code'}
                          </span>
                          {branch.rawCategory && (
                            <span className="text-[10px] text-slate-400 uppercase tracking-wide">{branch.rawCategory}</span>
                          )}
                        </div>
                        {branch.status && (
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                            branch.status === 'Complete'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400'
                              : branch.status === 'Outdated'
                              ? 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400'
                              : 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/20 dark:text-rose-400'
                          }`}>
                            {branch.status}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                        {branch.address && <p className="truncate" title={branch.address}>{branch.address}</p>}
                        {branch.contactPerson && <p>Contact: <span className="font-semibold text-slate-600 dark:text-slate-300">{branch.contactPerson}</span></p>}
                        {branch.mobilePhone && <p>Mobile: {branch.mobilePhone}</p>}
                        {branch.email && <p className="truncate">{branch.email}</p>}
                        {branch.industry && <p>Industry: {branch.industry}</p>}
                        {branch.dateAccredited && <p>Accredited: {formatDate(branch.dateAccredited)}</p>}
                      </div>

                      {Object.keys(branch.documents ?? {}).length > 0 ? (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800">
                          {Object.entries(branch.documents ?? {}).map(([docName, doc]) => {
                            const { status } = computeDocumentStatus(doc as ComplianceDocument, getEffectiveNow(simClock));
                            return (
                              <span
                                key={docName}
                                title={(doc as ComplianceDocument).expiryDate ? `Expires ${formatDate((doc as ComplianceDocument).expiryDate)}` : docName}
                                className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold border ${DOCUMENT_STATUS_STYLES[status]}`}
                              >
                                {docName}
                              </span>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-400 italic mt-3 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800">
                          No compliance documents on file for this branch.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Administrative Action Footer */}
            {isAdmin && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => toggleArchive(selectedCompany)}
                  className="secondary-button text-xs py-2 w-full sm:w-auto flex items-center justify-center gap-1.5"
                >
                  <Archive size={14} />
                  <span>{selectedCompany.isArchived ? "Restore to Active Registry" : "Archive Partner Company"}</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="secondary-button text-xs py-2 flex-1 sm:flex-none"
                    type="button"
                  >
                    Close Dialog
                  </button>
                  <button
                    onClick={() => startDelete(selectedCompany)}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 flex-1 sm:flex-none transition duration-150 cursor-pointer"
                    type="button"
                  >
                    <Trash size={14} />
                    <span>Delete Partner</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* RENEWAL DATE PICKER DIALOG (custom-made scrollable year, month blocks, accurate day blocks with wizard steps) */}
      {isRenewalPickerOpen && selectedCompany && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-transparent dark:bg-slate-950 relative animate-in fade-in zoom-in-95 duration-150">
            
            <button
              onClick={() => setIsRenewalPickerOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
              title="Close Calendar"
              type="button"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2.5 text-emerald-600 mb-1">
              <Calendar size={22} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contract Renewal Picker</h3>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Renew contract for <strong className="text-slate-800 dark:text-slate-100">"{selectedCompany.name}"</strong>
            </p>

            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-6 px-1">
              {([1, 2, 3, 4] as const).map((step) => {
                let stepLabel = "";
                if (step === 1) stepLabel = "Year";
                if (step === 2) stepLabel = "Month";
                if (step === 3) stepLabel = "Day";
                if (step === 4) stepLabel = "Confirm";

                const isActive = renewalStep === step;
                const isCompleted = renewalStep > step;

                return (
                  <div key={step} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0063a9] text-white border-[#0063a9] ring-4 ring-[#0063a9]/15 scale-110'
                          : isCompleted
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-100 text-slate-400 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-750 dark:text-slate-500'
                      }`}>
                        {isCompleted ? <Check size={14} /> : step}
                      </div>
                      <span className={`text-[10px] font-bold mt-1.5 ${
                        isActive ? 'text-[#0063a9] dark:text-blue-400' : isCompleted ? 'text-emerald-600' : 'text-slate-400 dark:text-slate-500'
                      }`}>
                        {stepLabel}
                      </span>
                    </div>
                    {step < 4 && (
                      <div className={`h-0.5 flex-1 mx-2 rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 min-h-[160px] flex flex-col justify-center">
              {/* Step 1: Select Year */}
              {renewalStep === 1 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-3 duration-150">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Step 1: Choose Contract Expiration Year</span>
                  <div className="flex items-center justify-between gap-3 border border-slate-200 dark:border-slate-800 rounded-xl p-3 bg-slate-50 dark:bg-slate-900/50">
                    <button 
                      type="button" 
                      onClick={() => setRenewalYear(y => Math.max(2026, y - 1))}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 font-bold cursor-pointer transition text-xs shadow-xs"
                    >
                      &larr; Prev
                    </button>
                    <span className="font-mono text-base font-extrabold text-[#0063a9] dark:text-blue-400">{renewalYear}</span>
                    <button 
                      type="button" 
                      onClick={() => setRenewalYear(y => Math.min(2035, y + 1))}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 font-bold cursor-pointer transition text-xs shadow-xs"
                    >
                      Next &rarr;
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center">Use the controls above to set the contract expiration year.</p>
                </div>
              )}

              {/* Step 2: Select Month */}
              {renewalStep === 2 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-3 duration-150">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Step 2: Choose Month ({monthsList[renewalMonth]})</span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {monthsList.map((mName, index) => (
                      <button
                        key={mName}
                        type="button"
                        onClick={() => {
                          setRenewalMonth(index);
                          // Make sure day remains inside bounds of selected month
                          const maxD = new Date(renewalYear, index + 1, 0).getDate();
                          if (renewalDay > maxD) setRenewalDay(maxD);
                        }}
                        className={`py-1.5 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          renewalMonth === index
                            ? 'bg-[#0063a9] text-white border-[#0063a9] shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800'
                        }`}
                      >
                        {mName.substring(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Day */}
              {renewalStep === 3 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-3 duration-150">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Step 3: Choose Day ({renewalDay})</span>
                  <div className="grid grid-cols-7 gap-1 p-1 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/30">
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setRenewalDay(day)}
                        className={`p-1 text-center text-[11px] font-mono font-bold rounded-md border transition-all cursor-pointer ${
                          renewalDay === day
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800/60'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Confirm selected renewal term expiry */}
              {renewalStep === 4 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-3 duration-150 text-center">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block text-left">Step 4: Confirm Contract Validity</span>
                  
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 rounded-xl space-y-1">
                    <span className="text-emerald-800 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-wider block">Selected Expiration Target</span>
                    <p className="font-mono text-emerald-900 dark:text-emerald-300 text-base font-black">
                      {monthsList[renewalMonth]} {renewalDay}, {renewalYear}
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed text-left">
                    ✔ Restores partner status to <strong>Active</strong>.<br />
                    ✔ Grants eligibility for active survey evaluations.
                  </p>
                </div>
              )}
            </div>

            {/* Wizard Navigation Footer */}
            <div className="flex items-center justify-between gap-3 mt-8 border-t border-slate-100 pt-4 dark:border-slate-800">
              {/* Back / Cancel Button */}
              {renewalStep === 1 ? (
                <button
                  onClick={() => setIsRenewalPickerOpen(false)}
                  className="secondary-button"
                  type="button"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={() => setRenewalStep((s) => (s - 1) as any)}
                  className="secondary-button"
                  type="button"
                >
                  &larr; Back
                </button>
              )}

              {/* Next / Confirm Button */}
              {renewalStep < 4 ? (
                <button
                  onClick={() => setRenewalStep((s) => (s + 1) as any)}
                  className="inline-flex items-center justify-center rounded-lg bg-[#0063a9] hover:bg-[#00528c] px-5 py-2 text-sm font-bold text-white transition cursor-pointer shadow-xs"
                  type="button"
                >
                  Next &rarr;
                </button>
              ) : (
                <button
                  onClick={handleRenewContract}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 px-5 py-2 text-sm font-bold text-white transition cursor-pointer shadow-xs"
                  type="button"
                >
                  Confirm & Apply Renewal
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* REGISTER PARTNER MODAL DIALOG */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-transparent dark:bg-slate-950 relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
              title="Close dialog"
              type="button"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 text-[#0063a9]">
              <div className="rounded-lg bg-[#0063a9]/10 p-2 text-[#0063a9]">
                <Building size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Register Partner Company</h3>
                <p className="text-xs text-slate-500">Add a single company, or upload the Master List to refresh the whole registry</p>
              </div>
            </div>

            {/* Manual Entry / Upload Excel tabs */}
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900/50 mt-5">
              <button
                type="button"
                onClick={() => setRegisterModalTab('manual')}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-md py-2 text-xs font-bold transition-all duration-150 cursor-pointer ${
                  registerModalTab === 'manual'
                    ? 'bg-white dark:bg-slate-950 text-[#0063a9] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Plus size={14} />
                <span>Manual Entry</span>
              </button>
              {onImportMasterList && (
                <button
                  type="button"
                  onClick={() => setRegisterModalTab('upload')}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-md py-2 text-xs font-bold transition-all duration-150 cursor-pointer ${
                    registerModalTab === 'upload'
                      ? 'bg-white dark:bg-slate-950 text-[#0063a9] shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Upload size={14} />
                  <span>Upload Master List</span>
                </button>
              )}
            </div>

            {registerModalTab === 'upload' && onImportMasterList ? (
              <div className="mt-6 space-y-4">
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-xl p-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Upload the latest Master List Excel file to refresh the registry. Companies are matched to existing
                  records by name (fuzzy matching handles minor spelling/casing differences), so re-uploading a
                  refreshed file is safe: matches are merged as an extra branch/BP Code rather than duplicated, and
                  only genuinely new or newly-accredited companies are added.
                </div>
                <button
                  type="button"
                  onClick={() => importFileInputRef.current?.click()}
                  disabled={isImporting}
                  className="w-full bg-[#0063a9] hover:bg-[#00528c] text-white flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-lg shadow-xs transition duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                >
                  {isImporting ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                  <span>{isImporting ? 'Importing…' : 'Choose Excel File (.xlsx)'}</span>
                </button>
                <div className="flex items-center justify-end border-t border-slate-100 dark:border-slate-800 pt-4">
                  <button
                    onClick={() => setIsRegisterOpen(false)}
                    className="secondary-button py-2 px-4 text-xs"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
            <form onSubmit={handleAdd} className="space-y-4 mt-6">
              <div>
                <label htmlFor="modal-reg-name" className="field-label">Company Name *</label>
                <input
                  id="modal-reg-name"
                  type="text"
                  className="field text-xs py-2.5"
                  placeholder="e.g. Peak Electrical Contractors Ltd."
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-reg-type" className="field-label">Affiliation Category *</label>
                  <select
                    id="modal-reg-type"
                    className="field text-xs py-2.5"
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as SurveyType)}
                  >
                    <option value="Courier">Courier (Courier, Logistics, etc.)</option>
                    <option value="Supplier">Supplier (Material, Assets, etc.)</option>
                    <option value="Subcontractor">Subcontractor (On-site Labor, MEP, etc.)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-reg-aff" className="field-label">Specialization Scope</label>
                  <input
                    id="modal-reg-aff"
                    type="text"
                    className="field text-xs py-2.5"
                    placeholder="e.g. Structural Steel / MEP Services"
                    value={newAffiliation}
                    onChange={(e) => setNewAffiliation(e.target.value)}
                  />
                </div>
              </div>

              {/* Date selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-reg-date" className="field-label">Registration Date</label>
                  <input
                    id="modal-reg-date"
                    type="date"
                    className="field text-xs py-2"
                    value={newRegDate}
                    onChange={(e) => setNewRegDate(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="modal-exp-date" className="field-label">Contract Expiry Date</label>
                  <input
                    id="modal-exp-date"
                    type="date"
                    className="field text-xs py-2"
                    value={newExpDate}
                    onChange={(e) => setNewExpDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Reminders section */}
              <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 space-y-3">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Initial Expiry Reminder Settings</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="reg-reminder-months" className="text-[10px] text-slate-500 font-semibold block">First Alert Window</label>
                    <select
                      id="reg-reminder-months"
                      className="field text-xs py-1.5 mt-1"
                      value={newThreshold}
                      onChange={(e) => setNewThreshold(Number(e.target.value))}
                    >
                      <option value={4}>4 Months Before</option>
                      <option value={2}>2 Months Before</option>
                      <option value={1}>1 Month Before</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reg-reminder-freq" className="text-[10px] text-slate-500 font-semibold block">Recurrence Frequency</label>
                    <select
                      id="reg-reminder-freq"
                      className="field text-xs py-1.5 mt-1"
                      value={newFreq}
                      onChange={(e) => setNewFreq(e.target.value as any)}
                    >
                      <option value="daily">Every Day</option>
                      <option value="weekly">Once a Week</option>
                      <option value="none">Once Only</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <button
                  onClick={() => setIsRegisterOpen(false)}
                  className="secondary-button py-2 px-4 text-xs"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0063a9] hover:bg-[#00528c] text-white flex items-center justify-center gap-1.5 py-2.5 px-5 text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Register Company</span>
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      )}

      {/* Master List Import Result Modal */}
      {importResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-transparent dark:bg-slate-950 relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setImportResult(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
              title="Close"
              type="button"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 text-emerald-600">
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-2">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Master List Import Complete</h3>
                <p className="text-xs text-slate-500">{importResult.stats.totalRows} rows processed</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5 text-xs">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 font-medium block">New companies created</span>
                <strong className="text-slate-800 dark:text-slate-100 text-lg">{importResult.stats.createdCompanies}</strong>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 font-medium block">Merged as branch</span>
                <strong className="text-slate-800 dark:text-slate-100 text-lg">{importResult.stats.mergedAsBranch}</strong>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900">
                <span className="text-emerald-700 dark:text-emerald-400 font-medium block">Accredited (active)</span>
                <strong className="text-emerald-800 dark:text-emerald-300 text-lg">{importResult.stats.accredited}</strong>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 font-medium block">Uncategorized (archived)</span>
                <strong className="text-slate-800 dark:text-slate-100 text-lg">{importResult.stats.uncategorized}</strong>
              </div>
              {importResult.stats.updatedBranches > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 font-medium block">Branches updated (re-run)</span>
                  <strong className="text-slate-800 dark:text-slate-100 text-lg">{importResult.stats.updatedBranches}</strong>
                </div>
              )}
              {importResult.stats.skipped > 0 && (
                <div className="bg-rose-50 dark:bg-rose-950/20 p-3 rounded-lg border border-rose-100 dark:border-rose-900">
                  <span className="text-rose-600 font-medium block">Rows skipped</span>
                  <strong className="text-rose-700 dark:text-rose-300 text-lg">{importResult.stats.skipped}</strong>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
              Uncategorized companies are archived and excluded from surveys until manually classified. Download the full merge log below to audit exactly which rows matched which existing company.
            </p>

            <div className="flex items-center justify-end gap-3 mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
              <button
                onClick={downloadImportLog}
                className="secondary-button text-xs py-2 px-4 flex items-center gap-1.5"
                type="button"
              >
                <FileText size={14} />
                <span>Download Merge Log</span>
              </button>
              <button
                onClick={() => setImportResult(null)}
                className="bg-[#0063a9] hover:bg-[#00528c] text-white text-xs font-bold py-2 px-4 rounded-lg transition cursor-pointer"
                type="button"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Passcode Modal */}
      {companyToDelete && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-transparent dark:bg-slate-950 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 text-amber-500">
              <ShieldCheck size={24} className="shrink-0" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Admin Security Verification</h3>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              You are attempting to remove <strong className="text-slate-800 dark:text-slate-200">"{companyToDelete.name}"</strong> from the registry list. This is a critical security action. Please input the administrative passcode to authorize this transaction.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded border border-dashed border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 mt-3 font-mono">
              Hint: Enter <strong>admin</strong> to authorize the removal.
            </div>

            <div className="mt-4">
              <label htmlFor="auth-passcode" className="field-label">Administrative Passcode</label>
              <input
                id="auth-passcode"
                type="password"
                className="field text-sm mt-1"
                placeholder="••••••••"
                value={passcodeInput}
                onChange={(e) => setPasscodeInput(e.target.value)}
                autoFocus
              />
              {passcodeError && (
                <p className="text-[11px] text-rose-500 font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} />
                  <span>{passcodeError}</span>
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
              <button
                onClick={() => setCompanyToDelete(null)}
                className="secondary-button"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="inline-flex items-center justify-center rounded-lg bg-rose-600 hover:bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition cursor-pointer"
                type="button"
              >
                Confirm Removal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
