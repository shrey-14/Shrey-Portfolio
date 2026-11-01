import { nav, profile, ui } from "@/content/site";
import { Icon } from "./ui/Icon";
import { Logo } from "./ui/Logo";
import { ScrollSpyNav } from "./ScrollSpyNav";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Top bar: name, section nav and theme toggle (sticky from `lg`).
 * Below `lg` the section links sit in their own slim row that stays pinned while you scroll.
 */
export function SiteHeader() {
  return (
    <>
      <header className="no-print border-b border-line bg-bg lg:sticky lg:top-0 lg:z-20">
        <div className="mx-auto flex min-h-14 max-w-[1160px] items-center gap-x-8 px-4 md:px-6 lg:h-16">
          <a href="#top" className="logo-link inline-flex items-center gap-2 text-[17px] font-semibold tracking-tight whitespace-nowrap">
            <Logo className="h-7 w-auto" />
            {profile.name}
          </a>
          <ScrollSpyNav items={nav} />
          <div className="ml-auto lg:ml-0">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <nav aria-label={ui.navLabel} className="no-print sticky top-0 z-20 border-b border-line bg-bg lg:hidden">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-x-4 px-4 md:px-6">
          {nav
            .filter((n) => !("mobile" in n && n.mobile === false))
            .map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex min-h-11 items-center font-mono text-xs text-muted hover:text-ink"
              >
                {label}
              </a>
            ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex min-h-11 items-center gap-1.5 font-mono text-xs hover:text-accent"
          >
            <Icon name="page" /> {ui.cv}
          </a>
        </div>
      </nav>
    </>
  );
}
