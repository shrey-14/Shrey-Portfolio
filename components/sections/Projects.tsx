import { moreWorkHref, projects, sections, ui } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="work" label={sections.work}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
      <a
        href={moreWorkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px] text-muted hover:text-accent"
      >
        {ui.moreOnGithub} <Icon name="arrow-right" />
      </a>
    </Section>
  );
}
