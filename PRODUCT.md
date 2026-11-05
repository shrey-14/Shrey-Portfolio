# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: technical reviewers.** Engineers and ML leads who judge depth: they read the approach, check the eval numbers, and click through to GitHub to see whether the code backs the claims.
- **Also primary: non-technical readers** from unrelated backgrounds. They should be able to understand what each project does and why it matters without knowing what RAG or Hit@1 means.
- **Secondary: recruiters and hiring managers.** They benefit from the same clarity but are not the voice the site is written to.

## Product Purpose

A personal portfolio for Shrey Patel, an AI Engineer (MSc AI, Brunel University London). It exists to show how Shrey works, through real projects with real measurements, so readers come away understanding his work and wanting to talk to him. Success is a reader who actually reads it, not one who skims and bounces.

## Positioning

Two claims together, both backed by the work:

1. **Evaluated, not demoed.** LLM and RAG systems with evaluation built in: Hit@1 retrieval scoring and LLM-as-judge on every pipeline run (AI Radar), evaluation data behind AI agents at Petpooja, a three-tier eval with hard leak gates (FinSolve).
2. **Applied to regulated domains.** Health and finance: NHS GP no-show prediction with explainable, fairness-audited ML (MSc dissertation), a RAG system over the UK FCA Handbook, role-based access control in FinSolve.

## Operating Context

- Read on desktop and phone (must work at 390px wide); often reached from a CV, LinkedIn or GitHub link.
- Technical readers move between the site, GitHub repos and the CV PDF.
- Static Next.js site, all copy in `content/site.ts` (see CLAUDE.md for stack and conventions).

## Capabilities and Constraints

- Sections: metrics, about, selected work (model-card shape: problem → approach → eval → shipped), experience, education, now, skills, contact. Light/dark theme.
- **Never invent metrics.** Only numbers already in `content/site.ts` or the CV may appear. Known gaps stay as open TODOs, not filler:
  - AI Radar eval set size for the Hit@1 claim (undecided).
  - AI Radar live URL (undecided).
- **Do not state visa or right-to-work status** anywhere on the site.
- Planned but undecided: per-project case-study pages, a writing section, an Open Graph image.

## Brand Commitments

- Name: Shrey Patel. Role title: AI Engineer. Location: London, UK.
- **Voice: confident, not job-seeking.** The site should never read as pleading for work. It shows the work and invites conversation. Existing copy such as "Open to AI/ML internships & placements" and "Hiring for AI, ML or data roles? Let's talk." should be reviewed against this when copy is next touched (note: CLAUDE.md still describes recruiters as the audience).
- Writing should be interesting enough to read end to end, while staying plain and honest.

## Evidence on Hand

- Canonical assets (fixed): `public/shrey.webp` / `public/shrey.png` (photo), `public/Shrey_Patel_CV.pdf`.
- Projects with real metrics: AI Radar (260+ records/day, Hit@1 = 100% on targeted section queries, set size unknown), SmartResto (1st place company hackathon; forecast MAPE 10–14%, mAP@50 0.53).
- UK Airline Punctuality: Tableau dashboard on UK CAA data (MSc coursework, not affiliated with easyJet), live on Tableau Public. easyJet 65.8% on time; Gatwick 58% vs Liverpool 80%; Gatwick over 22 minutes average delay.
- Experience: Petpooja Data Science Intern (800+ BigQuery pipelines, 30% lower latency; 100+ VLM prompts, +15% OCR accuracy).
- Education: MSc AI, Brunel (Jan 2026 – Apr 2027); BEng IT, LJ University, 9.76/10.
- Code: github.com/shrey-14. No testimonials, press or employer endorsements exist; do not fabricate any.

## Product Principles

1. **Proof over adjectives.** Every claim points to a number, an eval set, or code.
2. **Readable by two audiences at once.** Depth for engineers, plain-language meaning for everyone else, in the same text.
3. **Worth reading.** The site earns attention through substance and craft, not by asking for it.
4. **Show, don't ask.** Present the work with confidence; never beg for a role.
5. **Honest gaps.** Missing facts stay missing until real; nothing is padded.
