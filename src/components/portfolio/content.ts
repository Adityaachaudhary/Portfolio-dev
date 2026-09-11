/**
 * Single source of truth for editable portfolio content.
 * Swap placeholder copy here — components read from these arrays.
 */

export const aboutStats = [
  { label: "Experience", value: "2+ Years" },
  { label: "Focus", value: "End-to-end builds" },
];

export type Service = { title: string; description: string };

export const coreServices: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end websites and web apps, frontend to backend.",
  },
  {
    title: "Web Application Development",
    description: "Custom SaaS platforms and internal business tools.",
  },
  {
    title: "Dashboard & Admin Panel Development",
    description: "Data-driven dashboards for analytics, operations, or reporting.",
  },
  {
    title: "API Development & Integration",
    description: "RESTful APIs, third-party service integrations.",
  },
  {
    title: "Database Design & Optimization",
    description: "Schema design, query optimization, data modeling.",
  },
];

export const additionalServices: Service[] = [
  { title: "Auth & Security", description: "JWT/OAuth-based authentication and access control." },
  { title: "Payment Integration", description: "Stripe, Razorpay, PayPal gateway setup." },
  { title: "Deployment & DevOps", description: "AWS/Azure deployment, Docker, CI/CD pipelines." },
  { title: "Maintenance & Support", description: "Ongoing updates, bug fixes, and monitoring after launch." },
];

export const skillGroups: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
  { category: "Tools / DevOps", items: ["Git", "Docker", "AWS"] },
];

export type ClientProject = {
  title: string;
  summary: string;
  tags: string[];
  preview: "furniture" | "hostel";
  previewAlt: string;
  href?: string;
};

export const clientProjects: ClientProject[] = [
  {
    title: "Client Project Title",
    summary: "Brief description of the problem this project solved and my role in building it.",
    tags: ["React", "Node.js", "PostgreSQL"],
    preview: "furniture",
    previewAlt: "Animated 3D furniture configurator with furniture placement tools",
  },
  {
    title: "Client Project Title",
    summary: "Brief description of the problem this project solved and my role in building it.",
    tags: ["Next.js", "FastAPI", "AWS"],
    preview: "hostel",
    previewAlt: "Animated hostel management interface for room and student records",
  },
];

export type SideProject = {
  title: string;
  reason: string;
  tags: string[];
  github?: string;
  demo?: string;
  /** Optional animated background rendered behind the card content. */
  background?: "habit" | "chatbot" | "voice";
  backgroundAlt?: string;
};

export const sideProjects: SideProject[] = [
  {
    title: "Habit Tracker",
    reason: "Why I built this — one line.",
    tags: ["React", "Vite"],
    background: "habit",
    backgroundAlt: "Animated habit tracking grid filling in day by day",
  },
  {
    title: "AI Doc Chatbot",
    reason: "Why I built this — one line.",
    tags: ["Python", "Local LLM"],
    background: "chatbot",
    backgroundAlt: "Animated chatbot summarizing uploaded PDF and Excel files",
  },
  {
    title: "Voice Translator",
    reason: "Why I built this — one line.",
    tags: ["Python", "Speech-to-Text"],
    background: "voice",
    backgroundAlt: "Animated voice recording being transcribed and translated into multiple languages",
  },
  { title: "Side Project 04", reason: "Why I built this — one line.", tags: ["Next.js", "Postgres"] },
  { title: "Side Project 05", reason: "Why I built this — one line.", tags: ["TypeScript", "API"] },
  { title: "Side Project 06", reason: "Why I built this — one line.", tags: ["FastAPI", "AWS"] },
];


export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial text. Describe the outcome, the working relationship, and what made the delivery stand out.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Placeholder testimonial text. Describe the outcome, the working relationship, and what made the delivery stand out.",
    name: "Client Name",
    role: "Role, Company",
  },
];

export const contactLinks = {
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "side-projects", label: "Side Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];
