const L = require('./lib.cjs');
const { Document, Paragraph, TextRun, HeadingLevel, PageBreak, Packer } = require('docx');

function textRuns(text) {
  if (Array.isArray(text)) {
    return text.map((t) => (typeof t === 'string' ? new TextRun({ text: t, size: 21, color: L.COLOR.body, font: L.FONT }) : t));
  }
  return [new TextRun({ text, size: 21, color: L.COLOR.body, font: L.FONT })];
}

function renderBlock(block) {
  switch (block.type) {
    case 'p':
      return [L.p(block.text)];
    case 'h3':
      return [L.h3(block.text)];
    case 'bullets':
      return [...L.bulletList(block.items), L.spacer(60)];
    case 'steps':
      return [...L.steps(block.items), L.spacer(60)];
    case 'tip':
      return [L.tip(block.text), L.afterTable()];
    case 'note':
      return [L.note(block.text), L.afterTable()];
    case 'warn':
      return [L.warn(block.text), L.afterTable()];
    case 'screenshot':
      return [L.screenshot(block.caption), L.afterTable()];
    default:
      throw new Error('Unknown block type: ' + block.type);
  }
}

function renderSection(section) {
  const out = [L.h2(section.heading)];
  for (const block of section.blocks) {
    out.push(...renderBlock(block));
  }
  return out;
}

function renderChapter(num, chapter) {
  const out = [L.chapterHeading(num, chapter.title)];
  if (chapter.intro) {
    for (const t of chapter.intro) out.push(L.p(t));
  }
  if (chapter.isFaq) {
    for (const { q, a } of chapter.faqs) {
      out.push(...L.faqItem(q, a));
    }
    return out;
  }
  for (const section of chapter.sections) {
    out.push(...renderSection(section));
  }
  return out;
}

function buildManual({ manualTitle, manualSubtitle, logoPath, version, date, preparedBy, chapters, tocEntries, outPath }) {
  const bodyChildren = [];
  chapters.forEach((chapter, idx) => {
    bodyChildren.push(...renderChapter(idx + 1, chapter));
  });

  const doc = new Document({
    styles: L.baseStyles(),
    numbering: L.numbering,
    sections: [
      {
        properties: {
          titlePage: true,
          page: { size: { width: 12240, height: 15840 }, margin: { top: L.MARGIN || 1440, bottom: 1440, left: 1440, right: 1440 } },
        },
        children: [
          ...L.coverPage({ manualTitle, manualSubtitle, logoPath, version, date, preparedBy }),
        ],
      },
      {
        properties: L.sectionProps({ manualTitle }),
        children: [
          ...L.tocPage(tocEntries),
          ...bodyChildren,
        ],
      },
    ],
  });

  return Packer.toBuffer(doc).then((buf) => {
    require('fs').writeFileSync(outPath, buf);
    return buf.length;
  });
}

module.exports = { buildManual };
