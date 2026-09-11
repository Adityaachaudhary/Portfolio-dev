import { ArrowRight } from "lucide-react";
import { AvailabilityBadge, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <Reveal>
          <AvailabilityBadge />
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            I build <span className="text-primary">full-stack</span> web apps and dashboards that actually get
            used.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            From database to deployment — I handle the whole stack, not just the frontend.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-surface px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Let&apos;s Talk
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
