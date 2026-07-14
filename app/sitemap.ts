import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { hirePages } from "@/lib/hire-pages";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const hirePageEntries: MetadataRoute.Sitemap = hirePages.map((page) => ({
    url: `${SITE_URL}/hire/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.92,
  }));

  const projectPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/projects/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...hirePageEntries, ...projectPages];
}
