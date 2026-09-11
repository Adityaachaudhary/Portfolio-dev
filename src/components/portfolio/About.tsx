import { AvailabilityBadge, Reveal, Tile } from "./primitives";
import { aboutStats } from "./content";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-4 px-6 lg:px-12">
        <Reveal className="col-span-12 lg:col-span-8">
          <Tile className="flex h-full min-w-0 flex-col justify-between p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-primary">01</span>
              <h2 className="text-2xl font-bold sm:text-3xl">Beyond the code.</h2>
            </div>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a full-stack developer with hands-on experience building web applications, dashboards,
              and APIs for real clients over the past 2 years. I focus on writing clean, maintainable code and
              taking ownership of a project end-to-end — from database design to deployment — rather than just
              handling one piece of the puzzle. I enjoy solving practical business problems with software, and
              I&apos;m currently available for new freelance projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background px-4 py-3"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </Tile>
        </Reveal>

        <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
          <Reveal delay={80} className="flex-1">
            <Tile className="relative h-full overflow-hidden border-transparent bg-primary p-8 text-primary-foreground">
              <div className="relative z-10">
                <AvailabilityBadge className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground" />
                <h3 className="mt-6 text-xl font-bold">Taking on new freelance projects</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Short builds or long engagements — happy to scope either.
                </p>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-primary-foreground/15 blur-2xl"
              />
            </Tile>
          </Reveal>
          <Reveal delay={140} className="flex-1">
            <Tile className="flex h-full flex-col justify-center p-8">
              <h3 className="text-xl font-bold">End-to-end ownership</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Schema design, API layer, interface and deployment — one person accountable for the whole
                thing.
              </p>
            </Tile>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
