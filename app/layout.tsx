import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/jetbrains-mono";
import { profile } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  // Without a known URL, skip everything that needs an absolute link rather than point it at localhost.
  ...(siteUrl && { metadataBase: siteUrl, alternates: { canonical: "/" } }),
  title,
  description: profile.metaDescription,
  openGraph: {
    title,
    description: profile.metaDescription,
    type: "website",
    ...(siteUrl && { url: "/", images: [{ url: profile.photo.png, width: 480, height: 480, alt: profile.name }] }),
  },
  // The share image is a square photo, so use the small card rather than the wide one.
  twitter: { card: "summary", title, description: profile.metaDescription },
  icons: { icon: "/icon.svg" },
};

// Tints the mobile browser bar to match the page (values mirror --bg in globals.css).
export const viewport: Viewport = {
  viewportFit: "cover", // lets the floating back-to-top button respect notches via env(safe-area-inset-*)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

// Runs before paint so a saved theme never flashes the wrong colours.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
