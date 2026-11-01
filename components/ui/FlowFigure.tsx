import { ui } from "@/content/site";
import type { EvalExample, FlowLane } from "@/content/types";
import { Highlight } from "./Highlight";
import { Icon } from "./Icon";

/** "How it works" figure for a project: one row of steps per lane, plus an optional real eval example. */
export function FlowFigure({ lanes, example }: { lanes: FlowLane[]; example?: EvalExample }) {
  return (
    <figure className="border-b border-line px-6 py-6">
      <figcaption className="mb-5 font-mono text-xs text-muted">{ui.howItWorks}</figcaption>
      <div className="grid gap-6">
        {lanes.map((lane) => (
          <div key={lane.label} className="grid gap-2.5 md:grid-cols-[110px_1fr] md:gap-0">
            <span className="font-mono text-xs text-muted md:pt-3">{lane.label}</span>
            <ol className="flex flex-col border border-muted/40 bg-bg md:flex-row md:border-0 md:bg-transparent">
              {lane.steps.map((step, i) => (
                <li
                  key={step.name}
                  className="flex border-t border-line first:border-t-0 md:min-w-0 md:flex-1 md:border-t-0"
                >
                  {/* Numbered steps joined by arrows, so the order reads at a glance. */}
                  {i > 0 && (
                    <span aria-hidden className="hidden w-[30px] shrink-0 items-center justify-center text-[14px] text-ink md:flex">
                      <Icon name="arrow-right" />
                    </span>
                  )}
                  <div className="flex min-w-0 flex-1 gap-3 px-3 py-2.5 md:flex-col md:gap-1 md:border md:border-muted/40 md:bg-bg">
                    <span aria-hidden className="font-mono text-xs leading-[1.9] font-medium text-accent md:leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold">{step.name}</div>
                      {step.note && (
                        <p className="mt-0.5 text-[13px] leading-snug text-muted">
                          <Highlight text={step.note} />
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {example && (
        <dl className="mt-6 grid gap-x-4 gap-y-1.5 border-t border-line pt-5 text-[15px] md:grid-cols-[110px_1fr]">
          {(
            [
              [ui.exampleRows.query, example.query],
              [ui.exampleRows.result, example.result],
              [ui.exampleRows.verdict, example.verdict],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="pt-0.5 font-mono text-xs text-muted">{k}</dt>
              <dd className="mb-2 md:mb-0">{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </figure>
  );
}
