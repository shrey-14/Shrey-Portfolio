import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

/** One page. Empty until a site URL is known, since sitemap entries must be absolute. */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return siteUrl ? [{ url: siteUrl.href, changeFrequency: "monthly", priority: 1 }] : [];
}
