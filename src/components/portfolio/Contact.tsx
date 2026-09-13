import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { Reveal, Tile } from "./primitives";
import { contactLinks } from "./content";

const fieldClass =
 "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

const labelClass = "text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground";

export function Contact() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [pickerOpen, setPickerOpen] = useState(false);

 function handleSubmit(event: FormEvent<HTMLFormElement>) {
 event.preventDefault();
 setPickerOpen(true);
 }

 function openMail(service: "gmail" | "outlook" | "default") {
 const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
 const subject = encodeURIComponent(`Project enquiry from ${name || "your site"}`);
 setPickerOpen(false);
 if (service === "gmail") {
 window.open(
 `https://mail.google.com/mail/?view=cm&fs=1&to=${contactLinks.email}&su=${subject}&body=${body}`,
 "_blank",
 "noopener,noreferrer",
 );
 } else if (service === "outlook") {
 window.open(
 `https://outlook.live.com/mail/0/deeplink/compose?to=${contactLinks.email}&subject=${subject}&body=${body}`,
 "_blank",
 "noopener,noreferrer",
 );
 } else {
 window.location.href = `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;
 }
 }

 return (
 <section id="contact" className="scroll-mt-28 py-16 sm:py-24">
 <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
 <Reveal>
 <div>
 <div className="flex items-center gap-5">
 <span className="font-mono text-xs font-semibold tracking-[0.3em] text-primary">06</span>
 <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
 Contact
 </span>
 </div>
 <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
 Have a project in mind? Let&apos;s talk.
 </h2>
 <p className="mt-5 max-w-md text-base text-muted-foreground">
 Tell me what you&apos;re building and I&apos;ll get back to you within a day.
 </p>
 <ul className="mt-8 space-y-3">
 <li>
 <a
 href={contactLinks.github}
 target="_blank"
 rel="noreferrer"
 className="inline-flex items-center gap-3 text-base transition-colors "
 >
 <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface">
 <Github className="h-4 w-4" aria-hidden />
 </span>
 GitHub
 </a>
 </li>
 <li>
 <a
 href={contactLinks.linkedin}
 target="_blank"
 rel="noreferrer"
 className="inline-flex items-center gap-3 text-base transition-colors "
 >
 <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface">
 <Linkedin className="h-4 w-4" aria-hidden />
 </span>
 LinkedIn
 </a>
 </li>
 <li>
  <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactLinks.email}`}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-3 text-base transition-colors "
  >
 <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface">
 <Mail className="h-4 w-4" aria-hidden />
 </span>
 {contactLinks.email}
 </a>
 </li>
 </ul>
 </div>
 </Reveal>

 <Reveal delay={90}>
 <Tile className="p-8 sm:p-10">
 <form onSubmit={handleSubmit} className="grid gap-5">
 <div className="grid gap-2">
 <label htmlFor="name" className={labelClass}>
 Name
 </label>
 <input
 id="name"
 required
 value={name}
 onChange={(e) => setName(e.target.value)}
 className={fieldClass}
 placeholder="Your name"
 />
 </div>
 <div className="grid gap-2">
 <label htmlFor="email" className={labelClass}>
 Email
 </label>
 <input
 id="email"
 type="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className={fieldClass}
 placeholder="you@company.com"
 />
 </div>
 <div className="grid gap-2">
 <label htmlFor="message" className={labelClass}>
 Message
 </label>
 <textarea
 id="message"
 required
 rows={4}
 value={message}
 onChange={(e) => setMessage(e.target.value)}
 className={`${fieldClass} resize-y`}
 placeholder="A few lines about your project"
 />
 </div>
 <button
 type="submit"
 className="w-full rounded-xl bg-primary py-4 font-display text-sm font-bold text-primary-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
 >
 Send Message
 </button>
 </form>
 </Tile>
 </Reveal>
 </div>
 </section>
 );
}
