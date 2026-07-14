import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { getBreadcrumbSchema, getCaseStudySchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Project Not Found" };
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    keywords: study.keywords,
    alternates: {
      canonical: `${SITE_URL}/projects/${study.slug}`,
    },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `${SITE_URL}/projects/${study.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
    { name: study.title, url: `${SITE_URL}/projects/${study.slug}` },
  ]);

  return (
    <>
      <StructuredData data={[getCaseStudySchema(study), breadcrumb]} />

      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-card-border bg-card/30">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <nav className="text-sm text-muted mb-6 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-accent">
                Projects
              </Link>
              <span>/</span>
              <span className="text-foreground">{study.title}</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              {study.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-accent/5 border border-accent/15 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {study.title}
            </h1>

            <p className="text-muted leading-relaxed">
              A production software project by{" "}
              <Link href="/" className="text-accent hover:underline">
                Istiak Hossain
              </Link>
              , website developer and software developer.
            </p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex flex-col gap-10 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider text-xs">
                The Problem
              </h2>
              <p className="text-muted">{study.problem}</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider text-xs">
                The Solution
              </h2>
              <p className="text-muted">{study.solution}</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider text-xs">
                The Result
              </h2>
              <p className="text-muted">{study.result}</p>
            </section>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 border-t border-card-border pt-10">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-card-border font-semibold hover:border-accent/30 transition-colors"
            >
              ← All Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
            >
              Hire {SITE_NAME}
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
