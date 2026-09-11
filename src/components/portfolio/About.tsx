import { Reveal } from "./primitives";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/70 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">01 / About</p>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-12">
          <Reveal>
            <div
              aria-hidden
              className="grid h-28 w-28 shrink-0 place-items-center rounded-full border border-border bg-muted font-mono text-2xl text-muted-foreground sm:h-36 sm:w-36"
            >
              &lt;/&gt;
            </div>
          </Reveal>
          <Reveal delay={80} className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-[11px] text-secondary-foreground dark:text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
              Available for work
            </span>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;m a full-stack developer with hands-on experience building web applications, dashboards,
              and APIs for real clients over the past 2 years. I focus on writing clean, maintainable code and
              taking ownership of a project end-to-end — from database design to deployment — rather than just
              handling one piece of the puzzle. I enjoy solving practical business problems with software, and
              I&apos;m currently available for new freelance projects.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
