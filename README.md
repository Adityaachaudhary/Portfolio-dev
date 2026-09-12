# Stack & Shine

Build a single-page, responsive portfolio website for a freelance full-stack developer. The site should feel clean, minimal, and technical/developer-coded — not templated or generic.

Overall requirements

Single-page scrolling layout with smooth scroll navigation to each section

Fully responsive (mobile, tablet, desktop) — mobile-first

Light/Dark theme toggle in the navbar, with the preference remembered during the session

Fast-loading, minimal but purposeful animation (subtle fade-in on scroll for sections/cards — nothing heavy or distracting)

Sticky/fixed navbar with links to each section + the theme toggle

Clean sans-serif font for body text (Inter or similar); monospace font (JetBrains Mono or Fira Code) for section labels, tech-stack tags, and the hero headline, to reinforce a "developer" identity

Visual design — Dark theme

Background: near-black (#0D0F12)

Card/surface background: #1A1D23

Primary text: #EAEAEA

Accent color: electric blue (#3B82F6)

Secondary accent (for tags/highlights): muted green (#4ADE80)

Visual design — Light theme

Background: off-white (#FAFAFA)

Card/surface background: #FFFFFF with a subtle border/shadow

Primary text: #111318

Accent color: deeper blue (#2563EB)

Secondary accent: warm amber (#F59E0B)

Sections (in this exact order)

1. Hero Full-width, centered. Big headline, a one-line subheadline, and two CTA buttons side by side.

Headline: "I build full-stack web apps and dashboards that actually get used."

Subheadline: "From database to deployment — I handle the whole stack, not just the frontend."

Buttons: "View My Work" (scrolls to Projects) and "Let's Talk" (scrolls to Contact)

2. About Me Simple text block, optionally with a placeholder circular avatar/photo beside it. Text: "I'm a full-stack developer with hands-on experience building web applications, dashboards, and APIs for real clients over the past 2 years. I focus on writing clean, maintainable code and taking ownership of a project end-to-end — from database design to deployment — rather than just handling one piece of the puzzle. I enjoy solving practical business problems with software, and I'm currently available for new freelance projects." Include a small "Available for work" badge/indicator near this section.

3. Services Grid of cards, two tiers:

Core Services (larger cards):

Full-Stack Web Development — End-to-end websites and web apps, frontend to backend.

Web Application Development — Custom SaaS platforms and internal business tools.

Dashboard & Admin Panel Development — Data-driven dashboards for analytics, operations, or reporting.

API Development & Integration — RESTful APIs, third-party service integrations.

Database Design & Optimization — Schema design, query optimization, data modeling.

Also Available (smaller row/list below the core grid):

Auth & Security — JWT/OAuth-based authentication and access control.

Payment Integration — Stripe, Razorpay, PayPal gateway setup.

Deployment & DevOps — AWS/Azure deployment, Docker, CI/CD pipelines.

Maintenance & Support — Ongoing updates, bug fixes, and monitoring after launch.

4. Skills / Tech Stack Grouped by category as tag/pill elements (not one long list). Use placeholder tags per category that I will edit later:

Frontend: (e.g. React, Next.js, Tailwind CSS)

Backend: (e.g. Node.js, Express, FASTAPI)

Database: (e.g. PostgreSQL, MongoDB, Firebase, Supabase)

Tools/DevOps: (e.g. Git, Docker, AWS)

5. Client Projects Vertical stack of 2-3 project cards (build as placeholder/skeleton cards — I will fill in real content later). Each card should have:

Image/screenshot placeholder area

Project title (placeholder: "Client Project Title")

Short summary text area (placeholder: "Brief description of the problem this project solved and my role in building it.")

Tech stack tags row (placeholder tags)

A link/button placeholder ("View Project" — optional, may be empty/disabled if no public link)

6. Side Projects / GitHub Lighter-weight grid, 3-4 per row, smaller cards than Client Projects. Each card should have:

Project title (placeholder)

One-line "why I built this" description (placeholder)

Tech stack tags

GitHub icon/link and optional live demo link placeholder

7. Testimonials Simple layout for 1-2 quote cards (placeholder text and name/role, to be replaced later). Include client name, role/company, and quote text.

8. Contact Centered, minimal section with:

A short line inviting contact ("Have a project in mind? Let's talk.")

Contact form (Name, Email, Message fields) OR a direct email link/button

Icons/links to GitHub, LinkedIn, and email

Functional notes

All project/testimonial cards should be built as clearly reusable components so real content can be swapped in easily later

Ensure good color contrast and accessibility in both themes

Keep the codebase clean and componentized (this is a developer's own portfolio, so code quality visible in the repo also matters)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/689b3e06-ae56-421b-ae11-c79db9ad6b79).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
