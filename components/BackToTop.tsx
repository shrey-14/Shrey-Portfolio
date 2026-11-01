"use client";

import { useEffect, useState } from "react";
import { ui } from "@/content/site";
import { scrollToY } from "@/lib/smooth-scroll";
import { Icon } from "./ui/Icon";

/** Floating button, bottom right, that appears once the hero has scrolled away. */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(scrollY > innerHeight * 0.9);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        scrollToY(0, () => document.getElementById("top")?.focus({ preventScroll: true }));
      }}
      aria-label={ui.backToTop}
      title={ui.backToTop}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={`no-print fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex size-12 cursor-pointer items-center justify-center border border-ink bg-bg text-[19px] transition-[opacity,translate,scale,background-color,color] ease-(--ease-out) hover:bg-ink hover:text-bg active:scale-[0.97] motion-reduce:translate-none motion-reduce:active:scale-100 md:right-6 md:bottom-6 ${
        // In 220ms, out 150ms: exits are always quicker than entrances.
        shown ? "opacity-100 duration-[220ms]" : "pointer-events-none translate-y-3 opacity-0 duration-150"
      }`}
    >
      <Icon name="arrow-up" />
    </button>
  );
}
