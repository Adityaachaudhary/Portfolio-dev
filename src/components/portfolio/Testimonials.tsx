import { Reveal, Section, Tile } from "./primitives";
import { testimonials, type Testimonial } from "./content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Tile as="figure" className="flex h-full flex-col rounded-[2rem] p-8 text-center sm:p-12">
      <blockquote className="font-display text-xl font-bold leading-snug sm:text-2xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex flex-col items-center pt-10">
        <div
          aria-hidden
          className="h-14 w-14 rounded-full bg-primary/80 ring-4 ring-background"
        />
        <p className="mt-4 font-display text-sm font-bold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </figcaption>
    </Tile>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" index="06" title="What clients say.">
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <Reveal key={i} delay={i * 70} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
