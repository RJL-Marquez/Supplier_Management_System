import { PartnerCompanyType, SupplierOrigin } from '../types/survey';

// Single source of truth for which compliance-document keys apply to which
// partner category. Mirrors the Master List's "DOCUMENTS ONCE ACCREDITED" /
// "LOCAL SUPPLIER" / "FOREIGN SUPPLIER" column blocks - masterListImport.ts
// and the document-expiry/compliance UI both read from this list so the
// three stay in sync.

// Applies to every accredited partner regardless of category.
export const COMMON_DOCUMENTS = [
  'Confidentiality and Non-Disclosure Agreement',
  'Letter of Accreditation',
  'Supplier Code of Business Conduct and Ethics',
] as const;

export const LOCAL_SUPPLIER_DOCUMENTS = [
  'SIF',
  'BIR2303',
  'SEC (Corp)',
  'Articles of Incorporation',
  'AFS',
  'GIS (Corp)',
  'DTI (Sole)',
  'Business Permit',
  'Import Permit',
  'Product Profile',
  'Proof of Present Address',
  "Sole Proprietorship (Owner's ID)",
  'Other Documents',
] as const;

export const FOREIGN_SUPPLIER_DOCUMENTS = [
  'SIF',
  'Articles of Incorporation',
  'Certificate of Incorporation',
  'AFS',
  'Business Permit/License',
  "Owner's ID",
  'Product Profile',
  'Other Documents',
] as const;

// Document keys whose value is an expiry date (renewable, drives Expired/
// Expiring Soon status) as opposed to a plain Yes/No accreditation flag.
export const EXPIRY_DOCUMENTS = new Set<string>([
  'AFS',
  'GIS (Corp)',
  'DTI (Sole)',
  'Business Permit',
  'Import Permit',
  'Business Permit/License',
]);

export function isExpiryDocument(docName: string): boolean {
  return EXPIRY_DOCUMENTS.has(docName);
}

// Full ordered list of document keys required for a given partner category.
// Couriers/Subcontractors/Uncategorized only carry the common checklist -
// the Master List has no Local/Foreign-specific document block for them.
export function getRequiredDocumentKeys(
  type: PartnerCompanyType,
  origin: SupplierOrigin | undefined
): string[] {
  if (type !== 'Supplier') return [...COMMON_DOCUMENTS];
  const originDocs = origin === 'Foreign' ? FOREIGN_SUPPLIER_DOCUMENTS : LOCAL_SUPPLIER_DOCUMENTS;
  return [...COMMON_DOCUMENTS, ...originDocs];
}
