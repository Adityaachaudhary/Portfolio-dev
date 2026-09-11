import { PillRow, Reveal, Section, Tile } from "./primitives";
import { skillGroups } from "./content";

export function Skills() {
  return (
    <Section id="skills" index="03" title="Technical arsenal." description="Grouped by where it sits in the stack.">
      <div className="grid grid-cols-12 gap-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60} className="col-span-12 sm:col-span-6">
            <Tile interactive className="h-full p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                {group.category}
              </p>
              <div className="mt-5">
                <PillRow tags={group.items} />
              </div>
            </Tile>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
