import { ExternalLink, Github } from "lucide-react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import chatbotPreview from "@/assets/ai-chatbot.gif.asset.json";
import habitPreview from "@/assets/habit-tracker.gif.asset.json";
import voicePreview from "@/assets/voice-translator.gif.asset.json";
import workoutPreview from "@/assets/workout-generator.gif.asset.json";
import workdayPreview from "@/assets/workday-autofill.gif.asset.json";
import surveyPreview from "@/assets/survey-builder.gif";
import { Button } from "@/components/ui/button";
import { PillRow, Reveal, Section } from "./primitives";
import { sideProjects, type SideProject } from "./content";

const backgroundUrls: Record<NonNullable<SideProject["background"]>, string> = {
  habit: habitPreview.url,
  chatbot: chatbotPreview.url,
  voice: voicePreview.url,
  workout: workoutPreview.url,
  workday: workdayPreview.url,
};

export function SideProjectCard({ project }: { project: SideProject }) {
  const backgroundUrl = project.background ? backgroundUrls[project.background] : undefined;

  return (
    <article className="flex h-full min-h-96 flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-lift sm:min-h-[32rem]">
      {/* macOS window chrome — only the project name sits on the placeholder */}
      <div className="flex h-12 shrink-0 items-center gap-2 border-b border-border bg-surface-muted px-4">
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 min-w-0 truncate font-mono text-[11px] text-muted-foreground">
          {project.title}
        </span>
      </div>
      {/* GIF placeholder — clean image area, full visibility */}
      <div className="glow-indigo relative h-80 w-full shrink-0 overflow-hidden sm:h-96">
        {backgroundUrl ? (
          <img
            src={backgroundUrl}
            alt={project.backgroundAlt ?? ""}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        ) : null}
      </div>
      {/* Info container under the placeholder */}
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.reason}
        </p>
        <div>
          <PillRow tags={project.tags} />
        </div>
        <div className="mt-auto flex items-center gap-3 pt-2">
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
  const loopedProjects = [...sideProjects, ...sideProjects];

  return (
    <Section
      id="side-projects"
      index="05"
      title="Side projects."
      description="Small experiments and tools, mostly open source."
    >
      <Reveal>
        <div className="relative mx-auto max-w-md px-4 sm:px-10 lg:px-16">
          <Swiper
            className="side-projects-deck"
            modules={[EffectCards, Navigation]}
            effect="cards"
            loop
            grabCursor
            navigation
            speed={650}
            threshold={5}
            resistanceRatio={0.65}
            cardsEffect={{
              perSlideOffset: 14,
              perSlideRotate: 5,
              rotate: true,
              slideShadows: true,
            }}
          >
            {loopedProjects.map((project, index) => (
              <SwiperSlide key={`${project.title}-${index}`}>
                <SideProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reveal>
    </Section>
  );
}
