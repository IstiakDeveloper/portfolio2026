"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Terminal, RefreshCw, BarChart2 } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Premium Background Blurry Blobs */}
      <div className="absolute top-1/10 left-1/10 w-80 h-80 rounded-full bg-accent/8 blur-3xl -z-10 pointer-events-none animate-mesh-1" />
      <div className="absolute bottom-1/10 right-1/10 w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-3xl -z-10 pointer-events-none animate-mesh-2" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl -z-10 pointer-events-none animate-mesh-3" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Copywriting & Actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-card-border bg-card shadow-xs mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-expand absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-foreground/95 tracking-wide">
              Available for remote projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.15] mb-6"
          >
            Building Custom Software That Replaces{" "}
            <span className="bg-gradient-to-r from-accent to-indigo-600 bg-clip-text text-transparent">
              Spreadsheets and Paperwork
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted font-normal max-w-xl leading-relaxed mb-8"
          >
            I'm Istiak Hossain — a Laravel & React developer specializing in
            business automation systems for inventory, accounting, and daily operations.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group duration-200"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-card text-foreground font-semibold hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200"
            >
              Let's Talk
              <MessageSquare className="w-4 h-4 text-muted" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Code/Dashboard Illustration */}
        <motion.div
          className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Interactive CSS Browser Window Mockup */}
          <div className="w-full max-w-md bg-card border border-card-border rounded-xl shadow-lg overflow-hidden">
            {/* Header bar */}
            <div className="bg-muted-light/60 px-4 py-3 border-b border-card-border flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
              </div>
              <div className="text-[10px] text-muted/60 font-mono tracking-wider">
                automation-system.js
              </div>
              <Terminal className="w-3.5 h-3.5 text-muted/40" />
            </div>

            {/* Core dashboard illustration */}
            <div className="p-6 font-mono text-xs flex flex-col gap-4 bg-card">
              {/* Box 1: Excel to DB Transformation */}
              <div className="border border-card-border bg-background/50 rounded-lg p-3.5 flex flex-col gap-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-red-500 dark:text-red-400 flex items-center gap-1.5">
                    📄 spreadsheet_data.xlsx
                  </span>
                  <span className="text-[10px] text-muted">Raw Inputs</span>
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <div className="flex-1 h-1.5 bg-muted-light rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-400"
                      initial={{ width: "30%" }}
                      animate={{ width: ["30%", "100%", "30%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <RefreshCw className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: '4s' }} />
                  <div className="flex-1 h-1.5 bg-muted-light rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500"
                      initial={{ width: "20%" }}
                      animate={{ width: ["20%", "100%", "20%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                    ⚙️ automated_pipeline.sql
                  </span>
                  <span className="text-[10px] text-accent">Transformed</span>
                </div>
              </div>

              {/* Box 2: Visual Code lines */}
              <div className="bg-muted-light/30 rounded-lg p-3 text-[11px] leading-relaxed text-foreground/80 border border-card-border">
                <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                <span className="text-blue-600 dark:text-blue-400">reconcileLedger</span> = (
                <span className="text-amber-600">transactions</span>) =&gt; &#123;
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">return</span> transactions.
                  <span className="text-blue-500">reduce</span>((
                  <span className="text-foreground">sum</span>,{" "}
                  <span className="text-foreground">tx</span>) =&gt; &#123;
                  <div className="pl-4">
                    <span className="text-purple-600 dark:text-purple-400">const</span> net = tx.type ==={" "}
                    <span className="text-emerald-600">"credit"</span> ? tx.val : -tx.val;
                    <br />
                    <span className="text-purple-600 dark:text-purple-400">return</span> sum + net;
                  </div>
                  &#125;, <span className="text-red-500">0</span>);
                </div>
                &#125;;
              </div>

              {/* Box 3: Mini Stat Graph */}
              <div className="border border-card-border bg-background/50 rounded-lg p-3 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted">Operations Reconciled</span>
                  <span className="text-base font-extrabold text-foreground mt-0.5">100% Error-Free</span>
                </div>
                <div className="flex items-end gap-1.5 h-8">
                  <motion.div
                    className="w-2.5 bg-accent/40 rounded-t-xs"
                    animate={{ height: [12, 28, 12] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="w-2.5 bg-accent/60 rounded-t-xs"
                    animate={{ height: [18, 10, 18] }}
                    transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="w-2.5 bg-accent/80 rounded-t-xs"
                    animate={{ height: [8, 32, 8] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="w-2.5 bg-accent rounded-t-xs"
                    animate={{ height: [24, 16, 24] }}
                    transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
