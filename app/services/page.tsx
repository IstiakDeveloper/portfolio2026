import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import {
  getBreadcrumbSchema,
  getServicesFAQSchema,
} from "@/lib/structured-data";
import {
  PERSON_INFO,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Remote Website Developer & Software Developer | Hire Istiak Hossain",
  description:
    "Looking for a remote website developer or software developer? Hire Istiak Hossain (Istiak Developer) — a professional Laravel & React developer building custom web apps, business automation, and inventory systems for clients worldwide.",
  keywords: [
    "website developer",
    "software developer",
    "remote website developer",
    "remote software developer",
    "Istiak Developer",
    "Istiak Hossain",
    "hire website developer",
    "hire software developer",
    "freelance developer",
    "freelance software developer",
    "Laravel developer",
    "React developer",
    "remote Laravel developer",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Remote Website Developer & Software Developer | Istiak Hossain",
    description:
      "Hire Istiak Hossain — remote website developer and software developer specializing in Laravel, React, and custom business software for international clients.",
    url: `${SITE_URL}/services`,
  },
};

const services = [
  {
    title: "Custom Website Development",
    description:
      "Professional websites and web applications built with React, Laravel, and modern TypeScript — fast, responsive, and designed for real business use.",
  },
  {
    title: "Custom Software Development",
    description:
      "End-to-end software systems for inventory, accounting, HR, healthcare, and operations — replacing spreadsheets and manual paperwork with reliable automation.",
  },
  {
    title: "Business Process Automation",
    description:
      "Turn manual, paper-based workflows into software that reduces errors, saves hours every week, and gives you a single source of truth for your data.",
  },
  {
    title: "API Integration & Backend Architecture",
    description:
      "Clean, maintainable backend systems using Repository/Service patterns — built to scale without breaking as your business grows.",
  },
];

const faqs = [
  {
    question: "Who is Istiak Developer?",
    answer:
      "Istiak Developer is the professional brand of Istiak Hossain — a remote website developer and software developer with 9+ years of experience building production systems for agriculture, pharmacies, hospitals, and microfinance clients worldwide.",
  },
  {
    question: "What kind of projects does Istiak Hossain build?",
    answer:
      "Istiak builds custom websites, web applications, inventory management systems, accounting software, reporting dashboards, hospital management modules, e-commerce platforms, and data automation pipelines using Laravel, React, Python, and MySQL.",
  },
  {
    question: "Can I hire Istiak as a remote website developer?",
    answer:
      "Yes. Istiak Hossain is available for remote freelance projects and contract work worldwide. You can reach him via email, Upwork, or LinkedIn — he typically responds within 24 hours and works across international time zones.",
  },
  {
    question: "Why hire a software developer instead of using off-the-shelf tools?",
    answer:
      "Custom software fits your exact workflow. When spreadsheets, generic SaaS tools, or manual processes can't handle your business logic — season tracking, credit limits, multi-department accounting, complex data pipelines — a dedicated software developer builds exactly what you need.",
  },
];

export default function ServicesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
  ]);

  return (
    <>
      <StructuredData data={[getServicesFAQSchema(), breadcrumb]} />

      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-card-border bg-card/30">
          <div className="max-w-4xl mx-auto px-6 py-10 sm:py-14">
            <Link
              href="/"
              className="text-sm text-accent hover:underline mb-6 inline-block"
            >
              ← Back to Home
            </Link>

            <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
              Istiak Developer · {PERSON_INFO.availability}
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Remote Website Developer &amp; Software Developer —{" "}
              <span className="text-accent">Istiak Hossain</span>
            </h1>

            <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
              I&apos;m a remote website developer and software developer
              available for clients worldwide. I build custom web applications
              and business automation systems using Laravel and React. If you
              need a reliable developer to replace spreadsheets, automate
              operations, or ship production software — you&apos;re in the right place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
              >
                Hire Me — Let&apos;s Talk
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-card-border font-semibold hover:border-accent/30 transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-14">
          {/* Stats */}
          <section className="grid grid-cols-3 gap-4 mb-16">
            {[
              { value: `${PERSON_INFO.yearsExperience}+`, label: "Years Experience" },
              { value: `${PERSON_INFO.systemsBuilt}+`, label: "Systems Built" },
              { value: `${PERSON_INFO.industriesServed}+`, label: "Industries Served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-card-border rounded-xl p-4 text-center bg-card"
              >
                <div className="text-2xl font-extrabold text-foreground">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              What I Do as a Website &amp; Software Developer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-card-border rounded-2xl p-6 bg-card"
                >
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why hire */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Hire Istiak Hossain as Your Developer?
            </h2>
            <div className="text-muted leading-relaxed space-y-4 text-sm">
              <p>
                Most businesses don&apos;t need another generic app — they need a{" "}
                <strong className="text-foreground">software developer</strong>{" "}
                who understands real operations. I&apos;ve built systems that
                handle real money, real inventory, and real daily workflows for
                agriculture, pharmacies, hospitals, and microfinance organizations
                across multiple countries.
              </p>
              <p>
                As a <strong className="text-foreground">remote website developer</strong>,
                I focus on clean architecture that doesn&apos;t break as your
                business grows — Repository and Service patterns, single sources
                of truth for financial logic, and interfaces simple enough for
                non-technical staff to use every day.
              </p>
              <p>
                Whether you found me searching for{" "}
                <strong className="text-foreground">&quot;Istiak Developer&quot;</strong>
                , need a{" "}
                <strong className="text-foreground">freelance software developer</strong>
                , or want to{" "}
                <strong className="text-foreground">hire a remote website developer</strong>
                — I deliver production-grade software, not prototypes.
              </p>
            </div>
          </section>

          {/* Tech stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technologies I Use</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Laravel",
                "React",
                "TypeScript",
                "Next.js",
                "Inertia.js",
                "MySQL",
                "Python",
                "Tailwind CSS",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-card-border rounded-xl p-6 bg-card"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center border border-card-border rounded-2xl p-10 bg-card/50">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Hire a Website or Software Developer?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Contact {SITE_NAME} today. Available for remote projects worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
              >
                Email Me
              </a>
              <a
                href={SOCIAL_PROFILES.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-card-border font-semibold hover:border-accent/30 transition-colors"
              >
                Upwork Profile
              </a>
              <a
                href={SOCIAL_PROFILES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-card-border font-semibold hover:border-accent/30 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-card-border py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE_NAME} — Website Developer &amp;
          Software Developer · {SITE_URL.replace("https://", "")}
        </footer>
      </div>
    </>
  );
}
