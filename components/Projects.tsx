"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Wrench, CheckCircle, Terminal, Play, Check, ChevronRight } from "lucide-react";

export default function Projects() {
  // Case Study 1 States (Rice Mill)
  const [millSeason, setMillSeason] = useState<"boro" | "aman">("boro");
  const [millReportType, setMillReportType] = useState<"ledger" | "due">("ledger");

  // Case Study 2 States (Pharmacy)
  const [creditLimit, setCreditLimit] = useState(25000);
  const [purchaseAmount, setPurchaseAmount] = useState(18000);
  const isCreditBlocked = purchaseAmount > creditLimit;

  // Case Study 3 States (Hospital)
  const [hospDept, setHospDept] = useState<"general" | "medicine" | "optics">("general");

  // Case Study 4 States (Microfinance Pipeline)
  const [pipelineProgress, setPipelineProgress] = useState(0);
  const [pipelineLog, setPipelineLog] = useState<string[]>([]);
  const [pipelineRunning, setPipelineRunning] = useState(false);

  const runPipeline = () => {
    if (pipelineRunning) return;
    setPipelineRunning(true);
    setPipelineProgress(0);
    setPipelineLog(["Initializing Python script...", "Loading openpyxl engine..."]);

    const steps = [
      { progress: 20, log: "Parsing 42 branch directories..." },
      { progress: 45, log: "Aggregating 2,100 samities (groups)..." },
      { progress: 70, log: "Resolving Bengali Unicode text anomalies..." },
      { progress: 90, log: "Structuring consolidated sheet schemas..." },
      { progress: 100, log: "SUCCESS: 42 branches reconciled, JSON output saved." },
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setPipelineProgress(step.progress);
        setPipelineLog((prev) => [...prev, step.log]);
        if (step.progress === 100) {
          setPipelineRunning(false);
        }
      }, (idx + 1) * 800);
    });
  };

  const projectList = [
    {
      id: 1,
      title: "Rice Mill Operations & Automation System",
      tech: ["Laravel 12", "Inertia.js", "React 19", "TypeScript", "MySQL"],
      problem: "A rice milling business tracked two seasonal cycles (Boro and Aman) using paper ledgers and disconnected spreadsheets — leading to reconciliation errors and no reliable way to track customer dues.",
      solution: "Built a full transaction management system with a single financial source of truth — every payment routes through one central service to eliminate duplicate entries. Designed six purpose-built, print-first reports (Day Book, Customer Ledger, Due List, Season Summary, Payment Collection, Bag Usage).",
      result: "Eliminated duplicate financial entries, gave the owner real-time season performance visibility, and reduced end-of-season reporting from days to a single click.",
      renderMockup: () => (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-card-border pb-3 mb-3">
            <span className="text-[11px] font-bold text-accent">🍚 Rice Mill ERP v1.2</span>
            <div className="flex gap-2">
              <button
                onClick={() => setMillSeason("boro")}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                  millSeason === "boro"
                    ? "bg-accent text-white shadow-xs"
                    : "bg-muted-light text-muted hover:bg-card-border"
                }`}
              >
                Boro Season
              </button>
              <button
                onClick={() => setMillSeason("aman")}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                  millSeason === "aman"
                    ? "bg-accent text-white shadow-xs"
                    : "bg-muted-light text-muted hover:bg-card-border"
                }`}
              >
                Aman Season
              </button>
            </div>
          </div>

          {/* Mini Interactive View */}
          <div className="flex-1 bg-background/50 border border-card-border rounded-lg p-3 text-[10px] font-sans">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-foreground">
                {millSeason === "boro" ? "Boro Season Ledger" : "Aman Season Ledger"}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setMillReportType("ledger")}
                  className={`underline cursor-pointer ${millReportType === "ledger" ? "text-accent font-bold" : "text-muted"}`}
                >
                  Ledger
                </button>
                <span className="text-card-border">|</span>
                <button
                  onClick={() => setMillReportType("due")}
                  className={`underline cursor-pointer ${millReportType === "due" ? "text-accent font-bold" : "text-muted"}`}
                >
                  Due List
                </button>
              </div>
            </div>

            {millReportType === "ledger" ? (
              <div className="flex flex-col gap-1.5 font-mono">
                <div className="flex justify-between border-b border-card-border pb-1 font-bold text-foreground">
                  <span>Customer</span>
                  <span>Credit</span>
                  <span>Debit</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Kabir Traders</span>
                  <span>৳ 45,000</span>
                  <span>৳ 45,000</span>
                </div>
                <div className="flex justify-between text-muted border-b border-dashed border-card-border pb-1">
                  <span>Rahman Rice</span>
                  <span>৳ {millSeason === "boro" ? "1,20,000" : "95,000"}</span>
                  <span>৳ {millSeason === "boro" ? "90,000" : "95,000"}</span>
                </div>
                <div className="flex justify-between font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Total Reconciled</span>
                  <span>{millSeason === "boro" ? "৳ 1,65,000" : "৳ 1,40,000"}</span>
                  <span>{millSeason === "boro" ? "৳ 1,35,000" : "৳ 1,40,000"}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5 font-mono">
                <div className="flex justify-between border-b border-card-border pb-1 font-bold text-red-500">
                  <span>Pending Customer</span>
                  <span>Outstanding Dues</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Rahman Rice</span>
                  <span className="text-red-500 font-bold">৳ {millSeason === "boro" ? "30,000" : "0 (Settled)"}</span>
                </div>
                <div className="flex justify-between text-muted border-b border-dashed border-card-border pb-1">
                  <span>Hassan & Sons</span>
                  <span className="text-red-500 font-bold">৳ {millSeason === "boro" ? "12,500" : "18,400"}</span>
                </div>
                <div className="flex justify-between font-bold text-foreground">
                  <span>Total Outstanding</span>
                  <span>{millSeason === "boro" ? "৳ 42,500" : "৳ 18,400"}</span>
                </div>
              </div>
            )}
          </div>

          <div className="text-[9px] text-muted italic mt-2.5 flex items-center justify-between">
            <span>💡 Click tabs to simulate seasons & reports</span>
            <span className="text-emerald-500 font-bold">✓ Print-Ready Ledger API active</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Pharmacy Management — Supplier & Purchase",
      tech: ["Laravel", "React", "TypeScript", "MySQL"],
      problem: "A pharmacy needed a reliable way to manage supplier relationships, purchase orders, and inventory — while enforcing credit limits and tracking expiry dates to avoid stock losses.",
      solution: "Built a full Supplier & Purchase Module following a strict Controller → Service → Repository → Model architecture, with credit limit management, FEFO (First-Expiry-First-Out) inventory logic, partial receiving support, and multiple payment methods.",
      result: "Gave the pharmacy accurate, real-time inventory tracking and reduced financial risk through automated credit limit enforcement.",
      renderMockup: () => (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-card-border pb-3 mb-3">
            <span className="text-[11px] font-bold text-accent">💊 RxInventory Hub</span>
            <span className="text-[9px] text-muted">Credit Limit Control</span>
          </div>

          {/* Supplier Purchase Simulator */}
          <div className="flex-1 bg-background/50 border border-card-border rounded-lg p-3 text-[10px] flex flex-col gap-2 font-sans">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-foreground font-semibold">Active Supplier: Acme Pharma</span>
              <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                isCreditBlocked ? "bg-red-500/10 text-red-500 border border-red-500/20" : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
              }`}>
                {isCreditBlocked ? "BLOCKED: Over Limit" : "APPROVED: Credit Valid"}
              </span>
            </div>

            {/* Range sliders to interact */}
            <div className="flex flex-col gap-1.5 mt-1">
              <div className="flex justify-between text-[9px] text-muted">
                <span>Supplier Credit Limit: ৳ {creditLimit.toLocaleString()}</span>
                <span className="text-foreground">Set Limit</span>
              </div>
              <input
                type="range"
                min="10000"
                max="50000"
                step="5000"
                value={creditLimit}
                onChange={(e) => setCreditLimit(Number(e.target.value))}
                className="w-full h-1 bg-muted-light rounded-lg appearance-none cursor-pointer accent-accent"
              />

              <div className="flex justify-between text-[9px] text-muted mt-1">
                <span>New Purchase Cost: ৳ {purchaseAmount.toLocaleString()}</span>
                <span className="text-foreground">Set Cost</span>
              </div>
              <input
                type="range"
                min="5000"
                max="45000"
                step="2000"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                className="w-full h-1 bg-muted-light rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            {/* FEFO Expiry Reminder List */}
            <div className="border-t border-card-border pt-2 mt-1">
              <span className="text-[9px] text-muted uppercase tracking-wider font-bold">FEFO Expiry Warnings</span>
              <div className="flex justify-between items-center text-[9px] text-orange-600 dark:text-orange-400 mt-1 font-mono">
                <span>Paracetamol (Batch A9)</span>
                <span>Exp: 10/2026 (Sell First)</span>
              </div>
            </div>
          </div>

          <div className="text-[9px] text-muted italic mt-2.5">
            <span>💡 Slide controls to test automatic credit limit check</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Hospital Management — Test & Accounting Modules",
      tech: ["Laravel", "React", "TypeScript", "MySQL"],
      problem: "A hospital needed a way to manage patient test records and generate accurate financial reports across multiple departments (general hospital, medicine, and optics).",
      solution: "Developed a medical test management module with grouped patient entries and A4 receipt printing, along with accounting modules generating Trial Balance, Balance Sheet, Profit & Loss, and Cash Flow reports in traditional column layouts.",
      result: "Streamlined patient test record-keeping and gave hospital administration accurate, print-ready financial reports across all departments.",
      renderMockup: () => (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-card-border pb-3 mb-3">
            <span className="text-[11px] font-bold text-accent">🏥 MedAccounting Portal</span>
            <div className="flex gap-1.5">
              {["general", "medicine", "optics"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setHospDept(dept as any)}
                  className={`px-1.5 py-0.5 rounded text-[9px] capitalize ${
                    hospDept === dept ? "bg-accent/10 text-accent font-bold" : "text-muted hover:bg-muted-light"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Department Sheet view */}
          <div className="flex-1 bg-background/50 border border-card-border rounded-lg p-3 text-[10px] font-sans flex flex-col justify-between">
            <div>
              <span className="font-bold text-foreground capitalize">{hospDept} Division Cash Sheet</span>
              <div className="flex flex-col gap-1 mt-2 font-mono text-[9px]">
                <div className="flex justify-between border-b border-card-border pb-0.5 text-muted">
                  <span>Revenue Item</span>
                  <span>Amount</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>
                    {hospDept === "general" ? "CBC & Blood Tests" : hospDept === "medicine" ? "Pharmacy Inflow" : "Optics & Lens Sales"}
                  </span>
                  <span>
                    {hospDept === "general" ? "৳ 78,500" : hospDept === "medicine" ? "৳ 1,22,400" : "৳ 43,900"}
                  </span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Consultancy Fees</span>
                  <span>
                    {hospDept === "general" ? "৳ 32,000" : hospDept === "medicine" ? "৳ 15,000" : "৳ 8,500"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-dashed border-card-border pt-1 font-bold text-accent">
                  <span>Net Ledger Flow</span>
                  <span>
                    {hospDept === "general" ? "৳ 1,10,500" : hospDept === "medicine" ? "৳ 1,37,400" : "৳ 52,400"}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-card-border pt-2 mt-2 flex items-center justify-between text-[9px]">
              <span className="text-emerald-500 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> A4 Receipt Generated
              </span>
              <span className="underline text-accent hover:opacity-80 cursor-pointer">Preview PDF</span>
            </div>
          </div>

          <div className="text-[9px] text-muted italic mt-2.5">
            <span>💡 Click department tabs to inspect balance adjustments</span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Microfinance Data Processing & Structuring",
      tech: ["Python", "openpyxl", "Excel Automation"],
      problem: "An NGO with 42 branches and over 2,100 microfinance groups (samities) needed branch-level data aggregated into regional and zonal reports — a process complicated by Bengali Unicode text matching.",
      solution: "Built Python-based data processing pipelines using openpyxl to extract, clean, and aggregate branch, employee, and field officer data into structured Excel and JSON outputs — solving Bengali Unicode matching challenges along the way.",
      result: "Delivered accurate, structured regional and zonal reports, reducing what was previously a manual, error-prone process to an automated pipeline.",
      renderMockup: () => (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-card-border pb-3 mb-3">
            <span className="text-[11px] font-bold text-accent">🐍 openpyxl ETL Pipeline</span>
            <span className="text-[9px] text-muted font-mono">bengali_unicode.py</span>
          </div>

          {/* Running pipeline output */}
          <div className="flex-1 bg-background/50 border border-card-border rounded-lg p-3 font-mono text-[9px] flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-1 overflow-y-auto max-h-[85px] no-scrollbar">
              {pipelineLog.length === 0 ? (
                <div className="text-muted italic flex items-center justify-center h-14">
                  Pipeline Idle. Ready to run.
                </div>
              ) : (
                pipelineLog.map((log, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-1 leading-tight ${
                      log.startsWith("SUCCESS") ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-foreground/90"
                    }`}
                  >
                    <ChevronRight className="w-2.5 h-2.5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{log}</span>
                  </div>
                ))
              )}
            </div>

            {/* Progress and trigger button */}
            <div className="flex items-center gap-3 mt-3 border-t border-card-border pt-2.5">
              <div className="flex-1 bg-muted-light rounded-full h-2 overflow-hidden">
                <div
                  className="bg-accent h-full transition-all duration-300"
                  style={{ width: `${pipelineProgress}%` }}
                />
              </div>
              <button
                onClick={runPipeline}
                disabled={pipelineRunning}
                className="px-2.5 py-1 rounded bg-accent text-white text-[10px] font-bold hover:bg-accent-hover transition-all flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Play className="w-2.5 h-2.5 fill-current" /> Run ETL
              </button>
            </div>
          </div>

          <div className="text-[9px] text-muted italic mt-2.5 flex items-center justify-between">
            <span>💡 Run ETL to simulate NGO data reconciliation</span>
            <span className="text-foreground/80 font-semibold">{pipelineProgress}% Complete</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-card-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Case Studies
          </motion.h2>
          <motion.p
            className="text-sm text-muted mt-3 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A deep dive into production-grade systems built for real operations, 
            focusing on performance, data integrity, and architectural separation.
          </motion.p>
        </div>

        {/* Project Lists Stack */}
        <div className="flex flex-col gap-24">
          {projectList.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Left/Right Text Section */}
                <motion.div
                  className={`lg:col-span-6 flex flex-col items-start ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2 py-0.5 rounded bg-accent/5 border border-accent/15 text-accent hover:bg-accent/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-foreground tracking-tight mb-6">
                    {project.title}
                  </h3>

                  {/* Problem -> Solution -> Result lists */}
                  <div className="flex flex-col gap-4 font-sans text-sm">
                    {/* Problem */}
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground/95 text-xs uppercase tracking-wider">Problem</h4>
                        <p className="text-muted mt-1 leading-relaxed">{project.problem}</p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="flex gap-3">
                      <Wrench className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground/95 text-xs uppercase tracking-wider">Solution</h4>
                        <p className="text-muted mt-1 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground/95 text-xs uppercase tracking-wider">Result</h4>
                        <p className="text-muted mt-1 leading-relaxed">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Left/Right Mockup Section */}
                <motion.div
                  className={`lg:col-span-6 flex justify-center w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Browser Window Mockup Frame */}
                  <div className="w-full max-w-lg bg-card border border-card-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Header dots */}
                    <div className="bg-muted-light/60 px-4 py-3 border-b border-card-border flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                      </div>
                      <div className="text-[9px] text-muted/65 font-mono">
                        localhost:3000/casestudy_{project.id}
                      </div>
                      <Terminal className="w-3.5 h-3.5 text-muted/30" />
                    </div>

                    {/* Browser Content container (renders specific mockup function) */}
                    <div className="p-4 sm:p-5 bg-card min-h-[220px] overflow-x-auto no-scrollbar">
                      <div className="min-w-[280px]">
                        {project.renderMockup()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
