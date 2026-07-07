"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, ArrowUpRight } from "lucide-react";

// Custom LinkedIn SVG icon since it's not exported by lucide-react in newer versions
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const socialButtons = [
    {
      label: "Email Me",
      href: "mailto:hello@istiakhossain.com",
      icon: Mail,
      primary: true,
      color: "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg",
    },
    {
      label: "Upwork Profile",
      href: "https://www.upwork.com/freelancers/~01e38854417524c2d1?mp_source=share",
      icon: Briefcase,
      primary: false,
      color: "bg-card border border-slate-300 dark:border-slate-800 text-foreground hover:bg-slate-50 dark:hover:bg-slate-900/60 shadow-sm hover:shadow-md",
    },
    {
      label: "LinkedIn Connect",
      href: "https://www.linkedin.com/in/isdev/",
      icon: LinkedinIcon,
      primary: false,
      color: "bg-card border border-slate-300 dark:border-slate-800 text-foreground hover:bg-slate-50 dark:hover:bg-slate-900/60 shadow-sm hover:shadow-md",
    },
  ];

  return (
    <section id="contact" className="py-24 border-t border-card-border bg-background relative overflow-hidden">
      {/* Background soft glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-card-border bg-card shadow-xs mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-expand absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-foreground/95">
            Available for remote projects — Responds within 24h
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-2xl leading-tight mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Build Something Together
        </motion.h2>

        {/* Description body */}
        <motion.p
          className="text-base text-muted font-normal max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind? I'm available for remote freelance work and direct agency contract roles. 
          Get in touch to discuss how we can automate your operations.
        </motion.p>

        {/* Buttons Grid */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <motion.a
                key={btn.label}
                href={btn.href}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all duration-200 group ${btn.color}`}
                whileHover={{ y: -2 }}
              >
                <Icon className="w-4 h-4 transition-transform group-hover:scale-105" />
                <span>{btn.label}</span>
                {btn.primary ? (
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                ) : null}
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
