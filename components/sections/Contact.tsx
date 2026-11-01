import { contact, profile, sections, socials, ui } from "@/content/site";
import { CopyEmail } from "@/components/CopyEmail";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section id="contact" label={sections.contact}>
      <p className="max-w-[22ch] text-[28px] leading-tight font-bold tracking-tight text-balance md:text-4xl">
        {contact.heading}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 border-b-2 border-accent font-mono text-lg break-all hover:text-accent"
        >
          <Icon name="mail" /> {profile.email}
        </a>
        <CopyEmail email={profile.email} />
      </div>
      <div className="no-print mt-6 flex flex-wrap gap-x-6 font-mono text-[13px]">
        {[{ label: ui.cv, href: profile.cv, icon: "page" as const }, ...socials].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 hover:text-accent"
          >
            <Icon name={l.icon} /> {l.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
