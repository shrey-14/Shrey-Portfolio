"use client";

import { useEffect } from "react";
import { ui } from "@/content/site";

/** A two-line hello in the browser console for engineers who open devtools. Renders nothing. */
export function ConsoleNote() {
  useEffect(() => {
    const [hello, code] = ui.consoleNote;
    console.info(`%c${hello}%c\n${code}`, "font: 600 14px monospace", "font: 12px monospace");
  }, []);
  return null;
}
