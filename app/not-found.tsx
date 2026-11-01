import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { profile, ui } from "@/content/site";

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <header className="border-b border-line">
        <div className="mx-auto flex min-h-14 max-w-[1160px] items-center px-4 md:px-6 lg:h-16">
          <a href="/" className="logo-link inline-flex items-center gap-2 text-[17px] font-semibold tracking-tight">
            <Logo className="h-7 w-auto" />
            {profile.name}
          </a>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1160px] flex-1 px-4 py-20 md:px-6 md:py-32">
        <Logo failed className="h-20 w-auto md:h-24" />
        <p className="mt-6 font-mono text-xs text-muted">{ui.notFound.code}</p>
        <h1 className="mt-6 text-[42px] leading-none font-bold tracking-[-0.035em] md:text-[64px]">{ui.notFound.title}</h1>
        <p className="mt-5 max-w-[48ch] text-lg">{ui.notFound.body}</p>
        <a
          href="/"
          className="mt-8 inline-flex min-h-11 items-center gap-2 border border-ink bg-ink px-4 font-mono text-[13px] text-bg press hover:bg-transparent hover:text-ink"
        >
          <Icon name="arrow-left" /> {ui.notFound.home}
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
