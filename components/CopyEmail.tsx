"use client";

import { useEffect, useState } from "react";
import { ui } from "@/content/site";
import { Icon } from "./ui/Icon";

/** Copies the address and confirms with the site's check mark. Hidden where the clipboard API is missing. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"unsupported" | "idle" | "done">("unsupported");

  useEffect(() => setState(navigator.clipboard ? "idle" : "unsupported"), []);
  useEffect(() => {
    if (state !== "done") return;
    const t = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(t);
  }, [state]);

  if (state === "unsupported") return null;
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(email).then(() => setState("done"), () => {})}
      className="no-print inline-flex min-h-11 cursor-pointer items-center gap-1.5 font-mono text-[13px] text-muted press hover:text-ink"
    >
      <span key={state} className="icon-swap inline-flex">
        <Icon name={state === "done" ? "check" : "copy"} className={state === "done" ? "text-accent" : ""} />
      </span>
      <span aria-live="polite">{state === "done" ? ui.copyEmail.done : ui.copyEmail.idle}</span>
    </button>
  );
}
