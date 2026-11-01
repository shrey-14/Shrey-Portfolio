import { ui } from "@/content/site";
import type { TimelineEntry } from "@/content/types";
import { Highlight } from "./Highlight";

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="grid gap-1 border-t border-line py-5 first:border-t-0 first:pt-0 md:grid-cols-[150px_1fr] md:gap-6">
      <div className="pt-1 font-mono text-xs text-muted">{entry.when}</div>
      <div>
        <h3 className="text-lg font-semibold">{entry.title}</h3>
        <p className="text-[15px] text-muted">{entry.where}</p>
        {entry.evalStrip && (
          <p className="mt-2.5 flex items-baseline gap-3 font-mono text-[13px]">
            <span className="text-muted">{ui.evalLabel}</span>
            <span>
              <Highlight text={entry.evalStrip} />
            </span>
          </p>
        )}
        {entry.points && (
          <ul className="mt-2.5 space-y-1.5">
            {entry.points.map((p) => (
              <li key={p} className="relative pl-[18px] text-[15px]">
                <span aria-hidden className="absolute top-[11px] left-0 h-px w-2.5 bg-accent" />
                <Highlight text={p} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
