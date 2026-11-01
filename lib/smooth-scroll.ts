/**
 * Smooth in-page scrolling with a consistent feel on every browser and phone.
 * The browser's own `scroll-behavior: smooth` can't be tuned and feels abrupt on long jumps,
 * so this eases in and out over a duration that grows with distance, and any touch, wheel or
 * key press hands control straight back to the reader.
 */
let frame = 0;
let cancelInterrupt: (() => void) | null = null;

// Cubic ease-in-out: soft start and landing, with a gentler peak speed than a quartic curve.
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

function stop() {
  cancelAnimationFrame(frame);
  cancelInterrupt?.();
  cancelInterrupt = null;
}

export function scrollToY(targetY: number, onDone?: () => void) {
  stop();
  const startY = scrollY;
  const maxY = document.documentElement.scrollHeight - innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const distance = endY - startY;

  if (Math.abs(distance) < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollTo(0, endY);
    onDone?.();
    return;
  }

  // ~500ms for short hops, up to 1.1s across the whole page.
  const duration = Math.min(1100, Math.max(500, 350 + Math.abs(distance) * 0.14));
  const start = performance.now();

  const interrupt = () => stop();
  const events = ["wheel", "touchstart", "keydown"] as const;
  events.forEach((e) => addEventListener(e, interrupt, { passive: true }));
  cancelInterrupt = () => events.forEach((e) => removeEventListener(e, interrupt));

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    scrollTo(0, startY + distance * easeInOutCubic(t));
    if (t < 1) frame = requestAnimationFrame(step);
    else {
      stop();
      onDone?.();
    }
  };
  frame = requestAnimationFrame(step);
}

/** Scrolls so the element sits just below any pinned header (respects its CSS scroll-margin-top). */
export function scrollToElement(el: HTMLElement, onDone?: () => void) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  scrollToY(el.id === "top" ? 0 : el.getBoundingClientRect().top + scrollY - margin, onDone);
}
