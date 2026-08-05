const path = require('path');
const { buildManual } = require('./render.cjs');
const chapters = require('./admin-content.cjs');
const tocEntries = require('./admin-toc.cjs');

buildManual({
  manualTitle: 'ADMIN MANUAL',
  manualSubtitle: 'A Complete Guide for System Administrators',
  logoPath: path.join(__dirname, '..', '..', 'public', 'microgenesis_logo.png'),
  version: '1.0',
  date: 'August 2026',
  preparedBy: 'Prepared by Rence Joseph Marquez, DISD Intern 2026',
  chapters,
  tocEntries,
  outPath: path.join(__dirname, '..', 'Admin_Manual.docx'),
}).then((len) => console.log('Admin_Manual.docx written,', len, 'bytes'))
  .catch((err) => { console.error(err); process.exit(1); });
