import React, { useState, useEffect } from 'react';
import { CustomForm, PartnerCompany, SurveyResponse, UserAccount } from '../types/survey';
import {
  PartnerContact,
  QueuedReportEmail,
  FeedbackHubSettings,
} from '../types/feedbackHub';
import {
  getPartnerContacts,
  savePartnerContacts,
  getSentReports,
  saveSentReports,
  getFeedbackHubSettings,
  saveFeedbackHubSettings,
} from '../utils/feedbackHubStore';

import { CurrentFormsTab } from '../components/feedback-hub/CurrentFormsTab';
import { PastResultsTab } from '../components/feedback-hub/PastResultsTab';
import { SentReportsTab } from '../components/feedback-hub/SentReportsTab';
import { SendToPartnerModal } from '../components/feedback-hub/SendToPartnerModal';

import { FileText, Archive, Send, Clock, ShieldAlert, Sparkles } from 'lucide-react';

interface PartnersFeedbackHubPageProps {
  surveys: CustomForm[];
  responses: SurveyResponse[];
  partnerCompanies: PartnerCompany[];
  currentUser: UserAccount | null;
  onNavigatePage?: (page: string) => void;
  onMarkSurveyComplete?: (surveyId: string) => void;
}

export type FeedbackHubTab = 'current-forms' | 'past-results' | 'sent-reports';

export function PartnersFeedbackHubPage({
  surveys,
  responses,
  partnerCompanies,
  currentUser,
  onNavigatePage,
  onMarkSurveyComplete,
}: PartnersFeedbackHubPageProps) {
  const [activeTab, setActiveTab] = useState<FeedbackHubTab>('current-forms');

  // Persistent State
  const [contacts, setContacts] = useState<PartnerContact[]>(() => getPartnerContacts());
  const [sentReports, setSentReports] = useState<QueuedReportEmail[]>(() => getSentReports());
  const [settings, setSettings] = useState<FeedbackHubSettings>(() => getFeedbackHubSettings());

  // Modal Send Flow State
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [sendInitialSurveyId, setSendInitialSurveyId] = useState<string | undefined>();
  const [sendInitialCompanyId, setSendInitialCompanyId] = useState<string | undefined>();
  const [revisionReport, setRevisionReport] = useState<QueuedReportEmail | null>(null);

  // Sync auto-send check periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSentReports(getSentReports());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Save wrappers
  const handleUpdateContacts = (newContacts: PartnerContact[]) => {
    setContacts(newContacts);
    savePartnerContacts(newContacts);
  };

  const handleUpdateSentReports = (newReports: QueuedReportEmail[]) => {
    setSentReports(newReports);
    saveSentReports(newReports);
  };

  const handleUpdateSettings = (newSettings: FeedbackHubSettings) => {
    setSettings(newSettings);
    saveFeedbackHubSettings(newSettings);
  };

  // Open Send Modal for survey
  const handleOpenSendToPartner = (survey?: CustomForm, company?: PartnerCompany) => {
    setSendInitialSurveyId(survey?.id);
    setSendInitialCompanyId(company?.id);
    setRevisionReport(null);
    setIsSendModalOpen(true);
  };

  // Open Send Modal for Revision or Resend
  const handleOpenRevisionOrResend = (report: QueuedReportEmail) => {
    setRevisionReport(report);
    setSendInitialSurveyId(report.surveyId);
    setIsSendModalOpen(true);
  };

  // Queue report action
  const handleQueueReport = (payload: {
    surveyId: string;
    surveyTitle: string;
    companyName: string;
    surveyType: any;
    periodCovered: string;
    recipientEmail: string;
    ccEmails: string[];
    subject: string;
    body: string;
    timerDurationMinutes: number;
    responseCount: number;
    overallScore: number;
    isRevision?: boolean;
    existingId?: string;
  }) => {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + payload.timerDurationMinutes * 60 * 1000).toISOString();
    const actor = currentUser?.email || 'admin@mgenesis.com';

    if (payload.isRevision && payload.existingId) {
      // Re-queue existing item
      const updated = sentReports.map((item) => {
        if (item.id === payload.existingId) {
          return {
            ...item,
            recipientEmail: payload.recipientEmail,
            ccEmails: payload.ccEmails,
            subject: payload.subject,
            body: payload.body,
            status: 'Queued' as const,
            queuedAt: now.toISOString(),
            timerDurationMinutes: payload.timerDurationMinutes,
            expiresAt,
            history: [
              ...item.history,
              {
                action: 'Revised & Re-queued' as const,
                timestamp: now.toISOString(),
                actor,
                details: `Revised email subject/body/recipients and restarted review countdown timer (${payload.timerDurationMinutes} mins).`,
              },
            ],
          };
        }
        return item;
      });
      handleUpdateSentReports(updated);
    } else {
      // Create new queued report entry
      const newEntry: QueuedReportEmail = {
        id: `rpt-q-${Date.now()}`,
        surveyId: payload.surveyId,
        surveyTitle: payload.surveyTitle,
        companyName: payload.companyName,
        surveyType: payload.surveyType,
        periodCovered: payload.periodCovered,
        recipientEmail: payload.recipientEmail,
        ccEmails: payload.ccEmails,
        subject: payload.subject,
        body: payload.body,
        status: 'Queued',
        queuedAt: now.toISOString(),
        timerDurationMinutes: payload.timerDurationMinutes,
        expiresAt,
        queuedBy: actor,
        responseCount: payload.responseCount,
        overallScore: payload.overallScore,
        history: [
          {
            action: 'Queued',
            timestamp: now.toISOString(),
            actor,
            details: `Initial report queued for review (${payload.timerDurationMinutes} min countdown timer started).`,
          },
        ],
      };
      handleUpdateSentReports([newEntry, ...sentReports]);
    }

    // Switch to Sent Reports tab so user sees queue ticker!
    setActiveTab('sent-reports');
  };

  // Confirm Now action
  const handleConfirmNow = (reportId: string) => {
    const nowIso = new Date().toISOString();
    const actor = currentUser?.email || 'admin@mgenesis.com';

    const updated = sentReports.map((rpt) => {
      if (rpt.id === reportId) {
        return {
          ...rpt,
          status: 'Sent' as const,
          sentAt: nowIso,
          history: [
            ...rpt.history,
            {
              action: 'Confirmed Immediately' as const,
              timestamp: nowIso,
              actor,
              details: 'Admin manually confirmed dispatch, bypassing remaining queue timer. Email dispatched to partner.',
            },
          ],
        };
      }
      return rpt;
    });
    handleUpdateSentReports(updated);
  };

  // Return Report action
  const handleReturnReport = (reportId: string, reason: string, returnedBy: string) => {
    const nowIso = new Date().toISOString();

    const updated = sentReports.map((rpt) => {
      if (rpt.id === reportId) {
        return {
          ...rpt,
          status: 'Returned' as const,
          returnedBy,
          returnReason: reason,
          history: [
            ...rpt.history,
            {
              action: 'Returned' as const,
              timestamp: nowIso,
              actor: returnedBy,
              details: `Returned with reason: "${reason}"`,
            },
          ],
        };
      }
      return rpt;
    });
    handleUpdateSentReports(updated);
  };

  // Directory Contact Handlers
  const handleAddContact = (c: Omit<PartnerContact, 'id' | 'updatedAt'>) => {
    const newC: PartnerContact = {
      ...c,
      id: `contact-${Date.now()}`,
      updatedAt: new Date().toISOString(),
    };
    handleUpdateContacts([...contacts, newC]);
  };

  const handleUpdateContact = (c: PartnerContact) => {
    const updated = contacts.map((item) => (item.id === c.id ? c : item));
    handleUpdateContacts(updated);
  };

  const handleDeleteContact = (id: string) => {
    const updated = contacts.filter((item) => item.id !== id);
    handleUpdateContacts(updated);
  };

  const queuedCount = sentReports.filter((r) => r.status === 'Queued').length;

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-[#0063a9]/10 px-2.5 py-1 text-xs font-bold text-[#0063a9] dark:bg-blue-950 dark:text-blue-300">
              Management Portal
            </span>
            {queuedCount > 0 && (
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-extrabold text-amber-800 dark:bg-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700 animate-pulse">
                <Clock size={12} />
                {queuedCount} Report Email{queuedCount > 1 ? 's' : ''} Queued
              </span>
            )}
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
            Partners Feedback Hub
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Centralized hub for managing active surveys, archived performance analytics, PDF report exports, and controlled review queue dispatches.
          </p>
        </div>

        <button
          onClick={() => handleOpenSendToPartner()}
          className="primary-button text-xs gap-2 bg-[#0063a9] hover:bg-blue-800 self-start md:self-auto shrink-0 py-2.5 px-4 shadow-md"
        >
          <Send size={15} />
          Send Report to Partner
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('current-forms')}
            className={`flex items-center gap-2 border-b-2 py-3 px-1 text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'current-forms'
                ? 'border-[#0063a9] text-[#0063a9] dark:border-blue-400 dark:text-blue-300'
                : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            <FileText size={16} />
            Current Forms
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {surveys.filter((s) => s.status !== 'Archived').length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('past-results')}
            className={`flex items-center gap-2 border-b-2 py-3 px-1 text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'past-results'
                ? 'border-[#0063a9] text-[#0063a9] dark:border-blue-400 dark:text-blue-300'
                : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            <Archive size={16} />
            Past Results
          </button>

          <button
            onClick={() => setActiveTab('sent-reports')}
            className={`flex items-center gap-2 border-b-2 py-3 px-1 text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'sent-reports'
                ? 'border-[#0063a9] text-[#0063a9] dark:border-blue-400 dark:text-blue-300'
                : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            <Send size={16} />
            Sent Reports Log
            {queuedCount > 0 ? (
              <span className="rounded-full bg-amber-500 text-white px-2 py-0.5 text-[10px] font-extrabold animate-pulse">
                {queuedCount} queued
              </span>
            ) : (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {sentReports.length}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Tab Contents */}
      {activeTab === 'current-forms' && (
        <CurrentFormsTab
          surveys={surveys}
          responses={responses}
          partnerCompanies={partnerCompanies}
          sentReports={sentReports}
          onSendToPartner={handleOpenSendToPartner}
          onMarkSurveyComplete={onMarkSurveyComplete}
          isAdmin={currentUser?.role === 'Admin'}
        />
      )}

      {activeTab === 'past-results' && (
        <PastResultsTab
          surveys={surveys}
          responses={responses}
          partnerCompanies={partnerCompanies}
          sentReports={sentReports}
          onOpenSendToPartner={handleOpenSendToPartner}
        />
      )}

      {activeTab === 'sent-reports' && (
        <SentReportsTab
          sentReports={sentReports}
          onConfirmNow={handleConfirmNow}
          onReturnReport={handleReturnReport}
          onReviseReport={handleOpenRevisionOrResend}
          onResendReport={handleOpenRevisionOrResend}
          onUpdateTimerSettings={(min) => handleUpdateSettings({ ...settings, defaultTimerMinutes: min })}
          currentTimerMinutes={settings.defaultTimerMinutes}
          userEmail={currentUser?.email || 'admin@mgenesis.com'}
        />
      )}

      {/* Send to Partner Dispatch Modal */}
      {isSendModalOpen && (
        <SendToPartnerModal
          surveys={surveys}
          responses={responses}
          partnerCompanies={partnerCompanies}
          contacts={contacts}
          initialSurveyId={sendInitialSurveyId}
          initialCompanyId={sendInitialCompanyId}
          revisionReport={revisionReport}
          defaultTimerMinutes={settings.defaultTimerMinutes}
          userEmail={currentUser?.email || 'admin@mgenesis.com'}
          onClose={() => setIsSendModalOpen(false)}
          onQueueReport={handleQueueReport}
        />
      )}
    </div>
  );
}
