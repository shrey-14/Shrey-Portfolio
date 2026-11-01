export type Link = { label: string; href: string };

/** A profile link with its Iconoir icon (see components/ui/Icon.tsx). */
export type Social = Link & { icon: "github" | "linkedin" };

export type Metric = { value: string; label: string; source: Link };

/** One row of a project's "how it works" figure: a named flow of steps. */
export type FlowLane = { label: string; steps: { name: string; note?: string }[] };

/** A real query → result → judge example. Only ever filled from actual system output. */
export type EvalExample = { query: string; result: string; verdict: string };

/** A real screenshot of the working project, served from /public/projects. */
export type Screen = { src: string; width: number; height: number; alt: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  meta: string; // status · dates · solo/team, e.g. "Deployed · May – Jun 2026 · solo"
  summary: string; // one plain-language line: what it does, no jargon
  evalStrip: string; // one-line proof shown in the header; only numbers already stated in `eval`
  problem: string;
  approach: string;
  eval: string;
  shipped?: string;
  screens?: Screen[]; // first one is shown large
  flow?: FlowLane[];
  evalExample?: EvalExample;
  stack: string[];
  links: { live?: string; code?: string; writeup?: string };
};

export type TimelineEntry = {
  when: string;
  title: string;
  where: string;
  evalStrip?: string; // one line of proof, numbers only from `points`
  points?: string[];
};

export type SkillGroup = { group: string; items: string };
