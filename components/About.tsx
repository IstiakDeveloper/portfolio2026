"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Users } from "lucide-react";
import { SITE_LOGO, SITE_LOGO_ALT } from "@/lib/site-config";

// CountUp component to animate numbers
function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 border-t border-card-border bg-card/30" itemScope itemType="https://schema.org/Person">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Dynamic SVG Programmer Illustration with Image Fallback */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[360px] aspect-square rounded-2xl bg-gradient-to-tr from-accent/5 to-indigo-500/5 p-4 border border-card-border shadow-sm flex items-center justify-center overflow-hidden">
              {/* Inner glowing circle */}
              <div className="absolute inset-8 rounded-full border border-accent/10 bg-accent/2 animate-pulse" style={{ animationDuration: '4s' }} />
              
              {!imageError ? (
                <Image
                  src={SITE_LOGO}
                  alt={SITE_LOGO_ALT}
                  width={360}
                  height={360}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover rounded-xl z-10 transition-all duration-300"
                  itemProp="image"
                />
              ) : (
                /* Theme-aware responsive SVG illustration */
                <svg
                  viewBox="0 0 200 200"
                  className="w-4/5 h-4/5 text-accent stroke-current z-10"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Desk Line */}
                  <line x1="20" y1="170" x2="180" y2="170" stroke="var(--card-border)" strokeWidth="3" />
                  
                  {/* Server Rack */}
                  <rect x="30" y="90" width="30" height="70" rx="3" stroke="var(--muted)" className="opacity-40" />
                  <line x1="36" y1="105" x2="42" y2="105" stroke="var(--muted)" />
                  <line x1="36" y1="125" x2="54" y2="125" />
                  <line x1="36" y1="145" x2="48" y2="145" />
                  <circle cx="54" cy="105" r="1.5" fill="currentColor" className="text-emerald-500" />
                  <circle cx="54" cy="145" r="1.5" fill="currentColor" className="text-accent animate-ping" />

                  {/* Laptop / Screen */}
                  <rect x="80" y="100" width="60" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeWidth="2" />
                  {/* Screen lines */}
                  <path d="M90 110 h40 M90 120 h30 M90 130 h20" stroke="var(--muted)" strokeWidth="1" className="opacity-60" />
                  {/* Stand */}
                  <path d="M105 140 l-5 25 h20 l-5-25" />
                  {/* Laptop Base */}
                  <path d="M70 165 h80" strokeWidth="2.5" />

                  {/* Floating Tech Badges (Pulsing / Floating) */}
                  <g className="animate-bounce" style={{ animationDuration: '6s' }}>
                    {/* React Icon bubble */}
                    <circle cx="150" cy="65" r="14" fill="var(--card)" stroke="currentColor" />
                    <path d="M144 65 a6 3 0 0 1 12 0 a6 3 0 0 1 -12 0" strokeWidth="1" />
                    <path d="M147 62 a3 6 0 0 1 6 0 a3 6 0 0 1 -6 0" strokeWidth="1" />
                  </g>

                  <g className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    {/* PHP / Laravel Icon bubble */}
                    <circle cx="50" cy="50" r="14" fill="var(--card)" stroke="currentColor" />
                    <path d="M44 50 l4-6 v12 M50 44 l2 6 h4" strokeWidth="1" />
                  </g>

                  {/* Code brackets float */}
                  <text x="135" y="125" fill="currentColor" className="text-accent/40 font-mono text-[16px] font-bold">&lt;/&gt;</text>
                  <text x="75" y="80" fill="currentColor" className="text-accent/30 font-mono text-[14px] font-bold">&#123; &#125;</text>
                </svg>
              )}
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-foreground mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="text-base text-muted font-normal space-y-5 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p>
                I&apos;m a self-taught website developer and software developer working remotely
                with organizations across microfinance, healthcare, and education.
                Over the past several years, I&apos;ve built production software that handles real money,
                real inventory, and real daily operations — for rice mills, pharmacies, hospitals,
                and microfinance institutions worldwide.
              </p>
              <p>
                I care about clean architecture that doesn't break as a business grows. My work follows
                strict separation of concerns —{" "}
                <span className="text-accent font-semibold">Repository and Service patterns</span>, single
                sources of truth for financial logic, and interfaces that are simple enough for non-technical
                staff to use every day.
              </p>
              <p>
                When I'm not building software, I'm exploring design and branding work, or diving deeper
                into modern React patterns.
              </p>
            </motion.div>

            {/* Premium Stat Cards Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mt-10">
              {[
                {
                  value: 9,
                  suffix: "+",
                  label: "Years Experience",
                  icon: <Cpu className="w-4 h-4 text-accent" />,
                },
                {
                  value: 50,
                  suffix: "+",
                  label: "Systems Built",
                  icon: <ShieldCheck className="w-4 h-4 text-accent" />,
                },
                {
                  value: 5,
                  suffix: "+",
                  label: "Industries Served",
                  icon: <Users className="w-4 h-4 text-accent" />,
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-card border border-card-border rounded-xl p-2.5 sm:p-4 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-lg sm:text-2xl font-extrabold text-foreground tracking-tight">
                      <CountUp target={stat.value} />
                      {stat.suffix}
                    </span>
                    <p className="text-[9px] sm:text-[11px] font-medium text-muted uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
