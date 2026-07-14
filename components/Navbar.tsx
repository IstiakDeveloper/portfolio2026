"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Read theme on mount
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = (storedTheme as "light" | "dark") || systemTheme;
    
    setTheme(activeTheme);
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Scroll listener for sticky styles
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-card-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          Istiak <span className="text-accent">Hossain</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-card text-foreground hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all shadow-sm cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex md:hidden items-center gap-4">
          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-card text-foreground hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all shadow-sm cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-card text-foreground hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all shadow-sm cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-card border-l border-card-border z-40 p-8 pt-24 shadow-lg transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors block py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay Background (Closes menu on click) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-30 md:hidden"
        />
      )}
    </nav>
  );
}
