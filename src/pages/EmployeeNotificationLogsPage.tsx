import { useMemo, useState } from 'react';
import {
  Mail,
  Inbox,
  ArrowLeft,
  Star,
  MoreVertical,
  CheckSquare,
  Award,
  Search,
  Clock,
} from 'lucide-react';
import { CustomForm, PartnerCompany, SurveyResponse } from '../types/survey';
import { getEmployeePendingSurveys, EmployeeNotification } from '../utils/employeeNotifications';
import { StateMessage } from '../components/StateMessage';

interface EmployeeNotificationLogsPageProps {
  userEmail: string;
  profile: { department: string; designation: string; role: string } | null;
  surveys: CustomForm[];
  partnerCompanies: PartnerCompany[];
  responses: SurveyResponse[];
  onFillForm: (surveyId: string) => void;
}

export function EmployeeNotificationLogsPage({
  userEmail,
  profile,
  surveys,
  partnerCompanies,
  responses,
  onFillForm,
}: EmployeeNotificationLogsPageProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const notifications = useMemo(
    () => getEmployeePendingSurveys(userEmail, profile, surveys, partnerCompanies, responses),
    [userEmail, profile, surveys, partnerCompanies, responses],
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return notifications;
    const needle = search.trim().toLowerCase();
    return notifications.filter((item) =>
      `${item.surveyTitle} ${item.subject}`.toLowerCase().includes(needle),
    );
  }, [notifications, search]);

  const totalPendingCompanies = useMemo(
    () => notifications.reduce((sum, item) => sum + item.pendingCompanies.length, 0),
    [notifications],
  );

  const freqHours = localStorage.getItem('admin_reminder_frequency') || '24';
  const frequencyLabel =
    freqHours === '4'
      ? '4 hours'
      : freqHours === '8'
      ? '8 hours'
      : freqHours === '12'
      ? '12 hours'
      : freqHours === '48'
      ? '48 hours (1 per 2 days)'
      : '24 hours (1 per day)';

  const selected = notifications.find((item) => item.id === selectedId) || null;

  if (selected) {
    return <MessageView notification={selected} userEmail={userEmail} onBack={() => setSelectedId(null)} onFillForm={onFillForm} frequencyLabel={frequencyLabel} />;
  }

  return (
    <div className="space-y-5">
      <section className="grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Pending reminders" value={notifications.length} icon={Mail} />
        <SummaryCard label="Companies to evaluate" value={totalPendingCompanies} icon={CheckSquare} accent="rose" />
        <SummaryCard label="Reminder frequency" value={frequencyLabel} icon={Clock} accent="green" />
      </section>

      <section className="panel overflow-hidden !p-0">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-red-500" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Mgenesis Mail Inbox</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Reminders for surveys you still need to complete.</p>
            </div>
          </div>
          <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-black text-red-600 dark:bg-red-950/50 dark:text-red-400">
            {notifications.length} unread
          </span>
        </div>

        <div className="border-b border-slate-100 px-5 py-3 dark:border-slate-800">
          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-azure focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-800 dark:bg-slate-900 dark:focus-within:ring-blue-950">
            <Search size={15} className="shrink-0 text-slate-400" />
            <input
              className="w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-slate-400 dark:text-slate-100"
              placeholder="Search reminders..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-6">
            <StateMessage
              title={notifications.length === 0 ? 'Inbox is empty' : 'No reminders found'}
              message={
                notifications.length === 0
                  ? 'Amazing job! You have accomplished all assigned supplier surveys.'
                  : 'Try adjusting your search to find what you\u2019re looking for.'
              }
            />
          </div>
        ) : (
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {filtered.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50 dark:hover:bg-slate-900/40"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0063a9]" title="Unread" />
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    M
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                        Microgenesis Administrator
                      </p>
                      <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">Today</span>
                    </div>
                    <p className="truncate text-sm font-semibold text-red-600 dark:text-red-400">
                      {item.subject}: {item.surveyTitle}
                    </p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                      {item.pendingCompanies.length} partner {item.pendingCompanies.length === 1 ? 'company' : 'companies'} still awaiting your evaluation &middot; Due {item.deadlineDate}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        {notifications.length > 0 && (
          <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
            Showing {filtered.length} of {notifications.length} pending reminders.
          </p>
        )}
      </section>
    </div>
  );
}

function MessageView({
  notification,
  userEmail,
  onBack,
  onFillForm,
  frequencyLabel,
}: {
  notification: EmployeeNotification;
  userEmail: string;
  onBack: () => void;
  onFillForm: (surveyId: string) => void;
  frequencyLabel: string;
}) {
  const formattedDate = new Date().toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="panel overflow-hidden !p-0">
      {/* Gmail Style Header Toolbar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-[#f2f6fc] px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="cursor-pointer rounded-full p-1.5 text-slate-600 transition hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
            title="Back to inbox"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
          <span className="rounded-sm bg-red-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-red-700 dark:bg-red-950/40 dark:text-red-400">
            Inbox
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="cursor-pointer rounded-full p-1.5 text-amber-400 transition hover:bg-slate-200 dark:hover:bg-slate-800"
            title="Star message"
          >
            <Star size={16} fill="currentColor" />
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full p-1.5 text-slate-600 transition hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
            title="More options"
          >
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {/* Email Content Area */}
      <div className="space-y-6 p-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {notification.subject}: {notification.surveyTitle}
        </h2>

        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-900">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-base font-bold text-white shadow-sm">
              M
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Microgenesis Administrator</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">&lt;{notification.sender}&gt;</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">to me &lt;{userEmail}&gt;</p>
            </div>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">{formattedDate}, 10:00 AM</span>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p className="font-semibold">Dear Employee,</p>

          <p>
            This is a system-generated reminder that you have pending supplier performance evaluations for:
            <span className="mt-1.5 block font-bold text-slate-900 dark:text-white">&bull; {notification.surveyTitle}</span>
          </p>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
            <p className="mb-2 flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
              <CheckSquare size={14} className="text-[#0063a9] dark:text-blue-400" />
              <span>Remaining Partner Companies to Evaluate ({notification.pendingCompanies.length}):</span>
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {notification.pendingCompanies.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold dark:border-slate-800 dark:bg-slate-950"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0063a9]" />
                  <span className="truncate">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Please accomplish this survey on or before{' '}
            <span className="font-black text-rose-600 underline dark:text-rose-400">{notification.deadlineDate}</span>. Your
            direct feedback is crucial to evaluate our supply chain logistics, product quality, and partner adherence to
            SLAs.
          </p>

          <div className="my-4 border-t border-dashed border-slate-200 dark:border-slate-800" />

          <div className="rounded-lg border border-amber-200/50 bg-amber-50/60 p-3 text-xs text-amber-800 dark:border-amber-900/30 dark:bg-amber-950/10 dark:text-amber-400">
            <span className="font-bold">Automated Notification System:</span> This reminder is automatically dispatched{' '}
            <span className="font-bold">every {frequencyLabel}</span> in accordance with administrative policy, and will
            continue until all partner companies under this survey have been fully evaluated.
          </div>

          <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onFillForm(notification.surveyId)}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
            >
              <Award size={16} />
              <span>\ud83d\udc49 Start Survey Evaluation Now</span>
            </button>
            <button
              type="button"
              onClick={onBack}
              className="cursor-pointer rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Back to Inbox
            </button>
          </div>
        </div>

        <div className="space-y-1 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-slate-900 dark:text-slate-500">
          <p className="font-bold text-slate-500 dark:text-slate-400">Supplier Management System Admin</p>
          <p>Microgenesis Business Solutions</p>
          <p className="italic">Please do not reply directly to this mail. If you have any inquiries, contact support.</p>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  icon: Icon,
  accent = 'blue',
}: {
  label: string;
  value: number | string;
  icon: typeof Mail;
  accent?: 'blue' | 'rose' | 'green';
}) {
  const accentClasses = {
    blue: 'bg-blue-50 text-azure dark:bg-blue-950/60',
    rose: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-300',
    green: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300',
  }[accent];

  return (
    <article className="panel flex items-center gap-4">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${accentClasses}`}>
        {value === 0 ? <Inbox size={20} /> : <Icon size={20} />}
      </div>
      <div>
        <p className="text-2xl font-bold leading-none">{value}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    </article>
  );
}
