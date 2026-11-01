"use client";

import { useEffect, useState } from "react";
import { ui } from "@/content/site";
import { Icon } from "./ui/Icon";

function currentlyDark() {
  const set = document.documentElement.getAttribute("data-theme");
  return set ? set === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  // Unknown until mounted: the server can't see the saved or system theme.
  const [dark, setDark] = useState<boolean | null>(null);
  const [swaps, setSwaps] = useState(0); // re-keys the icon so it animates in on each switch
  useEffect(() => {
    setDark(currentlyDark());
    // Stay in sync if the theme changes some other way: the OS setting, devtools, another script.
    const sync = () => setDark(currentlyDark());
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const os = matchMedia("(prefers-color-scheme: dark)");
    os.addEventListener("change", sync);
    return () => {
      mo.disconnect();
      os.removeEventListener("change", sync);
    };
  }, []);

  function toggle() {
    const next = currentlyDark() ? "light" : "dark";
    const root = document.documentElement;
    // Switch instantly: colour transitions would otherwise show half-faded buttons for a moment.
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", next);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
    setDark(next === "dark");
    setSwaps((n) => n + 1);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark === null ? ui.theme.unknown : dark ? ui.theme.toLight : ui.theme.toDark}
      title={dark === null ? ui.theme.unknown : dark ? ui.theme.toLight : ui.theme.toDark}
      className="no-print inline-flex size-11 cursor-pointer items-center justify-center text-[19px] text-muted press hover:text-ink"
    >
      {/* Which icon shows is decided in CSS from the theme attribute, so it is right before hydration. */}
      <span key={swaps} className={swaps ? "icon-swap inline-flex" : "inline-flex"}>
        <Icon name="moon" className="theme-icon-moon" />
        <Icon name="sun" className="theme-icon-sun" />
      </span>
    </button>
  );
}
