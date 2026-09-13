import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/** Fade + rise on scroll. Wrap any block that should animate in. */
export function Reveal({
 children,
 className,
 delay = 0,
}: {
 children: ReactNode;
 className?: string;
 delay?: number;
}) {
 const { ref, visible } = useReveal<HTMLDivElement>();
 return (
 <div
 ref={ref}
 data-visible={visible}
 style={delay ? { transitionDelay: `${delay}ms` } : undefined}
 className={cn("reveal", className)}
 >
 {children}
 </div>
 );
}

/** Page section shell with the editorial rule + heading treatment. */
export function Section({
 id,
 index,
 title,
 description,
 children,
 className,
}: {
 id: string;
 index: string;
 title: string;
 description?: string;
 children: ReactNode;
 className?: string;
}) {
 return (
 <section id={id} className={cn("scroll-mt-28 py-16 sm:py-24", className)}>
 <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
 <Reveal>
 <div className="flex items-center gap-5">
 <span className="font-mono text-xs font-semibold tracking-[0.3em] text-primary">{index}</span>
 <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
 <span aria-hidden className="hidden h-px flex-1 bg-border sm:block" />
 </div>
 {description ? (
 <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
 ) : null}
 </Reveal>
 <div className="mt-10 sm:mt-12">{children}</div>
 </div>
 </section>
 );
}

/** Bento tile surface. */
export function Tile({
 children,
 className,
 as: Tag = "div",
}: {
 children: ReactNode;
 className?: string;
 interactive?: boolean;
 as?: "div" | "article" | "figure" | "li";
}) {
 return (
 <Tag className={cn("tile", className)}>{children}</Tag>
 );
}

/** Tech-stack pill. */
export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
 return (
 <span
 className={cn(
 "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
 tone === "accent"
 ? "border-primary/25 bg-primary/10 text-primary"
 : "border-border bg-surface-muted text-muted-foreground ",
 )}
 >
 {children}
 </span>
 );
}

export function PillRow({ tags, tone = "default" }: { tags: string[]; tone?: "default" | "accent" }) {
 return (
 <ul className="flex flex-wrap gap-2">
 {tags.map((tag) => (
 <li key={tag}>
 <Pill tone={tone}>{tag}</Pill>
 </li>
 ))}
 </ul>
 );
}

/** Pulsing availability chip used in the hero and about section. */
export function AvailabilityBadge({ className }: { className?: string }) {
 return (
 <span
 className={cn(
 "inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary",
 className,
 )}
 >
 <span className="relative flex h-2 w-2" aria-hidden>
 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
 <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
 </span>
 Available for work
 </span>
 );
}
