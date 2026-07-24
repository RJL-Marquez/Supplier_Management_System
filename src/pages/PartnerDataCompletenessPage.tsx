import { useMemo } from 'react';
import { ClipboardCheck, CheckCircle2, AlertTriangle, ChevronRight, MapPin, User, Mail, Phone } from 'lucide-react';
import { PartnerCompany } from '../types/survey';
import { typeBadgeClasses } from './PartnerCompaniesPage';

interface PartnerDataCompletenessPageProps {
  partnerCompanies: PartnerCompany[];
  onEditCompany: (companyId: string) => void;
}

type MissingField = 'address' | 'contact' | 'email' | 'phone';

const FIELD_META: Record<MissingField, { label: string; icon: typeof MapPin }> = {
  address: { label: 'Address', icon: MapPin },
  contact: { label: 'Contact Person', icon: User },
  email: { label: 'Email', icon: Mail },
  phone: { label: 'Mobile Phone', icon: Phone },
};

interface IncompleteEntry {
  company: PartnerCompany;
  missing: MissingField[];
}

function findMissingFields(company: PartnerCompany): MissingField[] {
  const branch = company.branches?.[0];
  const missing: MissingField[] = [];
  if (!branch?.address?.trim()) missing.push('address');
  if (!branch?.contactPerson?.trim()) missing.push('contact');
  if (!(branch?.email?.trim() || company.email?.trim())) missing.push('email');
  if (!branch?.mobilePhone?.trim()) missing.push('phone');
  return missing;
}

export function PartnerDataCompletenessPage({ partnerCompanies, onEditCompany }: PartnerDataCompletenessPageProps) {
  const { incomplete, activeCount } = useMemo(() => {
    // Only active, classified partners matter here - archived/uncategorized
    // master-list rows belong to the separate reclassification workflow, not
    // this "finish the profile" checklist.
    const active = partnerCompanies.filter((c) => c.type !== 'Uncategorized' && !c.isArchived);
    const entries: IncompleteEntry[] = active
      .map((company) => ({ company, missing: findMissingFields(company) }))
      .filter((entry) => entry.missing.length > 0)
      .sort((a, b) => b.missing.length - a.missing.length || a.company.name.localeCompare(b.company.name));
    return { incomplete: entries, activeCount: active.length };
  }, [partnerCompanies]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
            <ClipboardCheck size={20} />
          </span>
          <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
            Data Completeness
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
          Active partner companies missing address, contact person, email, or mobile phone. Click a company to jump
          straight to its edit panel in Partner Companies.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center gap-4">
        <div className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center ${incomplete.length > 0 ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'}`}>
          {incomplete.length > 0 ? <AlertTriangle size={20} /> : <CheckCircle2 size={20} />}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {incomplete.length} of {activeCount} active partner{activeCount === 1 ? '' : 's'} {incomplete.length === 1 ? 'has' : 'have'} an incomplete profile
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {incomplete.length > 0 ? 'Fill these in so reports and outreach can reach the right people.' : 'Every active partner profile is fully filled in.'}
          </p>
        </div>
      </div>

      {incomplete.length === 0 ? (
        <div className="panel flex min-h-56 items-center justify-center text-center">
          <div>
            <CheckCircle2 size={32} className="mx-auto mb-2 text-emerald-500" />
            <h3 className="text-base font-semibold text-slate-800 dark:text-white">All caught up</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">No incomplete partner profiles right now.</p>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
          {incomplete.map(({ company, missing }) => (
            <button
              key={company.id}
              type="button"
              onClick={() => onEditCompany(company.id)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition cursor-pointer"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-slate-800 dark:text-white truncate">{company.name}</span>
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border shrink-0 ${typeBadgeClasses(company.type)}`}>
                    {company.type}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {missing.map((field) => {
                    const { label, icon: Icon } = FIELD_META[field];
                    return (
                      <span
                        key={field}
                        className="inline-flex items-center gap-1 rounded-full border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-400"
                      >
                        <Icon size={10} />
                        Missing {label}
                      </span>
                    );
                  })}
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-[#0063a9] dark:text-blue-400 shrink-0">
                Complete profile
                <ChevronRight size={14} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
