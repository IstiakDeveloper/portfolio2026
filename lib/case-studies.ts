export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tech: string[];
  problem: string;
  solution: string;
  result: string;
  keywords: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "rice-mill-operations-automation",
    title: "Rice Mill Operations & Automation System",
    metaTitle:
      "Rice Mill Management Software | Case Study by Istiak Hossain — Software Developer",
    metaDescription:
      "How software developer Istiak Hossain built a Laravel & React rice mill ERP with season tracking, customer dues, and print-ready financial reports — replacing paper ledgers and spreadsheets.",
    tech: ["Laravel 12", "Inertia.js", "React 19", "TypeScript", "MySQL"],
    problem:
      "A rice milling business tracked two seasonal cycles (Boro and Aman) using paper ledgers and disconnected spreadsheets — leading to reconciliation errors and no reliable way to track customer dues.",
    solution:
      "Built a full transaction management system with a single financial source of truth — every payment routes through one central service to eliminate duplicate entries. Designed six purpose-built, print-first reports (Day Book, Customer Ledger, Due List, Season Summary, Payment Collection, Bag Usage).",
    result:
      "Eliminated duplicate financial entries, gave the owner real-time season performance visibility, and reduced end-of-season reporting from days to a single click.",
    keywords: [
      "rice mill software",
      "inventory management system",
      "Laravel ERP",
      "business automation",
    ],
  },
  {
    id: 2,
    slug: "pharmacy-management-system",
    title: "Pharmacy Management — Supplier & Purchase",
    metaTitle:
      "Pharmacy Management Software | Case Study by Website Developer Istiak Hossain",
    metaDescription:
      "Custom pharmacy inventory and supplier management software built with Laravel and React — featuring credit limit enforcement, FEFO expiry tracking, and purchase order automation.",
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    problem:
      "A pharmacy needed a reliable way to manage supplier relationships, purchase orders, and inventory — while enforcing credit limits and tracking expiry dates to avoid stock losses.",
    solution:
      "Built a full Supplier & Purchase Module following a strict Controller → Service → Repository → Model architecture, with credit limit management, FEFO (First-Expiry-First-Out) inventory logic, partial receiving support, and multiple payment methods.",
    result:
      "Gave the pharmacy accurate, real-time inventory tracking and reduced financial risk through automated credit limit enforcement.",
    keywords: [
      "pharmacy management software",
      "inventory software",
      "supplier management system",
    ],
  },
  {
    id: 3,
    slug: "hospital-management-system",
    title: "Hospital Management — Test & Accounting Modules",
    metaTitle:
      "Hospital Management Software | Case Study by Software Developer Istiak Hossain",
    metaDescription:
      "Hospital test management and accounting software with multi-department reporting — Trial Balance, Balance Sheet, P&L, and Cash Flow — built by full-stack developer Istiak Hossain.",
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    problem:
      "A hospital needed a way to manage patient test records and generate accurate financial reports across multiple departments (general hospital, medicine, and optics).",
    solution:
      "Developed a medical test management module with grouped patient entries and A4 receipt printing, along with accounting modules generating Trial Balance, Balance Sheet, Profit & Loss, and Cash Flow reports in traditional column layouts.",
    result:
      "Streamlined patient test record-keeping and gave hospital administration accurate, print-ready financial reports across all departments.",
    keywords: [
      "hospital management software",
      "healthcare software developer",
      "medical accounting system",
    ],
  },
  {
    id: 4,
    slug: "microfinance-data-processing",
    title: "Microfinance Data Processing & Structuring",
    metaTitle:
      "Microfinance Data Automation | Case Study by Istiak Hossain — Software Developer",
    metaDescription:
      "Python data pipeline for 42-branch microfinance NGO — aggregating 2,100+ groups with complex Unicode text handling. Built by software developer Istiak Hossain.",
    tech: ["Python", "openpyxl", "Excel Automation"],
    problem:
      "An NGO with 42 branches and over 2,100 microfinance groups needed branch-level data aggregated into regional and zonal reports — a process complicated by complex Unicode text matching across multilingual datasets.",
    solution:
      "Built Python-based data processing pipelines using openpyxl to extract, clean, and aggregate branch, employee, and field officer data into structured Excel and JSON outputs — solving Unicode text matching challenges across multilingual data along the way.",
    result:
      "Delivered accurate, structured regional and zonal reports, reducing what was previously a manual, error-prone process to an automated pipeline.",
    keywords: [
      "microfinance software",
      "data automation",
      "Python data automation",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyById(id: number): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}
