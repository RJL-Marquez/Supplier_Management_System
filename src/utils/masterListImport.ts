import * as XLSX from 'xlsx';
import {
  BranchRecord,
  BranchStatus,
  ComplianceDocument,
  PartnerCompany,
  PartnerCompanyType,
  SupplierOrigin,
} from '../types/survey';
import { computeDocumentStatus } from './compliance';

// The sheet opens with 18 rows of legend/summary blocks before the real
// header row (row 19, 1-based / index 18). Data starts at index 19.
const HEADER_ROW_INDEX = 18;
const DATA_START_ROW_INDEX = 19;

// Column indices as laid out in "Masterlist Database" (0-based). Positional
// indexing is used instead of header-name lookups because the header cells
// contain inconsistent line breaks/trailing spaces.
const COL = {
  status: 2,
  category: 3,
  supplierRank: 4,
  bpCode: 5,
  bpName: 6,
  bpAddress: 7,
  federalTaxId: 8,
  industry: 9,
  contactPerson: 10,
  position: 11,
  mobilePhone: 12,
  email: 13,
  dateAccredited: 14,
  confidentiality: 15,
  letterOfAccreditation: 16,
  codeOfConduct: 17,
  // Local supplier checklist
  local: {
    sif: 18,
    bir2303: 19,
    sec: 20,
    articlesOfIncorporation: 21,
    afs: 22,
    afsExpiry: 22,
    gis: 25,
    dti: 28,
    businessPermit: 31,
    importPermit: 34,
    productProfile: 37,
    proofOfAddress: 38,
    ownersId: 39,
    otherDocuments: 40,
  },
  // Foreign supplier checklist
  foreign: {
    sif: 41,
    articlesOfIncorporation: 42,
    certOfIncorporation: 43,
    afs: 44,
    businessPermitLicense: 47,
    ownersId: 50,
    productProfile: 51,
    otherDocuments: 52,
  },
} as const;

export interface RawMasterListRow {
  sourceRow: number; // 1-based sheet row number, for audit
  status: string;
  category: string;
  supplierRank: string;
  bpCode: string;
  bpName: string;
  bpAddress: string;
  federalTaxId: string;
  industry: string;
  contactPerson: string;
  position: string;
  mobilePhone: string;
  email: string;
  dateAccredited: unknown;
  cells: unknown[]; // full row, for column-index based document extraction
}

// --- Parsing ---------------------------------------------------------------

export function parseMasterListWorkbook(data: ArrayBuffer | Uint8Array): RawMasterListRow[] {
  const workbook = XLSX.read(data, { type: 'array', cellDates: false });
  const sheetName = workbook.SheetNames.includes('Masterlist Database')
    ? 'Masterlist Database'
    : workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows: unknown[][] = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '' });

  const str = (v: unknown) => (v == null ? '' : String(v).trim());

  return rows
    .slice(DATA_START_ROW_INDEX)
    .map((cells, i) => ({
      sourceRow: DATA_START_ROW_INDEX + i + 1, // 1-based Excel row number
      status: str(cells[COL.status]),
      category: str(cells[COL.category]),
      supplierRank: str(cells[COL.supplierRank]),
      bpCode: str(cells[COL.bpCode]),
      bpName: str(cells[COL.bpName]),
      bpAddress: str(cells[COL.bpAddress]),
      federalTaxId: str(cells[COL.federalTaxId]),
      industry: str(cells[COL.industry]),
      contactPerson: str(cells[COL.contactPerson]),
      position: str(cells[COL.position]),
      mobilePhone: str(cells[COL.mobilePhone]),
      email: str(cells[COL.email]),
      dateAccredited: cells[COL.dateAccredited],
      cells,
    }))
    .filter((row) => row.bpName); // the sheet has one trailing/blank row with no BP Name
}

// --- Name normalization + fuzzy matching -----------------------------------

const LEGAL_SUFFIXES = new Set([
  'INC', 'INCORPORATED', 'CORP', 'CORPORATION', 'CO', 'COMPANY', 'LTD',
  'LIMITED', 'LLC', 'OPC', 'PHILS', 'PHILIPPINES', 'PHIL',
]);

export function normalizeCompanyName(name: string): string {
  const tokens = name
    .toUpperCase()
    .replace(/[.,'"()&/\\-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !LEGAL_SUFFIXES.has(t));
  return tokens.join(' ').trim();
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
    }
    prev = cur;
  }
  return prev[b.length];
}

// 1.0 = identical, 0.0 = completely different.
export function nameSimilarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshtein(a, b) / maxLen;
}

// --- Field normalization -----------------------------------------------------

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

// The sheet mixes "25-May-1999" / "5-Aug-2026" style dates with "7/20/26"
// style dates, plus junk text ("No", "Not yet", "N/A", "Missing") in the same
// columns. Returns undefined for anything that isn't a real date - the
// built-in Date parser is not used because it treats 2-digit years as 19xx.
export function parseFlexibleDate(value: unknown): string | undefined {
  if (value == null) return undefined;
  const str = String(value).trim();
  if (!str) return undefined;

  const dMonY = str.match(/^(\d{1,2})[-\s]([A-Za-z]{3,})[-\s](\d{4})$/);
  if (dMonY) {
    const month = MONTHS[dMonY[2].slice(0, 3).toLowerCase()];
    if (month !== undefined) {
      const day = Number(dMonY[1]);
      const year = Number(dMonY[3]);
      return toIsoDate(year, month, day);
    }
  }

  const slash = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (slash) {
    const month = Number(slash[1]) - 1;
    const day = Number(slash[2]);
    let year = Number(slash[3]);
    if (year < 100) year += year < 50 ? 2000 : 1900;
    return toIsoDate(year, month, day);
  }

  return undefined;
}

function toIsoDate(year: number, month: number, day: number): string | undefined {
  const d = new Date(Date.UTC(year, month, day));
  if (Number.isNaN(d.getTime())) return undefined;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

export function normalizeBranchStatus(raw: string): BranchStatus | undefined {
  const v = raw.trim().toLowerCase();
  if (v === 'outdated') return 'Outdated';
  if (v === 'incomplete') return 'Incomplete';
  if (v === 'completed' || v === 'complete') return 'Complete';
  return undefined; // blank / "Inactive" / other noise - not a recognized checklist state
}

export interface CategoryResolution {
  type: PartnerCompanyType;
  supplierOrigin?: SupplierOrigin;
}

// Handles the sheet's own "Subcontructor" typo and "-NT" suffix (kept
// verbatim in rawCategory for audit, but stripped here since its exact
// operational meaning hasn't been defined yet).
export function resolveCategory(rawCategory: string): CategoryResolution {
  const cleaned = rawCategory
    .trim()
    .replace(/subcontructor/i, 'Subcontractor')
    .replace(/-?\s*NT$/i, '')
    .trim();

  if (!cleaned) return { type: 'Uncategorized' };
  if (/^courier$/i.test(cleaned)) return { type: 'Courier' };
  if (/^subcontractor$/i.test(cleaned)) return { type: 'Subcontractor' };
  if (/^supplier-local$/i.test(cleaned)) return { type: 'Supplier', supplierOrigin: 'Local' };
  if (/^supplier-foreign$/i.test(cleaned)) return { type: 'Supplier', supplierOrigin: 'Foreign' };
  return { type: 'Uncategorized' };
}

// --- Compliance documents ----------------------------------------------------

function yesNo(value: unknown): boolean | undefined {
  const v = String(value ?? '').trim().toLowerCase();
  if (v === 'yes') return true;
  if (v === 'no') return false;
  return undefined;
}

function expiryDoc(value: unknown): ComplianceDocument {
  const v = String(value ?? '').trim();
  if (!v || /^n\/a$/i.test(v)) return {};
  if (/^missing$/i.test(v)) return { provided: false };
  const expiryDate = parseFlexibleDate(v);
  if (!expiryDate) return {};
  const { status, daysLeft } = computeDocumentStatus({ expiryDate });
  return { provided: true, expiryDate, status, daysLeft };
}

function flagDoc(value: unknown): ComplianceDocument {
  const provided = yesNo(value);
  if (provided === undefined) return {};
  return { provided, status: provided ? 'Current' : 'Missing' };
}

function buildDocuments(
  cells: unknown[],
  type: PartnerCompanyType,
  origin: SupplierOrigin | undefined
): Record<string, ComplianceDocument> {
  const docs: Record<string, ComplianceDocument> = {};

  const setFlag = (label: string, idx: number) => {
    const doc = flagDoc(cells[idx]);
    if (Object.keys(doc).length) docs[label] = doc;
  };
  const setExpiry = (label: string, idx: number) => {
    const doc = expiryDoc(cells[idx]);
    if (Object.keys(doc).length) docs[label] = doc;
  };

  // Common, once-accredited checklist (applies regardless of type).
  setFlag('Confidentiality and Non-Disclosure Agreement', COL.confidentiality);
  setFlag('Letter of Accreditation', COL.letterOfAccreditation);
  setFlag('Supplier Code of Business Conduct and Ethics', COL.codeOfConduct);

  if (type !== 'Supplier') return docs;

  if (origin === 'Foreign') {
    setFlag('SIF', COL.foreign.sif);
    setFlag('Articles of Incorporation', COL.foreign.articlesOfIncorporation);
    setFlag('Certificate of Incorporation', COL.foreign.certOfIncorporation);
    setExpiry('AFS', COL.foreign.afs);
    setExpiry('Business Permit/License', COL.foreign.businessPermitLicense);
    setFlag("Owner's ID", COL.foreign.ownersId);
    setFlag('Product Profile', COL.foreign.productProfile);
    setFlag('Other Documents', COL.foreign.otherDocuments);
  } else {
    setFlag('SIF', COL.local.sif);
    setFlag('BIR2303', COL.local.bir2303);
    setFlag('SEC (Corp)', COL.local.sec);
    setFlag('Articles of Incorporation', COL.local.articlesOfIncorporation);
    setExpiry('AFS', COL.local.afs);
    setExpiry('GIS (Corp)', COL.local.gis);
    setExpiry('DTI (Sole)', COL.local.dti);
    setExpiry('Business Permit', COL.local.businessPermit);
    setExpiry('Import Permit', COL.local.importPermit);
    setFlag('Product Profile', COL.local.productProfile);
    setFlag('Proof of Present Address', COL.local.proofOfAddress);
    setFlag("Sole Proprietorship (Owner's ID)", COL.local.ownersId);
    setFlag('Other Documents', COL.local.otherDocuments);
  }

  return docs;
}

// --- Merge engine ------------------------------------------------------------

export interface ImportLogEntry {
  sourceRow: number;
  bpCode: string;
  bpName: string;
  action: 'merged' | 'created' | 'updated-branch' | 'skipped';
  matchedCompanyName?: string;
  matchedCompanyId?: string;
  similarity?: number;
  reason?: string;
}

export interface ImportOptions {
  similarityThreshold?: number; // default 0.88
}

export interface ImportResult {
  companies: PartnerCompany[];
  log: ImportLogEntry[];
  stats: {
    totalRows: number;
    mergedAsBranch: number;
    createdCompanies: number;
    updatedBranches: number;
    skipped: number;
    accredited: number;
    uncategorized: number;
  };
}

function rowToBranch(row: RawMasterListRow, category: CategoryResolution): BranchRecord {
  return {
    id: `branch-${row.bpCode || row.sourceRow}-${row.sourceRow}`,
    bpCode: row.bpCode,
    address: row.bpAddress || undefined,
    federalTaxId: row.federalTaxId || undefined,
    industry: row.industry || undefined,
    contactPerson: row.contactPerson || undefined,
    position: row.position || undefined,
    mobilePhone: row.mobilePhone || undefined,
    email: row.email || undefined,
    rawCategory: row.category || undefined,
    supplierRank: row.supplierRank || undefined,
    dateAccredited: parseFlexibleDate(row.dateAccredited),
    status: normalizeBranchStatus(row.status),
    sourceRow: row.sourceRow,
    documents: buildDocuments(row.cells, category.type, category.supplierOrigin),
  };
}

function newCompanyId(row: RawMasterListRow): string {
  return `pc-import-${row.bpCode || row.sourceRow}`;
}

export function mergeRowsIntoCompanies(
  rows: RawMasterListRow[],
  existingCompanies: PartnerCompany[],
  options: ImportOptions = {}
): ImportResult {
  const threshold = options.similarityThreshold ?? 0.88;
  const nowIso = new Date().toISOString();

  // Deep-clone so callers can diff/rollback against their original state.
  const companies: PartnerCompany[] = existingCompanies.map((c) => ({
    ...c,
    branches: c.branches ? c.branches.map((b) => ({ ...b, documents: { ...b.documents } })) : [],
  }));

  const exactIndex = new Map<string, PartnerCompany>();
  const bucketIndex = new Map<string, PartnerCompany[]>();

  const indexCompany = (company: PartnerCompany) => {
    const norm = normalizeCompanyName(company.name);
    if (!exactIndex.has(norm)) exactIndex.set(norm, company);
    const bucket = norm.charAt(0) || '#';
    if (!bucketIndex.has(bucket)) bucketIndex.set(bucket, []);
    bucketIndex.get(bucket)!.push(company);
  };
  companies.forEach(indexCompany);

  const log: ImportLogEntry[] = [];
  const stats: ImportResult['stats'] = {
    totalRows: rows.length,
    mergedAsBranch: 0,
    createdCompanies: 0,
    updatedBranches: 0,
    skipped: 0,
    accredited: 0,
    uncategorized: 0,
  };

  for (const row of rows) {
    if (!row.bpName) {
      log.push({ sourceRow: row.sourceRow, bpCode: row.bpCode, bpName: row.bpName, action: 'skipped', reason: 'Missing BP Name' });
      stats.skipped++;
      continue;
    }

    const category = resolveCategory(row.category);
    const branch = rowToBranch(row, category);
    const normName = normalizeCompanyName(row.bpName);

    let match: PartnerCompany | undefined = exactIndex.get(normName);
    let similarity = match ? 1 : undefined;

    if (!match) {
      const bucket = bucketIndex.get(normName.charAt(0) || '#') ?? [];
      let best: { company: PartnerCompany; score: number } | undefined;
      for (const candidate of bucket) {
        const score = nameSimilarity(normName, normalizeCompanyName(candidate.name));
        if (score >= threshold && (!best || score > best.score)) {
          best = { company: candidate, score };
        }
      }
      if (best) {
        match = best.company;
        similarity = best.score;
      }
    }

    if (match) {
      const existingBranchIdx = (match.branches ?? []).findIndex(
        (b) => b.bpCode && row.bpCode && b.bpCode === row.bpCode
      );
      if (existingBranchIdx >= 0) {
        match.branches![existingBranchIdx] = branch;
        stats.updatedBranches++;
        log.push({
          sourceRow: row.sourceRow, bpCode: row.bpCode, bpName: row.bpName,
          action: 'updated-branch', matchedCompanyName: match.name, matchedCompanyId: match.id, similarity,
        });
      } else {
        match.branches = [...(match.branches ?? []), branch];
        stats.mergedAsBranch++;
        log.push({
          sourceRow: row.sourceRow, bpCode: row.bpCode, bpName: row.bpName,
          action: 'merged', matchedCompanyName: match.name, matchedCompanyId: match.id, similarity,
        });
      }
      // A row can carry a real category even if it matched an otherwise
      // uncategorized company (e.g. the -NT branch is the accredited one).
      if (category.type !== 'Uncategorized' && match.type === 'Uncategorized') {
        match.type = category.type;
        match.supplierOrigin = category.supplierOrigin;
        match.accreditationStatus = 'Accredited';
        match.isArchived = false;
      }
    } else {
      const isAccredited = category.type !== 'Uncategorized';
      const company: PartnerCompany = {
        id: newCompanyId(row),
        name: row.bpName,
        type: category.type,
        supplierOrigin: category.supplierOrigin,
        createdAt: nowIso,
        isArchived: !isAccredited,
        accreditationStatus: isAccredited ? 'Accredited' : 'Unaccredited',
        branches: [branch],
      };
      companies.push(company);
      indexCompany(company);
      stats.createdCompanies++;
      if (isAccredited) stats.accredited++; else stats.uncategorized++;
      log.push({ sourceRow: row.sourceRow, bpCode: row.bpCode, bpName: row.bpName, action: 'created' });
    }
  }

  return { companies, log, stats };
}

export async function importMasterListFromFile(
  file: File,
  existingCompanies: PartnerCompany[],
  options?: ImportOptions
): Promise<ImportResult> {
  const buffer = await file.arrayBuffer();
  const rows = parseMasterListWorkbook(buffer);
  return mergeRowsIntoCompanies(rows, existingCompanies, options);
}
