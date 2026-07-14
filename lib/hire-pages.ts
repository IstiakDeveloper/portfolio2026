export type HirePage = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  whatYouGet: { title: string; description: string }[];
  whyHire: string[];
  faqs: { question: string; answer: string }[];
};

export const hirePages: HirePage[] = [
  {
    slug: "laravel-developer",
    title: "Hire Laravel Developer",
    h1: "Hire a Remote Laravel Developer for Production Business Software",
    metaTitle:
      "Hire Laravel Developer (Remote) | Istiak Hossain — Freelance Laravel Expert",
    metaDescription:
      "Hire Istiak Hossain as your remote Laravel developer. Custom ERP, inventory, accounting, and business automation systems built with Laravel, React, and MySQL. Available worldwide — respond within 24h.",
    keywords: [
      "hire Laravel developer",
      "remote Laravel developer",
      "freelance Laravel developer",
      "Laravel expert for hire",
      "Laravel developer for business software",
      "hire Laravel programmer",
    ],
    intro:
      "Looking to hire a Laravel developer who builds real production systems — not demos? I deliver Laravel applications for inventory, accounting, healthcare, and operations with clean architecture that scales.",
    whatYouGet: [
      {
        title: "Production Laravel Apps",
        description:
          "Full Laravel backends with Service/Repository patterns, secure payments logic, and APIs ready for React or Inertia.js frontends.",
      },
      {
        title: "Business Automation Systems",
        description:
          "Replace spreadsheets and paper workflows with Laravel software for inventory, dues, ledgers, and daily operations reporting.",
      },
      {
        title: "Maintainable Codebase",
        description:
          "Strict separation of concerns so your system stays stable as features grow — built for long-term ownership, not quick hacks.",
      },
      {
        title: "Remote Collaboration",
        description:
          "Clear communication, documented deliverables, and availability across international time zones for freelance or contract work.",
      },
    ],
    whyHire: [
      "9+ years building production software that handles real money and inventory",
      "Laravel + React/Inertia experience for modern full-stack apps",
      "Proven case studies: rice mill ERP, pharmacy inventory, hospital accounting, microfinance data pipelines",
      "Typically responds within 24 hours — available for remote hire worldwide",
    ],
    faqs: [
      {
        question: "How do I hire Istiak Hossain as a Laravel developer?",
        answer:
          "Email hello@istiakhossain.com, message via Upwork, or connect on LinkedIn. Share your project goals and timeline — you'll get a clear reply within 24 hours.",
      },
      {
        question: "Do you take freelance Laravel projects remotely?",
        answer:
          "Yes. All work is remote and available to clients worldwide. Email, Zoom, and async updates keep delivery clear without needing an in-office team.",
      },
      {
        question: "What Laravel stacks do you use?",
        answer:
          "Laravel (including newer major versions), MySQL, React/TypeScript, Inertia.js, Tailwind CSS, REST APIs, and clean Service/Repository architecture.",
      },
    ],
  },
  {
    slug: "react-developer",
    title: "Hire React Developer",
    h1: "Hire a Remote React Developer for Modern Web Applications",
    metaTitle:
      "Hire React Developer (Remote) | Istiak Hossain — Freelance React Expert",
    metaDescription:
      "Hire Istiak Hossain as your remote React developer. Custom dashboards, business UIs, and full-stack apps with React, TypeScript, and Laravel backends. Available worldwide.",
    keywords: [
      "hire React developer",
      "remote React developer",
      "freelance React developer",
      "React TypeScript developer for hire",
      "hire React programmer",
      "React developer for business software",
    ],
    intro:
      "Need to hire a React developer for dashboards, admin panels, or customer-facing apps? I build clean React/TypeScript interfaces backed by solid Laravel APIs — focused on reliability for non-technical staff and growing businesses.",
    whatYouGet: [
      {
        title: "React + TypeScript UIs",
        description:
          "Modern React interfaces with TypeScript for type-safe, maintainable frontends that are easy for teams to extend.",
      },
      {
        title: "Business Dashboards & Reports",
        description:
          "Print-ready reports, inventory views, and operational dashboards that turn raw data into decisions.",
      },
      {
        title: "Full-Stack Delivery",
        description:
          "React frontends wired to Laravel backends so you hire one developer for end-to-end features — not a fragmented team.",
      },
      {
        title: "Production Quality",
        description:
          "Interfaces designed for daily use by real operators, not just demo polish. Clear UX for inventory, accounting, and clinics.",
      },
    ],
    whyHire: [
      "React 19 / TypeScript experience paired with Laravel production backends",
      "Ship UI that non-technical staff can use every day without training headaches",
      "Real shipped systems across healthcare, commerce, and operations",
      "Remote-friendly freelance process — clear scopes and fast replies",
    ],
    faqs: [
      {
        question: "Can I hire you only for React frontend work?",
        answer:
          "Yes. You can hire me for React/TypeScript frontend only, or full-stack with Laravel. Most clients prefer both so features ship faster.",
      },
      {
        question: "Do you work with Next.js and Inertia.js?",
        answer:
          "Yes. I build React apps with TypeScript, Tailwind CSS, Next.js where needed, and Inertia.js with Laravel for tightly coupled full-stack apps.",
      },
      {
        question: "How quickly can a React project start?",
        answer:
          "After a short discovery call or written brief, most projects can start within a few days. Contact hello@istiakhossain.com to hire.",
      },
    ],
  },
  {
    slug: "software-developer",
    title: "Hire Software Developer",
    h1: "Hire a Remote Software Developer for Business Automation",
    metaTitle:
      "Hire Software Developer (Remote Freelance) | Istiak Hossain",
    metaDescription:
      "Hire a remote software developer for custom web apps and business automation. Istiak Hossain builds inventory, accounting, and operations software with Laravel & React for clients worldwide.",
    keywords: [
      "hire software developer",
      "remote software developer",
      "freelance software developer",
      "hire remote developer",
      "custom software developer for hire",
      "business automation developer",
    ],
    intro:
      "Searching to hire a software developer who understands real operations — money, stock, reports, and daily workflows? I build custom business software so teams stop relying on spreadsheets and paper.",
    whatYouGet: [
      {
        title: "Custom Business Software",
        description:
          "Tailored systems for inventory, accounting, HR, healthcare modules, and e-commerce operations — built around your process.",
      },
      {
        title: "Automation That Saves Time",
        description:
          "Turn manual reporting and reconciliation into one-click pipelines and dashboards with a single source of truth.",
      },
      {
        title: "End-to-End Ownership",
        description:
          "From architecture to UI to deployment support — hire one senior-minded developer instead of coordinating multiple roles.",
      },
      {
        title: "International Remote Delivery",
        description:
          "Available for freelance and contract hire worldwide. Email, Upwork, and LinkedIn — usual response within 24 hours.",
      },
    ],
    whyHire: [
      "50+ systems built across multiple industries",
      "Strong track record replacing spreadsheets with production software",
      "Clean architecture that does not break as your business grows",
      "Clear communication — remote clients stay informed every step",
    ],
    faqs: [
      {
        question: "Why hire a custom software developer instead of SaaS tools?",
        answer:
          "Off-the-shelf tools fail when your rules are unique — seasonal ledgers, credit limits, multi-department reports, data pipelines. A custom software developer builds exactly your workflow.",
      },
      {
        question: "What is the best way to hire you?",
        answer:
          "Email hello@istiakhossain.com with your problem and timeline, or hire via Upwork. LinkedIn works for introductions. You'll get a practical next-step reply within 24 hours.",
      },
      {
        question: "Do you offer ongoing maintenance after launch?",
        answer:
          "Yes. Many clients hire for the build plus ongoing improvements — new modules, reports, and performance work as the business grows.",
      },
    ],
  },
  {
    slug: "website-developer",
    title: "Hire Website Developer",
    h1: "Hire a Remote Website Developer for Custom Web Applications",
    metaTitle:
      "Hire Website Developer (Remote) | Istiak Hossain — Freelance Web Developer",
    metaDescription:
      "Hire Istiak Hossain as your remote website developer. Custom websites, web apps, booking systems, and business platforms built with Laravel, React, and TypeScript — available worldwide.",
    keywords: [
      "hire website developer",
      "remote website developer",
      "freelance website developer",
      "hire web developer",
      "custom website developer for hire",
      "website developer freelance",
    ],
    intro:
      "Want to hire a website developer who ships more than brochure pages? I build websites and web applications that run real business processes — bookings, dashboards, shops, and admin systems — with Laravel and React.",
    whatYouGet: [
      {
        title: "Custom Websites & Web Apps",
        description:
          "Marketing sites with real functionality — online booking, e-commerce flows, admin panels, and authenticated client areas.",
      },
      {
        title: "Fast, Modern Stack",
        description:
          "React, TypeScript, Tailwind, and Laravel backends for sites that are fast, maintainable, and ready to grow.",
      },
      {
        title: "Conversion-Focused Delivery",
        description:
          "Clear CTAs, contact paths, and portfolios structured so visitors become clients — including SEO-friendly page structure.",
      },
      {
        title: "Remote Freelancer You Can Rely On",
        description:
          "Available for international website development projects. Transparent scope, timelines, and communication.",
      },
    ],
    whyHire: [
      "Not just landing pages — production apps used daily by staff and customers",
      "Live portfolio: hospitals, ERP, e-commerce, and automation systems",
      "SEO-aware builds with proper titles, structure, and performance basics",
      "Remote hire process designed for founders and agencies abroad",
    ],
    faqs: [
      {
        question: "Can I hire you to rebuild or improve an existing website?",
        answer:
          "Yes. I take new builds and upgrades — performance, new modules, React rewrites, or Laravel backend work on existing sites.",
      },
      {
        question: "Do you handle both design and development?",
        answer:
          "I focus on development and UX structure. For heavy brand design I can collaborate with your designer or implement from Figma.",
      },
      {
        question: "How do international clients hire a website developer remotely?",
        answer:
          "Share requirements by email or Upwork. We agree on scope and milestones, then build and ship online with demos at each stage.",
      },
    ],
  },
];

export function getHirePageBySlug(slug: string): HirePage | undefined {
  return hirePages.find((page) => page.slug === slug);
}
