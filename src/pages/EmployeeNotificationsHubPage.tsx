import { useState } from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import { CustomForm, PartnerCompany, SurveyResponse } from '../types/survey';
import { EmployeeNotificationLogsPage } from './EmployeeNotificationLogsPage';
import { LiveChatPage } from './LiveChatPage';
import { AccountProfile } from '../App';

interface EmployeeNotificationsHubPageProps {
  userEmail: string;
  profile: { department: string; designation: string; role: string } | null;
  surveys: CustomForm[];
  partnerCompanies: PartnerCompany[];
  responses: SurveyResponse[];
  onFillForm: (surveyId: string) => void;
  currentUser: AccountProfile;
  accounts: AccountProfile[];
  chatUnread: number;
}

export function EmployeeNotificationsHubPage({
  userEmail,
  profile,
  surveys,
  partnerCompanies,
  responses,
  onFillForm,
  currentUser,
  accounts,
  chatUnread,
}: EmployeeNotificationsHubPageProps) {
  const [tab, setTab] = useState<'alerts' | 'chat'>('alerts');

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1 shadow-sm">
        <button
          type="button"
          onClick={() => setTab('alerts')}
          className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition cursor-pointer ${
            tab === 'alerts'
              ? 'bg-[#0063a9] text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          <Bell size={15} />
          Alerts
        </button>
        <button
          type="button"
          onClick={() => setTab('chat')}
          className={`relative flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition cursor-pointer ${
            tab === 'chat'
              ? 'bg-[#0063a9] text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          <MessageSquare size={15} />
          Live Chat Support
          {chatUnread > 0 && (
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
              {chatUnread}
            </span>
          )}
        </button>
      </div>

      {tab === 'alerts' ? (
        <EmployeeNotificationLogsPage
          userEmail={userEmail}
          profile={profile}
          surveys={surveys}
          partnerCompanies={partnerCompanies}
          responses={responses}
          onFillForm={onFillForm}
        />
      ) : (
        <LiveChatPage currentUser={currentUser} isAdmin={false} accounts={accounts} />
      )}
    </div>
  );
}
