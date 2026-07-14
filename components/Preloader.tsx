"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_LOGO, SITE_LOGO_ALT, SITE_NAME } from "@/lib/site-config";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader has already run in this session to protect UX
    const hasVisited = sessionStorage.getItem("preloader_shown");
    if (hasVisited === "true") {
      setLoading(false);
      return;
    }

    // Simulate cinematic, smooth progress counting up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("preloader_shown", "true");
          }, 400); // Wait a bit at 100% for smooth exit
          return 100;
        }
        
        // Steady, premium progress speed (takes about 1.5 seconds)
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0f19] text-white"
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="flex flex-col items-center gap-5 max-w-xs w-full px-6">
            
            {/* Glowing developer brand logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <Image
                src={SITE_LOGO}
                alt={SITE_LOGO_ALT}
                width={72}
                height={72}
                className="rounded-full object-cover ring-2 ring-accent/40"
                priority
              />
              <span className="text-sm font-bold tracking-widest text-white/90">
                {SITE_NAME}
              </span>
            </motion.div>

            {/* Glowing progress line */}
            <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-accent shadow-[0_0_8px_#2563eb]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* System Status and Percentage Details */}
            <div className="flex justify-between items-center w-full text-[9px] tracking-widest font-mono text-muted uppercase font-semibold">
              <span className="animate-pulse">Loading Systems...</span>
              <span className="text-white text-xs font-extrabold">{progress}%</span>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
