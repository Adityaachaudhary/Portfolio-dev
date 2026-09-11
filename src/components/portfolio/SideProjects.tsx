import { ExternalLink, Github } from "lucide-react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { PillRow, Reveal, Section } from "./primitives";
import { sideProjects, type SideProject } from "./content";

export function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <article className="flex h-full min-h-80 flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-lift sm:min-h-96">
      <div className="flex h-12 shrink-0 items-center gap-2 border-b border-border bg-surface-muted px-4">
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 min-w-0 truncate font-mono text-[11px] text-muted-foreground">
          {project.title}
        </span>
      </div>
      <div className="glow-indigo flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase text-primary">Side project</p>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{project.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.reason}
        </p>
        <div className="mt-6">
          <PillRow tags={project.tags} />
        </div>
        <div className="mt-auto flex items-center gap-3 pt-8">
          {project.github ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github aria-hidden /> GitHub
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled aria-label={`${project.title} GitHub link unavailable`}>
              <Github aria-hidden /> GitHub
            </Button>
          )}
          {project.demo ? (
            <Button asChild variant="ghost" size="sm">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden /> Live demo
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled aria-label={`${project.title} live demo unavailable`}>
              <ExternalLink aria-hidden /> Live demo
            </Button>
          )}
        </div>
      </div>
    </article>
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
      <Reveal>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-10 lg:px-16">
          <Swiper
            className="side-projects-deck"
            modules={[EffectCards, Navigation]}
            effect="cards"
            loop
            grabCursor
            navigation
            cardsEffect={{
              perSlideOffset: 10,
              perSlideRotate: 2,
              rotate: true,
              slideShadows: false,
            }}
          >
            {sideProjects.map((project) => (
              <SwiperSlide key={project.title}>
                <SideProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reveal>
    </Section>
  );
}
