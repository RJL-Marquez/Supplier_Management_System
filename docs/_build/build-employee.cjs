const path = require('path');
const { buildManual } = require('./render.cjs');
const chapters = require('./employee-content.cjs');
const tocEntries = require('./employee-toc.cjs');

buildManual({
  manualTitle: 'EMPLOYEE MANUAL',
  manualSubtitle: 'A Complete Guide for Employees',
  logoPath: path.join(__dirname, '..', '..', 'public', 'microgenesis_logo.png'),
  version: '1.0',
  date: 'August 2026',
  preparedBy: 'Prepared by Rence Joseph Marquez, DISD Intern 2026',
  chapters,
  tocEntries,
  outPath: path.join(__dirname, '..', 'Employee_Manual.docx'),
}).then((len) => console.log('Employee_Manual.docx written,', len, 'bytes'))
  .catch((err) => { console.error(err); process.exit(1); });
