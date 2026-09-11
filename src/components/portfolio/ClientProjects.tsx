import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Card, Reveal, Section, TagRow } from "./primitives";
import { clientProjects, type ClientProject } from "./content";

export function ProjectCard({ project }: { project: ClientProject }) {
  return (
    <Card interactive className="overflow-hidden md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div
        aria-hidden
        className="grid aspect-[16/9] place-items-center border-b border-border bg-muted text-muted-foreground md:aspect-auto md:border-b-0 md:border-r"
      >
        <ImageIcon className="h-7 w-7" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-4">
          <TagRow tags={project.tags} />
        </div>
        <div className="mt-6">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/60"
            >
              View Project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground opacity-60"
            >
              View Project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export function ClientProjects() {
  return (
    <Section
      id="projects"
      label="04 / Client Projects"
      title="Selected client work"
      description="Real projects shipped for real businesses."
    >
      <div className="grid gap-5">
        {clientProjects.map((project, i) => (
          <Reveal key={i} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
