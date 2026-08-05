// Shared helpers for building the Admin & Employee manuals.
const {
  Document, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  Header, Footer, PageNumber, ImageRun, TabStopType, TabStopPosition,
  LevelFormat, convertInchesToTwip, VerticalAlign,
  ExternalHyperlink, UnderlineType, LeaderType,
} = require('docx');
const fs = require('fs');

// ---- Palette (matches the app's own header blue) --------------------------
const COLOR = {
  brand: '0063A9',
  brandDark: '00457A',
  ink: '1E293B',
  body: '334155',
  muted: '64748B',
  rule: 'CBD5E1',
  panelBg: 'F1F5F9',
  tipBg: 'ECFDF5', tipBorder: '86EFAC', tipText: '166534',
  noteBg: 'EFF6FF', noteBorder: '93C5FD', noteText: '1E40AF',
  warnBg: 'FEF2F2', warnBorder: 'FCA5A5', warnText: '991B1B',
  shotBg: 'F8FAFC', shotBorder: '94A3B8', shotText: '475569',
  white: 'FFFFFF',
};

const FONT = 'Calibri';
const PAGE_WIDTH_TWIP = 12240;  // US Letter
const PAGE_HEIGHT_TWIP = 15840;
const MARGIN = convertInchesToTwip(1);

// ---- Numbering configs ------------------------------------------------
const numbering = {
  config: [
    {
      reference: 'steps',
      levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.45), hanging: convertInchesToTwip(0.3) } } } },
      ],
    },
    {
      reference: 'bullets',
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.START,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.45), hanging: convertInchesToTwip(0.2) } } } },
      ],
    },
    {
      reference: 'toc-bullets',
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.START,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.3), hanging: convertInchesToTwip(0.2) } } } },
      ],
    },
  ],
};

// ---- Small building blocks ---------------------------------------------
function spacer(size = 120) {
  return new Paragraph({ spacing: { after: size }, children: [] });
}

function chapterHeading(num, title) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    pageBreakBefore: true,
    spacing: { before: 0, after: 240 },
    border: { bottom: { color: COLOR.brand, space: 6, style: BorderStyle.SINGLE, size: 12 } },
    children: [
      new TextRun({ text: `Chapter ${num} `, color: COLOR.muted, bold: true, size: 22, font: FONT }),
      new TextRun({ text: title, color: COLOR.ink, bold: true, size: 36, font: FONT }),
    ],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 140 },
    children: [new TextRun({ text, bold: true, color: COLOR.brand, size: 26, font: FONT })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 220, after: 100 },
    children: [new TextRun({ text, bold: true, color: COLOR.ink, size: 22, font: FONT })],
  });
}

// Converts a plain content-data item (string | {text,bold} | TextRun) into a real TextRun.
// Content data files use plain {text, bold} objects for convenience, since they cannot
// require() docx classes directly - this is the single place that upgrades them.
function toRun(t) {
  if (typeof t === 'string') return new TextRun({ text: t, size: 21, color: COLOR.body, font: FONT });
  if (t instanceof TextRun) return t;
  if (t && typeof t === 'object' && 'text' in t) {
    return new TextRun({ text: t.text, bold: !!t.bold, italics: !!t.italics, size: 21, color: t.bold ? COLOR.ink : COLOR.body, font: FONT });
  }
  return t;
}

function p(text, opts = {}) {
  const runs = Array.isArray(text) ? text.map(toRun) : [toRun(text)];
  return new Paragraph({ spacing: { after: 160, line: 288 }, children: runs, ...opts });
}

function bold(text) {
  return new TextRun({ text, bold: true, size: 21, color: COLOR.ink, font: FONT });
}

function bulletList(items) {
  return items.map((item) => new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 90, line: 276 },
    children: Array.isArray(item) ? item.map(toRun) : [toRun(item)],
  }));
}

function steps(items) {
  return items.map((item) => new Paragraph({
    numbering: { reference: 'steps', level: 0 },
    spacing: { after: 110, line: 280 },
    children: Array.isArray(item) ? item.map(toRun) : [toRun(item)],
  }));
}

// A bordered single-cell "table" used as a callout box (tip / note / warning / screenshot).
function calloutBox({ label, text, bg, border, fg }) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9360],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: border },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: border },
      left: { style: BorderStyle.SINGLE, size: 16, color: border },
      right: { style: BorderStyle.SINGLE, size: 4, color: border },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, color: 'auto', fill: bg },
            margins: { top: 140, bottom: 140, left: 200, right: 200 },
            children: [
              new Paragraph({
                spacing: { after: 40 },
                children: [new TextRun({ text: label, bold: true, size: 19, color: fg, font: FONT })],
              }),
              new Paragraph({
                spacing: { after: 0, line: 264 },
                children: [new TextRun({ text, size: 20, color: fg, font: FONT })],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function tip(text) {
  return calloutBox({ label: '✓ TIP', text, bg: COLOR.tipBg, border: COLOR.tipBorder, fg: COLOR.tipText });
}
function note(text) {
  return calloutBox({ label: 'ℹ NOTE', text, bg: COLOR.noteBg, border: COLOR.noteBorder, fg: COLOR.noteText });
}
function warn(text) {
  return calloutBox({ label: '⚠ IMPORTANT', text, bg: COLOR.warnBg, border: COLOR.warnBorder, fg: COLOR.warnText });
}
function screenshot(caption) {
  return calloutBox({ label: '🖼  SCREENSHOT PLACEHOLDER', text: caption, bg: COLOR.shotBg, border: COLOR.shotBorder, fg: COLOR.shotText });
}

function afterTable() {
  return spacer(160);
}

function faqItem(q, a) {
  return [
    new Paragraph({
      spacing: { before: 200, after: 60 },
      children: [new TextRun({ text: 'Q: ', bold: true, color: COLOR.brand, size: 21, font: FONT }),
        new TextRun({ text: q, bold: true, color: COLOR.ink, size: 21, font: FONT })],
    }),
    new Paragraph({
      spacing: { after: 120, line: 276 },
      indent: { left: convertInchesToTwip(0.05) },
      children: [new TextRun({ text: 'A: ', bold: true, color: COLOR.muted, size: 21, font: FONT }),
        new TextRun({ text: a, size: 21, color: COLOR.body, font: FONT })],
    }),
  ];
}

// ---- Cover page ----------------------------------------------------------
function coverPage({ manualTitle, manualSubtitle, logoPath, version, date, preparedBy }) {
  const logoBuffer = fs.readFileSync(logoPath);
  const children = [
    new Paragraph({ spacing: { before: 600, after: 0 }, alignment: AlignmentType.CENTER,
      children: [new ImageRun({ type: 'png', data: logoBuffer, transformation: { width: 260, height: 118 } })] }),
    new Paragraph({ spacing: { before: 500, after: 40 }, alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: 'SUPPLIER MANAGEMENT SYSTEM', bold: true, size: 30, color: COLOR.muted, font: FONT, characterSpacing: 20 })] }),
    new Paragraph({ spacing: { before: 0, after: 0 }, alignment: AlignmentType.CENTER,
      border: { bottom: { color: COLOR.brand, space: 14, style: BorderStyle.SINGLE, size: 18 } },
      children: [new TextRun({ text: manualTitle, bold: true, size: 68, color: COLOR.brand, font: FONT })] }),
    new Paragraph({ spacing: { before: 260, after: 0 }, alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: manualSubtitle, size: 26, color: COLOR.ink, font: FONT, italics: true })] }),
  ];

  children.push(new Paragraph({ spacing: { before: 2400, after: 0 }, children: [] }));
  children.push(...coverFooterBlock({ version, date, preparedBy }));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  return children;
}

function coverFooterBlock({ version, date, preparedBy }) {
  const rows = [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
      children: [new TextRun({ text: `Version ${version}  •  ${date}`, size: 20, color: COLOR.muted, font: FONT })] }),
  ];
  if (preparedBy) {
    rows.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 0 },
      children: [new TextRun({ text: preparedBy, size: 20, color: COLOR.muted, font: FONT })] }));
  }
  return rows;
}

// ---- Header / Footer for the body -----------------------------------------
function makeHeader(manualTitle) {
  return new Header({
    children: [
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        border: { bottom: { color: COLOR.rule, space: 4, style: BorderStyle.SINGLE, size: 4 } },
        children: [
          new TextRun({ text: 'Supplier Management System', size: 16, color: COLOR.muted, font: FONT }),
          new TextRun({ text: '\t', size: 16 }),
          new TextRun({ text: manualTitle, size: 16, color: COLOR.muted, font: FONT, bold: true }),
        ],
      }),
    ],
  });
}

function makeFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        border: { top: { color: COLOR.rule, space: 4, style: BorderStyle.SINGLE, size: 4 } },
        children: [
          new TextRun({ text: 'Page ', size: 16, color: COLOR.muted, font: FONT }),
          new TextRun({ children: [PageNumber.CURRENT], size: 16, color: COLOR.muted, font: FONT }),
          new TextRun({ text: ' of ', size: 16, color: COLOR.muted, font: FONT }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: COLOR.muted, font: FONT }),
        ],
      }),
    ],
  });
}

// ---- Table of contents page ------------------------------------------------
// A statically-written TOC (plain paragraphs with a right-aligned dot-leader
// tab), not a Word TOC *field*. Word field codes require the host app to
// evaluate them - Google Docs' importer doesn't reliably do that, so a field
// TOC can render blank there. Plain paragraphs always render, everywhere.
// `entries` is [{ level: 1|2, title, page }], with page numbers captured
// from a real Word pagination pass (see docs/_build/get_toc_pages.ps1).
function tocEntryParagraph({ level, title, page }) {
  const isChapter = level === 1;
  return new Paragraph({
    spacing: { after: isChapter ? 120 : 70, before: isChapter ? 160 : 0 },
    indent: isChapter ? undefined : { left: convertInchesToTwip(0.3) },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX, leader: LeaderType.DOT }],
    children: [
      new TextRun({ text: title, bold: isChapter, size: isChapter ? 23 : 21, color: isChapter ? COLOR.brand : COLOR.body, font: FONT }),
      new TextRun({ text: '\t', size: 21 }),
      new TextRun({ text: String(page), size: isChapter ? 23 : 21, bold: isChapter, color: isChapter ? COLOR.brand : COLOR.muted, font: FONT }),
    ],
  });
}

function tocPage(entries) {
  return [
    new Paragraph({
      spacing: { before: 200, after: 240 },
      children: [new TextRun({ text: 'Table of Contents', bold: true, size: 34, color: COLOR.brand, font: FONT })],
    }),
    ...entries.map(tocEntryParagraph),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

// ---- Document-level default styles -----------------------------------------
function baseStyles() {
  return {
    default: {
      document: { run: { font: FONT, size: 21, color: COLOR.body } },
      heading1: { run: { font: FONT, bold: true, color: COLOR.ink, size: 36 }, paragraph: { spacing: { before: 0, after: 240 } } },
      heading2: { run: { font: FONT, bold: true, color: COLOR.brand, size: 26 }, paragraph: { spacing: { before: 320, after: 140 } } },
      heading3: { run: { font: FONT, bold: true, color: COLOR.ink, size: 22 }, paragraph: { spacing: { before: 220, after: 100 } } },
    },
  };
}

function sectionProps({ manualTitle }) {
  return {
    page: {
      size: { width: PAGE_WIDTH_TWIP, height: PAGE_HEIGHT_TWIP },
      margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
    },
    headers: { default: makeHeader(manualTitle) },
    footers: { default: makeFooter() },
  };
}

module.exports = {
  Document, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, convertInchesToTwip,
  COLOR, FONT, numbering,
  spacer, chapterHeading, h2, h3, p, bold, toRun, bulletList, steps, tip, note, warn, screenshot, faqItem,
  coverPage, coverFooterBlock, tocPage, baseStyles, sectionProps, afterTable,
};
