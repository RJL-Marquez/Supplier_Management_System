import React, { useState, useEffect } from 'react';
import { X, Check, Send, Mail, Users, FileText, Download, Clock, AlertCircle, Sparkles, ChevronRight, RotateCcw } from 'lucide-react';
import { CustomForm, PartnerCompany, SurveyResponse, SurveyType } from '../../types/survey';
import { PartnerContact, QueuedReportEmail } from '../../types/feedbackHub';
import { computeCompanyComposite } from '../../utils/scoring';
import { questionPerformance } from '../../utils/analytics';
import { exportCompanyReportAsPDF, CompanyReportData } from '../../utils/companyReportExport';

interface SendToPartnerModalProps {
  surveys: CustomForm[];
  responses: SurveyResponse[];
  partnerCompanies: PartnerCompany[];
  contacts: PartnerContact[];
  initialSurveyId?: string;
  initialCompanyId?: string;
  revisionReport?: QueuedReportEmail | null; // If re-opened for revision
  defaultTimerMinutes: number;
  userEmail: string;
  onClose: () => void;
  onQueueReport: (emailPayload: {
    surveyId: string;
    surveyTitle: string;
    companyName: string;
    surveyType: SurveyType;
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
  }) => void;
}

export function SendToPartnerModal({
  surveys,
  responses,
  partnerCompanies,
  contacts,
  initialSurveyId,
  initialCompanyId,
  revisionReport,
  defaultTimerMinutes,
  userEmail,
  onClose,
  onQueueReport,
}: SendToPartnerModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Selected Survey
  const completedSurveys = surveys; // allow all
  const [selectedSurveyId, setSelectedSurveyId] = useState<string>(
    revisionReport?.surveyId || initialSurveyId || completedSurveys[0]?.id || ''
  );

  const currentSurvey = surveys.find((s) => s.id === selectedSurveyId) || completedSurveys[0];

  // Selected Partner Company
  const [selectedCompanyName, setSelectedCompanyName] = useState<string>(
    revisionReport?.companyName ||
      (initialCompanyId ? partnerCompanies.find((c) => c.id === initialCompanyId)?.name : '') ||
      partnerCompanies.find((c) => c.type === (currentSurvey?.surveyType || 'Courier'))?.name ||
      `${currentSurvey?.surveyType || 'Partner'} Company`
  );

  // Recipient details
  const matchingContact = contacts.find(
    (c) => c.companyName.toLowerCase().includes(selectedCompanyName.toLowerCase()) ||
      c.partnerType === currentSurvey?.surveyType
  );

  const [recipientEmail, setRecipientEmail] = useState<string>(
    revisionReport?.recipientEmail || matchingContact?.email || 'contact@partnercompany.com'
  );

  const [ccInput, setCcInput] = useState<string>('');
  const [ccEmails, setCcEmails] = useState<string[]>(
    revisionReport?.ccEmails || matchingContact?.ccEmails || ['operations@mgenesis.com']
  );

  // Survey Stats
  const surveyResponses = responses.filter(
    (r) => currentSurvey && r.surveyType === currentSurvey.surveyType && !r.archived
  );
  const responseCount = new Set(surveyResponses.map((r) => r.responseId)).size || 10;
  const numericRatings = surveyResponses
    .map((r) => (typeof r.rating === 'number' ? r.rating : null))
    .filter((r): r is number => r !== null);
  const rawAvgRating = numericRatings.length
    ? numericRatings.reduce((a, b) => a + b, 0) / numericRatings.length
    : 4.5;
  const avgRating = Math.min(5.0, Math.max(0, rawAvgRating));
  const overallScore = Math.min(100, Math.max(0, Math.round((avgRating / 5) * 100)));
  const periodCovered = 'Q2 2026';

  // Email Template State
  const defaultSubject = `[Microgenesis] Performance Evaluation Report - ${selectedCompanyName} (${periodCovered})`;
  const defaultBody = `Dear ${matchingContact?.contactPerson || 'Partner Management'},\n\nPlease find attached the compiled ${periodCovered} Supplier Management Performance Evaluation Report for ${selectedCompanyName}.\n\nExecutive Summary:\n- Evaluation Period: ${periodCovered}\n- Total Submissions: ${responseCount} Stakeholder Surveys\n- Overall Satisfaction Score: ${overallScore}%\n\nThis compiled report reflects structured operational feedback across timeliness, communication quality, compliance, and service value. Please review the detailed PDF attachment.\n\nThank you for your valued partnership with Microgenesis.\n\nBest regards,\nProcurement & Vendor Management Group\nMicrogenesis Software Systems`;

  const [subject, setSubject] = useState<string>(revisionReport?.subject || defaultSubject);
  const [body, setBody] = useState<string>(revisionReport?.body || defaultBody);
  const [timerMinutes, setTimerMinutes] = useState<number>(
    revisionReport?.timerDurationMinutes || defaultTimerMinutes
  );

  // Auto update recipients when company changes
  useEffect(() => {
    if (!revisionReport) {
      const partner = partnerCompanies.find((c) => c.name === selectedCompanyName);
      if (partner && partner.email) {
        setRecipientEmail(partner.email);
      } else {
        const contact = contacts.find(
          (c) => c.companyName.toLowerCase().includes(selectedCompanyName.toLowerCase()) ||
            c.partnerType === currentSurvey?.surveyType
        );
        if (contact && contact.email) {
          setRecipientEmail(contact.email);
        }
      }
    }
  }, [selectedCompanyName, partnerCompanies, currentSurvey, contacts, revisionReport]);

  const handleAddCc = () => {
    if (ccInput.trim() && !ccEmails.includes(ccInput.trim())) {
      setCcEmails([...ccEmails, ccInput.trim()]);
      setCcInput('');
    }
  };

  const handleRemoveCc = (emailToRemove: string) => {
    setCcEmails(ccEmails.filter((e) => e !== emailToRemove));
  };

  const handleExportPdfPreview = async () => {
    const sType: SurveyType = currentSurvey?.surveyType || 'Courier';
    const composite = computeCompanyComposite(selectedCompanyName, sType, responses);
    const companyResponses = responses.filter(
      (r) => r.company === selectedCompanyName && r.surveyType === sType
    );
    const qRows = questionPerformance(companyResponses);

    const reportData: CompanyReportData = {
      company: selectedCompanyName,
      surveyType: sType,
      composite,
      generatedOn: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      graphs: { bar: false, radar: false, trend: false, perQuestion: true },
      includeComments: false,
      questionRows: qRows,
      chartImages: {},
    };

    const dateStr = new Date().toISOString().slice(0, 10);
    const nameClean = selectedCompanyName.trim().replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const filename = `${nameClean}_Feedback_Report_${dateStr}.pdf`;

    await exportCompanyReportAsPDF(reportData, filename);
  };

  const handleFinalSubmit = () => {
    onQueueReport({
      surveyId: currentSurvey?.id || 'survey-gen-001',
      surveyTitle: currentSurvey?.title || 'Partner Evaluation Survey',
      companyName: selectedCompanyName,
      surveyType: currentSurvey?.surveyType || 'Courier',
      periodCovered,
      recipientEmail,
      ccEmails,
      subject,
      body,
      timerDurationMinutes: timerMinutes,
      responseCount,
      overallScore,
      isRevision: !!revisionReport,
      existingId: revisionReport?.id,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800 bg-[#0063a9] text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm">
              <Send size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                  {revisionReport ? 'Revise & Re-queue Report' : 'Send Report to Partner'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {selectedCompanyName} Feedback Dispatch
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-blue-100 hover:bg-white/10 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Revision Alert Banner if returning */}
        {revisionReport?.status === 'Returned' && (
          <div className="bg-rose-50 border-b border-rose-200 px-6 py-3 text-xs text-rose-800 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-200 flex items-start gap-2.5">
            <RotateCcw size={16} className="shrink-0 text-rose-600 mt-0.5" />
            <div>
              <p className="font-bold">
                Returned by {revisionReport.returnedBy || 'Admin'}:
              </p>
              <p className="mt-0.5 text-rose-700 dark:text-rose-300">
                "{revisionReport.returnReason}"
              </p>
            </div>
          </div>
        )}

        {/* Step Stepper Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 text-xs">
          <div className={`flex items-center gap-1.5 font-semibold ${step >= 1 ? 'text-[#0063a9] dark:text-blue-300' : 'text-slate-400'}`}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-[#0063a9] font-bold dark:bg-blue-950 dark:text-blue-300">1</span>
            <span>Confirm</span>
          </div>
          <ChevronRight size={14} className="text-slate-300" />

          <div className={`flex items-center gap-1.5 font-semibold ${step >= 2 ? 'text-[#0063a9] dark:text-blue-300' : 'text-slate-400'}`}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-[#0063a9] font-bold dark:bg-blue-950 dark:text-blue-300">2</span>
            <span>Recipient</span>
          </div>
          <ChevronRight size={14} className="text-slate-300" />

          <div className={`flex items-center gap-1.5 font-semibold ${step >= 3 ? 'text-[#0063a9] dark:text-blue-300' : 'text-slate-400'}`}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-[#0063a9] font-bold dark:bg-blue-950 dark:text-blue-300">3</span>
            <span>Preview</span>
          </div>
          <ChevronRight size={14} className="text-slate-300" />

          <div className={`flex items-center gap-1.5 font-semibold ${step >= 4 ? 'text-[#0063a9] dark:text-blue-300' : 'text-slate-400'}`}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-[#0063a9] font-bold dark:bg-blue-950 dark:text-blue-300">4</span>
            <span>Queue</span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: CONFIRM */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText size={16} className="text-azure" />
                Step 1: Select Survey & Confirm Partner Company
              </h4>

              <div>
                <label className="field-label text-xs">Survey Evaluation Report</label>
                <select
                  value={selectedSurveyId}
                  onChange={(e) => {
                    setSelectedSurveyId(e.target.value);
                    const s = surveys.find((item) => item.id === e.target.value);
                    if (s) {
                      const matched = partnerCompanies.find((c) => c.type === s.surveyType);
                      if (matched) setSelectedCompanyName(matched.name);
                    }
                  }}
                  className="field mt-1 text-xs"
                >
                  {completedSurveys.map((s) => (
                    <option key={s.id} value={s.id}>
                      [{s.surveyType}] {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="field-label text-xs">Target Partner Company</label>
                <select
                  value={selectedCompanyName}
                  onChange={(e) => setSelectedCompanyName(e.target.value)}
                  className="field mt-1 text-xs"
                >
                  {partnerCompanies.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.type})
                    </option>
                  ))}
                </select>
              </div>

              {/* Summary Card */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Report Summary Preview</span>
                  <span className="badge bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                    Ready to Dispatch
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded bg-white p-2 border border-slate-200 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-[10px] text-slate-500">Submissions</p>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white">{responseCount}</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-[10px] text-slate-500">Overall Score</p>
                    <p className="text-base font-extrabold text-emerald-600">{overallScore}%</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-[10px] text-slate-500">Period</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">{periodCovered}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: RECIPIENT */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users size={16} className="text-azure" />
                Step 2: Recipient Contact Details (Pulled from Directory)
              </h4>

              <div className="rounded-lg border border-blue-100 bg-blue-50/60 p-3 text-xs text-blue-900 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200 flex items-center gap-2">
                <Sparkles size={16} className="shrink-0 text-azure" />
                <span>
                  Recipients pre-filled from <strong>Partner Directory</strong> for {selectedCompanyName}. You can adjust addresses for this send.
                </span>
              </div>

              <div>
                <label className="field-label text-xs block mb-1">Primary Contact Email <span className="text-rose-500">*</span></label>
                <div className="flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus-within:ring-2 focus-within:ring-[#0063a9]">
                  <Mail size={18} className="text-slate-400 shrink-0" />
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-slate-900 dark:text-white outline-none"
                    placeholder="e.g. contact@partnercompany.com"
                  />
                </div>
              </div>

              <div>
                <label className="field-label text-xs">CC Email Recipients (Optional)</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="email"
                    value={ccInput}
                    onChange={(e) => setCcInput(e.target.value)}
                    placeholder="Add CC email..."
                    className="field text-xs flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCc())}
                  />
                  <button
                    type="button"
                    onClick={handleAddCc}
                    className="secondary-button text-xs whitespace-nowrap"
                  >
                    Add CC
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {ccEmails.map((email) => (
                    <span
                      key={email}
                      className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {email}
                      <button
                        type="button"
                        onClick={() => handleRemoveCc(email)}
                        className="text-slate-400 hover:text-rose-500"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  {ccEmails.length === 0 && (
                    <span className="text-xs text-slate-400 italic">No CC recipients specified.</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PREVIEW */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Mail size={16} className="text-azure" />
                Step 3: Preview & Customize Email Message & Attachment
              </h4>

              <div>
                <label className="field-label text-xs">Subject Line</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="field mt-1 text-xs font-medium"
                />
              </div>

              <div>
                <label className="field-label text-xs">Email Message Body</label>
                <textarea
                  rows={6}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="field mt-1 text-xs font-mono leading-relaxed"
                />
              </div>

              {/* Attachment Card */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-300">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {selectedCompanyName.replace(/\s+/g, '_')}_Performance_Report.pdf
                    </p>
                    <p className="text-[11px] text-slate-500">Compiled PDF Attachment (~245 KB)</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleExportPdfPreview}
                  className="secondary-button text-xs gap-1"
                >
                  <Download size={14} />
                  Preview PDF
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: QUEUE */}
          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock size={16} className="text-amber-500" />
                Step 4: Queue Settings & Final Dispatch Confirmation
              </h4>

              {/* Timer Config */}
              <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-4 dark:border-amber-900/50 dark:bg-amber-950/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-xs">
                    <Clock size={16} className="text-amber-600" />
                    Review Window Duration Timer
                  </div>
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300">
                    {timerMinutes} Minutes Countdown
                  </span>
                </div>

                <p className="text-xs text-amber-800 dark:text-amber-300">
                  Instead of sending instantly, clicking Queue enters a safety review window. Any admin can review, confirm immediately, or return the item for revision before auto-sending.
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Adjust Duration:
                  </label>
                  <select
                    value={timerMinutes}
                    onChange={(e) => setTimerMinutes(Number(e.target.value))}
                    className="rounded border border-amber-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-800 dark:border-amber-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <option value={15}>15 Minutes</option>
                    <option value={30}>30 Minutes (Recommended)</option>
                    <option value={60}>1 Hour</option>
                    <option value={120}>2 Hours</option>
                  </select>
                </div>
              </div>

              {/* Final Summary Box */}
              <div className="rounded-lg border border-slate-200 p-4 space-y-2 text-xs dark:border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-500">Partner:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedCompanyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Primary Recipient:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{recipientEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">CC List:</span>
                  <span className="text-slate-700 dark:text-slate-300">{ccEmails.join(', ') || 'None'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Queued By:</span>
                  <span className="text-slate-700 dark:text-slate-300">{userEmail}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => (step > 1 ? setStep((step - 1) as any) : onClose())}
            className="secondary-button text-xs"
          >
            {step > 1 ? 'Back' : 'Cancel'}
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((step + 1) as any)}
              className="primary-button text-xs gap-1.5 bg-[#0063a9] hover:bg-blue-800"
            >
              Next Step
              <ChevronRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition"
            >
              <Clock size={15} />
              {revisionReport ? 'Resubmit to Review Queue' : 'Queue Report Email'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
