import { profile } from "@/content/site";

/**
 * The public address of the site, or null when none is known.
 * Order: NEXT_PUBLIC_SITE_URL, then `profile.siteUrl`, then Vercel's production URL.
 * Never falls back to localhost, so a build without a URL omits absolute links instead of shipping broken ones.
 */
export function getSiteUrl(): URL | null {
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl || (vercel ? `https://${vercel}` : "");
  return raw ? new URL(raw) : null;
}
