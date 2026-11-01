import { about, sections } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" label={sections.about}>
      <div className="max-w-[62ch] space-y-5">
        {about.paragraphs.map((p) => (
          <p key={p} className="text-xl leading-snug md:text-2xl">
            {p}
          </p>
        ))}
        <p className="border-l border-accent pl-4 text-[17px]">{about.interests}</p>
        <p className="text-[15px] text-muted">{about.aside}</p>
      </div>
    </Section>
  );
}
