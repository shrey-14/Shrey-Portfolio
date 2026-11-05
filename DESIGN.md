---
name: Shrey Patel — portfolio
description: An AI engineer's portfolio set like a lab notebook — warm paper, hairline rules, measured results in orange.
colors:
  signal-orange: "#bf3f0c"
  signal-orange-dark: "#f06a2a"
  notebook-paper: "#f4f2ed"
  page-white: "#fbfaf7"
  ink: "#141414"
  pencil-grey: "#6e6a63"
  rule-line: "#ddd8cf"
  night-paper: "#121211"
  night-page: "#1a1a18"
  night-ink: "#eceae4"
  night-pencil: "#9a958c"
  night-rule: "#2c2b28"
typography:
  display:
    fontFamily: "Inter Tight Variable, system-ui, sans-serif"
    fontSize: "84px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter Tight Variable, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter Tight Variable, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter Tight Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: "Inter Tight Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  metric:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.notebook-paper}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-outline:
    backgroundColor: "{colors.notebook-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.notebook-paper}"
  model-card:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  stack-tag:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.pencil-grey}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  nav-link:
    textColor: "{colors.pencil-grey}"
    typography: "{typography.label}"
    height: "64px"
  nav-link-active:
    textColor: "{colors.ink}"
---

# Design System: Shrey Patel — portfolio

## Overview

**Creative North Star: "The Lab Notebook"**

The site reads like an engineer's working notebook: warm paper, ruled hairlines, mono annotations in the margin, and results written down honestly, including the ones still to come. Every project is entered as a model card (problem → approach → eval → shipped), and every number is a measurement. Nothing is decorated to look technical; the technical cues (code braces in the `{SP}` mark, mono labels, eval strips) are there because they carry meaning.

Density is comfortable, not airy: a wide content column with labels in their own margin column on desktop, generous section breaks, tight groups inside each entry. Light and dark are both first-class, swapped entirely through CSS variables. Real screenshots are the only imagery; they sit on paper like exhibits taped into the notebook.

The voice is confident and plain. The interface recedes so the work and its evidence lead.

**Key Characteristics:**
- Warm paper ground with ink type and one orange accent.
- Square corners and 1px hairlines everywhere; no shadows, gradients or rounded cards.
- Inter Tight for prose and display, JetBrains Mono for labels, dates, tags and every number.
- Structured "model card" entries with an eval line up front.
- Quiet, fast feedback motion; the only authored moment is the 404's failing-test mark.

## Colors

One warm neutral family carries the page; a single orange signals results and emphasis.

### Primary
- **Signal Orange** (#bf3f0c light / #f06a2a dark): measurements and emphasis. Metric values, highlighted numbers inside copy (`**260+**`), the `{SP}` initials, the active nav underline, link underlines, focus rings and text selection. The light value is the darkest orange that still reads as orange (4.8:1 on paper).

### Neutral
- **Notebook Paper** (#f4f2ed): the page background (dark: **Night Paper**, #121211).
- **Page White** (#fbfaf7): raised surfaces such as model cards and stack tags (dark: **Night Page**, #1a1a18).
- **Ink** (#141414): body text, headings, borders of interactive controls, the primary button fill (dark: **Night Ink**, #eceae4).
- **Pencil Grey** (#6e6a63): secondary text, mono labels, captions, metadata (dark: **Night Pencil**, #9a958c). Still passes 4.8:1 on paper.
- **Rule Line** (#ddd8cf): every hairline divider and card border (dark: **Night Rule**, #2c2b28).

### Named Rules
**The Measured Orange Rule.** Orange marks what was measured or what deserves a second look: numbers, the mark, links, focus, the active location. It never fills a surface, a card or a button, and never sets running body text.

**The Token-Only Rule.** Components use only the token classes (`bg-bg`, `bg-surface`, `text-ink`, `text-muted`, `border-line`, `text-accent`). No hex in components; dark mode is a variable swap, never a `dark:` variant.

## Typography

**Display Font:** Inter Tight (with system-ui)
**Body Font:** Inter Tight (with system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace)

**Character:** A tight, contemporary grotesk for anything a person reads, paired with a mono that behaves like margin notes and instrument readouts.

### Hierarchy
- **Display** (700, 84px desktop / 42px mobile, line-height 1, -0.035em): the name in the hero; the 404 headline.
- **Headline** (500, 40px / 24px, 1.15): the role + pitch line under the name, with the role set in Pencil Grey.
- **Title** (600, 28px desktop / 24px mobile, the same on every project): project titles. Timeline entry titles use 18px.
- **Body** (400, 17–18px, 1.625; max ~62ch): hero intro, project summaries, About.
- **Body Small** (400, 15px): model-card rows, timeline points, captions at 13–14px.
- **Metric** (JetBrains Mono 500, 44px / 34px, -0.025em): the four hero numbers, in Signal Orange.
- **Label** (JetBrains Mono 400, 12–13px, lowercase): section headings, nav, dates, stack tags, `eval`/`problem` row keys.

### Named Rules
**The Mono Means Data Rule.** Mono is for measurements, labels, dates, code and navigation, never a costume for prose.

## Layout

A single centred container (max 1160px, 24px gutters, 16px on phones). The hero spans the full width: text column plus the portrait on the right from `md`, the four metrics in a hairline-divided row beneath. Every section below it sits on a top hairline and, from `md`, puts its mono label in a 150px margin column (sticky while you read) with content in the remaining column; below `md` the label stacks above. Section rhythm is 64px (mobile) to 96px (desktop) of bottom space; groups inside entries stay tight (6–16px).

Navigation: a top bar with the `{SP}` mark, the five section links and the theme toggle, sticky from `lg`; below `lg` a slim row of section links plus CV pins to the top instead. A floating back-to-top button appears bottom-right once the hero scrolls away. Must reflow cleanly at 320px with no horizontal scroll.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is tonal: Page White surfaces on Notebook Paper, separated by 1px Rule Line borders. The screenshot viewer is the only layer above the page, and it signals that with a blurred, tinted backdrop rather than a shadow.

**The Hairline Rule.** Separation is always a 1px rule or a tonal step, never a shadow, glow or gradient.

## Shapes

Every corner is square (0px): buttons, cards, tags, screenshots, the viewer controls. Borders are 1px; the only 2px line is the underline under the email address. The one recurring silhouette is the code brace: Iconoir's curly brackets in the `{SP}` mark (and `{✗}` on the 404). A 3px Signal Orange rule sits under the portrait as its only ornament.

## Components

### Buttons
- **Shape:** square (0px), 44px tall, 1px Ink border, JetBrains Mono 13px label with a leading or trailing Iconoir icon.
- **Primary:** Ink fill, Paper text ("View the work"). Hover inverts to an outline.
- **Outline:** transparent with Ink border and text (CV, GitHub, LinkedIn). Hover fills Ink.
- **Press:** every pressable control scales to 0.97 on `:active` (0.99 for large screenshot targets), 160ms on the strong ease-out curve.
- **Focus:** 2px Signal Orange outline, 3px offset.

### Chips (stack tags)
- **Style:** Page White ground, 1px Rule Line border, Pencil Grey mono 11px, square.

### Cards / Containers (model cards)
- **Corner Style:** square.
- **Background:** Page White on Notebook Paper.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1px Rule Line; internal rows divided by hairlines.
- **Internal Padding:** 20–24px.
- **Structure:** title + meta line, plain-language summary, `eval` strip, screenshots, optional "how it works" flow figure, then problem / approach / eval / shipped rows with a 110px mono key column.

### Navigation
- **Style:** JetBrains Mono 13px lowercase, Pencil Grey; hover and current section turn Ink, and the current section gets a 2px Signal Orange underline.

### Screenshot gallery and viewer (signature)
One large screenshot plus a row of three (a swipe row on phones), each opening a full-screen viewer: blurred, scroll-locked backdrop, counter, "Full size" link, previous/next and close as 44px square outline buttons, caption below.

### The `{SP}` mark (signature)
Iconoir code braces in Ink around "SP" in Inter Tight Bold, outlined, in Signal Orange. Used at 28px in the header, 20px in the footer and as the favicon on an ink tile.

## Do's and Don'ts

### Do:
- **Do** keep every corner square and every divider a 1px Rule Line.
- **Do** set numbers and metrics in JetBrains Mono, highlighted in Signal Orange.
- **Do** use Iconoir (via the shared `Icon` component) for every icon.
- **Do** give each project a plain-language summary and an eval line before the detail.
- **Do** keep UI motion under 300ms on the strong ease-out curve, with a reduced-motion path.

### Don't:
- **Don't** add shadows, gradients, glows, rounded corners or blue/purple accents.
- **Don't** use an eyebrow/kicker label above a heading or numbered section labels.
- **Don't** use intro animations, typing effects, particle backgrounds, progress-bar skills or logo walls.
- **Don't** fill surfaces or buttons with Signal Orange.
- **Don't** hard-code hex values in components or use `dark:` variants.
