import { Card, Reveal, Section } from "./primitives";
import { additionalServices, coreServices } from "./content";

export function Services() {
  return (
    <Section
      id="services"
      label="02 / Services"
      title="What I build"
      description="Core engagements plus the supporting work that keeps a product running after launch."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((service, i) => (
          <Reveal key={service.title} delay={i * 60}>
            <Card interactive className="h-full p-6">
              <p className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Also available</p>
      </Reveal>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {additionalServices.map((service, i) => (
          <Reveal key={service.title} delay={i * 50}>
            <Card className="h-full p-4">
              <h4 className="font-mono text-sm font-medium">{service.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
