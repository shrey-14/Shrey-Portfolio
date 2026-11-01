"use client";

import { useEffect, useState } from "react";
import { ui } from "@/content/site";

/** Header nav that highlights the section currently in view. */
export function ScrollSpyNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    // The last section is too short to reach the observer band, so mark it when the page bottoms out.
    const onScroll = () => {
      if (scrollY < 200) setActive(null);
      else if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) setActive(items[items.length - 1].id);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <nav aria-label={ui.navLabel} className="ml-auto hidden lg:flex lg:gap-6">
      {items.map(({ id, label }) => {
        const on = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={on ? "location" : undefined}
            className={`relative flex h-16 items-center font-mono text-[13px] transition-colors hover:text-ink ${
              on ? "text-ink" : "text-muted"
            }`}
          >
            {label}
            <span aria-hidden className={`absolute inset-x-0 bottom-0 h-0.5 ${on ? "bg-accent" : "bg-transparent"}`} />
          </a>
        );
      })}
    </nav>
  );
}
