# Shrey Patel — portfolio

Personal portfolio for an AI Engineer. Audience is technical reviewers first (engineers, ML leads who check the claims) and non-technical readers, with recruiters secondary. Voice is confident, never job-seeking: show the work, invite conversation. Product truth lives in `PRODUCT.md`.

## Stack
- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (CSS-first config in `app/globals.css`, no tailwind.config file)
- Fonts self-hosted via `@fontsource-variable/*` (no Google Fonts network call)
- Icons: Iconoir via `iconoir-react` (pinned), always through `components/ui/Icon.tsx`
- Static export (`output: "export"`): `npm run build` → `/out`

## Commands
- `npm run dev`: local dev at http://localhost:3000. To test on a phone, open `http://<your Mac's LAN IP>:3000` on the same Wi-Fi; `allowedDevOrigins` in `next.config.ts` lets private-network addresses load the dev scripts (without it the page never hydrates on the phone).
- `npm run build`: production static build to `/out`
- `npm run lint`: TypeScript type-check

## Structure
```
app/
  layout.tsx       metadata, viewport theme-color, fonts, no-flash theme script
  not-found.tsx    branded 404
  robots.ts, sitemap.ts  static; absolute URLs only once a site URL is known
  page.tsx         page layout + SECTION ORDER (edit here to reorder/add/remove)
  globals.css      design tokens (colours, fonts) + base styles
content/
  site.ts          ALL copy and data: profile, hero metrics, projects, background, section labels (`sections`), interface text (`ui`)
  types.ts         types for content
components/
  SiteHeader.tsx   top bar (sticky from lg) + pinned section-link row below lg
  SiteFooter.tsx   page footer landmark: mark, name, last updated
  BackToTop.tsx    client: floating bottom-right button once the hero scrolls away
  CopyEmail.tsx    client: copy-to-clipboard next to the email, confirms with a check
  ConsoleNote.tsx  client: two-line hello in the devtools console (text in `ui.consoleNote`)
  ScrollSpyNav.tsx client: highlights the section in view
  ThemeToggle.tsx  client: light/dark toggle, saved in localStorage
  sections/        one file per page section (Hero, Projects, About, Background, Skills, Contact)
  ui/              reusable primitives (Section, ProjectCard, ScreenGallery, FlowFigure, TimelineItem, Highlight, Icon, Logo)
lib/site-url.ts    the site's public URL: NEXT_PUBLIC_SITE_URL > profile.siteUrl > Vercel; never localhost
lib/smooth-scroll.ts  eased in-page scrolling (used by SmoothScroll.tsx for every #link, and BackToTop)
public/            photo, CV PDF, favicon (icon.svg), projects/ (screenshots + generated -640/-960 AVIF/JPEG variants)
scripts/           screenshot-variants.swift: generates those -640/-960 variants (macOS)
```

## Conventions
- **Content goes in `content/site.ts`, never hard-coded in components.** That includes interface text (`ui`) and section headings (`sections`).
- `**text**` inside content strings renders as an orange mono highlight (see `ui/Highlight.tsx`). Use it for numbers and metrics only.
- Each section uses `<Section id label>` from `components/ui/Section.tsx`; the label renders as the section's `<h2>`. No section numbers. If a section should appear in the header nav, add its `id` to `nav` in `content/site.ts`; the mobile nav shows ids on one line, so mark extras `mobile: false`.
- Projects follow the "model card" shape: problem → approach → eval → shipped. Every project should state a metric and its eval set where possible.
- Every project has a plain-language `summary` (what it does, no jargon) for non-technical readers, and an `evalStrip`: one line of proof shown in the card header, using only numbers already in its `eval`. Analysis projects can set `evalLabel: "finding"` to relabel the strip and row. Explain metrics in place using facts already stated; never add numbers.
- Optional `screens` are real screenshots from `public/projects/<project>/` (first one shown large); give each true `width`/`height`, descriptive `alt` and a plain caption. Crop browser chrome out; uncropped sources live in the gitignored `/originals`. For each screenshot also generate `name-640` / `name-960` (`.avif` + `.jpg`) with `scripts/screenshot-variants.swift`; `ScreenGallery` serves them via `srcset`. Downscale very large captures to about 2400px first, because the original is what retina screens load.
- Optional `flow` renders a "how it works" figure; optional `evalExample` must be real system output, never written by hand.
- No eyebrow/kicker labels above headings: status goes in the project's `meta` line.
- Icons: only Iconoir, via `<Icon name="…">` (add new names to the map in `ui/Icon.tsx`); never unicode glyphs or another icon set.
- The mark is `{SP}` (`ui/Logo.tsx`, and `public/icon.svg` for the favicon): Iconoir code brackets around "SP" in orange, set in Inter Tight Bold and converted to outlines (so the favicon matches without loading a font). The 404 swaps the initials for a cross, `{✗}` (`<Logo failed />`). Size it by height (`h-7 w-auto`); it is wider than tall.
- Screenshots: AVIF only at 640/960 for thumbnails. Larger AVIFs from the macOS encoder are tiled "grid" files that some browsers render blank, so large renders use the JPEG/PNG chain.
- Server components by default. Add `"use client"` only for interactivity.

## Design rules (keep these)
- Palette: warm paper `bg` / `ink` / `muted` / `line` / `surface` + ONE accent (orange: `#BF3F0C` light, `#F06A2A` dark; keep ≥4.5:1 on bg and surface). Use only token classes (`bg-bg`, `text-ink`, `text-muted`, `border-line`, `bg-surface`, `text-accent`). Never hard-code hex values in components.
- Dark mode works by swapping CSS variables, so don't use `dark:` variants.
- Sans (Inter Tight) for prose; mono (JetBrains Mono) for labels, dates, tags, metrics.
- Square corners, 1px hairline borders, no shadows, no gradients, no blue/purple, no glow.
- No intro animations, typing effects, particle backgrounds, skill progress bars or logo walls. The one exception is the 404 mark: its cross draws itself once (0.7s) and again on hover.
- Motion is feedback only, lives in `globals.css`, and every effect has a `prefers-reduced-motion` path. Default states are the finished state.
  - Curves: `var(--ease-out)` for entering/responding, `var(--ease-in-out)` for on-screen movement; never `ease-in`. UI motion stays under 300ms; exits are faster than entrances.
  - Every pressable control gets the `press` class (`scale(0.97)` on `:active`; add `press-soft` for large targets like screenshots).
  - No animation on keyboard-initiated actions (Esc, arrow keys in the viewer). Hover-only motion goes inside `@media (hover: hover) and (pointer: fine)`.
  - Prefer transitions (`@starting-style` for entry) over keyframes for anything that can be interrupted.
  - In-page scrolling goes through `lib/smooth-scroll.ts` (cubic ease-in-out, 500–1100ms by distance, interruptible). Don't add CSS `scroll-behavior: smooth`; it fights the JS easing.
- Hide interface chrome in print with the `no-print` class.
- Must work at 390px wide (single column) with no horizontal scroll. Sections put their label in a left column on desktop and stack below `md`.
- The first screen (Hero) shows, in order: name, role + pitch, intro, location/status, buttons, then the four `metrics` (each links to its source). Keep all four.
- Screenshots open in the built-in viewer (`ScreenGallery.tsx`): blurred, scroll-locked background, previous/next, close, arrow keys, Esc, swipe. `sr-only` text inside a scrolling row needs a `relative` parent or it widens the page.

## Open TODOs
- Add AI Radar live URL (`projects[0].links.live` in `content/site.ts`).
- Add the eval set size to AI Radar's Hit@1 claim.
- Add one real AI Radar example (query, top result, judge verdict) as `projects[0].evalExample`.
- FinSolve card: add stack, live link and eval results when they exist (repo: shrey-14/need-to-know).
- Live at https://shreypp.vercel.app (`profile.siteUrl`). When `shreypatel.dev` is verified on Vercel, switch `profile.siteUrl` to it and update the README's Live link.
- Possible additions: a project case-study page per project (`app/projects/[slug]/page.tsx`), a writing/blog section, an Open Graph image via `app/opengraph-image.tsx`.
