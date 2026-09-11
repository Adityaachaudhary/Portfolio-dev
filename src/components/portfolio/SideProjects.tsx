import { ExternalLink, Github } from "lucide-react";
import { PillRow, Reveal, Section, Tile } from "./primitives";
import { sideProjects, type SideProject } from "./content";

export function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <Tile interactive className="flex h-full flex-col bg-surface-muted p-6">
      <h3 className="text-sm font-bold">{project.title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{project.reason}</p>
      <div className="mt-4">
        <PillRow tags={project.tags} />
      </div>
      <div className="mt-auto flex items-center gap-3 pt-6">
        <a
          href={project.github ?? "#"}
          target={project.github ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" aria-hidden />
        </a>
        <a
          href={project.demo ?? "#"}
          target={project.demo ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={`${project.title} live demo`}
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </Tile>
  );
}

export function SideProjects() {
  return (
    <Section
      id="side-projects"
      index="05"
      title="Side projects."
      description="Small experiments and tools, mostly open source."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sideProjects.map((project, i) => (
          <Reveal key={i} delay={i * 50} className="h-full">
            <SideProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
