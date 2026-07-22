import React from 'react';
import { X, Clock, AlertTriangle, Users, BarChart3, CheckCircle2, ShieldAlert } from 'lucide-react';
import { CustomForm, SurveyResponse } from '../../types/survey';

interface SurveyProgressModalProps {
  survey: CustomForm;
  responses: SurveyResponse[];
  onClose: () => void;
  onMarkComplete?: (surveyId: string) => void;
  isAdmin?: boolean;
}

export function SurveyProgressModal({
  survey,
  responses,
  onClose,
  onMarkComplete,
  isAdmin,
}: SurveyProgressModalProps) {
  // Filter responses belonging to this survey
  const surveyResponses = responses.filter(
    (r) => r.surveyType === survey.surveyType && (!r.archived)
  );

  // Group unique respondents by email/department
  const uniqueRespondentsMap = new Map<string, { email: string; department?: string; date: string }>();
  surveyResponses.forEach((r) => {
    const key = r.respondentEmail || `${r.department || 'General'}-${r.submissionDate}`;
    if (!uniqueRespondentsMap.has(key)) {
      uniqueRespondentsMap.set(key, {
        email: r.respondentEmail || 'Anonymous Respondent',
        department: r.department || 'General',
        date: r.submissionDate,
      });
    }
  });

  const respondentsList = Array.from(uniqueRespondentsMap.values());
  const totalCount = surveyResponses.length ? uniqueRespondentsMap.size : 0;
  const targetResponses = 10; // Target standard quota
  const progressPercent = Math.min(100, Math.round((totalCount / targetResponses) * 100));

  // Compute partial score
  const numericRatings = surveyResponses
    .map((r) => (typeof r.rating === 'number' ? r.rating : null))
    .filter((r): r is number => r !== null);
  const rawAvgRating = numericRatings.length
    ? numericRatings.reduce((a, b) => a + b, 0) / numericRatings.length
    : 0;
  const avgRating = Math.min(5.0, Math.max(0, rawAvgRating));
  const partialScore = Math.min(100.0, Math.max(0, (avgRating / 5) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800 bg-amber-50/50 dark:bg-amber-950/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
              <Clock size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                  Survey Ongoing
                </span>
                <span className="text-xs font-medium text-slate-500">{survey.surveyType} Survey</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">{survey.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Ongoing Notification Banner */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 flex items-start gap-3 text-sm">
            <AlertTriangle size={18} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <p className="font-semibold">Survey is actively gathering responses</p>
              <p className="mt-1 text-xs text-amber-800 dark:text-amber-300">
                You are viewing real-time response progress. <strong>Export PDF</strong> and <strong>Send to Partner Report</strong> features will automatically unlock once the survey completes or reaches deadline.
              </p>
            </div>
          </div>

          {/* Progress Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>Response Progress</span>
                <Users size={14} className="text-slate-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{totalCount}</span>
                <span className="text-xs text-slate-500">/ {targetResponses} target</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-full bg-amber-500 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>Partial Overall Score</span>
                <BarChart3 size={14} className="text-slate-400" />
              </div>
              <div className="mt-2 text-2xl font-bold text-amber-600 dark:text-amber-400">
                {totalCount > 0 ? `${partialScore.toFixed(1)}%` : 'N/A'}
              </div>
              <p className="mt-1 text-[11px] text-slate-500">Based on {numericRatings.length} answer ratings</p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>Survey Deadline</span>
                <Clock size={14} className="text-slate-400" />
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                {survey.deadlineDate ? new Date(survey.deadlineDate).toLocaleDateString() : 'Active (No strict deadline)'}
              </div>
              <p className="mt-1 text-[11px] text-slate-500">Auto-completes at deadline</p>
            </div>
          </div>

          {/* List of Respondents */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-between">
              <span>Respondents Recorded ({respondentsList.length})</span>
              <span className="text-xs font-normal text-slate-500">Real-time submissions</span>
            </h4>
            {respondentsList.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-xs text-slate-500 dark:border-slate-800">
                No employees have submitted responses yet.
              </div>
            ) : (
              <div className="max-h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                {respondentsList.map((resp, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] dark:bg-blue-900/50 dark:text-blue-300">
                        {resp.email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-200">{resp.email}</p>
                        <p className="text-[11px] text-slate-500">{resp.department}</p>
                      </div>
                    </div>
                    <span className="text-slate-400">{resp.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          {isAdmin && onMarkComplete ? (
            <button
              onClick={() => {
                onMarkComplete(survey.id);
                onClose();
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-medium text-white hover:bg-emerald-700 transition"
            >
              <CheckCircle2 size={15} />
              Mark Survey as Complete
            </button>
          ) : (
            <span className="text-xs text-slate-500">Actions locked until completion</span>
          )}
          <button
            onClick={onClose}
            className="secondary-button text-xs"
          >
            Close Progress View
          </button>
        </div>
      </div>
    </div>
  );
}
