import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the site to /out.
  // Works on Vercel, GitHub Pages, Netlify or any static host.
  output: "export",
  images: { unoptimized: true },
  // Dev only: let phones on the same Wi-Fi load the dev server's scripts (e.g. http://192.168.1.162:3000).
  // Without this, Next.js blocks them for non-localhost origins, so the page never hydrates and
  // nothing interactive works (theme toggle, screenshot viewer). Has no effect on the static build.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.16.*.*", "*.local"],
};

export default nextConfig;
