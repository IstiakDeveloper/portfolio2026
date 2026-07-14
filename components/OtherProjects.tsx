"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { otherProjects } from "@/lib/other-projects";

// Custom inline SVG icons for Github and ExternalLink to ensure compatibility and robustness
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const otherProjectsData = otherProjects;

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

// Single card component to manage image load errors individually
function ProjectCard({ project, variants }: { project: Project; variants: any }) {
  const [imageError, setImageError] = useState(false);

  // Generate a mock abbreviation for the placeholder, e.g., "Laravel REST API" -> "LRA"
  const initials = project.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      className="group bg-card border border-card-border rounded-xl shadow-xs hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Top Screenshot Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted-light/35 border-b border-card-border flex items-center justify-center">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Technical placeholder pattern if image is missing */
          <div className="w-full h-full bg-gradient-to-tr from-accent/5 to-indigo-500/5 flex flex-col items-center justify-center font-mono text-accent/40 relative">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
            <span className="text-xl font-extrabold tracking-widest">&lt;{initials}/&gt;</span>
            <span className="text-[9px] uppercase tracking-wider text-muted/50 mt-1">No Screenshot Loaded</span>
          </div>
        )}
      </div>

      {/* Card Info details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-muted-light text-muted uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] text-muted leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-card-border/60">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Code</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-accent transition-colors"
          >
            <ExternalLinkIcon className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function OtherProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 border-t border-card-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-xl mx-auto">
          <Code className="w-6 h-6 text-accent mb-4" />
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Other Selected Projects
          </h2>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            A list of tools, packages, and open-source modules built with clean engineering standards.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {otherProjectsData.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              variants={cardVariants}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
