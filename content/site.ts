/**
 * ALL site copy lives here. Edit this file to change text, add a project,
 * or update experience. Components only render what's in this file.
 *
 * Inside text fields, wrap a number in **double asterisks** to render it
 * in the orange mono highlight, e.g. "Hit@1 = **100%**".
 */
import type { Metric, Project, SkillGroup, Social, TimelineEntry } from "./types";

export const profile = {
  name: "Shrey Patel",
  role: "AI Engineer",
  location: "London, UK",
  pitch: "I build LLM and RAG systems that get evaluated, not just demoed.",
  intro:
    "I'm studying for an MSc in AI at Brunel University London. Before that I spent eight months as a Data Science Intern at Petpooja in India, working on the evaluation data behind their AI agents and the prompts behind their vision-language OCR.",
  status: "Currently building a RAG system on internal company documents",
  email: "shreypatel141102@gmail.com",
  cv: "/Shrey_Patel_CV.pdf",
  photo: { webp: "/shrey.webp", png: "/shrey.png" },
  metaDescription:
    "Shrey Patel, AI Engineer in London. I build LLM and RAG systems with evaluation built in. MSc AI, Brunel University London.",
  lastUpdated: "Nov 2026",
  // TODO: your custom domain, e.g. "https://shreypatel.dev". Used for link previews, canonical URL and sitemap.
  siteUrl: "",
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/shrey-14", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shreypatel-ai", icon: "linkedin" },
];

/** The four headline numbers in the hero. Each links to the work it comes from. */
export const metrics: Metric[] = [
  {
    value: "260+",
    label: "records scraped, summarised and stored daily, no manual work",
    source: { label: "AI Radar", href: "#ai-radar" },
  },
  {
    value: "800+",
    label: "BigQuery pipelines optimised, 30% lower latency",
    source: { label: "Petpooja", href: "#background" },
  },
  {
    value: "+15%",
    label: "OCR accuracy from 100+ VLM prompts",
    source: { label: "Petpooja", href: "#background" },
  },
  {
    value: "1st",
    label: "place at a company AI hackathon, building an AI kitchen optimisation system",
    source: { label: "SmartResto", href: "#smart-resto" },
  },
];

export const about = {
  paragraphs: [
    "I like the part of AI work most demos skip: retrieval that's measurably right, pipelines that run without me, and evaluation that runs on every change.",
  ],
  interests:
    "The thread through my current work is AI where mistakes are costly: a fairness-audited model predicting NHS GP no-shows for my dissertation, a RAG system over the UK FCA Handbook for regulatory compliance, and FinSolve's hard gates against data leaks.",
  aside: 'On the side, I\'m competing in Kaggle\'s "Name That LLM": identifying which model wrote a text.',
};

export const projects: Project[] = [
  {
    slug: "ai-radar",
    title: "AI Radar",
    meta: "Deployed · May – Jun 2026 · solo",
    summary:
      "Every day it collects and summarises the latest AI papers, news, tools and benchmarks, and you can ask it questions about them.",
    evalStrip: "Hit@1 **100%** on section queries · LLM judge on every run",
    problem: "Keeping up with AI papers, news, tools and benchmarks by hand takes hours a day.",
    approach:
      "A Prefect pipeline scrapes, summarises and stores **260+** records a day with no manual work. Questions are answered with hybrid RAG: pgvector semantic search and keyword matching, merged with Reciprocal Rank Fusion. Some questions were routed to the wrong section, so a confidence-gated fallback now catches low-confidence routes and corrects them.",
    // TODO: add eval set size, e.g. "on 40 targeted section queries"
    eval: "Hit@1 = **100%** on targeted section queries: the right section came back as the top result every time. An LLM judge grades summary quality on every pipeline run, so quality is checked daily, not once.",
    shipped: "Full stack across Vercel, Railway and Supabase.",
    screens: [
      {
        src: "/projects/ai-radar/ask-the-desk.png",
        width: 1757,
        height: 862,
        alt: "Ask the Desk page answering 'What has Anthropic announced recently?' with a cited answer and six news sources, each with a match score.",
        caption: "Ask the Desk: a real question, answered only from indexed news, with every source and its match score.",
      },
      {
        src: "/projects/ai-radar/home-page.png",
        width: 1310,
        height: 867,
        alt: "AI Radar's daily digest page, headed 'What actually matters in AI today', with the top story scored 9 out of 10 and a 'what you need to know' summary.",
        caption: "The daily digest: each story is scored out of 10 and summarised into what you need to know.",
      },
      {
        src: "/projects/ai-radar/industry-news.png",
        width: 1217,
        height: 867,
        alt: "Industry News page with source, type and sort filters, and news cards showing key takeaways, companies and tags.",
        caption: "Industry news, filterable by source and type, with key takeaways pulled out.",
      },
      {
        src: "/projects/ai-radar/benchmarks.png",
        width: 1222,
        height: 870,
        alt: "Benchmarks page ranking models from LMSYS Arena, Open LLM and Artificial Analysis boards, with Elo scores, prices and strengths.",
        caption: "Benchmarks from several leaderboards in one place, with plain-language strengths.",
      },
    ],
    flow: [
      {
        label: "every day",
        steps: [
          { name: "Scrape", note: "papers, news, tools, benchmarks" },
          { name: "Summarise", note: "graded by an LLM judge each run" },
          { name: "Store", note: "**260+** records a day, pgvector" },
        ],
      },
      {
        label: "every question",
        steps: [
          { name: "Retrieve", note: "semantic + keyword search" },
          { name: "Fuse", note: "Reciprocal Rank Fusion" },
          { name: "Gate", note: "unsure? a fallback fixes the route" },
          { name: "Answer" },
        ],
      },
    ],
    // TODO: paste one real query, the section it returned and the judge's verdict
    // evalExample: { query: "", result: "", verdict: "" },
    stack: ["Next.js", "FastAPI", "pgvector", "Groq", "Jina AI", "Prefect"],
    links: {
      // TODO: add live URL
      code: "https://github.com/shrey-14/AI-Radar",
    },
  },
  {
    slug: "smart-resto",
    title: "SmartResto",
    meta: "1st place, company hackathon · Mar 2025 · team",
    summary:
      "Cameras count what's in the kitchen, a model predicts tomorrow's sales, and an LLM suggests specials that use up stock before it expires.",
    evalStrip: "Forecast MAPE **10–14%** · detection mAP@50 **0.53**",
    problem: "Restaurant kitchens lose money to spoilage, over-ordering and guesswork on demand.",
    approach:
      "YOLOv8 inventory tracking from camera feeds, XGBoost + Prophet sales forecasting, and LLaMA via Groq generating specials and recipes from near-expiry stock, with few-shot prompts to keep format and nutrition consistent.",
    eval: "Sales forecasts were off by **10–14%** on average (MAPE). Inventory detection scored mAP@50 **0.53**, a standard object-detection score from 0 to 1.",
    screens: [
      {
        src: "/projects/kitchen-optimization-system/food-spoilage-detection.jpeg",
        width: 1279,
        height: 652,
        alt: "SmartResto Food Spoilage Detection screen: an uploaded photo of an apple, detected as 'apple', freshness 'Rotten', with recommended actions.",
        caption: "Spoilage detection: upload a photo, get the item, whether it's spoiled and what to do about it.",
      },
      {
        src: "/projects/kitchen-optimization-system/spoilage-forecast.jpeg",
        width: 1279,
        height: 652,
        alt: "Spoilage Forecast table listing ingredients such as butter, cucumber, milk and peas with spoilage risk, overuse risk and recommended actions.",
        caption: "Spoilage forecast: which ingredients are likely to go bad soon, with actions for each.",
      },
      {
        src: "/projects/kitchen-optimization-system/waste-categorization.jpeg",
        width: 1279,
        height: 652,
        alt: "Waste Categorization screen: a photo of a food-waste bin classified into categories such as Inedible (banana peel) and Spoiled (mold detected).",
        caption: "Waste categorisation: a photo of the bin, sorted into waste types with confidence.",
      },
      {
        src: "/projects/kitchen-optimization-system/creative-waste-agent.jpeg",
        width: 1279,
        height: 652,
        alt: "Creative Waste Agent screen suggesting recipes such as Amritsari Vegetable Korma and Gajar Ka Halwa from ingredients close to expiry.",
        caption: "Creative waste agent: recipes built from ingredients close to expiry.",
      },
    ],
    stack: ["YOLOv8", "XGBoost", "Prophet", "LLaMA", "FastAPI", "React"],
    links: { code: "https://github.com/shrey-14/smart-resto" },
  },
  {
    slug: "finsolve",
    title: "FinSolve",
    meta: "In progress",
    summary:
      "A chatbot that answers questions from company documents, but only shows each person what their role is allowed to see.",
    evalStrip: "3-tier eval with hard leak gates · results to come",
    problem: "An internal chatbot that reads company documents must never show someone data their role isn't allowed to see.",
    approach:
      "Retrieval-augmented generation (RAG) with role-based access control, so each user's role decides which documents the chatbot can draw on.",
    eval: "A three-tier eval: retrieval quality, answer quality, and hard gates where any leak is an automatic fail. Results to come.",
    stack: [],
    links: { code: "https://github.com/shrey-14/need-to-know" },
  },
];

export const moreWorkHref = "https://github.com/shrey-14?tab=repositories";

export const experience: TimelineEntry[] = [
  {
    when: "Sep 2024 – May 2025",
    title: "Data Science Intern",
    where: "Petpooja · Ahmedabad, India",
    evalStrip: "**800+** pipelines, **30%** lower latency · **100+** prompts, **+15%** OCR accuracy",
    points: [
      "Optimised **800+** BigQuery SQL pipelines behind AI agent evaluation, cutting query latency by **30%**.",
      "Designed and evaluated **100+** structured prompts for vision-language models (models that read images), lifting text-extraction (OCR) accuracy by **15%**.",
      "Built NLP pipelines for text extraction and validation using regex and semantic matching.",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    when: "Jan 2026 – Apr 2027",
    title: "MSc Artificial Intelligence",
    where: "Brunel University London",
    points: ["Dissertation: predicting NHS GP appointment no-shows with explainable, fairness-audited ML."],
  },
  {
    when: "Nov 2021 – May 2025",
    title: "BEng Information Technology",
    where: "LJ University, India · First Class with Distinction, 9.76/10",
  },
];

export const skills: SkillGroup[] = [
  { group: "languages", items: "Python, SQL · also C, Java, JavaScript" },
  { group: "ml / llm", items: "PyTorch, TensorFlow, RAG, LLM-as-judge evaluation, prompt engineering, OpenCV" },
  {
    group: "build & ship",
    items: "FastAPI, Next.js, React, PostgreSQL/pgvector, Prefect, Git, Vercel, Railway, Supabase",
  },
  { group: "analytics", items: "BigQuery, Tableau, Power BI, Streamlit" },
];

export const contact = {
  heading: "Working on retrieval, evals or AI where mistakes are costly? I'd like to hear about it.",
};

/** Section headings (each section's h2). Keys match section ids. */
export const sections = {
  work: "selected work",
  about: "about",
  background: "background",
  toolkit: "toolkit",
  contact: "contact",
};

/** Interface text: buttons, labels and accessible names used by components. */
export const ui = {
  skipLink: "Skip to work",
  viewWork: "View the work",
  cv: "CV",
  moreOnGithub: "More on GitHub",
  backToTop: "Back to top",
  lastUpdated: "Last updated",
  evalLabel: "eval",
  cardRows: { problem: "problem", approach: "approach", eval: "eval", shipped: "shipped" },
  cardLinks: { live: "Live", code: "Code", writeup: "Write-up" },
  howItWorks: "how it works",
  exampleRows: { query: "query", result: "top result", verdict: "judge" },
  theme: { unknown: "Switch theme", toLight: "Switch to light theme", toDark: "Switch to dark theme" },
  navLabel: "Sections",
  gallery: {
    openLarger: "Open larger view",
    swipeHint: (n: number) => `${n} more screens, swipe sideways`,
    viewerLabel: (i: number, n: number) => `Screenshot ${i} of ${n}`,
    fullSize: "Full size",
    close: "Close viewer",
    prev: "Previous screenshot",
    next: "Next screenshot",
  },
  copyEmail: { idle: "Copy email", done: "Copied" },
  notFound: {
    code: "404 · page not found",
    title: "This test failed.",
    body: "There's no page at this address. Everything is on the home page.",
    home: "Back to the home page",
  },
  // Logged once in the browser console, for whoever opens devtools.
  consoleNote: ["{SP} Hello, fellow engineer.", "Code for this site and the projects: https://github.com/shrey-14"],
};

/** Header nav. `id` must match the section's id; the mobile row hides `mobile: false` items to stay on one line. */
export const nav = [
  { id: "work", label: "work" },
  { id: "about", label: "about" },
  { id: "background", label: "background" },
  { id: "toolkit", label: "toolkit", mobile: false },
  { id: "contact", label: "contact" },
];
