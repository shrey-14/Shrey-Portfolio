"use client";

import { useEffect, useRef, useState } from "react";
import { ui } from "@/content/site";
import type { Screen } from "@/content/types";
import { Icon } from "./Icon";

/** Sizes generated next to each screenshot (`name-640.avif`, `name-640.jpg`, …); the original file is the largest fallback. */
const VARIANT_WIDTHS = [640, 960];

/**
 * `avif` is for small renders only (thumbnails). AVIF is generated at 640/960 because larger AVIFs from the
 * macOS encoder come out as tiled "grid" images, which some browsers render blank. Large renders use JPEG/PNG.
 */
function Picture({ screen, sizes, className, avif = false }: { screen: Screen; sizes: string; className: string; avif?: boolean }) {
  const base = screen.src.replace(/\.[^.]+$/, "");
  const widths = VARIANT_WIDTHS.filter((w) => w < screen.width);
  const fallback = [...widths.map((w) => `${base}-${w}.jpg ${w}w`), `${screen.src} ${screen.width}w`].join(", ");
  return (
    <picture className="contents">
      {avif && <source type="image/avif" srcSet={widths.map((w) => `${base}-${w}.avif ${w}w`).join(", ")} sizes={sizes} />}
      <img
        src={screen.src}
        srcSet={fallback}
        sizes={sizes}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={className}
      />
    </picture>
  );
}

const iconBtn =
  "press relative inline-flex size-11 shrink-0 cursor-pointer items-center justify-center border border-ink bg-bg text-[15px] hover:bg-ink hover:text-bg disabled:cursor-default disabled:border-line disabled:text-muted disabled:hover:bg-bg";

function Shot({ screen, lead = false, onOpen }: { screen: Screen; lead?: boolean; onOpen: () => void }) {
  return (
    <figure className="min-w-0">
      <button
        type="button"
        onClick={onOpen}
        className="press press-soft group relative block w-full cursor-zoom-in border border-line bg-bg hover:border-ink"
      >
        <Picture
          screen={screen}
          avif={!lead}
          sizes={lead ? "(min-width: 1160px) 860px, (min-width: 768px) 70vw, 92vw" : "(min-width: 768px) 280px, 72vw"}
          className={`block w-full ${lead ? "h-auto" : "aspect-[3/2] object-cover object-left-top"}`}
        />
        <span className="sr-only">{ui.gallery.openLarger}</span>
        {/* Says "this opens": always on touch screens, on hover or keyboard focus elsewhere. */}
        <span
          aria-hidden
          className="expand-chip absolute top-2 right-2 inline-flex size-8 items-center justify-center border border-ink bg-bg text-[15px]"
        >
          <Icon name="expand" />
        </span>
      </button>
      <figcaption className={`mt-2 leading-snug text-muted ${lead ? "text-[14px]" : "text-[13px]"}`}>
        {screen.caption}
      </figcaption>
    </figure>
  );
}

/** Full-screen viewer: blurred, scroll-locked background; previous/next, close, arrow keys, Esc and swipe. */
function Viewer({
  screens,
  index,
  onIndex,
  onClose,
}: {
  screens: Screen[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);
  const swipeX = useRef<number | null>(null);
  const [closing, setClosing] = useState(false);

  // Pointer closes fade out (150ms) before unmounting; keyboard closes (Esc) are instant.
  function closeAnimated() {
    if (closing) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return onClose();
    setClosing(true);
    setTimeout(onClose, 150);
  }
  const screen = screens[index];
  const hasPrev = index > 0;
  const hasNext = index < screens.length - 1;

  useEffect(() => {
    const d = dialog.current!;
    const opener = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const overflow = root.style.overflow;
    d.showModal();
    closeBtn.current?.focus(); // showModal focuses the first control (the "Full size" link); start on Close instead
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = overflow;
      if (d.open) d.close();
      opener?.focus({ preventScroll: true });
    };
  }, []);

  // A button that turns disabled while focused drops focus out of the dialog; hand it to the other arrow.
  useEffect(() => {
    if (!hasPrev && document.activeElement === prevBtn.current) nextBtn.current?.focus();
    if (!hasNext && document.activeElement === nextBtn.current) prevBtn.current?.focus();
  }, [hasPrev, hasNext]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft" && hasPrev) onIndex(index - 1);
    if (e.key === "ArrowRight" && hasNext) onIndex(index + 1);
  }

  function endSwipe(x: number) {
    if (swipeX.current === null) return;
    const dx = x - swipeX.current;
    swipeX.current = null;
    if (dx > 50 && hasPrev) onIndex(index - 1);
    if (dx < -50 && hasNext) onIndex(index + 1);
  }

  // Clicks on the empty space around the image close the viewer.
  const closeOnBackdrop = (e: React.MouseEvent) => e.target === e.currentTarget && closeAnimated();

  return (
    <dialog
      ref={dialog}
      aria-label={ui.gallery.viewerLabel(index + 1, screens.length)}
      data-closing={closing || undefined}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
      className="viewer fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overscroll-contain bg-transparent p-0 text-ink backdrop:bg-bg/80 backdrop:backdrop-blur-md"
    >
      <div className="flex h-full flex-col" onClick={closeOnBackdrop}>
        <div className="flex items-center justify-between gap-4 px-4 pt-4 md:px-6">
          <span className="flex items-center gap-4 font-mono text-xs">
            <span>
              {index + 1} / {screens.length}
            </span>
            <a
              href={screen.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 hover:text-accent"
            >
              {ui.gallery.fullSize} <Icon name="arrow-up-right" />
            </a>
          </span>
          <button ref={closeBtn} type="button" onClick={closeAnimated} className={iconBtn}>
            <Icon name="close" />
            <span className="sr-only">{ui.gallery.close}</span>
          </button>
        </div>

        <div
          className="flex min-h-0 flex-1 [touch-action:pan-y_pinch-zoom] items-center justify-center px-4 py-4 md:px-20"
          onClick={closeOnBackdrop}
          onPointerDown={(e) => (swipeX.current = e.clientX)}
          onPointerUp={(e) => endSwipe(e.clientX)}
          onPointerCancel={() => (swipeX.current = null)}
        >
          <Picture
            key={screen.src}
            screen={screen}
            sizes="100vw"
            className="max-h-full w-auto max-w-full border border-line bg-surface object-contain select-none"
          />
        </div>

        <div className="flex items-center gap-4 px-4 pb-4 md:px-6 md:pb-6">
          <button ref={prevBtn} type="button" onClick={() => onIndex(index - 1)} disabled={!hasPrev} className={iconBtn}>
            <Icon name="arrow-left" />
            <span className="sr-only">{ui.gallery.prev}</span>
          </button>
          <p aria-live="polite" className="mx-auto max-w-[70ch] flex-1 text-center text-[14px] leading-snug md:text-[15px]">
            {screen.caption}
          </p>
          <button ref={nextBtn} type="button" onClick={() => onIndex(index + 1)} disabled={!hasNext} className={iconBtn}>
            <Icon name="arrow-right" />
            <span className="sr-only">{ui.gallery.next}</span>
          </button>
        </div>
      </div>
    </dialog>
  );
}

/** Real screenshots of a project: the first shown large, the rest in a row (swipe sideways on mobile). Click to view full size. */
export function ScreenGallery({ screens }: { screens: Screen[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [lead, ...rest] = screens;

  return (
    <div className="border-b border-line py-6">
      <div className="px-6">
        <Shot screen={lead} lead onOpen={() => setOpen(0)} />
      </div>
      {rest.length > 0 && (
        <p className="mt-5 px-6 font-mono text-xs text-muted md:hidden">
          {ui.gallery.swipeHint(rest.length)}
        </p>
      )}
      {rest.length > 0 && (
        <div className="mt-3 flex gap-4 overflow-x-auto px-6 pb-1 [scrollbar-width:thin] md:mt-5 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {rest.map((s, i) => (
            <div key={s.src} className="w-[72%] shrink-0 md:w-auto">
              <Shot screen={s} onOpen={() => setOpen(i + 1)} />
            </div>
          ))}
        </div>
      )}
      {open !== null && <Viewer screens={screens} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </div>
  );
}
