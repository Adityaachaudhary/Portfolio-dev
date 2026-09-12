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
  background?: "habit" | "chatbot" | "voice" | "workout" | "workday" | "survey";
  backgroundAlt?: string;
};

export const sideProjects: SideProject[] = [
  {
    title: "Habitly",
    reason: "I built this to track my personal habits and stay consistent day to day. A simple grid of streaks keeps me honest about the habits I care about.",
    tags: ["React", "TypeScript", "Supabase", "Node.js"],
    github: "https://github.com/Adityaachaudhary/Habitly",
    demo: "https://habitly-ashen.vercel.app/",
    background: "habit",
    backgroundAlt: "Animated habit tracking grid filling in day by day",
  },
  {
    title: "AI Toolkit",
    reason: "I built this to experiment with RAG and local LLMs in a practical chatbot. Upload a PDF or Excel file and ask questions — it summarizes, answers, and pulls insights straight from the document.",
    tags: ["Python", "FastAPI", "LLM", "RAG", "React"],
    github: "https://github.com/Adityaachaudhary/RAG-LocalLLM",
    background: "chatbot",
    backgroundAlt: "Animated chatbot summarizing uploaded PDF and Excel files",
  },
  {
    title: "FreeScribe",
    reason: "I built this to transcribe and translate spoken dialogue into any language on the fly. It runs speech recognition in the browser and gives clean, instant translated text you can use right away.",
    tags: ["Bootstrap", "OpenAI Whisper", "Web Workers", "JavaScript"],
    github: "https://github.com/Adityaachaudhary/scribeFree",
    demo: "https://scribe-free.vercel.app/",
    background: "voice",
    backgroundAlt: "Animated voice recording being transcribed and translated into multiple languages",
  },
  {
    title: "Strengthmax",
    reason: "I built this to take the guesswork out of picking exercises for a session. Pick a body part and training strategy, and it instantly generates a focused set of exercises to perform — no more scrolling through endless lists.",
    tags: ["React", "Vite", "Tailwind CSS", "Problem Solving"],
    github: "https://github.com/Adityaachaudhary/Strength_Max",
    demo: "https://strength-max.vercel.app/",
    background: "workout",
    backgroundAlt: "Animated workout generator selecting body part and strategy to reveal an exercise list",
  },
  {
    title: "Workday Autofill Extension",
    reason: "Why I built this — one line.",
    tags: ["Browser Extension", "JavaScript"],
    background: "workday",
    backgroundAlt: "Animated browser extension parsing a resume and autofilling a Workday job application form",
  },
  {
    title: "Survey Form Builder",
    reason: "Why I built this — one line.",
    tags: ["React", "TypeScript"],
    background: "survey",
    backgroundAlt: "Animated form builder adding questions with answer types and switching company theme colors",
  },
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
