# Shrey Patel — portfolio

The personal site of Shrey Patel, AI Engineer in London: LLM and RAG systems that get evaluated, not just demoed.

**Live:** _add the URL here once deployed_ · **Contact:** shreypatel141102@gmail.com

Every project is presented like an ML model card (problem → approach → eval → shipped), with a one-line eval result up front, real screenshots and a "how it works" figure. Every number on the page is a real measurement.

## Features

- **Model-card projects:** a plain-language summary for non-technical readers, an eval strip, the full write-up for engineers.
- **Screenshot gallery and viewer:** responsive AVIF/JPEG images; a full-screen viewer with a blurred, scroll-locked background, previous/next, arrow keys, Esc, swipe and pinch-zoom.
- **Light and dark themes:** follows the system setting, remembers your choice, no flash on load.
- **Accessible:** skip link, real heading outline, visible focus, WCAG AA contrast in both themes, reduced-motion support, 44px touch targets.
- **Fast and static:** exported to plain HTML/CSS/JS, self-hosted fonts, lazy-loaded responsive images.
- **Small touches:** an eased in-page scroll, a floating back-to-top button, copy-email, a "failing test" 404 page and a print stylesheet.

## Tech stack

| | |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router), static export |
| UI | React 19, TypeScript (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), CSS-first config, design tokens as CSS variables |
| Type | Inter Tight and JetBrains Mono, self-hosted via [Fontsource](https://fontsource.org) |
| Icons | [Iconoir](https://iconoir.com) (`iconoir-react`) |
| Hosting | [Vercel](https://vercel.com), or any static host |

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build; writes the static site to `out/` |
| `npm run lint` | TypeScript type-check |

**Testing on a phone:** with the dev server running, open `http://<your computer's LAN IP>:3000` on a phone on the same Wi-Fi. `allowedDevOrigins` in `next.config.ts` lets private-network addresses load the dev scripts.

## Project structure

```
app/
  layout.tsx          metadata, viewport, fonts, no-flash theme script
  page.tsx            page shell and section order
  not-found.tsx       404 page
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
  globals.css         design tokens, base styles, motion, print styles
content/
  site.ts             ALL copy and data: profile, metrics, projects, background, interface text
  types.ts            content types
components/
  SiteHeader.tsx      top bar and section nav
  SiteFooter.tsx      footer
  sections/           one file per section (Hero, Projects, About, Background, Skills, Contact)
  ui/                 building blocks (ProjectCard, ScreenGallery, FlowFigure, Icon, Logo, ...)
lib/
  site-url.ts         resolves the public site URL
  smooth-scroll.ts    eased in-page scrolling
public/               photo, CV, favicon, project screenshots
scripts/              screenshot variant generator
```

## Editing content

Everything you'd change lives in **`content/site.ts`**: the profile, hero metrics, projects, experience, education, skills and all interface text. Components only render what's in that file.

- Wrap a number in `**double asterisks**` (e.g. `"Hit@1 = **100%**"`) to show it as an orange highlighted metric.
- To update the CV or photo, replace `public/Shrey_Patel_CV.pdf` or `public/shrey.webp` / `public/shrey.png`.
- To reorder or remove sections, edit `app/page.tsx`.

### Adding a project screenshot

1. Put the screenshot in `public/projects/<project>/`, with browser chrome cropped out.
2. Generate the responsive variants (macOS):
   ```bash
   swift scripts/screenshot-variants.swift public/projects/<project>/<name>.png
   ```
3. Add it to the project's `screens` list in `content/site.ts` with its real `width`, `height`, descriptive `alt` text and a plain caption. The first screenshot is shown large.

## Design system

The visual system, called "The Lab Notebook", is documented in [`DESIGN.md`](DESIGN.md). In short:

- warm paper background, ink text, one orange accent for numbers and emphasis
- square corners and 1px hairlines; no shadows, gradients or rounded cards
- Inter Tight for prose, JetBrains Mono for labels, dates and metrics
- colours are CSS variables in `app/globals.css`, and dark mode swaps the variables

## Deploying

### Vercel (recommended)

1. Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new). Next.js is detected automatically.
2. Set the site's public URL, either as `profile.siteUrl` in `content/site.ts` or as the environment variable `NEXT_PUBLIC_SITE_URL=https://your-domain.com`. It's used for link-preview images, the canonical URL and the sitemap. Without it the site still works, but link previews have no image and the sitemap is empty.
3. Add your custom domain under Project → Settings → Domains.

### Any static host

`npm run build` writes a complete static site to `out/`, which you can host on GitHub Pages, Netlify, Cloudflare Pages or any web server.

## License

The code is free to read and learn from. The written content, photo, CV and project screenshots are © Shrey Patel; please don't reuse them as your own.
