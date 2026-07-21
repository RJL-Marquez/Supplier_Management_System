import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  Download,
  FileText,
  FileType,
  ListChecks,
  Table2,
  AlertCircle,
  TrendingUp,
  Award,
  AlertTriangle,
  HelpCircle,
  Eye,
  Settings
} from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import { PartnerCompany, SurveyResponse, SurveyType } from '../types/survey';
import {
  formatNumber,
  getKpiSummary,
  getCompanyPerformance,
  averageBySurveyType,
  questionPerformance
} from '../utils/analytics';

interface SummaryReportBuilderPageProps {
  responses: SurveyResponse[];
  partnerCompanies?: PartnerCompany[];
  canExport?: boolean;
  onBack: () => void;
}

const ALL_SURVEY_TYPES: SurveyType[] = ['Courier', 'Supplier', 'Subcontractor'];
const BRAND = [0, 99, 169] as const;
const LOGO_URL = '/microgenesis_logo.png';
const LOGO_ASPECT = 498 / 1921; // height / width

const COLORS = {
  Courier: '#0063a9',
  Supplier: '#0ea5e9',
  Subcontractor: '#14b8a6',
};

export function SummaryReportBuilderPage({ responses, partnerCompanies = [], canExport = false, onBack }: SummaryReportBuilderPageProps) {
  // Option States
  const [selectedTypes, setSelectedTypes] = useState<Record<SurveyType, boolean>>({
    Courier: true,
    Supplier: true,
    Subcontractor: true,
  });

  const [showKpis, setShowKpis] = useState(true);
  const [showChart, setShowChart] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [showTopCompanies, setShowTopCompanies] = useState(true);
  const [showBottomCompanies, setShowBottomCompanies] = useState(true);
  const [showQuestions, setShowQuestions] = useState(true);

  const [chartMetric, setChartMetric] = useState<'responses' | 'rating'>('responses');

  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState<'pdf' | 'csv' | 'excel' | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const chartWrapperRef = useRef<HTMLDivElement>(null);

  // Close export menu on click outside
  useEffect(() => {
    if (!exportMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExportMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [exportMenuOpen]);

  const toggleType = (type: SurveyType) => {
    setSelectedTypes(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const activeTypes = ALL_SURVEY_TYPES.filter(type => selectedTypes[type]);

  // Filtered responses based on selection
  const filteredResponses = useMemo(() => {
    return responses.filter(r => selectedTypes[r.surveyType]);
  }, [responses, selectedTypes]);

  // Compute dynamic KPI summary
  const summary = useMemo(() => {
    return getKpiSummary(filteredResponses);
  }, [filteredResponses]);

  // Survey Performance data
  const surveyPerformance = useMemo(() => {
    return averageBySurveyType(filteredResponses, activeTypes);
  }, [filteredResponses, activeTypes]);

  // Companies data
  const companyPerformance = useMemo(() => {
    return getCompanyPerformance(filteredResponses);
  }, [filteredResponses]);

  const topCompanies = useMemo(() => {
    return companyPerformance.slice(0, 5);
  }, [companyPerformance]);

  const leastRatedCompanies = useMemo(() => {
    return companyPerformance.slice().reverse().slice(0, 5);
  }, [companyPerformance]);

  // Questions highlights
  const questionRows = useMemo(() => {
    return questionPerformance(filteredResponses).slice(0, 5);
  }, [filteredResponses]);

  // Recharts Chart Data
  const chartData = useMemo(() => {
    return surveyPerformance.map(row => ({
      name: row.surveyType,
      value: chartMetric === 'responses' ? row.responses : row.average,
      formattedValue: chartMetric === 'responses' ? `${row.responses} responses` : `${formatNumber(row.average)}%`,
    })).filter(row => row.value > 0);
  }, [surveyPerformance, chartMetric]);

  // Logo fetch helper for pdf export
  const fetchLogoDataUrl = async (): Promise<string | null> => {
    try {
      const res = await fetch(LOGO_URL);
      if (!res.ok) return null;
      const blob = await res.blob();
      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('logo fetch failed'));
        reader.readAsDataURL(blob);
      });
    } catch {
      return null;
    }
  };

  // Helper to capture SVG chart as PNG base64
  const captureChartImage = async (): Promise<string | null> => {
    if (!chartWrapperRef.current) return null;
    try {
      const canvas = await html2canvas(chartWrapperRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
      });
      return canvas.toDataURL('image/png');
    } catch {
      return null;
    }
  };

  const handleExport = async (format: 'pdf' | 'csv' | 'excel') => {
    setIsExporting(format);
    setExportMenuOpen(false);
    try {
      const timestamp = new Date().toISOString().slice(0, 10);
      const reportTitle = 'Summary Report';
      const filenameBase = 'summary_report';

      // 1. Prepare Tables Data for spreadsheets
      const tables: { title: string; columns: string[]; rows: (string | number)[][] }[] = [];

      // Add KPI summary table if active
      if (showKpis) {
        tables.push({
          title: 'Key Performance Indicators',
          columns: ['Metric', 'Value'],
          rows: [
            ['Total Responses', summary.totalResponses],
            ['Average Rating', `${formatNumber(summary.averageRating)}%`],
            ['Overall Satisfaction', `${formatNumber(summary.overallSatisfactionScore)}%`],
            ['N/A Answer Frequency', `${formatNumber(summary.naPercentage)}%`],
          ],
        });
      }

      // Add Survey performance table
      if (showTable) {
        tables.push({
          title: 'Survey Category Summary',
          columns: ['Survey Category', 'Average Rating (%)', 'Response Count'],
          rows: surveyPerformance.map(r => [r.surveyType, formatNumber(r.average), r.responses]),
        });
      }

      // Add Top Performing
      if (showTopCompanies && topCompanies.length > 0) {
        tables.push({
          title: 'Top Performing Evaluated Companies',
          columns: ['Company', 'Average Score (%)', 'Evaluations Count'],
          rows: topCompanies.map(r => [r.company, formatNumber(r.average), r.evaluations]),
        });
      }

      // Add Bottom Performing
      if (showBottomCompanies && leastRatedCompanies.length > 0) {
        tables.push({
          title: 'Lowest Rated Evaluated Companies',
          columns: ['Company', 'Average Score (%)', 'Evaluations Count'],
          rows: leastRatedCompanies.map(r => [r.company, formatNumber(r.average), r.evaluations]),
        });
      }

      // Add Question highlights
      if (showQuestions && questionRows.length > 0) {
        tables.push({
          title: 'Question Performance Highlights',
          columns: ['Question', 'Average Rating (%)', 'Total Responses'],
          rows: questionRows.map(r => [r.question, formatNumber(r.average), r.responses]),
        });
      }

      if (format === 'csv') {
        const chunks = tables.map((table) => {
          const csvBody = Papa.unparse({ fields: table.columns, data: table.rows });
          return `${table.title}\n${csvBody}`;
        });
        const blob = new Blob([chunks.join('\n\n')], { type: 'text/csv;charset=utf-8;' });
        triggerDownload(blob, `${filenameBase}_${timestamp}.csv`);
      } else if (format === 'excel') {
        const workbook = XLSX.utils.book_new();
        tables.forEach((table) => {
          const sheetData = [table.columns, ...table.rows];
          const sheet = XLSX.utils.aoa_to_sheet(sheetData);
          const name = table.title.replace(/[\\/?*[\]:]/g, ' ').slice(0, 31);
          XLSX.utils.book_append_sheet(workbook, sheet, name);
        });
        XLSX.writeFile(workbook, `${filenameBase}_${timestamp}.xlsx`);
      } else if (format === 'pdf') {
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });
        const marginLeft = 48;
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const contentWidth = pageWidth - marginLeft * 2;
        const logoDataUrl = await fetchLogoDataUrl();

        // COVER PAGE
        if (logoDataUrl) {
          const coverLogoWidth = 190;
          const coverLogoHeight = coverLogoWidth * LOGO_ASPECT;
          doc.addImage(logoDataUrl, 'PNG', (pageWidth - coverLogoWidth) / 2, 168, coverLogoWidth, coverLogoHeight);
        }

        doc.setDrawColor(...BRAND);
        doc.setLineWidth(1.1);
        doc.line(pageWidth / 2 - 70, 258, pageWidth / 2 + 70, 258);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(22);
        doc.setTextColor(30);
        doc.text('Summary Report', pageWidth / 2, 290, { align: 'center' });

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10.5);
        doc.setTextColor(110);
        doc.text('MBS Partner Evaluation System', pageWidth / 2, 312, { align: 'center' });

        // Metadata block on cover page
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.rect(marginLeft + 40, 390, contentWidth - 80, 110, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(70);
        doc.text('REPORT SPECIFICATIONS:', marginLeft + 60, 415);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100);
        doc.text(`Active Survey Types:  ${activeTypes.join(', ') || 'None selected'}`, marginLeft + 60, 435);
        doc.text(`Total Submitted Surveys Count:  ${summary.totalResponses} submissions`, marginLeft + 60, 452);
        doc.text(`Average System-wide Score:  ${formatNumber(summary.averageRating)}%`, marginLeft + 60, 469);
        doc.text(`Generated On:  ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`, marginLeft + 60, 486);

        // Footer on Cover
        doc.setFontSize(8);
        doc.setTextColor(140);
        doc.text('Microgenesis Supplier Management System — Confidential', pageWidth / 2, pageHeight - 30, { align: 'center' });

        // REPORT PAGES SETUP
        let pageIndex = 2;
        const addHeaderAndFooter = (pdfDoc: jsPDF) => {
          pdfDoc.addPage();
          
          // Header
          if (logoDataUrl) {
            pdfDoc.addImage(logoDataUrl, 'PNG', marginLeft, 20, 100, 100 * LOGO_ASPECT);
          }
          pdfDoc.setFont('helvetica', 'bold');
          pdfDoc.setFontSize(9);
          pdfDoc.setTextColor(30);
          pdfDoc.text('Summary Report', pageWidth - marginLeft, 32, { align: 'right' });
          pdfDoc.setFont('helvetica', 'normal');
          pdfDoc.setTextColor(130);
          pdfDoc.text('MBS Partner Evaluation System', pageWidth - marginLeft, 44, { align: 'right' });
          
          pdfDoc.setDrawColor(226, 232, 240);
          pdfDoc.setLineWidth(0.75);
          pdfDoc.line(marginLeft, 72, pageWidth - marginLeft, 72);

          // Footer
          pdfDoc.setFontSize(8);
          pdfDoc.setTextColor(140);
          pdfDoc.text('Microgenesis Supplier Management System — Confidential', marginLeft, pageHeight - 20);
          pdfDoc.text(`Page ${pageIndex - 1}`, pageWidth - marginLeft, pageHeight - 20, { align: 'right' });
          pageIndex++;
        };

        // PAGE 2: KEY INSIGHTS & CIRCLE GRAPH
        addHeaderAndFooter(doc);
        let cursorY = 95;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(20);
        doc.text('System-wide Evaluation Overview', marginLeft, cursorY);
        cursorY += 18;

        // KPI block (2x2 Grid)
        if (showKpis) {
          const gridColWidth = contentWidth / 2 - 10;
          
          // Cell 1: Total Responses
          doc.setFillColor(248, 250, 252);
          doc.setDrawColor(226, 232, 240);
          doc.rect(marginLeft, cursorY, gridColWidth, 50, 'FD');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(16);
          doc.setTextColor(...BRAND);
          doc.text(String(summary.totalResponses), marginLeft + 15, cursorY + 23);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(100);
          doc.text('TOTAL SUBMITTED EVALUATIONS', marginLeft + 15, cursorY + 38);

          // Cell 2: Average Rating
          doc.setFillColor(248, 250, 252);
          doc.setDrawColor(226, 232, 240);
          doc.rect(marginLeft + gridColWidth + 20, cursorY, gridColWidth, 50, 'FD');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(16);
          doc.setTextColor(...BRAND);
          doc.text(`${formatNumber(summary.averageRating)}%`, marginLeft + gridColWidth + 35, cursorY + 23);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(100);
          doc.text('AVERAGE SYSTEM SCORE', marginLeft + gridColWidth + 35, cursorY + 38);

          cursorY += 60;

          // Cell 3: Overall Satisfaction
          doc.setFillColor(248, 250, 252);
          doc.setDrawColor(226, 232, 240);
          doc.rect(marginLeft, cursorY, gridColWidth, 50, 'FD');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(16);
          doc.setTextColor(...BRAND);
          doc.text(`${formatNumber(summary.overallSatisfactionScore)}%`, marginLeft + 15, cursorY + 23);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(100);
          doc.text('OVERALL SATISFACTION INDEX', marginLeft + 15, cursorY + 38);

          // Cell 4: N/A rate
          doc.setFillColor(248, 250, 252);
          doc.setDrawColor(226, 232, 240);
          doc.rect(marginLeft + gridColWidth + 20, cursorY, gridColWidth, 50, 'FD');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(16);
          doc.setTextColor(...BRAND);
          doc.text(`${formatNumber(summary.naPercentage)}%`, marginLeft + gridColWidth + 35, cursorY + 23);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(100);
          doc.text('N/A ANSWER FREQUENCY RATE', marginLeft + gridColWidth + 35, cursorY + 38);

          cursorY += 75;
        }

        // Include Circle Graph (from captured chart)
        if (showChart) {
          const chartDataUrl = await captureChartImage();
          if (chartDataUrl) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(30);
            doc.text(`Survey Performance Metrics Map (${chartMetric === 'responses' ? 'Submissions Volume' : 'Average Score %'})`, marginLeft, cursorY);
            cursorY += 12;

            const targetHeight = 150;
            const targetWidth = targetHeight * (400 / 220); // Maintain ratio
            doc.addImage(chartDataUrl, 'PNG', marginLeft + (contentWidth - targetWidth) / 2, cursorY, targetWidth, targetHeight);
            cursorY += targetHeight + 25;
          }
        }

        // Performance Table
        if (showTable) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(30);
          doc.text('Survey Category Performance Table', marginLeft, cursorY);
          cursorY += 10;

          const tableHeaders = ['Survey Category', 'Average Score (%)', 'Total Submissions'];
          const tableRows = surveyPerformance.map(row => [
            row.surveyType,
            `${formatNumber(row.average)}%`,
            String(row.responses)
          ]);

          autoTable(doc, {
            startY: cursorY,
            head: [tableHeaders],
            body: tableRows,
            margin: { left: marginLeft, right: marginLeft, top: 100, bottom: 60 },
            styles: { fontSize: 8.5, cellPadding: 5 },
            headStyles: { fillColor: [0, 99, 169], textColor: 255, fontStyle: 'bold' },
            alternateRowStyles: { fillColor: [248, 250, 252] },
          });
        }

        // PAGE 3: PARTNER COMPANY RATINGS & HIGHLIGHTS
        const hasExtraSections = showTopCompanies || showBottomCompanies || showQuestions;
        if (hasExtraSections) {
          addHeaderAndFooter(doc);
          cursorY = 95;

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(14);
          doc.setTextColor(20);
          doc.text('Partner Performance & Question Highlights', marginLeft, cursorY);
          cursorY += 22;

          // Top Performing Companies
          if (showTopCompanies && topCompanies.length > 0) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(30);
            doc.text('Top Performing Evaluated Companies', marginLeft, cursorY);
            cursorY += 10;

            const tableHeaders = ['Rank', 'Company Name', 'Average Score (%)', 'Evaluations Count'];
            const tableRows = topCompanies.map((row, idx) => [
              `#${idx + 1}`,
              row.company,
              `${formatNumber(row.average)}%`,
              String(row.evaluations)
            ]);

            autoTable(doc, {
              startY: cursorY,
              head: [tableHeaders],
              body: tableRows,
              margin: { left: marginLeft, right: marginLeft, top: 100, bottom: 60 },
              styles: { fontSize: 8.5, cellPadding: 4.5 },
              headStyles: { fillColor: [16, 185, 129], textColor: 255, fontStyle: 'bold' }, // Emerald theme
              alternateRowStyles: { fillColor: [248, 250, 252] },
            });

            cursorY = (doc as any).lastAutoTable.finalY + 25;
          }

          // Lowest Performing Companies
          if (showBottomCompanies && leastRatedCompanies.length > 0) {
            if (cursorY > pageHeight - 140) {
              addHeaderAndFooter(doc);
              cursorY = 95;
            }

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(30);
            doc.text('Lowest Rated Evaluated Companies', marginLeft, cursorY);
            cursorY += 10;

            const tableHeaders = ['Rank', 'Company Name', 'Average Score (%)', 'Evaluations Count'];
            const tableRows = leastRatedCompanies.map((row, idx) => [
              `#${leastRatedCompanies.length - idx}`,
              row.company,
              `${formatNumber(row.average)}%`,
              String(row.evaluations)
            ]);

            autoTable(doc, {
              startY: cursorY,
              head: [tableHeaders],
              body: tableRows,
              margin: { left: marginLeft, right: marginLeft, top: 100, bottom: 60 },
              styles: { fontSize: 8.5, cellPadding: 4.5 },
              headStyles: { fillColor: [239, 68, 68], textColor: 255, fontStyle: 'bold' }, // Rose theme
              alternateRowStyles: { fillColor: [248, 250, 252] },
            });

            cursorY = (doc as any).lastAutoTable.finalY + 25;
          }

          // Question Highlights
          if (showQuestions && questionRows.length > 0) {
            if (cursorY > pageHeight - 160) {
              addHeaderAndFooter(doc);
              cursorY = 95;
            }

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(30);
            doc.text('Question Performance Highlights', marginLeft, cursorY);
            cursorY += 10;

            const tableHeaders = ['Question Rating Highlight', 'Average Rating (%)', 'Response Submissions'];
            const tableRows = questionRows.map(row => [
              row.question,
              `${formatNumber(row.average)}%`,
              String(row.responses)
            ]);

            autoTable(doc, {
              startY: cursorY,
              head: [tableHeaders],
              body: tableRows,
              margin: { left: marginLeft, right: marginLeft, top: 100, bottom: 60 },
              styles: { fontSize: 8, cellPadding: 4.5 },
              headStyles: { fillColor: [0, 99, 169], textColor: 255, fontStyle: 'bold' },
              alternateRowStyles: { fillColor: [248, 250, 252] },
            });
          }
        }

        doc.save(`${filenameBase}_${timestamp}.pdf`);
      }
    } catch (e) {
      console.error('Export failed:', e);
    } finally {
      setIsExporting(null);
    }
  };

  const triggerDownload = (blob: Blob, filename: string) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex flex-col gap-5 xl:flex-row h-full min-h-[calc(100vh-140px)] animate-fade-in">
      {/* 1. Control Panel Sidebar */}
      <aside className="w-full xl:w-80 shrink-0 space-y-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 transition"
            title="Go back"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-800 dark:text-white">Summary Builder</h2>
            <p className="text-xs text-slate-400">Configure Summary Report</p>
          </div>
        </div>

        {/* Survey Types checkboxes */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <Settings size={14} />
            <span>1. Categories Included</span>
          </div>
          <div className="space-y-2.5">
            {ALL_SURVEY_TYPES.map((type) => (
              <label key={type} className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={selectedTypes[type]}
                  onChange={() => toggleType(type)}
                  className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {type} Evaluation Survey
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Chart metric option */}
        {showChart && (
          <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <TrendingUp size={14} />
              <span>2. Graph Metric</span>
            </span>
            <div className="grid grid-cols-2 gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setChartMetric('responses')}
                className={`py-1.5 px-2.5 text-xs font-semibold rounded-md transition ${chartMetric === 'responses' ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Submissions
              </button>
              <button
                type="button"
                onClick={() => setChartMetric('rating')}
                className={`py-1.5 px-2.5 text-xs font-semibold rounded-md transition ${chartMetric === 'rating' ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Average Rating
              </button>
            </div>
          </div>
        )}

        {/* Toggle Report Sections */}
        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <ListChecks size={14} />
            <span>3. Show Sections</span>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showKpis}
                onChange={(e) => setShowKpis(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Core KPI Summary Cards</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showChart}
                onChange={(e) => setShowChart(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Circular Graphe Chart</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showTable}
                onChange={(e) => setShowTable(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Performance Summary Table</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showTopCompanies}
                onChange={(e) => setShowTopCompanies(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Top Performing Companies</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showBottomCompanies}
                onChange={(e) => setShowBottomCompanies(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Lowest Rated Companies</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showQuestions}
                onChange={(e) => setShowQuestions(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Question Highlights (Top 5)</span>
            </label>
          </div>
        </div>

        {/* Warning if no categories selected */}
        {activeTypes.length === 0 && (
          <div className="flex gap-2.5 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30 text-xs">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>Select at least one survey category to populate summary statistics.</span>
          </div>
        )}
      </aside>

      {/* 2. Live Document Sheet Preview */}
      <main className="flex-1 min-w-0 flex flex-col gap-4">
        {/* Export action bar */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-xs">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Eye size={16} />
            <span>Document Preview Mode (Interactive Sheet Layout)</span>
          </div>

          <div className="flex gap-2 self-end relative" ref={menuRef}>
            {canExport ? (
              <>
                <button
                  type="button"
                  onClick={() => setExportMenuOpen(!exportMenuOpen)}
                  disabled={activeTypes.length === 0 || isExporting !== null}
                  className="primary-button inline-flex items-center gap-2"
                >
                  <Download size={15} />
                  <span>Export Report</span>
                  <ChevronDown size={14} />
                </button>

                {exportMenuOpen && (
                  <div className="absolute right-0 top-full z-30 mt-1.5 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                    <button
                      type="button"
                      onClick={() => handleExport('pdf')}
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <FileText size={15} className="text-red-500" /> Export PDF Document
                    </button>
                    <button
                      type="button"
                      onClick={() => handleExport('csv')}
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <Table2 size={15} className="text-blue-500" /> Export CSV Spreadsheet
                    </button>
                    <button
                      type="button"
                      onClick={() => handleExport('excel')}
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <FileType size={15} className="text-emerald-500" /> Export Excel Worksheet
                    </button>
                  </div>
                )}
              </>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 px-3 py-2 rounded-lg">
                ⚠️ Exporting restricted to Supervisor and above
              </span>
            )}
          </div>
        </div>

        {/* The Paper Sheet */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-900/60 rounded-xl p-4 md:p-8 overflow-y-auto max-h-[800px] border border-slate-200/50 dark:border-slate-800/40">
          <div className="bg-white dark:bg-slate-950 mx-auto max-w-[800px] min-h-[1120px] p-8 md:p-12 shadow-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 relative space-y-6">
            
            {/* Elegant Letterhead Header */}
            <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <img src={LOGO_URL} alt="Microgenesis Logo" className="h-9 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="text-right">
                <h1 className="text-xs font-extrabold tracking-wider text-[#0063a9] uppercase">Summary Report</h1>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">MBS Partner Evaluation System</p>
                <p className="text-[10px] text-slate-400 font-mono">Generated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            {/* Document Title Banner */}
            <div className="py-2">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Survey Performance Summary Analysis</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                This comprehensive executive digest synthesizes performance evaluations submitted for active supplier divisions. Ratings are aggregated across Courier, Supplier, and Subcontractor channels to provide system-wide insights.
              </p>
            </div>

            {/* Core KPI Cards Block */}
            {showKpis && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-lg p-3.5 flex flex-col justify-center">
                  <span className="text-xs text-slate-400 font-semibold tracking-wider">RESPONSES</span>
                  <span className="text-lg font-bold text-[#0063a9] mt-1">{summary.totalResponses}</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-lg p-3.5 flex flex-col justify-center">
                  <span className="text-xs text-slate-400 font-semibold tracking-wider">AVG RATING</span>
                  <span className="text-lg font-bold text-[#0063a9] mt-1">{formatNumber(summary.averageRating)}%</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-lg p-3.5 flex flex-col justify-center">
                  <span className="text-xs text-slate-400 font-semibold tracking-wider">SATISFACTION</span>
                  <span className="text-lg font-bold text-[#0063a9] mt-1">{formatNumber(summary.overallSatisfactionScore)}%</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-lg p-3.5 flex flex-col justify-center">
                  <span className="text-xs text-slate-400 font-semibold tracking-wider">N/A FREQUENCY</span>
                  <span className="text-lg font-bold text-[#0063a9] mt-1">{formatNumber(summary.naPercentage)}%</span>
                </div>
              </div>
            )}

            {/* Dynamic Circular Graph Graphe section */}
            {showChart && activeTypes.length > 0 && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-950 flex flex-col items-center">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest text-center mb-3">
                  Survey Share & Performance distribution ({chartMetric === 'responses' ? 'Submissions' : 'Average %'})
                </h4>
                
                {/* Captured chart wrapper */}
                <div ref={chartWrapperRef} className="w-full max-w-[400px] h-[220px] flex items-center justify-center bg-white dark:bg-slate-950">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {chartData.map((entry) => (
                          <Cell
                            key={`cell-${entry.name}`}
                            fill={COLORS[entry.name as SurveyType] || '#CBD5E1'}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: any, name: any, props: any) => [
                          props.payload.formattedValue,
                          name,
                        ]}
                        contentStyle={{
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#f8fafc',
                          fontSize: '11px',
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: '10px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Performance Summary Table */}
            {showTable && activeTypes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white">Survey Performance Summary</h3>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Table 1.1</span>
                </div>
                <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#0063a9] text-white">
                        <th className="px-4 py-2.5 font-bold">Survey Type Category</th>
                        <th className="px-4 py-2.5 font-bold text-center">Average Rating Score (%)</th>
                        <th className="px-4 py-2.5 font-bold text-center">Submitted Evaluations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {surveyPerformance.map((row, index) => (
                        <tr
                          key={row.surveyType}
                          className={index % 2 === 0 ? 'bg-slate-50 dark:bg-slate-800/20' : 'bg-white dark:bg-slate-900'}
                        >
                          <td className="px-4 py-2 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: COLORS[row.surveyType] }} />
                            {row.surveyType} Division
                          </td>
                          <td className="px-4 py-2 text-center text-slate-800 dark:text-slate-100 font-extrabold">{formatNumber(row.average)}%</td>
                          <td className="px-4 py-2 text-center text-slate-600 dark:text-slate-400">{row.responses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Top performing companies section */}
            {showTopCompanies && topCompanies.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <Award size={15} className="text-emerald-500" />
                    <span>Top Performing Evaluated Companies</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Rankings</span>
                </div>
                <div className="overflow-hidden border border-slate-100 dark:border-slate-800 rounded-lg text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 font-bold">
                      <tr>
                        <th className="px-4 py-2">Rank</th>
                        <th className="px-4 py-2">Company</th>
                        <th className="px-4 py-2 text-center">Average Score (%)</th>
                        <th className="px-4 py-2 text-center">Evaluations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {topCompanies.map((row, idx) => (
                        <tr key={row.company} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/10">
                          <td className="px-4 py-1.5 font-bold text-emerald-600 dark:text-emerald-400">#{idx + 1}</td>
                          <td className="px-4 py-1.5 font-semibold text-slate-800 dark:text-slate-200">{row.company}</td>
                          <td className="px-4 py-1.5 text-center font-bold text-slate-700 dark:text-slate-300">{formatNumber(row.average)}%</td>
                          <td className="px-4 py-1.5 text-center text-slate-500">{row.evaluations}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Bottom performing companies section */}
            {showBottomCompanies && leastRatedCompanies.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <AlertTriangle size={15} className="text-rose-500" />
                    <span>Lowest Rated Evaluated Companies</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Rankings</span>
                </div>
                <div className="overflow-hidden border border-slate-100 dark:border-slate-800 rounded-lg text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-400 font-bold">
                      <tr>
                        <th className="px-4 py-2">Rank</th>
                        <th className="px-4 py-2">Company</th>
                        <th className="px-4 py-2 text-center">Average Score (%)</th>
                        <th className="px-4 py-2 text-center">Evaluations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {leastRatedCompanies.map((row, idx) => (
                        <tr key={row.company} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/10">
                          <td className="px-4 py-1.5 font-bold text-rose-600 dark:text-rose-400">#{companyPerformance.length - idx}</td>
                          <td className="px-4 py-1.5 font-semibold text-slate-800 dark:text-slate-200">{row.company}</td>
                          <td className="px-4 py-1.5 text-center font-bold text-slate-700 dark:text-slate-300">{formatNumber(row.average)}%</td>
                          <td className="px-4 py-1.5 text-center text-slate-500">{row.evaluations}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Question highlights section */}
            {showQuestions && questionRows.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <HelpCircle size={15} className="text-slate-500" />
                    <span>Question Highlights (Top 5 Ranked Questions)</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Questions</span>
                </div>
                <div className="overflow-hidden border border-slate-100 dark:border-slate-800 rounded-lg text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold">
                      <tr>
                        <th className="px-4 py-2">Question Highlight</th>
                        <th className="px-4 py-2 text-center">Average Score (%)</th>
                        <th className="px-4 py-2 text-center">Submissions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {questionRows.map((row) => (
                        <tr key={row.question} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/10">
                          <td className="px-4 py-2 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{row.question}</td>
                          <td className="px-4 py-2 text-center font-extrabold text-[#0063a9]">{formatNumber(row.average)}%</td>
                          <td className="px-4 py-2 text-center text-slate-500">{row.responses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Page footer */}
            <div className="absolute bottom-6 left-12 right-12 flex justify-between items-center text-[8px] text-slate-400 font-mono border-t border-slate-100 dark:border-slate-800 pt-3">
              <span>Confidential Report — MBS Partner System</span>
              <span>Microgenesis Supplier Management</span>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
