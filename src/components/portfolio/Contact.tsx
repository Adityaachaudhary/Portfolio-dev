import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, Reveal } from "./primitives";
import { contactLinks } from "./content";

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Project enquiry from ${name || "your site"}`);
    window.location.href = `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/70 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">07 / Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell me what you&apos;re building and I&apos;ll get back to you within a day.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Card className="mt-10 p-6 text-left">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} resize-y`}
                  placeholder="A few lines about your project"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Send Message
              </button>
            </form>
          </Card>
        </Reveal>

        <Reveal delay={140}>
          <ul className="mt-8 flex items-center justify-center gap-3">
            <li>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactLinks.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
