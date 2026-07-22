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
import { SendToPartnerWizard } from '../components/feedback-hub/SendToPartnerWizard';
import { BulkHiddenChartCapturer } from '../components/feedback-hub/BulkHiddenChartCapturer';
import { isMsalConfigured } from '../services/msalAuth';

import { FileText, Archive, Send, Clock, ShieldAlert, Sparkles, SendToBack } from 'lucide-react';

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
  // Set while a real Microsoft Graph send (triggered by handleConfirmNow) is
  // in flight - mounts the hidden chart capturer below just long enough to
  // regenerate the PDF and email it, then clears once handleRealSendResult runs.
  const [realSendReport, setRealSendReport] = useState<QueuedReportEmail | null>(null);

  // Dispatch Flow Inline State
  const [isDispatchWizardOpen, setIsDispatchWizardOpen] = useState(false);
  const [dispatchWizardBulkMode, setDispatchWizardBulkMode] = useState(false);
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

  // Open Send Wizard for survey (single mode)
  const handleOpenSendToPartner = (survey?: CustomForm, company?: PartnerCompany) => {
    setSendInitialSurveyId(survey?.id);
    setSendInitialCompanyId(company?.id);
    setRevisionReport(null);
    setDispatchWizardBulkMode(false);
    setIsDispatchWizardOpen(true);
  };

  // Open Send Wizard for Revision or Resend (single mode)
  const handleOpenRevisionOrResend = (report: QueuedReportEmail) => {
    setRevisionReport(report);
    setSendInitialSurveyId(report.surveyId);
    setDispatchWizardBulkMode(false);
    setIsDispatchWizardOpen(true);
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

  // Confirm Now action. When Microsoft sign-in is configured, this actually
  // regenerates the PDF and emails it via Microsoft Graph as the signed-in
  // admin (see realSendReport below/BulkHiddenChartCapturer's sendVia mode);
  // otherwise it falls back to the original simulated status flip so nothing
  // breaks before the Azure AD app registration exists.
  const handleConfirmNow = (reportId: string) => {
    if (isMsalConfigured()) {
      const report = sentReports.find((r) => r.id === reportId);
      if (report) setRealSendReport(report);
      return;
    }

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

  // Applies the outcome of a real Graph send (see the BulkHiddenChartCapturer
  // mount below) to the report's status/history, then clears the mount.
  const handleRealSendResult = (reportId: string, result: { success: boolean; error?: string }) => {
    const nowIso = new Date().toISOString();
    const actor = currentUser?.email || 'admin@mgenesis.com';

    const updated = sentReports.map((rpt) => {
      if (rpt.id !== reportId) return rpt;
      if (result.success) {
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
              details: 'Admin manually confirmed dispatch. Email sent via Microsoft Graph to the partner.',
            },
          ],
        };
      }
      return {
        ...rpt,
        status: 'Failed' as const,
        history: [
          ...rpt.history,
          {
            action: 'Confirmed Immediately' as const,
            timestamp: nowIso,
            actor,
            details: `Send failed: ${result.error || 'Unknown error'}`,
          },
        ],
      };
    });
    handleUpdateSentReports(updated);
    setRealSendReport(null);
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

  // Check if all active surveys are completed to enable Bulk Sending
  const activeSurveys = surveys.filter((s) => s.status !== 'Archived');
  const hasOngoingSurveys = activeSurveys.some((s) => {
    const surveyResponses = responses.filter(
      (r) => r.surveyType === s.surveyType && !r.archived
    );
    const responseCount = new Set(surveyResponses.map((r) => r.responseId)).size;
    const companiesForType = partnerCompanies.filter((c) => c.type === s.surveyType && !c.isArchived);
    const targetResponses = Math.max(companiesForType.length, responseCount, 10);
    const isCompleted =
      s.status === 'Completed' ||
      responseCount >= targetResponses ||
      (s.deadlineDate && new Date(s.deadlineDate) < new Date());
    return !isCompleted;
  });
  const areAllSurveysCompleted = !hasOngoingSurveys;

  // If Dispatch Wizard is open, render it inline (whole page experience!)
  if (isDispatchWizardOpen) {
    return (
      <div className="animate-fadeIn pb-12">
        <SendToPartnerWizard
          surveys={surveys}
          responses={responses}
          partnerCompanies={partnerCompanies}
          contacts={contacts}
          initialSurveyId={sendInitialSurveyId}
          initialCompanyId={sendInitialCompanyId}
          revisionReport={revisionReport}
          defaultTimerMinutes={settings.defaultTimerMinutes}
          userEmail={currentUser?.email || 'admin@mgenesis.com'}
          onClose={() => setIsDispatchWizardOpen(false)}
          onQueueReport={handleQueueReport}
          bulkMode={dispatchWizardBulkMode}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Tabs Navigation & Bulk Sending Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1 sm:pb-0 gap-4">
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

        {/* Relocated Bulk Sending Button - Rightmost position */}
        <div className="flex items-center gap-2.5 pb-2 sm:pb-0 shrink-0 self-end sm:self-auto">
          {queuedCount > 0 && (
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-extrabold text-amber-800 dark:bg-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-800 animate-pulse">
              <Clock size={11} />
              {queuedCount} Queued
            </span>
          )}
          <button
            onClick={() => {
              setDispatchWizardBulkMode(true);
              setIsDispatchWizardOpen(true);
            }}
            disabled={!areAllSurveysCompleted}
            className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition-all shrink-0 ${
              areAllSurveysCompleted
                ? 'bg-[#0063a9] hover:bg-blue-800 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700'
            }`}
            title={
              areAllSurveysCompleted
                ? 'Queue reports for all completed companies in bulk'
                : 'Bulk Sending is locked until all active surveys are Completed'
            }
          >
            <Send size={13} />
            Bulk Sending
          </button>
          {!areAllSurveysCompleted && (
            <span className="text-[10px] text-slate-400 font-semibold max-w-[150px] leading-tight">
              Needs all active surveys <strong>Completed</strong>
            </span>
          )}
        </div>
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

      {/* Real Microsoft Graph send in flight (see handleConfirmNow). Reuses the
          same off-screen chart-capture pipeline as bulk preview, but in "send"
          mode: it emails the PDF instead of opening a preview window. Report-
          level graph selections aren't persisted on QueuedReportEmail, so this
          always attaches the full report (all graphs + comments). */}
      {realSendReport && (
        <BulkHiddenChartCapturer
          item={{ company: { name: realSendReport.companyName }, survey: { surveyType: realSendReport.surveyType } }}
          responses={responses}
          graphs={{ bar: true, radar: true, trend: true, perQuestion: true }}
          includeComments
          previewWindow={null}
          onComplete={() => {}}
          sendVia={{
            to: realSendReport.recipientEmail,
            cc: realSendReport.ccEmails,
            subject: realSendReport.subject,
            htmlBody: realSendReport.body.replace(/\n/g, '<br/>'),
          }}
          onSendResult={(result) => handleRealSendResult(realSendReport.id, result)}
        />
      )}
    </div>
  );
}
