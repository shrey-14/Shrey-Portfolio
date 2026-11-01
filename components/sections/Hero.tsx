import { Fragment } from "react";
import { metrics, profile, socials, ui } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

const btn = "press inline-flex min-h-11 items-center justify-center gap-2 border border-ink px-4 font-mono text-[13px]";

function Photo({ className }: { className: string }) {
  return (
    <div className={`relative overflow-hidden border border-line bg-surface ${className}`}>
      <picture>
        <source srcSet={profile.photo.webp} type="image/webp" />
        <img
          src={profile.photo.png}
          alt={profile.name}
          width={480}
          height={480}
          className="block size-full object-cover object-bottom"
        />
      </picture>
      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" />
    </div>
  );
}

/** First screen: who (name, role), what (pitch, intro), proof (four metrics), and where to go next. */
export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="pt-8 pb-16 md:pt-20 md:pb-24">
      <div className="grid md:grid-cols-[1fr_auto] md:items-center md:gap-12 lg:gap-16">
        <div>
          <div className="flex items-center gap-5">
            <Photo className="size-28 shrink-0 sm:size-32 md:hidden" />
            {/* Below md the name stacks one word per line so the larger photo can sit beside it. */}
            <h1 id="hero-name" className="text-[44px] leading-[0.95] font-bold tracking-[-0.035em] sm:text-[52px] md:text-[84px] md:leading-none">
              {profile.name.split(" ").map((word, i) => (
                <Fragment key={word}>
                  {i > 0 && " "}
                  <span className="block md:inline">{word}</span>
                </Fragment>
              ))}
            </h1>
          </div>
          <p className="mt-5 max-w-[32ch] text-[24px] leading-[1.15] font-medium tracking-tight text-balance md:mt-7 md:text-[40px]">
            <span className="text-muted">{profile.role}.</span> {profile.pitch}
          </p>
          <p className="mt-6 max-w-[62ch] text-[17px] md:text-lg">{profile.intro}</p>
          <p className="mt-5 flex items-center gap-1.5 font-mono text-xs text-muted">
            <Icon name="map-pin" /> {profile.location} · {profile.status}
          </p>
          <div className="no-print mt-7 grid max-w-[420px] grid-cols-1 gap-2 min-[360px]:grid-cols-2 lg:flex lg:max-w-none lg:flex-wrap">
            <a href="#work" className={`${btn} bg-ink text-bg hover:bg-transparent hover:text-ink`}>
              {ui.viewWork} <Icon name="arrow-down" />
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={`${btn} hover:bg-ink hover:text-bg`}>
              <Icon name="page" /> {ui.cv}
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn} hover:bg-ink hover:text-bg`}
              >
                <Icon name={s.icon} /> {s.label}
              </a>
            ))}
          </div>
        </div>

        <Photo className="hidden md:block md:size-[260px] md:justify-self-end lg:size-[340px] xl:size-[360px]" />
      </div>

      <ul className="mt-14 grid grid-cols-2 border-y border-line md:mt-20 md:grid-cols-4">
        {metrics.map((m, i) => (
          <li
            key={m.value}
            className={`flex flex-col border-line py-6 pr-4 md:py-8 md:pr-6 ${i % 2 === 1 ? "border-l pl-4" : ""} ${
              i >= 2 ? "border-t md:border-t-0" : ""
            } ${i === 0 ? "md:pl-0" : "md:border-l md:pl-6"}`}
          >
            <span className="font-mono text-[34px] leading-none font-medium tracking-tight text-accent md:text-[44px]">
              {m.value}
            </span>
            <span className="mt-3 text-[14px] leading-snug text-muted md:text-[15px]">{m.label}</span>
            <a
              href={m.source.href}
              className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-2 font-mono text-xs hover:text-accent"
            >
              {m.source.label} <Icon name="arrow-down" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
