import type { MetadataRoute } from "next"
export const dynamic = "force-static"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smansa-rembang-web1.pages.dev"
  return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }]
}

