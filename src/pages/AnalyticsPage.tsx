import { useState, useMemo, useEffect } from 'react';
import { Award, Ban, ClipboardList, Download, Star, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartCard } from '../components/ChartCard';
import { CompanyLeaderboardPanel } from '../components/CompanyLeaderboardPanel';
import { CompanyAnalysisPanel } from '../components/CompanyAnalysisPanel';
import { StateMessage } from '../components/StateMessage';
import { StatCard } from '../components/StatCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { ArchiveSeries, FilterState, PartnerCompany, SurveyResponse, SurveyType } from '../types/survey';
import {
  getScoreAxisDomain,
  naFrequency,
  questionPerformance,
  responseVolume,
  formatNumber,
  getKpiSummary,
  monthlyTrend,
  yearlyTrend,
  seriesTrend,
  getMaxRatingForResponses,
  submissionScores,
  getCompanyPerformance,
} from '../utils/analytics';
import { computeCompanyComposite } from '../utils/scoring';
import { exportTablesAsCSV, exportTablesAsExcel, ExportTable } from '../utils/exporters';

interface AnalyticsPageProps {
  responses: SurveyResponse[];
  allResponses: SurveyResponse[];
  partnerCompanies: PartnerCompany[];
  activeSurveyTypes: SurveyType[];
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  dataScope?: 'current' | 'all-time' | 'custom';
  onChangeDataScope?: (scope: 'current' | 'all-time' | 'custom') => void;
  archiveSeries?: ArchiveSeries[];
  selectedSeriesIds?: string[];
  onChangeSelectedSeriesIds?: (ids: string[]) => void;
}

const surveyTypeColors: Record<SurveyType, string> = {
  Courier: '#2563eb',
  Supplier: '#10b981',
  Subcontractor: '#f97316',
};

const categoryColors: Record<string, {
  text: string;
  bg: string;
  border: string;
  stroke: string;
  badgeBg: string;
  borderT: string;
  borderClass: string;
  label: string;
}> = {
  Courier: {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50/40 dark:bg-blue-950/10',
    border: 'border-blue-100 dark:border-blue-900/30',
    stroke: 'stroke-blue-600 dark:stroke-blue-400',
    badgeBg: 'bg-blue-100 text-blue-850 dark:bg-blue-900/50 dark:text-blue-200 border border-blue-200 dark:border-blue-800',
    borderT: 'border-t-blue-500',
    borderClass: 'border-blue-500',
    label: 'Courier',
  },
  Supplier: {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50/40 dark:bg-emerald-950/10',
    border: 'border-emerald-100 dark:border-emerald-900/30',
    stroke: 'stroke-emerald-600 dark:stroke-emerald-400',
    badgeBg: 'bg-emerald-100 text-emerald-850 dark:bg-emerald-900/50 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-850',
    borderT: 'border-t-emerald-500',
    borderClass: 'border-emerald-500',
    label: 'Supplier',
  },
  Subcontractor: {
    text: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50/40 dark:bg-orange-950/10',
    border: 'border-orange-100 dark:border-orange-900/30',
    stroke: 'stroke-orange-600 dark:stroke-orange-400',
    badgeBg: 'bg-orange-100 text-orange-850 dark:bg-orange-900/50 dark:text-orange-200 border border-orange-200 dark:border-orange-800',
    borderT: 'border-t-orange-500',
    borderClass: 'border-orange-500',
    label: 'Subcontractor',
  },
  'N/A': {
    text: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-50/40 dark:bg-slate-950/10',
    border: 'border-slate-100 dark:border-slate-800/30',
    stroke: 'stroke-slate-600 dark:stroke-slate-400',
    badgeBg: 'bg-slate-100 text-slate-800 dark:bg-slate-900/50 dark:text-slate-200 border border-slate-200 dark:border-slate-800',
    borderT: 'border-t-slate-500',
    borderClass: 'border-slate-500',
    label: 'Overall',
  }
};

function getSatisfactionColor(p: number) {
  if (p < 30) {
    return {
      text: 'text-red-800 dark:text-red-300',
      bg: 'bg-red-100 dark:bg-red-950/30',
      border: 'border-red-300 dark:border-red-900/50',
      stroke: 'stroke-red-800 dark:stroke-red-300',
      fill: 'fill-red-800 dark:fill-red-300',
      label: 'Critical',
      badgeBg: 'bg-red-200 text-red-900 dark:bg-red-950/60 dark:text-red-200',
      description: 'Satisfaction levels are critical. Immediate attention to partner performance and remediation is highly recommended.'
    };
  } else if (p < 40) {
    return {
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950/20',
      border: 'border-red-200 dark:border-red-900/40',
      stroke: 'stroke-red-600 dark:stroke-red-400',
      fill: 'fill-red-600 dark:fill-red-400',
      label: 'Unsatisfactory',
      badgeBg: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200',
      description: 'Performance is falling short of standards. Corrective action and closer monitoring are recommended.'
    };
  } else if (p < 50) {
    return {
      text: 'text-rose-400 dark:text-rose-300',
      bg: 'bg-rose-50 dark:bg-rose-950/20',
      border: 'border-rose-200 dark:border-rose-900/40',
      stroke: 'stroke-rose-400 dark:stroke-rose-300',
      fill: 'fill-rose-400 dark:fill-rose-300',
      label: 'Slightly Unsatisfactory',
      badgeBg: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200',
      description: 'Below expectations in some areas. Targeted feedback should help bring performance back on track.'
    };
  } else if (p < 75) {
    return {
      text: 'text-orange-500 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/20',
      border: 'border-orange-200 dark:border-orange-900/40',
      stroke: 'stroke-orange-500 dark:stroke-orange-400',
      fill: 'fill-orange-500 dark:fill-orange-400',
      label: 'Fair',
      badgeBg: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
      description: 'Average performance with noticeable gaps. Several operational or communication areas require corrective feedback.'
    };
  } else if (p < 80) {
    return {
      text: 'text-yellow-500 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-950/20',
      border: 'border-yellow-200 dark:border-yellow-900/40',
      stroke: 'stroke-yellow-500 dark:stroke-yellow-400',
      fill: 'fill-yellow-500 dark:fill-yellow-400',
      label: 'Good',
      badgeBg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
      description: 'Acceptable standards met. Consistent results overall, with opportunity to optimize delivery timelines and invoices.'
    };
  } else if (p < 85) {
    return {
      text: 'text-lime-600 dark:text-lime-400',
      bg: 'bg-lime-50 dark:bg-lime-950/20',
      border: 'border-lime-200 dark:border-lime-900/40',
      stroke: 'stroke-lime-500 dark:stroke-lime-400',
      fill: 'fill-lime-500 dark:fill-lime-400',
      label: 'Satisfactory',
      badgeBg: 'bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-200',
      description: 'Solid performance. Partners are highly responsive, maintaining high quality outputs with minimal transaction discrepancies.'
    };
  } else if (p < 92) {
    return {
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/20',
      border: 'border-emerald-200 dark:border-emerald-900/40',
      stroke: 'stroke-emerald-600 dark:stroke-emerald-400',
      fill: 'fill-emerald-600 dark:fill-emerald-400',
      label: 'Highly Satisfactory',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
      description: 'Strong, dependable partnership performance with minimal issues across the board.'
    };
  } else {
    return {
      text: 'text-green-700 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950/20',
      border: 'border-green-200 dark:border-green-900/40',
      stroke: 'stroke-green-700 dark:stroke-green-400',
      fill: 'fill-green-700 dark:fill-green-400',
      label: 'Top Performer',
      badgeBg: 'bg-green-100 text-green-900 dark:bg-green-900/50 dark:text-green-200',
      description: 'Outstanding partnership. Prominent operational quality, competitive pricing terms, and proactive stakeholder engagement.'
    };
  }
}

function truncateQuestion(text: string, max = 44) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export function AnalyticsPage({
  responses,
  allResponses = [],
  partnerCompanies = [],
  activeSurveyTypes,
  filters,
  setFilters,
  dataScope = 'current',
  onChangeDataScope,
  archiveSeries = [],
  selectedSeriesIds = [],
  onChangeSelectedSeriesIds
}: AnalyticsPageProps) {
  const isMobile = useIsMobile();
  const [limit, setLimit] = useState<5 | 10>(5);
  const [performanceMode, setPerformanceMode] = useState<'highest' | 'lowest'>('highest');
  const [trendGranularity, setTrendGranularity] = useState<'monthly' | 'yearly' | 'series'>('monthly');

  const comparableResponses = responses;

  const summary = useMemo(() => getKpiSummary(responses), [responses]);

  // Unified {key, average, responses} shape so the same LineChart can be fed
  // by whichever granularity is selected - month-to-month, year-over-year
  // (for multi-year projections), or by named archive series/period.
  const monthlyTrendData = useMemo(() => monthlyTrend(responses).map((d) => ({ key: d.month, average: d.average, responses: d.responses })), [responses]);
  const yearlyTrendData = useMemo(() => yearlyTrend(responses).map((d) => ({ key: d.year, average: d.average, responses: d.responses })), [responses]);
  const seriesTrendData = useMemo(() => seriesTrend(responses, archiveSeries).map((d) => ({ key: d.label, average: d.average, responses: d.responses })), [responses, archiveSeries]);
  const trend =
    trendGranularity === 'yearly' ? yearlyTrendData :
    trendGranularity === 'series' ? seriesTrendData :
    monthlyTrendData;

  const questions = useMemo(() => questionPerformance(responses), [responses]);

  const portfolioMaxRating = useMemo(() => {
    return getMaxRatingForResponses(allResponses);
  }, [allResponses]);

  const companyAverages = useMemo(() => {
    const companyMap: Record<string, { name: string; sum: number; count: number; type: string }> = {};
    
    const typeMap = new Map<string, string>();
    partnerCompanies.forEach((c) => typeMap.set(c.name, c.type));

    submissionScores(allResponses).forEach((submission) => {
      if (!companyMap[submission.company]) {
        const type = typeMap.get(submission.company) || submission.surveyType;
        companyMap[submission.company] = { name: submission.company, sum: 0, count: 0, type };
      }
      companyMap[submission.company].sum += submission.score;
      companyMap[submission.company].count += 1;
    });

    partnerCompanies.forEach((c) => {
      if (!companyMap[c.name]) {
        companyMap[c.name] = { name: c.name, sum: 0, count: 0, type: c.type };
      }
    });

    return Object.values(companyMap)
      .map((c) => {
        const average = c.count > 0 ? c.sum / c.count : 0;
        return {
          name: c.name,
          average,
          scorePercentage: average,
          count: c.count,
          type: c.type,
        };
      })
      .sort((a, b) => b.average - a.average);
  }, [allResponses, partnerCompanies]);

  const activeCategory = useMemo(() => {
    return filters.surveyType && filters.surveyType.length === 1 ? filters.surveyType[0] : 'All';
  }, [filters.surveyType]);

  // Companies with at least one submitted evaluation - "highest/lowest rated"
  // and "top performer" standings should only ever consider partners that
  // have actually been evaluated, not registry entries sitting at a default
  // 0/100 because nobody has scored them yet.
  const evaluatedCompanyAverages = useMemo(() => companyAverages.filter((c) => c.count > 0), [companyAverages]);

  const categoryCompanyAverages = useMemo(() => {
    return evaluatedCompanyAverages.filter((c) => {
      if (activeCategory === 'All') return true;
      return c.type === activeCategory;
    });
  }, [evaluatedCompanyAverages, activeCategory]);

  const highestCompany = useMemo(() => {
    return categoryCompanyAverages[0] || { name: 'No Evaluated Partners', average: 0, scorePercentage: 0, count: 0, type: 'N/A' };
  }, [categoryCompanyAverages]);

  const lowestCompany = useMemo(() => {
    return categoryCompanyAverages[categoryCompanyAverages.length - 1] || { name: 'No Evaluated Partners', average: 0, scorePercentage: 0, count: 0, type: 'N/A' };
  }, [categoryCompanyAverages]);

  const highestLabel = activeCategory === 'All' 
    ? 'Highest Rated Company' 
    : `Highest Rated ${activeCategory}`;

  const lowestLabel = activeCategory === 'All' 
    ? 'Lowest Rated Company' 
    : `Lowest Rated ${activeCategory}`;

  const [selectedChampionType, setSelectedChampionType] = useState<'Overall' | 'Courier' | 'Supplier' | 'Subcontractor'>('Overall');

  // Sync category state with page category filter changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setSelectedChampionType('Overall');
    } else {
      setSelectedChampionType(activeCategory as any);
    }
  }, [activeCategory]);

  const topCompany = useMemo(() => {
    return evaluatedCompanyAverages[0] || { name: 'No Evaluated Partners', average: 0, scorePercentage: 0, type: 'N/A', count: 0 };
  }, [evaluatedCompanyAverages]);

  const topContractor = useMemo(() => evaluatedCompanyAverages.find((c) => c.type === 'Courier'), [evaluatedCompanyAverages]);
  const topSupplier = useMemo(() => evaluatedCompanyAverages.find((c) => c.type === 'Supplier'), [evaluatedCompanyAverages]);
  const topSubcontractor = useMemo(() => evaluatedCompanyAverages.find((c) => c.type === 'Subcontractor'), [evaluatedCompanyAverages]);

  const displayedCompany = useMemo(() => {
    if (selectedChampionType === 'Overall') return topCompany;
    if (selectedChampionType === 'Courier') return topContractor || { name: 'No Evaluated Couriers', average: 0, scorePercentage: 0, type: 'Courier', count: 0 };
    if (selectedChampionType === 'Supplier') return topSupplier || { name: 'No Evaluated Suppliers', average: 0, scorePercentage: 0, type: 'Supplier', count: 0 };
    if (selectedChampionType === 'Subcontractor') return topSubcontractor || { name: 'No Evaluated Subcontractors', average: 0, scorePercentage: 0, type: 'Subcontractor', count: 0 };
    return topCompany;
  }, [selectedChampionType, topCompany, topContractor, topSupplier, topSubcontractor]);

  const score = displayedCompany.scorePercentage;
  const activeColor = categoryColors[displayedCompany.type] || categoryColors['N/A'];
  const standingDetails = getSatisfactionColor(score);

  const truncateCompanyName = (name: string, maxLen = 14) => {
    return name.length > maxLen ? `${name.substring(0, maxLen)}…` : name;
  };

  const topCompaniesData = useMemo(() => {
    const activeTypes = activeSurveyTypes.length ? activeSurveyTypes : (['Courier', 'Supplier', 'Subcontractor'] as SurveyType[]);
    const companiesInActiveTypes = [...new Set(comparableResponses
      .filter((r) => activeTypes.includes(r.surveyType))
      .map((r) => r.company)
    )];

    const stats = companiesInActiveTypes
      .map((company) => {
        const activeTypesForCompany = activeTypes.filter((type) =>
          comparableResponses.some((r) => r.company === company && r.surveyType === type)
        );
        if (activeTypesForCompany.length === 0) return null;

        const composites = activeTypesForCompany
          .map((type) => computeCompanyComposite(company, type, comparableResponses))
          .filter((c): c is NonNullable<typeof c> => c !== null);

        if (composites.length === 0) return null;

        const avgScore = composites.reduce((sum, c) => sum + c.compositeScore, 0) / composites.length;
        const mainType = composites[0].surveyType;

        return {
          company,
          score: Number(avgScore.toFixed(1)),
          surveyType: mainType,
        };
      })
      .filter((s): s is NonNullable<typeof s> => s !== null);

    if (performanceMode === 'highest') {
      stats.sort((a, b) => b.score - a.score);
    } else {
      stats.sort((a, b) => a.score - b.score);
    }

    return stats.slice(0, limit);
  }, [comparableResponses, activeSurveyTypes, performanceMode, limit]);

  const topCompaniesAxisDomain = useMemo(
    () => getScoreAxisDomain(topCompaniesData.map((item) => item.score)),
    [topCompaniesData],
  );

  const rankedQuestions = questionPerformance(comparableResponses);
  const topQuestions = rankedQuestions.slice(0, 5);
  const remainingQuestions = rankedQuestions.slice(5);
  const bottomQuestions = remainingQuestions.slice(-5);
  const spreadQuestions = [...topQuestions, ...bottomQuestions];

  const toggleSurveyType = (type: SurveyType) => {
    let newTypes = [...filters.surveyType];
    if (newTypes.includes(type)) {
      newTypes = newTypes.filter((t) => t !== type);
    } else {
      newTypes.push(type);
    }
    setFilters({ ...filters, surveyType: newTypes });
  };

  const allSurveyTypes: SurveyType[] = ['Courier', 'Supplier', 'Subcontractor'];

  const toggleSelectedSeries = (id: string) => {
    if (!onChangeSelectedSeriesIds) return;
    const next = selectedSeriesIds.includes(id)
      ? selectedSeriesIds.filter((s) => s !== id)
      : [...selectedSeriesIds, id];
    onChangeSelectedSeriesIds(next);
  };

  const handleExportSnapshot = (format: 'excel' | 'csv') => {
    const tables: ExportTable[] = [
      {
        title: 'KPI Summary',
        columns: ['Metric', 'Value'],
        rows: [
          ['Overall Satisfaction Score', formatNumber(summary.overallSatisfactionScore)],
          ['Total Responses', summary.totalResponses],
          ['Average Rating', formatNumber(summary.averageRating)],
          ['N/A Percentage', `${formatNumber(summary.naPercentage)}%`],
          ['Highest Rated Question', summary.highestRatedQuestion],
          ['Lowest Rated Question', summary.lowestRatedQuestion],
        ],
      },
      {
        title: 'Company Performance',
        columns: ['Company', 'Average Score', 'Evaluations'],
        rows: getCompanyPerformance(responses).map((c) => [c.company, formatNumber(c.average), c.evaluations]),
      },
      {
        title: `Trend (${trendGranularity === 'yearly' ? 'Yearly' : trendGranularity === 'series' ? 'By Series' : 'Monthly'})`,
        columns: ['Period', 'Average Score', 'Responses'],
        rows: trend.map((t) => [t.key, t.average, t.responses]),
      },
    ];
    const filenameBase = `analytics_snapshot_${dataScope}`;
    if (format === 'excel') exportTablesAsExcel(tables, filenameBase);
    else exportTablesAsCSV(tables, filenameBase);
  };

  const scopeToolbar = (onChangeDataScope || responses.length > 0) && (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-end gap-2">
        {onChangeDataScope && (
          <div className="flex rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1" title="Choose whether these analytics reflect only the current period, every archived period combined, or a hand-picked set of periods">
            {(['current', 'all-time', 'custom'] as const).map((scope) => (
              <button
                key={scope}
                type="button"
                onClick={() => onChangeDataScope(scope)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  dataScope === scope
                    ? 'bg-[#0063a9] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {scope === 'current' ? 'Current Period' : scope === 'all-time' ? 'All-Time' : 'Custom'}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleExportSnapshot('excel')}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Export the current KPI summary, company performance, and trend data as an Excel workbook"
          >
            <Download size={14} />
            <span>Export XLSX</span>
          </button>
          <button
            type="button"
            onClick={() => handleExportSnapshot('csv')}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Export the same snapshot as CSV"
          >
            <Download size={14} />
            <span>CSV</span>
          </button>
        </div>
      </div>

      {dataScope === 'custom' && (
        <div className="panel p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Select periods to include</p>
          {archiveSeries.length === 0 ? (
            <p className="text-sm text-slate-400">No named archive periods exist yet. Archive a survey with a period label first.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {archiveSeries.map((s) => (
                <label
                  key={s.id}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer border transition ${
                    selectedSeriesIds.includes(s.id)
                      ? 'bg-[#0063a9] text-white border-[#0063a9]'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedSeriesIds.includes(s.id)}
                    onChange={() => toggleSelectedSeries(s.id)}
                  />
                  {s.label}
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (!responses.length) {
    return (
      <div className="space-y-5">
        {scopeToolbar}
        <StateMessage
          title="No analytics available"
          message={
            dataScope === 'custom'
              ? 'Select at least one period above to view its analytics.'
              : 'Adjust filters to compare survey groups.'
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {scopeToolbar}
      {/* Prominent KPI Section: Overall Satisfaction */}
      <div className={`panel flex flex-col md:flex-row items-center justify-between p-6 md:p-8 border-2 border-slate-100 dark:border-slate-800/40 shadow-lg relative overflow-hidden bg-gradient-to-r from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/40 gap-6 md:gap-10`}>
        
        {/* Left Side: Circular Gauge */}
        <div className="relative flex items-center justify-center w-48 h-48 shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            {/* Underlay Track */}
            <circle
              cx="96"
              cy="96"
              r="75"
              className="stroke-slate-100 dark:stroke-slate-800/50 fill-none"
              strokeWidth="10"
            />
            {/* Animated Segment Progress */}
            <motion.circle
              cx="96"
              cy="96"
              r="75"
              className={`${activeColor.stroke} fill-none`}
              strokeWidth="10"
              strokeDasharray="471.2"
              initial={{ strokeDashoffset: 471.2 }}
              animate={{ strokeDashoffset: 471.2 - (471.2 * score) / 100 }}
              key={displayedCompany.name}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Centered Number Overlay */}
          <div className="absolute flex flex-col items-center justify-center text-center px-4">
            <motion.span
              className={`text-4xl font-light tracking-tight ${activeColor.text}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={displayedCompany.name}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {formatNumber(score, 0)}%
            </motion.span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-1 block max-w-[120px] truncate" title={displayedCompany.name}>
              {displayedCompany.name}
            </span>
          </div>
        </div>

        {/* Right Side: Overall Satisfaction Texts on its Side */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              {activeCategory === 'All' ? 'Top Performing Partner' : `Top Performing ${activeCategory}`}
            </span>
            <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${activeColor.badgeBg}`}>
              {displayedCompany.type} Champion
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {displayedCompany.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              {displayedCompany.name.startsWith('No Evaluated')
                ? 'No evaluations are registered. Employees can submit evaluations using the published survey forms.'
                : `${displayedCompany.name} is recognized as the top-performing ${displayedCompany.type.toLowerCase()} partner, earning the highest combined satisfaction score of ${formatNumber(displayedCompany.average, 2)} out of ${portfolioMaxRating.toFixed(0)} across all survey categories from Microgenesis employees.`
              }
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-xs text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-1.5">
              <span>Combined average:</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">{formatNumber(displayedCompany.average, 2)} / {portfolioMaxRating.toFixed(0)}</span>
            </div>
            <span className="hidden sm:inline text-slate-200 dark:text-slate-800">|</span>
            <div className="flex items-center gap-1.5">
              <span>Evaluations:</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">{displayedCompany.count} submissions</span>
            </div>
            <span className="hidden sm:inline text-slate-200 dark:text-slate-800">|</span>
            <div className="flex items-center gap-1.5">
              <span>Standing category:</span>
              <span className={`font-semibold ${activeColor.text}`}>{standingDetails.label}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Champions Section (Interactive toggle, ONLY shown on "All" view) */}
      {activeCategory === 'All' && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {/* Courier Champion Card */}
          <div
            onClick={() => setSelectedChampionType(selectedChampionType === 'Courier' ? 'Overall' : 'Courier')}
            className={`panel p-4 flex flex-col justify-between border-t-4 border-blue-500 bg-blue-50/5 dark:bg-slate-900/10 cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:shadow-md ${
              selectedChampionType === 'Courier' ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-950' : 'opacity-80 hover:opacity-100'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">Top Courier</span>
                <Award className="text-blue-500 shrink-0" size={16} />
              </div>
              {topContractor ? (
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate">{topContractor.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">Based on {topContractor.count} submitted evaluations</p>
                </div>
              ) : (
                <p className="text-xs text-slate-400">No evaluations submitted yet.</p>
              )}
            </div>
            {topContractor && (
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                <span className="text-xs font-semibold text-slate-500">Employee Rating</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  {topContractor.average.toFixed(2)} / {portfolioMaxRating.toFixed(0)} ({Math.round(topContractor.scorePercentage)}%)
                </span>
              </div>
            )}
          </div>

          {/* Supplier Champion Card */}
          <div
            onClick={() => setSelectedChampionType(selectedChampionType === 'Supplier' ? 'Overall' : 'Supplier')}
            className={`panel p-4 flex flex-col justify-between border-t-4 border-emerald-500 bg-emerald-50/5 dark:bg-slate-900/10 cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:shadow-md ${
              selectedChampionType === 'Supplier' ? 'ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-slate-950' : 'opacity-80 hover:opacity-100'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">Top Supplier</span>
                <Award className="text-emerald-500 shrink-0" size={16} />
              </div>
              {topSupplier ? (
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate">{topSupplier.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">Based on {topSupplier.count} submitted evaluations</p>
                </div>
              ) : (
                <p className="text-xs text-slate-400">No evaluations submitted yet.</p>
              )}
            </div>
            {topSupplier && (
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                <span className="text-xs font-semibold text-slate-500">Employee Rating</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {topSupplier.average.toFixed(2)} / {portfolioMaxRating.toFixed(0)} ({Math.round(topSupplier.scorePercentage)}%)
                </span>
              </div>
            )}
          </div>

          {/* Subcontractor Champion Card */}
          <div
            onClick={() => setSelectedChampionType(selectedChampionType === 'Subcontractor' ? 'Overall' : 'Subcontractor')}
            className={`panel p-4 flex flex-col justify-between border-t-4 border-orange-500 bg-orange-50/5 dark:bg-slate-900/10 cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:shadow-md ${
              selectedChampionType === 'Subcontractor' ? 'ring-2 ring-orange-500 ring-offset-2 dark:ring-offset-slate-950' : 'opacity-80 hover:opacity-100'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500">Top Subcontractor</span>
                <Award className="text-orange-500 shrink-0" size={16} />
              </div>
              {topSubcontractor ? (
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate">{topSubcontractor.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">Based on {topSubcontractor.count} submitted evaluations</p>
                </div>
              ) : (
                <p className="text-xs text-slate-400">No evaluations submitted yet.</p>
              )}
            </div>
            {topSubcontractor && (
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                <span className="text-xs font-semibold text-slate-500">Employee Rating</span>
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                  {topSubcontractor.average.toFixed(2)} / {portfolioMaxRating.toFixed(0)} ({Math.round(topSubcontractor.scorePercentage)}%)
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <CompanyLeaderboardPanel responses={comparableResponses} />

      <CompanyAnalysisPanel responses={comparableResponses} archiveSeries={archiveSeries} />

      <section className="panel">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold">Survey Comparison</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Compare satisfaction patterns across stakeholder groups.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {allSurveyTypes.map((type) => {
                const isActive = activeSurveyTypes.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleSurveyType(type)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
                      isActive ? 'border-transparent text-white shadow-sm' : 'border-slate-200 bg-transparent text-slate-600 dark:border-slate-700 dark:text-slate-400'
                    }`}
                    style={isActive ? { backgroundColor: surveyTypeColors[type] } : {}}
                  >
                    {isActive && <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} />}
                    {type}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard
          title={performanceMode === 'highest' ? `Top ${limit} Best Performing Companies` : `Top ${limit} Least Rated Companies`}
          subtitle={`Based on ${activeSurveyTypes.map(t => t + 's').join(' & ')} ratings`}
          action={
            <div className="flex items-center gap-2 text-xs">
              <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <button
                  type="button"
                  onClick={() => setPerformanceMode('highest')}
                  className={`px-2 py-1 rounded-md font-semibold transition ${
                    performanceMode === 'highest'
                      ? 'bg-white dark:bg-slate-800 text-[#0063a9] dark:text-blue-400 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Best
                </button>
                <button
                  type="button"
                  onClick={() => setPerformanceMode('lowest')}
                  className={`px-2 py-1 rounded-md font-semibold transition ${
                    performanceMode === 'lowest'
                      ? 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Lowest
                </button>
              </div>

              <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <button
                  type="button"
                  onClick={() => setLimit(5)}
                  className={`px-2 py-1 rounded-md font-semibold transition ${
                    limit === 5
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  5
                </button>
                <button
                  type="button"
                  onClick={() => setLimit(10)}
                  className={`px-2 py-1 rounded-md font-semibold transition ${
                    limit === 10
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  10
                </button>
              </div>
            </div>
          }
        >
          {topCompaniesData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topCompaniesData} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="company"
                  tickFormatter={(v) => truncateCompanyName(v, isMobile ? 8 : 12)}
                  tick={{ fontSize: 10, fill: '#64748b' }}
                />
                <YAxis domain={topCompaniesAxisDomain} tick={{ fontSize: 10, fill: '#64748b' }} />
                <Tooltip />
                <Bar dataKey="score" radius={[6, 6, 0, 0]} barSize={isMobile ? 24 : 40}>
                  <LabelList
                    dataKey="score"
                    position="top"
                    style={{ fill: '#475569', fontSize: 10, fontWeight: 'bold' }}
                  />
                  {topCompaniesData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={surveyTypeColors[entry.surveyType]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
              No company data fits the filters.
            </div>
          )}
        </ChartCard>
        <ChartCard title="Response Volume" subtitle="Filtered response counts by survey">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={responseVolume(comparableResponses, activeSurveyTypes)}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="surveyType" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="responses" radius={[6, 6, 0, 0]}>
                {responseVolume(comparableResponses, activeSurveyTypes).map((entry) => (
                  <Cell key={entry.surveyType} fill={surveyTypeColors[entry.surveyType]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title="N/A Frequency" subtitle="Non-applicable responses by category" contentClassName="h-[26rem]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={naFrequency(comparableResponses)}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="category" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#d97706" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Top and Bottom Questions"
          subtitle="5 highest and 5 lowest scoring questions"
          contentClassName="h-[26rem]"
        >
          <div className="mb-2 flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Top 5
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Bottom 5
            </span>
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={spreadQuestions} layout="vertical" margin={{ left: 4, right: isMobile ? 16 : 8 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: isMobile ? 10 : 12 }} />
              <YAxis
                dataKey="question"
                type="category"
                width={isMobile ? 96 : 190}
                tick={{ fontSize: isMobile ? 9 : 12 }}
                tickFormatter={(value: string) => truncateQuestion(value, isMobile ? 16 : 44)}
                interval={0}
              />
              <Tooltip labelFormatter={(value: any) => value} wrapperStyle={{ maxWidth: 320, whiteSpace: 'normal' }} />
              <Bar dataKey="average" radius={[0, 6, 6, 0]}>
                {spreadQuestions.map((entry, index) => (
                  <Cell key={entry.question} fill={index < topQuestions.length ? '#10b981' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Moved from Dashboard: Primary Stats Row */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <StatCard
          label="Total Responses"
          value={String(summary.totalResponses)}
          detail="Submitted evaluations extracted directly from Microsoft Forms platforms."
          icon={ClipboardList}
        />
        <StatCard
          label="Portfolio Average Rating"
          value={`${formatNumber(summary.averageRating, 2)} / ${portfolioMaxRating.toFixed(0)}`}
          detail="Total average performance score across all partner evaluations combined, excluding N/A."
          icon={Star}
        />
      </div>

      {/* Moved from Dashboard: Secondary Stats Row */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <article className="panel md:col-span-2 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/60">
              <span className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Performance Highlights</span>
              <span className="rounded bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 text-[10px] font-bold text-azure">Extremes</span>
            </div>
            
            <div className="space-y-5">
              {/* Highest Rated Partner Row */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/40">
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    <TrendingUp size={14} className="shrink-0" />
                    <span>{highestLabel}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 truncate mt-1" title={highestCompany.name}>
                    {highestCompany.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Rating: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{highestCompany.average.toFixed(2)}</span> / {portfolioMaxRating.toFixed(0)}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    Based on {highestCompany.count} evaluations
                  </p>
                </div>
                {/* Right side circular progress */}
                <div className="relative flex items-center justify-center w-24 h-24 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      className="stroke-slate-100 dark:stroke-slate-800/40 fill-none"
                      strokeWidth="6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      className="stroke-emerald-500 dark:stroke-emerald-400 fill-none"
                      strokeWidth="6"
                      strokeDasharray="238.76"
                      strokeDashoffset={238.76 - (238.76 * (highestCompany.scorePercentage / 100))}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {Math.round(highestCompany.scorePercentage)}%
                  </div>
                </div>
              </div>

              {/* Lowest Rated Partner Row */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 whitespace-nowrap">
                    <Users size={14} className="shrink-0" />
                    <span>{lowestLabel}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 truncate mt-1" title={lowestCompany.name}>
                    {lowestCompany.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Rating: <span className="text-rose-500 dark:text-rose-400 font-bold">{lowestCompany.average.toFixed(2)}</span> / {portfolioMaxRating.toFixed(0)}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    Based on {lowestCompany.count} evaluations
                  </p>
                </div>
                {/* Right side circular progress */}
                <div className="relative flex items-center justify-center w-24 h-24 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      className="stroke-slate-100 dark:stroke-slate-800/40 fill-none"
                      strokeWidth="6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      className="stroke-rose-500 dark:stroke-rose-400 fill-none"
                      strokeWidth="6"
                      strokeDasharray="238.76"
                      strokeDashoffset={238.76 - (238.76 * (lowestCompany.scorePercentage / 100))}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-sm font-bold text-rose-500 dark:text-rose-400">
                    {Math.round(lowestCompany.scorePercentage)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="md:col-span-1">
          <StatCard
            label="N/A Percentage"
            value={`${formatNumber(summary.naPercentage, 1)}%`}
            detail="Share of evaluated criteria marked as Not Applicable by respondents."
            icon={Ban}
          />
        </div>
      </div>

      {/* Moved from Dashboard: Trend (Monthly / Yearly / By Series) */}
      <div className="grid gap-5 grid-cols-1">
        <ChartCard
          title="Rating Trend"
          subtitle={
            trendGranularity === 'yearly'
              ? 'Average score and response volume by year - use this to project a long-run trend'
              : trendGranularity === 'series'
                ? 'Average score and response volume by named archive period'
                : 'Average score and response volume over time'
          }
          action={
            <div className="flex rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1">
              {([
                ['monthly', 'Monthly'],
                ['yearly', 'Yearly'],
                ['series', 'By Series'],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTrendGranularity(key)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    trendGranularity === key
                      ? 'bg-[#0063a9] text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          }
        >
          {trend.length === 0 ? (
            <div className="h-full flex items-center justify-center text-sm text-slate-400 dark:text-slate-500">
              {trendGranularity === 'series' ? 'No named archive periods yet - archive a survey with a period label to see them here.' : 'No data for this view.'}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="key" />
                <YAxis yAxisId="left" domain={[0, 100]} />
                <YAxis yAxisId="right" orientation="right" allowDecimals={false} />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="average" stroke="#2563eb" strokeWidth={3} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="responses" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </div>

      {/* Moved from Dashboard: Question Performance List */}
      <ChartCard
        title="Question Performance"
        subtitle="All questions, ranked by average rating (highest to lowest)"
        contentClassName="max-h-[32rem] overflow-y-auto pr-1"
      >
        <ol className="divide-y divide-slate-100 dark:divide-slate-800">
          {questions.map((item, index) => {
            const pct = Math.max(0, Math.min(100, item.average));
            const norm = item.average / 100;
            const tone =
              norm >= 0.75
                ? { text: 'text-emerald-700 dark:text-emerald-400', bar: 'bg-emerald-500' }
                : norm >= 0.50
                  ? { text: 'text-yellow-700 dark:text-yellow-400', bar: 'bg-yellow-500' }
                  : norm >= 0.25
                    ? { text: 'text-orange-700 dark:text-orange-400', bar: 'bg-orange-500' }
                    : { text: 'text-red-700 dark:text-red-400', bar: 'bg-red-500' };

            return (
              <li key={item.question} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-700 dark:text-slate-200">{item.question}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className={`h-1.5 rounded-full ${tone.bar}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">{item.responses} responses</span>
                  </div>
                </div>
                <span className={`shrink-0 text-sm font-semibold tabular-nums ${tone.text}`}>{item.average.toFixed(1)}</span>
              </li>
            );
          })}
        </ol>
      </ChartCard>
    </div>
  );
}
