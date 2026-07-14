export interface OtherProject {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export const otherProjects: OtherProject[] = [
  {
    slug: "echal-rice-ecommerce-erp",
    title: "Echal — Rice E-Commerce & ERP",
    description:
      "An automated e-commerce platform for ordering rice, featuring an advanced admin dashboard that automatically processes accounts, payments, receipts, income/expenditures, and balance sheets.",
    tech: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/IstiakDeveloper",
    demo: "https://echal.bd",
    image: "/img/proj/proj1.png",
  },
  {
    slug: "mousumi-eye-hospital",
    title: "Mousumi Eye Hospital",
    description:
      "Official service showcase portal for Mousumi Eye Hospital, featuring a custom integrated online patient booking and appointment scheduling management system.",
    tech: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/IstiakDeveloper",
    demo: "https://mousumieyehospital.com",
    image: "/img/proj/proj2.png",
  },
  {
    slug: "mousumi-erp-hrm",
    title: "Mousumi ERP — Complete HRM",
    description:
      "An enterprise Human Resource Management (HRM) platform covering attendance, movement tracking, automated payroll, employee loans, staff funds, fixed asset registry, and inventory control.",
    tech: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/IstiakDeveloper",
    demo: "https://hrm.mousumibd.org",
    image: "/img/proj/proj3.png",
  },
];
