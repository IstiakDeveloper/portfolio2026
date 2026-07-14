import type { CaseStudy } from "./case-studies";
import {
  PERSON_INFO,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "./site-config";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON_INFO.name,
    alternateName: ["Istiak Developer", "Istiak Hossain Developer"],
    url: SITE_URL,
    email: SITE_EMAIL,
    jobTitle: PERSON_INFO.jobTitle,
    description: PERSON_INFO.description,
    image: `${SITE_URL}/img/istiak.webp`,
    jobLocationType: "TELECOMMUTE",
    workLocation: {
      "@type": "VirtualLocation",
      name: "Remote — Worldwide",
    },
    sameAs: Object.values(SOCIAL_PROFILES),
    knowsAbout: [
      "Website Development",
      "Software Development",
      "Laravel",
      "React",
      "TypeScript",
      "Business Automation",
      "Inventory Management Systems",
      "Custom Web Applications",
      "Remote Software Development",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "Istiak Developer",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${SITE_NAME} — Remote Website & Software Development`,
    url: `${SITE_URL}/services`,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/img/istiak.webp`,
    email: SITE_EMAIL,
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Website Development",
      "Software Development",
      "Custom Web Application Development",
      "Business Process Automation",
      "Inventory Management Software",
      "Remote Development Services",
    ],
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    priceRange: "$$",
  };
}

export function getServicesFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Istiak Developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Istiak Developer is the professional brand of Istiak Hossain — a remote website developer and software developer available worldwide, specializing in Laravel, React, and custom business automation systems.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Istiak Hossain offer as a website developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Istiak Hossain builds custom websites, web applications, business automation systems, inventory and accounting software, reporting dashboards, and API integrations using Laravel, React, and TypeScript for international clients.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hire Istiak Hossain as a remote software developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Istiak Hossain is available for remote freelance projects and contract work worldwide via Upwork, email, or LinkedIn. He typically responds within 24 hours and works across time zones.",
        },
      },
      {
        "@type": "Question",
        name: "What industries has Istiak Hossain built software for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Istiak has built production software for agriculture, pharmacies, hospitals, microfinance, e-commerce, and HR management — handling real money, inventory, and daily operations for clients internationally.",
        },
      },
    ],
  };
}

export function getCaseStudySchema(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/projects/${study.slug}`,
    },
    keywords: study.keywords.join(", "),
    inLanguage: "en",
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getHomePageSchemas() {
  return [
    getPersonSchema(),
    getWebSiteSchema(),
    getProfessionalServiceSchema(),
  ];
}
