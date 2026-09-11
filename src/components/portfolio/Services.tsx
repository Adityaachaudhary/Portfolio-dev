import { Reveal, Section, Tile } from "./primitives";
import { additionalServices, coreServices } from "./content";

export function Services() {
  const [lead, ...rest] = coreServices;

  return (
    <Section
      id="services"
      index="02"
      title="What I build."
      description="Core engagements, plus the supporting work that keeps a product running after launch."
    >
      <div className="grid grid-cols-12 gap-4">
        {lead ? (
          <Reveal className="col-span-12 lg:col-span-5">
            <Tile className="relative h-full overflow-hidden border-transparent bg-primary p-8 text-primary-foreground sm:p-10">
              <div className="relative z-10 flex h-full flex-col">
                <span className="font-mono text-xs tracking-[0.3em] text-primary-foreground/70">01</span>
                <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{lead.title}</h3>
                <p className="mt-3 max-w-sm text-sm text-primary-foreground/85 sm:text-base">
                  {lead.description}
                </p>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-primary-foreground/10"
              />
            </Tile>
          </Reveal>
        ) : null}

        <div className="col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {rest.map((service, i) => (
            <Reveal key={service.title} delay={i * 60} className="h-full">
              <Tile interactive className="h-full p-6 sm:p-7">
                <span className="font-mono text-xs tracking-[0.3em] text-primary">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </Tile>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-12">
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            Also available
          </p>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {additionalServices.map((service, i) => (
          <Reveal key={service.title} delay={i * 50} className="h-full">
            <Tile interactive className="h-full bg-surface-muted p-6">
              <h4 className="text-sm font-bold">{service.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
            </Tile>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
