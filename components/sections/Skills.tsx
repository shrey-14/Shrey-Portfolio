import { sections, skills } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section id="toolkit" label={sections.toolkit}>
      <dl className="grid gap-x-6 text-[15px] md:grid-cols-[150px_1fr] md:gap-y-3">
        {skills.map((s) => (
          <div key={s.group} className="contents">
            <dt className="pt-0.5 font-mono text-xs text-muted">{s.group}</dt>
            <dd className="mb-2.5 md:mb-0">{s.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
