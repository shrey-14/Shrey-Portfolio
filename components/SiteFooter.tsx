import { profile, ui } from "@/content/site";
import { Logo } from "./ui/Logo";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1160px] px-4 font-mono text-xs text-muted md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-5">
        <span className="inline-flex items-center gap-2">
          <Logo className="h-5 w-auto text-ink" />
          {profile.name}
        </span>
        <span>
          {ui.lastUpdated} {profile.lastUpdated}
        </span>
      </div>
    </footer>
  );
}
