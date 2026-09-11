import { Card, Reveal, Section, TagRow } from "./primitives";
import { skillGroups } from "./content";

export function Skills() {
  return (
    <Section
      id="skills"
      label="03 / Tech Stack"
      title="Tools I work with"
      description="Grouped by where they sit in the stack."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <Card className="h-full p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{group.category}</p>
              <div className="mt-4">
                <TagRow tags={group.items} tone="accent" />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
