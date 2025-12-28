import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.formyxa.com";

  return [
    {
      url: `${baseUrl}/`,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/text-case-converter`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/json-formatter`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/text-cleaner`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/online-notepad`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/text-statistics`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/text-normalizer`,
      priority: 0.9,
    }
  ];
}
