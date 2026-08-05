import { useMemo, useState } from 'react';
import { SurveyResponse, SurveyType } from '../types/survey';
import { surveyTypeDisplayLabel, formatCompositeScore, getRemarkText } from '../data/questionWeights';
import { getLeaderboard, getPureAverageLeaderboard, RankingMode } from '../utils/scoring';

interface CompanyLeaderboardPanelProps {
  responses: SurveyResponse[];
  rankingMode: RankingMode;
}

const surveyTypes: SurveyType[] = ['Courier', 'Supplier', 'Subcontractor'];

export function CompanyLeaderboardPanel({ responses, rankingMode }: CompanyLeaderboardPanelProps) {
  const [surveyType, setSurveyType] = useState<SurveyType>('Courier');

  const leaderboard = useMemo(
    () => rankingMode === 'weighted' ? getLeaderboard(responses, surveyType) : getPureAverageLeaderboard(responses, surveyType),
    [responses, surveyType, rankingMode]
  );
  // Split the ranked list into two even columns, preserving rank order
  // (column 1 gets ranks 1..N/2, column 2 continues from there).
  const [columnOne, columnTwo] = useMemo(() => {
    const midpoint = Math.ceil(leaderboard.length / 2);
    return [leaderboard.slice(0, midpoint), leaderboard.slice(midpoint)];
  }, [leaderboard]);

  if (!responses.length) return null;

  const renderColumn = (items: typeof leaderboard, startIndex: number) => (
    <ol className="divide-y divide-slate-100 dark:divide-slate-800">
      {items.map((composite, i) => {
        const rank = composite.displayRank ?? startIndex + i + 1;
        return (
          <li key={composite.company} className="flex items-center gap-3 px-2 py-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              {rank}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 pr-2">
                <p className="truncate flex-1 text-sm text-slate-700 dark:text-slate-200">{composite.company}</p>
                <span className="shrink-0 text-sm font-semibold tabular-nums text-left" style={{ color: composite.band.hex }}>
                  {composite.hasScore ? formatCompositeScore(composite.surveyType, composite.rankScore).valueText : '—'}
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                <span
                  className="badge"
                  style={{ backgroundColor: `${composite.band.hex}1a`, color: composite.band.hex }}
                >
                  {getRemarkText(composite.band)}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {composite.evaluationCount} evaluation{composite.evaluationCount === 1 ? '' : 's'}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );

  return (
    <section className="panel space-y-4">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-base font-semibold">Company Leaderboards</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {rankingMode === 'weighted'
              ? 'Composite scores weighted to match each form\'s actual point values, ranked within their own peer group and adjusted for evaluation volume so a handful of reviews can\'t outrank dozens.'
              : 'Ranked purely by actual average score regardless of evaluation count. Ties broken by number of evaluations — more respondents rank higher. Companies with an identical score and submission count share the same rank.'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800 w-full">
          <div className="segmented-control flex-1 w-full md:w-auto grid grid-cols-3">
            {surveyTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`py-2 text-center w-full flex-1 ${surveyType === type ? 'segmented-active font-bold text-[#0063a9] dark:text-blue-400 shadow-sm' : ''}`}
                onClick={() => setSurveyType(type)}
              >
                {surveyTypeDisplayLabel[type]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
        Leaderboard ({leaderboard.length} companies)
      </h4>

      {leaderboard.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400 py-4 text-center">
          No evaluations available for this survey type yet.
        </p>
      ) : (
        <div className="grid gap-x-6 md:grid-cols-2">
          {renderColumn(columnOne, 0)}
          {renderColumn(columnTwo, columnOne.length)}
        </div>
      )}
    </section>
  );
}
