import { BackToTop } from "@/components/BackToTop";
import { ConsoleNote } from "@/components/ConsoleNote";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { About, Background, Contact, Hero, Projects, Skills } from "@/components/sections";
import { ui } from "@/content/site";

/** Page order lives here. Reorder, add or remove sections by editing this list. */
export default function Home() {
  return (
    <div id="top" tabIndex={-1} className="outline-none">
      <a
        href="#work"
        className="no-print sr-only bg-ink px-3 py-2 font-mono text-[13px] text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30"
      >
        {ui.skipLink}
      </a>
      <SiteHeader />
      <main className="mx-auto max-w-[1160px] px-4 md:px-6">
        <Hero />
        <Projects />
        <About />
        <Background />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
      <ConsoleNote />
      <SmoothScroll />
    </div>
  );
}
