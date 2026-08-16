import type { MetadataRoute } from "next";
import { programs } from "@/data/site";

const siteUrl = "https://ironforgefitness.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...programs.map((program) => ({
      url: `${siteUrl}/programs/${program.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
