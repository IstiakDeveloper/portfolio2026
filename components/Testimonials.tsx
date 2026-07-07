"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// TOGGLE THIS TO TRUE TO ENABLE TESTIMONIALS ON THE LIVE SITE
const showTestimonials = false;

const testimonialsData = [
  {
    quote: "Istiak transformed our paper-based inventory ledger into a lightning-fast Laravel app. Our reconciliations now take minutes instead of days.",
    author: "Alamin Rahman",
    role: "Owner, Rahman Rice Mills",
    stars: 5,
  },
  {
    quote: "The hospital medical test receipt generator he built is extremely simple and print-first. It handles our daily department billing flawlessly.",
    author: "Dr. Farhana",
    role: "Admin Manager, General Hospital Division",
    stars: 5,
  },
  {
    quote: "Excellent Python automation script. Clean Unicode normalization. Highly recommended developer for complex operational flows.",
    author: "Upwork Client",
    role: "Operational Lead, Microfinance NGO",
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!showTestimonials) return;

    const startTimer = () => {
      timerRef.current = setInterval(() => {
        if (!isHovered.current) {
          nextSlide();
        }
      }, 5500);
    };

    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  if (!showTestimonials) {
    // Return null so the section does not render on the live site as requested
    return null;
  }

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Slider animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 border-t border-card-border bg-card/30"
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Client Testimonials
          </h2>
          <p className="text-sm text-muted mt-2">
            What clients say about custom business operations automation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full min-h-[220px] bg-card border border-card-border rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-center items-center text-center overflow-hidden">
          
          {/* Large decorative quotation mark background */}
          <Quote className="absolute top-6 left-8 w-20 h-20 text-accent/5 -z-10" />

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonialsData[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-base md:text-lg italic font-medium leading-relaxed text-foreground/90 max-w-2xl mb-6">
                "{testimonialsData[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div>
                <cite className="not-italic font-bold text-foreground block">
                  {testimonialsData[activeIndex].author}
                </cite>
                <span className="text-xs text-muted block mt-0.5">
                  {testimonialsData[activeIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 p-1.5 rounded-full border border-card-border bg-card text-muted hover:text-foreground hover:bg-muted-light transition-all shadow-xs"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-3 p-1.5 rounded-full border border-card-border bg-card text-muted hover:text-foreground hover:bg-muted-light transition-all shadow-xs"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex gap-2 mt-6">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-accent w-4" : "bg-card-border hover:bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
