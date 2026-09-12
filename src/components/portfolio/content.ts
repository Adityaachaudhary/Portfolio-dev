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
    reason: "Staying consistent with personal habits is hard when progress is invisible. Habitly keeps a simple grid of streaks that shows exactly which habits are holding and which are slipping, so staying on track becomes a daily, visible routine instead of guesswork.",
    tags: ["React", "TypeScript", "Supabase", "Node.js"],
    github: "https://github.com/Adityaachaudhary/Habitly",
    demo: "https://habitly-ashen.vercel.app/",
    background: "habit",
    backgroundAlt: "Animated habit tracking grid filling in day by day",
  },
  {
    title: "AI Toolkit",
    reason: "Reading long PDFs and Excel files to find one answer is slow and repetitive. This chatbot takes an uploaded document, summarizes it, and answers questions straight from the content using a local LLM, so the answers surface in seconds instead of a manual search.",
    tags: ["Python", "FastAPI", "LLM", "RAG", "React"],
    github: "https://github.com/Adityaachaudhary/RAG-LocalLLM",
    background: "chatbot",
    backgroundAlt: "Animated chatbot summarizing uploaded PDF and Excel files",
  },
  {
    title: "FreeScribe",
    reason: "Transcribing and translating spoken dialogue usually means juggling separate tools and waiting on each step. FreeScribe runs speech recognition right in the browser and outputs clean translated text in any language instantly, so a single recording becomes usable, multilingual text without the back and forth.",
    tags: ["Bootstrap", "OpenAI Whisper", "Web Workers", "JavaScript"],
    github: "https://github.com/Adityaachaudhary/scribeFree",
    demo: "https://scribe-free.vercel.app/",
    background: "voice",
    backgroundAlt: "Animated voice recording being transcribed and translated into multiple languages",
  },
  {
    title: "Strengthmax",
    reason: "Choosing which exercises to do in a session often turns into endless scrolling through lists. Strengthmax turns a body part and training strategy into a focused, ready-to-go exercise set instantly, so the workout starts instead of the planning dragging on.",
    tags: ["React", "Vite", "Tailwind CSS", "Problem Solving"],
    github: "https://github.com/Adityaachaudhary/Strength_Max",
    demo: "https://strength-max.vercel.app/",
    background: "workout",
    backgroundAlt: "Animated workout generator selecting body part and strategy to reveal an exercise list",
  },
  {
    title: "Workday Automation extension",
    reason: "Workday job applications are long and repetitive to fill out by hand. This extension reads a resume, auto-fills the required fields, and submits only after the user confirms, so each application takes minutes instead of half an hour of typing the same details over and over.",
    tags: ["React", "TypeScript", "Groq API key", "Manifest v3"],
    github: "https://github.com/Adityaachaudhary/workday-automation",
    background: "workday",
    backgroundAlt: "Animated browser extension parsing a resume and autofilling a Workday job application form",
  },
  {
    title: "Survey Builder",
    reason: "Creating branded survey forms usually means a generic tool and a lot of manual styling afterward. Survey Builder lets users add multiple question types with different answer formats, drop in a logo, and pick brand colors — so a polished, on-brand survey is ready to share in minutes.",
    tags: ["TypeScript", "React", "Cloudflare Hono", "D1 and KV", "Tailwind CSS", "Resend API"],
    github: "https://github.com/Adityaachaudhary/Survey-Builder",
    demo: "https://survey-builder-web.vercel.app/",
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
