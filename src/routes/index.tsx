import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { ClientProjects } from "@/components/portfolio/ClientProjects";
import { SideProjects } from "@/components/portfolio/SideProjects";

import { Contact } from "@/components/portfolio/Contact";

const title = "Portfolio-Aditya";
const description =
  "Freelance full-stack developer building web apps, dashboards and APIs end-to-end — from database design to deployment. Available for new projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <ClientProjects />
        <SideProjects />

        <Contact />
      </main>
      <footer className="border-t border-border/70 py-8" aria-hidden="true" />
    </div>
  );
}
