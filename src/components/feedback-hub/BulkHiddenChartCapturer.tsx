import React, { useEffect, useMemo, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, Legend } from 'recharts';
import { captureChartImage, exportCompanyReportAsPDF, CompanyReportData } from '../../utils/companyReportExport';
import { computeCompanyComposite, getCompanyTrend, getSectionPeerAverages } from '../../utils/scoring';
import { getScoreAxisDomain, questionPerformance } from '../../utils/analytics';
import { SurveyResponse } from '../../types/survey';

const PRIMARY_COLOR = '#0063a9';
const PEER_COLOR = '#b91c1c';
const PEER_LABEL = 'Peer Average';

// Each survey type stores its overall-feedback comment under its own question
// ID (Courier/Supplier/Subcontractor each differ). This must be derived from
// THIS item's own survey type, not passed in from the wizard, since the
// wizard's own ID reflects only whichever single survey it happened to be
// opened from - using that here caused every item of a different survey type
// to always show 0 comments in the generated PDF, even when comments existed.
function getOverallFeedbackQuestionId(surveyType: string): string {
  return surveyType === 'Courier' ? 'Q-CON-OVERALL-FEEDBACK' :
         surveyType === 'Supplier' ? 'Q-SUP-OVERALL-FEEDBACK' :
         'Q-SUB-OVERALL-FEEDBACK';
}

const formatMonthLabel = (mStr: string) => {
  const parts = mStr.split('-');
  if (parts.length !== 2) return mStr;
  const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, 1);
  return d.toLocaleDateString('en-US', { month: 'short' }) + ' ' + parts[0].slice(2);
};
const radarTickFormatter = (value: string) => value.split(' ').map(w => w.substring(0, 3)).join(' ');

interface BulkHiddenChartCapturerProps {
  item: any;
  responses: SurveyResponse[];
  graphs: { bar: boolean; radar: boolean; trend: boolean; perQuestion: boolean };
  includeComments: boolean;
  previewWindow: Window | null;
  onComplete: () => void;
}

export function BulkHiddenChartCapturer({
  item,
  responses,
  graphs,
  includeComments,
  previewWindow,
  onComplete
}: BulkHiddenChartCapturerProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const radarRef = useRef<HTMLDivElement>(null);
  const trendRef = useRef<HTMLDivElement>(null);

  const companyName = item.company.name;
  const sType = item.survey.surveyType;
  const overallFeedbackQuestionId = getOverallFeedbackQuestionId(sType);

  const composite = useMemo(() => computeCompanyComposite(companyName, sType, responses), [companyName, sType, responses]);
  const peerAverages = useMemo(() => getSectionPeerAverages(responses, sType), [responses, sType]);
  const trend = useMemo(() => getCompanyTrend(responses, companyName, sType), [responses, companyName, sType]);

  const sectionChartData = useMemo(() => {
    if (!composite) return [];
    return composite.sections.map((sec) => {
      const peerMatch = peerAverages.find((p) => p.section === sec.section);
      return {
        section: sec.section,
        [companyName]: sec.percent,
        [PEER_LABEL]: peerMatch ? peerMatch.average : 0,
      };
    });
  }, [composite, peerAverages, companyName]);

  const sectionAxisDomain = useMemo(() => {
    const scores = sectionChartData.flatMap((d) => [d[companyName], d[PEER_LABEL]]);
    return getScoreAxisDomain(scores);
  }, [sectionChartData, companyName]);

  const trendChartData = useMemo(() => trend.map((t) => ({
    month: t.month,
    label: formatMonthLabel(t.month),
    score: t.score,
  })), [trend]);

  const trendAxisDomain = useMemo(() => {
    return getScoreAxisDomain(trendChartData.map((d) => d.score));
  }, [trendChartData]);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800)); // wait for recharts to render

        const chartImages = {
          bar: graphs.bar ? await captureChartImage(barRef.current) : null,
          radar: graphs.radar ? await captureChartImage(radarRef.current) : null,
          trend: graphs.trend ? await captureChartImage(trendRef.current) : null,
        };

        const companyResponses = responses.filter(r => r.company === companyName && r.surveyType === sType && !r.archived);
        const companyQRows = questionPerformance(companyResponses);

        const compComments = companyResponses.filter(
          (r) => r.questionId === overallFeedbackQuestionId && r.comment && r.comment.trim() !== ''
        );

        const compSelectedComments = compComments.filter((c) => {
          const key = `selected_comments_${sType}_${companyName}`;
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const parsed = JSON.parse(saved);
              if (parsed[c.responseId] !== undefined) return parsed[c.responseId];
            } catch (e) {
              // ignore
            }
          }
          return true; // default true
        });

        const reportData: CompanyReportData = {
          company: companyName,
          surveyType: sType,
          composite,
          generatedOn: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          graphs,
          includeComments,
          questionRows: companyQRows,
          chartImages,
          selectedCommentsList: compSelectedComments,
        };

        const dateStr = new Date().toISOString().slice(0, 10);
        const nameClean = companyName.trim().replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
        const filename = `${nameClean}_Feedback_Report_${dateStr}.pdf`;

        const url = await exportCompanyReportAsPDF(reportData, filename, true);
        if (url && isMounted) {
          if (previewWindow) {
            previewWindow.location.href = url;
          } else {
            window.open(url, '_blank');
          }
        }
      } catch (err) {
        console.error('Error generating bulk PDF preview', err);
        if (previewWindow) {
          previewWindow.close();
        }
      } finally {
        if (isMounted) onComplete();
      }
    };
    if (composite) run();
    return () => { isMounted = false; };
    // Intentionally run once on mount only. This component is mounted fresh for
    // each preview request and unmounted when done (see SendToPartnerWizard),
    // so `item`/`graphs`/`composite` are stable for its whole lifetime.
    // Including `onComplete` (a new function identity on every parent re-render,
    // e.g. from the 5s sentReports polling interval in PartnersFeedbackHubPage)
    // here previously caused the effect to tear down and restart PDF generation
    // from scratch every few seconds - which is why the preview tab could hang
    // "Generating PDF preview..." indefinitely.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!composite) return null;

  return (
    <div className="absolute top-0 left-0 -z-50 opacity-0 pointer-events-none w-[800px] h-[800px] overflow-hidden">
      <div ref={barRef} className="bg-white p-3 h-[210px] w-[500px]">
        <BarChart width={500} height={210} data={sectionChartData} margin={{ top: 24, right: 10, bottom: 5, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="section" tick={{ fontSize: 9.5 }} interval={0} height={24} />
          <YAxis domain={sectionAxisDomain} tick={{ fontSize: 10 }} />
          <Tooltip />
          <Bar dataKey={companyName} fill={PRIMARY_COLOR} radius={[4, 4, 0, 0]} isAnimationActive={false}>
            <LabelList dataKey={companyName} position="top" formatter={(val: number) => typeof val === 'number' ? val.toFixed(1) : val} style={{ fontSize: 13, fill: PRIMARY_COLOR, fontWeight: 'bold' }} />
          </Bar>
          <Bar dataKey={PEER_LABEL} fill={PEER_COLOR} radius={[4, 4, 0, 0]} isAnimationActive={false}>
            <LabelList dataKey={PEER_LABEL} position="top" formatter={(val: number) => typeof val === 'number' ? val.toFixed(1) : val} style={{ fontSize: 13, fill: PEER_COLOR, fontWeight: 'bold' }} />
          </Bar>
        </BarChart>
      </div>
      <div ref={radarRef} className="h-[265px] w-[500px] bg-white">
        <RadarChart width={500} height={265} data={sectionChartData} outerRadius="90%" margin={{ top: 20, right: 10, bottom: 0, left: 10 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="section" tick={{ fontSize: 10 }} tickFormatter={radarTickFormatter} />
          <PolarRadiusAxis domain={sectionAxisDomain} tick={{ fontSize: 9 }} />
          <Radar name={companyName} dataKey={companyName} stroke={PRIMARY_COLOR} fill={PRIMARY_COLOR} fillOpacity={0.35} isAnimationActive={false}>
            <LabelList dataKey={companyName} position="top" formatter={(val: number) => typeof val === 'number' ? val.toFixed(1) : val} style={{ fontSize: 11, fill: PRIMARY_COLOR, fontWeight: 'bold' }} />
          </Radar>
          <Radar name={PEER_LABEL} dataKey={PEER_LABEL} stroke={PEER_COLOR} fill={PEER_COLOR} fillOpacity={0.3} isAnimationActive={false}>
            <LabelList dataKey={PEER_LABEL} position="bottom" formatter={(val: number) => typeof val === 'number' ? val.toFixed(1) : val} style={{ fontSize: 11, fill: PEER_COLOR, fontWeight: 'bold' }} />
          </Radar>
          <Legend verticalAlign="top" align="left" layout="vertical" iconSize={10} wrapperStyle={{ fontSize: 10, paddingBottom: 12, left: 0 }} />
          <Tooltip />
        </RadarChart>
      </div>
      <div ref={trendRef} className="h-48 w-[500px] bg-white">
        <LineChart width={500} height={192} data={trendChartData} margin={{ top: 20, right: 16, bottom: 5, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 9 }} tickLine={false} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 9 }} tickLine={false} width={30} />
          <Tooltip />
          <Legend verticalAlign="top" align="left" layout="horizontal" iconSize={10} wrapperStyle={{ fontSize: 10, paddingBottom: 10, left: 0 }} />
          <Line type="monotone" dataKey="score" name={companyName} stroke={PRIMARY_COLOR} strokeWidth={2} dot={{ r: 3 }} connectNulls isAnimationActive={false}>
            <LabelList dataKey="score" position="top" formatter={(val: number) => typeof val === 'number' ? val.toFixed(1) : val} style={{ fontSize: 13, fill: PRIMARY_COLOR, fontWeight: 'bold' }} />
          </Line>
        </LineChart>
      </div>
    </div>
  );
}
