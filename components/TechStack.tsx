"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Backend & Systems",
    items: [
      {
        name: "Laravel",
        color: "group-hover:text-[#FF2D20]",
        svg: (
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ),
      },
      {
        name: "PHP",
        color: "group-hover:text-[#777BB4]",
        svg: (
          <path d="M4 6h4a2 2 0 0 1 0 4H4m0-4v8m4-4h2a2 2 0 0 1 0 4h-2m-4 0v4m10-12h4a2 2 0 0 1 0 4h-4v4m0-4h2m-2 4h4" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
      {
        name: "Python",
        color: "group-hover:text-[#3776AB]",
        svg: (
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
    ],
  },
  {
    title: "Frontend Stack",
    items: [
      {
        name: "React",
        color: "group-hover:text-[#61DAFB]",
        svg: (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <ellipse rx="10" ry="4.5" transform="rotate(0)" />
            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
            <circle cx="0" cy="0" r="2" fill="currentColor" />
          </g>
        ),
        viewBox: "-12 -12 24 24",
      },
      {
        name: "TypeScript",
        color: "group-hover:text-[#3178C6]",
        svg: (
          <path d="M4 4h16v16H4V4zm4 6H6v8h2v-8zm8-2H10v2h3v6h2v-6h3V8z" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
      {
        name: "Inertia.js",
        color: "group-hover:text-[#9553E6]",
        svg: (
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 10v10M2 17l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
      {
        name: "Tailwind CSS",
        color: "group-hover:text-[#06B6D4]",
        svg: (
          <path d="M12 3v18M3 12h18M12 3l9 9-9 9-9-9 9-9z" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
    ],
  },
  {
    title: "Database Engines",
    items: [
      {
        name: "MySQL",
        color: "group-hover:text-[#4479A1]",
        svg: (
          <path d="M4 6v8c0 2.2 3.6 4 8 4s8-1.8 8-4V6M4 6c0 2.2 3.6 4 8 4s8-1.8 8-4M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4m-16 4v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      {
        name: "Git",
        color: "group-hover:text-[#F05032]",
        svg: (
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 5v10m-3-5h6" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
      {
        name: "Postman",
        color: "group-hover:text-[#FF6C37]",
        svg: (
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-14v5m0 4h.01" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
      {
        name: "openpyxl",
        color: "group-hover:text-[#217346]",
        svg: (
          <path d="M4 4h16v16H4V4zm4 4h8v8H8V8zm2 2v4h4v-4h-4z" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
      {
        name: "WeasyPrint",
        color: "group-hover:text-[#D34E36]",
        svg: (
          <path d="M6 18V4h8l4 4v10M6 14h12M6 10h8" fill="none" stroke="currentColor" strokeWidth="2" />
        ),
      },
    ],
  },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200, damping: 12 },
    },
  };

  return (
    <section id="tech-stack" className="py-24 border-t border-card-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tools I Work With
          </motion.h2>
          <motion.p
            className="text-sm text-muted mt-3 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My production-grade development workflow relies on modern languages, frameworks, databases, and process utilities.
          </motion.p>
        </div>

        {/* Stack Groups */}
        <div className="flex flex-col gap-12">
          {techCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted/80 mb-2">
                {category.title}
              </h3>
              
              {/* Responsive Grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="group flex flex-col items-center justify-center p-5 bg-card border border-card-border rounded-xl shadow-xs hover:shadow-sm hover:border-accent/20 cursor-default transition-all duration-300"
                  >
                    {/* SVG Icon wrapper */}
                    <div className="w-10 h-10 flex items-center justify-center text-muted/65 group-hover:filter-none transition-colors duration-300">
                      <svg
                        viewBox={item.viewBox || "0 0 24 24"}
                        className={`w-8 h-8 ${item.color} stroke-current transition-colors duration-300`}
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.svg}
                      </svg>
                    </div>

                    {/* Name */}
                    <span className="text-[11px] font-bold text-muted/80 group-hover:text-foreground mt-3 transition-colors duration-200">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
