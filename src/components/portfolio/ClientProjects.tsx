import { ArrowUpRight } from "lucide-react";
import furniturePreview from "@/assets/furniture-configurator.gif.asset.json";
import hostelPreview from "@/assets/hostel-management.gif.asset.json";
import { PillRow, Reveal, Section } from "./primitives";
import { clientProjects, type ClientProject } from "./content";

const previewUrls: Record<ClientProject["preview"], string> = {
  furniture: furniturePreview.url,
  hostel: hostelPreview.url,
};

export function ProjectCard({ project }: { project: ClientProject }) {
  return (
    <article className="group">
      <div className="tile tile-hover aspect-video overflow-hidden p-0">
        <div className="flex h-full w-full flex-col">
          {/* macOS window chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
            <span aria-hidden className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span aria-hidden className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span aria-hidden className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">
              {project.title}
            </span>
          </div>
          <div className="glow-indigo relative min-h-0 flex-1 overflow-hidden">
            <img
              src={previewUrls[project.preview]}
              alt={project.previewAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">{project.summary}</p>
      <div className="mt-4">
        <PillRow tags={project.tags} />
      </div>
      <div className="mt-5">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View Project <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground/60">
            View Project <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
    </article>
  );
}

export function ClientProjects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Selected works."
      description="Real projects shipped for real businesses."
    >
      <div className="grid gap-10 md:grid-cols-2">
        {clientProjects.map((project, i) => (
          <Reveal key={i} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
