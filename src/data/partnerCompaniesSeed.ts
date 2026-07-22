// Auto-generated from the Master List Excel via masterListImport.ts's merge engine.
// This is the shipped baseline registry: every fresh install starts from this
// exact snapshot (30 accredited/active companies, ~1099 archived/uncategorized
// raw BP records) instead of a small hand-typed demo list. Admins can still
// add/edit/archive/reclassify companies from here once the app is running -
// this file only defines day-one state, not an ongoing sync source. To refresh
// it from an updated Master List, re-run the generator script that produced
// this file (see PartnerCompaniesPage's "Upload Master List" for the same
// engine, used for in-app recurring refreshes instead of regenerating this file).
import { PartnerCompany } from '../types/survey';

export const seedPartnerCompanies: PartnerCompany[] = [
  {
    "id": "pc-import-PH001",
    "name": "PH WEBADDRESS SERVICES LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PH001-20",
        "bpCode": "PH001",
        "address": "UNIT 1113 PENINSULA CENTER, NO. 67 MODY ROAD, KOWLOON, HONKONG",
        "federalTaxId": "675-937-195-00000",
        "contactPerson": "JEFFREY CHOA",
        "dateAccredited": "1999-05-25",
        "sourceRow": 20,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-02A001-NT",
    "name": "02 AIRCONDITIONING SYSTEM SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-02A001-NT-21",
        "bpCode": "02A001-NT",
        "address": "8TH ST. EXT. FRIENDLY HOMES BULACAO",
        "federalTaxId": "317-702-170-00000",
        "contactPerson": "JOHN REAL LADA",
        "sourceRow": 21,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-10I001-NT",
    "name": "10INCH LIGHTS AND SOUNDS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-10I001-NT-22",
        "bpCode": "10I001-NT",
        "address": "2926 BAGAC STREET BRGY 205 ZONE 18 TONDO MANILA",
        "federalTaxId": "008-368-262-00000",
        "sourceRow": 22,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-1688HARD001-NT",
    "name": "1688 HARDWARE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-1688HARD001-NT-23",
        "bpCode": "1688HARD001-NT",
        "federalTaxId": "476-865-499-000",
        "contactPerson": "1688 HARDWARE INC",
        "mobilePhone": "09300629966",
        "sourceRow": 23,
        "documents": {}
      },
      {
        "id": "branch-HAR001-NT-495",
        "bpCode": "HAR001-NT",
        "address": "1688 Mall, Cor. Quezon-Ledesma St, Iloilo City Proper, Iloilo City, 5000 Iloilo",
        "federalTaxId": "746-865-499-000",
        "contactPerson": "MARY JOY RICONILLA",
        "mobilePhone": "09302222019",
        "sourceRow": 495,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-1WO001",
    "name": "1WORLDTRAINING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-1WO001-24",
        "bpCode": "1WO001",
        "address": "3215 HYDE STREET IRVING TEXAS 75063 US",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 24,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-2K1001-NT",
    "name": "2K17 SOSIO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-2K1001-NT-25",
        "bpCode": "2K1001-NT",
        "address": "47 CHICO ST BRGY QUIRINO 2-A PROJECT 2 QUEZON CITY",
        "federalTaxId": "009-888-503-00000",
        "sourceRow": 25,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-3DN001",
    "name": "3D NETWORKS PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-3DN001-26",
        "bpCode": "3DN001",
        "address": "UNIT-A 4/F LEPANTO BUILDING 8747 PASEO DE ROXAS, MAKATI CITY 1226",
        "federalTaxId": "254-102-619-00100",
        "sourceRow": 26,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-3SS001",
    "name": "3S SECURITY SOLUTIONS SPECIALIST INC",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-3SS001-27",
        "bpCode": "3SS001",
        "address": "UNIT 802 8F STEELWORLD TOWER 713 N.S AMORANTO COR BIAK NA BATO SIENA QC",
        "federalTaxId": "009-652-618-00000",
        "industry": "Wholesale",
        "contactPerson": "VIANCA ISABLE ALEJANDRINO",
        "mobilePhone": "9542204913",
        "email": "acctng@3s-inc.ph",
        "rawCategory": "Supplier-Local",
        "dateAccredited": "2025-04-08",
        "status": "Outdated",
        "sourceRow": 27,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2023-12-31",
            "status": "Expired",
            "daysLeft": -934
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2025-05-14",
            "status": "Expired",
            "daysLeft": -434
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      },
      {
        "id": "branch-3SS001-NT-28",
        "bpCode": "3SS001-NT",
        "address": "107 MARIA CLARA BIAK NA BATO BRGY STO DOMINGO",
        "federalTaxId": "009-652-618-00000",
        "contactPerson": "VIANCA ISABLE ALEJANDRINO",
        "sourceRow": 28,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-611001-NT",
    "name": "611 PROPERTIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-611001-NT-29",
        "bpCode": "611001-NT",
        "address": "IMS BLDG DE JESUS ST BARANGAY 35-D POBLACION DISTRICT DAVAO CITY 8000",
        "federalTaxId": "009-990-326-000",
        "contactPerson": "NIEL KENS",
        "sourceRow": 29,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-7SC001",
    "name": "7S CCTV SECURITY CORPORATION",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-7SC001-30",
        "bpCode": "7SC001",
        "address": "U1A GF LKV BLDG MAKATI AVE COR JUNO BELAIR MAKATI CITY",
        "federalTaxId": "009-395-194-00000",
        "industry": "Retail",
        "mobilePhone": "0917-3147117",
        "email": "sales@7scsc.ph",
        "rawCategory": "Supplier-Local",
        "status": "Outdated",
        "sourceRow": 30,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2024-12-31",
            "status": "Expired",
            "daysLeft": -568
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2025-12-31",
            "status": "Expired",
            "daysLeft": -203
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-838001",
    "name": "838 TECH UNLTD. CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-838001-31",
        "bpCode": "838001",
        "address": "LUNA ST LAPAZ ILOILO",
        "federalTaxId": "402-754-789-00000",
        "sourceRow": 31,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-888001",
    "name": "888HYE ENTERPRISES CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-888001-32",
        "bpCode": "888001",
        "address": "735 3/F RIZAL AVENUE BRGY 304 ZONE 29 STA CRUZ MANILA",
        "federalTaxId": "742-512-879-00000",
        "contactPerson": "ROSAURO BRAGA",
        "sourceRow": 32,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-8PL001",
    "name": "8 PLATINUM BUSINESS SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-8PL001-33",
        "bpCode": "8PL001",
        "address": "WAREHOUSE #1 NO. 155 PASIG BLVD., PASIG RIZAL LUMBER COMPOUND,",
        "federalTaxId": "010-446-875-00000",
        "sourceRow": 33,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-A20001",
    "name": "A20 AIRCONDITIONING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-A20001-34",
        "bpCode": "A20001",
        "address": "17 SORIANO BLDG SKYLINE CATALUNAN GRANDE DAVAO CITY",
        "federalTaxId": "491-893-686-00000",
        "sourceRow": 34,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AAP001",
    "name": "AAPANEL LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AAP001-35",
        "bpCode": "AAP001",
        "address": "WEBSITE",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALE SUPPORT",
        "mobilePhone": "00000001",
        "email": "ken@aapanel.com",
        "sourceRow": 35,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ABE001",
    "name": "ABENSON VENTURES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ABE001-36",
        "bpCode": "ABE001",
        "address": "4/F 790 ARNAIZ COR CHINO ROCES AVE      (WALTERMART MAKATI)",
        "federalTaxId": "004-149-434-04500",
        "sourceRow": 36,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ABE002",
    "name": "ABEL IAN ONICO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ABE002-37",
        "bpCode": "ABE002",
        "address": "MOLO ILOILO CITY",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "ABEL IAN ONICO",
        "sourceRow": 37,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ABL001",
    "name": "ABLAZE MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ABL001-38",
        "bpCode": "ABL001",
        "address": "141-D D TUAZON ST BRGY LOURDES STA MESA HIGHTS",
        "federalTaxId": "282-010-428-00000",
        "sourceRow": 38,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ABO001-NT",
    "name": "ABOT PADYAK COURIER SERVICES CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ABO001-NT-39",
        "bpCode": "ABO001-NT",
        "address": "UNGKA I 5001 PAVIA ILOILO",
        "federalTaxId": "606-051-551-00000",
        "contactPerson": "DUSTINE",
        "sourceRow": 39,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACC001",
    "name": "ACCENT MICRO TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACC001-40",
        "bpCode": "ACC001",
        "address": "8TH FLOOR EAST TOWER PSEC EXCHANGE ROAD ORTIGAS CENTER BRGY. SAN ANTONIO PASIG CITY 1600",
        "federalTaxId": "004-968-201-00000",
        "contactPerson": "CHERRY ANN MACASPAC",
        "sourceRow": 40,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACC001-NT",
    "name": "ACCESS FRONTIER TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACC001-NT-41",
        "bpCode": "ACC001-NT",
        "address": "UNIT 702 GREENBELT MANSION,106 PEREA ST. BRGY. SAN LORENZO, LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "204-248-281-00000",
        "contactPerson": "DOMINIC MARQUEZ",
        "sourceRow": 41,
        "documents": {}
      },
      {
        "id": "branch-ACC002-42",
        "bpCode": "ACC002",
        "address": "UNIT 702 GREENBELT MANSION,106 PEREA ST. BRGY. SAN LORENZO, LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "204-248-281-00000",
        "contactPerson": "ABIGAIL RUIZ",
        "sourceRow": 42,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACC002-NT",
    "name": "ACCREDITING AGENCY OF CHARTERED COLLEGES & UP INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACC002-NT-43",
        "bpCode": "ACC002-NT",
        "address": "812 FUTURE POINT PLAZA 112 PANAY AVE SOUTH TRIANGLEQUEZON CITY",
        "federalTaxId": "211-408-111-000",
        "contactPerson": "MERELYN",
        "sourceRow": 43,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACC004",
    "name": "ACCESSORIES AND SUPPLIES DEPOT, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACC004-44",
        "bpCode": "ACC004",
        "address": "110 LABO ST SALVACION 1114 QUEZON CITY NCR, SECOND DISTICT PHILIPPINES",
        "federalTaxId": "005-679-268-00000",
        "contactPerson": "RINA MERCADERO",
        "sourceRow": 44,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACE001",
    "name": "ACER PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACE001-45",
        "bpCode": "ACE001",
        "federalTaxId": "222-175-867-00001",
        "sourceRow": 45,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACE001-NT",
    "name": "ACE IT BUSINESS SUPPORT SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACE001-NT-46",
        "bpCode": "ACE001-NT",
        "address": "CALIFORNIA GARDEN SQ F3 1G DM GUEVARRA ST HIGHWAY HILLS MANDALUYONG CITY",
        "federalTaxId": "426-950-341-00100",
        "sourceRow": 46,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACE002-NT",
    "name": "ACE HARDWARE PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACE002-NT-47",
        "bpCode": "ACE002-NT",
        "address": "UNIT 014 LG/F ANNEX 1 SM CITY NORTH EDSA, STO. CRISTO",
        "federalTaxId": "200-035-311-03400",
        "contactPerson": "SM CITY",
        "sourceRow": 47,
        "documents": {}
      },
      {
        "id": "branch-ACE009V-48",
        "bpCode": "ACE009V",
        "address": "SM MEGAMALL BLDG. CORNER EDSA MANDALUYONG CITY",
        "federalTaxId": "200-035-311-006",
        "industry": "RETAIL",
        "contactPerson": "NICOLE ABRENCILLO",
        "email": "NA",
        "sourceRow": 48,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACH001",
    "name": "ACHIEVE WITHOUT BORDERS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACH001-49",
        "bpCode": "ACH001",
        "address": "U 1101 11F GLOBAL TOWER GEN MASCARDO COR M REYES ST BANGKAL",
        "federalTaxId": "008-309-869-00000",
        "sourceRow": 49,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACH002",
    "name": "ACHIEVE WITHOUT BORDERS NETWORKS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACH002-50",
        "bpCode": "ACH002",
        "address": "U203  2/F GLOBAL TOWER GEN MASCARDO COR M REYES ST BANGKAL",
        "federalTaxId": "009-702-476-000",
        "contactPerson": "JONATHAN POLONGASA",
        "sourceRow": 50,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACT001",
    "name": "ACTIV8 DIVERSIFIED TECHNOLOGY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACT001-51",
        "bpCode": "ACT001",
        "address": "#15 MACLANG ST. SANTA LUCIA, SAN JUAN CITY, 1500",
        "federalTaxId": "008-060-413-00000",
        "sourceRow": 51,
        "documents": {}
      },
      {
        "id": "branch-ACT001-NT-52",
        "bpCode": "ACT001-NT",
        "address": "#15 MACLANG ST. SANTA LUCIA, SAN JUAN CITY, 1500",
        "federalTaxId": "008-060-413-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 52,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACT002",
    "name": "ACTIVE SERVICES & PRODUCTS INDUSTRIAL CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACT002-53",
        "bpCode": "ACT002",
        "address": "4TH FLR JM BLDG 1 SERGIO OSMENA HW COR ROCKETFELLE ST SAN ISIDRO  1234 CITY OF MAKATI , 4TH DISTRICT",
        "federalTaxId": "001-903-216-000",
        "contactPerson": "belieza",
        "sourceRow": 53,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACU001",
    "name": "ACUMAX INTERNATIONAL CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACU001-54",
        "bpCode": "ACU001",
        "address": "1ST FLOOR 35 STA ROSA ST MANRESA",
        "federalTaxId": "200-587-213-00000",
        "sourceRow": 54,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACU002",
    "name": "ACUMEN IT TRAINING INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ACU002-55",
        "bpCode": "ACU002",
        "address": "11TH FLOOR SM AURA OFFICE TOWER 26TH STREET COR MCKINLEY PARKWAY FORT BONIFACIO",
        "federalTaxId": "010-157-507-00000",
        "sourceRow": 55,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ACW001",
    "name": "ACW DISTRIBUTION (PHILS), INC.",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-ACW001-56",
        "bpCode": "ACW001",
        "address": "UNIT 2307-2308 EXQUADRA TOWER JADE DRIVE ORTIGAS CENTER SAN ANTONIO 1605 CITYOF PASIG NCR, 2ND DISTR",
        "federalTaxId": "002-246-630-00000",
        "industry": "Distributor",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "sourceRow": 56,
        "documents": {
          "Import Permit": {
            "provided": true,
            "expiryDate": "2026-09-26",
            "status": "Current",
            "daysLeft": 66
          }
        }
      },
      {
        "id": "branch-ACW002-NT-57",
        "bpCode": "ACW002-NT",
        "address": "23FLR THE ORIENT SQUARE F. ORTIGAS JR. SAN ANTONIO ORTIGAS CTR. PASIG",
        "federalTaxId": "002-246-630-00000",
        "sourceRow": 57,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ADE001",
    "name": "ADECS INTERNATIONAL CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ADE001-58",
        "bpCode": "ADE001",
        "address": "141 D. TUAZON, SANTA MESA HEIGHTS, QUEZON CITY, 1114 METRO MANILA",
        "federalTaxId": "005-252-693-00000",
        "sourceRow": 58,
        "documents": {}
      },
      {
        "id": "branch-ADE002-NT-59",
        "bpCode": "ADE002-NT",
        "address": "141 D. TUAZON, SANTA MESA HEIGHTS, QUEZON CITY, 1114 METRO MANILA",
        "federalTaxId": "005-252-693-00000",
        "sourceRow": 59,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ADG001",
    "name": "AGD INFOTECH, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ADG001-60",
        "bpCode": "ADG001",
        "address": "SUITE 1704 17/F ATLANTA CENTRE          ANNAPOLIS ST., GREENHILLS",
        "federalTaxId": "008-254-409-00000",
        "sourceRow": 60,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ADR001NT",
    "name": "ADRIATICO CONSORTIUM INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ADR001NT-61",
        "bpCode": "ADR001NT",
        "address": "SHERATON MANILA BAY M ADRIATICO ST. BRGY 699 ZONE 076 MALATE MANILA",
        "federalTaxId": "003-839-334-003",
        "industry": "HOSPITALITY",
        "contactPerson": "EARLJOHN DE CASTRO",
        "mobilePhone": "09175534080",
        "sourceRow": 61,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ADS001",
    "name": "AD-STYLE SIGNAGES & MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ADS001-62",
        "bpCode": "ADS001",
        "address": "L6 B1 ZABATE ROAL KALIGAYAHAN NOVALICHES",
        "federalTaxId": "008-811-007-00000",
        "sourceRow": 62,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AGU001-NT",
    "name": "AGULTO, CARLOS BAUTISTA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AGU001-NT-63",
        "bpCode": "AGU001-NT",
        "address": "SUN VALLEY GOLF COUNTRY CLUB INARAWAN ANTIPOLO CITY",
        "federalTaxId": "114-975-213-009",
        "contactPerson": "CARLOS",
        "sourceRow": 63,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AIM001",
    "name": "PAGPAGUITAN, ANDY LAMBERTE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AIM001-64",
        "bpCode": "AIM001",
        "address": "DAANG HARI ST SITIO TAGHANGIN BRGY MAYBANCAL MORONG RIZAL 1960",
        "federalTaxId": "224-640-799-00000",
        "sourceRow": 64,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AIR001",
    "name": "AIR PROSYSTEMS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AIR001-65",
        "bpCode": "AIR001",
        "address": "UNIT F FREEMONT ARCADE 11 SHAW BLVD BRGY SAN ANTONIO",
        "federalTaxId": "006-049-390-00000",
        "sourceRow": 65,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AIR001-NT",
    "name": "AIRSPEED INTERNATIONAL CORPORATION",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-AIR001-NT-66",
        "bpCode": "AIR001-NT",
        "address": "AIC GGB BLDG PASCOR DRIVE STO NINO PARANAQUE CITYY 1700",
        "federalTaxId": "000-410-573-000",
        "contactPerson": "JERRELYN DIMALIBOT",
        "rawCategory": "Courier-NT",
        "sourceRow": 66,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AIR002",
    "name": "AIRDRIVEN ENGINEERING TRADE AND SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AIR002-67",
        "bpCode": "AIR002",
        "address": "B11 L14 BULIRAN ROAD SITIO KAPATIRAN BRGY SAN ISIDRO",
        "federalTaxId": "256-378-958-00000",
        "sourceRow": 67,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALB001-NT",
    "name": "ALBERT CABRILLAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALB001-NT-68",
        "bpCode": "ALB001-NT",
        "federalTaxId": "313-683-561-00000",
        "sourceRow": 68,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALD001",
    "name": "ALDREN ELECTRICAL SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALD001-69",
        "bpCode": "ALD001",
        "address": "17A SAMPALOC ST  WESTERN BICUTAN TAGUIG CITY",
        "federalTaxId": "352-993-797-00000",
        "sourceRow": 69,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALF001",
    "name": "ALFALINK TOTAL SOLUTION CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALF001-70",
        "bpCode": "ALF001",
        "address": "RIZAL ST MAGUGPO",
        "federalTaxId": "487-174-329-00000",
        "sourceRow": 70,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALI001",
    "name": "ALINEA INFOTECH SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALI001-71",
        "bpCode": "ALI001",
        "address": "145 TANDANG SORA AVENUE TANDANG SORA 1116 QUEZON CITY NCR SECOND DISTRICT",
        "federalTaxId": "226-830-173-00000",
        "sourceRow": 71,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALL001",
    "name": "ALL VENTURE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALL001-72",
        "bpCode": "ALL001",
        "address": "35-I BALER ST., BRGY BUNGAD, KAUNLARAN",
        "federalTaxId": "008-448-520-00000",
        "sourceRow": 72,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALL001-NT",
    "name": "ALLSOURCE PRODUCTS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALL001-NT-73",
        "bpCode": "ALL001-NT",
        "address": "UNIT 1503-A WEST TOWER PSEC EXCHANGEROAD ORTIGAS CENTER BRGY SAN ANTONIO PASIG CITY 1605",
        "federalTaxId": "008-983-926-000",
        "contactPerson": "CHERILYN IPONG",
        "sourceRow": 73,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALL002",
    "name": "ALL VISUAL & LIGHTS SYSTEMS CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALL002-74",
        "bpCode": "ALL002",
        "address": "54A WESTPOINT ST CUBAO",
        "federalTaxId": "230-333-819-00000",
        "sourceRow": 74,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALL003",
    "name": "ALLIED LINKS TECHNOLOGIES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALL003-75",
        "bpCode": "ALL003",
        "address": "UNIT 1212 CITYLAND 10 TOWER 1           H.V. DELA COSTA ST, SALCEDO VILLAGE",
        "federalTaxId": "208-540-190-00000",
        "sourceRow": 75,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALL004",
    "name": "ALLHOME CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALL004-76",
        "bpCode": "ALL004",
        "address": "ANDALUCIA SAN AGUSTIN CITY OF FERNANDO PAMPANGA 2000",
        "federalTaxId": "008-541-952-00100",
        "sourceRow": 76,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALN001-NT",
    "name": "ALNARDO BELEN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALN001-NT-77",
        "bpCode": "ALN001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "232-439-574-00000",
        "sourceRow": 77,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP001",
    "name": "ALPHA DIGIZONE MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALP001-78",
        "bpCode": "ALP001",
        "address": "2702 TAFT AVENUE, PASAY CITY, METRO MANILA",
        "federalTaxId": "237-156-457-00000",
        "contactPerson": "SHERWIN SO",
        "sourceRow": 78,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP001-NT",
    "name": "ALPHA INSURANCE & SURETY CO. INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALP001-NT-79",
        "bpCode": "ALP001-NT",
        "address": "1025 ALPHA INSURANCE CENTRE, SAN MARCELINO ST., ZONE 71 DISTRICT V BRGY 660-A ERMITA, MANILA",
        "federalTaxId": "000-433-024-00000",
        "sourceRow": 79,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP002",
    "name": "ALPHALOGIC DISTRIBUTION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALP002-80",
        "bpCode": "ALP002",
        "address": "ROOM 601 6TH FLR DIPLOMAT CONDOMINIUM ROXAS BLVD COR RUSSEL ST BRGY 76",
        "federalTaxId": "008-856-085-00000",
        "sourceRow": 80,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP002-NT",
    "name": "A. LOPEZ HEATH  SAFETY & ENVIRONMENT TRANING & CONSULTACNY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALP002-NT-81",
        "bpCode": "ALP002-NT",
        "federalTaxId": "000-0000-00000000",
        "contactPerson": "CONTACT",
        "sourceRow": 81,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP003",
    "name": "ALPHAPOS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALP003-82",
        "bpCode": "ALP003",
        "address": "ROOM 601 6TH FLR DIPLOMAT CONDOMINIUM ROXAS BLVD COR RUSSEL ST BRGY 76",
        "federalTaxId": "009-565-109-00000",
        "sourceRow": 82,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP004",
    "name": "ALPS TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALP004-83",
        "bpCode": "ALP004",
        "address": "UNIT 329 THE PALM TOWERS 7706 SAINT PAUL ROAD SAN ANTONIO 1203 CITY OF MAKATI NCR, FOOURT DISTRICT",
        "federalTaxId": "010-755-478-00000",
        "contactPerson": "ADNIL PUENTE",
        "mobilePhone": "09177060227",
        "sourceRow": 83,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALP005-NT",
    "name": "ALPHACON LOGISTICS INTERNATIONAL CORPORATION",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-ALP005-NT-84",
        "bpCode": "ALP005-NT",
        "address": "UNIT 707 COLUMBIA AIRFREIGT COMPLEX 1&2 NINOY AQUINO AVENUE SANTO NINO 1704 CITY OF PARANAQUE",
        "federalTaxId": "739-939-284-00000",
        "contactPerson": "J MONTERDE",
        "rawCategory": "Courier-NT",
        "sourceRow": 84,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALT001",
    "name": "ALTHEA SYSTEMS DEV., INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALT001-85",
        "bpCode": "ALT001",
        "federalTaxId": "009-310-143-00000",
        "sourceRow": 85,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALT004",
    "name": "ALT PLUS VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALT004-86",
        "bpCode": "ALT004",
        "address": "U2404 DISCOVERY SUITES ADB AVE. ORTIGAS CENTER SAN SANTONIO PASIG CITY, 1600",
        "federalTaxId": "620-471-641-00000",
        "contactPerson": "RANDIE BENEDICTO",
        "sourceRow": 86,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ALV001",
    "name": "ALVAREZ, GREG YAP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ALV001-87",
        "bpCode": "ALV001",
        "address": "B4 L2 EMARALD ST CARLAND COUNTRY HOMES GB1 SAN MATEO RIZAL",
        "federalTaxId": "192-431-517-00000",
        "contactPerson": "GREG YAP ALVAREZ",
        "sourceRow": 87,
        "documents": {}
      },
      {
        "id": "branch-CGA001-215",
        "bpCode": "CGA001",
        "address": "B4 L2 EMARALD ST CARLAND COUNTRY HOMES GB1 SAN MATEO RIZAL",
        "federalTaxId": "192-431-517-00000",
        "sourceRow": 215,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AMA001",
    "name": "A-MAX CCTV TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AMA001-88",
        "bpCode": "AMA001",
        "address": "MAXSALL BLDG SIKATUNA ST PARI-AN 6000 CEBU CITY  PHILIPPINES",
        "federalTaxId": "600-043-121-00003",
        "contactPerson": "EUNNIE MABANO",
        "mobilePhone": "09283470124",
        "sourceRow": 88,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AMA001-NT",
    "name": "AMALGATED CAPITAL, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AMA001-NT-89",
        "bpCode": "AMA001-NT",
        "address": "ACI IT & BUSINESS CENTER DONA CAROLINA BLDG JP LAUREL AVE COR INIGO ST DAVAO CITY",
        "federalTaxId": "405-635-918-00000",
        "sourceRow": 89,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AMA002",
    "name": "AMAXPH TECHNOLOGY INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AMA002-90",
        "bpCode": "AMA002",
        "address": "G/F FACC BUILDING 2736 TAFT AVE BARANGGAY 97 1300 PASAY CITI NCR FOURTH DISTRICT",
        "federalTaxId": "601-220-277-00000",
        "contactPerson": "EUNNIE MABANO",
        "mobilePhone": "09283470124",
        "sourceRow": 90,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AMA002-NT",
    "name": "AMADOR BARBECHO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AMA002-NT-91",
        "bpCode": "AMA002-NT",
        "federalTaxId": "207-023-176-00000",
        "sourceRow": 91,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AMA003",
    "name": "AMAZON.COM, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AMA003-92",
        "bpCode": "AMA003",
        "address": "SEATTLE",
        "federalTaxId": "000000000000000",
        "contactPerson": "CONTACT",
        "mobilePhone": "00000",
        "sourceRow": 92,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AME001",
    "name": "AMERICAN TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AME001-93",
        "bpCode": "AME001",
        "address": "#5 IDEAL ST. COR. MC COLLOUGH ADDITION HILLS MANDALUYONG CITY 1550",
        "federalTaxId": "000-329-993-00000",
        "sourceRow": 93,
        "documents": {}
      },
      {
        "id": "branch-AME002-NT-94",
        "bpCode": "AME002-NT",
        "address": "#5 IDEAL ST. COR. MCCOLLOUGH            ADDITION HILLS",
        "federalTaxId": "000-329-993-00000",
        "sourceRow": 94,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AML001-NT",
    "name": "AML HARDWARE & CONSTRUCTION SUPPLIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AML001-NT-95",
        "bpCode": "AML001-NT",
        "address": "488 BARANGKA DRIVE, BRGY. MALAMIG, MANDALUYONG CITY",
        "federalTaxId": "422-154-718-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 95,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANB001",
    "name": "ANB DATA NETWORKS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANB001-96",
        "bpCode": "ANB001",
        "federalTaxId": "613-443-095-00000",
        "contactPerson": "OWNER",
        "sourceRow": 96,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANC001-NT",
    "name": "ANCL CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANC001-NT-97",
        "bpCode": "ANC001-NT",
        "address": "470 F. LEGASPI ST. MAYBUNGA PASIG CITY",
        "federalTaxId": "697-078-159-00000",
        "contactPerson": "MARITES ESTABILLO",
        "sourceRow": 97,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AND001-NT",
    "name": "ANDREW AMON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AND001-NT-98",
        "bpCode": "AND001-NT",
        "federalTaxId": "305-936-632-00000",
        "sourceRow": 98,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANG001-NT",
    "name": "ANGEL ILAGAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANG001-NT-99",
        "bpCode": "ANG001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "241-647-732-00000",
        "sourceRow": 99,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANI001-NT",
    "name": "ANITA DELA PENA MERCHANDISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANI001-NT-100",
        "bpCode": "ANI001-NT",
        "address": "G/F ARCADE BLDG., EDSA COR DM GUEVARRA ST. BRGY., HIGHWAY HILLS MANDALUYONG CITY",
        "federalTaxId": "409-383-322-00000",
        "sourceRow": 100,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANN001-NT",
    "name": "ANNALYN BUENAFLOR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANN001-NT-101",
        "bpCode": "ANN001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "243-095-723-00000",
        "sourceRow": 101,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANN002-NT",
    "name": "JACQUELO M. ACLAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANN002-NT-102",
        "bpCode": "ANN002-NT",
        "address": "34 KALIRAYA ST. BRGY DONA JOSEFA, QUEZON CITY 1113",
        "federalTaxId": "723-720-579-00000",
        "contactPerson": "MARK DANIEL TAN",
        "sourceRow": 102,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ANS001-NT",
    "name": "ANSON EMPORIUM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ANS001-NT-103",
        "bpCode": "ANS001-NT",
        "address": "2304 DON CHINO ROCES AVE EXT MAGALLANES MAKATI CITY",
        "federalTaxId": "000-106-840-00000",
        "contactPerson": "STORE",
        "sourceRow": 103,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-APP001-NT",
    "name": "APPTECHNOLOGY EXPERTS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-APP001-NT-104",
        "bpCode": "APP001-NT",
        "address": "UNIT 1701 & 1708 IBP TOWER JADE DRIVE JULIA VARGAS AVE ORTIGAS CENTER SAN ANTONIO PASIG CITY",
        "federalTaxId": "008-041-776-00000",
        "sourceRow": 104,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-APP003-NT",
    "name": "APPLE, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-APP003-NT-105",
        "bpCode": "APP003-NT",
        "address": "ONLINE STORE",
        "federalTaxId": "000000000000000",
        "contactPerson": "APPLE, INC",
        "sourceRow": 105,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-APS001-NT",
    "name": "AL-CON PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-APS001-NT-106",
        "bpCode": "APS001-NT",
        "address": "B1 L19 MCKINLEY ST. LA MONTANA ESTATES STA CRUZ1870 CITY OF ANTIPOLO RIZAL PHILIPPINES",
        "federalTaxId": "331-274-646-00000",
        "contactPerson": "SARAH JANE ESPINA",
        "sourceRow": 106,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-APT001",
    "name": "APTSECURE TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-APT001-107",
        "bpCode": "APT001",
        "address": "UNIT 2202, 88 CORPORATE CENTER, SEDEÑO COR. VALERO STS. , SALCEDO VILLAGE, MAKATI CITY",
        "federalTaxId": "007-208-293-00000",
        "contactPerson": "JOHANNAH G. TUGNAO",
        "supplierRank": "Major",
        "sourceRow": 107,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-APU001",
    "name": "APUMA, MARCH MAANAP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-APU001-108",
        "bpCode": "APU001",
        "address": "70 NATIONAL ROAD PUTATAN 1772 CITY OF MUNTINLUPA NCR FOURTH DISTRICT, PHILIPPINES",
        "federalTaxId": "618-540-239-00000",
        "contactPerson": "LEI SAGUM",
        "supplierRank": "Major",
        "sourceRow": 108,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AQA001-NT",
    "name": "A.Q ANCHETA & PARTNERS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AQA001-NT-109",
        "bpCode": "AQA001-NT",
        "address": "EDSA COR RELIANCE ST",
        "federalTaxId": "221-777-640-00000",
        "sourceRow": 109,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AQU001-NT",
    "name": "AQUENDE ANIAG QUE  CASTILLO & DUMLAO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AQU001-NT-110",
        "bpCode": "AQU001-NT",
        "address": "SUITE 2302 23/F CORPORATE CENTER 139 VALERO STREET, SALCEDO VILLAGE 1200 MAKATI CITY",
        "federalTaxId": "010-567-085-00000",
        "contactPerson": "PAUL CASTILLO",
        "sourceRow": 110,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARA001-NT",
    "name": "ARANETA HOTELS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARA001-NT-111",
        "bpCode": "ARA001-NT",
        "address": "101 AGUINALDO AVE. COR. MC ARTHUR AVE.,",
        "federalTaxId": "006-875-885-00100",
        "sourceRow": 111,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARD001",
    "name": "ARDENT NETWORKS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARD001-112",
        "bpCode": "ARD001",
        "address": "3/F & 5/F ALVA BUSINESS CENTER #259C RAYMUNDO AVE MAYBUNGA 1607 CITY OF PASIG NCR, SECOND DISTRICT",
        "federalTaxId": "007-858-542-00000",
        "industry": "Distributor",
        "contactPerson": "Frances Mae Mariveles",
        "position": "Sales Admin Manager",
        "email": "frances.mariveles@ardentnetworks.com.ph",
        "supplierRank": "Major",
        "status": "Incomplete",
        "sourceRow": 112,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARI001",
    "name": "ARIEL SORIANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARI001-113",
        "bpCode": "ARI001",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 113,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARI002",
    "name": "ARIZONA INTEGRATED TECHNOLOGY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARI002-114",
        "bpCode": "ARI002",
        "address": "99 DMD BLDG F. MANALO IMMACULATE CONCEPCION CUBAO QUEZON CITY",
        "federalTaxId": "226-771-511-00000",
        "sourceRow": 114,
        "documents": {}
      },
      {
        "id": "branch-ARI002-NT-115",
        "bpCode": "ARI002-NT",
        "address": "IMMACULATE CONCEPCION",
        "federalTaxId": "226-771-511-00000",
        "contactPerson": "WILLIAM JR",
        "sourceRow": 115,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARK001-NT",
    "name": "ARK INFORMATION TECHNOLOGY SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARK001-NT-116",
        "bpCode": "ARK001-NT",
        "address": "7195 MARCELO AVE MARCELO GREEN VILLAGE PARANAQUE CITY",
        "federalTaxId": "151-554-749-00000",
        "sourceRow": 116,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARM001",
    "name": "ARMTEL CABLE INSTALLATION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARM001-117",
        "bpCode": "ARM001",
        "address": "BLK 18 LOT 1 MONDO BAMBINI JUBILATION BRGY ZAPOTE BINAN LAGUNA",
        "federalTaxId": "222-160-012-00000",
        "sourceRow": 117,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARM002",
    "name": "ARMANDO CANICO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARM002-118",
        "bpCode": "ARM002",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 118,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARS001",
    "name": "ARSENIO N. SORIANO JR.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARS001-119",
        "bpCode": "ARS001",
        "address": "SAN JUAN NEPOMUCENO, BETIS, GUAGUA, PAMPANGA",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 119,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ARV001-NT",
    "name": "ARVIN ESTANISLAO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ARV001-NT-120",
        "bpCode": "ARV001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "205-393-965-00000",
        "sourceRow": 120,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASA001-NT",
    "name": "ASALUS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASA001-NT-121",
        "bpCode": "ASA001-NT",
        "address": "7F FELIZA BLDG 108 VA RUFINO ST., LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "004-666-055-00000",
        "sourceRow": 121,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASI001",
    "name": "ASIA PACIFIC COMPUTER SALES & SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASI001-122",
        "bpCode": "ASI001",
        "address": "APC BUILDING., A.S. FORTUNA ST., BANILAD, MANDAUE CITY",
        "federalTaxId": "213-071-013-00000",
        "sourceRow": 122,
        "documents": {}
      },
      {
        "id": "branch-ASI001-NT-123",
        "bpCode": "ASI001-NT",
        "address": "APO BUILDING., A.S. FORTUNA ST., BANILAD, MANDAUE CITY",
        "federalTaxId": "213-071-013-00100",
        "contactPerson": "JACKY",
        "mobilePhone": "3452465",
        "sourceRow": 123,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASI002-NT",
    "name": "ASIAN PLATINUM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASI002-NT-124",
        "bpCode": "ASI002-NT",
        "address": "GEN LUNA ST ILOILO CITY 5000",
        "federalTaxId": "004-863-399-000",
        "contactPerson": "A",
        "sourceRow": 124,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASI011",
    "name": "ASIA PACIFIC COMPUTERS OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASI011-125",
        "bpCode": "ASI011",
        "address": "#869 AS FORTUNA ST. BANILAD 6014 CITY OF MANDAUE CEBU PHILIPPINES",
        "federalTaxId": "644-677-952-00000",
        "contactPerson": "SALES",
        "sourceRow": 125,
        "documents": {}
      },
      {
        "id": "branch-ASI011-NT-126",
        "bpCode": "ASI011-NT",
        "address": "#869 AS FORTUNA ST. BANILAD 6014 CITY OF MANDAUE CEBU PHILIPPINES",
        "federalTaxId": "644-677-952-00000",
        "contactPerson": "SALES",
        "sourceRow": 126,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASI012-NT",
    "name": "ASIAN CONSOLIDATION INTERNATIONAL SERVICES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASI012-NT-127",
        "bpCode": "ASI012-NT",
        "address": "B BENEDICTO ST NORTH RECLAMATION AREA TEJERO 600 CITY OF CEBU",
        "federalTaxId": "200-573-397-00002",
        "contactPerson": "ART JOSEPH VOCALES",
        "sourceRow": 127,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASP-001NT",
    "name": "ASPREC-MANALO OSH CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASP-001NT-128",
        "bpCode": "ASP-001NT",
        "address": "14 MAHINHIN ST UP VILLAGE QUEZON CITY",
        "federalTaxId": "009-015-757-000",
        "contactPerson": "GLYNES VELASCO",
        "sourceRow": 128,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AST001",
    "name": "ASTRIA CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AST001-129",
        "bpCode": "AST001",
        "address": "UNIT 909 EAST TOWER PSEC EXCHANGE ROAD ORTIGAS CENTER SAN ANTONIO PASIG CITY 1605",
        "federalTaxId": "010-464-891-000",
        "contactPerson": "Rosie Shorter",
        "mobilePhone": "09285151591",
        "sourceRow": 129,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ASV001",
    "name": "ASV COOLING SYSTEM SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ASV001-130",
        "bpCode": "ASV001",
        "address": "26D MICHAEL RUA ST. LIVING SUBD. BRGY DON BOSCO",
        "federalTaxId": "426-923-733-00000",
        "sourceRow": 130,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ATC001-NT",
    "name": "ATCO PARTS CENTER INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ATC001-NT-131",
        "bpCode": "ATC001-NT",
        "address": "2758-60 TAFT AVENUE EXTENSION, PASAY, TAFT AVE, PASAY, METRO MANILA",
        "federalTaxId": "216-577-851-00000",
        "sourceRow": 131,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ATH010-NT",
    "name": "ATHENA CLOTHING AND TRADING CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ATH010-NT-132",
        "bpCode": "ATH010-NT",
        "federalTaxId": "010-103-298-000",
        "contactPerson": "LINA ORTIZ",
        "mobilePhone": "09162232126",
        "sourceRow": 132,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ATL001",
    "name": "ATLAS PRECISION ENVIRONMENT CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ATL001-133",
        "bpCode": "ATL001",
        "address": "15/F UNIT 1503 139 CORPORATE CENTER     VALERO ST., SALCEDO VILLAGE",
        "federalTaxId": "004-656-080-00000",
        "sourceRow": 133,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ATL002",
    "name": "CEBU ATLANTIC HARDWARE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ATL002-134",
        "bpCode": "ATL002",
        "address": "B. ARANAS COR LAKANDULA ST. PAHINA SAN NICOLAS, CEBU CITY 6000",
        "federalTaxId": "000-256-642-00006",
        "contactPerson": "MR. RYAN",
        "sourceRow": 134,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ATL005",
    "name": "Atlantic Radio Communications Corporation",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ATL005-135",
        "bpCode": "ATL005",
        "address": "940 N.W. 51st Place #3 Ft. Lauderdale, FL 33309",
        "federalTaxId": "00000000000000000",
        "contactPerson": "ATLANTIC RADIO",
        "sourceRow": 135,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AUT001-NT",
    "name": "AUTOSYNERGY INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AUT001-NT-136",
        "bpCode": "AUT001-NT",
        "address": "NEAR GAISANO CAPITAL CORP OFC GEN MAXILOM AVE EXT CARRETA CEBU CITY 6000",
        "federalTaxId": "473-939-947-000",
        "contactPerson": "THERESE PACALDO",
        "sourceRow": 136,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AVE001",
    "name": "AVESCO MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AVE001-137",
        "bpCode": "AVE001",
        "address": "AURORA BLVD. COR. YALE ST., CUBAO, QUEZON CITY",
        "federalTaxId": "000-400-152-00000",
        "sourceRow": 137,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AWS001",
    "name": "AWS DISTRIBUTION PHILS. CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AWS001-138",
        "bpCode": "AWS001",
        "address": "357 DR. J. FERNANDEZ ST HW HILLS MANDALUYONG CITY, 1550",
        "federalTaxId": "005-010-684-00000",
        "sourceRow": 138,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AXE001",
    "name": "AXENTRA GLOBAL INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AXE001-139",
        "bpCode": "AXE001",
        "address": "U1702 17F HIGH STREET SOUTH CORPORATE PLAZA TOWER 2 11TH AVE COR 26TH ST FORT BONIFACIO TAGUIG CITY",
        "federalTaxId": "680-702-041-00000",
        "contactPerson": "LORENA TAVISORA",
        "sourceRow": 139,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AXP001-NT",
    "name": "AXA PHILIPPINES LIFE AND GENERAL INSURANCE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AXP001-NT-140",
        "bpCode": "AXP001-NT",
        "address": "34/F GT TOWER INTERNATIONAL BUILDING 6813 AYALA AVENUE CORNER H.V DELA COSTA BEL-AIR 1209 MAKATY CIT",
        "federalTaxId": "000-485-226-00000",
        "contactPerson": "SALES SPECIALIST",
        "sourceRow": 140,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-AXX001",
    "name": "AXXONSOFT ASIA PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-AXX001-141",
        "bpCode": "AXX001",
        "address": "76 PLAYFAIR ROAD #03-06LOBBY 3 LHK2 SINGAPORE",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "Mike Kilchukov",
        "sourceRow": 141,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAL001-NT",
    "name": "BALLER-SPORTSWEAR CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAL001-NT-142",
        "bpCode": "BAL001-NT",
        "address": "PLAYGROUND BADMNTON COURT CRM AVE ALAMANZA UNO 1740 CITY OF LASPINAS, NCR FOURTH DISTRICT PH",
        "federalTaxId": "676-723-801-00000",
        "contactPerson": "CHARLES REINIER PANINGASAN",
        "sourceRow": 142,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAL002-NT",
    "name": "BALAI DAMA PANSOL CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAL002-NT-143",
        "bpCode": "BAL002-NT",
        "address": "LOT 2 BLK 6 TOMAGAWK CORNER MONONA ST LAKEWOOD SUBD. TADLAK 4030 LOS BANOS LAUGUN",
        "federalTaxId": "626-580-277-00000",
        "contactPerson": "DEN SY",
        "sourceRow": 143,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAN001",
    "name": "BANBROS COMMERCIAL INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAN001-144",
        "bpCode": "BAN001",
        "address": "32 PILAR ST. COR. ARAULLO ST. ADDITION HILLS, CITY OF SAN JUAN, NCR, SECOND DISTRICT",
        "federalTaxId": "005-028-570-00000",
        "supplierRank": "Major",
        "sourceRow": 144,
        "documents": {}
      },
      {
        "id": "branch-BAN002-NT-145",
        "bpCode": "BAN002-NT",
        "address": "32 PILAR ST COR ARAULO ST ADDITION HILLS SAN JUAN CITY",
        "federalTaxId": "005-028-570-00000",
        "sourceRow": 145,
        "documents": {}
      },
      {
        "id": "branch-BAN004-146",
        "bpCode": "BAN004",
        "address": "G/F COPENHAGEN EAST BLDG. AC CORTES AVE., BRGY. CAMBARO",
        "federalTaxId": "005-028-570-001",
        "contactPerson": "DONNA BACULPO",
        "sourceRow": 146,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAR001",
    "name": "BARCODE SCANNING SOLUTIONS OF THE PHLS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAR001-147",
        "bpCode": "BAR001",
        "address": "427 MARTINEZ AVENUE PLAINVIEW",
        "federalTaxId": "008-614-696-00000",
        "sourceRow": 147,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAR002",
    "name": "BARRINGTON CARPETS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAR002-148",
        "bpCode": "BAR002",
        "address": "11F UNIT 1110 WEST TOWER PHILLIPNE STOCK EXCHANGE CENTRE EXCHANGE ROAD ORTIGAS CENTER",
        "federalTaxId": "000-400-943-00000",
        "sourceRow": 148,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAR003",
    "name": "BARCOTECH PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAR003-149",
        "bpCode": "BAR003",
        "address": "UNIT 1203 RICHVILLE CORPORATE TOWER, ALABANG-ZAPOTE ROAD, MADRIGAL BUSINESS PARK, AYALA ALABANG,",
        "federalTaxId": "009-985-659-00002",
        "contactPerson": "JESSIE ESCASINAS",
        "mobilePhone": "09088934770",
        "sourceRow": 149,
        "documents": {}
      },
      {
        "id": "branch-BAR004-NT-150",
        "bpCode": "BAR004-NT",
        "address": "UNIT 1203 RICHVILLE CORPORATE TOWER, ALABANG-ZAPOTE ROAD, MADRIGAL BUSINESS PARK, AYALA ALABANG,",
        "federalTaxId": "009-985-659-00002",
        "contactPerson": "JESSIE ESCASINAS",
        "mobilePhone": "09088934770",
        "sourceRow": 150,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAS001",
    "name": "BASSBEST AUTOMATION SURVEILLANCE & SECURITY PRODUCTS CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAS001-151",
        "bpCode": "BAS001",
        "address": "262 DEL MONTE AVENUE",
        "federalTaxId": "006-614-736-00000",
        "sourceRow": 151,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAT001-NT",
    "name": "BATPARTS SUPPLY CO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAT001-NT-152",
        "bpCode": "BAT001-NT",
        "address": "278 E RODRIGUEZ SR. AVE., QUEZON CITY",
        "federalTaxId": "000-392-614-00000",
        "sourceRow": 152,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAU001-NT",
    "name": "BAUTISTA, EINSTEIN TORRES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAU001-NT-153",
        "bpCode": "BAU001-NT",
        "address": "MAYMANGGA AMADEO CAVITE 4119",
        "federalTaxId": "481-355-709-000",
        "contactPerson": "EINSTEIN BAUTISTA",
        "mobilePhone": "09253117977",
        "email": "aandagardensuites@yahoo.com.ph",
        "sourceRow": 153,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAU002-NT",
    "name": "BAUTISTA, JESELY MAGALONG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAU002-NT-154",
        "bpCode": "BAU002-NT",
        "address": "3495 D BONIFACIO ST FORTUNE DRIVE CANUMAY EAST (CANUMAY) 1447 CITY OF VALENZUELA NCR THIRD DISTRICT",
        "federalTaxId": "290666-730-0000",
        "contactPerson": "DAVID ONG",
        "sourceRow": 154,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAU003",
    "name": "BAUTISTA, JUN ALCORANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAU003-155",
        "bpCode": "BAU003",
        "address": "BLK 40 LOT BANABA 4118 SILANG CAVITE PHILIPPINES",
        "federalTaxId": "300-602-886-00000",
        "contactPerson": "BAUTISTA, JUN ALCORANO",
        "sourceRow": 155,
        "documents": {}
      },
      {
        "id": "branch-BAU003-NT-156",
        "bpCode": "BAU003-NT",
        "address": "BLK 40 LOT BANABA 4118 SILANG CAVITE PHILIPPINES",
        "federalTaxId": "300-602-886-00000",
        "contactPerson": "BAUTISTA, JUN ALCORANO",
        "sourceRow": 156,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BAY001-NT",
    "name": "BAYAN TELECOMMUNICATIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BAY001-NT-157",
        "bpCode": "BAY001-NT",
        "address": "234 ROOSEVELT AVE., SFDM, QUEZON CITY",
        "federalTaxId": "000-774-471-00000",
        "sourceRow": 157,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BCU001-NT",
    "name": "B CUBE VENTURES INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BCU001-NT-158",
        "bpCode": "BCU001-NT",
        "address": "UNIT 206 THE MAIN PLACE BUILDING NO 1 PINAGLABANAN STREET CORAZON DE JESUS 1500 CITY OF SAN JUAN",
        "federalTaxId": "636-757-741-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 158,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BDO001-NT",
    "name": "BDO INSURANCE BROKERS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BDO001-NT-159",
        "bpCode": "BDO001-NT",
        "address": "5TH FLOOR BDO NORTH TOWER BDO CORPORATE CENTER 7899 MAKATI AVE, COR. H.V. DELA COSTA ST.,",
        "federalTaxId": "005-058-126-00000",
        "sourceRow": 159,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BED001-NT",
    "name": "BEDERICO, OFELIA TIQUIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BED001-NT-160",
        "bpCode": "BED001-NT",
        "address": "INDIGO BAY, BRGY BAGONG KALSADA, CALAMBA CITY LAGUNA 4027",
        "federalTaxId": "247-923-535-000",
        "contactPerson": "OFELIA BEDERICO",
        "mobilePhone": "09151563383",
        "sourceRow": 160,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BEE001-NT",
    "name": "BEE TIN GROCERY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BEE001-NT-161",
        "bpCode": "BEE001-NT",
        "address": "735 ONGPIN STREET BINONDO MANILA",
        "federalTaxId": "007-933-539-000",
        "contactPerson": "a",
        "sourceRow": 161,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BER001-NT",
    "name": "BERNARD CHONG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BER001-NT-162",
        "bpCode": "BER001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 162,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BER002-NT",
    "name": "BERNARDO MUTUC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BER002-NT-163",
        "bpCode": "BER002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 163,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BES001-NT",
    "name": "BEST PRACTICE CONSUMER, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BES001-NT-164",
        "bpCode": "BES001-NT",
        "address": "NO 1 VENUS COMP 2/F GMC BLDG QUEZON AVE BRGY SAN ISIDRO ANGONO RIZAL",
        "federalTaxId": "234-504-281-00000",
        "sourceRow": 164,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BET001-NT",
    "name": "BETHEL GENERAL INSURANCE AND SURETY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BET001-NT-165",
        "bpCode": "BET001-NT",
        "address": "UNIT 200 VALERO PLAZA 124 VALERO ST., SALCEDO VILLAGE, MAKATI CITY",
        "federalTaxId": "000-745-041-00000",
        "sourceRow": 165,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BET002",
    "name": "BETITO, EDLYN JOY RAPOSAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BET002-166",
        "bpCode": "BET002",
        "address": "774-B AURORA BLVD KAUNLARAN CUBAO, 111 QUEZON CITY NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "703-056-120-00000",
        "contactPerson": "BETITO, EDLYN JOY RAPOSAS",
        "mobilePhone": "09665010222",
        "sourceRow": 166,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BET002-NT",
    "name": "BETIC, ABNER PATAC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BET002-NT-167",
        "bpCode": "BET002-NT",
        "address": "FIRST CRUMB ST. ZONE 2 8002 CITY OF DIGOS DAVAO DEL SUR PHILIPPINES",
        "federalTaxId": "327-519-708-00000",
        "contactPerson": "BETIC, ABNER PATAC",
        "sourceRow": 167,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BEY001",
    "name": "BEYOND INNOVATIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BEY001-168",
        "bpCode": "BEY001",
        "address": "2F TOPY BLDG II TOPYS PLACE 3 ECONOMIA ST BAGUMBAYAN QUEZON CITY",
        "federalTaxId": "005-695-766-00000",
        "sourceRow": 168,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BIC001",
    "name": "BUILDING INDUSTRY CONSULTING SERVICE INTERNATIONAL",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BIC001-169",
        "bpCode": "BIC001",
        "address": "8610 Hidden River Parkway Tampa, FL 33637",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 169,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BIG001",
    "name": "BIGLEAP TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BIG001-170",
        "bpCode": "BIG001",
        "address": "UNIT 2504 JOLLIBEE PLAZA CONDO, EMERALD AVENUE, ORTIGAS CENTER, SAN ANTONIO",
        "federalTaxId": "008-066-201-00000",
        "sourceRow": 170,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BIN002-NT",
    "name": "BINARAO, JESSIE JAMES CRISOSTOMO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BIN002-NT-171",
        "bpCode": "BIN002-NT",
        "address": "1512 CM RECTO AVE COR TOMAS MAPUA ST. STA CRUZ MANILA",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "BINARAO, JESSIE JAMES CRISOSTOMO",
        "mobilePhone": "09157132085",
        "sourceRow": 171,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BIS001",
    "name": "BISIKLETA MANILA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BIS001-172",
        "bpCode": "BIS001",
        "address": "560 Quezon Boulevard Quiapo, Manila",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 172,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BKP001-NT",
    "name": "BKPRO AUDIO VISUAL AND LIGHTING TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BKP001-NT-173",
        "bpCode": "BKP001-NT",
        "address": "1 LEGEND ST. VILLAGE EAST EXECUTIVE HOMES CAINTA RIZAL",
        "federalTaxId": "217-253-402-00000",
        "sourceRow": 173,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BLA003-NT",
    "name": "THE BLACK OBSIDIAN CONSULTING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BLA003-NT-174",
        "bpCode": "BLA003-NT",
        "address": "UNIT 1B LOT C/D GOVERNOR'S DRIVE PASO SQUARE DE CARMONA MADUYA 4116 CARMONA CAVITE PHILIPPINES",
        "federalTaxId": "010-621-713-00000",
        "industry": "N/A2",
        "contactPerson": "WILSON SUNIO",
        "mobilePhone": "0000000",
        "sourceRow": 174,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BLI001-NT",
    "name": "BLIMS LIFESTYLE GROUP INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BLI001-NT-175",
        "bpCode": "BLI001-NT",
        "address": "14 WILLIAMS  ST. HIGHWAY HILLS 1550 MANDALUYONG CITY METRO MANILA",
        "federalTaxId": "008-651-763-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 175,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BLU001-NT",
    "name": "BLUE SILVER AND BLACK MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BLU001-NT-176",
        "bpCode": "BLU001-NT",
        "address": "4/F WEST TOWER PSEC EXCHANGE ROAD ORTIGAS CENTER SAN ANTONIO PASIG CITY 1605",
        "federalTaxId": "272-454-300-00000",
        "sourceRow": 176,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BNE001",
    "name": "BNEXT INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BNE001-177",
        "bpCode": "BNE001",
        "address": "UNIT 3&4, G/F NEXUS CENTER 1010 METROPOLITAN AVE. SAN ANTONIO, MAKATI CITY, 1203",
        "federalTaxId": "009-991-528-00000",
        "sourceRow": 177,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BOS001-NT",
    "name": "BOSS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BOS001-NT-178",
        "bpCode": "BOS001-NT",
        "address": "A. ARNAIZ AVE. COR. C ROCES. AVE. MAKATI CITY",
        "federalTaxId": "004-568-826-00100",
        "sourceRow": 178,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BPT001",
    "name": "BP TECH PARTS COMPUTER STORE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BPT001-179",
        "bpCode": "BPT001",
        "address": "259 MARIA CLARA STREET, BRGY88 D2",
        "federalTaxId": "212-247-616-00000",
        "contactPerson": "BP TECH",
        "mobilePhone": "09178218610",
        "sourceRow": 179,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRI001",
    "name": "BRIDGE DISTRIBUTION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRI001-180",
        "bpCode": "BRI001",
        "address": "PD BLDG. 265 E. RODRIGUEZ SR. AVE., 1112 QUEZON CITY",
        "federalTaxId": "240-290-966-00000",
        "industry": "Retail",
        "mobilePhone": "8-781-0581",
        "supplierRank": "Major",
        "status": "Outdated",
        "sourceRow": 180,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          }
        }
      },
      {
        "id": "branch-BRI001-NT-181",
        "bpCode": "BRI001-NT",
        "address": "PD BLDG. 265 E. RODRIGUEZ SR. AVE., 1112 QUEZON CITY",
        "federalTaxId": "240-290-966-00000",
        "status": "Outdated",
        "sourceRow": 181,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRI002",
    "name": "BRIDGINGMINDS NETWORK PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRI002-182",
        "bpCode": "BRI002",
        "address": "190 MIDDLE ROAD                         #12-10/11 FORTUNE CENTRE",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 182,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRI003",
    "name": "BRIGHTEN ASIA CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRI003-183",
        "bpCode": "BRI003",
        "address": "26 STO. TOMAS ST. DON MANUEL QUEZON CITY",
        "federalTaxId": "010-101-702-00000",
        "contactPerson": "PAULO DELA CRUZ",
        "sourceRow": 183,
        "documents": {}
      },
      {
        "id": "branch-BRI004-NT-184",
        "bpCode": "BRI004-NT",
        "address": "STO. TOMAS ST. DON MANUEL QC",
        "federalTaxId": "010-101-702-00000",
        "contactPerson": "AIZA",
        "sourceRow": 184,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRI005",
    "name": "BRIGHTBOX, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRI005-185",
        "bpCode": "BRI005",
        "address": "UNIT 3E FC BLDG. 2 THOMAS MORATO AVE. DILIMAN QUEZON CITY 1103",
        "federalTaxId": "243-828-628-000",
        "contactPerson": "EARL CHRISTOPHER SOTELO",
        "mobilePhone": "09177003275",
        "sourceRow": 185,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRI007",
    "name": "BRINGINO, JEFFERSON AZUELA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRI007-186",
        "bpCode": "BRI007",
        "address": "89 URBANO VELASCO AVE PINAGBUHATAN 1602 CITY OF PASIG NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "245-795-445-00000",
        "contactPerson": "BRINGINO, JEFFERSON AZUELA",
        "sourceRow": 186,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRO001-NT",
    "name": "BROFAR MOTOR WORKS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRO001-NT-187",
        "bpCode": "BRO001-NT",
        "address": "7491 BAGTIKAN ST., SAN ANTONIO VILLAGE MAKATI CITY",
        "federalTaxId": "000-110-355-00000",
        "sourceRow": 187,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BRY001-NT",
    "name": "BRYAN PANGILINAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BRY001-NT-188",
        "bpCode": "BRY001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 188,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BSI001-NT",
    "name": "BSI GROUP PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BSI001-NT-189",
        "bpCode": "BSI001-NT",
        "address": "OFFICE D 15TH FLOOR, JOLLIBEE TOWER, F ORTIGAS  JR RD ORTIGAS CENTER, SAN ANTONIO PASIG CITY",
        "federalTaxId": "002-857-755-00000",
        "contactPerson": "Ezekiel “Chi” Racinez",
        "sourceRow": 189,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BUIL001",
    "name": "BUILDING TECHNOLOGY SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BUIL001-190",
        "bpCode": "BUIL001",
        "address": "#47 ML BUILDING KAMIAS ROAD, PINYAHAN 1100,  QUEZON CITY",
        "federalTaxId": "658-732-223-00000",
        "contactPerson": "NERIZZA KARLA VICENSIO",
        "sourceRow": 190,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BUR001",
    "name": "BURP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BUR001-191",
        "bpCode": "BUR001",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 191,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-BUS001",
    "name": "BUSINESS INNOVATION SOLUTIONS AND SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-BUS001-192",
        "bpCode": "BUS001",
        "address": "L1 B4 ST. PETER COR VERAVILLE AVE, VERAVILLE TOWNHOMES REGENCY PHASEII MANUYOS, LAS PINAS CITY",
        "federalTaxId": "009-928-547-00000",
        "sourceRow": 192,
        "documents": {}
      },
      {
        "id": "branch-BUS001-NT-193",
        "bpCode": "BUS001-NT",
        "address": "L1 B4 ST. PETER COR VERAVILLE AVE, VERAVILLE TOWNHOMES REGENCY PHASEII MANUYOS, LAS PINAS CITY",
        "federalTaxId": "009-928-547-00000",
        "contactPerson": "MARICAR BARRIOS",
        "sourceRow": 193,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-C3I001",
    "name": "C3 INTEGRATED TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-C3I001-194",
        "bpCode": "C3I001",
        "address": "BESIDE PETRON BANAWA, R, DUTERTE ST.,",
        "federalTaxId": "759-986-630-00000",
        "sourceRow": 194,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAB001",
    "name": "CABANATUAN ELECTRIC CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAB001-195",
        "bpCode": "CAB001",
        "address": "MAHARLIKA HIGHWAY BITAS 3100 CABANATUAN CITY NUEVA ECIJA",
        "federalTaxId": "000-542-642-000",
        "sourceRow": 195,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAB002",
    "name": "CABEBE, SHYLA CASILLAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAB002-196",
        "bpCode": "CAB002",
        "address": "9 MAGSAYSAY ST. POBLACION 2503 ARINGAY LA UNION PHILIPPINES",
        "federalTaxId": "190-268-691-00000",
        "contactPerson": "CABEBE, SHYLA CASILLAN",
        "mobilePhone": "09178375250",
        "sourceRow": 196,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAG001",
    "name": "IGLESIA, ABDON CORDIAL",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAG001-197",
        "bpCode": "CAG001",
        "address": "224 SATURN ST. DREAMLAND SUBD NAMAYAN 1550 MANDALUYONG CITY",
        "federalTaxId": "138-197-210-00000",
        "sourceRow": 197,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAM001-NT",
    "name": "GAYCEL MAYOMAY  CAMACHO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAM001-NT-198",
        "bpCode": "CAM001-NT",
        "address": "BLK 2 LOT 8 ACACIA ST. SAN JOSE",
        "federalTaxId": "444-628-460-00000",
        "sourceRow": 198,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAN001",
    "name": "CANON MARKETING (PHILIPPINES), INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAN001-199",
        "bpCode": "CAN001",
        "address": "7F COMMERCE AND INDUSTRY PLAZA, 1030 CAMPUS AVE COR PARK AVE, MCKINLEY HILL, FORT BONIFACIO, TAGUIG",
        "federalTaxId": "000-159-448-00000",
        "sourceRow": 199,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAP001",
    "name": "CAPTUREBITES BVBA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAP001-200",
        "bpCode": "CAP001",
        "address": "WILGENLAAN 8 2160 WOMMELGEM BELGIUM",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 200,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAR001-NT",
    "name": "CARLO CAGUIOA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAR001-NT-201",
        "bpCode": "CAR001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 201,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAR002-NT",
    "name": "CARDINES, MARLON TORRANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAR002-NT-202",
        "bpCode": "CAR002-NT",
        "address": "BLK 4 LOT 41 LANZONES ST STO DOMINGO VILLAGE SAN JOSE MATULID MEXICO PAMPANGA",
        "federalTaxId": "267-602-840-000",
        "contactPerson": "MARLON CARDINES",
        "sourceRow": 202,
        "documents": {}
      },
      {
        "id": "branch-CAR016-NT-204",
        "bpCode": "CAR016-NT",
        "address": "BLK 4 LOT 41 LANZONES ST. STO DOMINGGO VILLAGE , SAN JOSE MATULID MEXICO PAMPANGA",
        "federalTaxId": "267-602-840-000",
        "contactPerson": "JC CASTRO",
        "sourceRow": 204,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAR016",
    "name": "CARA ELECTRICAL AND NETWORK SOLUTIONS INC",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-CAR016-203",
        "bpCode": "CAR016",
        "address": "J CASIM BLDG 404 CURIE STREET PALANAN 1235 MAKATI CITY NCR",
        "federalTaxId": "010-821-958-00000",
        "contactPerson": "James Carolino",
        "mobilePhone": "09171106271",
        "rawCategory": "Subcontructor",
        "sourceRow": 203,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAR017-NT",
    "name": "CARTLY CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAR017-NT-205",
        "bpCode": "CAR017-NT",
        "address": "BLK 2A LOT 5  MANHATTAN RESIDENCES 2ND DISTRICT  HABAY BACOOR CAVITE 4102",
        "federalTaxId": "774-438-006-000",
        "contactPerson": "MANEL ANDREA CEMENTINA",
        "mobilePhone": "09177039657",
        "sourceRow": 205,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CAS001-NT",
    "name": "CASTILLO MAMARIL ARITAO LAW",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CAS001-NT-206",
        "bpCode": "CAS001-NT",
        "address": "32ND FLOOR RUFINO PACIFIC TOWER 6784 AYALA AVENUE COR  VA RUFINO ST. MAKATI CITY",
        "federalTaxId": "200-833-967-00000",
        "contactPerson": "LIRRA VELASQUEZ",
        "mobilePhone": "09452742223",
        "sourceRow": 206,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CEB001-NT",
    "name": "CEBU OFFICE FURNITURE SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CEB001-NT-207",
        "bpCode": "CEB001-NT",
        "address": "37A SABELLANO ST., YATI, QULOT, CEBU CITY",
        "federalTaxId": "487-904-689-00000",
        "sourceRow": 207,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CEB002-NT",
    "name": "CEBU INSULAR HOTEL CO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CEB002-NT-208",
        "bpCode": "CEB002-NT",
        "address": "CARDINAL ROSALES AVE CEBU BUSINESS PARK BARRIO LUZ CEBU CITY 6000",
        "federalTaxId": "004-669-032-00000",
        "sourceRow": 208,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CEB012-NT",
    "name": "CEBU BELMONT INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CEB012-NT-209",
        "bpCode": "CEB012-NT",
        "address": "COR P BURGOS &LEGASPI ST. SAN ROQUE CIUDAD CEBU CITY",
        "federalTaxId": "000-067-311-00001",
        "contactPerson": "SALES PERSON",
        "sourceRow": 209,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CEC001-NT",
    "name": "C-E CONSTRUCTION CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CEC001-NT-210",
        "bpCode": "CEC001-NT",
        "address": "217 ROMUALDEZ KALENTONG, DAANG BAKAL, MANDALUYONG CITY",
        "federalTaxId": "000-051-470-00000",
        "sourceRow": 210,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CEL001",
    "name": "CELLNOTE & ACCESSORIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CEL001-211",
        "bpCode": "CEL001",
        "address": "3F EMALL N BACALSO",
        "federalTaxId": "274-424-536-00200",
        "sourceRow": 211,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CEL001-NT",
    "name": "CELTIC COOL AUTOMOTIVE AIRE ENTERPRISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CEL001-NT-212",
        "bpCode": "CEL001-NT",
        "address": "2643-F TAFT AVENUE PASAY CITY",
        "federalTaxId": "183-075-820-000",
        "contactPerson": "ARCE",
        "sourceRow": 212,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CER001",
    "name": "CERTIVERSE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CER001-213",
        "bpCode": "CER001",
        "address": "4803 NORTH MILWAUKEE AVENUE SUITE B #103 CHICAGO ILLINOIS 60630 UNITED STATES",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "CUSTOMER SUPPORT",
        "sourceRow": 213,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CES001-NT",
    "name": "CESAR FANTANOSA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CES001-NT-214",
        "bpCode": "CES001-NT",
        "federalTaxId": "214-314-418-00000",
        "sourceRow": 214,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHA001",
    "name": "CHARTER PING AN INSURANCE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHA001-216",
        "bpCode": "CHA001",
        "address": "29th floor GT Tower International 6813 Ayala Ave cor HV Dela Costa St.",
        "federalTaxId": "000-487-306-00000",
        "sourceRow": 216,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHA001-NT",
    "name": "CHARO MAY PERNIA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHA001-NT-217",
        "bpCode": "CHA001-NT",
        "address": "29th floor GT Tower International 6813 Ayala Ave cor HV Dela Costa St.",
        "federalTaxId": "301-580-918-00000",
        "sourceRow": 217,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHA002",
    "name": "CHALLENGE SYSTEMS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHA002-218",
        "bpCode": "CHA002",
        "address": "UNIT 4D VERNIDA I CONDOMINIUM BLDG., 120 AMORSOLO ST., LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "224-103-039-00000",
        "sourceRow": 218,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHA002-NT",
    "name": "CHAMBER OF THRIFT BANKS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHA002-NT-219",
        "bpCode": "CHA002-NT",
        "address": "BUENDIA BRANCH",
        "federalTaxId": "005-039-269-00000",
        "contactPerson": "RHIA MISSION",
        "sourceRow": 219,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHE001-NT",
    "name": "CHEMSON LEE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHE001-NT-220",
        "bpCode": "CHE001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "132-436-532-00000",
        "sourceRow": 220,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHE002",
    "name": "CHECKMARX",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHE002-221",
        "bpCode": "CHE002",
        "address": "AMOT ATRIUM TOWER 11F 2 JABOTINSKY ST RAMAT GAN",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 221,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHE002-NT",
    "name": "CHELLO INTERNATIONAL VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHE002-NT-222",
        "bpCode": "CHE002-NT",
        "address": "302 SAINT PAUL STREET REMERVILLE SUBD BAESA 1106 QUEZON CITY NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "010-784-656-00000",
        "contactPerson": "Michelle Davidon",
        "sourceRow": 222,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHI001-NT",
    "name": "CHIRADEE MORALES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHI001-NT-223",
        "bpCode": "CHI001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "278-080-873-00000",
        "sourceRow": 223,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHM001-NT",
    "name": "CHI HOTELS AND RESIDENCES,INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHM001-NT-224",
        "bpCode": "CHM001-NT",
        "address": "5400 ESAT ASIA DRIVE COR COMMERCE AVE FILINVEST CORP CITY ALABANG MUNTINLUPA",
        "federalTaxId": "006-872-294-000",
        "contactPerson": "COLLEEN BELTRAN",
        "sourceRow": 224,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHO001",
    "name": "CHOOSY PANDA VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHO001-225",
        "bpCode": "CHO001",
        "address": "AJN DIVERSION ROAD SAN RAFAEL MANDURRIAO 5000 ILOILO CITY PHILIPPINES",
        "federalTaxId": "615-993-151-00000",
        "contactPerson": "ROWENA MAULLEON",
        "mobilePhone": "09176280771",
        "sourceRow": 225,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHR001-NT",
    "name": "CHRIS SPORTS GLORIETTA INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHR001-NT-226",
        "bpCode": "CHR001-NT",
        "address": "CHRIS SPORTS 3F SM MEGAMALL BUILDING B, EDSA COR JULIA VARGAS AVENUE MANDALUYONG CITY",
        "federalTaxId": "000-000-000-000",
        "contactPerson": "SUSAN TIU",
        "sourceRow": 226,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHR004",
    "name": "CHRONICLES WORKS AND SERVICES INCOPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHR004-227",
        "bpCode": "CHR004",
        "address": "2424 TEJERON ST., BRGY. 874 ZONE 96 DIST 6 STA. ANA, MANILA CITY 1009",
        "federalTaxId": "008-880-823-000",
        "contactPerson": "SAMSUNG",
        "sourceRow": 227,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CHU001-NT",
    "name": "CHUA, BON PEN SEE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CHU001-NT-228",
        "bpCode": "CHU001-NT",
        "address": "1363-65 Pedro Gil St. Paco, Manila 1007",
        "federalTaxId": "103-936-955-000",
        "contactPerson": "RISA SALES",
        "sourceRow": 228,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIB001-NT",
    "name": "CIBI INFORMATION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIB001-NT-229",
        "bpCode": "CIB001-NT",
        "address": "2F SALUSTIANA DTY TOWER 104 PASEO DE ROXAS SAN LORENZO 1223 CITYOF MAKATI NCR",
        "federalTaxId": "005-059-207-00000",
        "contactPerson": "HERALD CANLAS",
        "email": "NA",
        "sourceRow": 229,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIM001",
    "name": "CIM TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIM001-230",
        "bpCode": "CIM001",
        "address": "RM 706 SEDCCO I BLDG., 120 RADA COR. LEGASPI ST, LEGASPI VILLAGE, SAN LORENZO, MAKATI CITY, 1229",
        "federalTaxId": "000-402-170-000",
        "contactPerson": "Axcel Jene A. Gonzales",
        "sourceRow": 230,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIR001",
    "name": "CIRCLE COMPUBIZ",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIR001-231",
        "bpCode": "CIR001",
        "address": "BRGY ORTIZ PLAZA LIBERTAD ILOILO CITY",
        "federalTaxId": "284-512-976-00000",
        "sourceRow": 231,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIR002",
    "name": "CIREBRON TRADING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIR002-232",
        "bpCode": "CIR002",
        "address": "9/F SAGE HOUSE 110 VA RUFINO ST., LEGASPI VILLAGE, MAKATI CITY",
        "federalTaxId": "007-099-443-00000",
        "contactPerson": "MS. LANI",
        "sourceRow": 232,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIT001",
    "name": "CITRIX",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIT001-233",
        "bpCode": "CIT001",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 233,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIT001-NT",
    "name": "CT CITIMOTORS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIT001-NT-234",
        "bpCode": "CIT001-NT",
        "address": "PASONG TAMO CORNER",
        "federalTaxId": "000-113-791-00000",
        "sourceRow": 234,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CIT002",
    "name": "CITYLIGHT TELECOM CENTRE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CIT002-235",
        "bpCode": "CIT002",
        "address": "UNIT 102, JAFER PLACE BLDG., #19 EISENHOWER ST. NORTH GREENHILLS SAN JUAN CITY",
        "federalTaxId": "107-437-953-00000",
        "contactPerson": "ADRIAN L. QUIJADA",
        "sourceRow": 235,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CJF001",
    "name": "CJF VISMIN 88 CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CJF001-236",
        "bpCode": "CJF001",
        "address": "DR#3 MAYFLOWER APT. MABINI ST.,",
        "federalTaxId": "009-667-485-00500",
        "sourceRow": 236,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CJR001",
    "name": "CJRS CCTV INSTALLATION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CJR001-237",
        "bpCode": "CJR001",
        "address": "PRK 9 SOUTHERN DAVAO PANABO CITY",
        "federalTaxId": "421-249-196-00000",
        "sourceRow": 237,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CLA001",
    "name": "CLARI-TRADE MULTI DISTRIBUTION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CLA001-238",
        "bpCode": "CLA001",
        "address": "384-B E. RODRIGUEZ SR. AVENUE           CUBAO",
        "federalTaxId": "007-356-982-00000",
        "sourceRow": 238,
        "documents": {}
      },
      {
        "id": "branch-CLA002-NT-239",
        "bpCode": "CLA002-NT",
        "address": "384-B E. RODRIGUEZ SR. AVENUE CUBAO",
        "federalTaxId": "007-356-982-00000",
        "sourceRow": 239,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CLE001",
    "name": "CLEVERBRIDGE GMBH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CLE001-240",
        "bpCode": "CLE001",
        "address": "GEREONSTR. 43-65 50670, COLOGNE, GERMANY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 240,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CLO001",
    "name": "CLOUDFLARE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CLO001-241",
        "bpCode": "CLO001",
        "address": "101 TOWNSEND ST. SAN FRANCISCO CA 94107",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "FLOR NUAS",
        "email": "enterprise@cloudflare.com",
        "sourceRow": 241,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CLO002-NT",
    "name": "CLOVERXPRESS FREIGHT INC.",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-CLO002-NT-242",
        "bpCode": "CLO002-NT",
        "address": "BLK 11 LOT 51 HEART FOUNDATION SANJA MAYOR  4108 TANZA CAVITE PHILIPPINES",
        "federalTaxId": "679-402-544-00000",
        "contactPerson": "HARVEY PONCE",
        "rawCategory": "Courier-NT",
        "sourceRow": 242,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CMS001-NT",
    "name": "CMSA AIRCON & REFRIGERATION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CMS001-NT-243",
        "bpCode": "CMS001-NT",
        "address": "BLK 1 LOT 14 FEDERAL ST. VIOLAGO HOMES BAGONG SILANGAN QUEZON CITY 1119",
        "federalTaxId": "249-047-535-00000",
        "sourceRow": 243,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CNW01",
    "name": "CANWEST NETWORK SOLUTIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CNW01-244",
        "bpCode": "CNW01",
        "address": "LEVEL 26A 26/F RUFINO PACIFIC TOWER 6784 AYALA AVE COR VA RUFINO ST SAN LORENZO  MAKATI CITY",
        "federalTaxId": "010-374-321-00000",
        "contactPerson": "SHERWEN COVEN",
        "sourceRow": 244,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COG001",
    "name": "COGNETICS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COG001-245",
        "bpCode": "COG001",
        "address": "232 JUAN LUNA ST",
        "federalTaxId": "007-088-504-00000",
        "sourceRow": 245,
        "documents": {}
      },
      {
        "id": "branch-COG001-NT-246",
        "bpCode": "COG001-NT",
        "address": "RM. 435 4TH FLR. PADILLA DE  LOS REYES BLDG. 232 JUAN LUNA ST. BRGY 289 ZONE 27 BINONDO MANILA",
        "federalTaxId": "007-088-504-00000",
        "contactPerson": "CONTACT",
        "mobilePhone": "0000",
        "sourceRow": 246,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COH001",
    "name": "COHESITY, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COH001-247",
        "bpCode": "COH001",
        "address": "SANTA CLARA, CALIFORNIA, UNITED STATES",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "MOHIT ARON",
        "sourceRow": 247,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COL001",
    "name": "COLD FUSION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COL001-248",
        "bpCode": "COL001",
        "address": "232 JUAN LUNA ST",
        "federalTaxId": "601-283-837-00000",
        "contactPerson": "ARIES CARRIEDO",
        "mobilePhone": "09177240223",
        "sourceRow": 248,
        "documents": {}
      },
      {
        "id": "branch-COL002-NT-251",
        "bpCode": "COL002-NT",
        "address": "232 JUAN LUNA ST",
        "federalTaxId": "601-283-837-00000",
        "contactPerson": "ARIES CARRIEDO",
        "mobilePhone": "09177240223",
        "sourceRow": 251,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COL001-NT",
    "name": "COLENT MARKETING PHILS. INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COL001-NT-249",
        "bpCode": "COL001-NT",
        "address": "46 STA ROSA ST., MANRESA QUEZON CITY",
        "federalTaxId": "006-358-064-00000",
        "sourceRow": 249,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COL002",
    "name": "COLUMBIA TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COL002-250",
        "bpCode": "COL002",
        "address": "1136-1146 JULIO NAKPIL STREET MALATE MANILA 1004",
        "federalTaxId": "002-839-013-00000",
        "contactPerson": "JOAN MARIBAO",
        "sourceRow": 250,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM001",
    "name": "COMPUTRADE TECHNOLOGY PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM001-252",
        "bpCode": "COM001",
        "address": "8TH FLOOR  ARMSTRONG  CORPORATE CENTER 134 H.V DELA COSTA ST SALCEDO VILLAGE BEL-AIR 1227, MAKATI CI",
        "federalTaxId": "008-630-962-00000",
        "sourceRow": 252,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM002",
    "name": "COMCLARK NETWORK AND TECHNOLOGY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM002-253",
        "bpCode": "COM002",
        "address": "MANUEL A ROXAS HI-WAY CLARKFIELD PAMPANGA",
        "federalTaxId": "005-311-735-00000",
        "sourceRow": 253,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM003",
    "name": "COMLAN, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM003-254",
        "bpCode": "COM003",
        "address": "R503 ENTERPRISE BLDG 524 Q. PAREDES ST. BRGY 289 ZONE 27 BINONDO, MANILA CITY",
        "federalTaxId": "002-115-740-00000",
        "sourceRow": 254,
        "documents": {}
      },
      {
        "id": "branch-COM007-NT-258",
        "bpCode": "COM007-NT",
        "address": "R503 ENTERPRISE BLDG 524 QUINTIN PAREDES ST. BINONDO, MANILA",
        "federalTaxId": "002-115-740-00000",
        "sourceRow": 258,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM004-NT",
    "name": "COMMONWEALTH INSURANCE COMPANY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM004-NT-255",
        "bpCode": "COM004-NT",
        "address": "DONATO M. PISON AVENUE, BRGY. SAN RAFAEL,",
        "federalTaxId": "000-445-883-01700",
        "sourceRow": 255,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM005",
    "name": "COMPUTING TECHNOLOGY INDUSTRY ASSOCIATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM005-256",
        "bpCode": "COM005",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 256,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM006",
    "name": "COMMERCE ASIA, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM006-257",
        "bpCode": "COM006",
        "address": "2/F VASQUEZ MADRIGAL PLAZA",
        "federalTaxId": "002-286-284-00100",
        "sourceRow": 257,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COM013",
    "name": "COMPUTER GRAPHICS INTEGRATED MARKETING CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COM013-259",
        "bpCode": "COM013",
        "address": "25 GILMORE AVE NEW MANILA BRGY VALENCIA QUEZON CITY 1112",
        "federalTaxId": "009-860-827-000",
        "contactPerson": "Alvin Guerrero",
        "sourceRow": 259,
        "documents": {}
      },
      {
        "id": "branch-COM015-260",
        "bpCode": "COM015",
        "address": "25 GILMORE AVE NEW MANILA BRGY VALENCIA",
        "federalTaxId": "009-860-827-000",
        "contactPerson": "RITCHIE E LAO",
        "mobilePhone": "09175553063",
        "sourceRow": 260,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON001-NT",
    "name": "CONCEPTRADE INDUSTRIES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON001-NT-261",
        "bpCode": "CON001-NT",
        "address": "#16 UNITED GLORIETTA SUBD C RAYMUNDO AVE CANIOGAN PASIG CITY",
        "federalTaxId": "004-510-184-00000",
        "sourceRow": 261,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON002-NT",
    "name": "CONDESA STATIONERY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON002-NT-262",
        "bpCode": "CON002-NT",
        "address": "611CONDESA ST., BRGY 288 ZONE 27 BINONDO MANILA",
        "federalTaxId": "002-824-418-00000",
        "sourceRow": 262,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON003",
    "name": "CONTINUUM TECHNOLOGY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON003-263",
        "bpCode": "CON003",
        "address": "82D E. RODRIGUEZ SR. AVE  DONA AURORA",
        "federalTaxId": "005-375-216-00000",
        "sourceRow": 263,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON004-NT",
    "name": "CONVERGE INFORMATION AND COMMUNICATIONS TECHNOLOGY SOLUTIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON004-NT-264",
        "bpCode": "CON004-NT",
        "address": "99 RELIANCE CENTER, E. RODRIGUEZ JR AVE., UGONG, PASIG CITY",
        "federalTaxId": "006-895-049-00100",
        "sourceRow": 264,
        "documents": {}
      },
      {
        "id": "branch-CON017-272",
        "bpCode": "CON017",
        "address": "NEW STREET BUILDING MAC ARTHUR HIGHWAY BALIBAGO 2009 ANGELES CITY PAMPANGA PHILIPPINES",
        "federalTaxId": "006-895-049-00000",
        "contactPerson": "LALA VENTURINA",
        "mobilePhone": "09178289081",
        "sourceRow": 272,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON005",
    "name": "CHIAMBROS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON005-265",
        "bpCode": "CON005",
        "address": "EX 327-328 SM CITY ILOILO DIVERSION ROAD, MANDURRIAO ILOILO CITY",
        "federalTaxId": "005-981-177-00100",
        "sourceRow": 265,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON006",
    "name": "CONCEPT STORE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON006-266",
        "bpCode": "CON006",
        "address": "3/F PRIMER STAR CENTER 2282 LEON GUINTO ST",
        "federalTaxId": "201-562-133-00000",
        "sourceRow": 266,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON007-NT",
    "name": "CONRAD TJADEO V. DOMINGO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON007-NT-267",
        "bpCode": "CON007-NT",
        "federalTaxId": "202-136-210-00000",
        "sourceRow": 267,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON008-NT",
    "name": "CONLY-CLEM MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON008-NT-268",
        "bpCode": "CON008-NT",
        "federalTaxId": "225-319-452-00000",
        "sourceRow": 268,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON009-NT",
    "name": "CONSUMER ASIA PUBLISHING HOUSE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON009-NT-269",
        "bpCode": "CON009-NT",
        "address": "RM. 301, 004 EULOGIO ST. DON FABIAN BRGY. COMMONWEALTH, QUEZON CITY",
        "federalTaxId": "235-966-513-00000",
        "sourceRow": 269,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON010",
    "name": "CONCEPCION-CARRIER AIR CONDITIONING COMPANY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON010-270",
        "bpCode": "CON010",
        "address": "LISP 1 ENERGY ST. CORNER MAIN AVE BO. DIEZMO, CABUYAO CITY, LAGUNA 4025",
        "federalTaxId": "200-512-491-00012",
        "sourceRow": 270,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CON011",
    "name": "CONSIGAS LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CON011-271",
        "bpCode": "CON011",
        "address": "6-9 TRINITY STREET DUBLIN DO2 EY47 IRELAND",
        "federalTaxId": "IE297730TH",
        "sourceRow": 271,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COP001",
    "name": "COPIERONLINE PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COP001-273",
        "bpCode": "COP001",
        "address": "G/F UNIT 132 RAINTREE MALL GEN. MAXILOM AVE. SANTA CRUZ",
        "federalTaxId": "007-260-956-00001",
        "contactPerson": "JOEL VILLARIN",
        "sourceRow": 273,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COR001",
    "name": "CORNELIO RESMA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COR001-274",
        "bpCode": "COR001",
        "address": "818 AMARILLO MAUWAY MANDALUYONG CITY",
        "federalTaxId": "202-296-474-00000",
        "sourceRow": 274,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COR001-NT",
    "name": "CORALES, ROWENA ESTANDIAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COR001-NT-275",
        "bpCode": "COR001-NT",
        "address": "665 B RONQUILLO STREET QUIAPO MANILA",
        "federalTaxId": "253-984-764-000",
        "contactPerson": "john ray",
        "sourceRow": 275,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-COS001",
    "name": "COSMOTECH PHILS., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-COS001-276",
        "bpCode": "COS001",
        "address": "7761 SAINT PAUL ST SAN ANTONIO VILLAGE",
        "federalTaxId": "006-506-065-00000",
        "sourceRow": 276,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRA001",
    "name": "CRAYON SOFTWARE EXPERTS PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRA001-277",
        "bpCode": "CRA001",
        "address": "11F NET ONE CENTER BLDG.                26TH CORNER 3RD STREETS, BGC",
        "federalTaxId": "008-992-378-00000",
        "sourceRow": 277,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRE001",
    "name": "CREATIVE NATION BUILDERS ENTERPRISE CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRE001-278",
        "bpCode": "CRE001",
        "address": "U-C19 CENTRO 1 CENTROPOLIS COMMUNITIES VILLONCO  ST COR VILLASAM ST SUCAT",
        "federalTaxId": "007-307-438-00000",
        "contactPerson": "MARK PERALTA",
        "mobilePhone": "09175388983",
        "sourceRow": 278,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRE001-NT",
    "name": "CREST FORWARDERINC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRE001-NT-279",
        "bpCode": "CRE001-NT",
        "address": "2556 UNIT D MARIAN BLDG., G. DEL PILAR COR. P. OCAMPO SR. STS., BRGY 759 ZONE 82 DIST V MALATE",
        "federalTaxId": "240-749-332-00100",
        "sourceRow": 279,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRI001-NT",
    "name": "CRIF PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRI001-NT-280",
        "bpCode": "CRI001-NT",
        "address": "7/F GREPALIFE BLDG., 221 SEN GIL PUYAT AVE.,",
        "federalTaxId": "236-871-410-00000",
        "sourceRow": 280,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRU001",
    "name": "CRUZ, JOHN REGGIE MESINA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRU001-281",
        "bpCode": "CRU001",
        "address": "MRA COMMERCIAL BUILDING PLAZANG LUMA 2012 ARAYAT PAMPANGA PHILIPPINES",
        "federalTaxId": "391-514-385-00000",
        "contactPerson": "John Reggie Cruz",
        "sourceRow": 281,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRU001-NT",
    "name": "CRUZ, ANIKKA LOUISE LOPEZ",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRU001-NT-282",
        "bpCode": "CRU001-NT",
        "address": "TALA ORANI BATAAN 2112",
        "federalTaxId": "493-980-344-000",
        "contactPerson": "MYRA",
        "sourceRow": 282,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CRZ001-NT",
    "name": "CRZTY MCELN TRANSPORT SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CRZ001-NT-283",
        "bpCode": "CRZ001-NT",
        "address": "BLOCK 33 LOT 34 PHASE 1B SPARROW LANE CORNER STORK CIRCLE BRGY MALILIT STA ROSA CITY LAGUNA",
        "federalTaxId": "010-486-493-000",
        "contactPerson": "roselle jaminto",
        "sourceRow": 283,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CTC001",
    "name": "CTC SOLUTIONS TECHNOLOGY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CTC001-284",
        "bpCode": "CTC001",
        "address": "UNIT 82-C 3/F E RODRIGUEZ SR. AVE DONA AURORA 1101 QUEZON CITY NCR SECOND DISTRICT",
        "federalTaxId": "010-393-332-00000",
        "contactPerson": "Queenie Reyes",
        "mobilePhone": "09270810211",
        "sourceRow": 284,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CTD001",
    "name": "CTDISTRI INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CTD001-285",
        "bpCode": "CTD001",
        "address": "3/F GILMORE IT CENTER, GILMORE ST. VALENCIA 1112  QUEZON CITY, NCR, SECOND DISTRICT, PHILIPPINES",
        "federalTaxId": "648-836-320-00000",
        "contactPerson": "JOJIE BACUSA",
        "sourceRow": 285,
        "documents": {}
      },
      {
        "id": "branch-CTD001-NT-286",
        "bpCode": "CTD001-NT",
        "address": "3/F GILMORE IT CENTER, GILMORE ST. VALENCIA 1112  QUEZON CITY, NCR, SECOND DISTRICT, PHILIPPINES",
        "federalTaxId": "648-836-320-00000",
        "contactPerson": "JOJIE BACUSA",
        "sourceRow": 286,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CTR002-NT",
    "name": "CENTER FOR GLOBAL BEST PRACTICES FOUNDATION, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CTR002-NT-287",
        "bpCode": "CTR002-NT",
        "address": "KING'S BLDG. 1 PENARANDA ST. BRGY. 31, BAYBAY LEGAZOI CITY",
        "federalTaxId": "005-769-988-000",
        "contactPerson": "Ms. Aiza",
        "sourceRow": 287,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CUA001",
    "name": "CUA, ALFREDO JR CHUA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CUA001-288",
        "bpCode": "CUA001",
        "address": "REAL CORNER P GOMEZ STS BARANGAY 27 6500 TACLOBAN CITY (CAPITAL) LEYTE",
        "federalTaxId": "108-937-127-00000",
        "contactPerson": "Vilma Gamba",
        "sourceRow": 288,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CUR001",
    "name": "CURVATURE SOLUTIONS PTE. LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CUR001-289",
        "bpCode": "CUR001",
        "address": "20 Changi Business Park Central 2, Rigel Innovation Center #05-01 Singapore 486031",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "KIAT YONG",
        "sourceRow": 289,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CYB001",
    "name": "CYBER ACOUSTICS (HK) LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CYB001-290",
        "bpCode": "CYB001",
        "address": "1 QUEEN ROAD CENTRAL HONGKONG",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "STEVE SERICKSON",
        "mobilePhone": "09175811296",
        "sourceRow": 290,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CYB002",
    "name": "CYBERCLOUD INSTITUTE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CYB002-291",
        "bpCode": "CYB002",
        "address": "#4 EL DORADO  SUBDIVISION GOV M CUENCO AVENUE BANILAD  CEBU CITY",
        "federalTaxId": "009-789-203-000",
        "contactPerson": "Clarkloui Ibanez",
        "sourceRow": 291,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-CYB004",
    "name": "CYBERDEFENDERS, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-CYB004-292",
        "bpCode": "CYB004",
        "address": "651 N BOARD ST SUITE 206 MIDDLETOWN, DELAWARE 19709 USA",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "Abdelrhman Saleh",
        "sourceRow": 292,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-D&P001-NT",
    "name": "D&P MEDICAL EQUIPMENT AND SUPPLIES TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-D&P001-NT-293",
        "bpCode": "D&P001-NT",
        "address": "UNIT 907A WEST TOWER PSE BUILDING,",
        "federalTaxId": "482-135-974-00000",
        "sourceRow": 293,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAI001",
    "name": "DAI-ICHI ELECTRONICS MANUFACTURING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAI001-294",
        "bpCode": "DAI001",
        "address": "160 F MARIANO AVE., DELA PAZ, PASIG CITY",
        "federalTaxId": "000-280-917-000",
        "contactPerson": "Rholan Willford Go",
        "sourceRow": 294,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAN001-NT",
    "name": "DANILO ALEROSO JR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAN001-NT-295",
        "bpCode": "DAN001-NT",
        "federalTaxId": "215-100-800-00000",
        "sourceRow": 295,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT001",
    "name": "DATASPHERE TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAT001-296",
        "bpCode": "DAT001",
        "address": "G/F F, PHOENIX SUN BUSINESS PARK        E. RODRIGUEZ JR. AVE., LIBIS",
        "federalTaxId": "008-311-427-00000",
        "sourceRow": 296,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT001-NT",
    "name": "DATACONNECT NETWORK SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAT001-NT-297",
        "bpCode": "DAT001-NT",
        "address": "L&R BLDG KM 4 JP LAUREL AVENUE BAJADA BARANGAY 20-B (POB) POBLACION DISTRICT 8000 DAVAO CITY",
        "federalTaxId": "772-738-058-00025",
        "contactPerson": "A",
        "sourceRow": 297,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT002",
    "name": "DATUMSTRUCT PHILIPPINES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAT002-298",
        "bpCode": "DAT002",
        "address": "24A CHATHAM HOUSE   116 VALERO COR RUFINO STS.,             SALCEDO VILLAGE 1227",
        "federalTaxId": "242-527-656-00000",
        "sourceRow": 298,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT003",
    "name": "DATA PLUS IT SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAT003-299",
        "bpCode": "DAT003",
        "address": "SOCORRO 3",
        "federalTaxId": "210-672-997-00000",
        "sourceRow": 299,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT004",
    "name": "DATABRICKS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAT004-300",
        "bpCode": "DAT004",
        "address": "San Francisco, California, United States",
        "federalTaxId": "000-000-000-000",
        "contactPerson": "WEBSITE",
        "sourceRow": 300,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT004-NT",
    "name": "DATA COMPUTER FORMS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAT004-NT-301",
        "bpCode": "DAT004-NT",
        "address": "84-86 DOMINGO M. GUEVARA STREET MAUWAT MANDALUYONG CITY",
        "federalTaxId": "000-052-924-00000",
        "sourceRow": 301,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAT005",
    "name": "DATALEC TECHNOLOGY CORPORATION",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-DAT005-302",
        "bpCode": "DAT005",
        "address": "1884 MILAGROS ST VALENZUELA 1208 MAKATI CITY PHILIPPINES",
        "federalTaxId": "206-849-994-00000",
        "contactPerson": "Edzell Margallo",
        "rawCategory": "Subcontructor",
        "sourceRow": 302,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAV001-NT",
    "name": "DAVAO LIGHT AND POWER CO., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAV001-NT-303",
        "bpCode": "DAV001-NT",
        "address": "ABOITIZ CORPORATE CENTER BLDG., GOV. MANUEL CUENCO AVE., KASAMBANGAN, CEBU CITY",
        "federalTaxId": "000-553-043-00003",
        "sourceRow": 303,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAV002",
    "name": "DAVAO BASIC STEEL INDUSTRIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAV002-304",
        "bpCode": "DAV002",
        "address": "71 BUHANGIN ROAD DAVAO CITY",
        "federalTaxId": "005-987-742-00000",
        "sourceRow": 304,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAV002-NT",
    "name": "DAVAO SUNNY VALLEY PROPERTIES CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAV002-NT-305",
        "bpCode": "DAV002-NT",
        "address": "MSI-ECS COMPLEX , M. EUSEBIO STREET BRGY SAN MIGUEL, PASIG CITY",
        "federalTaxId": "006-387-221-000",
        "contactPerson": "Roanna Seng",
        "sourceRow": 305,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAV003",
    "name": "DAVAO FUTUREBRIGHT ENTERPRISES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAV003-306",
        "bpCode": "DAV003",
        "address": "168 5TH ST ECOLAND P2 MATINA DAVAO CITY",
        "federalTaxId": "005-987-742-00000",
        "sourceRow": 306,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DAV004",
    "name": "DAVAO PHOTO-DIGI CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DAV004-307",
        "bpCode": "DAV004",
        "address": "2F EA 217 SM CITY DAVAO COR TULIP & ECOWEST DRIVE, ECOLAND BRGY. BUCANA TALAMO DISTRICT DAVAO CITY",
        "federalTaxId": "005-987-742-00000",
        "sourceRow": 307,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DCT001-NT",
    "name": "DCTECH MICRO SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DCT001-NT-308",
        "bpCode": "DCT001-NT",
        "address": "DC TECH BLDG. CAYETANO BANGOY ST., POBLACION DIST 1 DAVAO CITY",
        "federalTaxId": "003-375-571-00000",
        "sourceRow": 308,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DDL001",
    "name": "DDLS PHILIPPINES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DDL001-309",
        "bpCode": "DDL001",
        "federalTaxId": "010-342-131-00000",
        "sourceRow": 309,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEA001-NT",
    "name": "DE-ACES OFFICE ENTERPRISES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEA001-NT-310",
        "bpCode": "DEA001-NT",
        "address": "A-124 PAG ASA ST CANIOGAN PASIG CITY",
        "federalTaxId": "934-683-682-00000",
        "sourceRow": 310,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEB001NT",
    "name": "DE BELEN, JOVNEL ALEGRE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEB001NT-311",
        "bpCode": "DEB001NT",
        "address": "127 C LLAMADO ST ASIS 11 MENDEZ -NUNEZ CAVITE 4121",
        "federalTaxId": "247-411-462-000",
        "contactPerson": "DE BELEN, JOVNEL ALEGRE",
        "sourceRow": 311,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEF001",
    "name": "DEFINITIVE AUDIO VIDEO SOLUTIONS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEF001-312",
        "bpCode": "DEF001",
        "address": "81 SENEGAL ST., GREENHEIGHTS SUBD., NANGKA, MARIKINA CITY 1820",
        "federalTaxId": "008-699-661-000",
        "contactPerson": "APRIL CAADIANG",
        "sourceRow": 312,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEL001",
    "name": "DELTA STAR POWER MANUFACTURING  CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEL001-313",
        "bpCode": "DEL001",
        "federalTaxId": "004-833-813-00000",
        "sourceRow": 313,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEL002",
    "name": "DELL TECHNOLOGIES PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEL002-314",
        "bpCode": "DEL002",
        "address": "BONIFACIO HIGH STREET WORLD PLAZA  5TH  AVE. TAGUIG METRO MANILA",
        "federalTaxId": "000-000-000-00100",
        "contactPerson": "Carla Marticio",
        "mobilePhone": "09175120854",
        "sourceRow": 314,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEL012-NT",
    "name": "DE LA SALLE LIPA, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEL012-NT-315",
        "bpCode": "DEL012-NT",
        "address": "NATIONAL HGHWAY MATAAS NALUPA LIPA CITY BATANGGAS 4217",
        "federalTaxId": "002-030-925-000",
        "industry": "EDUCATION",
        "contactPerson": "GAIL JONAS VELASCO",
        "mobilePhone": "09175122426",
        "sourceRow": 315,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEL016-NT",
    "name": "DELOS REYES, WINNIE GUILLEPA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEL016-NT-316",
        "bpCode": "DEL016-NT",
        "address": "BLK 2 LOT PH2 RIZAL TECHNO SAN JUAN 1920 TAYTAY RIZAL PHILIPPINES",
        "federalTaxId": "278-913-335-00000",
        "contactPerson": "SALES ASSOCIATE",
        "sourceRow": 316,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DER001",
    "name": "DERMALOG IDENTIFICATION SYSTEM GMBH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DER001-317",
        "bpCode": "DER001",
        "address": "LEVEL 5 REGUS GATEWAY TWR GEN. ROXAS COR. GEN. AGUINALDO AVENUE ARANETA CENTER SOCORRO QUEZON CITY",
        "federalTaxId": "009-764-115-00000",
        "sourceRow": 317,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DEV001",
    "name": "DE VERA, ELIZABETH SY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DEV001-318",
        "bpCode": "DEV001",
        "address": "102 BIGLANG AWA ST NEAR 12TH AVENUE BARANGAY 98 DISTRICT 2 1400 CALOCAN CITY NCR THIRD DISTRICT",
        "federalTaxId": "203-257-476-00000",
        "contactPerson": "DE VERA, ELIZABETH SY",
        "sourceRow": 318,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DHA001",
    "name": "DHANS GADGET SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DHA001-319",
        "bpCode": "DHA001",
        "address": "2F TAN BLDG LACSON ST BO OBRERO BRGY 18B POBLACION DIST DAVAO CITY",
        "federalTaxId": "297-460-388-00000",
        "sourceRow": 319,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DHL001-NT",
    "name": "DHL EXPRESS (PHILIPPINES) CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DHL001-NT-320",
        "bpCode": "DHL001-NT",
        "address": "2306 CHINO ROCES AVENUE",
        "federalTaxId": "212-186-731-00000",
        "sourceRow": 320,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIA001-NT",
    "name": "DIANE CO. GARMENTS MANUFACTURING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIA001-NT-321",
        "bpCode": "DIA001-NT",
        "address": "818 PABELLA ST., PLAINVIEW, MANDALUYONG CITY",
        "federalTaxId": "256-922-420-000",
        "contactPerson": "DIANE DEL PRADO",
        "sourceRow": 321,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIG001",
    "name": "DIGIDATA SYSTEMS & SUPPLIES CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIG001-322",
        "bpCode": "DIG001",
        "address": "137 D TUAZON LOURDES SMH",
        "federalTaxId": "008-048-074-00000",
        "sourceRow": 322,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIG002-NT",
    "name": "DIGITAL MOVEMENT ADVERTISING AGENCY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIG002-NT-323",
        "bpCode": "DIG002-NT",
        "address": "111 PASEO DE ROXAS LEGASPI VILLAGE BRGY. SAN LORENZO,",
        "federalTaxId": "426-643-042-00000",
        "sourceRow": 323,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIG003-NT",
    "name": "DIGITAL WALKER CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIG003-NT-324",
        "bpCode": "DIG003-NT",
        "address": "4/F, Bldg. B Cyberzone, SM Megamall, EDSA cor. Julia Vargas Ave., Brgy. Wack Wack, Ortigas Center",
        "federalTaxId": "007-105-295-00051",
        "contactPerson": "DIGITAL WALKER",
        "sourceRow": 324,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIG004",
    "name": "DIGITALL COMMS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIG004-325",
        "bpCode": "DIG004",
        "address": "THE ROAD CLOCKHOUSE, 46-48 ODSAL ROAD, ODSAL, BRADFORD, WEST YORKSHIRE BD6 1AQ",
        "federalTaxId": "000000000000000",
        "contactPerson": "REECE LAWRENCE",
        "sourceRow": 325,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIG005",
    "name": "DIGITAL EDGE PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIG005-326",
        "bpCode": "DIG005",
        "address": "UNIT 10-3 10/F ONE/NEO 26TH STREET CORNER 3RD AVE FOR BONIFACIO GLOBAL CITY 1634 TAGUIG CITY NCR",
        "federalTaxId": "600-186-046-00000",
        "contactPerson": "DIGITAL EDGE",
        "sourceRow": 326,
        "documents": {}
      },
      {
        "id": "branch-DIG005-NT-327",
        "bpCode": "DIG005-NT",
        "address": "UNIT 10-3 10/F ONE/NEO 26TH STREET CORNER 3RD AVE FOR BONIFACIO GLOBAL CITY 1634 TAGUIG CITY NCR",
        "federalTaxId": "600-186-046-00000",
        "contactPerson": "DIGITAL EDGE",
        "sourceRow": 327,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIG006",
    "name": "DIGIVIGOR PRIVATE LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIG006-328",
        "bpCode": "DIG006",
        "address": "NO.107/2C, THILAGAR AVENUE, 1ST MAIN ROAD, BALAIAH GARDEN, , MADIPAKKAM, Tamil Nadu, India - 600091",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "WEBSITE",
        "sourceRow": 328,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DIL001",
    "name": "DILINILA, JOHN IRICA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DIL001-329",
        "bpCode": "DIL001",
        "address": "L12 B2 PARKLANE SUBD GUITNANG BAYAN 11 SAN MATEO RIZAL 1820",
        "federalTaxId": "223-199-401-000",
        "contactPerson": "DILINILA, JOHN IRICA",
        "sourceRow": 329,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DME001",
    "name": "DMEG, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DME001-330",
        "bpCode": "DME001",
        "federalTaxId": "009-641-261-00000",
        "sourceRow": 330,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DOM001-NT",
    "name": "DOMINADOR ASPERILLA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DOM001-NT-331",
        "bpCode": "DOM001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "001-011-301-00000",
        "sourceRow": 331,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DOM002-NT",
    "name": "DOMINIC TAJON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DOM002-NT-332",
        "bpCode": "DOM002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 332,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DOM003-NT",
    "name": "DOMINGUEZ MARKETING COMMUNICATIONS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DOM003-NT-333",
        "bpCode": "DOM003-NT",
        "address": "7/F UNIT B 8 ROCKWELL, HIDALGO DRIVE, ROCKWELL CENTER POBLACION,",
        "federalTaxId": "200-084-350-00000",
        "sourceRow": 333,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DOM004-NT",
    "name": "DOMINGO, ADRIAN SALONGA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DOM004-NT-334",
        "bpCode": "DOM004-NT",
        "address": "PUROK 5 PUYPUY 4033 BAY LAGUNA PHILIPPIENS",
        "federalTaxId": "311-645-158-000",
        "contactPerson": "DOMINGO, ADRIAN SALONGA",
        "sourceRow": 334,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DON001-NT",
    "name": "DON BOSCO TECHNICAL COLLEGE, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DON001-NT-335",
        "bpCode": "DON001-NT",
        "address": "736 GEN KALENTONG PAG-ASA 1550 CITY OF MANDALUYONG NCR. SECOND DISTRICT, PHLIPPINES",
        "federalTaxId": "000-052-498-00000",
        "contactPerson": "RECELYNN TADIPA",
        "sourceRow": 335,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DRA001-NT",
    "name": "DRAGON PRIME ENTERPRISES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DRA001-NT-336",
        "bpCode": "DRA001-NT",
        "address": "109-A KAPILIGAN ST., DONA IMELDA, QUEZON CITY",
        "federalTaxId": "402-687-598-000",
        "contactPerson": "JOSEPH SANTOS",
        "sourceRow": 336,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DRE001-NT",
    "name": "DREMZIE BATTERY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DRE001-NT-337",
        "bpCode": "DRE001-NT",
        "address": "UNIT 6, RCPJP BLDG., CENTENNIAL ROAD, (PETRON) GAHAK, KAWIT CAVITE",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 337,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DRE002",
    "name": "DREXTECH COMPUTER ACCESSORIES SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DRE002-338",
        "bpCode": "DRE002",
        "address": "NO 51 F PASCO AVE",
        "federalTaxId": "428-758-236-00000",
        "sourceRow": 338,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DUE001-NT",
    "name": "DUEL CABATINGAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DUE001-NT-339",
        "bpCode": "DUE001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "702-619-551-00000",
        "sourceRow": 339,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DUM001-NT",
    "name": "DUMLAO AND CASTILLO LAW OFFICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DUM001-NT-340",
        "bpCode": "DUM001-NT",
        "address": "6/F INSULAR HEALTH CARE BLDG 167 DELA ROSA COR LEGASPI STS LEGASPI VILLAGE SAN LORENZO NCR 4TH DIST",
        "federalTaxId": "009-701-505-00000",
        "sourceRow": 340,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DUN001-NT",
    "name": "DUN & BRADSTREET PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DUN001-NT-341",
        "bpCode": "DUN001-NT",
        "address": "4F CARGOHAUS BLDG NAIA COMPLEX BRGY VITALEZ PARANAQUE CITY",
        "federalTaxId": "236-871-410-00000",
        "sourceRow": 341,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DVC001",
    "name": "DVCDA CABLE INSTALLATION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DVC001-342",
        "bpCode": "DVC001",
        "address": "17K GOODWILL ST KAINGIN ROAD BRGY APOLONIO SAMSON BALINTAWAK QUEZON CITY",
        "federalTaxId": "244-749-320-00000",
        "sourceRow": 342,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DVR001",
    "name": "DVR BUILDERS AND ELECTRICAL CONTRACTOR INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DVR001-343",
        "bpCode": "DVR001",
        "address": "2F 5477 P SANCHEZ ST STA MESA",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 343,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DWI001-NT",
    "name": "DWIGHT BUENAVENTURA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DWI001-NT-344",
        "bpCode": "DWI001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 344,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DYG001-NT",
    "name": "DYGEN FOOD VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DYG001-NT-345",
        "bpCode": "DYG001-NT",
        "address": "FELIPE PIKE COR LANITE COR BANNER ST BAGONG ILOG PASIG CITY",
        "federalTaxId": "009-473-098-00000",
        "sourceRow": 345,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DYN001",
    "name": "DYNAMICS IT SOLUTION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DYN001-346",
        "bpCode": "DYN001",
        "address": "UNIT4 4/F BF PARAY BLDG                 F. OSMEñA BLVD",
        "federalTaxId": "242-527-656-00000",
        "sourceRow": 346,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DYN001-NT",
    "name": "DYGEN PHARMA DISTRIBUTION CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DYN001-NT-347",
        "bpCode": "DYN001-NT",
        "address": "MEZZANINE FLOOR 405 KAMUNING ST",
        "federalTaxId": "008-346-269-00000",
        "sourceRow": 347,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-DYN002",
    "name": "DYNAMIC M INTERNATIONAL TRADING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-DYN002-348",
        "bpCode": "DYN002",
        "federalTaxId": "009-140-836-00000",
        "sourceRow": 348,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EAS001",
    "name": "EA SUPPLY CHAIN SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EAS001-349",
        "bpCode": "EAS001",
        "address": "UNIT 10B 10F JMT CORPORATE CONDOMINIUM ADB AVE., ORTIGAS CENTER PASIG CITY",
        "federalTaxId": "621-703-558-00000",
        "contactPerson": "ACCOUNT",
        "sourceRow": 349,
        "documents": {}
      },
      {
        "id": "branch-EAS002-NT-351",
        "bpCode": "EAS002-NT",
        "address": "UNIT 10B 10F JMT CORPORATE CONDOMINIUM ADB AVE., ORTIGAS CENTER PASIG CITY",
        "federalTaxId": "621-703-558-00000",
        "contactPerson": "ACCOUNT",
        "sourceRow": 351,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EAS001-NT",
    "name": "EASTERN TELECOMMUNICATIONS PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EAS001-NT-350",
        "bpCode": "EAS001-NT",
        "address": "TELECOMS PLAZA 316 SEN GIL PUYAT AVE SALCEDO VILLAGE MAKATI CITY",
        "federalTaxId": "000-451-549-00000",
        "sourceRow": 350,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EAS003",
    "name": "EASTGATE COMPUTER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EAS003-352",
        "bpCode": "EAS003",
        "address": "449 BULALAKAW ST., PLAINVIEW",
        "federalTaxId": "217-085-216-000",
        "contactPerson": "SUSIE DARIA",
        "sourceRow": 352,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EAS005-NT",
    "name": "EAST ACEKRAFT INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EAS005-NT-353",
        "bpCode": "EAS005-NT",
        "address": "933 ST MARY DRIVE PALMERA HILLS SUBD DOLORES POB 1920 TAYTAY RIZAL",
        "federalTaxId": "008-619-351-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 353,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ECC001",
    "name": "EC COUNCIL INTERNATIONAL LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ECC001-354",
        "bpCode": "ECC001",
        "address": "1202 Capital Square Centre 5-19, Jardines Bazaar, Causeway Bay, Hong Kong 987987",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALES",
        "sourceRow": 354,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ECO001",
    "name": "E-COPY CEBU CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ECO001-355",
        "bpCode": "ECO001",
        "address": "520 MERITZ BLDG ARISTON CORTEZ AVENUE",
        "federalTaxId": "227-872-444-00000",
        "sourceRow": 355,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ECO002",
    "name": "ECO-HYGIENE INSTITUTIONAL CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ECO002-356",
        "bpCode": "ECO002",
        "address": "149-A RT. REV. G. AGLIPAY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 356,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ECP001",
    "name": "EC PANDA CITY TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ECP001-357",
        "bpCode": "ECP001",
        "address": "405 B SM  MEGAMALL EDSA COR J VARGAS AVE. ORTIGAS CENTER WACK-WACK GREENHILLS 1550 CITY OF MANDALUYO",
        "federalTaxId": "489-889-057-00068",
        "contactPerson": "JORDAN SAN JOSE",
        "mobilePhone": "09957247329",
        "sourceRow": 357,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EDD001",
    "name": "EDDS SCAFFOLDING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EDD001-358",
        "bpCode": "EDD001",
        "address": "15 LEDESMA COURT CULIAT",
        "federalTaxId": "931-685-495-00000",
        "sourceRow": 358,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EDM001-NT",
    "name": "EDMUNDO DIO JR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EDM001-NT-359",
        "bpCode": "EDM001-NT",
        "address": "B1 L28 NENITA EXT. BRGY. GULOD NOVALICHES QUEZON CITY",
        "federalTaxId": "000-000-000-000",
        "contactPerson": "EDMUNDO DIO JR",
        "mobilePhone": "09422001567",
        "sourceRow": 359,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EDP001",
    "name": "EDP SOLUTIONS CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EDP001-360",
        "bpCode": "EDP001",
        "address": "BLK 4 LOT 9 PH 4 CENTRAL SPV CAMELLA MOLINO III BACOOR CAVITE",
        "federalTaxId": "009-611-683-000",
        "sourceRow": 360,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EDS001",
    "name": "EDSA FURNITURE & APPLIANCES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EDS001-361",
        "bpCode": "EDS001",
        "address": "595 EDSA CUBAO QUEZON CITY",
        "federalTaxId": "000-388-232-00000",
        "sourceRow": 361,
        "documents": {}
      },
      {
        "id": "branch-EDS002-NT-362",
        "bpCode": "EDS002-NT",
        "address": "595 EDSA CUBAO QUEZON CITY",
        "federalTaxId": "000-388-232-00000",
        "sourceRow": 362,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EEM01",
    "name": "EEMONT PRIVATE LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EEM01-363",
        "bpCode": "EEM01",
        "address": "G/F S.B. TOVER 1A/1, SECTOR 16A NOIDA, UTTAR PRAD 601 Macpherson Road #08-04, Grantral Complex",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "WENJIAN LUO",
        "mobilePhone": "6568659690",
        "sourceRow": 363,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EFF001",
    "name": "EFFICO TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EFF001-364",
        "bpCode": "EFF001",
        "address": "118 1ST STREET AGAPITO SUBD.",
        "federalTaxId": "129-235-220-00000",
        "sourceRow": 364,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EJL001-NT",
    "name": "EJLK FIBERGLASS FABRICATION  SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EJL001-NT-365",
        "bpCode": "EJL001-NT",
        "address": "#120 UNIT 2B K-6TH ST BRGY EAST KAMIAS QC",
        "federalTaxId": "148-135-692-00000",
        "sourceRow": 365,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EKA001",
    "name": "EKAHAU WIRELESS DESIGN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EKA001-366",
        "bpCode": "EKA001",
        "address": "EKAHAU OY JAAKONKATU 5 00100 HELSINKI FINLAND",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 366,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELA001",
    "name": "ELAIZAS TRUCKING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELA001-367",
        "bpCode": "ELA001",
        "address": "BLK 10 LOT 24B, ALDANA ST., R. DE LEON COR. CASTILLO ST.,",
        "federalTaxId": "937-057-904-00000",
        "sourceRow": 367,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELA001-NT",
    "name": "ELAINE FELICIMA BRIZUELA CEDILLO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELA001-NT-368",
        "bpCode": "ELA001-NT",
        "address": "U0503 5/F GREENBELT MANSION 106 PEREA ST LEGASPI VILLAGE MAKATI CITY 1227",
        "federalTaxId": "221-968-109-00000",
        "sourceRow": 368,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELE001",
    "name": "ELECTROTRADE INDUSTRIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELE001-369",
        "bpCode": "ELE001",
        "address": "25 GENTEC DRIVE, MAHABANG PARANG        BINANGONAN",
        "federalTaxId": "009-162-505-00000",
        "sourceRow": 369,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELE002",
    "name": "ELECTROWORLD WALTERMART MAKATI",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELE002-370",
        "bpCode": "ELE002",
        "address": "CHINO ROCES COR ARNAIZ ST",
        "federalTaxId": "000-050-043-04900",
        "sourceRow": 370,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELE003",
    "name": "ELECTX ELECTRICAL SUPPLY AND GENERAL MERCHANDISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELE003-371",
        "bpCode": "ELE003",
        "address": "619 G. PUYAT ST., ZONE 030 BRGY. 309, QUIAPO,",
        "federalTaxId": "100-106-329-00000",
        "sourceRow": 371,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELE004-NT",
    "name": "ELEKSIS MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELE004-NT-372",
        "bpCode": "ELE004-NT",
        "address": "3/F BLDG A, SM MEGAMALL EDSA",
        "federalTaxId": "001-420-613-003",
        "contactPerson": "ELEKSIS",
        "mobilePhone": "6348484",
        "sourceRow": 372,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELG001-NT",
    "name": "ELGODOS RESTAURANT",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELG001-NT-373",
        "bpCode": "ELG001-NT",
        "address": "2529 P. GUEVARRA ST., STA CRUZ MANILA",
        "federalTaxId": "203-042-173-00000",
        "sourceRow": 373,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELG002-NT",
    "name": "ELGRADE INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELG002-NT-374",
        "bpCode": "ELG002-NT",
        "address": "LOT 2 BLOCK 1-A MANGGAHAN LIGHT INDUSTRIAL PARK",
        "federalTaxId": "008-925-579-00000",
        "sourceRow": 374,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELI001-NT",
    "name": "ELIZABETH BAYOT",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELI001-NT-375",
        "bpCode": "ELI001-NT",
        "federalTaxId": "240-243-218-00000",
        "sourceRow": 375,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELM001-NT",
    "name": "ELMER MANALILI",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELM001-NT-376",
        "bpCode": "ELM001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "219-955-926-00000",
        "sourceRow": 376,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELP001",
    "name": "EL PALITO GENERAL MERCHANDISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELP001-377",
        "bpCode": "ELP001",
        "address": "B1 L33 SAMPAGUITA ST., PEMBO, MAKATI CITY",
        "federalTaxId": "221-533-919-00000",
        "sourceRow": 377,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELP002",
    "name": "EL PALITO FIRE PROTECTION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELP002-378",
        "bpCode": "ELP002",
        "address": "B1 L33 SAMPAGUITA ST., PEMBO, MAKATI CITY",
        "federalTaxId": "221-533-919-00000",
        "sourceRow": 378,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ELT001V",
    "name": "ELTS COMPUTER AND LAPTOP ACCESSORIES SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ELT001V-379",
        "bpCode": "ELT001V",
        "address": "LOT 2 GILMORE STATION AURORA BLVD, VALENCIA 3 QUEZON CITY",
        "federalTaxId": "476-027-530-000",
        "industry": "RETAIL",
        "contactPerson": "RIZALDY SOLANO",
        "email": "NA",
        "sourceRow": 379,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EMC001",
    "name": "EMC COMPUTER SYSTEMS PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EMC001-380",
        "bpCode": "EMC001",
        "address": "43 F PHILAMLIFE TOWER 8767 PASEO DE ROXAS, BEL-AIR, MAKATI",
        "federalTaxId": "006-988-366-00000",
        "sourceRow": 380,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EME201-NT",
    "name": "EMERIEVE QUIAMBAO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EME201-NT-381",
        "bpCode": "EME201-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "303-257-203-00000",
        "sourceRow": 381,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EMP003",
    "name": "MIKEE ILAGAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EMP003-382",
        "bpCode": "EMP003",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 382,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EMU001",
    "name": "EMULATE INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EMU001-383",
        "bpCode": "EMU001",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 383,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ENA001",
    "name": "ENABLEY LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ENA001-384",
        "bpCode": "ENA001",
        "address": "DERECH MENACHEM BEGIN 11 RAMAT FGAN 5268104",
        "federalTaxId": "513-730-143-000",
        "sourceRow": 384,
        "documents": {}
      },
      {
        "id": "branch-ENA001-NT-385",
        "bpCode": "ENA001-NT",
        "address": "DERECH MENACHEM BEGIN 11 RAMAT FGAN 5268104",
        "federalTaxId": "513-730-143-000",
        "contactPerson": "RAVIT ASSAYAG",
        "sourceRow": 385,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ENG001-NT",
    "name": "ENGELBERTO VILLANUEVA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ENG001-NT-386",
        "bpCode": "ENG001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 386,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ENR001-NT",
    "name": "ENRICO CAMINCE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ENR001-NT-387",
        "bpCode": "ENR001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 387,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ENR002-NT",
    "name": "ENRIQUE MADARANG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ENR002-NT-388",
        "bpCode": "ENR002-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "111-882-871-00000",
        "sourceRow": 388,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ENV001",
    "name": "ENVIRO-AID KIMBA JUNKSHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ENV001-389",
        "bpCode": "ENV001",
        "address": "Kimba Barangay Cansojong 6045 Talisay City Cebu - Philippines",
        "federalTaxId": "295-010-230-00000",
        "contactPerson": "BETSY CARANO",
        "sourceRow": 389,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ENV001-NT",
    "name": "ENVIRONMENTAL COMPLIANCE CONSULTANTS INTL, CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ENV001-NT-390",
        "bpCode": "ENV001-NT",
        "address": "8/F MONTEPINO BUILDING, 138 AMORSOLO CORS. ADELANTADO AND GAMBOA STS.,",
        "federalTaxId": "005-342-522-00000",
        "sourceRow": 390,
        "documents": {}
      },
      {
        "id": "branch-ENV002-391",
        "bpCode": "ENV002",
        "address": "8/F MONTEPINO BUILDING, 138 ADELANTADO ST. CORNER FAMBOA STREET, LEGASPI VILLAGE, MAKATI CITY",
        "federalTaxId": "005-342-522-00000",
        "contactPerson": "Harvey Gaviño",
        "mobilePhone": "84038668",
        "sourceRow": 391,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EQU001",
    "name": "EQUILAST INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EQU001-392",
        "bpCode": "EQU001",
        "address": "UNIT 1235 CITY & LAND MEGAPLAZA ADB AVE COR GARMET RD ORTIGAS CENTER BRGY SAN ANTONIO",
        "federalTaxId": "009-005-416-00000",
        "sourceRow": 392,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ERE001",
    "name": "EREGIA, RAY ANTHONY CASTANTE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ERE001-393",
        "bpCode": "ERE001",
        "address": "RM 204 2ND FLR R&H HIGHWAY 70 BLDG RENTAL GEN LUN ST. BRGY INDAY ILO-ILO CITY 5000",
        "federalTaxId": "941-276-879-000",
        "contactPerson": "Ray Anthony Eregia",
        "sourceRow": 393,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ERI001-NT",
    "name": "ERIC PASCUA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ERI001-NT-394",
        "bpCode": "ERI001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "101-608-608-00000",
        "sourceRow": 394,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ESC004",
    "name": "ESCO PTE. LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ESC004-395",
        "bpCode": "ESC004",
        "address": "2601 26/F ANTEL 2000 CORPORATE CENTER, VALERO ST. SALCEDO VILLAGE  BEL-AIR 1209 MAKAT CITY PH",
        "federalTaxId": "267-401-256-00000",
        "contactPerson": "JOHNERY LUZON",
        "email": "NA",
        "sourceRow": 395,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ESJ001-NT",
    "name": "ESJAY AUTO CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ESJ001-NT-396",
        "bpCode": "ESJ001-NT",
        "address": "1144 QUEZON AVENUE, PALIGSAHAN NCR, SECOND DISTRICT 1103 QUEZON CITY NCR",
        "federalTaxId": "001-227-493-00000",
        "contactPerson": "GESSELE SAMONTE",
        "sourceRow": 396,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ESM001",
    "name": "E & S MARKETING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ESM001-397",
        "bpCode": "ESM001",
        "address": "206 BIG 5 BUILDING, P BURGOS CARIDAD CAVITE CITY",
        "federalTaxId": "009-300-463-00000",
        "sourceRow": 397,
        "documents": {}
      },
      {
        "id": "branch-ESM002-NT-398",
        "bpCode": "ESM002-NT",
        "address": "58 ILANG ILANG                          DONA MANUELA I",
        "federalTaxId": "009-300-463-00000",
        "contactPerson": "CINDY NABUA",
        "mobilePhone": "09289645925",
        "sourceRow": 398,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ESQ001",
    "name": "ESQUIRETECH CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ESQ001-399",
        "bpCode": "ESQ001",
        "address": "STALL 310 3F PODIUM ADV AVE. COR ORTIGS BRGY. WACK WACK MANDALUYONG CITY",
        "federalTaxId": "009-030-129-00002",
        "sourceRow": 399,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EST001-NT",
    "name": "ESTABILLO, REYNALD LAOANG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EST001-NT-400",
        "bpCode": "EST001-NT",
        "address": "022 MONIQUE EXT NAGPAYONG 1A PINAGBUHATAN PASIG CITY 1602",
        "federalTaxId": "306-520-596-000",
        "contactPerson": "MARITES ESTABILLO",
        "sourceRow": 400,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ETE001",
    "name": "ETERNAL ASIA PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ETE001-401",
        "bpCode": "ETE001",
        "address": "UNITS 3202 THE RAFFLES CORPORATE CENTER EMERALD AVENUE, ORTIGAS CENTRE          SAN ANTONIO,",
        "federalTaxId": "009-939-365-00000",
        "sourceRow": 401,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EVE001-NT",
    "name": "EVERGOOD UNLIMITED CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EVE001-NT-402",
        "bpCode": "EVE001-NT",
        "address": "3/F BEE-LU BLDG., 103-113 GIL PUYAT AVENUE, BARANGAY 51 NCR",
        "federalTaxId": "203-010-183-00100",
        "sourceRow": 402,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EVE006-NT",
    "name": "EVER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EVE006-NT-403",
        "bpCode": "EVE006-NT",
        "address": "155 CHINKIANG ST BRGY 18, 1300 PASAY CITY FOURTH DISTRICT PHILIPPINES",
        "federalTaxId": "000-302-423-00000",
        "industry": "RETAIL",
        "contactPerson": "WENCY TAN",
        "mobilePhone": "88891111791",
        "email": "NA",
        "sourceRow": 403,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EXC001",
    "name": "EXCLUSIVE NETWORKS-PH INC.",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-EXC001-404",
        "bpCode": "EXC001",
        "address": "25th FLOOR YUNCHENGCO TOWER, RCBC PLAZA AYALA AVE. COR. SEN. GIL PUYAT AVE. BEL-AIR 1209  CITY OF MAKATI NCR, FOURTH DISTRICT PH",
        "federalTaxId": "007-731-265-00000",
        "industry": "Wholesaler",
        "contactPerson": "Amiel Lorraine Cerbas",
        "position": "Accounting Officer",
        "mobilePhone": "63 9153961766",
        "email": "acerbas@exclusive-networks.com",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "status": "Incomplete",
        "sourceRow": 404,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2027-05-18",
            "status": "Current",
            "daysLeft": 300
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          }
        }
      },
      {
        "id": "branch-EXC002-NT-405",
        "bpCode": "EXC002-NT",
        "address": "25th FLOOR YUNCHENGCO TOWER, RCBC PLAZA AYALA AVE. COR. SEN. GIL PUYAT AVE. BEL-AIR 1209  CITY OF MAKATI NCR, FOURTH DISTRICT PH",
        "federalTaxId": "007-731-265-00000",
        "industry": "Wholesaler",
        "contactPerson": "Amiel Lorraine Cerbas",
        "position": "Accounting Officer",
        "mobilePhone": "63 9153961766",
        "email": "acerbas@exclusive-networks.com",
        "rawCategory": "Supplier-Local",
        "status": "Incomplete",
        "sourceRow": 405,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2027-05-18",
            "status": "Current",
            "daysLeft": 300
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-EXI001",
    "name": "EXIGENT CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EXI001-406",
        "bpCode": "EXI001",
        "address": "UNIT18 CITYLAND PASONG TAMO             6264 CALLE ESTACION AVE., PIO DEL PILAR",
        "federalTaxId": "213-140-931-00000",
        "sourceRow": 406,
        "documents": {}
      },
      {
        "id": "branch-EXI001-NT-407",
        "bpCode": "EXI001-NT",
        "federalTaxId": "213-140-931-00000",
        "sourceRow": 407,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EXP001",
    "name": "EXPERTS ACADEMY FOR APPLIED INFORMATION TECHNOLOGY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EXP001-408",
        "bpCode": "EXP001",
        "address": "UNIT 302 SEDCCO I BLDG., 120 RADA ST., LEGASPI VILLAGE, MAKATI CITY",
        "federalTaxId": "008-507-657-00000",
        "sourceRow": 408,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EXT001",
    "name": "EXTRA LOW VOLTAGE DISTRIBUTIONS, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EXT001-409",
        "bpCode": "EXT001",
        "address": "3F ALROSE BLDG. 1009 METROPOLITAN AVE., SANTA CRUZ, MAKATI CITY, 1205",
        "federalTaxId": "007-939-843-000",
        "contactPerson": "EVA MAE DOMINGO",
        "sourceRow": 409,
        "documents": {}
      },
      {
        "id": "branch-EXT001-NT-410",
        "bpCode": "EXT001-NT",
        "address": "3F ALROSE BLDG. 1009 METROPOLITAN AVE., SANTA CRUZ, MAKATI CITY, 1205",
        "federalTaxId": "007-939-843-000",
        "contactPerson": "EVA MAE DOMINGO",
        "sourceRow": 410,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-EZJ001-NT",
    "name": "EZ JERSEY OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-EZJ001-NT-411",
        "bpCode": "EZJ001-NT",
        "address": "113 JP RAMOY ST. TALIPAPA BARANGGAS 154 1400 CITY OF CALOOCAN NCR",
        "federalTaxId": "611-546-889-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 411,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FAJ001",
    "name": "FAJARILLO, ETHEL FAMINIANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FAJ001-412",
        "bpCode": "FAJ001",
        "address": "UNIT 12 ASEANA SQUARE TAMBO, PARANAQUE CITY, PHILIPPINES",
        "federalTaxId": "200-833-967-00000",
        "contactPerson": "LOVELYN FAJARILLO",
        "sourceRow": 412,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FAS001",
    "name": "FASTRONICS SALES & SERVICES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FAS001-413",
        "bpCode": "FAS001",
        "address": "LOT2 GOOD HARVEST COMPLEX 743 C. RAYMUNDO AVENUE, MAYBUNGA PASIG CITY",
        "federalTaxId": "202-111-645-000",
        "contactPerson": "NANCY QUINAGORAN",
        "sourceRow": 413,
        "documents": {}
      },
      {
        "id": "branch-FAS003-NT-416",
        "bpCode": "FAS003-NT",
        "address": "LOT2 GOOD HARVEST COMPLEX               743 C. RAYMUNDO AVENUE                  MAYBUNGA",
        "federalTaxId": "202-111-645-00000",
        "sourceRow": 416,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FAS001-NT",
    "name": "FASTFINITYCARS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FAS001-NT-414",
        "bpCode": "FAS001-NT",
        "address": "BRGY APOLONIO SAMSON",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 414,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FAS002-NT",
    "name": "FAST RETAILING PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FAS002-NT-415",
        "bpCode": "FAS002-NT",
        "federalTaxId": "008-204-649-00000",
        "sourceRow": 415,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FED001-NT",
    "name": "FEDERAL EXPRESS PACIFIC, LLC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FED001-NT-417",
        "bpCode": "FED001-NT",
        "address": "11/FL ZUELLIG BUILDING MAKATI AVE. COR. PASEO DE ROXAS",
        "federalTaxId": "275-540-614-00000",
        "sourceRow": 417,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIB001",
    "name": "FIBER-REX PHILIPPINES LLC, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIB001-418",
        "bpCode": "FIB001",
        "address": "UNIT 34 NO 16 EVANGELISTA ST BRGY SANTOLAN, PASIG CITY",
        "federalTaxId": "007-813-507-00000",
        "sourceRow": 418,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIB002",
    "name": "FIBERSHOPPE TECHNOLOGIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIB002-419",
        "bpCode": "FIB002",
        "address": "Rm 201, 301, 401, P&J Bldg, Pasig Blvd. cor. E. Rodriguez Jr. Ave, Bagong Ilog, 1600 City of Pasig",
        "federalTaxId": "008-896-889-00000",
        "sourceRow": 419,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIB003",
    "name": "FIBRE X ENGINEERING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIB003-420",
        "bpCode": "FIB003",
        "address": "SUPANG BUENAVISTA GUIMARAS",
        "federalTaxId": "767-702-044-00000",
        "sourceRow": 420,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIL001",
    "name": "FILLARCA, MEDFILSON MEDECIELO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIL001-421",
        "bpCode": "FIL001",
        "address": "SITIO NAGKAKAISA, BRGY. GUINHAYAAN 5507 LOOC ROMBLON PHILIPPINES",
        "federalTaxId": "313-719-877-00000",
        "contactPerson": "Michael P. Agustin",
        "mobilePhone": "09770575559",
        "sourceRow": 421,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIL001-NT",
    "name": "FILMAN TRAVEL CENTER INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIL001-NT-422",
        "bpCode": "FIL001-NT",
        "address": "UNIT 300 3F LIBERTY HALL BLDG. 820 BENAVIDEZ ST. BINONDO MANILA",
        "federalTaxId": "000-328-845-00000",
        "sourceRow": 422,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIL002",
    "name": "FIL-NIPPON TECHNOLOGY SUPPLY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIL002-423",
        "bpCode": "FIL002",
        "address": "BAY9-11 UPRC 1 BLDG. 2230 CHINO ROCES BRGY BANGKAL",
        "federalTaxId": "001-964-589-00000",
        "sourceRow": 423,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIL003",
    "name": "FILMS CABLING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIL003-424",
        "bpCode": "FIL003",
        "address": "126 EXECUTIVE RD., BATASAN HILLS, QUEZON CITY",
        "federalTaxId": "151-877-789-00000",
        "sourceRow": 424,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIN001",
    "name": "FINE INTERIORS TRADING AND MANUFACTURING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIN001-425",
        "bpCode": "FIN001",
        "address": "MANDAUE CITY",
        "federalTaxId": "004-264-268-000",
        "contactPerson": "JOSEPH S",
        "sourceRow": 425,
        "documents": {}
      },
      {
        "id": "branch-FIN002-NT-427",
        "bpCode": "FIN002-NT",
        "address": "MANDAUE CITY",
        "federalTaxId": "004-264-268-000",
        "contactPerson": "JOSEPH S",
        "sourceRow": 427,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIN001-NT",
    "name": "FINE CHOICE CAR ACCESSORIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIN001-NT-426",
        "bpCode": "FIN001-NT",
        "address": "1728 EVANGELISTA MST., BANGKAL, MAKATI CITY",
        "federalTaxId": "165-704-774-00000",
        "sourceRow": 426,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIR001",
    "name": "FIRETRON SAFETY SYSTEM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIR001-428",
        "bpCode": "FIR001",
        "address": "4380 16TH ST PUYAT COMPOUND QUIRINO AVE",
        "federalTaxId": "161-643-274-00000",
        "sourceRow": 428,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIR001-NT",
    "name": "FIRST TIER BRANDING SOLUTIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIR001-NT-429",
        "bpCode": "FIR001-NT",
        "address": "UNIT 904 PARK TRADE CENTRE MADRIGAL BUSINESS PARK AYALA ALABANG 1780 MUNTINLUPA CITY",
        "federalTaxId": "006-606-003-00000",
        "contactPerson": "JANEN SANTOS",
        "sourceRow": 429,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIR002",
    "name": "FIRST OPTION ELECTRONICS SYSTEM PHILS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIR002-430",
        "bpCode": "FIR002",
        "address": "3 DONG JULIANA II SUBDIVISION BRGY STA LUCIA ORTIGAS EXT",
        "federalTaxId": "008-433-451-00000",
        "sourceRow": 430,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FIR003",
    "name": "FIRST ADAMANTINE OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FIR003-431",
        "bpCode": "FIR003",
        "address": "502 MAG. MAPA ST., BACOOD, BRGY. 613, STA. MESA, MANILA, METRO MANILA",
        "federalTaxId": "600-398-466-00000",
        "contactPerson": "PATRICK OLIVAR",
        "sourceRow": 431,
        "documents": {}
      },
      {
        "id": "branch-FIR003-NT-432",
        "bpCode": "FIR003-NT",
        "address": "502 MAG. MAPA ST., BACOOD, BRGY. 613, STA. MESA, MANILA, METRO MANILA",
        "federalTaxId": "600-398-466-00000",
        "contactPerson": "PATRICK OLIVAR",
        "sourceRow": 432,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FLA001-NT",
    "name": "FLAIR TOWERS CONDOMINIUM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FLA001-NT-433",
        "bpCode": "FLA001-NT",
        "address": "RELIANCE COR PINES ST HIGHWAY HILLS MANDALUYONG CITY",
        "federalTaxId": "008-699-210-00000",
        "sourceRow": 433,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FLO001",
    "name": "FLOORING EXPERTS TILING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FLO001-434",
        "bpCode": "FLO001",
        "address": "B16 L16 SOMERSET 14 BRGY. NAVARRO GENERAL TRIAS CAVITE 4107",
        "federalTaxId": "292-342-732-00000",
        "sourceRow": 434,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FOO001-NT",
    "name": "FOOD PANDA PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FOO001-NT-435",
        "bpCode": "FOO001-NT",
        "address": "MAKATI AVE COR SEN GIL PUYAT AVE",
        "federalTaxId": "008-767-585-00000",
        "sourceRow": 435,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FOR001",
    "name": "FOREMOST SCREWTECH BOLTS AND NUTS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FOR001-436",
        "bpCode": "FOR001",
        "address": "#139 PASIG BLVD. BRGY PINEDA",
        "federalTaxId": "008-859-246-00000",
        "sourceRow": 436,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FOR002",
    "name": "FORTRA, LLC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FOR002-437",
        "bpCode": "FOR002",
        "address": "11095 VIKING DRIVE, SUITE 100 EDEN PRAIRIE, MN 55344",
        "federalTaxId": "030-029-053-300",
        "contactPerson": "CHRISTINE PIERRE",
        "sourceRow": 437,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FOR004",
    "name": "FORTH RIGHT STEEL & METAL FABRICATION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FOR004-438",
        "bpCode": "FOR004",
        "address": "BLK 40 LOT 6 BANABA 4118 SILANG CAVITE PHILIPPINES",
        "federalTaxId": "434-909-646-00000",
        "contactPerson": "MARY GRACE BAUTISTA",
        "mobilePhone": "09954753862",
        "sourceRow": 438,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FPG01-NT",
    "name": "FPG INSURANCE CO., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FPG01-NT-439",
        "bpCode": "FPG01-NT",
        "address": "ZUELLIG BLDG 6F MAKATI AVE., CR PASEO DE ROXAS MAKATI CITY",
        "federalTaxId": "000-455-062-00001",
        "sourceRow": 439,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FRI001-NT",
    "name": "FRIGID ZONE AUTO AIRCON SPECIALIST CO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FRI001-NT-440",
        "bpCode": "FRI001-NT",
        "address": "38 KAMUNING ROAD BRGY KAMUNING QUEZON CITY",
        "federalTaxId": "003-924-236-00000",
        "sourceRow": 440,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FUJ001",
    "name": "FUJIFILM BUSINESS INNOVATION PHILIPPINES CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FUJ001-441",
        "bpCode": "FUJ001",
        "address": "25/F SM AURA TOWER 26TH ST COR MCKINLEY PARKWAY BGC FORT BONIFACIO, TAGUIG CITY",
        "federalTaxId": "000-168-876-00000",
        "contactPerson": "Alexander Burgos",
        "mobilePhone": "09171578862",
        "sourceRow": 441,
        "documents": {}
      },
      {
        "id": "branch-FUJ003-NT-443",
        "bpCode": "FUJ003-NT",
        "address": "25/F SM AURA TOWER 26TH ST COR MCKINLEY PARKWAY BGC FORT BONIFACIO",
        "federalTaxId": "000-168-876-00000",
        "contactPerson": "Alexander Burgos",
        "mobilePhone": "09171578862",
        "sourceRow": 443,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FUJ002",
    "name": "FUJITSU PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FUJ002-442",
        "bpCode": "FUJ002",
        "address": "12TH  FLOOR NEX TOWER 6786 AYALA AVENUE, LEGAZPI VILLAGE SAN LORENZO, CITY OF MAKATI",
        "federalTaxId": "000-119-578-00000",
        "sourceRow": 442,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FUJ004",
    "name": "FUJI-HAYA ELECTRIC CORP. OF THE PHILS.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FUJ004-444",
        "bpCode": "FUJ004",
        "address": "SILANGAN INDL PARK, CANLUBANG CALAMBA LAGUNA 4027",
        "federalTaxId": "000-421-656-00000",
        "sourceRow": 444,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-FXC001",
    "name": "FXC QUALITECH SERVICES OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-FXC001-445",
        "bpCode": "FXC001",
        "address": "1109F M J CUENCO AVE CARRETA 6600 CEBU CITY",
        "federalTaxId": "623-401-477-00000",
        "contactPerson": "CHARLTON CANOY",
        "mobilePhone": "09328771361",
        "sourceRow": 445,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GAR001",
    "name": "GARNETECH COMPUTER MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GAR001-446",
        "bpCode": "GAR001",
        "address": "GF ROOM 100 165B MAJOR BLDG BONIFACIO ST POBLACION DISTRICT",
        "federalTaxId": "450-410-354-00000",
        "sourceRow": 446,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GAT001",
    "name": "GATEWAY NETWORK SOLUTIONS, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GAT001-447",
        "bpCode": "GAT001",
        "address": "23/F SUMMIT ONE OFFICE TOWER            503 SHAW BLVD.,",
        "federalTaxId": "237-522-433-00000",
        "sourceRow": 447,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GAW001-NT",
    "name": "GAW, JERRY CUA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GAW001-NT-448",
        "bpCode": "GAW001-NT",
        "address": "450 T PINPIN STREET BRGY 290 ZONE 27 1006 BINONDO NCR, MANILA CITY",
        "federalTaxId": "113-579-437-00000",
        "contactPerson": "GAW, JERRY CUA",
        "sourceRow": 448,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GCO001",
    "name": "GCOMM BUSINESS SUPPLIES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GCO001-449",
        "bpCode": "GCO001",
        "address": "UNIT 907 9/F CITYLAND 10 TOWER 1 AYALA AVENUE COR H DELA COSTA MAKATI CITY",
        "federalTaxId": "007-642-328-00000",
        "sourceRow": 449,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEN001",
    "name": "GENTEC ELECTRIK CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEN001-450",
        "bpCode": "GEN001",
        "address": "TINGUB ROAD, BRGY. TINGUB",
        "federalTaxId": "008-257-952-00000",
        "sourceRow": 450,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEN002-NT",
    "name": "GENCARS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEN002-NT-451",
        "bpCode": "GEN002-NT",
        "address": "DOMINGO BLDG. III 2113 CHINO ROCES AVE COR DELA ROSA ST",
        "federalTaxId": "000-120-732-00000",
        "sourceRow": 451,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEN003-NT",
    "name": "GEN-STEEL INDUSTRIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEN003-NT-452",
        "bpCode": "GEN003-NT",
        "address": "1080 EDSA A. SAMSON 1",
        "federalTaxId": "150-946-951-00000",
        "sourceRow": 452,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEN006",
    "name": "GENUINE GENIUS TECHNOLOGIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEN006-453",
        "bpCode": "GEN006",
        "address": "170 SOUTH GREEN VALLEY PARKWAY SUITE 300 HENDERSON  NC 89012 US",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 453,
        "documents": {}
      },
      {
        "id": "branch-GEN006-NT-454",
        "bpCode": "GEN006-NT",
        "address": "170 SOUTH GREEN VALLEY PARKWAY SUITE 300 HENDERSON  NC 89012 US",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 454,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEO001-NT",
    "name": "GEORGE CADANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEO001-NT-455",
        "bpCode": "GEO001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 455,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEO002",
    "name": "GEOPLAN PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEO002-456",
        "bpCode": "GEO002",
        "address": "2F UNIT 211 COMMUNICATION FOUNDATION ASIA BLDG. #4427 OLD STA MESA ST., STA. MESA MANILA",
        "federalTaxId": "008-181-446-00000",
        "sourceRow": 456,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GEO002-NT",
    "name": "GEORGE LEAL II",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GEO002-NT-457",
        "bpCode": "GEO002-NT",
        "address": "UNIT 1202 PARAGON PLAZA BLDG 162 EDSA COR RELIANCE ST. MANDALUYONG CITY 1550",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "GEORGE LEAL",
        "mobilePhone": "09178387083",
        "sourceRow": 457,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GHP001",
    "name": "GH-PRIME GOODS CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GHP001-458",
        "bpCode": "GHP001",
        "address": "15 GUIZAMA STREET, CONCEPCION UNO,",
        "federalTaxId": "010-396-343-00000",
        "sourceRow": 458,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GIG001",
    "name": "GIGAOPTIX CO. LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GIG001-459",
        "bpCode": "GIG001",
        "address": "89 MOO 10 LUANG NUEA DOI SAKET CHIANG MAI 50220 THAILAND",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 459,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GIG001-NT",
    "name": "GIGATOOLS INDUSTRIAL CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GIG001-NT-460",
        "bpCode": "GIG001-NT",
        "address": "MAKATURING ST., BRGY MANRESA, QUEZON CITY",
        "federalTaxId": "418-271-866-000",
        "contactPerson": "ALISA LAZO",
        "sourceRow": 460,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GIG002",
    "name": "GIGAWORKZ TECHNOLOGIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GIG002-461",
        "bpCode": "GIG002",
        "address": "UNIT G04 SUGBUTEL BLDG. NORTH RECLAMATION AREA CARRETA",
        "federalTaxId": "445-075-699-00000",
        "sourceRow": 461,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GIN001-NT",
    "name": "GINALYN MAYHAY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GIN001-NT-462",
        "bpCode": "GIN001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 462,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GLE001",
    "name": "GLENN REYES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GLE001-463",
        "bpCode": "GLE001",
        "address": "Nicanor Reyes Sr, Street, Sampaloc",
        "federalTaxId": "200-246-018-000",
        "contactPerson": "GLENN REYES",
        "sourceRow": 463,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GLI001",
    "name": "GLIMPSE-DC ELECTRONICS INDUSTRIES INC",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-GLI001-464",
        "bpCode": "GLI001",
        "address": "GOLDCREST BLDG KM 3 MCARTHUR HW, BRGY. 74-A MATINA CROSSING, DAVAO CITY",
        "federalTaxId": "009-342-594-00000",
        "rawCategory": "Subcontructor",
        "sourceRow": 464,
        "documents": {}
      },
      {
        "id": "branch-GLI002-NT-465",
        "bpCode": "GLI002-NT",
        "address": "GOLDCREST BLDG KM 3 MCARTHUR HW, BRGY. 74-A MATINA CROSSING, DAVAO CITY",
        "federalTaxId": "009-342-594-00000",
        "sourceRow": 465,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GLO001",
    "name": "GLOBALTRONICS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GLO001-466",
        "bpCode": "GLO001",
        "address": "494 LT ARTIAGA ST CORAZON DE JESUS",
        "federalTaxId": "227-533-236-00000",
        "sourceRow": 466,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GLO002-NT",
    "name": "GLOBE TELECOM INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GLO002-NT-467",
        "bpCode": "GLO002-NT",
        "address": "32ND ST., COR. 7TH AVE.,BONIFACIO GLOBL CITY TAGUIG CITY",
        "federalTaxId": "000-768-480-00200",
        "sourceRow": 467,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GLO007",
    "name": "GLOBAL GALAXY DISTRIBUTION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GLO007-468",
        "bpCode": "GLO007",
        "address": "1902 19F GLOBAL BUSINESS TOWER NO.144 N. DOMINGO ST. COR. MAYOR I.S. DIAZ ST. KAUNLARAN QUEZON CITY",
        "federalTaxId": "010-019-485-00000",
        "contactPerson": "NAME",
        "mobilePhone": "34114977",
        "sourceRow": 468,
        "documents": {}
      },
      {
        "id": "branch-GLO007-NT-469",
        "bpCode": "GLO007-NT",
        "address": "144 MAYOR IGNACIO SANTOS DIAZ ST. CORNER N. DOMINGO, CUBAO QC 1111",
        "federalTaxId": "010-019-485-000",
        "contactPerson": "NAME",
        "mobilePhone": "34114977",
        "sourceRow": 469,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GLX001-NT",
    "name": "GLX FORWARDING INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GLX001-NT-470",
        "bpCode": "GLX001-NT",
        "address": "4341-A CLIPPER AVE BAYVIEW VILLAGE BRGY TAMBO",
        "federalTaxId": "227-469-719-00000",
        "sourceRow": 470,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GNN001",
    "name": "GNNETS CONSTRUCTION CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GNN001-471",
        "bpCode": "GNN001",
        "address": "BRGY BAGONG SILANGAN",
        "federalTaxId": "202-919-644-20000",
        "sourceRow": 471,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GOL001-NT",
    "name": "GOLDEVER PRINTING PRESS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GOL001-NT-472",
        "bpCode": "GOL001-NT",
        "address": "OMEGA ST. 1ST MALINTA INDL ESTATE, DON PABLO SUBD., BRGY. RINCON, VALENZUELA CITY",
        "federalTaxId": "000-294-508-00000",
        "sourceRow": 472,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GOL002",
    "name": "GOLDTECH INTERNATIONAL DISTRIBUTORS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GOL002-473",
        "bpCode": "GOL002",
        "address": "268 A A.Y.S.N. BLDG., N. DOMINGO ST, PASADEÑA, SAN JUAN CITY",
        "federalTaxId": "005-799-016-00000",
        "sourceRow": 473,
        "documents": {}
      },
      {
        "id": "branch-GOL002-NT-474",
        "bpCode": "GOL002-NT",
        "address": "268 A A.Y.S.N. BLDG., N. DOMINGO ST, PASADEÑA, SAN JUAN CITY",
        "federalTaxId": "005-799-016-00000",
        "contactPerson": "MEL",
        "sourceRow": 474,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GON001",
    "name": "GONZALES, ARLON BULACSAO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GON001-475",
        "bpCode": "GON001",
        "address": "9 N DOMINGO ST BRGY PROGRESO SAN JUAN CITY 1500",
        "federalTaxId": "214-762-898-000",
        "contactPerson": "GONZALES",
        "sourceRow": 475,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GOO001",
    "name": "GOOGLE ASIA PACIFIC PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GOO001-476",
        "bpCode": "GOO001",
        "address": "70 PASIR PANJANG ROAD #03-71 MAPLETREE BUSINESS CITY SINGAPORE 117371",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALES PERSON",
        "mobilePhone": "0000000",
        "sourceRow": 476,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GOO001-NT",
    "name": "GOODGEAR VEHICLE PARTS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GOO001-NT-477",
        "bpCode": "GOO001-NT",
        "address": "2682 TAFT AVE PASAY CITY",
        "federalTaxId": "155-698-000-00000",
        "sourceRow": 477,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GOT001",
    "name": "GOTO TECHNOLOGIES IRELAND UNLIMITED COMPANY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GOT001-478",
        "bpCode": "GOT001",
        "address": "THE REFLECTOR 10 HANOVER QUAY DUBLIN 2 D02R573 IRELAND",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 478,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRA001",
    "name": "GRAND TECH INT'L ENT. CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRA001-479",
        "bpCode": "GRA001",
        "address": "705 REGRAY BLDG JP RIZAL ST VALENZUELA, MAKATI CITY PHILIPPINE",
        "federalTaxId": "207-624-241-00000",
        "sourceRow": 479,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRA002-NT",
    "name": "GRAPHIC WIZARD INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRA002-NT-480",
        "bpCode": "GRA002-NT",
        "address": "66 HARVARD ST. BRGY E. RODRIGUEZ SR.",
        "federalTaxId": "004-611-085-00000",
        "sourceRow": 480,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRA005-NT",
    "name": "GRAFIQ ADVERTISING SYSTEM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRA005-NT-481",
        "bpCode": "GRA005-NT",
        "address": "29 SCOUT LIMBAGA, LAGING HANDA 1103 QUEZON CITY, PHILIPPINES",
        "federalTaxId": "010-322-822-00000",
        "contactPerson": "RENIEL CALIZO TIA",
        "mobilePhone": "09176261672",
        "sourceRow": 481,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRE001",
    "name": "GREENBOARD IT SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRE001-482",
        "bpCode": "GRE001",
        "address": "MATINA APALAYA",
        "federalTaxId": "913-886-876-00000",
        "sourceRow": 482,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRE001-NT",
    "name": "GREEN PARTS AUTO SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRE001-NT-483",
        "bpCode": "GRE001-NT",
        "address": "2256 TAFT AVE BRGY 58 ZONE 07 PASAY CITY",
        "federalTaxId": "461-086-032-00000",
        "contactPerson": "SALES MARK",
        "sourceRow": 483,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRE002",
    "name": "GREEN-TECH ENTERPRISES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRE002-484",
        "bpCode": "GRE002",
        "address": "31 SANTAN ST., YNCHAUSTI SUBD.,",
        "federalTaxId": "152-443-327-00000",
        "sourceRow": 484,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GRE003",
    "name": "GREENTECH ELECTRONICS, CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GRE003-485",
        "bpCode": "GRE003",
        "address": "DR. 13 888 BLDG., N. TORRES ST., AGDAO PROPER, DAVAO CITY",
        "federalTaxId": "293-563-062-00000",
        "sourceRow": 485,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-GSQ001",
    "name": "GSQ HARDWARE & ELECTRICAL SALES CO. INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-GSQ001-486",
        "bpCode": "GSQ001",
        "address": "909 AURORA BLVD. SILANGAN",
        "federalTaxId": "009-140-990-00000",
        "sourceRow": 486,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-H21001",
    "name": "H21 SOURCES OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-H21001-487",
        "bpCode": "H21001",
        "address": "BM18 BLDG. 2 999 SHOPPING MALL SOLER ST. BRGY. 293  ZONE 028 1006 BINONDO MANILA CITY",
        "federalTaxId": "629-172-551-00000",
        "contactPerson": "Jizelle",
        "mobilePhone": "09258788772",
        "sourceRow": 487,
        "documents": {}
      },
      {
        "id": "branch-H21001-NT-488",
        "bpCode": "H21001-NT",
        "address": "BM19 BLDG2 999 SHOPPING MALL COR. SOLER ST., BRGY 293 ZONE 028, BINONDO, MANILA",
        "federalTaxId": "629-172-551-00000",
        "contactPerson": "JIZELLE",
        "mobilePhone": "09258788772",
        "sourceRow": 488,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HAC001",
    "name": "HACK THE BOX LTD.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HAC001-489",
        "bpCode": "HAC001",
        "address": "38 WALTON ROAD FOLESTONE KENT CT19 5QS GBR",
        "federalTaxId": "GB2728304020000",
        "contactPerson": "DERRICK SY",
        "sourceRow": 489,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HAI003",
    "name": "HAIDER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HAI003-490",
        "bpCode": "HAI003",
        "address": "609 BONI AVENUE PLAINVIEW 1550 CITY OF MANDALUYONG , NCR SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "636-501-958-00000",
        "contactPerson": "SUSIE DARIA",
        "sourceRow": 490,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HAK001",
    "name": "HAKANIEMI MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HAK001-491",
        "bpCode": "HAK001",
        "address": "449 BULALAKAW ST., BRGY. PLAINVIEW MANDALUYONG CITY",
        "federalTaxId": "009-642-359-00000",
        "contactPerson": "SUSIE DARIA",
        "sourceRow": 491,
        "documents": {}
      },
      {
        "id": "branch-HAK001-NT-492",
        "bpCode": "HAK001-NT",
        "address": "449 BULALAKAW ST., BRGY. PLAINVIEW MANDALUYONG CITY",
        "federalTaxId": "009-642-359-00000",
        "contactPerson": "SUSIE DARIA",
        "sourceRow": 492,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HAN001",
    "name": "HANGZHOU HIKVISION DIGITAL TECHNOLOGY CO., LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HAN001-493",
        "bpCode": "HAN001",
        "address": "700 DONGLIU ROAD BINIJIANG DISTRICT HANGZHOU CHINA",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 493,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HAN002",
    "name": "HANGZHOU HIKVISION TECHNOLOGY CO., LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HAN002-494",
        "bpCode": "HAN002",
        "federalTaxId": "000-000-000-10000",
        "sourceRow": 494,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HAY001-NT",
    "name": "HAYDEE CARINGAL RIEZA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HAY001-NT-496",
        "bpCode": "HAY001-NT",
        "address": "1512 CM RECTO AVE COR TOMAS MAPUA ST. STA CRUZ MANILA",
        "federalTaxId": "230-141-550-00000",
        "contactPerson": "HAYDEE CARINGAL RIEZA",
        "sourceRow": 496,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HEAD001",
    "name": "HEADPHILES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HEAD001-497",
        "bpCode": "HEAD001",
        "address": "SPACE 2255 UGF EAST WING FESTIVAL MALL, FILINVEST CITY, ALABNG 1781 CITY OF MUNTINLUPA",
        "federalTaxId": "009-222-641-00001",
        "contactPerson": "JBL FESTIVAL PATRICK",
        "sourceRow": 497,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HEL001",
    "name": "HELPSYSTEMS, LLC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HEL001-498",
        "bpCode": "HEL001",
        "address": "6455 CITY WEST PARKWAY EDEN PRAIRIE MN 55344 UNITED STATES",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 498,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HEN001",
    "name": "HENSE TECHNOLOGY PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HEN001-499",
        "bpCode": "HEN001",
        "address": "BLOCK 212 HOUGANG ST 21 #03-319",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 499,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HER001-NT",
    "name": "HERMACO COMMERCIAL INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HER001-NT-500",
        "bpCode": "HER001-NT",
        "address": "47 P DELA CRUZ ST BRGY SAN BARTOLOME NOVALICHES QUEZON CITY",
        "federalTaxId": "007-759-548-00000",
        "sourceRow": 500,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HER002",
    "name": "HERMACUS CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HER002-501",
        "bpCode": "HER002",
        "address": "1737 B2 DIAN ST BRGY PALANAN MAKATI CTY",
        "federalTaxId": "007-980-489-00000",
        "sourceRow": 501,
        "documents": {}
      },
      {
        "id": "branch-HER004-NT-503",
        "bpCode": "HER004-NT",
        "address": "1737 B2 DIAN ST BRGY PALANAN MAKATI CTY",
        "federalTaxId": "007-980-489-00000",
        "sourceRow": 503,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HER003-NT",
    "name": "HERMONISA BONZON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HER003-NT-502",
        "bpCode": "HER003-NT",
        "federalTaxId": "105-886-039-00000",
        "sourceRow": 502,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HEW001",
    "name": "HEWLETT-PACKARD PHILS CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HEW001-504",
        "bpCode": "HEW001",
        "address": "25TH FLOOR TWENTY-FIVE SEVEN MCKINLEY BLDG. 25TH STREET COR 7TH AVENUE",
        "federalTaxId": "003-956-294-00000",
        "sourceRow": 504,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HIG001",
    "name": "HIGHPOINT SERVICES NETWORK PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HIG001-505",
        "bpCode": "HIG001",
        "address": "GF-B GMG BLDG. 1144-1154 PRES QUIRINO AVE EXT BRGY 827 ZONE 089 PACO MANILA CITY",
        "federalTaxId": "010-067-958-00000",
        "sourceRow": 505,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HIP001-NT",
    "name": "HI-PRECISION DIAGNOSTIC CENTER, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HIP001-NT-506",
        "bpCode": "HIP001-NT",
        "address": "W. LONG BLDG., 440-442 DEL MONTE AVE. COR. BIAK-NA-BATO BRGY. SIENA, QUEZON CITY",
        "federalTaxId": "004-778-957-000NV",
        "sourceRow": 506,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HIS001-NT",
    "name": "H.I.S. (PHILIPPINES) TRAVEL CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HIS001-NT-507",
        "bpCode": "HIS001-NT",
        "address": "14F PICADILLA STAR BUILDING, 4TH AVENUE CORNER 27TH STREET BONIFACIO GLOBAL CITY, TAGUIG",
        "federalTaxId": "007-068-688-00000",
        "contactPerson": "GRACEL CAAGBAY",
        "sourceRow": 507,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HIT001",
    "name": "HITEC INTERNATIONAL CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HIT001-508",
        "bpCode": "HIT001",
        "address": "U1401 WILSHIRE PLAZA BLDG 11 ANAPOLIS GREENHILLS",
        "federalTaxId": "005-174-311-000",
        "contactPerson": "Mara Jasareno",
        "mobilePhone": "09088803460",
        "sourceRow": 508,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HIT002",
    "name": "HITACHI ELEVATOR PHILIPPINES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HIT002-509",
        "bpCode": "HIT002",
        "address": "UNIT 604, 602 & 301 OPPEN BUILDING 349 SEN GIL PUYAT AVENUE MAKATI CITY 1209",
        "federalTaxId": "000-307-442-00000",
        "contactPerson": "Joanne Aliwalas",
        "mobilePhone": "09171934837",
        "sourceRow": 509,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HKM001",
    "name": "HK MINBOL COMPONENTS LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HKM001-510",
        "bpCode": "HKM001",
        "address": "501 BLOCK 2 WANYUAN BUSINESS BLDG LIUXIAN NO2 ROAD 71 BLOCK BAO AN DISTRICS",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 510,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HOB001",
    "name": "HOBBY DYNAMICS EQUIPMENT GADGETS, GIZMOS AND SOLUTIONS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HOB001-511",
        "bpCode": "HOB001",
        "address": "87 PANAY AVENUE SOUTH TRIANGLE, QUEZON CITY",
        "federalTaxId": "008-787-857-00001",
        "contactPerson": "STEVEN SAU",
        "mobilePhone": "09178507222",
        "sourceRow": 511,
        "documents": {}
      },
      {
        "id": "branch-HOB001-NT-512",
        "bpCode": "HOB001-NT",
        "address": "87 PANAY AVENUE SOUTH TRIANGLE, QUEZON CITY",
        "federalTaxId": "008-787-857-00001",
        "contactPerson": "STEVEN SAU",
        "mobilePhone": "09178507222",
        "sourceRow": 512,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HOM001-NT",
    "name": "HOMESOURCE HARDWARE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HOM001-NT-513",
        "bpCode": "HOM001-NT",
        "address": "2433 RIZAL AVE BRGY 209 TONDO MANILA",
        "federalTaxId": "159-504-929-00000",
        "contactPerson": "HOMESOURCE",
        "sourceRow": 513,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HON001-NT",
    "name": "HONDA CARS MAKATI INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HON001-NT-514",
        "bpCode": "HON001-NT",
        "address": "1 PRES SERGIO OSMENA HIGHWAY MAKATI INC",
        "federalTaxId": "000-220-239-00000",
        "contactPerson": "BERNARDO GORDOVA",
        "sourceRow": 514,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HOP001-NT",
    "name": "HOPIA KING BAKERY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HOP001-NT-515",
        "bpCode": "HOP001-NT",
        "address": "628 ONGPIN ST. BINONDO",
        "federalTaxId": "165-703-807-00000",
        "sourceRow": 515,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HPP001",
    "name": "HP PPS PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HPP001-516",
        "bpCode": "HPP001",
        "address": "G/F ACCELERANDO BUILDING 395 SEN GIL PUYAT AVENUE",
        "federalTaxId": "008-927-505-00001",
        "sourceRow": 516,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HUA001",
    "name": "HUA YANG ELECTRONICS ENTERPRISES CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HUA001-517",
        "bpCode": "HUA001",
        "address": "535 FLORENTINO TORRES ST STA CRUZ",
        "federalTaxId": "008-001-893-00000",
        "sourceRow": 517,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HUA002",
    "name": "HUAWEI INTERNATIONAL PTE. LTD.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HUA002-518",
        "bpCode": "HUA002",
        "address": "15A CHANGI BUSINESS PARK CENTRAL 1      #03-03",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 518,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HUA003",
    "name": "HUAWEI TECHNOLOGIES PHILS. INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HUA003-519",
        "bpCode": "HUA003",
        "address": "62F PBCOM TOWER AYALA AVE COR VA RAFINO ST",
        "federalTaxId": "221-237-211-00000",
        "sourceRow": 519,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HYE001",
    "name": "HYEBRID  TECH CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HYE001-520",
        "bpCode": "HYE001",
        "address": "ROOM 600 6F DONA FELISA SYJUCO 1872 REMEDIOS ST COR TAFT AVE BRGY 693 ZONE 75 MALATE",
        "federalTaxId": "010-032-512-00000",
        "sourceRow": 520,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HYS001",
    "name": "HYSN PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HYS001-521",
        "bpCode": "HYS001",
        "address": "138 ROBINSON ROAD, #26-01 OXLEY TOWER SINGAPORE 068906",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "PRACTICAL DEVSECOP WEBSITE",
        "sourceRow": 521,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-HZN001-NT",
    "name": "HIZON'S RESTAURANT & CATERING SERVICES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-HZN001-NT-522",
        "bpCode": "HZN001-NT",
        "address": "22 RENOWNED LANE SANVILLE SUBD PROJ 6 QUEZON CITY",
        "federalTaxId": "214-356-866-00000",
        "contactPerson": "HAIFFA LELIS",
        "sourceRow": 522,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-I. 001",
    "name": "I. GADGETS ENTERPRISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-I. 001-523",
        "bpCode": "I. 001",
        "address": "16F CHURCH ST GRACE VILLAGE, BALINGASA QC",
        "federalTaxId": "907-363-699-00000",
        "sourceRow": 523,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IBO001",
    "name": "IBOOK COMPUTER STORE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IBO001-524",
        "bpCode": "IBO001",
        "address": "210 2ND FLOOR CYBERZONE SM CITY CLARK ANGELES CITY",
        "federalTaxId": "213-029-498-00300",
        "sourceRow": 524,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IBO002",
    "name": "IBON, ROY NOEL MELGAR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IBO002-525",
        "bpCode": "IBO002",
        "address": "UNIT 3A A&L BLDG #126 N DOMINGO ST. PEDRO CRUZ SAN JUAN CITY",
        "federalTaxId": "218-436-048-00000",
        "contactPerson": "Lerma D. Jumarang",
        "sourceRow": 525,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ICO001",
    "name": "I-CONNECT SYSTEMS INTEGRATION  INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ICO001-526",
        "bpCode": "ICO001",
        "address": "4780 ORTIGAS AVE EXTENTION (WAREHOUSE) (C3) ROSARIO",
        "federalTaxId": "008-440-856-00000",
        "sourceRow": 526,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ICO001-NT",
    "name": "ICONIC DEALERSHIP INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ICO001-NT-527",
        "bpCode": "ICO001-NT",
        "address": "E RODRIGUEZ JR AVENUE CORNER CALLE INDUSTRIA, BAGUMBAYAN 1110 QUEZON CITY",
        "federalTaxId": "008-452-246-00005",
        "contactPerson": "CRISTY BARISO",
        "sourceRow": 527,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ICO002-NT",
    "name": "I-CON TECH INT'L. INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ICO002-NT-528",
        "bpCode": "ICO002-NT",
        "address": "BLK 12 LOT 15&16 VILLA OLYMPIA MAIN ROAD, SAN VICENTE, SAN PEDRO LAGUNA 4023",
        "federalTaxId": "007-991-151-00000",
        "contactPerson": "ROSALYN RACADIO",
        "email": "sales@icontechph.com",
        "sourceRow": 528,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ICS001",
    "name": "INTEGRATED COMPUTER SYSTEMS, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ICS001-529",
        "bpCode": "ICS001",
        "address": "3/F RM 303 LIMKETKAI BUILDING,",
        "federalTaxId": "000-055-526-00000",
        "sourceRow": 529,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IDC001",
    "name": "ID CARDS DIRECT LLC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IDC001-530",
        "bpCode": "IDC001",
        "address": "24285 Katy Freeway, Suite 300",
        "federalTaxId": "000000000000000",
        "contactPerson": "MATT FABRAY",
        "sourceRow": 530,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IDE001-NT",
    "name": "IDEAS IN PRINT TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IDE001-NT-531",
        "bpCode": "IDE001-NT",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 531,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IHR001-NT",
    "name": "IHRI GLOBAL MANAGEMENT CENTER INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IHR001-NT-532",
        "bpCode": "IHR001-NT",
        "address": "11TH FLOOR FOUR/NEO  BUILDING, BONIFACIO GLOBAL CITY, TAGUIG CITY, 1634",
        "federalTaxId": "010-708-914-000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 532,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IKA001",
    "name": "IKANO (PHILIPPINES), INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IKA001-533",
        "bpCode": "IKA001",
        "address": "MARINA WAY MOA COMPLEX CBP-IA ZONE 10 BRGY 76",
        "federalTaxId": "009-560-864-00000",
        "contactPerson": "IKEA",
        "sourceRow": 533,
        "documents": {}
      },
      {
        "id": "branch-IKA001-NT-534",
        "bpCode": "IKA001-NT",
        "address": "MARINA WAY MOA COMPLEX CBP-IA ZONE 10 BRGY 76",
        "federalTaxId": "009-560-864-00000",
        "contactPerson": "IKEA",
        "sourceRow": 534,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IME001",
    "name": "IME ENTERPRISES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IME001-535",
        "bpCode": "IME001",
        "address": "NANOC LARENA SIQUIJOR",
        "federalTaxId": "245-833-406-00000",
        "sourceRow": 535,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IMM001",
    "name": "IMMUNIWEB",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IMM001-536",
        "bpCode": "IMM001",
        "address": "Quai de l'Île 13, CH-1204 Geneva, Switzerland.",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "ANDRII SLOBODIANYK",
        "sourceRow": 536,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IMP001",
    "name": "IMPERIAL APPLIANCE PLAZA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IMP001-537",
        "bpCode": "IMP001",
        "address": "ARROYO ST., BRGY. ZONE III, (POB) STA. BARBARA, ILOILO CITY",
        "federalTaxId": "000-249-888-00100",
        "contactPerson": "ROY BATALUNA",
        "sourceRow": 537,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IMV001",
    "name": "IMV INTERNATIONAL MICRO VILLAGE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IMV001-538",
        "bpCode": "IMV001",
        "address": "U204 MAKATI EXECUTIVE CENTER HERRERA COR ALFARO ST SALCEDO VILLAGE MAKATI CITY",
        "federalTaxId": "005-038-188-00000",
        "sourceRow": 538,
        "documents": {}
      },
      {
        "id": "branch-IMV002-NT-539",
        "bpCode": "IMV002-NT",
        "address": "U204 MAKATI EXECUTIVE CENTER HERRERA COR ALFARO ST",
        "federalTaxId": "005-038-188-00000",
        "sourceRow": 539,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INC001-NT",
    "name": "INCALSYS METROLOGY AND LABORATORY SERVICE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INC001-NT-540",
        "bpCode": "INC001-NT",
        "address": "1F TECH PLACE ONE BLDG., ORTIGAS AVENUE EXT., BEVERLY HILLS SUBDIVISION,",
        "federalTaxId": "007-743-198-00000",
        "sourceRow": 540,
        "documents": {}
      },
      {
        "id": "branch-INC002-NT-541",
        "bpCode": "INC002-NT",
        "address": "1F TECH PLACE ONE BLDG ORTIGAS AVE, BEVERLY HILLS ANTIPOLO CITY, RIZAL 1870 PH",
        "federalTaxId": "045-007-743-198",
        "contactPerson": "ROMY MARCOS",
        "sourceRow": 541,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INE001",
    "name": "INTERNETWORK EXPERT, LLC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INE001-542",
        "bpCode": "INE001",
        "address": "1235 EAST BLVD , SUITE E 5025 CHARLOTTE, NC 28203 USA",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "Bryson Blaylock",
        "sourceRow": 542,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF001",
    "name": "INFORMATION TECHNOLOGY SECURITY DISTRIBUTION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF001-543",
        "bpCode": "INF001",
        "address": "6F WSI CORPORATE CENTER 1005 METROPOLITANT AVE SANTA CRUZ",
        "federalTaxId": "236-340-739-00100",
        "sourceRow": 543,
        "documents": {}
      },
      {
        "id": "branch-INF001-NT-544",
        "bpCode": "INF001-NT",
        "address": "6F WSI CORPORATE CENTER 1005 METROPOLITANT AVE SANTA CRUZ",
        "federalTaxId": "236-340-739-00100",
        "contactPerson": "JONELLA ASTURIO",
        "sourceRow": 544,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF002",
    "name": "INFOWORX, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF002-545",
        "bpCode": "INF002",
        "address": "2/F GILMORE IT CENTER                   GILMORE ST., VALENCIA, NEW MANILA",
        "federalTaxId": "004-845-988-00000",
        "sourceRow": 545,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF002-NT",
    "name": "INFINITUS MARKETING SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF002-NT-546",
        "bpCode": "INF002-NT",
        "address": "UNIT 6-C 6/F VALERO TOWER 122 VALERO STREET SALCEDO VILLAGE  BEL AIR MAKATI CITY",
        "federalTaxId": "740-923-321-000",
        "contactPerson": "ROMY MARCOS",
        "sourceRow": 546,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF003",
    "name": "INFINITEINTEGRATED SYSTEMS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF003-547",
        "bpCode": "INF003",
        "federalTaxId": "008-829-249-00000",
        "sourceRow": 547,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF004",
    "name": "INFOSYTE SDN DHD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF004-548",
        "bpCode": "INF004",
        "address": "PUCHONG",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 548,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF005",
    "name": "INFOBAHN COMMUNICATIONS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF005-549",
        "bpCode": "INF005",
        "address": "923 AURORA BLVD., LA SALLE, SILANGAN, CUBAO, QUEZON CITY",
        "federalTaxId": "004-840-797-00000",
        "sourceRow": 549,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF006",
    "name": "INFOTOUCH SYSTEMS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF006-550",
        "bpCode": "INF006",
        "address": "UNIT 202-204 DON PABLO BUILDING 114 AMORSOLO ST LEGASPI VILLAGE SAN LORENZO 1229 , MAKATI CITY NCR",
        "federalTaxId": "223-896-631-00000",
        "contactPerson": "Patrick Nohay",
        "mobilePhone": "09500806046",
        "sourceRow": 550,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INF007",
    "name": "INFINITE INTEGRATION & CONSULTING CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INF007-551",
        "bpCode": "INF007",
        "address": "UNIT 2 MEGASTATE BLDG. 737 G. ARANETA AVE. CORNER AGNO EXT. TATALON 4",
        "federalTaxId": "008-002-359-000",
        "contactPerson": "CCTV KING",
        "mobilePhone": "09771420492",
        "sourceRow": 551,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ING001",
    "name": "INGRAM MICRO ASIA PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ING001-552",
        "bpCode": "ING001",
        "address": "205 KALLANG BAHRU #02-00 SINGAPORE 339341",
        "federalTaxId": "M2-0061140-3",
        "sourceRow": 552,
        "documents": {}
      },
      {
        "id": "branch-ING001-NT-553",
        "bpCode": "ING001-NT",
        "address": "205 KALLANG BAHRU #02-00 SINGAPORE 339341",
        "federalTaxId": "M2-0061140-3000",
        "contactPerson": "NAME",
        "sourceRow": 553,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INK001-NT",
    "name": "INK AND THREADS CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INK001-NT-554",
        "bpCode": "INK001-NT",
        "address": "UNIT 2 PHILAM TOWNHOMES #895 EDSA PHIL-AM 1 QUEZON CITY 1104",
        "federalTaxId": "010-296-750-00000",
        "sourceRow": 554,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INN001",
    "name": "INNOVATIVE TRAINING WORKS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INN001-555",
        "bpCode": "INN001",
        "address": "UNIT 602-A ALABANG BUSINESS TOWER       1216 ACACIA AVE., MADRIGAL BUSINESS PARKAYALA, ALABANG",
        "federalTaxId": "209-571-715-00000",
        "sourceRow": 555,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INN002-NT",
    "name": "INNOVE COMMUNICATIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INN002-NT-556",
        "bpCode": "INN002-NT",
        "address": "9/F THE GLOBE TOWER-CEBU SAMAR LOOP COR PANAY ROAD CEBU CITY CEBU",
        "federalTaxId": "000-360-916-00000",
        "sourceRow": 556,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INN003",
    "name": "INNOVISTA TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INN003-557",
        "bpCode": "INN003",
        "address": "5F WORLDCHEERS BLDG 46-48 N DOMINGO ST SAN PERFECTO SAN JUAN CITY 1500",
        "federalTaxId": "002-765-139-00000",
        "contactPerson": "INNOVISTA",
        "sourceRow": 557,
        "documents": {}
      },
      {
        "id": "branch-INN003-NT-558",
        "bpCode": "INN003-NT",
        "address": "5F WORLDCHEERS BLDG 46-48 N DOMINGO ST SAN PERFECTO SAN JUAN",
        "federalTaxId": "002-765-139-00000",
        "contactPerson": "INNOVISTA",
        "sourceRow": 558,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INS001",
    "name": "INSTA360",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INS001-559",
        "bpCode": "INS001",
        "address": "2323 MAIN ST., UNIT 16, IRVINE, CA 92614",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "DERRICK SY",
        "sourceRow": 559,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INS001-NT",
    "name": "INSURANCE COMPANY OF NORTH AMERICA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INS001-NT-560",
        "bpCode": "INS001-NT",
        "address": "24TH ZUELLIG BLDG., MAKATI AVE., COR PASEO DE ROXAS MAKATI CITY",
        "federalTaxId": "000-589-211-00000",
        "sourceRow": 560,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INS007",
    "name": "INSIGHT SUPPLY CHAIN SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INS007-561",
        "bpCode": "INS007",
        "address": "UNIT 10B 10F JMT CORPORATE CONDOMINIUM ADB AVE., ORTIGAS CENTER SAN ANTONIO, PASIG CITY, 1600",
        "federalTaxId": "621-703-558-00000",
        "contactPerson": "ACCOUNT",
        "sourceRow": 561,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT001",
    "name": "INTEGRATED SECURITY AND AUTOMATION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT001-562",
        "bpCode": "INT001",
        "address": "122 P. CRUZ STREET, NEW ZANIGA",
        "federalTaxId": "006-539-714-00000",
        "sourceRow": 562,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT001-NT",
    "name": "INTERNATIONAL JOURNEYS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT001-NT-563",
        "bpCode": "INT001-NT",
        "address": "ROOM 202 2F IVY HILL RESIDENCES 2350 TAFT AVE BRGY 725 ZONE 079 MALATE MANILA 1009",
        "federalTaxId": "000-349-001-000",
        "contactPerson": "KEM  LIM",
        "sourceRow": 563,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT002",
    "name": "INTELENET COMMUNICATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT002-564",
        "bpCode": "INT002",
        "address": "UNIT 19B SAUDI ARABIA ST. BETTERLIVING  SUBD.",
        "federalTaxId": "109-397-406-00000",
        "sourceRow": 564,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT003",
    "name": "INTERCONNECT SYSTEMS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT003-565",
        "bpCode": "INT003",
        "federalTaxId": "220-245-045-00000",
        "sourceRow": 565,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT004",
    "name": "INTELLISMART TECHNOLOGY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT004-566",
        "bpCode": "INT004",
        "address": "16-A Catanduanes St. West Avenue, Quezon City",
        "federalTaxId": "200-833-967-00000",
        "contactPerson": "MA. JENNEPE DY",
        "mobilePhone": "09493158882",
        "sourceRow": 566,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT004-NT",
    "name": "INTERNATIONAL SPECIALTY APPAREL INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT004-NT-567",
        "bpCode": "INT004-NT",
        "address": "5TH FLOOR ENZO BUILDING 399 SEN GIL PUYAT AVENUE",
        "federalTaxId": "008-636-492-00000",
        "sourceRow": 567,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT005-NT",
    "name": "INTERNATIONAL SPECIALTY RETAILERS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT005-NT-568",
        "bpCode": "INT005-NT",
        "address": "5F ENZO BLDG. 399 SEN GIL PUYAT AVE MAKATI CITY",
        "federalTaxId": "008-422-798-00000",
        "sourceRow": 568,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT006-NT",
    "name": "INTERNATIONAL TOYWORLD, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT006-NT-569",
        "bpCode": "INT006-NT",
        "address": "SM CITY NORTH EDSA",
        "federalTaxId": "000-404-818-01900",
        "contactPerson": "TOY KINGDOM",
        "sourceRow": 569,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT007-NT",
    "name": "INTERNATIONAL SPECIALTY CONCEPTS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT007-NT-570",
        "bpCode": "INT007-NT",
        "address": "UG & 2ND LEVEL MEGA FASHION HALL BLDG SM MEGAMALL BLDG. D, J. VARGAS WACK-WACK GREENHILLS",
        "federalTaxId": "238-777-814-009",
        "contactPerson": "DEWI VALIENTES",
        "sourceRow": 570,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INT010",
    "name": "INTERNET OF THINGS PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INT010-571",
        "bpCode": "INT010",
        "address": "UNIT 37 & 38 ARCEL BLDG, 137 N DOMINGO ST BALONG BATO, SA JUAN, METRO MANILA",
        "federalTaxId": "008-712-876-000",
        "contactPerson": "ANGELICA GUTIERREZ",
        "sourceRow": 571,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INV001",
    "name": "INVICTUS IT ENTERPRISE SOLUTIONS CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INV001-572",
        "bpCode": "INV001",
        "address": "12F TIMES PLAZA BLDG UN AVE COR TAFT AVE ZONE 72 BARANGGAY 670 1000 ERMITA NCT. MANILA",
        "federalTaxId": "634-544-427-00000",
        "contactPerson": "Vilma Garcia",
        "mobilePhone": "09564090382",
        "sourceRow": 572,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-INV002",
    "name": "INVISION IT DISTRIBUTION CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-INV002-573",
        "bpCode": "INV002",
        "address": "UNIT H G/F ACE CITI INDUSTRIAL TOWER 1 555 CARLOS PALANCA ST. BARANGAY 647 ZONE 067 1005 SAN MIGUEL",
        "federalTaxId": "740-900-840-00000",
        "contactPerson": "ANALYN CASAS",
        "sourceRow": 573,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ION001",
    "name": "IONTECH, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ION001-574",
        "bpCode": "ION001",
        "address": "ROOM 200 TIMBOL-SINGH BLDG 915 AURORA BLVD. COR. ALBANY ST. CUBAO QUEZON CITY 1109",
        "federalTaxId": "006-997-592-00000",
        "industry": "Retailer | Computer Peripherals/Parts/Accessories",
        "contactPerson": "Heidi Mariano",
        "position": "Sales",
        "mobilePhone": "639955823011",
        "email": "heidi_mariano@mailgateways.com",
        "status": "Incomplete",
        "sourceRow": 574,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          }
        }
      },
      {
        "id": "branch-ION003-NT-576",
        "bpCode": "ION003-NT",
        "address": "ROOM 200 TIMBOL-SINGH BLDG 915 AURORA BLVD. COR. ALBANY ST. CUBAO QUEZON CITY 1109",
        "federalTaxId": "006-997-592-00000",
        "industry": "Retailer | Computer Peripherals/Parts/Accessories",
        "contactPerson": "Heidi Mariano",
        "position": "Sales",
        "mobilePhone": "639955823011",
        "email": "heidi_mariano@mailgateways.com",
        "status": "Incomplete",
        "sourceRow": 576,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-ION002",
    "name": "IONE RESOURCES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ION002-575",
        "bpCode": "ION002",
        "address": "UNIT1006 THE CENTERPOINT CONDOMINIUM JULIA VARGAS AVE COR GARNET ROAD ORTIGAS CTR SAN ANTONIO PASIG",
        "federalTaxId": "216-322-579-00000",
        "sourceRow": 575,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ION004",
    "name": "IONTECH ENTERPRISE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ION004-577",
        "bpCode": "ION004",
        "address": "UNIT 316 CITY TOWER CONDOMINIUM 810 AURORA BLVD KAUNLARAN CUBAO 1111 QUEZON CITY NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "601-906-669-00000",
        "industry": "Wholesale, Retail",
        "contactPerson": "Jecery Envangelista",
        "position": "Account Executive",
        "mobilePhone": "6.39088E+11",
        "email": "jecery_evangelista@mailgateways.com",
        "status": "Incomplete",
        "sourceRow": 577,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          }
        }
      },
      {
        "id": "branch-ION005-NT-578",
        "bpCode": "ION005-NT",
        "address": "UNIT 316 CITY TOWER CONDOMINIUM 810 AURORA BLVD KAUNLARAN CUBAO 1111 QUEZON CITY NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "601-906-669-00000",
        "industry": "Wholesale, Retail",
        "contactPerson": "Jecery Envangelista",
        "position": "Account Executive",
        "mobilePhone": "6.39088E+11",
        "email": "jecery_evangelista@mailgateways.com",
        "status": "Incomplete",
        "sourceRow": 578,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-ION006",
    "name": "IONHEALTH SOLUTIONS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ION006-579",
        "bpCode": "ION006",
        "address": "UNIT 410 JMK BLDG WEST AVENUE BUNGAD QUEZON CITY",
        "federalTaxId": "771-675-945-00000",
        "sourceRow": 579,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IPS001",
    "name": "IPSYSTEMS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IPS001-580",
        "bpCode": "IPS001",
        "address": "UNIT 1004 ANTEL GLOBAL CORPORATE CENTER 3 JULIA VERGAS AVE ORTIGAS CENTER SAN ANTONIO PASIG",
        "federalTaxId": "006-335-547-00000",
        "sourceRow": 580,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IRI001",
    "name": "IRIDIUM TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IRI001-581",
        "bpCode": "IRI001",
        "address": "304 PASDA COMMERCIAL BLDG., ARANETA AVE., COR. P. FLORENTINO ST., SANTO DOMINGO, QUEZON CITY",
        "federalTaxId": "009-161-512-00000",
        "sourceRow": 581,
        "documents": {}
      },
      {
        "id": "branch-IRI001-NT-582",
        "bpCode": "IRI001-NT",
        "address": "304 PASDA COMMERCIAL BLDG., ARANETA AVE., COR. P. FLORENTINO ST.,",
        "federalTaxId": "009-161-512-00000",
        "contactPerson": "JANEEN",
        "sourceRow": 582,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-IRI002-NT",
    "name": "IRISH ANE PAOLA LORESTO CASTANEDA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-IRI002-NT-583",
        "bpCode": "IRI002-NT",
        "address": "ARK CONDOMINIUM 92 SIERRA MADRE ST. MANDALUYONG CITY",
        "federalTaxId": "000-323-838-849",
        "contactPerson": "IRISH ANE PAOLA LORESTO CASTANEDA",
        "sourceRow": 583,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ISA001",
    "name": "ISAGE COMMUNICATIONS PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ISA001-584",
        "bpCode": "ISA001",
        "address": "1014 #02-202 GEYLANG EAT AVE 3",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 584,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ISE001",
    "name": "ISECURE NETWORKS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ISE001-585",
        "bpCode": "ISE001",
        "address": "1402 JOLLIBEE CENTRE                    SAN MIGUEL AVENUE,                      SAN ANTONIO",
        "federalTaxId": "006-511-126-00000",
        "sourceRow": 585,
        "documents": {}
      },
      {
        "id": "branch-ISE002-NT-586",
        "bpCode": "ISE002-NT",
        "address": "1402 JOLLIBEE CENTRE",
        "federalTaxId": "006-511-126-00000",
        "sourceRow": 586,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ISP001-NT",
    "name": "ISPACE FURNISHING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ISP001-NT-587",
        "bpCode": "ISP001-NT",
        "address": "UNIT 03 G/F E-SQUARE ORTIGAS AVE GREENHILLS, SAN JUAN CITY",
        "federalTaxId": "008-093-108-000",
        "contactPerson": "LYKA SUMULAT",
        "mobilePhone": "09778250088",
        "sourceRow": 587,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ITA001-NT",
    "name": "ITAP CONVERGENCE ALLIANCE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ITA001-NT-588",
        "bpCode": "ITA001-NT",
        "address": "4/F VSK BLDG 2 ACACIA LANE MANDALUYONG CITY 1550",
        "federalTaxId": "243-862-370-000",
        "contactPerson": "JANINE LAUGO LIBREA",
        "sourceRow": 588,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ITD001",
    "name": "IT DEPOT INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ITD001-589",
        "bpCode": "ITD001",
        "address": "UNIT 201 2ND FLR SOTELO BUSINESS CENTER NO 695 QUIRINO AVE BRGY TAMBO",
        "federalTaxId": "008-864-225-00000",
        "sourceRow": 589,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ITG001",
    "name": "IT GROUP INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ITG001-590",
        "bpCode": "ITG001",
        "address": "15F HEXAGON CORPORATE CENTER 1471 BRGY. WEST TRIANGLE QUEZON CITY 1104",
        "federalTaxId": "224-343-697-000",
        "contactPerson": "JESSALYN CRUZ",
        "sourceRow": 590,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ITH001",
    "name": "ITHRIVE TECHNOLOGICAL SUPPLIES AND SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ITH001-591",
        "bpCode": "ITH001",
        "address": "RM26 2F UYBICO BLDG YULO ST PRESIDENT ROXAS ILOILO CITY",
        "federalTaxId": "493-824-879-00000",
        "sourceRow": 591,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ITI001-NT",
    "name": "I. T. INTERACTION PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ITI001-NT-592",
        "bpCode": "ITI001-NT",
        "address": "2ND FLOOR IBM PLAZA 8 EASTWOOD AVENUE, EASTWEST CITY CYBERPARK E. RODRIGUEZ JR AVE., 1110 LIBIS",
        "federalTaxId": "230-621-016-00000",
        "sourceRow": 592,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-J&C001",
    "name": "J & C OBENITA CONSTRUCTION OPC",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-J&C001-593",
        "bpCode": "J&C001",
        "address": "Talisay City Cebu",
        "federalTaxId": "602-865-132-00000",
        "contactPerson": "Joseph",
        "mobilePhone": "09256802797",
        "rawCategory": "Subcontructor",
        "sourceRow": 593,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-J&D001",
    "name": "J&D HARDWARE AND SOFTWARE SOLUTIONS CO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-J&D001-594",
        "bpCode": "J&D001",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 594,
        "documents": {}
      },
      {
        "id": "branch-JDH001-614",
        "bpCode": "JDH001",
        "address": "100 C REYMUNDO AVE MAYBUNGA",
        "federalTaxId": "009-210-567-00000",
        "sourceRow": 614,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-J31001-NT",
    "name": "J316. ONLINE STORE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-J31001-NT-595",
        "bpCode": "J31001-NT",
        "address": "CANUMAY VALENZUELA CITY",
        "federalTaxId": "290-666-730-00000",
        "contactPerson": "DAVID",
        "sourceRow": 595,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAG001",
    "name": "JAGUZ MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAG001-596",
        "bpCode": "JAG001",
        "address": "G/F UNIT #114 CITY MALL DAU ACCESS ROAD DAU MABALACAT PAMPANGA 2010",
        "federalTaxId": "916-761-752-00200",
        "sourceRow": 596,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAK001",
    "name": "JAKPRIME ENGINEERING SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAK001-597",
        "bpCode": "JAK001",
        "address": "J. CASIM BLDG 404 CURIE ST BRGY PALANAN MAKATI CITY",
        "federalTaxId": "614-101-626-00000",
        "sourceRow": 597,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAK002-NT",
    "name": "JAKE AND JAMES EDUCATIONAL TOUR SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAK002-NT-598",
        "bpCode": "JAK002-NT",
        "address": "LOT 3 N. SORIANO ST. VILLA DULALIA BANGA 2 BANGA 3020 CITY OF MEYCAUAYAN BULACAN",
        "federalTaxId": "238-114-245-000",
        "contactPerson": "JACKSON SARCIA ESTRADA",
        "mobilePhone": "09774750784",
        "sourceRow": 598,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAN001-NT",
    "name": "JANUS PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAN001-NT-599",
        "bpCode": "JAN001-NT",
        "address": "R. MAGSAYSAY BLVD., BRGY 593 ZONE 058 STAMESA MANILA",
        "federalTaxId": "121-079-501-00000",
        "sourceRow": 599,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAN002-NT",
    "name": "JAN MICHAEL LIM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAN002-NT-600",
        "bpCode": "JAN002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 600,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAN003",
    "name": "JAN A TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAN003-601",
        "bpCode": "JAN003",
        "address": "UNIT 9G GLODA BLDG 1157 CRAIG ST BARANGGAY 506 ZONE 0501008 SAMAPLOC NCR. CITY OF MANILA, FIRST DIST",
        "federalTaxId": "413-047-504-00000",
        "contactPerson": "YVONNE ANCHETA",
        "mobilePhone": "09183841314",
        "sourceRow": 601,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAR001",
    "name": "JARDINE ENERGY CONTROL COMPANY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAR001-602",
        "bpCode": "JAR001",
        "address": "GF JARDINE BLDG JM COMPOUND FARADAY ST COR PRES SARGIO OSMENA HIGHWAY",
        "federalTaxId": "005-618-676-00000",
        "sourceRow": 602,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAR001-NT",
    "name": "JARO, SALVACION IGNACIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAR001-NT-603",
        "bpCode": "JAR001-NT",
        "address": "LOWER BPI LAMAO 2103 LIMAY BATAAN PHILIPPINES",
        "federalTaxId": "480-326-529-00000",
        "contactPerson": "HAZEL",
        "sourceRow": 603,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAR002",
    "name": "JARG WEB DESIGN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAR002-604",
        "bpCode": "JAR002",
        "address": "007 FELIMON ST MIKESELL SUBD TALON V",
        "federalTaxId": "938-867-628-000NV",
        "sourceRow": 604,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAS001-NT",
    "name": "JASON BALAIS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAS001-NT-605",
        "bpCode": "JAS001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "271-112-197-00000",
        "sourceRow": 605,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAY001",
    "name": "JAYRAN TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAY001-606",
        "bpCode": "JAY001",
        "address": "18B 15TH AVENUE, MURPHY CUBAO, QUEZON CITY",
        "federalTaxId": "131-250-833-00000",
        "contactPerson": "michael",
        "sourceRow": 606,
        "documents": {}
      },
      {
        "id": "branch-JAY003-NT-609",
        "bpCode": "JAY003-NT",
        "address": "18B 15TH AVENUE, MURPHY CUBAO, QUEZON CITY",
        "federalTaxId": "131-250-833-00000",
        "sourceRow": 609,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAY001-NT",
    "name": "JAY REY RASONABE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAY001-NT-607",
        "bpCode": "JAY001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "158-191-051-00000",
        "sourceRow": 607,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JAY002-NT",
    "name": "JAY ARROYO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JAY002-NT-608",
        "bpCode": "JAY002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 608,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JBM001",
    "name": "JB MUSIC & SPORTS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JBM001-610",
        "bpCode": "JBM001",
        "address": "0076-0078 SM CITY ILOILO",
        "federalTaxId": "002-563-606-02200",
        "contactPerson": "AILYN",
        "mobilePhone": "+639128011092",
        "sourceRow": 610,
        "documents": {}
      },
      {
        "id": "branch-JBM001-NT-611",
        "bpCode": "JBM001-NT",
        "address": "0076-0078 SM CITY ILOILO",
        "federalTaxId": "002-563-606-02200",
        "sourceRow": 611,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JBS001-NT",
    "name": "JBS WORLDWIDE EXPRESS SYSTEM INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JBS001-NT-612",
        "bpCode": "JBS001-NT",
        "address": "4341-A CLIPPER AVE., BAYVIEW VILLAGE TAMBO PARANAQUE CITY",
        "federalTaxId": "001-008-798-00000",
        "sourceRow": 612,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JCC001-NT",
    "name": "JC CORDIAL",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JCC001-NT-613",
        "bpCode": "JCC001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "294-507-586-00000",
        "sourceRow": 613,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JDL001",
    "name": "JDL SECURITY SYSTEMS TECHNOLOGY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JDL001-615",
        "bpCode": "JDL001",
        "address": "201 RLC BLDG SOBRECAREY ST COR STA ANA AVE",
        "federalTaxId": "480-229-246-00000",
        "sourceRow": 615,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JED001-NT",
    "name": "JEDAN'S HOUSEHOLD AND CONSTRUCTION SUPPLIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JED001-NT-616",
        "bpCode": "JED001-NT",
        "address": "Cebu City",
        "federalTaxId": "348-023-924-00000",
        "contactPerson": "Jedan",
        "mobilePhone": "1",
        "sourceRow": 616,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JEO001-NT",
    "name": "JEON SOFTWARE INFORMATION SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JEO001-NT-617",
        "bpCode": "JEO001-NT",
        "address": "564-A3 QUIRINO HIGHWAY, TALIPAPA NOVALICHES QUEZON CITY",
        "federalTaxId": "443-616-025-00000",
        "sourceRow": 617,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JER001-NT",
    "name": "JERRICO SANCHEZ",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JER001-NT-618",
        "bpCode": "JER001-NT",
        "federalTaxId": "293-607-793-00000",
        "sourceRow": 618,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JER002-NT",
    "name": "JERICO OBICO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JER002-NT-619",
        "bpCode": "JER002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 619,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JER003-NT",
    "name": "JERLYN RAMOS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JER003-NT-620",
        "bpCode": "JER003-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 620,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JES001-NT",
    "name": "JESELY MAGALONG BAUTISTA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JES001-NT-621",
        "bpCode": "JES001-NT",
        "address": "3495 D. BONIFACIO ST FORTUNE DRIVE CANUMAY EAST (CANUMAY)1447 CITY OF VALENZUELA NCR THIRD DISTRICT",
        "federalTaxId": "290-666-730-00000",
        "sourceRow": 621,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JES002-NT",
    "name": "JESA MANAGEMENT CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JES002-NT-622",
        "bpCode": "JES002-NT",
        "address": "CENTURY PLAZA, JUANA OSMENA ST., CEBU CITY",
        "federalTaxId": "000-950-169-00000",
        "sourceRow": 622,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JES003",
    "name": "JESSAN ABITANG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JES003-623",
        "bpCode": "JES003",
        "address": "2157 REVELINO ST. , BRGY 780 SANTA ANA MANILA",
        "federalTaxId": "218-358-863-00000",
        "sourceRow": 623,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JKC001-NT",
    "name": "JK COMMERCE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JKC001-NT-624",
        "bpCode": "JKC001-NT",
        "address": "3/F U-310 BJS BLDG 1869 P DOMINGO ST KASILAWAN MAKATI CITY",
        "federalTaxId": "008-165-412-00000",
        "sourceRow": 624,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JLN001-NT",
    "name": "GALLARDO, JULIEANA MARTINEZ",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JLN001-NT-625",
        "bpCode": "JLN001-NT",
        "address": "SALCEDO ST. BARANGAY III 2700 VIGAN CITY, ILOCOS SUR",
        "federalTaxId": "698-824-947-00000",
        "contactPerson": "GALLARDO, JULIEANA",
        "sourceRow": 625,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JMC001",
    "name": "JMC MASTER BUILDERS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JMC001-626",
        "bpCode": "JMC001",
        "address": "5061 A. LIM ST., BAGONG BAYAN SUBD., CUTCUT, ANGELES CITY, PAMPANGA",
        "federalTaxId": "009-990-375-00000",
        "sourceRow": 626,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JNJ001-NT",
    "name": "J & J CONSUMER GOODS TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JNJ001-NT-627",
        "bpCode": "JNJ001-NT",
        "address": "1737H DIAN COR DAYAP ST BRGY PALANAN MAKATI CTY",
        "federalTaxId": "205-681-388-00000",
        "contactPerson": "JOY CUSTODIO",
        "sourceRow": 627,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOB001-NT",
    "name": "JOBSTREET.COM PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOB001-NT-628",
        "bpCode": "JOB001-NT",
        "address": "23RD FLOOR ALLIANCE GLOBAL TOWER 36TH ST CORNER 11TH AVENUE UPTOWN BONIFACIO FOR BONIFACIO 1634 TAGU",
        "federalTaxId": "204-013-048-00000",
        "sourceRow": 628,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOE001-NT",
    "name": "JOEVANIE MONTALBAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOE001-NT-629",
        "bpCode": "JOE001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 629,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOE002-NT",
    "name": "JOEKELCEE TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOE002-NT-630",
        "bpCode": "JOE002-NT",
        "address": "634 JRA COMPOUND, LUPANG PARI,",
        "federalTaxId": "485-701-559-00000",
        "sourceRow": 630,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOE003-NT",
    "name": "JOEYDEL GENERAL MERCHANDISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOE003-NT-631",
        "bpCode": "JOE003-NT",
        "address": "STALL # A-26 G/F DRAGON 8 SHOPPING CENTER DAGUPAN ST COR C M RECTO AVE",
        "federalTaxId": "296-015-589-00000",
        "sourceRow": 631,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOH001-NT",
    "name": "JOHN KEITH FRANCISCO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOH001-NT-632",
        "bpCode": "JOH001-NT",
        "federalTaxId": "273-028-199-00000",
        "sourceRow": 632,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOM001-NT",
    "name": "JOMEL BOCALBOS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOM001-NT-633",
        "bpCode": "JOM001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "307-251-666-00000",
        "sourceRow": 633,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JON001",
    "name": "JONATHAN BONITO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JON001-634",
        "bpCode": "JON001",
        "federalTaxId": "000-000-000-00002",
        "sourceRow": 634,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JON002-NT",
    "name": "JONATHAN ROXAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JON002-NT-635",
        "bpCode": "JON002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 635,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOR001",
    "name": "JORGE QUIAMBAO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOR001-636",
        "bpCode": "JOR001",
        "address": "2878 ZAMORA ST., PASAY CITY",
        "federalTaxId": "000000000000000",
        "contactPerson": "JORGE QUIAMBAO",
        "sourceRow": 636,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JOS001-NT",
    "name": "JOSEPH M. MADIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JOS001-NT-637",
        "bpCode": "JOS001-NT",
        "address": "4408B DALLAS COR EVANGELISTA ST. BANGKAL, MAKATI CITY 1233 NCR 4TH DIST PHILIPPINES",
        "federalTaxId": "751-512-183-00000",
        "contactPerson": "NORA CHENG",
        "mobilePhone": "09054165401",
        "sourceRow": 637,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JPB001-NT",
    "name": "JP BAJARO ENTERPRISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JPB001-NT-638",
        "bpCode": "JPB001-NT",
        "address": "129-C MANALO ST., CORNER MARIANO MARCOS ST., BRGY. MAYTUNAS,",
        "federalTaxId": "259-225-658-00000",
        "sourceRow": 638,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JTP001",
    "name": "JT PHOTOWORLD, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JTP001-639",
        "bpCode": "JTP001",
        "address": "1434 GENERAL LUNA ST., BRGY 673 ZONE 73 PACO",
        "federalTaxId": "237-822-495-00000",
        "sourceRow": 639,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JUL001-NT",
    "name": "JULIUS AVERGONZADO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JUL001-NT-640",
        "bpCode": "JUL001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "201-200-315-00000",
        "sourceRow": 640,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JUL002-NT",
    "name": "JULIE ANN TY LIM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JUL002-NT-641",
        "bpCode": "JUL002-NT",
        "address": "723 A R HIDALGO ST",
        "federalTaxId": "292-970-672-00000",
        "sourceRow": 641,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-JUMP001",
    "name": "JUMP SOLUTIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-JUMP001-642",
        "bpCode": "JUMP001",
        "address": "602 TOWER 1 EAST BEL AIR RESIDENCES FELIX AVE SAN ISIDRO CAINTA RIZAL 1900 PHILIPPINES",
        "federalTaxId": "007-975-846-000",
        "contactPerson": "Rachel Cassandra Balbas-Damian",
        "email": "coordinator@steadfast.com.ph",
        "sourceRow": 642,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KAP001-NT",
    "name": "KAPPER INDUSTRIES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KAP001-NT-643",
        "bpCode": "KAP001-NT",
        "address": "132-A G/F J. BORROMEO & SONS BLDG., F. RAMOS ST., CEBU",
        "federalTaxId": "448-460-866-000",
        "contactPerson": "CHONA MAITEM",
        "sourceRow": 643,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KAR001",
    "name": "KARNANI INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KAR001-644",
        "bpCode": "KAR001",
        "address": "1690 KARNANI BLDG MALABON ST NEAR COR F. HUERTAS",
        "federalTaxId": "202-614-646-00000",
        "sourceRow": 644,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KAR001-NT",
    "name": "KART PLAZA MANUFACTURING CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KAR001-NT-645",
        "bpCode": "KAR001-NT",
        "address": "YAMAHA BLDG 43 SEN GIL PUYAT AVE",
        "federalTaxId": "007-027-297-00100",
        "sourceRow": 645,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KAS001-NT",
    "name": "KASILE HILLS RESORT INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KAS001-NT-646",
        "bpCode": "KAS001-NT",
        "address": "PUROK 4 CASILE CABUYAO CITY LAGUNA 4025 PHILIPPINES",
        "federalTaxId": "010-516-393-00000",
        "contactPerson": "CENTHEENA MANZANO",
        "sourceRow": 646,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KAT001-NT",
    "name": "KATRINA BARRACA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KAT001-NT-647",
        "bpCode": "KAT001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 647,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KEN001-NT",
    "name": "KENNETH DIONGON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KEN001-NT-648",
        "bpCode": "KEN001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "242-422-921-00000",
        "sourceRow": 648,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KEY003",
    "name": "KEYRUS EPM PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KEY003-649",
        "bpCode": "KEY003",
        "address": "Unit 404, Vicente Madrigal Building 6793 Ayala Avenue, Makati City, Philippines 1226.",
        "federalTaxId": "101-852-583-00000",
        "contactPerson": "Raymond Zhang",
        "sourceRow": 649,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KHA001-NT",
    "name": "AL-KHALIFA, HASSEIN TUMAMBING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KHA001-NT-650",
        "bpCode": "KHA001-NT",
        "address": "51 ILANG-ILANG STREET SAN PEDRO IX BAGBAG 1116 QUEZON CITY NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "675-820-544-00000",
        "contactPerson": "ZYRA G MATALANG",
        "sourceRow": 650,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KIL001",
    "name": "KILOWATT INDUSTRIAL TRADING AND SERVICES CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KIL001-651",
        "bpCode": "KIL001",
        "address": "30 LA MANCHA ST RANCHO IV WEST CINCEPCION DOS",
        "federalTaxId": "009-342-577-00000",
        "sourceRow": 651,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KIM001-NT",
    "name": "KIMBERLY ROSALES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KIM001-NT-652",
        "bpCode": "KIM001-NT",
        "federalTaxId": "436-650-250-00000",
        "sourceRow": 652,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KIM002-NT",
    "name": "KIM7 RUBBER PRODUCTS TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KIM002-NT-653",
        "bpCode": "KIM002-NT",
        "address": "3115 GARCIA ST BANGKAL 1233 CITY OF MAKATI, NCR FOURTH DISTRIC PHILIPPINES",
        "federalTaxId": "766-194-404-00000",
        "contactPerson": "CHARISSE JUMAWAN",
        "sourceRow": 653,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KIN001",
    "name": "KINSOYO INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KIN001-654",
        "bpCode": "KIN001",
        "address": "UNIT 301, 93 BENITEZ STREET, KAUNLARAN CUBAO, 1111 QUEZON CITY NCR 2ND DISTRICT PHILIPPINES",
        "federalTaxId": "631-320-242-00000",
        "contactPerson": "NameL Eunnie Mabano",
        "sourceRow": 654,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KIN003-NT",
    "name": "KINGS QUEENS DEVELOPMENT BOWLING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KIN003-NT-655",
        "bpCode": "KIN003-NT",
        "address": "5F 6F LASEMA BLDG 8846 SAMPALOC CORNER ESTRELLA STS SAN ANTONIO  1203 MAKATI CITY",
        "federalTaxId": "010-822-887-00000",
        "contactPerson": "MARY ANN FERNANDEZ",
        "sourceRow": 655,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KIO001",
    "name": "KIOSK AND INFORMATION TECHNOLOGY SYSTEM INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KIO001-656",
        "bpCode": "KIO001",
        "address": "SANTOLAN PASIG",
        "federalTaxId": "627-544-561-00000",
        "contactPerson": "STEPHANIE",
        "sourceRow": 656,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KOE001",
    "name": "KOENIG SOLUTIONS PRIVATE LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KOE001-657",
        "bpCode": "KOE001",
        "address": "30 CECIL STREET, #19-08 PRUDENTIAL TOWER, SINGAPORE 049712",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "DAVID SHADRACH",
        "sourceRow": 657,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KOF001",
    "name": "KOFAX SINGAPORE PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KOF001-658",
        "bpCode": "KOF001",
        "address": "9 RAFFLES PLACE #53-01 REPUBLIC PLAZA 1",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 658,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KOW001",
    "name": "KOWDTECH CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KOW001-659",
        "bpCode": "KOW001",
        "address": "UNIT 4301 43/F ONE SAN MIGUEL AVENUE BLDG.",
        "federalTaxId": "010-313-417-00000",
        "sourceRow": 659,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KRY001",
    "name": "KRYTERION INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KRY001-660",
        "bpCode": "KRY001",
        "address": "WEST SUITE 200",
        "federalTaxId": "86-0940055",
        "sourceRow": 660,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-KTA001",
    "name": "KTA COMPUTER PARTS AND ACCESSORIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-KTA001-661",
        "bpCode": "KTA001",
        "address": "4TH FLOOR MEGAMALL BUILDING B COR DONA JULIA VARGAS AVE. ORTIGAS CENTER, MANDALUYONG CITY",
        "federalTaxId": "178-736-738-00000",
        "sourceRow": 661,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAE001",
    "name": "LA EURO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAE001-662",
        "bpCode": "LAE001",
        "address": "29 DON C MANUEL LA LOMA BRGY SALVACION QUEZON CITY",
        "federalTaxId": "779-636-862-000",
        "sourceRow": 662,
        "documents": {}
      },
      {
        "id": "branch-LAE001-NT-663",
        "bpCode": "LAE001-NT",
        "address": "29 DON C MANUEL LA LOMA BRGY SALVACION QUEZON CITY",
        "federalTaxId": "779-636-862-000",
        "contactPerson": "NAME",
        "sourceRow": 663,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAN001",
    "name": "LANTRONIX SYSTEM, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAN001-664",
        "bpCode": "LAN001",
        "address": "UNIT 511 CITYLAND SHAW TOWER ST FRANCIS COR SHAW BLVD",
        "federalTaxId": "221-368-719-00000",
        "sourceRow": 664,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAO001",
    "name": "LAOGAN TECHNOLOGIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAO001-665",
        "bpCode": "LAO001",
        "address": "RM. 302 KIM SIU CHING BLDG.             473 STO. CRISTO ST.",
        "federalTaxId": "172-881-025-00000",
        "sourceRow": 665,
        "documents": {}
      },
      {
        "id": "branch-LAO001-NT-666",
        "bpCode": "LAO001-NT",
        "address": "RM. 302 KIM SIU CHING BLDG.         473 STO. CRISTO ST.",
        "federalTaxId": "172-881-025-00000",
        "contactPerson": "DOMINIC LAO",
        "sourceRow": 666,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAP001",
    "name": "LAPTOP PC-OUTLET (LPO), OPC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAP001-667",
        "bpCode": "LAP001",
        "address": "3011 GEN. T. DE LEON RD., HEN. T. DE LEON 1442 CITY OF VALENZUELA NCR",
        "federalTaxId": "779-009-371-00000",
        "sourceRow": 667,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAR001-NT",
    "name": "LARESIO LAKESIDE RESORT AND SPA INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAR001-NT-668",
        "bpCode": "LAR001-NT",
        "address": "ALVIAR COMPOUND PUROK 1-D BRGY TADLAC LOS BANOS LAGUNA 4020",
        "federalTaxId": "008-993-951-000",
        "contactPerson": "Joseph Carmelo Lunod Jr",
        "sourceRow": 668,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAS001",
    "name": "LastPass Ireland Limited",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAS001-669",
        "bpCode": "LAS001",
        "address": "L19, 20 Martin Place",
        "federalTaxId": "000000000000000",
        "contactPerson": "Alex",
        "mobilePhone": "61272287054",
        "sourceRow": 669,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAS001-NT",
    "name": "LA SALLE GREENHILLS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAS001-NT-670",
        "bpCode": "LAS001-NT",
        "address": "ORTIGAS AVE MANDALUYONG CITY",
        "federalTaxId": "000-184-430-00000",
        "industry": "EDUCATION",
        "contactPerson": "MARIA CARMELA BONCODIN",
        "email": "george@lsgh.edu.ph",
        "sourceRow": 670,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LAZ001",
    "name": "LAZADA PHILIPPINES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LAZ001-671",
        "bpCode": "LAZ001",
        "address": "ONLINE SHOPPING",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 671,
        "documents": {}
      },
      {
        "id": "branch-LAZ002-NT-672",
        "bpCode": "LAZ002-NT",
        "address": "ONLINE SHOPPING",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 672,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LBP001",
    "name": "LBPASCUAL INFORMATION TECHNOLOGY SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LBP001-673",
        "bpCode": "LBP001",
        "address": "PENTHOUSE TOWNES INC BLDG 916 A ARNAIZ AVE BRGY SAN LORENZO MAKATI CITY",
        "federalTaxId": "212-285-874-00000",
        "sourceRow": 673,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LCA001-NT",
    "name": "L.CARLOS FLORIST INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LCA001-NT-674",
        "bpCode": "LCA001-NT",
        "address": "G/F C&R BLDG. 1478 TAFT AVE. BRGY. 676 ZONE 073, ERMITA MANILA",
        "federalTaxId": "000-356-164-00000",
        "sourceRow": 674,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEA001-NT",
    "name": "LEAN REAGAN GONZALES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEA001-NT-675",
        "bpCode": "LEA001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "223-736-353-00000",
        "sourceRow": 675,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEC001",
    "name": "LEC STEEL MFG CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEC001-676",
        "bpCode": "LEC001",
        "address": "A BONIFACIO AVE COR LIGAYA ST BALINTAWAK",
        "federalTaxId": "004-722-058-00000",
        "sourceRow": 676,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEN001",
    "name": "LENOTECH CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEN001-677",
        "bpCode": "LEN001",
        "address": "148 MILAGROS ST BRGY ERMITAÑO SAN JUAN CITY SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "006-982-257-00000",
        "sourceRow": 677,
        "documents": {}
      },
      {
        "id": "branch-LEN001-NT-678",
        "bpCode": "LEN001-NT",
        "address": "UNIT 106 #160 ALFONSO XIII",
        "federalTaxId": "006-982-257-00000",
        "contactPerson": "MAY ALVARO",
        "sourceRow": 678,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEN002",
    "name": "LENOVO GLOBAL TECHNOLOGY (PHILIPPINES) INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEN002-679",
        "bpCode": "LEN002",
        "address": "10F 11 CORPORATE CENTER 11TH AVE CORNER TRIANGLE DRIVE BONICAFIO GLOBAL CITY TAGUIG CITY",
        "federalTaxId": "008-774-449-00000",
        "sourceRow": 679,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEN004",
    "name": "LENOVO PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEN004-680",
        "bpCode": "LEN004",
        "address": "10f / 11TH CORPORATE CENTER 11TH AVE. CORNER TRIANGLE DRIEV BONIFACIO GLOBAL CITY, FORT BONIFACIO,",
        "federalTaxId": "010-251-154-00000",
        "contactPerson": "CHRISTIAN FRANCISCO",
        "sourceRow": 680,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEO001-NT",
    "name": "LEO JOHN ALLEN BONILLA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEO001-NT-681",
        "bpCode": "LEO001-NT",
        "federalTaxId": "353-560-031-00000",
        "sourceRow": 681,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LET001-NT",
    "name": "LETSDEFEND INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LET001-NT-682",
        "bpCode": "LET001-NT",
        "address": "13873 PARK CENTER RD SUITE 155-23 HERNDRON VA 20171",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "CONTACT",
        "mobilePhone": "7035956310",
        "sourceRow": 682,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEX001-NT",
    "name": "LEX  BERNARD MIRANDA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEX001-NT-683",
        "bpCode": "LEX001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "177-274-956-00000",
        "sourceRow": 683,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEX002",
    "name": "LEXSYS TECHNOLOGIES INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEX002-684",
        "bpCode": "LEX002",
        "address": "UNIT 6 LM FUTURE POINT PLAZA 3 222 PANAY AVENUE SOUTH TRIANGLE QUEZON CITY",
        "federalTaxId": "223-044-198-00000",
        "sourceRow": 684,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEX002-NT",
    "name": "LEXIE WOOD ENTERPRISE OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEX002-NT-685",
        "bpCode": "LEX002-NT",
        "address": "L15 B16 AMARILLO STREET UPS 4 MARCELO GREEN VILLAGE 1700 CITY OF PARANAQUE NCR FOURTH DISTRICT",
        "federalTaxId": "606-238-934-00000",
        "contactPerson": "FAITH LAMSIS",
        "mobilePhone": "0917175300877",
        "sourceRow": 685,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LEX004-NT",
    "name": "LEXUS MANILA INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LEX004-NT-686",
        "bpCode": "LEX004-NT",
        "address": "3402 8TH AVENUE CORNER 34TH STREET, FORT BONIFACIO, TAGUIG CITY",
        "federalTaxId": "007-077-663-00000",
        "contactPerson": "JOSEPH DEQUINA",
        "sourceRow": 686,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LGE001",
    "name": "POLINAR, LUCILO DISPO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LGE001-687",
        "bpCode": "LGE001",
        "address": "177 J RUIZ ST. SALAPAN SAN JUAN CITY",
        "federalTaxId": "121-460-034-00000",
        "sourceRow": 687,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LIM001-NT",
    "name": "LIMBO, ERWIN MACAGALING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LIM001-NT-688",
        "bpCode": "LIM001-NT",
        "address": "BLK 7 DUBAI ST. SANTA ANA 1920 TAYTAY RIZAL PHILIPPINES",
        "federalTaxId": "395-774-316-00000",
        "contactPerson": "LIMBO, ERWIN MACAGALING",
        "sourceRow": 688,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LIN001-NT",
    "name": "LINEFINE PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LIN001-NT-689",
        "bpCode": "LIN001-NT",
        "address": "ZONE 041 BRGY 404",
        "federalTaxId": "243-410-264-00000",
        "sourceRow": 689,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LIS003-NT",
    "name": "THE LISTENING ROOM SIGHT AND SOUND STEREO SALES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LIS003-NT-690",
        "bpCode": "LIS003-NT",
        "address": "3/F SMM 315 SM ORTIGAS COMPLEX",
        "federalTaxId": "241-157-952-00000",
        "contactPerson": "LISTENING",
        "mobilePhone": "09959777222",
        "sourceRow": 690,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LIT001-NT",
    "name": "LITE XPRESS INTERNATIONAL INC",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-LIT001-NT-691",
        "bpCode": "LIT001-NT",
        "address": "NO.21 NATIB ST., BRGY KAUNLARAN CUABAO QUEZON CITY",
        "federalTaxId": "225-007-164-00000",
        "rawCategory": "Courier-NT",
        "sourceRow": 691,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LOC001-NT",
    "name": "LOCKTON PHILIPPINES INSURANCE & REINSURANCE BROKER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LOC001-NT-692",
        "bpCode": "LOC001-NT",
        "address": "29F RUFINO PACIFIC TOWER 6784 AYALA AVENUE LEGASPI VILLAGE, MAKATI PHILIPPINES",
        "federalTaxId": "003-832-821-00000",
        "sourceRow": 692,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LOG001",
    "name": "LOGMEIN IRELAND UNLIMITED COMPANY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LOG001-693",
        "bpCode": "LOG001",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 693,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LOP001-NT",
    "name": "LOPEZ, ABEGAIL LLYN CALMA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LOP001-NT-694",
        "bpCode": "LOP001-NT",
        "address": "114 ARAMISMIS STREET BRGY VETERANS VILLAGE  QUEZON CITY",
        "federalTaxId": "727-951-979-00000",
        "contactPerson": "ABEGAIL LOPEZ",
        "sourceRow": 694,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LOR001-NT",
    "name": "LORDAN CARREON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LOR001-NT-695",
        "bpCode": "LOR001-NT",
        "address": "22 INT PAG-ASA ST BRGY PAG-ASA",
        "federalTaxId": "248-866-427-00000",
        "sourceRow": 695,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LRX001-NT",
    "name": "LARX TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LRX001-NT-696",
        "bpCode": "LRX001-NT",
        "address": "4/F SM MEGAMALL J. VARGAS, GREENHILLS EAST, BRGY WACK WACK",
        "federalTaxId": "217-918-971-002",
        "contactPerson": "LARX",
        "mobilePhone": "000",
        "sourceRow": 696,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LSI001",
    "name": "LSI LEADING TECHNOLOGIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LSI001-697",
        "bpCode": "LSI001",
        "address": "4842 VALENZUELA ST.                     ZONE 060 BRGY. 603 SAMPALOC",
        "federalTaxId": "007-856-931-00000",
        "sourceRow": 697,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LTS005-NT",
    "name": "L T S LUGGAGE TRADING & SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LTS005-NT-698",
        "bpCode": "LTS005-NT",
        "address": "2ND, 3RD & 6TH FLOORS PRIMERSTAR CENTER 2282 LEON GUINTO STREET BRGY. 7-4 ZONE 079 MALATE MANILA",
        "federalTaxId": "000-338-129-00000",
        "industry": "OTHERS",
        "contactPerson": "CHRISTIAN MIKAEL CENAROSA",
        "email": "NA",
        "sourceRow": 698,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LUC001",
    "name": "LUCKY CHARM EXPRESS MOVERS INC.",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-LUC001-699",
        "bpCode": "LUC001",
        "address": "UNIT 1 DON BOSCO YOUTH CENTER ROAD 10 BLVD. BRGY. 116 TPNDO, MANILA",
        "federalTaxId": "008-553-087-000",
        "contactPerson": "RUBEN R. RAYMUNDO",
        "mobilePhone": "09273210948",
        "rawCategory": "Courier",
        "sourceRow": 699,
        "documents": {}
      },
      {
        "id": "branch-LUC001-NT-700",
        "bpCode": "LUC001-NT",
        "address": "UNIT 1 DON BOSCO YOUTH CENTER ROAD 10 BLVD. BRGY. 116 TPNDO, MANILA",
        "federalTaxId": "008-553-087-000",
        "contactPerson": "RUBEN R. RAYMUNDO",
        "mobilePhone": "09273210948",
        "rawCategory": "Courier-NT",
        "sourceRow": 700,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LUC001V",
    "name": "LUCAS, FREDERICK MATIAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LUC001V-701",
        "bpCode": "LUC001V",
        "address": "BLK 38 LOT 2 PH3, AFPOVAI WESTERN BICUTAN TAGUIG CITY",
        "federalTaxId": "178-973-870-00000",
        "contactPerson": "ERICK LUCAS",
        "sourceRow": 701,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LUF001-NT",
    "name": "LUFU DESIGN CENTER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LUF001-NT-702",
        "bpCode": "LUF001-NT",
        "address": "450 T PINPIN ST BRGY 290 ZONE 27 BINONDO MANILA",
        "federalTaxId": "113-579-437-00000",
        "sourceRow": 702,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LUX001",
    "name": "LUXONIS HOLDING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LUX001-703",
        "bpCode": "LUX001",
        "address": "1942 Broadway St., Boulder, CO, 80302, United State",
        "federalTaxId": "010-000-000-00000",
        "contactPerson": "Vendula Kristanova",
        "sourceRow": 703,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-LYL001-NT",
    "name": "LYLE ANTHONY VILLAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-LYL001-NT-704",
        "bpCode": "LYL001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "252-617-712-00000",
        "sourceRow": 704,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAC001",
    "name": "MACINTOSH FIRE SUPPRESSION INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAC001-705",
        "bpCode": "MAC001",
        "address": "63 VIRGINIA DRIVE, RODRIGUEZ SUBD.      BAESA",
        "federalTaxId": "008-505-270-00000",
        "sourceRow": 705,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAC002",
    "name": "MACROLOGIC DIVERSIFIED TECHNOLOGIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAC002-706",
        "bpCode": "MAC002",
        "address": "3F MACROLOGIC CORPORATE CENTER 9054 MOLINO ROAD III BACOOR",
        "federalTaxId": "008-290-765-00000",
        "sourceRow": 706,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAC003",
    "name": "MACYS PHOTO VIDEO STORE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAC003-707",
        "bpCode": "MAC003",
        "address": "F14 APM SHOPPING MALL A SORIANO AVENUE NRA MABOLO CEBU CITY",
        "federalTaxId": "232-641-355-00000",
        "sourceRow": 707,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAF001-NT",
    "name": "MA. FAYE JUMAYAO - LEAL",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAF001-NT-708",
        "bpCode": "MAF001-NT",
        "federalTaxId": "934-668-853-00000",
        "sourceRow": 708,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAG001-NT",
    "name": "MAGELLAN SOLUTIONS OUTSOURCING INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAG001-NT-709",
        "bpCode": "MAG001-NT",
        "address": "PB MEZZANINE FLOOR, SUMMIT ONE TOWER 530 SHAW BOULEVARD,",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 709,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAJ001",
    "name": "MAJOR SHOPPING MANAGEMENT, CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAJ001-710",
        "bpCode": "MAJ001",
        "address": "SM MEGAMALL BLDG. EDSA CORNER WACK-WACK",
        "federalTaxId": "000-057-799-000",
        "contactPerson": "BILL TO",
        "sourceRow": 710,
        "documents": {}
      },
      {
        "id": "branch-MAJ001-NT-711",
        "bpCode": "MAJ001-NT",
        "address": "SM MEGAMALL BLDG. EDSA CORNER WACK-WACK",
        "federalTaxId": "000-057-799-000",
        "contactPerson": "BILL TO",
        "sourceRow": 711,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAL001-NT",
    "name": "MALAYAN EDUCATION SYSTEM, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAL001-NT-712",
        "bpCode": "MAL001-NT",
        "address": "MURALLA STREET BRGY 658 INTRAMUROS NCR CITY OF MANILA",
        "federalTaxId": "000-787-353-00000",
        "sourceRow": 712,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAL002",
    "name": "MALIBAGO, JOSE JR. BINAR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAL002-713",
        "bpCode": "MAL002",
        "address": "Brgy. 76 Fatima, Real St., Tacloban City",
        "federalTaxId": "923-816-016-000",
        "contactPerson": "JOSE  MALIBAGO JR",
        "mobilePhone": "09088957580",
        "email": "mj_interior_solutions@yahoo.com",
        "sourceRow": 713,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAL005-NT",
    "name": "MALAYAN INSURANCE CO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAL005-NT-714",
        "bpCode": "MAL005-NT",
        "address": "4F YUCHENGCO TOWER 1 NO 500 QUINTIN PAREDES ST BRGY 289 1006 BINONDO CITY OF MANILA",
        "federalTaxId": "000-333-534-00000",
        "contactPerson": "MIMI",
        "sourceRow": 714,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAM001",
    "name": "MAMMOTH ELECTRONIC GADGETS NC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAM001-715",
        "bpCode": "MAM001",
        "address": "UNIT B66 2ND LEVEL FESTIVE WALK MALL",
        "federalTaxId": "008-656-575-00100",
        "sourceRow": 715,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN001",
    "name": "MANTRADE DEVELOPMENT CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN001-716",
        "bpCode": "MAN001",
        "address": "9 SHAW BLVD., MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 716,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN001-NT",
    "name": "MANDALUYONG AUTO SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN001-NT-717",
        "bpCode": "MAN001-NT",
        "address": "9 SHAW BLVD., MANDALUYONG CITY",
        "federalTaxId": "100-050-650-00000",
        "sourceRow": 717,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN002-NT",
    "name": "MANUEL NOEL CHARLES MONDEJAR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN002-NT-718",
        "bpCode": "MAN002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 718,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN003-NT",
    "name": "MANILA HOTEL CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN003-NT-719",
        "bpCode": "MAN003-NT",
        "address": "THE MANILA HOTEL 1 RIZAL PARK, ERMITA",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 719,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN004",
    "name": "MANILA ETECH CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN004-720",
        "bpCode": "MAN004",
        "address": "UNIT 304 3F NKS BUILDING NO 4 ILLINOIS ST SILANGAN 1102 QUEZON CITY NCR SECOND DISTRICT",
        "federalTaxId": "008-686-048-00000",
        "sourceRow": 720,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN004-NT",
    "name": "MANALO, MA. RUBINA GELACIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN004-NT-721",
        "bpCode": "MAN004-NT",
        "address": "B2 L4 PISCES ST. CAMACHO 2 NANGKA 1808, MARIKINA CITY",
        "federalTaxId": "474-639-459-00001",
        "contactPerson": "MA. RUBINA MANALO",
        "sourceRow": 721,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN005-NT",
    "name": "MANILA WATER COMPANY, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN005-NT-722",
        "bpCode": "MAN005-NT",
        "address": "MAYFLOWER COR UNITED ST., BRGY HIGHWAY HILLS, MANDALUYONG CITY",
        "federalTaxId": "005-038-428-002",
        "contactPerson": "MANILA WATER",
        "sourceRow": 722,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN006-NT",
    "name": "MANUEL, LEONILO MORALEJO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN006-NT-723",
        "bpCode": "MAN006-NT",
        "address": "1001 LOTE DULONG BAYAN POBLACION STA MARIA BULACAN 3022",
        "federalTaxId": "243-911-334-000",
        "contactPerson": "LEONILO MANUEL",
        "sourceRow": 723,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAN009-NT",
    "name": "THE MANUFACTURERS  LIFE INSURANCE CO. (PHILS) INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAN009-NT-724",
        "bpCode": "MAN009-NT",
        "address": "5/F-10-F NEXT TOWER 6786 AYALA AVENUE BRGY SAN LORENZO MAKATI CITY",
        "federalTaxId": "201-492-591-000",
        "contactPerson": "A",
        "sourceRow": 724,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR001",
    "name": "MARTCOM CELLULAR & ELECTRONICS CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR001-725",
        "bpCode": "MAR001",
        "address": "615 SALES ST. QUIAPO MANILA",
        "federalTaxId": "172-607-689-00000",
        "contactPerson": "BETTY",
        "mobilePhone": "09175644767",
        "sourceRow": 725,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR001-NT",
    "name": "MARICEL VALENCIA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR001-NT-726",
        "bpCode": "MAR001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "706-246-662-00000",
        "sourceRow": 726,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR002-NT",
    "name": "MARK TY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR002-NT-727",
        "bpCode": "MAR002-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "169-969-891-00000",
        "sourceRow": 727,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR003-NT",
    "name": "MARKSTER ENTERPRISES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR003-NT-728",
        "bpCode": "MAR003-NT",
        "address": "RM 405 ABLAZA BLDG 117 E RODRIGUEZ TATALON QUEZON CITY",
        "federalTaxId": "246-756-839-00000",
        "sourceRow": 728,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR004-NT",
    "name": "MARSHAL VILLALINO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR004-NT-729",
        "bpCode": "MAR004-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "925-874-246-00000",
        "sourceRow": 729,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR005-NT",
    "name": "MARK ANDREW CANLAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR005-NT-730",
        "bpCode": "MAR005-NT",
        "federalTaxId": "284-165-051-00000",
        "sourceRow": 730,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR006-NT",
    "name": "MARVIN YABUT",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR006-NT-731",
        "bpCode": "MAR006-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 731,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR007-NT",
    "name": "MARIA RIN JERICO OBICO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR007-NT-732",
        "bpCode": "MAR007-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 732,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR008",
    "name": "MARNAV MARINE ELECTRONICS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR008-733",
        "bpCode": "MAR008",
        "federalTaxId": "430-555-369-00000",
        "sourceRow": 733,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAR009-NT",
    "name": "MARVIN BACANI",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAR009-NT-734",
        "bpCode": "MAR009-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 734,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAT001",
    "name": "THE MATHWORKS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAT001-735",
        "bpCode": "MAT001",
        "address": "PHILIPPINES",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 735,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAX001",
    "name": "MAXIMUM SOLUTIONS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAX001-736",
        "bpCode": "MAX001",
        "address": "4/F ACCELERANDO BLDG.,                  395 SEN. GILPUYAT AVE.,",
        "federalTaxId": "210-223-725-00000",
        "sourceRow": 736,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAX002",
    "name": "MAXTEC SOLUTIONS PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAX002-737",
        "bpCode": "MAX002",
        "address": "498 A BONI AVE PLAINVIEW, MANDALUYONG CITY",
        "federalTaxId": "006-342-320-00000",
        "sourceRow": 737,
        "documents": {}
      },
      {
        "id": "branch-MAX002-NT-738",
        "bpCode": "MAX002-NT",
        "address": "498 A BONI AVE PLAINVIEW, MANDALUYONG CITY",
        "federalTaxId": "006-342-320-00000",
        "contactPerson": "ARVIN REGINO",
        "sourceRow": 738,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MAX003-NT",
    "name": "MAXICARE HEALTHCARE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MAX003-NT-739",
        "bpCode": "MAX003-NT",
        "address": "MAXICARE TOWER 203 SALCEDO STREET BRGY SAN LORENZO LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "000-487-637-00000",
        "sourceRow": 739,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MBM001",
    "name": "MBM ILOILO ASSET MANAGEMENT SERVICES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MBM001-740",
        "bpCode": "MBM001",
        "address": "IMC BONIFACIO DRIVE ILOILO CITY 5000",
        "federalTaxId": "289-954-661-00000",
        "sourceRow": 740,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MBP001",
    "name": "MB POWERSTAR LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MBP001-741",
        "bpCode": "MBP001",
        "address": "RM B008, 3F, MAOYE PAINTING & CALLIGRAPHY TRADING SQUARE, DAFEN, BUSHA ROAD, LONGGANG, SHENZHEN",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 741,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MCT001",
    "name": "MCTECH TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MCT001-742",
        "bpCode": "MCT001",
        "address": "#17 G. ARANETA AVENUE BRGY. SANTOL QUEZON CITY",
        "federalTaxId": "728-250-662-00000",
        "sourceRow": 742,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEC001",
    "name": "MEC COMPUTER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEC001-743",
        "bpCode": "MEC001",
        "address": "P. TUAZON COR. 21ST ST., CUBAO",
        "federalTaxId": "202-604-514-00000",
        "supplierRank": "Major",
        "sourceRow": 743,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEC002",
    "name": "MEC NETWORKS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEC002-744",
        "bpCode": "MEC002",
        "address": "P. TUAZON COR. 21ST ST. TAGUMPAY, CUBAO, QUEZON CITY 1109",
        "federalTaxId": "222-842-035-00000",
        "sourceRow": 744,
        "documents": {}
      },
      {
        "id": "branch-MEC002-NT-745",
        "bpCode": "MEC002-NT",
        "address": "P. TUAZON COR. 21ST ST              CUBAO",
        "federalTaxId": "222-842-035-00000",
        "contactPerson": "JERAMEL  MANABAT",
        "sourceRow": 745,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MED001-NT",
    "name": "MEDICAL TOWERS LABORATORY DIAGNOSTIC CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MED001-NT-746",
        "bpCode": "MED001-NT",
        "address": "510 MEDICAL TOWERS BLDG HERRERA ST SAN LORENZO MAKATI CITY",
        "federalTaxId": "110-516-478-00100",
        "sourceRow": 746,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MED002",
    "name": "MEDCO TECHNICAL SERVICES & ELECTRICAL SUPPLY CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MED002-747",
        "bpCode": "MED002",
        "address": "PRK. 6 QUEZON PANABO CITY DDN 8105",
        "federalTaxId": "201-062-102-00000",
        "sourceRow": 747,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MED002-NT",
    "name": "MEDICARD PHILIPPINES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MED002-NT-748",
        "bpCode": "MED002-NT",
        "address": "330 SEN GIL PUYAT AVE., BEL-AIR NCR FOURTH DISTRICT MAKATI 1200",
        "federalTaxId": "000-476-995-000",
        "industry": "n/a8",
        "contactPerson": "MIMI",
        "sourceRow": 748,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEE001",
    "name": "MEEPS ELECTRIC INDUSTRY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEE001-749",
        "bpCode": "MEE001",
        "address": "B21 L10 ADELFA ST DONA ROSARIO  BAYVIEW SUCAT MUNTINLUPA CITY",
        "federalTaxId": "008-890-734-00000",
        "sourceRow": 749,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEG001",
    "name": "MEGA MASTERLINK FEBRICATOR AND ELECTRICAL SERVICES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEG001-750",
        "bpCode": "MEG001",
        "address": "26 ISIDRO FRANCISCO ST BRGY MAYSAN",
        "federalTaxId": "221-973-131-00000",
        "sourceRow": 750,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEG002-NT",
    "name": "MEGALAND 168 INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEG002-NT-751",
        "bpCode": "MEG002-NT",
        "address": "126A MABINI DELA PAZ BINAN, LAGUNA",
        "federalTaxId": "006-907-829-00000",
        "sourceRow": 751,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEG003",
    "name": "MEGAKARTE SMARTCARD CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEG003-752",
        "bpCode": "MEG003",
        "address": "UNIT 2007, CITYLAND 10 TOWER 2, 154 H.V. DELA COSTA ST., BEL-AIR",
        "federalTaxId": "008-681-767-00000",
        "sourceRow": 752,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEL001-NT",
    "name": "MELGAR ENTERPRISES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEL001-NT-753",
        "bpCode": "MEL001-NT",
        "address": "2663 F. MANALO ST., PUNTA, BRGY. 898 ZONE 100 STA. ANA, MANILA",
        "federalTaxId": "259-101-115-00100",
        "sourceRow": 753,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MEL002-NT",
    "name": "MELGAR, MARK ROJAS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MEL002-NT-754",
        "bpCode": "MEL002-NT",
        "address": "2663 F MANALO ST PUNTA BRGY 898 ZONE 100 STA ANA MANILA 1009",
        "federalTaxId": "259-101-115-001",
        "contactPerson": "MELGAR",
        "sourceRow": 754,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MER001",
    "name": "Merben G. Villacencio",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MER001-755",
        "bpCode": "MER001",
        "address": "Tandag Surigao del Sur",
        "federalTaxId": "000000000000000",
        "contactPerson": "Merben G. Villacencio",
        "sourceRow": 755,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MER001-NT",
    "name": "MERALCO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MER001-NT-756",
        "bpCode": "MER001-NT",
        "address": "9581 SOUTH AVE., EXTN COR KAMAGONGBRGY SAN ANTONIO MAKATI CITY",
        "federalTaxId": "000-101-528-00000",
        "sourceRow": 756,
        "documents": {}
      },
      {
        "id": "branch-MER002-757",
        "bpCode": "MER002",
        "address": "MALOLOS BULACAN",
        "federalTaxId": "000-101-528-00000",
        "sourceRow": 757,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MET001-NT",
    "name": "METRO RETAIL STORES GROUP INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MET001-NT-758",
        "bpCode": "MET001-NT",
        "address": "COLON JUAN LUNA ST. BARANGGAY STO NINO CEBU CITY, CEBU",
        "federalTaxId": "226-527-915-012",
        "contactPerson": "BILL TO",
        "sourceRow": 758,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MGA001-NT",
    "name": "MGA.414 CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MGA001-NT-759",
        "bpCode": "MGA001-NT",
        "address": "BLK 1 LOT 8 DONA SOLEDAD EXTN BETTER LIVING SUBD., DON BOSCO  1700 CITY PARANAQUE NCR FOURTH DISTRIC",
        "federalTaxId": "010-268-633-00001",
        "contactPerson": "SALES ASSOCIATE",
        "sourceRow": 759,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC001",
    "name": "MICROVALLEY COMPUTER SUPERSTORE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC001-760",
        "bpCode": "MIC001",
        "address": "CYBERZONE SM ARANETA CENTER",
        "federalTaxId": "004-780-008-00295",
        "contactPerson": "SALES PERSON",
        "sourceRow": 760,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC001-NT",
    "name": "MICHAEL MARK FELIPE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC001-NT-761",
        "bpCode": "MIC001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "266-649-475-00000",
        "sourceRow": 761,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC002",
    "name": "MICRO GENESIS CFZ, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC002-762",
        "bpCode": "MIC002",
        "address": "RM.5 PHILEXCEL BUSINESS ARCADE 3 EXCEL BUSINESS PARK, M.A. ROXAS     HIGHWAY, CLARK FREEPORT ZONE",
        "federalTaxId": "009-077-460-00000",
        "sourceRow": 762,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC003",
    "name": "MICRO TECHNICAL NETWORK AND POWER SOLUTION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC003-763",
        "bpCode": "MIC003",
        "address": "3F POLAR CENTER BLDG CORNELL ST BRGY WACK WACK GREENHILLS",
        "federalTaxId": "009-939-875-00000",
        "sourceRow": 763,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC004",
    "name": "MICROIMAGING SALES AND SERVICES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC004-764",
        "bpCode": "MIC004",
        "address": "2F KODAK BLDG 2247 CHINO ROCES AVE., BRGY SAN LORENZO",
        "federalTaxId": "005-339-584-00000",
        "sourceRow": 764,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC005-NT",
    "name": "MICHAEL DALIS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC005-NT-765",
        "bpCode": "MIC005-NT",
        "federalTaxId": "235-811-235-00000",
        "sourceRow": 765,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC006",
    "name": "MICRODATA SYSTEMS AND MANAGEMENT, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC006-766",
        "bpCode": "MIC006",
        "address": "CRYSTAL BLDG. 199 CM RECTO ST. COR. A. MABINI ST. SAN JUAN CITY",
        "federalTaxId": "000-132-948-00000",
        "sourceRow": 766,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC007",
    "name": "MICHAELANGELO LIGUIT",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC007-767",
        "bpCode": "MIC007",
        "address": "UNIT 912 SOUTHSTAR PLAZA BANGKAL CITY OF MAKATI, NCR, FOURTH DISTRICT 1233",
        "federalTaxId": "202-786-244-00000",
        "sourceRow": 767,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC008",
    "name": "MICROGENESIS SOFTWARE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC008-768",
        "bpCode": "MIC008",
        "address": "UNIT 1202 PARAGON PLAZA  BLDG., 162 EDSA COR RELIANCE ST., MANDALUYONG CITY",
        "federalTaxId": "000-342-262-000",
        "sourceRow": 768,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIC009-NT",
    "name": "MICHELIN CUISINE & FINE FOODS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIC009-NT-769",
        "bpCode": "MIC009-NT",
        "address": "1 KALANTIAW ST COR 20TH AVENUE SAN ROQUE PROJECT 4 1109, QUEZON CITY NCR",
        "federalTaxId": "008-202-835-00000",
        "contactPerson": "KRISTINE TRINIDAD",
        "mobilePhone": "09178721079",
        "sourceRow": 769,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIH001",
    "name": "MIHCM ASIA SDN BHD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIH001-770",
        "bpCode": "MIH001",
        "address": "HO HUP TOWER-AURORA PLACE 2-07-01-LEVEL 7 PLAZA BKT JALIL, 1,PERSIARAN JALIL 1, BDR BKT JALIL 57000",
        "federalTaxId": "W10-1809-32001115",
        "contactPerson": "PUBUDINI ABEYSEKARA",
        "sourceRow": 770,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIJ001",
    "name": "MIJA.PH CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIJ001-771",
        "bpCode": "MIJ001",
        "federalTaxId": "770-696-344-00000",
        "sourceRow": 771,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIK001-NT",
    "name": "MIKE BATANES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIK001-NT-772",
        "bpCode": "MIK001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 772,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIL001",
    "name": "MILLENNIUM COMPUTER TECHNOLOGY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIL001-773",
        "bpCode": "MIL001",
        "address": "53 TANGALI ST SAN JOSE QUEZON CITY",
        "federalTaxId": "000-324-914-00000",
        "sourceRow": 773,
        "documents": {}
      },
      {
        "id": "branch-MIL002-NT-775",
        "bpCode": "MIL002-NT",
        "address": "53 TANGALI ST SAN JOSE QUEZON CITY",
        "federalTaxId": "000-324-914-00000",
        "contactPerson": "YANG",
        "sourceRow": 775,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIL001-NT",
    "name": "MILLENNIUM PROPERTIES AND BROKERAGE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIL001-NT-774",
        "bpCode": "MIL001-NT",
        "address": "15J ESCRIVA  DRIVE ORTIGAS CENTER BRGY SAN ANTONIO PASIG CITY",
        "federalTaxId": "000-545-202-002",
        "contactPerson": "LINDSAY ESTERADO",
        "sourceRow": 774,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIL003-NT",
    "name": "MILLENNIUM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIL003-NT-776",
        "bpCode": "MIL003-NT",
        "address": "TALA 2112 ORANI BATAAN PHILIPPINES",
        "federalTaxId": "009-948-245-00001",
        "contactPerson": "GEMMALYN",
        "sourceRow": 776,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIN001",
    "name": "MIND ALLIANCE VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIN001-777",
        "bpCode": "MIN001",
        "address": "RM 613  PACIFIC BLDG , QUINTN PAREDES ST. BINONDO",
        "federalTaxId": "005-424-123-00000",
        "contactPerson": "CONTACT",
        "mobilePhone": "09164856081",
        "sourceRow": 777,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIR001-NT",
    "name": "MIRAHLIN CORTEZ",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIR001-NT-778",
        "bpCode": "MIR001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 778,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIS001",
    "name": "MISNET EDUCATION INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIS001-779",
        "bpCode": "MIS001",
        "address": "2402F Antel 2000 Corporate Center #121 Valero St Salcedo Village",
        "federalTaxId": "217-536-458-00000",
        "contactPerson": "MAKATI",
        "sourceRow": 779,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MIT001-NT",
    "name": "MIT-AIR SALES CENTER INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MIT001-NT-780",
        "bpCode": "MIT001-NT",
        "address": "1531 PEDRO GIL ST., BRGY 815 ZONE 88",
        "federalTaxId": "000-354-986-00000",
        "sourceRow": 780,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MMD001",
    "name": "MMD DISTRIBUTION PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MMD001-781",
        "bpCode": "MMD001",
        "address": "UNIT B 11/F JMT CORPORATE CONDOMINIUM, ADB AVE, ORTIGAS PASIG CITY",
        "federalTaxId": "625-057-641-00000",
        "contactPerson": "CATHY ALARMA",
        "sourceRow": 781,
        "documents": {}
      },
      {
        "id": "branch-MMD001-NT-782",
        "bpCode": "MMD001-NT",
        "address": "UNIT 508 5F THE RAFFLES CORPORATE CENTER EMERALD AVE ORTIGAS CENTER BRGY SAN ANTONIO",
        "federalTaxId": "009-196-428-00000",
        "contactPerson": "CATHY",
        "sourceRow": 782,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MME001-NT",
    "name": "MME MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MME001-NT-783",
        "bpCode": "MME001-NT",
        "address": "DOOR F ISABELO ARCADE GENERAL MAXILOM AVENUE",
        "federalTaxId": "260-041-607-00000",
        "sourceRow": 783,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MMG001",
    "name": "MMG TRUE ENTERPRISES INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MMG001-784",
        "bpCode": "MMG001",
        "address": "KM 18 POLYLITE HOUSE BLDG. ALABANG ZAPOTE ROAD TALON II LAS PINAS CITY 1740",
        "federalTaxId": "010-036-244-00000",
        "sourceRow": 784,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MMK001",
    "name": "MMK GMBH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MMK001-785",
        "bpCode": "MMK001",
        "address": "Koblenz, Rheinland-Pfalz, Germany",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 785,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MND001",
    "name": "MASTER NETWORK AND DATA SOLUTION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MND001-786",
        "bpCode": "MND001",
        "address": "606 BONI AVENUE",
        "federalTaxId": "912-673-514-00000",
        "sourceRow": 786,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MOB001",
    "name": "MOBATEK SARL",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MOB001-787",
        "bpCode": "MOB001",
        "address": "15 CHEMIN DE LA CRABE 31300 TOULOUSE",
        "federalTaxId": "FR57502869258",
        "sourceRow": 787,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MOD001-NT",
    "name": "MODERNTECH COMPUTER SYSTEMS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MOD001-NT-788",
        "bpCode": "MOD001-NT",
        "federalTaxId": "224-024-328-00000",
        "sourceRow": 788,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MOD002",
    "name": "MODUVI, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MOD002-789",
        "bpCode": "MOD002",
        "address": "UNIT 605 THE CENTERPOINT BLDG GARNET ROAD COR. JULIA VARGAS ORTIGAS CENTER BRGY. SAN ANTONIO PASIG",
        "federalTaxId": "008-017-437-000",
        "contactPerson": "CARLO MADDELA",
        "mobilePhone": "09178264801",
        "sourceRow": 789,
        "documents": {}
      },
      {
        "id": "branch-MOD002-NT-790",
        "bpCode": "MOD002-NT",
        "address": "UNIT 605 THE CENTERPOINT BLDG GARNET ROAD COR. JULIA VARGAS ORTIGAS CENTER BRGY. SAN ANTONIO PASIG",
        "federalTaxId": "008-017-437-000",
        "contactPerson": "ANGEL BUCAG",
        "sourceRow": 790,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MOL001-NT",
    "name": "MOLATO, MARK P",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MOL001-NT-791",
        "bpCode": "MOL001-NT",
        "address": "VETERANS VILLAGE",
        "federalTaxId": "408-898-473-000",
        "contactPerson": "MOLTO",
        "sourceRow": 791,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MON001",
    "name": "MONTON, MICHAEL PEREZ",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MON001-792",
        "bpCode": "MON001",
        "address": "01 DON MARIANO MELENDRES AVE. COR ORTIGAS AVE EXT BRGY DOLORES TAYTAY RIZAL 1930",
        "federalTaxId": "215-121-601-000",
        "contactPerson": "Michael Monton",
        "sourceRow": 792,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MON001-NT",
    "name": "MONDAY.COM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MON001-NT-793",
        "bpCode": "MON001-NT",
        "address": "G/F S.B. TOVER 1A/1, SECTOR 16A         NOIDA, UTTAR PRADESH 201 301",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALES",
        "sourceRow": 793,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MSE001",
    "name": "M-SECURITY TECH PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MSE001-794",
        "bpCode": "MSE001",
        "address": "2904 88 CORPORATE CENTER VALERO COR SEDENO STS SALCEDO VILLAGE, MAKATI CITY 1227",
        "federalTaxId": "008-126-492-00000",
        "supplierRank": "Major",
        "sourceRow": 794,
        "documents": {}
      },
      {
        "id": "branch-MSE001-NT-795",
        "bpCode": "MSE001-NT",
        "address": "2904 88 CORPORATE CENTER VALERO COR SEDENO STS SALCEDO VILLAGE",
        "federalTaxId": "008-126-492-00000",
        "sourceRow": 795,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MSI001-NT",
    "name": "MSI-ECS PHILS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MSI001-NT-796",
        "bpCode": "MSI001-NT",
        "address": "MSI-ECS COMPLEX M. EUSEBIO ST., BRGY SAN MIGUEL PASIG CITY",
        "federalTaxId": "200-182-112-00000",
        "sourceRow": 796,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MSI002",
    "name": "MSI PACIFIC INTERNATIONAL HOLDING CO., LTD.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MSI002-797",
        "bpCode": "MSI002",
        "address": "GROUND FLR. CSP BUILDING, 173 EDSA BRGY WACK WACK GREENHILLS EAST MANDALUYONG CITY",
        "federalTaxId": "010-126-383-00000",
        "sourceRow": 797,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MTE001",
    "name": "MTEKNIK TECHNOLOGIES SOLUTIONS INC.",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-MTE001-798",
        "bpCode": "MTE001",
        "address": "LOT 12 BLOCK 2 PROGRESSIVE VILLAGE 12 MOLINO III 4102 BACOOR CAVITE PHILIPPINES",
        "federalTaxId": "628-136-191-00000",
        "contactPerson": "OPI ENRIQUEZ",
        "rawCategory": "Subcontructor",
        "sourceRow": 798,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MTT001",
    "name": "MTTCS MICRO TECHNICAL TELECOM CABLING SYSTEM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MTT001-799",
        "bpCode": "MTT001",
        "address": "2377 CHAMPACA ST., COR. ARELLANO AVE.   MALATE",
        "federalTaxId": "189-857-092-00000",
        "sourceRow": 799,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MUL001",
    "name": "MULTI MEDIA DISPLAY PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MUL001-800",
        "bpCode": "MUL001",
        "address": "UNIT 508 5F THE RAFFLES CORPORATE CENTER EMERALD AVE ORTIGAS CENTER BRGY SAN ANTONIO",
        "federalTaxId": "009-196-428-00000",
        "sourceRow": 800,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MUL001-NT",
    "name": "MULTI STORES CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MUL001-NT-801",
        "bpCode": "MUL001-NT",
        "address": "CEBU PORT CENTRE NORTH RECLAMATION AREA CEBU CITY",
        "federalTaxId": "002-828-069-00000",
        "contactPerson": "TRICIA CARREOS",
        "email": "NA",
        "sourceRow": 801,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MUL002",
    "name": "MULTISTYLE SPECIALIST, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MUL002-802",
        "bpCode": "MUL002",
        "address": "MAC ARTHUR HI WAY SAN MATIAS STO TOMAS PAMPANGA 2020",
        "federalTaxId": "000-057-387-00000",
        "sourceRow": 802,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MUL003",
    "name": "MULTICO PRIME POWER INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MUL003-803",
        "bpCode": "MUL003",
        "address": "LOT 11 BLK 1B MERIDIAN INDUSTRIAL PARK BRGY MACABLING STA ROSA CITY LAGUNA 4026",
        "federalTaxId": "005-619-610-00000",
        "sourceRow": 803,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MUR001-NT",
    "name": "MURPHY, ANGELICA JUSTINIANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MUR001-NT-804",
        "bpCode": "MUR001-NT",
        "address": "PUROK 5 PUYPUY 4033 BAY LAGUNA PHILIPPIENS",
        "federalTaxId": "311-582-893-00000",
        "contactPerson": "MURPHY, ANGELICA JUSTINIANO",
        "sourceRow": 804,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MUS001",
    "name": "MUSTARD SEED SYSTEMS CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MUS001-805",
        "bpCode": "MUS001",
        "federalTaxId": "204-332-439-00000",
        "sourceRow": 805,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-MYT001-NT",
    "name": "MYTAXI PH., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-MYT001-NT-806",
        "bpCode": "MYT001-NT",
        "address": "12TH FLOOR WILCON IT HUB BUILDING, 2251 CHINO ROCES AVENUE",
        "federalTaxId": "008-479-980-00000",
        "sourceRow": 806,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NAG001-NT",
    "name": "NAGUIT, JOSELITO FLORES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NAG001-NT-807",
        "bpCode": "NAG001-NT",
        "address": "TALON AMADEO CAVITE 4119",
        "federalTaxId": "209-167-224-000",
        "contactPerson": "NAGUIT, JOSELITO FLORES",
        "sourceRow": 807,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NAN001",
    "name": "NANOTEC CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NAN001-808",
        "bpCode": "NAN001",
        "address": "58 ILANG ILANG                          DONA MANUELA I",
        "federalTaxId": "007-099-808-00000",
        "sourceRow": 808,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NAT001",
    "name": "NATHANIEL DREU",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NAT001-809",
        "bpCode": "NAT001",
        "address": "Liamson Subd.",
        "federalTaxId": "223-341-866-00000",
        "sourceRow": 809,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NAU001",
    "name": "NAUTS AND VECTORS COMPANY, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NAU001-810",
        "bpCode": "NAU001",
        "address": "4/F KIOSK KC 421 (B) SM MEGAMALL BLDG B. J VARGAS BRGY WACK WACK MANDALUYONG",
        "federalTaxId": "000-342-262-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 810,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NBA001-NT",
    "name": "NEW BANAWE AUTO SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NBA001-NT-811",
        "bpCode": "NBA001-NT",
        "address": "22 Banawe St. Tatalon St. QC",
        "federalTaxId": "901-256-028-000",
        "contactPerson": "Michael C. Tan To",
        "mobilePhone": "09158888168",
        "sourceRow": 811,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NCR001-NT",
    "name": "NCR COMMERCIAL & GLASS SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NCR001-NT-812",
        "bpCode": "NCR001-NT",
        "address": "40 A. MABINI ST., PASIG CITY",
        "federalTaxId": "103-287-877-00000",
        "sourceRow": 812,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NDA001",
    "name": "NDAS PHILS. INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NDA001-813",
        "bpCode": "NDA001",
        "address": "ROOM 2007 CITYLAND 10 TOWER II, 156 H.V. DELA COSTA ST.,",
        "federalTaxId": "600-108-979-00000",
        "sourceRow": 813,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEP001-NT",
    "name": "NEPTHALI ESPELLOGO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEP001-NT-814",
        "bpCode": "NEP001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 814,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NET001",
    "name": "NETEDGE TECHNOLOGIES INC.",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-NET001-815",
        "bpCode": "NET001",
        "address": "601 PINA ST. BARANGAY 585 ZONE 057 1008 SAMPALOC MANILA CITY",
        "federalTaxId": "008-124-510-00000",
        "industry": "Wholesaler | Retailer",
        "contactPerson": "KC Hinampas",
        "position": "Finance/Accounting Department",
        "mobilePhone": "639233321117",
        "email": "kc.hinampas@bytesfreeinc.com",
        "rawCategory": "Supplier-Local",
        "status": "Incomplete",
        "sourceRow": 815,
        "documents": {
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2024-12-31",
            "status": "Expired",
            "daysLeft": -568
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          }
        }
      },
      {
        "id": "branch-NET004-NT-818",
        "bpCode": "NET004-NT",
        "address": "601 PINA ST. BARANGAY 585 ZONE 057 1008 SAMPALOC MANILA CITY",
        "federalTaxId": "008-124-510-00000",
        "rawCategory": "Supplier-Local",
        "status": "Incomplete",
        "sourceRow": 818,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NET002",
    "name": "NETPLAY, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NET002-816",
        "bpCode": "NET002",
        "address": "8F AIC CENTER BLDG, 204 ESCOLTA ST., BRGY 291 ZONE 027 BINONDO MANILA",
        "federalTaxId": "231-960-577-00000",
        "sourceRow": 816,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NET003",
    "name": "NETRUST PHILIPPINES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NET003-817",
        "bpCode": "NET003",
        "address": "UNIT 4 G1 4F OPL BLDG 100 C PALANCA ST LEGASPI VILLAGE SAN LORENZO MAKATI CITY",
        "federalTaxId": "008-436-648-00000",
        "sourceRow": 817,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NET005",
    "name": "NETTDRIVEN CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NET005-819",
        "bpCode": "NET005",
        "address": "2/F FILFLEX CMPD 607 MERCEDES AVE SAN MIGUEL 1600 CITY OF PASIG NCR SENCODN DISTRICT PHILIIPINES",
        "federalTaxId": "007-615-029-000",
        "contactPerson": "Joy Resurreccion",
        "mobilePhone": "09399140531",
        "sourceRow": 819,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NET006",
    "name": "NETWORK FIX IT SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NET006-820",
        "bpCode": "NET006",
        "address": "#16 SAFEGUARD ST. DIAZ COMOOUND 3, AMPID II SANMATEO RIZAL",
        "federalTaxId": "237-629-694-000",
        "contactPerson": "CHRISANTO CAPUZ",
        "sourceRow": 820,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEU001",
    "name": "NEUTRONICA I.T. SERVICES CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEU001-821",
        "bpCode": "NEU001",
        "address": "UNIT 4 JC BLDG 40 ORTIGAS AVE EXT STA LUCIA PASIG CITY",
        "federalTaxId": "007-849-349-000",
        "contactPerson": "DEZA ENRIQUEZ",
        "sourceRow": 821,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW001",
    "name": "NEW DATCHE PHILS. TRADERS CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW001-822",
        "bpCode": "NEW001",
        "address": "269 PLARIDEL EXT. STO. NIÑO, CEBU CITY",
        "federalTaxId": "000-069-987-00100",
        "sourceRow": 822,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW002",
    "name": "NEW KINETIX COMPUTER CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW002-823",
        "bpCode": "NEW002",
        "address": "76 P. CRUZ ST., SAN JOSE, MANDALUYONG CITY",
        "federalTaxId": "912-901-617-00200",
        "sourceRow": 823,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW003-NT",
    "name": "NEW TOPBEST LUMBER & CONSTRUCTION SUPPLY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW003-NT-824",
        "bpCode": "NEW003-NT",
        "address": "282 E DELOS SANTOS AVE HIGHWAY HILLS MANDALUYONG CITY",
        "federalTaxId": "000-063-318-00000",
        "sourceRow": 824,
        "documents": {}
      },
      {
        "id": "branch-NEW007-829",
        "bpCode": "NEW007",
        "address": "282 E DELOS SANTOS AVE",
        "federalTaxId": "000-063-318-00000",
        "sourceRow": 829,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW004",
    "name": "NEW KINETIX CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW004-825",
        "bpCode": "NEW004",
        "address": "WAREHOUSE NO. 2 NO.64 JUDGE JUAN LUNA ST., BRGY. BUNGAD SFDM D1 QUEZON CITY",
        "federalTaxId": "745-927-329-00000",
        "sourceRow": 825,
        "documents": {}
      },
      {
        "id": "branch-NEW005-NT-826",
        "bpCode": "NEW005-NT",
        "address": "WAREHOUSE NO. 2 NO.64 JUDGE JUAN LUNA ST DEL MONTE QUEZON CITY",
        "federalTaxId": "008-436-648-00000",
        "sourceRow": 826,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW006",
    "name": "NEWTECH COMPONENTS LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW006-827",
        "bpCode": "NEW006",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 827,
        "documents": {}
      },
      {
        "id": "branch-NEW006-NT-828",
        "bpCode": "NEW006-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 828,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW008-NT",
    "name": "NEW TORNADO SECURITY AGENCY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW008-NT-830",
        "bpCode": "NEW008-NT",
        "address": "ROOM 3, 3RD FLOOR, LOPEZ 12TH ST., AIRMENS VILLAGE VILLAMOR AIRBASE",
        "federalTaxId": "006-322-729-00000",
        "sourceRow": 830,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEW011-NT",
    "name": "NEWBITECH IT SOLUTIONS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEW011-NT-831",
        "bpCode": "NEW011-NT",
        "address": "249-A BRGY SANTO NINO, SAN FRANCISCO ST. BUHANGIN, DAVAO CITY 8000",
        "federalTaxId": "921-946-322-002",
        "contactPerson": "DAINA ROSE KUSAIN",
        "sourceRow": 831,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEX001",
    "name": "NEXTGEN DISTRIBUTION PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEX001-832",
        "bpCode": "NEX001",
        "address": "UNIT 09-119, 9TH FLOOR TOWER 3 UPTOWN BONIFACIO 36TH STREET CORNER 11TH AVENUE FORT BONIFACIO 1634",
        "federalTaxId": "010-681-360-00000",
        "sourceRow": 832,
        "documents": {}
      },
      {
        "id": "branch-NEX001-NT-833",
        "bpCode": "NEX001-NT",
        "address": "UNIT 09-119, 9TH FLOOR TOWER 3 UPTOWN BONIFACIO 36TH STREET CORNER 11TH AVENUE FORT BONIFACIO 1634",
        "federalTaxId": "010-681-360-00000",
        "contactPerson": "CHOI CAYETA",
        "sourceRow": 833,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NEX002",
    "name": "NEXT GENERATION TECHNOLOGIESGLOBAL INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NEX002-834",
        "bpCode": "NEX002",
        "address": "4/F MOTHER OF UNITY BLDG. 118 J.P. RIZAL ST. SAN ROQUE MARIKINA 1801",
        "federalTaxId": "008-324-843-000",
        "contactPerson": "PATRICIA RAMIREZ",
        "sourceRow": 834,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NIC001-NT",
    "name": "NICMAR MUSIC AND GADGETS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NIC001-NT-835",
        "bpCode": "NIC001-NT",
        "address": "B1 L3, SARREAL AVE., IMUS, CAVITE",
        "federalTaxId": "285-011-977-00000",
        "sourceRow": 835,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NIE001-NT",
    "name": "NIERRAS, LANILYN LIM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NIE001-NT-836",
        "bpCode": "NIE001-NT",
        "address": "#40 HAILEY FILINVEST II BAGONG SILANGAN 1126 QUEZON CITY NCR, SECOND DISTRICT",
        "federalTaxId": "151-962-182-00000",
        "contactPerson": "NIERRAS, LANILYN LIM",
        "sourceRow": 836,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NIT001-NT",
    "name": "NIT'Z PACKAGING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NIT001-NT-837",
        "bpCode": "NIT001-NT",
        "address": "BLK 66 LOT 7 NORTHVILLE 2B, BAGUMBONG",
        "federalTaxId": "331-172-745-00000",
        "contactPerson": "ELLEN",
        "sourceRow": 837,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NMN001",
    "name": "NM NETWORK MANAGER SALES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NMN001-838",
        "bpCode": "NMN001",
        "address": "U1804 CITYLAND HERRERA TOWER  98 V.A. RUFINO ST. SALCEDO VILLAGE",
        "federalTaxId": "008-064-839-00000",
        "industry": "OTHERS",
        "contactPerson": "JUAN ADOLFO BERNARDO",
        "sourceRow": 838,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOB001",
    "name": "NOBLEPROG MEA LIMITED - DUBAI BRANCH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOB001-839",
        "bpCode": "NOB001",
        "address": "Business bay, Bay Square, Building 4, 2nd floor - Dubai",
        "federalTaxId": "000000000000000",
        "contactPerson": "Nour Bseiso",
        "sourceRow": 839,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOR001",
    "name": "NORTHBRIDGE TECHNOLOGIES ENTERPRISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOR001-840",
        "bpCode": "NOR001",
        "address": "L30 B3 CORINTHIANS ST.  MAUNLAD HOMES PH2   CAINGIN, MALOLOS BULACAN",
        "federalTaxId": "429-281-961-000NV",
        "sourceRow": 840,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOR002",
    "name": "NORTHGATE TECHNOLOGIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOR002-841",
        "bpCode": "NOR002",
        "address": "2-A BIG HORSESHOE DRIVE, HORSESHOE VILLAGE, QC",
        "federalTaxId": "000-087-947-00000",
        "sourceRow": 841,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOR003",
    "name": "NORTHRIDGE TECHNOLOGY BUSINESS SOLUTIONS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOR003-842",
        "bpCode": "NOR003",
        "address": "9190 CATMON ST.   SAN ANTONIO VILLAGE, MAKATI CITY",
        "federalTaxId": "008-695-099-00000",
        "contactPerson": "BRENDA YANGUAS",
        "sourceRow": 842,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOR004-NT",
    "name": "NORLITO ATIENZA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOR004-NT-843",
        "bpCode": "NOR004-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 843,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOR014-NT",
    "name": "NORS.PH ONLINE SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOR014-NT-844",
        "bpCode": "NOR014-NT",
        "federalTaxId": "346-381-627-00000",
        "contactPerson": "NORLYN TARO",
        "mobilePhone": "09162232126",
        "sourceRow": 844,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NOV001-NT",
    "name": "NOVELTRIX TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NOV001-NT-845",
        "bpCode": "NOV001-NT",
        "address": "36-C KAPT E CRUZ MANOTOK SUBD STO NINO MARIKINA CITY",
        "federalTaxId": "233-483-326-00000",
        "sourceRow": 845,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NPJ001",
    "name": "NPJN INFORMATION AND COMMUNICATION TECHNOLOGY SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NPJ001-846",
        "bpCode": "NPJ001",
        "address": "B1 L23 PH 5 ESTWOOD RESIDENCES SAN ISIDRO RODRIGUEZ RIZAL",
        "federalTaxId": "116-776-577-00000",
        "sourceRow": 846,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NSP001",
    "name": "NSPH INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NSP001-847",
        "bpCode": "NSP001",
        "address": "UNIT 202 RIVERBANK BLDG., BSJ DEV. CORP., 1869 P.DOMINGO ST., BRGY KASILAWAN, MAKATI CITY",
        "federalTaxId": "009-436-876-00000",
        "sourceRow": 847,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NTT001",
    "name": "NTT DATA PHILIPPINES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NTT001-848",
        "bpCode": "NTT001",
        "address": "28/F 88 CORPORATE CENTER, SEDEÑO COR. VALERO ST., SALCEDO VILLAGE, BEL-AIR, MAKATI CITY",
        "federalTaxId": "202-289-659-00000",
        "sourceRow": 848,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NUL001",
    "name": "NULLFORGE SECURITY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NUL001-849",
        "bpCode": "NUL001",
        "address": "2F LEDESMA COURT SUBDIVISION CULIAT QUEZON CITY 1128",
        "federalTaxId": "008-891-735-00000",
        "sourceRow": 849,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-NUS001",
    "name": "NUSERV SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-NUS001-850",
        "bpCode": "NUS001",
        "address": "433 LT ARTIAGA ST CORAZON DE JESUS SAN JUAN CITY",
        "federalTaxId": "009-656-582-00000",
        "sourceRow": 850,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OCT001",
    "name": "OCTAGON COMPUTER SUPERSTORE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OCT001-851",
        "bpCode": "OCT001",
        "address": "SM MEGAMALL",
        "federalTaxId": "004-780-008-001",
        "contactPerson": "KESHEM JEAN RAMOS",
        "sourceRow": 851,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OFF001",
    "name": "OFFICE FUNDAMENTAL IDEAS CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OFF001-852",
        "bpCode": "OFF001",
        "address": "40-A BANAWE ST., QUEZON CITY",
        "federalTaxId": "006-669-030-00000",
        "sourceRow": 852,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OFF004",
    "name": "OFFSEC SERVICES LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OFF004-853",
        "bpCode": "OFF004",
        "address": "230 Park Ave; 3rd Floor",
        "federalTaxId": "000000000000000",
        "contactPerson": "LEON KWEK",
        "sourceRow": 853,
        "documents": {}
      },
      {
        "id": "branch-OFF004-NT-854",
        "bpCode": "OFF004-NT",
        "address": "230 Park Ave; 3rd Floor",
        "federalTaxId": "000000000000000",
        "contactPerson": "LEON KWEK",
        "sourceRow": 854,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OFF005",
    "name": "OFFICE WAREHOUSE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OFF005-855",
        "bpCode": "OFF005",
        "address": "8 GILMORE AVE VALENCIA QUEZON CITY",
        "federalTaxId": "200-492-462-00000",
        "industry": "RETAIL",
        "contactPerson": "ARNOLD PERILLA",
        "mobilePhone": "09178627938",
        "sourceRow": 855,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OKC001",
    "name": "OKCAM ELECTRONICS CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OKC001-856",
        "bpCode": "OKC001",
        "address": "#25 GILMORE AVE. COR AURORA BLVD., VALENCIA 4 QUEZON CITY",
        "federalTaxId": "307-449-531-00000",
        "sourceRow": 856,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OLI001-NT",
    "name": "OLIVER MOLERA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OLI001-NT-857",
        "bpCode": "OLI001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 857,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ONE001-NT",
    "name": "ONE CLICK BATTERY DEPOT, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ONE001-NT-858",
        "bpCode": "ONE001-NT",
        "address": "12 MERCEDES AVENUE SAN MIGUEL, PASIG CITY",
        "federalTaxId": "010-372-730-003",
        "contactPerson": "ARIEL",
        "mobilePhone": "09274678882",
        "sourceRow": 858,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ONJ001",
    "name": "TAN, JILLIAN MAE B.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ONJ001-859",
        "bpCode": "ONJ001",
        "address": "3/F ANNAPOLIS TOWER 43 ANNAPOLIS ST., GREENHILLS, SAN JUAN CITY",
        "federalTaxId": "400-741-333-00000",
        "contactPerson": "JILLIAN MAE TAN",
        "sourceRow": 859,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ONJ001-NT",
    "name": "O & J GLOBAL TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ONJ001-NT-860",
        "bpCode": "ONJ001-NT",
        "address": "3/F ANNAPOLIS TOWER 43 ANNAPOLIS ST., GREENHILLS, SAN JUAN CITY",
        "federalTaxId": "400-741-333-00000",
        "contactPerson": "JILLIAN MAE TAN",
        "sourceRow": 860,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OPT001",
    "name": "OPTIMAL SYSTEMS DISTRIBUTION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OPT001-861",
        "bpCode": "OPT001",
        "address": "120 E. RODRIGUEZ JR. COR. ORTIGAS AVE.  BRGY. UGONG, PASIG CITY",
        "federalTaxId": "233-182-112-00000",
        "sourceRow": 861,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-OPT002",
    "name": "OPTIMUM IT SOLUTIONS COMPANY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-OPT002-862",
        "bpCode": "OPT002",
        "address": "21 UNIT 406 CRISTOBAL PLACE MAYOR IGNACIO ST CUBAO QUEZON CITY",
        "federalTaxId": "010-419-361-00000",
        "sourceRow": 862,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ORI001",
    "name": "ORION CEPHEID, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ORI001-863",
        "bpCode": "ORI001",
        "address": "1916-18 CLARO M. RECTO AVE BRGY. 392, ZONE 040, QUIAPO, MANILA CITY, 1001",
        "federalTaxId": "004-511-102-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 863,
        "documents": {}
      },
      {
        "id": "branch-ORI007-NT-867",
        "bpCode": "ORI007-NT",
        "address": "4/F BLDG B, SM MEGAMALL, 1550 MANDALUYONG CITY",
        "federalTaxId": "004-511-102-00009",
        "contactPerson": "BILL TO",
        "sourceRow": 867,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ORI001-NT",
    "name": "ORIENTAL ASSURANCE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ORI001-NT-864",
        "bpCode": "ORI001-NT",
        "address": "UNIT D PARIS BLDG 9212 E. AGUINALDO HIGHWAY ZONE I (POB) DASMARINAS, CAVITE",
        "federalTaxId": "000-798-742-00014",
        "sourceRow": 864,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ORI002",
    "name": "ORIONTECH CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ORI002-865",
        "bpCode": "ORI002",
        "address": "706 APITONG ROAD MIDTOWN EXECUTIVE HOMES, 1268 U.N. AVE BRGY 672 ZONE 73 PACO, MANILA 1007",
        "federalTaxId": "764-693-825-00000",
        "sourceRow": 865,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ORI002-NT",
    "name": "ORIAS , JUDILYN TIMKANG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ORI002-NT-866",
        "bpCode": "ORI002-NT",
        "address": "B13 L63 MT VIEW SUBD MUZON 3023 CITY OF SAN JOSE DEL MONTE BULACAN PH",
        "federalTaxId": "221-522-981-00000",
        "contactPerson": "NOEL JOY ORIAS",
        "sourceRow": 866,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-P2R001",
    "name": "P2RO INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-P2R001-868",
        "bpCode": "P2R001",
        "address": "#8 SCOUT TOBIAS ST. QUEZON CITY",
        "federalTaxId": "244-359-178-000",
        "contactPerson": "MARYNEL",
        "sourceRow": 868,
        "documents": {}
      },
      {
        "id": "branch-P2R002-NT-869",
        "bpCode": "P2R002-NT",
        "address": "#8 SCOUT TOBIAS ST. QUEZON CITY",
        "federalTaxId": "244-359-178-000",
        "contactPerson": "MARYNEL",
        "sourceRow": 869,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAC001-NT",
    "name": "PACIFIC CROSS HEALTH CARE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAC001-NT-870",
        "bpCode": "PAC001-NT",
        "address": "PACIFIC CROSS CENTER, 8000 MAKATI AVENUE, MAKATI CITY",
        "federalTaxId": "140-233-202-00000",
        "sourceRow": 870,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAC002",
    "name": "PACULEGEND COOLING SOLUTIONS AND AIRCONDITIONING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAC002-871",
        "bpCode": "PAC002",
        "address": "BLK 3 LOT 5 PHASE 2A HOMES, LIGAS III, BACOOR CITY, CAVITE",
        "federalTaxId": "202-454-888-00000",
        "sourceRow": 871,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAM001-NT",
    "name": "PAMCO STATIONERY SUPPLY, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAM001-NT-872",
        "bpCode": "PAM001-NT",
        "address": "528 E.T YUNCHENGCO ST. BRHY 289 27, BINONDO  CITY OF MANILA 1006",
        "federalTaxId": "000-332-670-00000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 872,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAN001",
    "name": "PANASONIC MANUFACTURING PHILIPPINES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAN001-873",
        "bpCode": "PAN001",
        "address": "ORTIGAS AVE. EXT.",
        "federalTaxId": "000-099-692-00000",
        "sourceRow": 873,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAN001-NT",
    "name": "PANGILINAN, PAUL ALDRICH SUGUITAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAN001-NT-874",
        "bpCode": "PAN001-NT",
        "address": "10 ROBINA STREET BUNGAD 1105 QUEZON CITY NCR, SECOND DISTRICT PHIL",
        "federalTaxId": "628-562-127-00000",
        "contactPerson": "TRIZ BRILLANTES",
        "sourceRow": 874,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAN002",
    "name": "PANDATECH EXPRESS88 BUSINESS SYSTEM NETWORK AND DATA SOLUTION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAN002-875",
        "bpCode": "PAN002",
        "address": "DOOR 4 SNN REALTY BUILDING INIGO STREET",
        "federalTaxId": "949-708-892-00500",
        "sourceRow": 875,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAP001-NT",
    "name": "PAPERLINE ENTERPRISES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAP001-NT-876",
        "bpCode": "PAP001-NT",
        "address": "1140 PRUDENCE BLDG PASONG TAMO SAN ANTONIO MAKATI CITY",
        "federalTaxId": "102-896-227-00000",
        "sourceRow": 876,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAR001",
    "name": "PARAGAS, AMY ESCONDE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAR001-877",
        "bpCode": "PAR001",
        "address": "70 COMMISSION CIVIL LINCOLN STREETS BENEDICTO JARO 5000 CITY OF ILO-ILO PHILIPPINES",
        "federalTaxId": "911-194-706-00000",
        "contactPerson": "PARAGAS, AMY ESCONDE",
        "sourceRow": 877,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAR001-NT",
    "name": "PARAGON PLAZA CONDOMINIUM CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAR001-NT-878",
        "bpCode": "PAR001-NT",
        "address": "GF PARAGON PLAZA EDSA COR. RELIANCE ST., MANDALUYONG CITY",
        "federalTaxId": "205-068-120-00000",
        "sourceRow": 878,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAR002-NT",
    "name": "PARAMOUNT LIFE & GENERAL INSURANCE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAR002-NT-879",
        "bpCode": "PAR002-NT",
        "address": "15TH FLOOR SAGE HOUSE 110 V.A. RUFINO STREET LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "000-487-644-00000",
        "sourceRow": 879,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAR003",
    "name": "PARAGON ELECTROMECH & DEVELOPMENT CORPORATION",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-PAR003-880",
        "bpCode": "PAR003",
        "address": "UNIT 1B BLDG 3 ST. VERONICA VILLAS ESTANISLAO STREET, PUTATAN 1772, MUNTINLUPA, ncr",
        "federalTaxId": "010-760-829-00000",
        "contactPerson": "Mark Andrew Amoncio",
        "rawCategory": "Subcontructor",
        "sourceRow": 880,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAS001-NT",
    "name": "PASSMARK SOFTWARE PTY LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAS001-NT-881",
        "bpCode": "PAS001-NT",
        "address": "Level 5, 63 Foveaux St",
        "federalTaxId": "000000000000000",
        "contactPerson": "PASSMARK SOFTWARE",
        "sourceRow": 881,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAS002-NT",
    "name": "PASIA SHARED SERVICES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAS002-NT-882",
        "bpCode": "PAS002-NT",
        "address": "2322 PASONG TAMO EXT. MAGALLANES, MAKATI CITY",
        "federalTaxId": "010-239-382-000",
        "contactPerson": "SALES ASSOCIATE",
        "sourceRow": 882,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PASS001",
    "name": "PassionIT Group",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PASS001-883",
        "bpCode": "PASS001",
        "address": "119 SW Maynard Rd Suite 150 Cary, NC 27511",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "ONLINE",
        "sourceRow": 883,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PAX001",
    "name": "PAX8 PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PAX001-884",
        "bpCode": "PAX001",
        "address": "TMF PHILIPPINES, INC 24/F AIA TOWER 8767 PASEO DE ROXAS, BEL-AIR MAKATI CITY",
        "federalTaxId": "624-234-564-00000",
        "contactPerson": "JOWIE ALCALA",
        "supplierRank": "Major",
        "sourceRow": 884,
        "documents": {}
      },
      {
        "id": "branch-PAX001-NT-885",
        "bpCode": "PAX001-NT",
        "address": "TMF PHILIPPINES, INC 24/F AIA TOWER 8767 PASEO DE ROXAS, BEL-AIR MAKATI CITY",
        "federalTaxId": "624-234-564-00000",
        "contactPerson": "JOWIE ALCALA",
        "sourceRow": 885,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PCE001",
    "name": "PC EXPRESS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PCE001-886",
        "bpCode": "PCE001",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 886,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PCX001-NT",
    "name": "PHILCOX (PHILIPPINES) INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PCX001-NT-887",
        "bpCode": "PCX001-NT",
        "address": "8TH FLOOR PHILCOX BUILDING 172 SALCEDO ST LEGASPI VLLAGE SAN LORENZO 1229 MAKATI CITY 4TH DISTRICT",
        "federalTaxId": "000-138-401-00000",
        "contactPerson": "Belle Abustan",
        "sourceRow": 887,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PDF001-NT",
    "name": "PUNTA DE FABIAN RESORT INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PDF001-NT-888",
        "bpCode": "PDF001-NT",
        "address": "SITIO HANGAN EVANGELISTA BARAS RIZAL 1970",
        "federalTaxId": "233-167-492-000",
        "contactPerson": "Denis Benito",
        "sourceRow": 888,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PEA001",
    "name": "PEARSON VUE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PEA001-889",
        "bpCode": "PEA001",
        "address": "G/F S.B. TOVER 1A/1, SECTOR 16A         NOIDA, UTTAR PRADESH 201 301",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 889,
        "documents": {}
      },
      {
        "id": "branch-PEA001-NT-890",
        "bpCode": "PEA001-NT",
        "address": "G/F S.B. TOVER 1A/1, SECTOR 16A         NOIDA, UTTAR PRADESH 201 301",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 890,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PEO001-NT",
    "name": "PEOPLES GENERAL INSURANCE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PEO001-NT-891",
        "bpCode": "PEO001-NT",
        "address": "420 CALLE MAGALLANES, INTRAMUROS, MANILA",
        "federalTaxId": "000-887-923-00000",
        "sourceRow": 891,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PEO002-NT",
    "name": "PEOPLES EDUCATIONAL SUPPLY, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PEO002-NT-892",
        "bpCode": "PEO002-NT",
        "address": "COLON STREET, KALUBIHAN, CEBU CITY",
        "federalTaxId": "005-255-700-00300",
        "sourceRow": 892,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PEO003-NT",
    "name": "PEOPLE MANAGEMENT ASSOCIATION OF THE PHILS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PEO003-NT-893",
        "bpCode": "PEO003-NT",
        "address": "670 LEE ADDITION HILLS MANDALUYONG CITY 1552",
        "federalTaxId": "000-663-900-00000",
        "sourceRow": 893,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PEP001-NT",
    "name": "PEP SQUAD EVENTS AND MARKETING SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PEP001-NT-894",
        "bpCode": "PEP001-NT",
        "address": "UNIT 304 CITYLAND CON III 105 V.A RUFINO LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "007-806-687-000",
        "contactPerson": "KATHY MIRABUENO",
        "sourceRow": 894,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHE001",
    "name": "PHENOMENAL SOLUTIONS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHE001-895",
        "bpCode": "PHE001",
        "address": "G/F CSP BDLG. 173  EDSA, BRGY WACK WACK, MANDALUYONG CITY",
        "federalTaxId": "216-165-870-00000",
        "sourceRow": 895,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI001",
    "name": "PHILSOURCE VENTURES GROUP INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI001-896",
        "bpCode": "PHI001",
        "address": "189 N. DOMINGO ST.     BRGY. KAUNLARAN, QC",
        "federalTaxId": "009-561-355-00100",
        "sourceRow": 896,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI001-NT",
    "name": "PHILLIP EUGENIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI001-NT-897",
        "bpCode": "PHI001-NT",
        "address": "COMMERCIAL UNIT NO 118 A SUPIMA SQUARE, MALHACAN CITY OF MEYCAUAYAN BULACAN",
        "federalTaxId": "914-381-441-000",
        "contactPerson": "philip",
        "sourceRow": 897,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI002",
    "name": "PHILTEQ ENTERPRISE INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI002-898",
        "bpCode": "PHI002",
        "address": "20F GLOBAL BUSINESS TOWER 144 N DOMINGGO ST. COR MAYOR IGNACIO SANTOS DIAZ ST KAUNLARAN 1111 QC NCR",
        "federalTaxId": "008-292-913-00000",
        "sourceRow": 898,
        "documents": {}
      },
      {
        "id": "branch-PHI006-NT-905",
        "bpCode": "PHI006-NT",
        "address": "GLOBAL BUSINESS TOWER 144 N DOMINGGO ST. COR MAYOR IGNACIO SANTOS DIAZ ST KAUNLARAN 1111 QC NCR",
        "federalTaxId": "008-292-913-00000",
        "sourceRow": 905,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI002-NT",
    "name": "PHILHRG INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI002-NT-899",
        "bpCode": "PHI002-NT",
        "address": "L16 TOWER 6789 AYALA  AVENUE BRGY BEL AIR MAKATI 1226",
        "federalTaxId": "009-712-199-000",
        "contactPerson": "Darwin Rivers",
        "sourceRow": 899,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI003-NT",
    "name": "PHIL. CAMPUS CRUSADE FOR CHRIST",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI003-NT-900",
        "bpCode": "PHI003-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 900,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI004",
    "name": "PHILIPPE GADGETS & ACCESSORIES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI004-901",
        "bpCode": "PHI004",
        "address": "138-A WEST AVENUE QUEZON CITY",
        "federalTaxId": "221-895-949-00000",
        "sourceRow": 901,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI004-NT",
    "name": "PHILIPPINE INSTITUTE OF CYBER SECURITY PROFESSIONALS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI004-NT-902",
        "bpCode": "PHI004-NT",
        "address": "L-29 JOY NOSTALG CENTRE 17 ADB AVENUE ORTIGAS CENTER BRGY SAN ANTONIO PASIG CITY",
        "federalTaxId": "008-569-781-000",
        "contactPerson": "LAURICE BALBASTRO",
        "sourceRow": 902,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI005-NT",
    "name": "PHILIPPINE BRITISH ASSURANCE COMPANY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI005-NT-903",
        "bpCode": "PHI005-NT",
        "address": "PENTHOUSE CENTER MORNING STAR BLDG., 344 GIL. PUYAT.,MAKATI CITY",
        "federalTaxId": "000-803-300-00000",
        "sourceRow": 903,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI006",
    "name": "PHILIPPINE DUPLICATORS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI006-904",
        "bpCode": "PHI006",
        "address": "MSI-ECS COMPLEX , M. EUSEBIO STREET BRGY SAN MIGUEL, PASIG CITY",
        "federalTaxId": "000412893007000",
        "contactPerson": "DAVE PENDON",
        "mobilePhone": "09108595647",
        "sourceRow": 904,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI008",
    "name": "PHILCOPY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI008-906",
        "bpCode": "PHI008",
        "address": "793 J.P. RIZAL AVE. POBLACION NCR, FOURTH DISTRICT 1210 CITY OF MAKATI PHILIPPINES",
        "federalTaxId": "000-169-318-00000",
        "contactPerson": "JACQUE ADORINO",
        "email": "info@philcopy.net",
        "sourceRow": 906,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI009",
    "name": "PHIL-DATA BUSINESS SYSTEMS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI009-907",
        "bpCode": "PHI009",
        "address": "3/F KINGS COURT II BLDG 2129 CHINO ROCES AVE BRGY PIO DEL PILAR MAKATI CITY",
        "federalTaxId": "000-136-396-000",
        "contactPerson": "MARK NINO HUBERIT",
        "mobilePhone": "09171540293",
        "sourceRow": 907,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI010-NT",
    "name": "PHILIA GIVEAWAYS TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI010-NT-908",
        "bpCode": "PHI010-NT",
        "federalTaxId": "499-392-488-00000",
        "contactPerson": "HONEY DE GUZMAN",
        "mobilePhone": "09707715101",
        "sourceRow": 908,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHI072",
    "name": "PHILFOAM FURNISHING INDUSTRIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHI072-909",
        "bpCode": "PHI072",
        "address": "489 ROSITA T UY BLDG. SHAW BLVD ADDITION HILLS",
        "federalTaxId": "243-876-897-005",
        "contactPerson": "MARK ANTHONY PAMA",
        "mobilePhone": "09171135783",
        "sourceRow": 909,
        "documents": {}
      },
      {
        "id": "branch-PHI072-NT-910",
        "bpCode": "PHI072-NT",
        "address": "489 ROSITA T UY BLDG. SHAW BLVD ADDITION HILLS",
        "federalTaxId": "243-876-897-005",
        "contactPerson": "MARK ANTHONY PAMA",
        "mobilePhone": "09171135783",
        "sourceRow": 910,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PHL001-NT",
    "name": "PHILHEALTHCARE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PHL001-NT-911",
        "bpCode": "PHL001-NT",
        "address": "2ND AND 5TH FLOOR STI HOLDINGS CENTER AYALA AVE BRGY SAN LORENZO MAKATI CITY 1226",
        "federalTaxId": "000-888-183-000",
        "contactPerson": "Chris Caribala",
        "mobilePhone": "09989653318",
        "sourceRow": 911,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PIL001-NT",
    "name": "SHELL PILIPINAS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PIL001-NT-912",
        "bpCode": "PIL001-NT",
        "address": "41/F THE FINANCE CENTER, 26TH ST. COR. 9TH AVE., BGC, BRGY. FORT BONIFACIO, TAGUIG CITY",
        "federalTaxId": "000-164-757-00000",
        "sourceRow": 912,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PIO001-NT",
    "name": "PIONEER LIFE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PIO001-NT-913",
        "bpCode": "PIO001-NT",
        "address": "PIONEER HOUSE MAKATI 108 PASEO DE ROXAS LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "005-299-198-00000",
        "sourceRow": 913,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PIO002-NT",
    "name": "PIONEER 300 BOWLING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PIO002-NT-914",
        "bpCode": "PIO002-NT",
        "address": "NO 8006 PIONEER ST KAPITOLYO",
        "federalTaxId": "010-316-858-00000",
        "sourceRow": 914,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PIV001",
    "name": "PIVOT VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PIV001-915",
        "bpCode": "PIV001",
        "address": "JMK BLDG. 121 WEST AVE. BUNGAD QC",
        "federalTaxId": "010-628-534-00000",
        "contactPerson": "JANEEN",
        "mobilePhone": "09664002910",
        "sourceRow": 915,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PIX001",
    "name": "PIXEL DATA INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PIX001-916",
        "bpCode": "PIX001",
        "address": "10 VISAYAS AVE. SAINT MARTIN VILLAGE A.S. FORTUNA, BANILAD, MANDAUE CITY",
        "federalTaxId": "007-141-730-00000",
        "sourceRow": 916,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PIX002",
    "name": "PIXELTONE MULTIMEDIA CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PIX002-917",
        "bpCode": "PIX002",
        "address": "Cubao",
        "federalTaxId": "209-079-807-00000",
        "sourceRow": 917,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PJG001",
    "name": "PJG AUTO GLASS AND ALUMINUM SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PJG001-918",
        "bpCode": "PJG001",
        "address": "#0189 CASMOR SUBD., PHASE I, MC ARTHUR HIWAY, MABIGA,",
        "federalTaxId": "407-754-180-00000",
        "sourceRow": 918,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PLD001-NT",
    "name": "PLDT INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PLD001-NT-919",
        "bpCode": "PLD001-NT",
        "address": "RAMON COJUANGCO BLDG MAKATI AVE., MAKATI CITY",
        "federalTaxId": "000-488-793-00000",
        "sourceRow": 919,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PMR001-NT",
    "name": "PHILMOOR TESS TRADING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PMR001-NT-920",
        "bpCode": "PMR001-NT",
        "address": "43 PANSOL AVE, PANSOL, QUEZON CITY",
        "federalTaxId": "740-233-167-000",
        "contactPerson": "HUAWEI PHIL",
        "sourceRow": 920,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PON001",
    "name": "PONCIANO MALUBAY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PON001-921",
        "bpCode": "PON001",
        "address": "315 SAMPALOC ST., OLD STA. MESA, METRO MANILA",
        "federalTaxId": "197-485-686-000NV",
        "sourceRow": 921,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POR001",
    "name": "PORTSWIGGER LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POR001-922",
        "bpCode": "POR001",
        "address": "6 BOOTHS PARK CHELFORD ROAD, KNUTSFORD WA16 8ZS UK",
        "federalTaxId": "GB9485630850000",
        "contactPerson": "DERRICK SY",
        "sourceRow": 922,
        "documents": {}
      },
      {
        "id": "branch-POR001-NT-923",
        "bpCode": "POR001-NT",
        "address": "6 BOOTHS PARK CHELFORD ROAD, KNUTSFORD WA16 8ZS UK",
        "federalTaxId": "GB9485630850000",
        "contactPerson": "DERRICK SY",
        "sourceRow": 923,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POS001",
    "name": "POSTMAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POS001-924",
        "bpCode": "POS001",
        "address": "201 Mission Street Suite 2375 San Francisco, CA 94105",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "Abhinav Asthana",
        "sourceRow": 924,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POW001",
    "name": "POWER MAC CENTER, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POW001-925",
        "bpCode": "POW001",
        "address": "EX 305 3rd Flr.,The Podium,ADB Ave.,Brgy.Wack-Wack, Greenhills, East Ortigas Ctr,Mandaluyong City",
        "federalTaxId": "004-451-692-000",
        "sourceRow": 925,
        "documents": {}
      },
      {
        "id": "branch-POW006-NT-931",
        "bpCode": "POW006-NT",
        "address": "EX 305 3rd Flr.,The Podium,ADB Ave.,Brgy.Wack-Wack, Greenhills, East Ortigas Ctr,Mandaluyong City",
        "federalTaxId": "004-451-692-000",
        "contactPerson": "POWERMAC",
        "sourceRow": 931,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POW001-NT",
    "name": "POWERMAX CONSULTING GROUP INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POW001-NT-926",
        "bpCode": "POW001-NT",
        "address": "UNIT 104 CORINTHIAN EXECUTIVE REGENCY ORTIGAS AVE",
        "federalTaxId": "006-672-834-000",
        "contactPerson": "JHIE TEJADA",
        "sourceRow": 926,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POW002",
    "name": "POWER SYSTEM ENGINEERING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POW002-927",
        "bpCode": "POW002",
        "address": "319 CHAMPACA ST AYALA HOUSING BARANGKA DRIVE MANDALUYONG CITY",
        "federalTaxId": "145-518-892-00000",
        "sourceRow": 927,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POW003",
    "name": "POWERCRAFT SOLUTIONS AND DATA INFRASTRUCTURE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POW003-928",
        "bpCode": "POW003",
        "address": "17F UNIT 1708 RAFFLES CORPORATE CENTER DON F ORTIGAS JR ROAD ORTIGAS CENTER SAN ANTONIO PASIG CITY",
        "federalTaxId": "008-224-451-00000",
        "sourceRow": 928,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POW004",
    "name": "POWERCITY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POW004-929",
        "bpCode": "POW004",
        "address": "198 VITALEZ COMPOUND VITALEZ AVE COR SAMPAGUITA ST SAN ISIDRO SUCAT CITY OF PARANAQUE 1700",
        "federalTaxId": "005-061-714-00000",
        "sourceRow": 929,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-POW005",
    "name": "POWERLINES DIGITAL CONCEPTS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-POW005-930",
        "bpCode": "POW005",
        "address": "1432 LIBRADA AVELINO ST. BARANGAY 857 ZONE 93 DISTRICT VI 1011 PANDACAN NCR, CITY OF MANILA",
        "federalTaxId": "007-104-620-00000",
        "contactPerson": "ABIGAIL TRAPSI",
        "sourceRow": 930,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRE001",
    "name": "PRESIDIUM.PH CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRE001-932",
        "bpCode": "PRE001",
        "address": "UNIT G9-G12 MDC 100 BUILDING E RODRIGUEZ COR EASTWOOD AVENUE, BAGUMBAYAN 1110 QUEZON CITY NCR, 2ND D",
        "federalTaxId": "009-679-385-00000",
        "contactPerson": "Joel Togonon",
        "mobilePhone": "09953751251",
        "sourceRow": 932,
        "documents": {}
      },
      {
        "id": "branch-PRE003-934",
        "bpCode": "PRE003",
        "address": "UNIT G9-G12 MDC 100 BUILDING E RODRIGUEZ COR EASTWOOD AVENUE, BAGUMBAYAN 1110 QUEZON CITY NCR, 2ND D",
        "federalTaxId": "009-679-385-00000",
        "sourceRow": 934,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRE002",
    "name": "PRECIOUS ISLAND CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRE002-933",
        "bpCode": "PRE002",
        "address": "1629 LAGUNA ST.. BRGY 348 ZONE 035 STA CRUZ MANILA 1003",
        "federalTaxId": "224-495-152-000",
        "sourceRow": 933,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRG001",
    "name": "PRG PHOTO SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRG001-935",
        "bpCode": "PRG001",
        "address": "UNIT 223 RAINTREE MALL GENERAL MAXILOM AVE COGON CENTRAL CEBU",
        "federalTaxId": "920-066-619-00000",
        "sourceRow": 935,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRI001",
    "name": "PRINT DEPOT INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRI001-936",
        "bpCode": "PRI001",
        "address": "2/F DAO 1 BUILDING 189 SALCEDO ST., LEGASPI VILLAGE MAKATI CITY",
        "federalTaxId": "241-772-339-00000",
        "sourceRow": 936,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRI001-NT",
    "name": "PRINTSTATION PHIL PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRI001-NT-937",
        "bpCode": "PRI001-NT",
        "address": "21 LATUNDAN ST BATASAN HILLS",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 937,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRI002",
    "name": "PRISMATECH INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRI002-938",
        "bpCode": "PRI002",
        "address": "L3 SPACE 3036/3035 FESTIVAL SUPERMALL ALABANG-ZAPOTE ROAD ALABANG MUNTINLUPA CITY",
        "federalTaxId": "920-066-619-00000",
        "sourceRow": 938,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRI007",
    "name": "PRIME WASTE SOLUTIONS PAMPANGA, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRI007-939",
        "bpCode": "PRI007",
        "address": "PLANAS 2008 PORAC PAMPANGA PHILIPPINES",
        "federalTaxId": "625-831-627-00000",
        "contactPerson": "AURORA ORANGA",
        "sourceRow": 939,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRI015-NT",
    "name": "PRIME LEATHERCRAFT TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRI015-NT-940",
        "bpCode": "PRI015-NT",
        "federalTaxId": "274-682-274-002",
        "contactPerson": "MONTE CARLO",
        "mobilePhone": "09988863887",
        "email": "inquiry@primeleathercraft.com",
        "sourceRow": 940,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRO001",
    "name": "PROGRESS HOME AND OFFICE FURNISHINGS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRO001-941",
        "bpCode": "PRO001",
        "address": "QUIMPO BLVD COR ECO WEST DRIVE ECOLAND DAVAO CITY",
        "federalTaxId": "002-884-643-01200",
        "sourceRow": 941,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRO002",
    "name": "PROSERV COMMUNICATION SYSTEMS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRO002-942",
        "bpCode": "PRO002",
        "address": "U-11A G/F CENTURY PLAZA BLDG",
        "federalTaxId": "123-025-986-00000",
        "sourceRow": 942,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRO003-NT",
    "name": "PROMATE LIFESTYLE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRO003-NT-943",
        "bpCode": "PRO003-NT",
        "address": "2F SPACE WRC BLDGGIL FERNANDO AVENUE SAN ROQUE MARIKINA CITY 1820",
        "federalTaxId": "009-545-237-00000",
        "sourceRow": 943,
        "documents": {}
      },
      {
        "id": "branch-PRO006-944",
        "bpCode": "PRO006",
        "address": "2F SPACE WRC BLDGGIL FERNANDO AVENUE SAN ROQUE MARIKINA CITY 1820",
        "federalTaxId": "009-545-237-000",
        "contactPerson": "MAVIC DELOS SANTOS",
        "mobilePhone": "0956745900",
        "sourceRow": 944,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PRU001-NT",
    "name": "PRUDENTIAL GUARANTEE AND ASSURANCE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PRU001-NT-945",
        "bpCode": "PRU001-NT",
        "address": "119 PALANCA ST., LEGASPI VILLAGE, MAKATI CITY",
        "federalTaxId": "000-491-813-00000",
        "sourceRow": 945,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PYEZA001",
    "name": "PYEZA PARTS DEPOT INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PYEZA001-946",
        "bpCode": "PYEZA001",
        "address": "KAPITAN PARTS BLDG. SUBANGDAKU MANDAUE CITY",
        "federalTaxId": "292-437-713-00001",
        "contactPerson": "Christopher Caresosa",
        "email": "kapitan_pyeza@yahoo.com",
        "sourceRow": 946,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-PYR001-NT",
    "name": "PYR4MID LAZER OFFICE AND SCHOOL SUPPLIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-PYR001-NT-947",
        "bpCode": "PYR001-NT",
        "address": "46 AURORA DRIVE VERGONVILLE SUBD PULANG LUPA DOS",
        "federalTaxId": "342-164-809-00000",
        "sourceRow": 947,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-QL8001-NT",
    "name": "QL8 CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-QL8001-NT-948",
        "bpCode": "QL8001-NT",
        "address": "#116 MAHUGANY ST",
        "federalTaxId": "478-461-633-00000",
        "sourceRow": 948,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-QSO001",
    "name": "Q SOFTWARE RESEARCH CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-QSO001-949",
        "bpCode": "QSO001",
        "address": "456 BONI AVE., BRGY. NEW ZANIGA MANDALUYONG CITY",
        "federalTaxId": "005-284-422-00000",
        "sourceRow": 949,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-QUA001",
    "name": "QUALYS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-QUA001-950",
        "bpCode": "QUA001",
        "address": "919 EHILLSDALE BLVD 4TH FLOOR FOSTER CITY USA",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 950,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-QUA002",
    "name": "QUARTZ BUSINESS PRODUCTS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-QUA002-951",
        "bpCode": "QUA002",
        "address": "SUITE 910 CITYLAND 10 TOWER 1   6815 AYALA AVENUE, MAKATI",
        "federalTaxId": "000-167-050-00000",
        "sourceRow": 951,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-QUA003-NT",
    "name": "QUANTSOFT OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-QUA003-NT-952",
        "bpCode": "QUA003-NT",
        "address": "3/F SALCEDO ONE CENTER, 170 SALCEDO ST., LLEGASPI VILL.,",
        "federalTaxId": "502-345-984-00000",
        "sourceRow": 952,
        "documents": {}
      },
      {
        "id": "branch-QUA004-NT-953",
        "bpCode": "QUA004-NT",
        "address": "3/F SALCEDO ONE CENTER, 170 SALCEDO ST., LEGASPI VILL., MAKATI CITY",
        "federalTaxId": "502-345-984-00000",
        "contactPerson": "VALERIE NUCUM",
        "sourceRow": 953,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-QUA005-NT",
    "name": "QUADMIND MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-QUA005-NT-954",
        "bpCode": "QUA005-NT",
        "address": "UNIT 102 GLOBAL STAR BLDG RAYMUNDO AVENUE CANIOGAN 1606 PASIG CITY NCR SECOND DISTRICT",
        "federalTaxId": "200-833-967-00000",
        "contactPerson": "ARWENA MABATO",
        "sourceRow": 954,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAD001",
    "name": "RADENTA TECHNOLOGIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAD001-955",
        "bpCode": "RAD001",
        "address": "UNIT 2-BC 2/F CBC CORPORATE CENTER 724 SHAW BLVD. WACK WACK GREENHILLS EAST MANDALUYONG CITY",
        "federalTaxId": "009-221-142-00000",
        "sourceRow": 955,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAD002-NT",
    "name": "RADINO T. GUMBAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAD002-NT-956",
        "bpCode": "RAD002-NT",
        "address": "ZONE 2 SAN JUAN, MOLO, ILO-ILO CITY, 5000",
        "federalTaxId": "469-428-459-00000",
        "contactPerson": "MICHAEL QUITAHON",
        "sourceRow": 956,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAI001",
    "name": "RAINBOW-TECH SYSTEMS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAI001-957",
        "bpCode": "RAI001",
        "address": "2/F SEASONS LIPA BLDG. BRGY TAMBO LIPA CITY BATANGAS",
        "federalTaxId": "220-771-036-00001",
        "contactPerson": "TJ MATERUM",
        "sourceRow": 957,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAK001-NT",
    "name": "RAKSO AIR TRAVEL & TOURS, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAK001-NT-958",
        "bpCode": "RAK001-NT",
        "address": "3/F RICO BUILDING 112 AGUIRRE ST LEGASPI VILLAGE MAKATI CITY PHILIPPINES",
        "federalTaxId": "203-711-172-000",
        "contactPerson": "AAAAA",
        "sourceRow": 958,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAM001-NT",
    "name": "RAMIL DE GUZMAN",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAM001-NT-959",
        "bpCode": "RAM001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "005-679-717-00000",
        "sourceRow": 959,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAN001",
    "name": "RANMAR CONSTRUCTION SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAN001-960",
        "bpCode": "RAN001",
        "address": "#13 CATBALOGAN STREET LUZVIMINDA VILLAGE BATASAN HILLS QUEZON CITY",
        "federalTaxId": "246-958-000-00000",
        "sourceRow": 960,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAY001-NT",
    "name": "RAY TRISTEZA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAY001-NT-961",
        "bpCode": "RAY001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "237-236-770-00000",
        "sourceRow": 961,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RAZ001-NT",
    "name": "RAZON, OZMUND ABANILLA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RAZ001-NT-962",
        "bpCode": "RAZ001-NT",
        "address": "UNIT L4-F1 BURGUNDY WESTBAY TOWER 820 P OCAMPO SR STREET ZONE 78 BARANGAY 719 1004 MALATE MANILA",
        "federalTaxId": "232-604-221-00000",
        "contactPerson": "ALEX LUAN",
        "sourceRow": 962,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RCA001-NT",
    "name": "RC AIRE INDUSTRIAL TRADING CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RCA001-NT-963",
        "bpCode": "RCA001-NT",
        "address": "DOOR1-C FRANCISCO LIM BLDG M.L QUEZON NATIONAL HIGHWAY PAJO 6015 LAPU-LAPU CITY CEBU PH",
        "federalTaxId": "638-130-578-00000",
        "contactPerson": "SALES PERSON",
        "mobilePhone": "09173036723",
        "sourceRow": 963,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RCG001-NT",
    "name": "RCGM FURNISHING TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RCG001-NT-964",
        "bpCode": "RCG001-NT",
        "address": "RM 302 3/F EVEKAL BLDG 855 A ARNAIZ AVE SAN LORENZO MAKATI",
        "federalTaxId": "436-366-395-00000",
        "sourceRow": 964,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RDC001-NT",
    "name": "RDCD PRINTHOUSE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RDC001-NT-965",
        "bpCode": "RDC001-NT",
        "address": "8021 HERNANDEZ AVE SAN ANTONIO VALLEY 8",
        "federalTaxId": "295-450-332-00000",
        "sourceRow": 965,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RED001",
    "name": "RED HAT ASIA PACIFIC PTE LTD.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RED001-966",
        "bpCode": "RED001",
        "address": "8 SHENTON WAY #11-01 SINGAPORE 068811",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 966,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RED001-NT",
    "name": "RED HAT PHILIPPINES SOFTWARE SOLUTIONS CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RED001-NT-967",
        "bpCode": "RED001-NT",
        "address": "7F THE ASCOTT MAKATI GLORIETTA 4 AYALA CENTER BRGY SAN LORENZO",
        "federalTaxId": "010-073-298-00000",
        "sourceRow": 967,
        "documents": {}
      },
      {
        "id": "branch-RED003-969",
        "bpCode": "RED003",
        "address": "7/F UNIT B, 8 ROCKWELL DRIVE , ROCKWELL CENTER,POBLACION 1210,CITY OF MAKATI, NCR 4TH DT,PHLIPPINES",
        "federalTaxId": "010-073-298-00000",
        "sourceRow": 969,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RED002",
    "name": "REDWOOD VENTURES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RED002-968",
        "bpCode": "RED002",
        "address": "32 PILAR COR ARAULLO STS., ADDITION HILS, SAN JUAN, MANILA",
        "federalTaxId": "005-799-467-00000",
        "sourceRow": 968,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RED004",
    "name": "RED ROCK IT SECURITY INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RED004-970",
        "bpCode": "RED004",
        "address": "UNIT 301 38 ROCKWELL DRIVE PALMA ST ROCKWELL CENTER POBLACION MAKATI CITY",
        "federalTaxId": "009-462-540-00000",
        "sourceRow": 970,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-REG001-NT",
    "name": "REGGIE ACBANG",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-REG001-NT-971",
        "bpCode": "REG001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "183-182-831-00000",
        "sourceRow": 971,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-REG002",
    "name": "REGGIE CORNELIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-REG002-972",
        "bpCode": "REG002",
        "address": "B10 L7 HORSESHOE ST., MAPULANG LUPA, VALENZUELA CITY",
        "federalTaxId": "225-769-859-00000",
        "sourceRow": 972,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-REL001",
    "name": "RELIABLE ELECTRIC CO., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-REL001-973",
        "bpCode": "REL001",
        "address": "RELIABLE ELECTRIC BLDG., 7230 MALUGAY ST.,",
        "federalTaxId": "000-169-836-00000",
        "sourceRow": 973,
        "documents": {}
      },
      {
        "id": "branch-REL002-974",
        "bpCode": "REL002",
        "address": "RELIABLE ELECTRIC BLDG MALUGAY ST",
        "federalTaxId": "000-169-836-00000",
        "sourceRow": 974,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-REM001",
    "name": "REMAX INTERNATIONAL, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-REM001-975",
        "bpCode": "REM001",
        "address": "18 UNITED STREET, BO. KAPITOLYO",
        "federalTaxId": "001-250-469-00000",
        "sourceRow": 975,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RES001",
    "name": "RESMA, DAISY FLORES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RES001-976",
        "bpCode": "RES001",
        "address": "3/F LEFT WING ARTS & SCIENCES BLDG UP CEBU GORORDO AVENUE LAHUG, CEBU CITY 6000",
        "federalTaxId": "773-813-703-000",
        "contactPerson": "Cornelio Resma",
        "sourceRow": 976,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RES001-NT",
    "name": "RESOURCES FREIGHT PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RES001-NT-977",
        "bpCode": "RES001-NT",
        "address": "8 KAKI BUKITT ROAD",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 977,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RES005-NT",
    "name": "RESOURCES FREIGHT PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RES005-NT-978",
        "bpCode": "RES005-NT",
        "address": "2F-58 CALLE HERMOSA DAANG BATANG ST.LAS CASAS 100 MOONWALK PARANAQUE CITY 1709",
        "federalTaxId": "209-438-724-00000",
        "contactPerson": "VILMA MONTILLA",
        "sourceRow": 978,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-REY001-NT",
    "name": "REY, IGGY SAN LUIS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-REY001-NT-979",
        "bpCode": "REY001-NT",
        "address": "268 EL GRANDE AVENUE BF HOMES CITY PARANAQUE NC FOURTH DISTRICT 1720",
        "federalTaxId": "261-990-941-00000",
        "contactPerson": "IGGY REY",
        "sourceRow": 979,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RFB001-NT",
    "name": "RFB AIRCONDITIONING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RFB001-NT-980",
        "bpCode": "RFB001-NT",
        "address": "2801- A PADRE ZAMORA STREET, BARNGAY 97, PASAY",
        "federalTaxId": "205-330-059-00000",
        "sourceRow": 980,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RFC001-NT",
    "name": "RFC CARGO LOGISTICS INTL., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RFC001-NT-981",
        "bpCode": "RFC001-NT",
        "address": "56 LAS CASAS 100 DAANG BATANG MOONWALK",
        "federalTaxId": "009-026-999-00000",
        "sourceRow": 981,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RGL001-NT",
    "name": "R.G.L. AUTO PARTS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RGL001-NT-982",
        "bpCode": "RGL001-NT",
        "address": "1805 EVANGELISTA ST.,BANGKAL,",
        "federalTaxId": "211-224-162-00000",
        "sourceRow": 982,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RHI001",
    "name": "RHIPE PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RHI001-983",
        "bpCode": "RHI001",
        "address": "15F WILCON IT HUB 2251 CHINO ROCES AVE, BRGY BANGKAL, MAKATI CITY",
        "federalTaxId": "008-589-680-00000",
        "sourceRow": 983,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIC001",
    "name": "RICHARD GLENN REYES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIC001-984",
        "bpCode": "RIC001",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "200-246-018-00000",
        "contactPerson": "RICHARD GLENN REYES",
        "sourceRow": 984,
        "documents": {}
      },
      {
        "id": "branch-RIC001-NT-985",
        "bpCode": "RIC001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "200-246-018-00000",
        "sourceRow": 985,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIC002",
    "name": "RICKLEE ENTERPRISES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIC002-986",
        "bpCode": "RIC002",
        "address": "RICKLEE CENTER #1 F ROXAS ST. TIBAGAN, SAN JUAN CITY",
        "federalTaxId": "001-860-236-000",
        "contactPerson": "CHESTER",
        "mobilePhone": "09668768113",
        "sourceRow": 986,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIC002-NT",
    "name": "RICHEL GEROCHE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIC002-NT-987",
        "bpCode": "RIC002-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "238-549-545-00000",
        "sourceRow": 987,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIC003",
    "name": "RICKNETH DISTRIBUTION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIC003-988",
        "bpCode": "RIC003",
        "address": "8119 TKP BUILDING, OLD SUCAT ROAD, SAN DIONISIO, PARANAQUE CITY, 1700",
        "federalTaxId": "007-110-987-00000",
        "sourceRow": 988,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RID001-NT",
    "name": "RIDE, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RID001-NT-989",
        "bpCode": "RID001-NT",
        "address": "97 BANAWE ST.,ST. PETER I1, QUEZON CITY",
        "federalTaxId": "004-708-330-00000",
        "sourceRow": 989,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIG001",
    "name": "RIGIDITY BOLTS AND TOOLS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIG001-990",
        "bpCode": "RIG001",
        "address": "NO.45C PINATUBO ST., BRGY. MALAMIG, DISTRICT II",
        "federalTaxId": "010-324-979-00000",
        "sourceRow": 990,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIT001-NT",
    "name": "RITMAR TRANSFER-IT PRINTS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIT001-NT-991",
        "bpCode": "RIT001-NT",
        "address": "2ND FLOOR ADRIATICO WING ROBINSONS PLACE MANILA",
        "federalTaxId": "253-527-372-00100",
        "sourceRow": 991,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RIW001-NT",
    "name": "RI-WEL PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RIW001-NT-992",
        "bpCode": "RIW001-NT",
        "address": "764 RIZAL AVE. STA CRUZ MANILA",
        "federalTaxId": "296-662-861-00000",
        "contactPerson": "DENDEN",
        "sourceRow": 992,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RKI001",
    "name": "RKI GADGET CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RKI001-993",
        "bpCode": "RKI001",
        "address": "B7 L3 SANTORINI ESTATE CALUMPANG BINANGONAN RIZAL",
        "federalTaxId": "247-539-367-00000",
        "sourceRow": 993,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RNI001",
    "name": "RNI INFORMATION TECHNOLOGY SERVICE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RNI001-994",
        "bpCode": "RNI001",
        "address": "UNIT 3A A&L BLDG #126 N DOMINGO ST. PEDRO CRUZ SAN JUAN CITY",
        "federalTaxId": "218-436-048-00000",
        "sourceRow": 994,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RNJ001-NT",
    "name": "R AND J PRINTABLES PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RNJ001-NT-995",
        "bpCode": "RNJ001-NT",
        "address": "BLK 2 LOT 10 F MANALO ST MONTVILLE PLACE 2 BAMBANG 1600 PASIG CITY",
        "federalTaxId": "452-258-940-00000",
        "contactPerson": "JOSEPH SANTOS",
        "mobilePhone": "09777977041",
        "sourceRow": 995,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RNT001",
    "name": "RNT DISTRIBUTION TECHNOLOGIES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RNT001-996",
        "bpCode": "RNT001",
        "address": "PASIG CITY",
        "federalTaxId": "101-735-754-00000",
        "contactPerson": "BONG",
        "mobilePhone": "09771064684",
        "sourceRow": 996,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROA001-NT",
    "name": "ROAD2GO TRUCKING SERVICES OPC",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-ROA001-NT-997",
        "bpCode": "ROA001-NT",
        "address": "SITIO IBAYONG KAONG 4118 SILANG CAVITE PHILLPINES",
        "federalTaxId": "679-577-060-00000",
        "contactPerson": "RAYMARK MAGALONG",
        "rawCategory": "Courier-NT",
        "sourceRow": 997,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROB001",
    "name": "ROBINSONS HANDYMAN INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROB001-998",
        "bpCode": "ROB001",
        "address": "UPPER GROUND FLOOR ROBINSONS PLACE PIONEER EDSA COR PIONEER ST MANDALUYONG CITY 1550",
        "federalTaxId": "003-988-229-03600",
        "sourceRow": 998,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROB001-NT",
    "name": "ROBINSONS LAND CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROB001-NT-999",
        "bpCode": "ROB001-NT",
        "address": "L2 ROBINSONS GALLERIA EDSA COR ORTIGAS AVENUE UGONG NORTE 1110 QUEZON CITY",
        "federalTaxId": "000-361-376-00019",
        "contactPerson": "ANA DE OCAMPO",
        "sourceRow": 999,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROB008V",
    "name": "ROBINSONS TRUE SERVE HARDWARE PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROB008V-1000",
        "bpCode": "ROB008V",
        "address": "4TH LEVEL AYALA MALLS BAY AREA ASEANA AVE COR MACAPAGAL AVE PARANAQUE",
        "federalTaxId": "006-643-830-00032",
        "contactPerson": "SALES PERSON",
        "sourceRow": 1000,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROD001",
    "name": "RODOLFO AGUILAR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROD001-1001",
        "bpCode": "ROD001",
        "address": "CEBU CITY",
        "federalTaxId": "169-922-546-000NV",
        "sourceRow": 1001,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROD002-NT",
    "name": "RODEL SALVACION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROD002-NT-1002",
        "bpCode": "ROD002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1002,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROG001-NT",
    "name": "ROGER RAMOS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROG001-NT-1003",
        "bpCode": "ROG001-NT",
        "federalTaxId": "187-732-195-00000",
        "sourceRow": 1003,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROM001-NT",
    "name": "ROMAN JORGE SOLIS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROM001-NT-1004",
        "bpCode": "ROM001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "904-288-406-00000",
        "sourceRow": 1004,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROM002-NT",
    "name": "ROMANO CUERVO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROM002-NT-1005",
        "bpCode": "ROM002-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "223-019-428-00000",
        "sourceRow": 1005,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROM003-NT",
    "name": "ROMMEL MALLARI",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROM003-NT-1006",
        "bpCode": "ROM003-NT",
        "federalTaxId": "251-201-860-00000",
        "sourceRow": 1006,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROM004",
    "name": "ROMMEL G. FLORES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROM004-1007",
        "bpCode": "ROM004",
        "address": "LEVEL 4 AYALA MALLS FELIZ MARKETFINDS  MARCOS HIGHWAY DELA PAZ 160 CITY OF PASIG NCR, 2ND DISTRICT",
        "federalTaxId": "511-766-003-00000",
        "contactPerson": "ROMMEL G. FLORES",
        "sourceRow": 1007,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RON001",
    "name": "RONISYS GENERAL TRADING CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RON001-1008",
        "bpCode": "RON001",
        "address": "747 NICANOR PADILLA ST ZONE 067 BRGY 646 SAN MIGUEL MANILA 1005",
        "federalTaxId": "775-217-850-000",
        "contactPerson": "Jonalyn Mangrubang",
        "mobilePhone": "09995570751",
        "sourceRow": 1008,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RON001-NT",
    "name": "RONALD ROSS DAVID",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RON001-NT-1009",
        "bpCode": "RON001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "210-186-686-00000",
        "sourceRow": 1009,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RON002-NT",
    "name": "RONALD SISON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RON002-NT-1010",
        "bpCode": "RON002-NT",
        "federalTaxId": "250-723-034-00000",
        "sourceRow": 1010,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RON003-NT",
    "name": "RONEENA INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RON003-NT-1011",
        "bpCode": "RON003-NT",
        "address": "LOWER GROUND FLR. SM MEGAMALL BLDG A, EDSA WACK WACK GREENHILLS EAST MANDALUYONG CITY",
        "federalTaxId": "228-050-298-00700",
        "sourceRow": 1011,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ROO001-NT",
    "name": "ROOTCON CONFERENCE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ROO001-NT-1012",
        "bpCode": "ROO001-NT",
        "address": "WEBSITE",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "WEBSITE",
        "sourceRow": 1012,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RPY001",
    "name": "RPYA CONSTRUCTION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RPY001-1013",
        "bpCode": "RPY001",
        "address": "592 GUYABANO ST NAPICO MANGGAHAN PASIG",
        "federalTaxId": "198-399-507-000NV",
        "sourceRow": 1013,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RSC001",
    "name": "RS COMPONENTS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RSC001-1014",
        "bpCode": "RSC001",
        "address": "21/F Multinational Bancorporation Centre 6805 Ayala Avenue Makati City",
        "federalTaxId": "008-449-129-000",
        "contactPerson": "BILL",
        "sourceRow": 1014,
        "documents": {}
      },
      {
        "id": "branch-RSC001-NT-1015",
        "bpCode": "RSC001-NT",
        "address": "21/F Multinational Bancorporation Centre 6805 Ayala Avenue Makati City",
        "federalTaxId": "008-449-129-000",
        "contactPerson": "BILL",
        "sourceRow": 1015,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RSY001-NT",
    "name": "RSY GOLD LAND CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RSY001-NT-1016",
        "bpCode": "RSY001-NT",
        "address": "#97 MCARTHUR HIWAY MATINA TALOMO, DAVAO CITY",
        "federalTaxId": "440-307-017-00100",
        "sourceRow": 1016,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RTH001",
    "name": "R. THOMAS CONSULTING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RTH001-1017",
        "bpCode": "RTH001",
        "federalTaxId": "000-000-000-00100",
        "sourceRow": 1017,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RYA001-NT",
    "name": "RYAN CABARROGUIS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RYA001-NT-1018",
        "bpCode": "RYA001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "205-950-747-00000",
        "sourceRow": 1018,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RYA002-NT",
    "name": "RYAN QUIOCHO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RYA002-NT-1019",
        "bpCode": "RYA002-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "237-236-770-00000",
        "sourceRow": 1019,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RYA003-NT",
    "name": "RYAN RIVERA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-RYA003-NT-1020",
        "bpCode": "RYA003-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-001-100-00000",
        "sourceRow": 1020,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-RZ1001",
    "name": "RZ1 FREIGHT EXPRESS CORPORATION",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-RZ1001-1021",
        "bpCode": "RZ1001",
        "address": "UNIT L&M COLUMBIA COMPLEX NINOY AQUINO AVE SANTO NINO PARANAQUE CITY",
        "federalTaxId": "009-097-844-00000",
        "contactPerson": "Mr. Charles Harvey Ponce",
        "mobilePhone": "09702156327",
        "rawCategory": "Courier",
        "sourceRow": 1021,
        "documents": {}
      },
      {
        "id": "branch-RZ1001-NT-1022",
        "bpCode": "RZ1001-NT",
        "address": "UNIT L&M COLUMBIA COMPLEX NINOY AQUINO AVE SANTO NINO PARANAQUE CITY",
        "federalTaxId": "009-097-844-00000",
        "contactPerson": "Mr. Charles Harvey Ponce",
        "mobilePhone": "09702156327",
        "rawCategory": "Courier-NT",
        "sourceRow": 1022,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-S1T001",
    "name": "S1 TECHNOLOGIES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-S1T001-1023",
        "bpCode": "S1T001",
        "address": "70 DE JESUS ST. SAN FRANCISCO DEL MONTE QUEZON CITY",
        "federalTaxId": "241-542-940-000",
        "contactPerson": "ESTHIE CABRERA",
        "sourceRow": 1023,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAB001-NT",
    "name": "SABILLE, JELLY ANN VILLAMOR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAB001-NT-1024",
        "bpCode": "SAB001-NT",
        "address": "OJEN BLDG. 464 BONI AVENUE , NEW ZANIGA 1550 CITY OF MANDALUYONG NCR, SECOND DISTRICT",
        "federalTaxId": "229-779-444-00000",
        "contactPerson": "Jelly Sabile",
        "mobilePhone": "09215510444",
        "sourceRow": 1024,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAF001-NT",
    "name": "SAFARI SECURITY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAF001-NT-1025",
        "bpCode": "SAF001-NT",
        "address": "CORNER VILLAGE GREEN, GEN. J. ABAD SANTOS ST. LOWER BICUTAN, TAGUIG CITY 1632",
        "federalTaxId": "004-146-640-00000",
        "sourceRow": 1025,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAI001-NT",
    "name": "SAIDALI ABDULLAH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAI001-NT-1026",
        "bpCode": "SAI001-NT",
        "federalTaxId": "109-080-801-00000",
        "sourceRow": 1026,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAL001-NT",
    "name": "SALTO SYSTEMS PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAL001-NT-1027",
        "bpCode": "SAL001-NT",
        "address": "230 VICTORIA ST #12-08/09 BUGIS JUNCTION TOWER SINGAPORE 188024",
        "federalTaxId": "12300000000000000",
        "contactPerson": "LEMUEL DE GUZMAN",
        "sourceRow": 1027,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAM001",
    "name": "SAMSANSAN AIR-CONDITIONING SERVICES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAM001-1028",
        "bpCode": "SAM001",
        "address": "427 VICTORINO ST., MINDANAO AVE., TALIPAPA 2, NOVALICHES, QC",
        "federalTaxId": "008-563-124-00000",
        "sourceRow": 1028,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAM002-NT",
    "name": "SAMUEL CHUA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAM002-NT-1029",
        "bpCode": "SAM002-NT",
        "federalTaxId": "441-405-670-00000",
        "sourceRow": 1029,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAN001",
    "name": "SANIPRO PLUMBING AND FIRE PROTECTION WORKS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAN001-1030",
        "bpCode": "SAN001",
        "address": "56 PUROK 2 SAN PABLO GUAGUA PAMPANGA",
        "federalTaxId": "245-869-125-00000",
        "sourceRow": 1030,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAN001-NT",
    "name": "SANFORD MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAN001-NT-1031",
        "bpCode": "SAN001-NT",
        "address": "SM RETAIL HEADQUARTERS, JW DIOKNO BLVD COR BAYSHORE AVE., MALL OF ASIA COMPLEX ZONE 10 BRGY 76",
        "federalTaxId": "207-961-175-00000",
        "contactPerson": "GLEROL ABAD",
        "sourceRow": 1031,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAN002-NT",
    "name": "SANWEEN PICSON",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAN002-NT-1032",
        "bpCode": "SAN002-NT",
        "federalTaxId": "209-276-142-00000",
        "sourceRow": 1032,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAN003",
    "name": "SANDTEX TECHNOLOGY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAN003-1033",
        "bpCode": "SAN003",
        "address": "UNIT J1 & J2 CALAMBA ST. BRGY STO. DOMINGO, QUEZON CITY",
        "federalTaxId": "010-340-083-00000",
        "sourceRow": 1033,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAP001",
    "name": "SAP PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAP001-1034",
        "bpCode": "SAP001",
        "address": "27TH FLOOR NAC TOWER 32ND STREET BONIFACIO GLOBAL CITY TAGUIG CITY",
        "federalTaxId": "004-712-185-00000",
        "sourceRow": 1034,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAS001",
    "name": "SAS MANAGEMENT INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAS001-1035",
        "bpCode": "SAS001",
        "address": "522 C TANSK BLDG CALBAYOG ST. BRGY HIGHWAY HILSS AMANDALUYONG CITY",
        "federalTaxId": "008-671-514-00000",
        "sourceRow": 1035,
        "documents": {}
      },
      {
        "id": "branch-SAS001-NT-1036",
        "bpCode": "SAS001-NT",
        "address": "Unit 1602, Cityland 10 Tower 2,  6815 HV Dela Costa Corner, Ayala Avenue, Makati City, Philippines",
        "federalTaxId": "008-671-514-00000",
        "contactPerson": "Laura Lozada",
        "mobilePhone": "09178248006",
        "sourceRow": 1036,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SAV001-NT",
    "name": "SAVE MONEY TRADING INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SAV001-NT-1037",
        "bpCode": "SAV001-NT",
        "address": "1320 A FILMORE ST PALANAN MAKATI CITY",
        "federalTaxId": "224-508-324-000",
        "sourceRow": 1037,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SCA001",
    "name": "SCALE CABLE SOLUTION & STRUCTURAL CABLING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SCA001-1038",
        "bpCode": "SCA001",
        "address": "6088 DONA JUANITA SUBD BAMBANG BULACAN BULACAN",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1038,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SCA001-NT",
    "name": "SCAFELL PIKE MOTORS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SCA001-NT-1039",
        "bpCode": "SCA001-NT",
        "address": "2274 CHINO ROCES AVENUE EXTENSION MAGALLANES 1232 CITY OF MAKATI",
        "federalTaxId": "010-525-608-00000",
        "contactPerson": "A",
        "sourceRow": 1039,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEB001-NT",
    "name": "SEBASTIAN BAUTISTA JR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEB001-NT-1040",
        "bpCode": "SEB001-NT",
        "federalTaxId": "425-648-805-00000",
        "sourceRow": 1040,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEC001",
    "name": "SECUREMETRIC TECHNOLOGY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEC001-1041",
        "bpCode": "SEC001",
        "address": "UNIT 7D 7F ATHENAEUM BLDG BEL-AIR NCR FOURTH DISTRICT CITY OF MAKATI",
        "federalTaxId": "008-519-277-00000",
        "sourceRow": 1041,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEC004",
    "name": "SECURITY BLUE TEAM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEC004-1042",
        "bpCode": "SEC004",
        "address": "175 HIGH HOLBORN LONDON, WC1V 7AA, UNITED KINGDOM",
        "federalTaxId": "200-000-000-00000",
        "contactPerson": "SALES PERSON",
        "email": "press@securityblue.team",
        "sourceRow": 1042,
        "documents": {}
      },
      {
        "id": "branch-SEC004-NT-1043",
        "bpCode": "SEC004-NT",
        "address": "175 HIGH HOLBORN LONDON, WC1V 7AA, UNITED KINGDOM",
        "federalTaxId": "200-000-000-00000",
        "contactPerson": "SALES PERSON",
        "email": "press@securityblue.team",
        "sourceRow": 1043,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEC005",
    "name": "SECURESCOPE SYSTEMS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEC005-1044",
        "bpCode": "SEC005",
        "address": "27 E GB, CAM BUILDING N.A MONTEVERDE ST COR ALVAREZ ST. NA BRANGAY 27-C POB N.A 8000 DAVAO CITY",
        "federalTaxId": "010-827-832-000",
        "contactPerson": "Maria Almendral",
        "mobilePhone": "63917701545",
        "sourceRow": 1044,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEI001-NT",
    "name": "SEIRING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEI001-NT-1045",
        "bpCode": "SEI001-NT",
        "address": "#15 G ARANETA AVE DONA IMELDA QUEZON CITY 1113",
        "federalTaxId": "003-502-887-00000",
        "sourceRow": 1045,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEN001",
    "name": "SENCOLINK TECHNOLOGIES INC",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-SEN001-1046",
        "bpCode": "SEN001",
        "address": "UNIT 2807 28/F CITYLAND PASONG TAMO TOWER, 2210 CHINO ROCES AVE. PIO DEL PILAR 1230 CITY OF MAKATI NCR, FOURTH DISTRICT PHILIPPINES",
        "federalTaxId": "005-296-275-00000",
        "industry": "Retailer",
        "contactPerson": "Japheth \"Japz\" Garcia",
        "position": "Junior Sales Associate - Enterprise Team",
        "mobilePhone": "9524427603 |\r\n02-8893-4103 loc 124",
        "email": "japhethgarcia@sencolink.com",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "status": "Incomplete",
        "sourceRow": 1046,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2024-12-31",
            "status": "Expired",
            "daysLeft": -568
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2027-01-12",
            "status": "Current",
            "daysLeft": 174
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      },
      {
        "id": "branch-SEN001-NT-1047",
        "bpCode": "SEN001-NT",
        "address": "UNIT 2807 28/F CITYLAND PASONG TAMO TOWER, 2210 CHINO ROCES AVE. PIO DEL PILAR 1230 CITY OF MAKATI NCR, FOURTH DISTRICT PHILIPPINES",
        "federalTaxId": "005-296-275-00000",
        "industry": "Retailer",
        "contactPerson": "Japheth \"Japz\" Garcia",
        "position": "Junior Sales Associate - Enterprise Team",
        "mobilePhone": "9524427603 |\r\n02-8893-4103 loc 124",
        "email": "japhethgarcia@sencolink.com",
        "rawCategory": "Supplier-Local",
        "status": "Incomplete",
        "sourceRow": 1047,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2024-12-31",
            "status": "Expired",
            "daysLeft": -568
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2027-01-12",
            "status": "Current",
            "daysLeft": 174
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-SEO001-NT",
    "name": "SEO HACKER SERVICES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEO001-NT-1048",
        "bpCode": "SEO001-NT",
        "address": "LOT 28, BLK JESUSA HEIGHT SUBD. ESTEFANIA, BACOLOD CITY",
        "federalTaxId": "646-897-146-00000",
        "contactPerson": "MA. IMEE BREIS",
        "sourceRow": 1048,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SER001",
    "name": "SERVLINK TECHNOLOGY SERVICES PHILS., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SER001-1049",
        "bpCode": "SER001",
        "address": "84B E RODRIGUEZ SR AVE BRGY IMMACULATE CONCEPCION CUBAO QUEZON CITY",
        "federalTaxId": "009-252-981-00000",
        "sourceRow": 1049,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SER002",
    "name": "SERVTECH ENTERPRISE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SER002-1050",
        "bpCode": "SER002",
        "address": "#97 13TH AVE., CUBAO QUEZON CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1050,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SER003",
    "name": "SERVIMAX TECHNOLOGIES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SER003-1051",
        "bpCode": "SER003",
        "address": "20 NORTH ROAD COR 3RD AVE CUBAO QUEZON CITY",
        "federalTaxId": "225-522-139-00000",
        "sourceRow": 1051,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SEV001-NT",
    "name": "JOVEN G. SEVILLANO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SEV001-NT-1052",
        "bpCode": "SEV001-NT",
        "address": "UG 03 CITYLAND SHAW BOULEVARD, MANDALUYONG CITY",
        "federalTaxId": "928-560-652-00001",
        "contactPerson": "SEVILLANO",
        "sourceRow": 1052,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SHE001",
    "name": "SHENZHEN LINK-ALL TECHNOLOGY CO., LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SHE001-1053",
        "bpCode": "SHE001",
        "address": "5/F BLOCK 9TH SUNNY INDUSTRIAL ZONE, XILI TOWN, NANSHAN DISTRICT SHENZHEN CHINA",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1053,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SHE001-NT",
    "name": "SHEWAK'S ENGRAVABLES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SHE001-NT-1054",
        "bpCode": "SHE001-NT",
        "address": "G/F JESA IT CENTER 90 GEN MAXILOM AVE COGON CENTRAL CEBU CITY 6000",
        "federalTaxId": "260-486-301-000",
        "contactPerson": "MARIA NERISSA REYES",
        "sourceRow": 1054,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SHE002-NT",
    "name": "SHERWIN DE CLARO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SHE002-NT-1055",
        "bpCode": "SHE002-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1055,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SHE003",
    "name": "SHENZHEN IBOARD TECHNOLOGY CO., LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SHE003-1056",
        "bpCode": "SHE003",
        "address": "1001, BLOCK A, TANGLANGCHENG SQUARE (WEST ZONE), FUGUANG COMMUNITY, TAOYUAN ST, NANSHAN DISTRICT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1056,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SHO001",
    "name": "SHOPEE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SHO001-1057",
        "bpCode": "SHO001",
        "address": "ONLINE SHOPPING",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1057,
        "documents": {}
      },
      {
        "id": "branch-SHO001-NT-1058",
        "bpCode": "SHO001-NT",
        "address": "ONLINE SHOPPING",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SHOPEE",
        "sourceRow": 1058,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SIA001-NT",
    "name": "SIAO, PAMELA PARRA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SIA001-NT-1059",
        "bpCode": "SIA001-NT",
        "address": "45 MOLAVE ST. DUYAN-DUYAN 1102 QUEZON CITY NCR, PHILIPPINES",
        "federalTaxId": "715-865-181-00000",
        "contactPerson": "JANELLE MIRASOL",
        "mobilePhone": "09655797094",
        "sourceRow": 1059,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SIG001-NT",
    "name": "SIGNRAYS ADVERTISING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SIG001-NT-1060",
        "bpCode": "SIG001-NT",
        "address": "2709 SOUTH AVENUE OLYMPIA CITY OF MAKATI",
        "federalTaxId": "005-618-554-00003",
        "sourceRow": 1060,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SIL001",
    "name": "SILYA, MESA ATBP. INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SIL001-1061",
        "bpCode": "SIL001",
        "address": "3F 464 ARTIAGA ST., SAN JUAN CITY",
        "federalTaxId": "005-799-024-00000",
        "sourceRow": 1061,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SIM001",
    "name": "SIM COMPUTER SALES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SIM001-1062",
        "bpCode": "SIM001",
        "address": "SIM Building, Gil Puyat Avenue corner Burgos St. Pasay City NCF Fourth District Philippines",
        "federalTaxId": "005-032-699-00000",
        "contactPerson": "GERRY REYES",
        "mobilePhone": "09519152532",
        "sourceRow": 1062,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SIN001",
    "name": "SINEPRO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SIN001-1063",
        "bpCode": "SIN001",
        "federalTaxId": "008-719-201-00000",
        "sourceRow": 1063,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SIN003-NT",
    "name": "SINGCO BREW COFFEE AND TEA PRODUCTS TRADING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SIN003-NT-1064",
        "bpCode": "SIN003-NT",
        "address": "BLK5 LOT1 DON JOSE GREENCOURT GARDENVALE TOWNHOMES, SAN DIONISIO",
        "federalTaxId": "264-552-687-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 1064,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SJE001-NT",
    "name": "SJE FOOD COMPANY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SJE001-NT-1065",
        "bpCode": "SJE001-NT",
        "address": "UNIT A-403 AND A-411 4TH FLOOR, UNIT ALFRESCO, ONE AYALA, AYALA CENTER, SAN LORENZO 1223, MAKATI CIT",
        "federalTaxId": "611-546-889-00000",
        "contactPerson": "JOHN EDWARD N. MALABUYO",
        "sourceRow": 1065,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SKY001",
    "name": "SKYCONVERGENCE INC",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-SKY001-1066",
        "bpCode": "SKY001",
        "address": "2F ANACLETA BLDG COR BURGOS-MAGDALO ST, LA PAZ ILOILO CITY",
        "federalTaxId": "427-216-712-00000",
        "rawCategory": "Subcontructor",
        "sourceRow": 1066,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMA001-NT",
    "name": "SMART COMMUNICATIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMA001-NT-1067",
        "bpCode": "SMA001-NT",
        "address": "100 LEGASPI ST., COR. DELA ROSA ST., MAKATI CITY",
        "federalTaxId": "001-901-673-16800",
        "sourceRow": 1067,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMA002",
    "name": "SMARTASIA TECHNOLOGIES COMPANY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMA002-1068",
        "bpCode": "SMA002",
        "address": "UNIT 102 NO.1203 G, MASANGKAY ST., BRGY 263 ZONE 24 STA CRUZ MANILA",
        "federalTaxId": "218-592-461-00000",
        "sourceRow": 1068,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMA002-NT",
    "name": "SMART DRIVING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMA002-NT-1069",
        "bpCode": "SMA002-NT",
        "address": "2136 ESPANA BLVD ZONE 052BRGY",
        "federalTaxId": "226-833-967-000",
        "contactPerson": "dennise",
        "sourceRow": 1069,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMA003",
    "name": "SMARTBOX SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMA003-1070",
        "bpCode": "SMA003",
        "address": "28/F UNIT 2807 CITYLAND PASONG TAMO     BRGY. PIO DEL PILAR, CHINO ROCES AVENUE, MAKATI CITY",
        "federalTaxId": "008-438-569-00000",
        "sourceRow": 1070,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMA004",
    "name": "SMARTECH SOLUTIONS PHILIPPINES INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMA004-1071",
        "bpCode": "SMA004",
        "address": "UNIT 1-4 BLDG 1 CLUSTER 4 G/F FLORA VISTA COMMONWEALTH QUEZON CITY",
        "federalTaxId": "008-211-255-00000",
        "sourceRow": 1071,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMA005",
    "name": "SMARTSHEET",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMA005-1072",
        "bpCode": "SMA005",
        "address": "Bellevue, 500 108th Ave NE, #200, United States",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SALES",
        "sourceRow": 1072,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMK001-NT",
    "name": "SM KEPPEL LAND INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMK001-NT-1073",
        "bpCode": "SMK001-NT",
        "address": "THE PODIUM MALLL 12 ADB AVENUE ORTIGAS CENTER BARANGAY WACK WACK GREENHILLS EAST",
        "federalTaxId": "003-497-848-001",
        "contactPerson": "CONTACT",
        "sourceRow": 1073,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SMP001-NT",
    "name": "SM PRIME HOLDINGS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SMP001-NT-1074",
        "bpCode": "SMP001-NT",
        "address": "PICO SANDS HOTEL BRGY PAPAYA NASUGBU BATANGAS",
        "federalTaxId": "003-058-789-09700",
        "sourceRow": 1074,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SNA001",
    "name": "S.N.A.G.P. CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SNA001-1075",
        "bpCode": "SNA001",
        "address": "LEVEL A FMF BUSINESS CENTER 126 PIONEER ST BRGY HIGHWAY HILLS",
        "federalTaxId": "008-419-727-00000",
        "sourceRow": 1075,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SNI001",
    "name": "SNITPS SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SNI001-1076",
        "bpCode": "SNI001",
        "address": "KM 21 BESIDE LIDO COCINA TSTNA ORTIGAS AVE. SAN JUAN CAINTA",
        "federalTaxId": "010-556-228-000",
        "contactPerson": "Marila Elena Rosina",
        "sourceRow": 1076,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOD001-NT",
    "name": "PLUXEE PHILIPPINES INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOD001-NT-1077",
        "bpCode": "SOD001-NT",
        "address": "11F  LEPANTO CONDOMINIUM, PASEO DE ROXAS, MAKATI",
        "federalTaxId": "223-183-726-00000",
        "sourceRow": 1077,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOF001",
    "name": "SOFTWAREONE PHILIPPINES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOF001-1078",
        "bpCode": "SOF001",
        "address": "10TH FLOOR, ONE AYALA  SOUTH TOWER #1 AYALA AVAENUE CORNER EDSA SAN LORENZO 1223 MAKATI CITY",
        "federalTaxId": "008-103-749-00000",
        "contactPerson": "SHEREE LYN LEPAOPAO",
        "supplierRank": "Major",
        "sourceRow": 1078,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOL001",
    "name": "SOLUTIONS H21 TRADING CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOL001-1079",
        "bpCode": "SOL001",
        "address": "BM19 BLDG2 999 SHOPPING MALL COR. SOLER ST., BRGY 293 ZONE 028, BINONDO, MANILA",
        "federalTaxId": "007-049-460-00000",
        "sourceRow": 1079,
        "documents": {}
      },
      {
        "id": "branch-SOL003-NT-1081",
        "bpCode": "SOL003-NT",
        "address": "BM19 BLDG2 999 SHOPPING MALL COR. SOLER ST., BRGY 293 ZONE 028, BINONDO, MANILA",
        "federalTaxId": "007-049-460-00000",
        "sourceRow": 1081,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOL002",
    "name": "SOLID STATE SUPPLIES LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOL002-1080",
        "bpCode": "SOL002",
        "address": "RAVENSBANK BUSINESS PARK HEDERA ROAD REDDITCH UK",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1080,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOU001-NT",
    "name": "SOURCE SMART GLOBAL VENTURE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOU001-NT-1082",
        "bpCode": "SOU001-NT",
        "address": "35 N KALIRAYA ST DONA JOSEFA QUEZON CITY",
        "federalTaxId": "240-970-466-00000",
        "sourceRow": 1082,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOU002-NT",
    "name": "SOUTHGATEMOTORS VENTURES CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOU002-NT-1083",
        "bpCode": "SOU002-NT",
        "address": "BLOCK 42 ALABANG-ZAPOTE ROAD ALABANG FILINVEST CORP CITY 1781 CITY OF MUNTINLUPA NCR 4th DISTRICT",
        "federalTaxId": "010-546-189-00000",
        "sourceRow": 1083,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SOU003-NT",
    "name": "SOUTHCREST HOTEL VENTURES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SOU003-NT-1084",
        "bpCode": "SOU003-NT",
        "address": "SEDA ABREEZA JP LAUREL AVE BAJADA DAVAO CITY 8000",
        "federalTaxId": "007-899-726-00100",
        "contactPerson": "PATRICK CUNANAN",
        "email": "NA",
        "sourceRow": 1084,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SPA001",
    "name": "SPARQ SUMMIT TRADING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SPA001-1085",
        "bpCode": "SPA001",
        "address": "#2 DON JUAN ST. VILLA CECILIA SUBD., MAMBUGAN, ANTIPOLO RIZAL",
        "federalTaxId": "622-693-616-00000",
        "contactPerson": "SALLY YU",
        "sourceRow": 1085,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SPE001-NT",
    "name": "SPEED ACCESS TRUCKING INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SPE001-NT-1086",
        "bpCode": "SPE001-NT",
        "address": "UNIT 2 #59 KALINANGAN ST., CANIOGAN, PASIG CITY",
        "federalTaxId": "221-202-285-00000",
        "sourceRow": 1086,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SPE002-NT",
    "name": "SPECIALTY LIFESTYLE CONCEPTS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SPE002-NT-1087",
        "bpCode": "SPE002-NT",
        "address": "254 ABCD AND 201-203 2F MEGA A WACK WACK GREENHILLS",
        "federalTaxId": "008-687-537-00600",
        "sourceRow": 1087,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SPE003",
    "name": "SPECIAL-LITE SYSTEMS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SPE003-1088",
        "bpCode": "SPE003",
        "address": "UNIT15 BLK 5  LOT 4, INNER ZABARTE NOVALICHES QUEZON CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1088,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STA001-NT",
    "name": "STANDARD INSURANCE CO INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STA001-NT-1089",
        "bpCode": "STA001-NT",
        "address": "28F PETRON MEGA PLAZA BLDG., 358 SEN GIL PUYAT AVE., MAKATI CITY",
        "federalTaxId": "000-821-466-00000",
        "sourceRow": 1089,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STA002",
    "name": "STAR APPLIANCE CENTER INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STA002-1090",
        "bpCode": "STA002",
        "address": "SM MEGAMALL BLDG EDSA COR DONA JULIA VARGAS AVE WACK WACK GREENHILLS MANDALUYONG CITY NCR",
        "federalTaxId": "000-086-204-00000",
        "sourceRow": 1090,
        "documents": {}
      },
      {
        "id": "branch-STA005-NT-1094",
        "bpCode": "STA005-NT",
        "address": "SM SEASIDE CITY CEBU",
        "federalTaxId": "000-096-204-077",
        "contactPerson": "WU2062",
        "mobilePhone": "0322549491",
        "email": "NA",
        "sourceRow": 1094,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STA002-NT",
    "name": "STARR INTERNATIONAL INSURANCE PHILIPPINES BRANCH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STA002-NT-1091",
        "bpCode": "STA002-NT",
        "address": "UNIT 5 23RD FLOOR TOWER 2 THE ENTERPRISE CENTER, 6766 AYALA AVE COR PASEO DE ROXAS LEGASPI VILLAGE",
        "federalTaxId": "008-514-896-000",
        "contactPerson": "MARY HAZEL",
        "sourceRow": 1091,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STA003",
    "name": "STATESMAN MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STA003-1092",
        "bpCode": "STA003",
        "address": "BLK 12 LOT 1 PAGIBIG HOMES BRGY CATALUNAN PEQUENO TALOMO DISTRICT DAVAO CITY",
        "federalTaxId": "936-278-004-00000",
        "sourceRow": 1092,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STA003-NT",
    "name": "STA MARIA, ELADIO L JR",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STA003-NT-1093",
        "bpCode": "STA003-NT",
        "address": "LOT 1 BLOCK 4, LAKEWOOD SUBD BRGY TADLAK LOS BANOS LAGUNA 4030",
        "federalTaxId": "108-151-829-000",
        "contactPerson": "CHRISTOPHER",
        "sourceRow": 1093,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STE001-NT",
    "name": "STELLAR CYBER INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STE001-NT-1095",
        "bpCode": "STE001-NT",
        "address": "4701 PATRICK HENRY DR. BLD 12 SANTA CLARA, CA 95054 US",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1095,
        "documents": {}
      },
      {
        "id": "branch-STE002-1096",
        "bpCode": "STE002",
        "address": "4701 PATRICK HENRY DR. BLD 12 SANTA CLARA, CA 95054 US",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1096,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STO001",
    "name": "STORM OF BLESSINGS MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STO001-1097",
        "bpCode": "STO001",
        "address": "2F HFS  BLDG #1 HEREFORD, ST. COR CONGRESSIONAL AVE., BAHAY TORO 1, QC",
        "federalTaxId": "483-761-150-00000",
        "contactPerson": "REY CALIG",
        "mobilePhone": "09228401475",
        "sourceRow": 1097,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STO002-NT",
    "name": "STO. DOMINGO DIAGNOSTIC & MEDICAL CENTER CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STO002-NT-1098",
        "bpCode": "STO002-NT",
        "address": "LOWER G/F STARMALL EDSA COR SHAW BLVD",
        "federalTaxId": "007-056-784-00200",
        "sourceRow": 1098,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STR001",
    "name": "STARLINK INTERNET SERVICES PHILIPPINES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STR001-1099",
        "bpCode": "STR001",
        "address": "3953 Jack Northrop Ave, Hawthorne, 1 Rocket Rd, United States",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "WEBSITE",
        "sourceRow": 1099,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STR001-NT",
    "name": "STRONGBRIDGE HARDWARE CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STR001-NT-1100",
        "bpCode": "STR001-NT",
        "address": "U101 140 PASIG BLVD BAGONG ILOG PASIG CITY",
        "federalTaxId": "100-065-768-00000",
        "sourceRow": 1100,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STR002",
    "name": "STRATEGIC NETWORKS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STR002-1101",
        "bpCode": "STR002",
        "federalTaxId": "209-948-024-00000",
        "sourceRow": 1101,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STR003",
    "name": "STREAMLINE WORKS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STR003-1102",
        "bpCode": "STR003",
        "address": "8445 KALAYAAN AVE.  POBLACION 1210 MAKATI CITY, PHILIPPINES",
        "federalTaxId": "664-388-306-00000",
        "contactPerson": "RANDIE BENEDICTO",
        "supplierRank": "Major",
        "sourceRow": 1102,
        "documents": {}
      },
      {
        "id": "branch-STR003-NT-1103",
        "bpCode": "STR003-NT",
        "address": "8445 KALAYAAN AVE.  POBLACION 1210 MAKATI CITY, PHILIPPINES",
        "federalTaxId": "664-388-306-00000",
        "contactPerson": "RANDIE BENEDICTO",
        "sourceRow": 1103,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STS001-NT",
    "name": "ST. STEPHENS HIGH SCHOOL",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STS001-NT-1104",
        "bpCode": "STS001-NT",
        "address": "1267 G. MASANGKAY ST.,STA. CRUZ",
        "federalTaxId": "000-821-208-00000",
        "sourceRow": 1104,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-STU001-NT",
    "name": "STUDIO 58 LAB 10, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-STU001-NT-1105",
        "bpCode": "STU001-NT",
        "address": "14 ARAYAT STREET MALAMIG 1550 CITY OF MANDALUYONG NCR, SECOND DISTRICT PHIPINNES",
        "federalTaxId": "237-262-141-00000",
        "contactPerson": "KEITH DE VERA",
        "sourceRow": 1105,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUB001-NT",
    "name": "SUBIC GS AUTO INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUB001-NT-1106",
        "bpCode": "SUB001-NT",
        "address": "4996 NINOY AQUINO AVE.,BRGY. SAN DIONISION,",
        "federalTaxId": "007-330-309-00001",
        "sourceRow": 1106,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUB002-NT",
    "name": "SUBARASHII GROUP CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUB002-NT-1107",
        "bpCode": "SUB002-NT",
        "address": "BLK 117 LOT 8 G ARANETA AVE. KATARUNGAN VILLAGE POBLACION 1776 CITY OF MUNTINLUPA NCR",
        "federalTaxId": "605-447-022-00000",
        "sourceRow": 1107,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUM001",
    "name": "SUMMIT FURNISHINGS, INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUM001-1108",
        "bpCode": "SUM001",
        "address": "4TH LEVEL INTERIOR CENTER SM MEGAMALL BLDG B",
        "federalTaxId": "209-956-398-00300",
        "sourceRow": 1108,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUN001-NT",
    "name": "SUNRISE MEDICAL LAB, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUN001-NT-1109",
        "bpCode": "SUN001-NT",
        "address": "NORKIS BLDG.,NO. 11 CALBAYOG COR. DM GUEVARA STREETS,",
        "federalTaxId": "228-064-597-00021",
        "sourceRow": 1109,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUN002-NT",
    "name": "SUN LIFE OF CANADA (PHILIPPINES)",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUN002-NT-1110",
        "bpCode": "SUN002-NT",
        "address": "2F SUN LIFE CENTRE, 5TH AVE COR RIZAL DRIVE, BONIFACIO GLOBAL, TAGUIG CITY",
        "federalTaxId": "204-962-522-000",
        "contactPerson": "MIMI",
        "sourceRow": 1110,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUP001-NT",
    "name": "SUPERMASTERS INSURANCE CONSULTANT",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUP001-NT-1111",
        "bpCode": "SUP001-NT",
        "address": "RM. 204 ACRE BLDG. 137 MALAKAS ST., BRGY. CENTRAL",
        "federalTaxId": "174-714-331-00000",
        "sourceRow": 1111,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUR001",
    "name": "SUREFIRE SERVICES & TRADING CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUR001-1112",
        "bpCode": "SUR001",
        "address": "BLK 51  LOT 21 SOUTH SQUARE VILL., BRGY PASONG KAWAYAN GENERAL TRIAS, CAVITE",
        "federalTaxId": "006-879-693-00000",
        "sourceRow": 1112,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUS001",
    "name": "SUSE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUS001-1113",
        "bpCode": "SUS001",
        "address": "Luxembourg B27924",
        "federalTaxId": "000-000-000-000",
        "contactPerson": "ROXANNE",
        "sourceRow": 1113,
        "documents": {}
      },
      {
        "id": "branch-SUS002-NT-1115",
        "bpCode": "SUS002-NT",
        "address": "Luxembourg B27924",
        "federalTaxId": "000-000-000-000",
        "contactPerson": "ROXANNE",
        "sourceRow": 1115,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SUS001-NT",
    "name": "SUSAN RAVANCHO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SUS001-NT-1114",
        "bpCode": "SUS001-NT",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1114,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SWP001",
    "name": "SWPKS IT SOLUTIONS, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SWP001-1116",
        "bpCode": "SWP001",
        "address": "3F ONE SALCEDO CENTRE, 170 SALCEDO ST. LEGASPI VILLAGE BRGY SAN  LORENZO, MAKATI CITY",
        "federalTaxId": "010-056-409-00000",
        "sourceRow": 1116,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SYS001",
    "name": "SYSTECH TRADING  INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SYS001-1117",
        "bpCode": "SYS001",
        "address": "68 GOMEZ STREET PALTOK 1105 QUEZON CITY 00002 NCR SECOND DISTRICt",
        "federalTaxId": "624-268-338-00000",
        "contactPerson": "ANTHONY TENG",
        "mobilePhone": "09178151885",
        "sourceRow": 1117,
        "documents": {}
      },
      {
        "id": "branch-SYS001-NT-1118",
        "bpCode": "SYS001-NT",
        "address": "68 GOMEZ STREET PALTOK 1105 QUEZON CITY 00002 NCR SECOND DISTRICt",
        "federalTaxId": "624-268-338-00000",
        "contactPerson": "ANTHONY TENG",
        "mobilePhone": "09178151885",
        "sourceRow": 1118,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-SYT001",
    "name": "SYTEC CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-SYT001-1119",
        "bpCode": "SYT001",
        "address": "23 K-J COR K-8 STREET, EAST KAMIAS, QUEZON CITY",
        "federalTaxId": "200-341-951-00000",
        "sourceRow": 1119,
        "documents": {}
      },
      {
        "id": "branch-SYT002-NT-1120",
        "bpCode": "SYT002-NT",
        "address": "23 K-J COR K-8 STREET, EAST KAMIAS, QUEZON CITY",
        "federalTaxId": "200-341-951-00000",
        "sourceRow": 1120,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TAG001-NT",
    "name": "TAGAYTAY MIDLANDS GOLF CLUB INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TAG001-NT-1121",
        "bpCode": "TAG001-NT",
        "address": "TRANCA TALISAY BATANGAS",
        "federalTaxId": "005-008-526-000",
        "contactPerson": "JOANA VILLAR",
        "sourceRow": 1121,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TAL001",
    "name": "TAL TECHNOLOGIES DISTRIBUTION PHILIPPINES INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TAL001-1122",
        "bpCode": "TAL001",
        "address": "327 KATARUNGAN ST BRGY PLAINVIEW MANDALUYONG CITY",
        "federalTaxId": "008-162-313-00000",
        "sourceRow": 1122,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TAN001-NT",
    "name": "TANSK INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TAN001-NT-1123",
        "bpCode": "TAN001-NT",
        "address": "524 CALBAYOG ST., BRGY HIGHWAY HILLS, MANDALUYONG CITY",
        "federalTaxId": "008-425-235-00000",
        "sourceRow": 1123,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TAN002-NT",
    "name": "TANY FOUNDATION INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TAN002-NT-1124",
        "bpCode": "TAN002-NT",
        "address": "191 KATIPUNAN AVE., PROJECT 4",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1124,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TCM001-NT",
    "name": "TCM SECURITY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TCM001-NT-1125",
        "bpCode": "TCM001-NT",
        "address": "WEBSITE",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "WEBSITE",
        "sourceRow": 1125,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEC001",
    "name": "TECHNOPAQ INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEC001-1126",
        "bpCode": "TEC001",
        "address": "254 BENITO SOLIVEN AVE., (GREEN PARK), MANGGAHAN, PASIG CITY",
        "federalTaxId": "005-181-310-00000",
        "sourceRow": 1126,
        "documents": {}
      },
      {
        "id": "branch-TEC001-NT-1127",
        "bpCode": "TEC001-NT",
        "address": "254 BENITO SOLIVEN AVE., (GREEN PARK), MANGGAHAN, PASIG CITY",
        "federalTaxId": "005-181-310-00000",
        "contactPerson": "Pamela Villanueva",
        "sourceRow": 1127,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEC002",
    "name": "TECHSPECTRUM DISTRIBUTION INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEC002-1128",
        "bpCode": "TEC002",
        "address": "B4 L30 ALLAMANDA ST., BRGY. DALIG ANTIPOLO CITY",
        "federalTaxId": "010-089-842-00000",
        "sourceRow": 1128,
        "documents": {}
      },
      {
        "id": "branch-TEC002-NT-1129",
        "bpCode": "TEC002-NT",
        "address": "B4 L30 ALLAMANDA ST., BRGY. DALIG ANTIPOLO CITY",
        "federalTaxId": "010-089-842-00000",
        "contactPerson": "Julius Quides",
        "sourceRow": 1129,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEC003",
    "name": "TECHTRON SYSTEMS CORP.",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-TEC003-1130",
        "bpCode": "TEC003",
        "address": "2ND FLR. TBCC BLDG., 150 F BLUMENTRITT COR R. PASCUAL ST., BRGY BATIS 1500 CITY OF SAN JUAN NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "006-619-195-00000",
        "industry": "Wholesaler",
        "contactPerson": "Patrick Lauron",
        "position": "Account Manager | Dynamics Solution Team",
        "mobilePhone": "0977-825-3055",
        "email": "patrick.lauron@techtron.com.ph",
        "rawCategory": "Supplier-Local",
        "status": "Incomplete",
        "sourceRow": 1130,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": false,
            "status": "Missing"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Product Profile": {
            "provided": false,
            "status": "Missing"
          },
          "Proof of Present Address": {
            "provided": false,
            "status": "Missing"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-TEC004",
    "name": "TECHVISION ICT SOLUTIONS, INC.",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-TEC004-1131",
        "bpCode": "TEC004",
        "address": "26-5, BITONIA ST, DIAMOND SUBDIVISION, BALIBAGO, ANGELES CITY, PAMPANGA",
        "federalTaxId": "009-304-780-00000",
        "rawCategory": "Subcontructor",
        "sourceRow": 1131,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEC005",
    "name": "TECHNAVY PHLS. CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEC005-1132",
        "bpCode": "TEC005",
        "address": "2ND FLOOR WEREMOTE BLDG C METROWALK COMMERCIAL COMPLEX MERALCO AVE UGONG 1604 PASIG CITY NCR",
        "federalTaxId": "649-810-754-00000",
        "contactPerson": "MARLON VERSOZA",
        "mobilePhone": "09175240139",
        "sourceRow": 1132,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEC008-NT",
    "name": "TECHNO GEEK AT WORK COMPUTER SHOP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEC008-NT-1133",
        "bpCode": "TEC008-NT",
        "address": "KC 416 4TH FLR SM MEGAMALL BLDG B J VARGAS AVE. WACK WACK MANDALUYONG",
        "federalTaxId": "192-475-011-001",
        "contactPerson": "SALES AGENT",
        "sourceRow": 1133,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEE001-NT",
    "name": "TEE TO SUY HARDWARE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEE001-NT-1134",
        "bpCode": "TEE001-NT",
        "address": "1512 CM RECTO AVE COR TOMAS MAPUA ST. STA CRUZ MANILA",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "NORA CHENG",
        "sourceRow": 1134,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEK001",
    "name": "TEKZONE COMPUTER SALES AND SERVICES, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEK001-1135",
        "bpCode": "TEK001",
        "address": "GROUND FLOOR, BB COMMERCIAL, 32 PILAR ST., COR ARAULLO ST., ADDITION HILLS, SAN JUAN 1500",
        "federalTaxId": "246-033-123-00000",
        "sourceRow": 1135,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEL001-NT",
    "name": "TELIGUS TECH INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEL001-NT-1136",
        "bpCode": "TEL001-NT",
        "address": "405 (B), SM MEGAMALL, EDSA COR DONA JULIA VARGAS, ORTIGAS CTR., WACK-WACK, GREENHILLS, 1555,",
        "federalTaxId": "010-485-023-00001",
        "sourceRow": 1136,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEL002-NT",
    "name": "TELEMART INTERNATIONAL CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEL002-NT-1137",
        "bpCode": "TEL002-NT",
        "address": "CZ 418 SM CITY BACOOR GEN EMILIO AGUINALDO H-WAY BACOOR CAVITE",
        "federalTaxId": "213-671-080-00014",
        "contactPerson": "JULIE ANN MADRIAGA",
        "sourceRow": 1137,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TEN001",
    "name": "TENFOLD TELECOM CONSTRUCTION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TEN001-1138",
        "bpCode": "TEN001",
        "address": "ANDRES CMPD, F. LEGASPI ST. MAYBUNGA PASIG CITY",
        "federalTaxId": "204-681-306-00000",
        "contactPerson": "Tom Suelto",
        "sourceRow": 1138,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THA001",
    "name": "THAKRAL INFOTECH INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THA001-1139",
        "bpCode": "THA001",
        "address": "254 BENITO SOLIVEN AVE., (GREEN PARK), MANGGAHAN, PASIG CITY",
        "federalTaxId": "006-926-411-00000",
        "sourceRow": 1139,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THE001",
    "name": "THEGARAGE MANILA INTERNATIONAL CO.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THE001-1140",
        "bpCode": "THE001",
        "address": "14 PANAY AVE.",
        "federalTaxId": "009-950-898-00000",
        "sourceRow": 1140,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THE002",
    "name": "THE KNOWLEDGE ACADEMY LIMITED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THE002-1141",
        "bpCode": "THE002",
        "address": "REFLEX, CAIN ROAD, BRACKEL, RG121HL LONDON 01344 203999",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1141,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THE003",
    "name": "THE BRAIN COMPUTER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THE003-1142",
        "bpCode": "THE003",
        "address": "150 F. BLUMENTRITT ST. BATIS 1500 CITY OF SAN JUAN NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "003-508-768-00000",
        "sourceRow": 1142,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THE004-NT",
    "name": "THE ARCHITECTURAL CENTRE CLUB INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THE004-NT-1143",
        "bpCode": "THE004-NT",
        "address": "6082 PALMA ST BEL-AIR VILLAGE MAKATI CITY 1209",
        "federalTaxId": "000-435-268-00000",
        "sourceRow": 1143,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THE005-NT",
    "name": "THE ESCAL INSTITUTE OF ADVANCED TECHNOLOGIES INC. D/B/A SANS INSTITUTE",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THE005-NT-1144",
        "bpCode": "THE005-NT",
        "address": "11200 ROCKVILLE PIKE, SUITE 200, NORTH BETHESDA, MD 20852",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "timothy",
        "sourceRow": 1144,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THI001",
    "name": "THINKING TOOLS INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THI001-1145",
        "bpCode": "THI001",
        "address": "ITI BLDG JUNQUERA EXT COR RR LANDON ST KAMAGAYAN CEBU CITY",
        "federalTaxId": "000-312-081-00000",
        "sourceRow": 1145,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-THR001",
    "name": "THREE-ACES ENGINEERING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-THR001-1146",
        "bpCode": "THR001",
        "address": "5316 SAN BENISSA GARDEN VILLAS          COMMONWEALTH COR. QUIRINO HIGHWAY       KALIGAYAN, QC",
        "federalTaxId": "195-886-714-00100",
        "sourceRow": 1146,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TJJ001",
    "name": "TJJ HAPPY PEDLER CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TJJ001-1147",
        "bpCode": "TJJ001",
        "address": "619 GONZALO PUYAT ST BARANGAY 309 ZONE 030 1001 QUIAPO NCR, CITY OF MANILA",
        "federalTaxId": "010-592-183-00001",
        "contactPerson": "Berna Manzano",
        "sourceRow": 1147,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TJS001-NT",
    "name": "TJS CLEAR ART",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TJS001-NT-1148",
        "bpCode": "TJS001-NT",
        "address": "#11 FELICIA ST., CULIATQUEZON CITY",
        "federalTaxId": "164-395-433-00000",
        "sourceRow": 1148,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOM001-NT",
    "name": "TOM PHAM",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOM001-NT-1149",
        "bpCode": "TOM001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "310-411-969-00000",
        "sourceRow": 1149,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TON001-NT",
    "name": "TONYANG AUTO SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TON001-NT-1150",
        "bpCode": "TON001-NT",
        "federalTaxId": "223-246-340-000",
        "contactPerson": "ROMY MARCOS",
        "sourceRow": 1150,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOO001",
    "name": "TOON BOOM ANIMATION INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOO001-1151",
        "bpCode": "TOO001",
        "address": "4200 BOULEVARD SAINT LAURENT SUITE 1020",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1151,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOP001",
    "name": "TOP GLASS AND ALUMINUM CONTRACTOR CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOP001-1152",
        "bpCode": "TOP001",
        "address": "160 TOLENTINO ST., SFDM QUEZON CITY",
        "federalTaxId": "000-376-744-00000",
        "sourceRow": 1152,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOP002",
    "name": "TOPVIDEOSOFT, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOP002-1153",
        "bpCode": "TOP002",
        "address": "RM 1502-83 EASEY COMM BLDG 253-261 WANCHAI, HONG KONG",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1153,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOP003-NT",
    "name": "TOP SHELF AQUATICS OPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOP003-NT-1154",
        "bpCode": "TOP003-NT",
        "address": "2226 CHINO ROCES AVE., BANGKAL, MAKATI CITY",
        "federalTaxId": "601-655-804-00000",
        "contactPerson": "PACIFICA",
        "mobilePhone": "09175094220",
        "sourceRow": 1154,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOT001",
    "name": "TOTAL PRO-TECH SOLUTIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOT001-1155",
        "bpCode": "TOT001",
        "address": "DOOR 20 VEL OUANO BLDGMC BRIONES ST. HIWAY ,6014MANDAUE CITY,CEBU PHIPPINES",
        "federalTaxId": "466-092-154-000",
        "contactPerson": "Amelie Fernandez",
        "sourceRow": 1155,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOU001",
    "name": "TOUCHSTREAM DIGITAL INC",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-TOU001-1156",
        "bpCode": "TOU001",
        "address": "UNIT 3001 ATLANTA CENTRE BLDG 31 ANNAPOLIS ST GREENHILLS 1502 CITY OF SAN JUAN NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "008-015-572-00000",
        "contactPerson": "Mitch Julapong",
        "email": "michille.agad@tdiphil.com",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "status": "Incomplete",
        "sourceRow": 1156,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      },
      {
        "id": "branch-TOU002-NT-1157",
        "bpCode": "TOU002-NT",
        "address": "UNIT 3001 ATLANTA CENTRE BLDG 31 ANNAPOLIS ST GREENHILLS 1502 CITY OF SAN JUAN NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "008-015-572-00000",
        "contactPerson": "Mitch Julapong",
        "email": "michille.agad@tdiphil.com",
        "rawCategory": "Supplier-Local",
        "status": "Incomplete",
        "sourceRow": 1157,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-TOY001-NT",
    "name": "TOYOTA PASONG TAMO, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOY001-NT-1158",
        "bpCode": "TOY001-NT",
        "address": "2292 PASONG TAMO EXTENSION, MAGALLANES CITY OF MAKATI NCR, FOURTH DISTRICT",
        "federalTaxId": "003-821-973-00000",
        "sourceRow": 1158,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOY002-NT",
    "name": "TOYOSCO PARTS CENTER INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOY002-NT-1159",
        "bpCode": "TOY002-NT",
        "address": "EPIFANIO DELOS SANTOS AVENUE MALIBAY PASAY METRO MANILA",
        "federalTaxId": "008-208-074-00000",
        "sourceRow": 1159,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOY007-NT",
    "name": "TOYOACE AUTO PARTS SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOY007-NT-1160",
        "bpCode": "TOY007-NT",
        "address": "2735-B TAFT AVE BRGY 84 ZONE 10.,PASAY CITY NCR, FOURTH DISTRICT,PHILIPPINES",
        "federalTaxId": "500-607-717-00001",
        "contactPerson": "MARK DANIEL TAN",
        "sourceRow": 1160,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOY008-NT",
    "name": "TOYOTA MANILA BAY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOY008-NT-1161",
        "bpCode": "TOY008-NT",
        "address": "926 AURORA BOULEVARD, SAN ROQUE, QUEZON CITY, NCR, SEOND DISTRICT PHILIPPINES",
        "federalTaxId": "004-676-716-00003",
        "contactPerson": "PRINCE RODRIGO",
        "sourceRow": 1161,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TOY009-NT",
    "name": "TOYOTA QUEZON AVENUE, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TOY009-NT-1162",
        "bpCode": "TOY009-NT",
        "address": "728 QUEZON AVE TATALON QUEZON CITY, METRO MANILA",
        "federalTaxId": "000-399-527-00000",
        "contactPerson": "PRINCE RODRIGO",
        "sourceRow": 1162,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TPC001-NT",
    "name": "TPC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TPC001-NT-1163",
        "bpCode": "TPC001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1163,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA001",
    "name": "TRANSGEN SOLUTIONS ENTERPRISE CO. LTD.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA001-1164",
        "bpCode": "TRA001",
        "address": "#27 COLORADO ST. VALLEY VIEW ROYALE VALLEY GOLF SUBD. BRGY. SAN ISIDRO TAYTAY RIZAL",
        "federalTaxId": "008-452-550-00000",
        "sourceRow": 1164,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA001-NT",
    "name": "TRAVELLERS INSURANCE SURETY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA001-NT-1165",
        "bpCode": "TRA001-NT",
        "address": "10F GE ANTONIO BLDG KALAW BACOBO ST BRGY 666 MANILA",
        "federalTaxId": "000-196-058-00000",
        "contactPerson": "nante",
        "sourceRow": 1165,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA002",
    "name": "TRANS ORIENT MICROSYSTEM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA002-1166",
        "bpCode": "TRA002",
        "address": "LT1 BLK1 SOUTH HORIZON",
        "federalTaxId": "009-109-593-00000",
        "sourceRow": 1166,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA002-NT",
    "name": "TRAVELLERS INTERNATIONAL HOTEL GROUP INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA002-NT-1167",
        "bpCode": "TRA002-NT",
        "address": "NEWPORT BLVD NEWPORT CITY CYBERTOURISM ZONE PASAY CITY 1300.",
        "federalTaxId": "246-099-058-001",
        "contactPerson": "A",
        "sourceRow": 1167,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA003",
    "name": "TRAILBLAZERS SOLUTIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA003-1168",
        "bpCode": "TRA003",
        "address": "75 MAYOR IGNACIO DIAZ ST BRGY SAN MARTIN DE PORES CUBAO QUEZON CITY 1111",
        "federalTaxId": "629-155-838-00001",
        "contactPerson": "BRIX TUMANING",
        "sourceRow": 1168,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA003-NT",
    "name": "TRAVERSE OUTDOOR CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA003-NT-1169",
        "bpCode": "TRA003-NT",
        "address": "UNIT 504-505 THE ONE EXECUTIVE OFFICE BLDG. #5 WEST AVE COR CO. MARTINEZ ST BRGY NAYONG KANLURAN",
        "federalTaxId": "010-253-719-000",
        "contactPerson": "MHIKA TANA",
        "mobilePhone": "09171202523",
        "sourceRow": 1169,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRA015-NT",
    "name": "TRAEVENTS CO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRA015-NT-1170",
        "bpCode": "TRA015-NT",
        "address": "UNIT 208 FBR ARCADE 317KATIPUNAN AVE LOYOLA HEIGHTS 1108 QC",
        "federalTaxId": "008-390-358-00000",
        "contactPerson": "KATHERINE PORTUGAL",
        "sourceRow": 1170,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRE001",
    "name": "TRENDCOM IT & SOFTWARE SOLUTIONS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRE001-1171",
        "bpCode": "TRE001",
        "address": "RM 309 3F FMB COMMERCIAL BLDG ML QUEZON ST BRGY SAN ROQUE ANTIPOLO CITY",
        "federalTaxId": "007-011-232-00000",
        "sourceRow": 1171,
        "documents": {}
      },
      {
        "id": "branch-TRE002-1172",
        "bpCode": "TRE002",
        "address": "RM 309 3F FMB COMMERCIAL BLDG ML QUEZON ST BRGY SAN ROQUE ANTIPOLO CITY",
        "federalTaxId": "007-011-232-00000",
        "sourceRow": 1172,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRE003",
    "name": "TRELLO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRE003-1173",
        "bpCode": "TRE003",
        "address": "888 BROADWAY,4TH FLOOR, NEW YORK NY 10003",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "Abhinav Asthana",
        "sourceRow": 1173,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRI001",
    "name": "TRICOM DYNAMICS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRI001-1174",
        "bpCode": "TRI001",
        "address": "3F/F METRO HOUSE BLDG., 345 GIL PUYAT AVE., MAKATI CITY",
        "federalTaxId": "000-172-881-00000",
        "sourceRow": 1174,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRI002",
    "name": "TRICOMP COMPUTER SUPPLY MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRI002-1175",
        "bpCode": "TRI002",
        "address": "BRGY SAN JOSE JARO",
        "federalTaxId": "911-194-706-00000",
        "sourceRow": 1175,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRO001-NT",
    "name": "TROJAN AGUILA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRO001-NT-1176",
        "bpCode": "TRO001-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "188-788-235-00000",
        "sourceRow": 1176,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TRU001",
    "name": "TRUVISOR PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TRU001-1177",
        "bpCode": "TRU001",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1177,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TSC001",
    "name": "TSCOM TELESAT COMMUNICATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TSC001-1178",
        "bpCode": "TSC001",
        "address": "MAHARLIKA HIGHWAY QUEZON DIST CABANATUAN CITY",
        "federalTaxId": "466-495-236-000",
        "contactPerson": "DAVID AREJA",
        "sourceRow": 1178,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TUNG001",
    "name": "TUNGSTEN AUTOMATION SINGAPORE PTE LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TUNG001-1179",
        "bpCode": "TUNG001",
        "address": "9 RAFFLES PLACE #53-01 REPUBLIC PLAZA 1",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "SUNNY LUN",
        "mobilePhone": "62784345",
        "sourceRow": 1179,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TUT001-NT",
    "name": "TUTOR, NIKKI MAE PANUGALING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TUT001-NT-1180",
        "bpCode": "TUT001-NT",
        "address": "292 SANCIANGKO ST PAHINA CNETRAL CEBU CITY 6000",
        "federalTaxId": "744-843-275-000",
        "contactPerson": "NIKKI",
        "sourceRow": 1180,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TWE002-NT",
    "name": "TWENTY11 CELLMATIC INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TWE002-NT-1181",
        "bpCode": "TWE002-NT",
        "address": "KC 419 (B) 4/F  SM  MEGAMALL BLDG B.J VARGAS WACK WACK GREENHILLS 1555 MANDALUYONG CITY",
        "federalTaxId": "668-002-726-00000",
        "contactPerson": "SALES",
        "sourceRow": 1181,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TWI001",
    "name": "TWIN CROWN DESIGN, CONSTRUCTION AND CONSULTANCY SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TWI001-1182",
        "bpCode": "TWI001",
        "federalTaxId": "190-887-759-00000",
        "sourceRow": 1182,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TWI002",
    "name": "T WIRED TRADING INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TWI002-1183",
        "bpCode": "TWI002",
        "address": "11F ONE CORP CENTER J VARGAS AVE. ORTIGAS CENTER PASIG CITY",
        "federalTaxId": "628-480-740-00000",
        "sourceRow": 1183,
        "documents": {}
      },
      {
        "id": "branch-TWI002-NT-1184",
        "bpCode": "TWI002-NT",
        "address": "11F ONE CORP CENTER J VARGAS AVE. ORTIGAS CENTER PASIG CITY",
        "federalTaxId": "628-480-740-00000",
        "sourceRow": 1184,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-TYR001-NT",
    "name": "TYREMART INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-TYR001-NT-1185",
        "bpCode": "TYR001-NT",
        "address": "347 ORTIGAS AVE., GREENHILLS EAST, MANDALUYONG CITY",
        "federalTaxId": "000-330-996-00000",
        "sourceRow": 1185,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UBE001",
    "name": "UBERTECH, INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UBE001-1186",
        "bpCode": "UBE001",
        "address": "18 SAINT PAUL BRGY HORSESHOE, QC",
        "federalTaxId": "007-304-242-00000",
        "sourceRow": 1186,
        "documents": {}
      },
      {
        "id": "branch-UBE002-NT-1187",
        "bpCode": "UBE002-NT",
        "address": "18 SAINT PAUL BRGY HORSESHOE, QC",
        "federalTaxId": "007-304-242-00000",
        "sourceRow": 1187,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UDM001-NT",
    "name": "UDEMY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UDM001-NT-1188",
        "bpCode": "UDM001-NT",
        "address": "489 ROSITA T UY BLDG. SHAW BLVD ADDITION HILLS",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "UDEMY SALES REP",
        "mobilePhone": "00000000000",
        "sourceRow": 1188,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UKC001-NT",
    "name": "UKC COMMERCIAL PRESS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UKC001-NT-1189",
        "bpCode": "UKC001-NT",
        "address": "56 JUSTICE P. TUAZON BLVD CUBAO, QUEZON CITY",
        "federalTaxId": "000-172-580-00000",
        "sourceRow": 1189,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ULT001",
    "name": "ULTRIUM CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ULT001-1190",
        "bpCode": "ULT001",
        "address": "857 SOBRECARY ST BO OBRERO DAVAO CITY",
        "federalTaxId": "006-040-086-00000",
        "sourceRow": 1190,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI001",
    "name": "UNIFIED SOLUTION AND INTEGRATION INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI001-1191",
        "bpCode": "UNI001",
        "address": "NO 14 MOSES ST FILINVEST II BRGY BAGONG SILANGAN QUEZON CITY",
        "federalTaxId": "008-023-028-000",
        "sourceRow": 1191,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI001-NT",
    "name": "UNITED LABORATORIES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI001-NT-1192",
        "bpCode": "UNI001-NT",
        "address": "66 UNITED STREET NCR 2ND DISTRICT MANDALUYONG CITY 1550",
        "federalTaxId": "000-063-471-000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 1192,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI002",
    "name": "UNITEDPLEXUS CORP",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI002-1193",
        "bpCode": "UNI002",
        "address": "UNIT 4 JC BLDG 40 ORTIGAS AVE EXT STA LUCIA PASIG CITY",
        "federalTaxId": "007-849-332-00000",
        "sourceRow": 1193,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI003",
    "name": "UNIVERSAL ACCESS SYSTEMS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI003-1194",
        "bpCode": "UNI003",
        "federalTaxId": "254-102-619-00100",
        "sourceRow": 1194,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI004",
    "name": "UNIKKON NETWORK PHILIPPINES INC.",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-UNI004-1195",
        "bpCode": "UNI004",
        "address": "19F UNIT E1 STRATA 100 BUILDING F. ORTIGAS JR ROAD CENTER BRGY SAN ANTONIO PASIG CITY 1605 OF PASIG NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "009-797-921-00000",
        "industry": "Retailer | Services",
        "contactPerson": "Shelby Trinidad",
        "position": "Admin",
        "mobilePhone": "639673628894",
        "email": "shelby@unikkonnetwork.com",
        "rawCategory": "Subcontructor",
        "dateAccredited": "2025-03-28",
        "status": "Outdated",
        "sourceRow": 1195,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          }
        }
      },
      {
        "id": "branch-UNI004-NT-1196",
        "bpCode": "UNI004-NT",
        "address": "19F UNIT E1 STRATA 100 BUILDING F. ORTIGAS JR ROAD CENTER BRGY SAN ANTONIO PASIG CITY 1605 OF PASIG NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "009-797-921-00000",
        "industry": "Retailer | Services",
        "contactPerson": "Shelby Trinidad",
        "position": "Admin",
        "mobilePhone": "639673628894",
        "email": "shelby@unikkonnetwork.com",
        "rawCategory": "Subcontructor-NT",
        "dateAccredited": "2025-03-28",
        "status": "Outdated",
        "sourceRow": 1196,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-UNI005",
    "name": "UNIVERSAL IVERGOS TRADING CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI005-1197",
        "bpCode": "UNI005",
        "address": "136 CONCEPCION ST., BRGY 85, 1400 CALOOCAN CITY NCR",
        "federalTaxId": "008-581-787-00000",
        "sourceRow": 1197,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI006",
    "name": "UNITED SAFETY TECHNOLOGY DISTRIBUTION (USTDI), INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI006-1198",
        "bpCode": "UNI006",
        "address": "25M SANTOS EXT SAN JOSE (POB), 1870 CITY OF ANTIPOLO RIZAL PHILIPPINES",
        "federalTaxId": "009-236-752-00000",
        "contactPerson": "JAMES SALGUSTE",
        "sourceRow": 1198,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI039-NT",
    "name": "UNIFIRM INTERNATIONAL TRADE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI039-NT-1199",
        "bpCode": "UNI039-NT",
        "address": "L60 B60ROAD 21 COR COGEO VILLAGE, BAGONG NAYON ANTIPOLO CITY",
        "federalTaxId": "240-721-824-000",
        "contactPerson": "SALES PERSON",
        "sourceRow": 1199,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UNI040",
    "name": "UNITECH ELECTRONICS & SECURITY SYSTEM INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UNI040-1200",
        "bpCode": "UNI040",
        "address": "1229 UNITED NATIONS AVE BRGY 664-A ZONE 71 DIST V MANILA",
        "federalTaxId": "007-846-782-000",
        "contactPerson": "JOHN MATTHEW TAVU",
        "sourceRow": 1200,
        "documents": {}
      },
      {
        "id": "branch-UNI040-NT-1201",
        "bpCode": "UNI040-NT",
        "address": "1229 UNITED NATIONS AVE BRGY 664-A ZONE 71 DIST V MANILA",
        "federalTaxId": "007-846-782-000",
        "contactPerson": "JOHN MATTHEW TAVU",
        "sourceRow": 1201,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UPL001",
    "name": "UPLINK INFORMATION SYSTEM, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UPL001-1202",
        "bpCode": "UPL001",
        "address": "UNIT 915-916 CITY & LAND MEGA PLAZA ADB AVENUE COR GARNET BRGY SAN ANTONIO, PASIG CITY",
        "federalTaxId": "005-649-502-00000",
        "sourceRow": 1202,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UPP001",
    "name": "UPPIAN ENTERPRISES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UPP001-1203",
        "bpCode": "UPP001",
        "address": "89 SENATORIAL ROAD BATASAN HILLS QUEZON CITY",
        "federalTaxId": "740-233-844-00000",
        "sourceRow": 1203,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-UPS001",
    "name": "UPSON INTERNATIONAL CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-UPS001-1204",
        "bpCode": "UPS001",
        "address": "404-407 4TH FLOOR BLDG B SM MEGAMALL WACK WACK  MANDALUYONG CITY",
        "federalTaxId": "004-780-008-00001",
        "contactPerson": "MR. RENANTE",
        "mobilePhone": "639564169779",
        "sourceRow": 1204,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VAL001-NT",
    "name": "VALERIOS GRAPHIC DESIGN & PRINTING SERVICES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VAL001-NT-1205",
        "bpCode": "VAL001-NT",
        "address": "022 P. DIEGO CERA AVE. MANUYO UNO LAS PINAS CITY 1740",
        "federalTaxId": "205-955-867-00000",
        "sourceRow": 1205,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VAN002",
    "name": "VANTAZTIC INCORPORATED",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-VAN002-1206",
        "bpCode": "VAN002",
        "address": "57 SULTAN KUDARAT ST. AYALA HEIGHTS MATANDANG BALARA 1119 QUEZON CITY NCR, SECOND DSITRICT PHILIPPINES",
        "federalTaxId": "007-907-623-00000",
        "industry": "Business Support Services Activities | \r\nRetailer",
        "contactPerson": "Lady Alaisa Cayago",
        "position": "Sales",
        "mobilePhone": "09499 956 462 | 0917 307 2514",
        "email": "sales.vantaztic@gmail.com",
        "rawCategory": "Supplier-Local",
        "dateAccredited": "2025-03-28",
        "status": "Complete",
        "sourceRow": 1206,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2025-12-31",
            "status": "Expired",
            "daysLeft": -203
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-VER001",
    "name": "VERSATECH INTERNATIONAL INC",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-VER001-1207",
        "bpCode": "VER001",
        "address": "5TH FLR. ALVA BUSINESS CENTER 259 C. RAYMUNDO AVENUE MAYBUNGA 1607 CITY OF PASIG NCR, SECOND DISTRICT PHILIPPINES",
        "federalTaxId": "007-895-409-00000",
        "industry": "Wholesaler",
        "contactPerson": "Charles Edmund Go",
        "position": "Vice President of Finance and Accounting",
        "mobilePhone": "63 939 999 0526",
        "email": "charles.go@versatech.com.ph",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "status": "Incomplete",
        "sourceRow": 1207,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2025-12-31",
            "status": "Expired",
            "daysLeft": -203
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2027-04-27",
            "status": "Current",
            "daysLeft": 279
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-VER002",
    "name": "VERTIV (PHILIPPINES), INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VER002-1208",
        "bpCode": "VER002",
        "address": "31 FLOOR THE ORIENT SQUARE BUILDING F ORTIGAS JR ROAD ORTIGAS CENTER SAN ANTONIO PASIG",
        "federalTaxId": "210-958-780-00000",
        "sourceRow": 1208,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIC001",
    "name": "VIC IMPERIAL APPLIANCE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIC001-1209",
        "bpCode": "VIC001",
        "address": "COR. OSMENA BLVD & ZAMORA ST. SENYOR SANTO NINO 6000 CEBU CITY (CAPITAL) CEBU",
        "federalTaxId": "000-249-888-00001",
        "sourceRow": 1209,
        "documents": {}
      },
      {
        "id": "branch-VIC001-NT-1210",
        "bpCode": "VIC001-NT",
        "address": "COR. OSMENA BLVD & ZAMORA ST. SENYOR SANTO NINO 6000 CEBU CITY (CAPITAL) CEBU",
        "federalTaxId": "000-249-888-00001",
        "contactPerson": "SALES PERSON",
        "sourceRow": 1210,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIL005",
    "name": "VILLAGOMEZ, CHRISTEL RAMOS",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIL005-1211",
        "bpCode": "VIL005",
        "address": "G/F UNIT 12 GOLD  ARCADE 550 FLORENTINO TORRES ST. BRGY 303 ZONE 29 STA. CRUZ MANILA 1003",
        "federalTaxId": "779-215-863-000",
        "contactPerson": "Rhoze delos Reyes",
        "mobilePhone": "09176218365",
        "sourceRow": 1211,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIL021",
    "name": "VILLMAN COMPUTER SYSTEMS (WEST) INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIL021-1212",
        "bpCode": "VIL021",
        "address": "AXI-426-J 4TH FLR CYBERZONE SM CITY NORTH EDSA, NORTH AVE, BAGONG PAG-ASA, QUEZON CTY 1105",
        "federalTaxId": "005-249-453-00032",
        "contactPerson": "JOSEPH RECIO",
        "sourceRow": 1212,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIN001",
    "name": "VINEA DISTRIBUTION INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIN001-1213",
        "bpCode": "VIN001",
        "address": "47 KAMIAS ROAD, PINYAHAN, QC",
        "federalTaxId": "008-175-966-00000",
        "sourceRow": 1213,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIO001-NT",
    "name": "VIOSILS PARTY SALES CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIO001-NT-1214",
        "bpCode": "VIO001-NT",
        "address": "M.H. DEL PILAR STREET, MOLO, ILOILO CITY",
        "federalTaxId": "000-250-866-00000",
        "sourceRow": 1214,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIR001",
    "name": "VIRTALUS LLC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIR001-1215",
        "bpCode": "VIR001",
        "address": "633 WEST FIFTH STREET, 28TH FLOOR",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1215,
        "documents": {}
      },
      {
        "id": "branch-VIR002-NT-1216",
        "bpCode": "VIR002-NT",
        "address": "633 WEST FIFTH STREET, 28TH FLOOR",
        "federalTaxId": "000-000-000-00000",
        "sourceRow": 1216,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIS001-NT",
    "name": "VISTA TALA RESORT & RECREATIONAL PARK INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIS001-NT-1217",
        "bpCode": "VIS001-NT",
        "address": "TALA, ORANI, BATAAN 2112",
        "federalTaxId": "009-018-533-000",
        "contactPerson": "MA.KATRINA DELA TORRE",
        "mobilePhone": "09175699479",
        "sourceRow": 1217,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIS005",
    "name": "VISIONSHIELD TECHNOLOGY INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIS005-1218",
        "bpCode": "VIS005",
        "address": "8TH FLOOR ROOM 802, 734 ORA ELECTRONICS CENTER, N.A GONZALO PUYAT ST COR EVANGELISTA ST, N.A QUIAPO",
        "federalTaxId": "010-826-444-000",
        "contactPerson": "SHIELA CARLOS",
        "sourceRow": 1218,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VIZ001-NT",
    "name": "VIZEN MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VIZ001-NT-1219",
        "bpCode": "VIZ001-NT",
        "address": "G/F 917 REMEDIOS STREET BRGY 693 ZONE 075 MALATE MANILA 1004",
        "federalTaxId": "439-889-929-00000",
        "sourceRow": 1219,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VJG001-NT",
    "name": "VJ GRAPHIC ARTS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VJG001-NT-1220",
        "bpCode": "VJG001-NT",
        "address": "UNIT 1-C FUTURE POINT PLAZA 3, 111 PANAY AVE., QUEZON CITY",
        "federalTaxId": "000-400-353-000",
        "contactPerson": "PERCIVAL DATU",
        "sourceRow": 1220,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VMW01",
    "name": "VMWARE INTERNATIONAL LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-VMW01-1221",
        "bpCode": "VMW01",
        "address": "IRELAND",
        "federalTaxId": "010-000-000-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 1221,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-VST001",
    "name": "VSTECS PHILS. INC.",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-VST001-1222",
        "bpCode": "VST001",
        "address": "MSI-ECS COMPLEX M. EUSEBIO AVENUE SAN MIGUEL 1600 CITY OF PASIG NCR, SECOND DISTRICT  PHILIPPINES",
        "federalTaxId": "200-833-967-00000",
        "industry": "Distributor",
        "contactPerson": "Grace Shiela Valencia",
        "position": "Finance Division",
        "mobilePhone": "02-8830-9730",
        "email": "gvalencia@msi-ecs.com.ph",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "dateAccredited": "2025-07-17",
        "status": "Outdated",
        "sourceRow": 1222,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2024-12-31",
            "status": "Expired",
            "daysLeft": -568
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2026-07-15",
            "status": "Expired",
            "daysLeft": -7
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Import Permit": {
            "provided": true,
            "expiryDate": "2027-03-07",
            "status": "Current",
            "daysLeft": 228
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      },
      {
        "id": "branch-VST001-NT-1223",
        "bpCode": "VST001-NT",
        "address": "MSI-ECS COMPLEX M. EUSEBIO AVENUE SAN MIGUEL 1600 CITY OF PASIG NCR, SECOND DISTRICT  PHILIPPINES",
        "federalTaxId": "200-833-967-00000",
        "industry": "Distributor",
        "contactPerson": "Grace Shiela Valencia",
        "position": "Finance Division",
        "mobilePhone": "02-8830-9730",
        "email": "gvalencia@msi-ecs.com.ph",
        "rawCategory": "Supplier-Local",
        "dateAccredited": "2025-07-17",
        "status": "Outdated",
        "sourceRow": 1223,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": true,
            "status": "Current"
          },
          "Letter of Accreditation": {
            "provided": true,
            "status": "Current"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": true,
            "status": "Current"
          },
          "SIF": {
            "provided": true,
            "status": "Current"
          },
          "BIR2303": {
            "provided": true,
            "status": "Current"
          },
          "SEC (Corp)": {
            "provided": true,
            "status": "Current"
          },
          "AFS": {
            "provided": true,
            "expiryDate": "2024-12-31",
            "status": "Expired",
            "daysLeft": -568
          },
          "GIS (Corp)": {
            "provided": true,
            "expiryDate": "2026-07-15",
            "status": "Expired",
            "daysLeft": -7
          },
          "Business Permit": {
            "provided": true,
            "expiryDate": "2026-12-31",
            "status": "Current",
            "daysLeft": 162
          },
          "Import Permit": {
            "provided": true,
            "expiryDate": "2027-03-07",
            "status": "Current",
            "daysLeft": 228
          },
          "Product Profile": {
            "provided": true,
            "status": "Current"
          },
          "Proof of Present Address": {
            "provided": true,
            "status": "Current"
          }
        }
      }
    ]
  },
  {
    "id": "pc-import-WAL001",
    "name": "WALTERMART HANDYMAN, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WAL001-1224",
        "bpCode": "WAL001",
        "address": "4TH LEVEL, WALTERMART, CHINO ROCES      AVENUE, PIO DEL PILAR, MAKATI CITY",
        "federalTaxId": "004-869-007-00500",
        "sourceRow": 1224,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WEB001",
    "name": "ILAGAN, ROY MANANSALA",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WEB001-1225",
        "bpCode": "WEB001",
        "address": "UNIT G G/F 1457 MACEDA ST ZONE 049 BRGY 501 SAMPALOC MANILA",
        "federalTaxId": "949-602-286-00000",
        "sourceRow": 1225,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WEN001",
    "name": "WENDELL'S MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WEN001-1226",
        "bpCode": "WEN001",
        "address": "TONDO MANILA",
        "federalTaxId": "300-741-031-00000",
        "contactPerson": "WENDELL",
        "mobilePhone": "09178568824",
        "sourceRow": 1226,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WES001",
    "name": "WESTCON GROUP PHILIPPINES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WES001-1227",
        "bpCode": "WES001",
        "address": "UNIT 6 & 7, 9F WILCON IT HUB 2251 CHINO ROCES AVE., BANGKAL, CITY OF MAKATI NCR, FOURTH DISTRICT PHILIPPINES 1233",
        "federalTaxId": "287-434-759-00000",
        "industry": "Computer Consultancy & Computer Facilities Management Activities |\r\nRetailer",
        "contactPerson": "Sabela Selini B. Mariano",
        "position": "AR Administrator - APAC",
        "mobilePhone": "63 9609128274",
        "email": "onboarding.apac@westcon.com",
        "supplierRank": "Major",
        "status": "Incomplete",
        "sourceRow": 1227,
        "documents": {
          "Confidentiality and Non-Disclosure Agreement": {
            "provided": false,
            "status": "Missing"
          },
          "Letter of Accreditation": {
            "provided": false,
            "status": "Missing"
          },
          "Supplier Code of Business Conduct and Ethics": {
            "provided": false,
            "status": "Missing"
          }
        }
      },
      {
        "id": "branch-WES001-NT-1228",
        "bpCode": "WES001-NT",
        "address": "UNIT 6 & 7, 9F WILCON IT HUB 2251 CHINO ROCES AVE., BANGKAL, CITY OF MAKATI NCR, FOURTH DISTRICT PHILIPPINES 1233",
        "federalTaxId": "287-434-759-00000",
        "contactPerson": "WESTCON",
        "sourceRow": 1228,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WES002",
    "name": "WESTCON SOLUTIONS PHILIPPINES INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WES002-1229",
        "bpCode": "WES002",
        "address": "UNIT 5 14F WILCON IT HUB 2251 DON CHINO ROCES AVE., BANGKAL 1233 CITY OF MAKATI NCR, FOURTH DISTRICT",
        "federalTaxId": "008-735-725-00000",
        "supplierRank": "Major",
        "sourceRow": 1229,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WES003",
    "name": "WESTERN GRAND CENTRAL CO., INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WES003-1230",
        "bpCode": "WES003",
        "address": "SPACE 1030 A,B,C 1031 M1 TRINOMA NORTH AVE., COR EDSA PAG-ASA QUEZON CITY",
        "federalTaxId": "223-359-036-00400",
        "sourceRow": 1230,
        "documents": {}
      },
      {
        "id": "branch-WES006-NT-1233",
        "bpCode": "WES006-NT",
        "address": "SPACE 1030 A,B,C 1031 M1 TRINOMA NORTH AVE., COR EDSA PAG-ASA QUEZON CITY",
        "federalTaxId": "223-359-036-00004",
        "sourceRow": 1233,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WES004",
    "name": "WESTERN MARKETING CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WES004-1231",
        "bpCode": "WES004",
        "address": "34 MORATO ST., BRGY. MARIBLO, SFDM, QUEZON CITY",
        "federalTaxId": "000-326-100-00005",
        "sourceRow": 1231,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WES005-NT",
    "name": "WESTERN GUARANTY CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WES005-NT-1232",
        "bpCode": "WES005-NT",
        "address": "11/F ETY BLDG QUINTIN PAREDES ST BRGY 289 BINONDO MANILA",
        "federalTaxId": "000-660-078-00000",
        "sourceRow": 1232,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WHE001-NT",
    "name": "WHEELHAUS AUTO CARE INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WHE001-NT-1234",
        "bpCode": "WHE001-NT",
        "address": "EVANGELISTA ST., COR. TINIO ST., BANGKAL, MAKATI CITY",
        "federalTaxId": "009-249-723-00000",
        "sourceRow": 1234,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WHE002-NT",
    "name": "WHEELHAUS MARKETING",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WHE002-NT-1235",
        "bpCode": "WHE002-NT",
        "address": "1816 B EVANGELISTA ST COR TINIO ST., BANGKAL MAKATI",
        "federalTaxId": "009-249-723-00000",
        "sourceRow": 1235,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WHE003-NT",
    "name": "WHEELS, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WHE003-NT-1236",
        "bpCode": "WHE003-NT",
        "address": "3F CITIMOTORS BLDG. CHINO ROCES AVE., PIO DEL PILAR",
        "federalTaxId": "000-390-549-00004",
        "sourceRow": 1236,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WHI001-NT",
    "name": "WHITESPACE INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WHI001-NT-1237",
        "bpCode": "WHI001-NT",
        "address": "2314 CHINO ROCES AVE EXT MAKATI CITY 1231",
        "federalTaxId": "007-089-312-00000",
        "contactPerson": "RALPH GAMBOA",
        "sourceRow": 1237,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WIL001",
    "name": "WILCON DEPOT INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WIL001-1238",
        "bpCode": "WIL001",
        "address": "PASONG TAMO EXT., BRGY BANGKAL MAKATI CITY",
        "federalTaxId": "009-192-878-00031",
        "sourceRow": 1238,
        "documents": {}
      },
      {
        "id": "branch-WIL002-1239",
        "bpCode": "WIL002",
        "address": "2212 CHINO ROCES AVE BRGY SAN LORENZO CITY OF MAKATI",
        "federalTaxId": "009-192-878-00005",
        "contactPerson": "PETER PAUL ROLLO",
        "sourceRow": 1239,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WIL002-NT",
    "name": "WILLIAM TUBERA JR.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WIL002-NT-1240",
        "bpCode": "WIL002-NT",
        "address": "MANDALUYONG CITY",
        "federalTaxId": "280-294-227-00000",
        "sourceRow": 1240,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WIN001-NT",
    "name": "WINDFALL EVENT MANAGEMENT",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WIN001-NT-1241",
        "bpCode": "WIN001-NT",
        "address": "14 URANIUM STRET PAMPLONA TRES LAS PINAS CITY 1740",
        "federalTaxId": "181-028-793-00000",
        "sourceRow": 1241,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WIR001",
    "name": "WIRELESS LINK TECHNOLOGIES, INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WIR001-1242",
        "bpCode": "WIR001",
        "address": "544 FLORENTINO TORRES ST. BRGY 303ZONE 029 ST. CRUZ MANILA 1003",
        "federalTaxId": "007-312-019-000",
        "contactPerson": "JAYMART CORTES",
        "mobilePhone": "09171052747",
        "sourceRow": 1242,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WIS001",
    "name": "WISE 82 TECH BUILDERS INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WIS001-1243",
        "bpCode": "WIS001",
        "address": "NIS MOTORS CORP KM 8 NATIONAL HIGHWAY BRGY PAMPANGA DAVAO CITY",
        "federalTaxId": "441-663-991-00000",
        "sourceRow": 1243,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WIZ001-NT",
    "name": "WIZER INDUSTRIES INCORPORATED",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WIZ001-NT-1244",
        "bpCode": "WIZ001-NT",
        "address": "RM210 NORAYTO BLDG., 312 SAN VICENTE ST., BINONDO MANILA",
        "federalTaxId": "200-206-122-00000",
        "dateAccredited": "2026-07-08",
        "sourceRow": 1244,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WOR001",
    "name": "WORDTEXT SYSTEMS, INC.",
    "type": "Supplier",
    "supplierOrigin": "Local",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-WOR001-1245",
        "bpCode": "WOR001",
        "address": "WSI CORPORATE CENTER, 1005 METROPOLITAN AVE., SANTA CRUZ, CITY OF MAKATI",
        "federalTaxId": "000-152-693-00000",
        "contactPerson": "Shara Meg Acebron",
        "email": "SharaMeg.Acebron@wsiphil.com.ph",
        "rawCategory": "Supplier-Local",
        "supplierRank": "Major",
        "sourceRow": 1245,
        "documents": {}
      },
      {
        "id": "branch-WOR001-NT-1246",
        "bpCode": "WOR001-NT",
        "address": "WSI Corporate Center 1005 Metropolitan Avenue Santa Cruz",
        "federalTaxId": "000-152-693-00000",
        "rawCategory": "Supplier-Local",
        "sourceRow": 1246,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WOR002-NT",
    "name": "WORLD VISION DEVELOPMENT FOUNDATION, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WOR002-NT-1247",
        "bpCode": "WOR002-NT",
        "address": "389 QUEZON AVE. COR. WEST 6TH ST. WEST TRIANGLE,",
        "federalTaxId": "004-732-315-00000",
        "sourceRow": 1247,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WOR003-NT",
    "name": "WORLD HOME DEPOT CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WOR003-NT-1248",
        "bpCode": "WOR003-NT",
        "address": "#20 FORTUNE AVE. COR. SANTAN ST. BRGY FORTUNE MARIKINA CITY",
        "federalTaxId": "208-281-405-00000",
        "sourceRow": 1248,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WRA001-NT",
    "name": "WRAP SHOP INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WRA001-NT-1249",
        "bpCode": "WRA001-NT",
        "address": "UNIT 1623 HERRERA TOWER 98 HERRERA ST. SALCEDO VILLAGE",
        "federalTaxId": "220-604-224-00000",
        "sourceRow": 1249,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WSI001",
    "name": "WSI TECHNICAL CENTER",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WSI001-1250",
        "bpCode": "WSI001",
        "address": "1005 METROPOLITAN AVENUE COR KAKARONG ST., STA CRUZ, MAKATI CITY",
        "federalTaxId": "000-152-693-00014",
        "sourceRow": 1250,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-WYN001",
    "name": "WYNTECH CORP.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-WYN001-1251",
        "bpCode": "WYN001",
        "address": "W -1506A WEST TOWER PSEC EXCHANGE RD ORTIGAS CENTER, SAN ANTONIO, PASIG CITY 1605",
        "federalTaxId": "010-530-558-000",
        "contactPerson": "DOROTHY ANN CESAR",
        "supplierRank": "Major",
        "sourceRow": 1251,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-XCO001",
    "name": "XCOMP COMPUTER SALES & SERVICES, iNC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-XCO001-1252",
        "bpCode": "XCO001",
        "address": "R. DUTERTE ST. COR. V. RAMA AVE.        GUADALUPE, CEBU CITY",
        "federalTaxId": "216-510-466-00000",
        "sourceRow": 1252,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-XIR001",
    "name": "XITRIX COMPUTER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-XIR001-1253",
        "bpCode": "XIR001",
        "address": "23 DETROIT ST COR DON A EGEA, PINAGKAISAHAN CUBAO, 1111  QUEZN CITY, NCR 2ND DISTRICTPHILIPPINES",
        "federalTaxId": "220-418-197-00000",
        "sourceRow": 1253,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-XYF001",
    "name": "XYFER INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-XYF001-1254",
        "bpCode": "XYF001",
        "address": "99-B CALAMBA STREET BRGY. LOURDES 1 QUEZON CITY 1114",
        "federalTaxId": "010-133-818-000",
        "contactPerson": "Ronald Dela Cruz",
        "mobilePhone": "09771180295",
        "sourceRow": 1254,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-XYM001",
    "name": "XYMBOLIC IT SOLUTIONS PROVIDER CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-XYM001-1255",
        "bpCode": "XYM001",
        "address": "16 MT APO EAST 1ST STREET NEW ASINAN OLONGAPO CITY 2200",
        "federalTaxId": "739-829-004-000",
        "contactPerson": "VILMA SANTOS",
        "sourceRow": 1255,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-YAP001",
    "name": "YAP, MARK  WILLIAM IGNACIO",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-YAP001-1256",
        "bpCode": "YAP001",
        "address": "725 INT 25 LAONG NASA ST. BRGY 155 TONDO 1013 TONDO I / II NCR, CITY OF MANILA",
        "federalTaxId": "468-096-736-00000",
        "contactPerson": "MARK WILLIAM",
        "sourceRow": 1256,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-YEK001",
    "name": "YEK YEU MERCHANDISING, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-YEK001-1257",
        "bpCode": "YEK001",
        "address": "3/F 500 SAN FERNANDO ST., BRGY. 282 ZONE 26 DIST. III SAN NICOLAS MANILA 1010",
        "federalTaxId": "000-321-025-00007",
        "contactPerson": "ELYNOR HONEY CALOPEZ",
        "sourceRow": 1257,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-YEL001-NT",
    "name": "YELLO X SUPPLY CHAIN SOLUTIONS INC",
    "type": "Courier",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-YEL001-NT-1258",
        "bpCode": "YEL001-NT",
        "address": "2/F CITADL BLDG 637 BONIFACION DRIVE ZONE 68 BRGY 653 1018 PORT AREA NCR MANILA CITY",
        "federalTaxId": "431-697-862-00002",
        "contactPerson": "SALES SPECIALIST",
        "rawCategory": "Courier-NT",
        "sourceRow": 1258,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-YFC001",
    "name": "YFC-BONEAGLE INTERNATIONAL, INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-YFC001-1259",
        "bpCode": "YFC001",
        "address": "RM501 5/F NEW GOLD BOND MARKETING CORP 1579 F. BENITEZ ST. ERMITA MANILA",
        "federalTaxId": "009-768-625-00000",
        "contactPerson": "CONTACT",
        "sourceRow": 1259,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-YUS001",
    "name": "YUSIN NINE MARKETING INC",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-YUS001-1260",
        "bpCode": "YUS001",
        "address": "117 KALIKID SUR CABANATUAN CITY NUEVA ECIJA",
        "federalTaxId": "008-456-259-00000",
        "sourceRow": 1260,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-YUS002",
    "name": "YUSHU TECHNOLOGY CO., LTD",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-YUS002-1261",
        "bpCode": "YUS002",
        "address": "NO 88 DONGLIU ROAD BINJIANG DISTICT HANGZHOU ZHEJIANG, CHINA",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "ZOEY  ZHAO",
        "sourceRow": 1261,
        "documents": {}
      },
      {
        "id": "branch-YUS002-NT-1262",
        "bpCode": "YUS002-NT",
        "address": "NO 88 DONGLIU ROAD BINJIANG DISTICT HANGZHOU ZHEJIANG, CHINA",
        "federalTaxId": "000-000-000-00000",
        "contactPerson": "ZOEY  ZHAO",
        "sourceRow": 1262,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZAM001",
    "name": "ZAMONY VENTURE CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZAM001-1263",
        "bpCode": "ZAM001",
        "address": "2263 AURORA BLVD., BRGY. 148 PASAY CITY 1300",
        "federalTaxId": "006-342-282-00000",
        "contactPerson": "RAYMOND LEE",
        "sourceRow": 1263,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZEN001",
    "name": "ZENITH UNITED ELECTRIC CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZEN001-1264",
        "bpCode": "ZEN001",
        "address": "SUITE 201 2/F LE MAR BEN II BLDG",
        "federalTaxId": "008-084-875-00000",
        "sourceRow": 1264,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZEN002",
    "name": "ZENSHIN SYSTEMS CORPORATION",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZEN002-1265",
        "bpCode": "ZEN002",
        "address": "25 G ROXAS",
        "federalTaxId": "000-844-802-00000",
        "sourceRow": 1265,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZER001",
    "name": "ZEROSSL GMBH",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZER001-1266",
        "bpCode": "ZER001",
        "address": "Salzgries 19/3+4",
        "federalTaxId": "00000000000000000",
        "contactPerson": "ZEROSSL",
        "sourceRow": 1266,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZET001-01",
    "name": "ZETATECH INNOVATIONS INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZET001-01-1267",
        "bpCode": "ZET001-01",
        "address": "12TH FLR UNIT 1206 THE TRADE AND FIANCIAL TOWER 7TH AVE AND 32ND ST. BONIFACIO GLOBAL CITY TAGUIG",
        "federalTaxId": "617-079-540-00000",
        "contactPerson": "JIMMY V. TANARA",
        "sourceRow": 1267,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZHW001",
    "name": "ZHW CCTV PARTS & ACCESSORIES",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZHW001-1268",
        "bpCode": "ZHW001",
        "address": "LOT 73 BLK 44 C BENITEZ ST.",
        "federalTaxId": "725-800-673-000",
        "contactPerson": "MYLA ROBLES",
        "mobilePhone": "639174959993",
        "sourceRow": 1268,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZIA001",
    "name": "ZI-ARGUS (PILIPINAS), INC.",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZIA001-1269",
        "bpCode": "ZIA001",
        "address": "G/F METRO DRUG INC. COMPOUND            MAÑALAC AVENUE, BAGUMBAYAN TAGUIG CITY METRO MANILA.",
        "federalTaxId": "000-119-887-00000",
        "sourceRow": 1269,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZIM002",
    "name": "ZIMOSYSTEM SOLUTIONS INCORPORATED",
    "type": "Subcontractor",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": false,
    "accreditationStatus": "Accredited",
    "branches": [
      {
        "id": "branch-ZIM002-1270",
        "bpCode": "ZIM002",
        "address": "ZOSIMO OPONE COMPOUND HON TUDTUD ROAD GOV M CUENCO AVE. BANILAD 6000 CEBU CITY",
        "federalTaxId": "603-316-459-00000",
        "contactPerson": "MARK JOSEPH V. SALVADO",
        "mobilePhone": "09171791903",
        "rawCategory": "Subcontructor",
        "sourceRow": 1270,
        "documents": {}
      }
    ]
  },
  {
    "id": "pc-import-ZIO001",
    "name": "ZION ELECTRICAL SUPPLY",
    "type": "Uncategorized",
    "createdAt": "2026-07-22T16:29:28.179Z",
    "isArchived": true,
    "accreditationStatus": "Unaccredited",
    "branches": [
      {
        "id": "branch-ZIO001-1271",
        "bpCode": "ZIO001",
        "address": "800 T. ALONZO ST., BRGY ZONE 031, STA. CRUZ,",
        "federalTaxId": "134-806-886-00000",
        "sourceRow": 1271,
        "documents": {}
      }
    ]
  }
];
