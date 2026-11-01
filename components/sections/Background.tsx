import { education, experience, sections } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { TimelineItem } from "@/components/ui/TimelineItem";

/** Experience then education, as one run of timeline rows. */
export function Background() {
  return (
    <Section id="background" label={sections.background}>
      {[...experience, ...education].map((e) => (
        <TimelineItem key={e.title + e.when} entry={e} />
      ))}
    </Section>
  );
}
