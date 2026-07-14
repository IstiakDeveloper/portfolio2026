import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import StructuredData from "@/components/StructuredData";
import { getHirePageBySlug, hirePages } from "@/lib/hire-pages";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import {
  PERSON_INFO,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return hirePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getHirePageBySlug(slug);

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `${SITE_URL}/hire/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/hire/${page.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

function getHireFaqSchema(page: (typeof hirePages)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function getHireServiceSchema(page: (typeof hirePages)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    url: `${SITE_URL}/hire/${page.slug}`,
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: page.title,
  };
}

export default async function HirePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getHirePageBySlug(slug);

  if (!page) {
    notFound();
  }

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: page.title, url: `${SITE_URL}/hire/${page.slug}` },
  ]);

  return (
    <>
      <StructuredData
        data={[getHireFaqSchema(page), getHireServiceSchema(page), breadcrumb]}
      />

      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-card-border bg-card/30">
          <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14">
            <BrandLogo href="/" size="md" className="mb-6" />

            <nav className="text-sm text-muted mb-6 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-accent">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground">{page.title}</span>
            </nav>

            <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
              {PERSON_INFO.availability} · Hire {SITE_NAME}
            </p>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              {page.h1}
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-8">{page.intro}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${SITE_EMAIL}?subject=Hire%20request%20—%20${encodeURIComponent(page.title)}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
              >
                Hire Me — Email Now
              </a>
              <a
                href={SOCIAL_PROFILES.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-card-border font-semibold hover:border-accent/30 transition-colors"
              >
                Hire on Upwork
              </a>
            </div>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-14">
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">What You Get When You Hire Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {page.whatYouGet.map((item) => (
                <div
                  key={item.title}
                  className="border border-card-border rounded-2xl p-5 bg-card"
                >
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Why Clients Hire {SITE_NAME}</h2>
            <ul className="flex flex-col gap-3">
              {page.whyHire.map((reason) => (
                <li
                  key={reason}
                  className="flex gap-3 text-sm text-muted leading-relaxed"
                >
                  <span className="text-accent font-bold shrink-0">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4">Related Work</h2>
            <p className="text-sm text-muted mb-4 leading-relaxed">
              See production case studies before you hire — rice mill ERP,
              pharmacy inventory, hospital modules, and data automation.
            </p>
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent hover:underline"
            >
              View projects &amp; case studies →
            </Link>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">FAQ — {page.title}</h2>
            <div className="flex flex-col gap-5">
              {page.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-card-border rounded-xl p-5 bg-card"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center border border-card-border rounded-2xl p-8 sm:p-10 bg-card/50">
            <h2 className="text-2xl font-bold mb-3">Ready to Hire?</h2>
            <p className="text-muted mb-6 text-sm max-w-md mx-auto">
              Tell me about your project. I respond within 24 hours and work with
              clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
              >
                {SITE_EMAIL}
              </a>
              <a
                href={SOCIAL_PROFILES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-card-border font-semibold hover:border-accent/30 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted">
            <span>Also hiring for:</span>
            {hirePages
              .filter((p) => p.slug !== page.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/hire/${p.slug}`}
                  className="text-accent hover:underline"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </main>

        <footer className="border-t border-card-border py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE_NAME} — Remote Website &amp; Software
          Developer
        </footer>
      </div>
    </>
  );
}
