import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import StructuredData from "@/components/StructuredData";
import { caseStudies } from "@/lib/case-studies";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Website & Software Development Portfolio",
  description:
    "Explore production software projects by Istiak Hossain — website developer and software developer. Case studies in rice mill ERP, pharmacy management, hospital systems, and microfinance automation.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects & Case Studies | Istiak Hossain — Software Developer",
    description:
      "Production-grade software projects built by website developer Istiak Hossain for rice mills, pharmacies, hospitals, and NGOs.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
  ]);

  return (
    <>
      <StructuredData data={breadcrumb} />

      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-card-border bg-card/30">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Link
              href="/"
              className="text-sm text-accent hover:underline mb-4 inline-block"
            >
              ← Back to Home
            </Link>
            <BrandLogo href="/" size="md" className="mb-6" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Projects & Case Studies
            </h1>
            <p className="text-muted leading-relaxed max-w-2xl">
              Production software built by{" "}
              <strong className="text-foreground">Istiak Hossain</strong>, a
              professional website developer and software developer specializing
              in Laravel, React, and business automation.
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="border border-card-border rounded-2xl p-6 sm:p-8 bg-card hover:border-accent/30 transition-colors"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-accent/5 border border-accent/15 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  <Link
                    href={`/projects/${study.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {study.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {study.problem}
                </p>

                <Link
                  href={`/projects/${study.slug}`}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Read full case study →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-card-border pt-12">
            <h2 className="text-2xl font-bold mb-4">
              Need a Website or Software Developer?
            </h2>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              Hire Istiak Hossain for custom web applications and business
              automation systems.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </main>

        <footer className="border-t border-card-border py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE_NAME}. Website Developer & Software
          Developer.
        </footer>
      </div>
    </>
  );
}
