import { ui } from "@/content/site";
import type { Project } from "@/content/types";
import { Icon } from "./Icon";
import { FlowFigure } from "./FlowFigure";
import { Highlight } from "./Highlight";
import { ScreenGallery } from "./ScreenGallery";

/** A project rendered as an ML "model card": problem → approach → eval (or finding) → shipped. */
export function ProjectCard({ project }: { project: Project }) {
  const rows: [string, string | undefined][] = [
    [ui.cardRows.problem, project.problem],
    [ui.cardRows.approach, project.approach],
    [project.evalLabel ?? ui.cardRows.eval, project.eval],
    [ui.cardRows.shipped, project.shipped],
  ];
  const links = (
    [
      [ui.cardLinks.live, project.links.live],
      [ui.cardLinks.code, project.links.code],
      [ui.cardLinks.writeup, project.links.writeup],
    ] as const
  ).filter(([, href]) => href);

  return (
    <article id={project.slug} className="mb-5 scroll-mt-14 border border-line bg-surface lg:scroll-mt-20">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5 border-b border-line px-6 py-5">
        <h3 className="text-2xl leading-tight font-semibold tracking-tight md:text-[28px]">{project.title}</h3>
        <span className="font-mono text-xs text-muted">{project.meta}</span>
        <p className="mt-2 w-full text-[17px] leading-snug">
          <span className="block max-w-[60ch]">{project.summary}</span>
        </p>
        <p className="mt-2 flex w-full items-baseline gap-3 font-mono text-[13px]">
          <span className="text-muted">{project.evalLabel ?? ui.evalLabel}</span>
          <span>
            <Highlight text={project.evalStrip} />
          </span>
        </p>
      </header>

      {project.screens && project.screens.length > 0 && <ScreenGallery screens={project.screens} />}

      {project.flow && <FlowFigure lanes={project.flow} example={project.evalExample} />}

      <dl className="grid md:grid-cols-[110px_1fr]">
        {rows
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="px-6 pt-3 font-mono text-xs text-muted md:border-b md:border-line md:pb-3 md:pr-0 md:pt-[15px]">
                {k}
              </dt>
              <dd className="border-b border-line px-6 pb-3 pt-1 text-[15px] md:pt-3">
                <span className="block max-w-[70ch]">
                  <Highlight text={v!} />
                </span>
              </dd>
            </div>
          ))}
      </dl>

      {(project.stack.length > 0 || links.length > 0) && (
        <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 border-b border-accent font-mono text-[13px] after:absolute after:-inset-x-1 after:-inset-y-3 hover:text-accent"
              >
                {label === ui.cardLinks.code && <Icon name="github" />}
                {label}
                <span className="sr-only"> ({project.title})</span>
                <Icon name="arrow-up-right" />
              </a>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
