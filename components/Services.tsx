"use client";

import { motion } from "framer-motion";
import { Workflow, Package, BarChart3, Plug } from "lucide-react";

const services = [
  {
    title: "Business Process Automation",
    description:
      "Turning manual, paper-based workflows into reliable software — reducing errors and saving hours of manual work every week.",
    icon: Workflow,
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-500",
  },
  {
    title: "Inventory & Accounting Systems",
    description:
      "Custom-built systems for tracking stock, sales, dues, and daily cash flow — with a single source of truth for every transaction.",
    icon: Package,
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
  },
  {
    title: "Custom Reporting & Dashboards",
    description:
      "Print-ready reports and real-time dashboards that turn raw data into decisions — no more manual spreadsheet compilation.",
    icon: BarChart3,
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
  },
  {
    title: "API Integration & Backend Architecture",
    description:
      "Clean, maintainable backend systems using Repository/Service patterns — built to scale without breaking.",
    icon: Plug,
    color: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
  },
];

export default function Services() {
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
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="services" className="py-24 border-t border-card-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="text-sm text-muted mt-3 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I design and build tailored software solutions that solve real business problems, 
            improving efficiency, accuracy, and reporting clarity.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                className="group relative bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                {/* Icon wrapper with custom gradient bg */}
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center`}
                >
                  {/* Micro-interaction bounce on icon */}
                  <motion.div
                    variants={{
                      hover: { scale: 1.15, rotate: 10 },
                    }}
                    whileHover="hover"
                    transition={{ type: "spring" as const, stiffness: 300, damping: 10 }}
                  >
                    <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                  </motion.div>
                </div>

                {/* Service Text details */}
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                
                {/* Bottom hover highlight line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
          >
            View all developer services →
          </a>
        </div>

      </div>
    </section>
  );
}
