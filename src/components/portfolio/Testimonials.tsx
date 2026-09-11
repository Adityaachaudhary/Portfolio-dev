import { Quote } from "lucide-react";
import { Card, Reveal, Section } from "./primitives";
import { testimonials, type Testimonial } from "./content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <Quote className="h-5 w-5 text-primary" aria-hidden />
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto pt-6">
        <p className="font-mono text-sm font-medium">{testimonial.name}</p>
        <p className="font-mono text-xs text-muted-foreground">{testimonial.role}</p>
      </figcaption>
    </Card>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" label="06 / Testimonials" title="What clients say">
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <Reveal key={i} delay={i * 70} className="h-full">
            <figure className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
