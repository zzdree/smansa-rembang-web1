import type { MetadataRoute } from "next"
export const dynamic = "force-static"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smanma-rembang-web.pages.dev"
  return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }]
}

