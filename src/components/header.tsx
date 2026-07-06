"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./theme-provider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#1c1c1c]/95 backdrop-blur-md border-b border-stone-200 dark:border-[#404040] transition-colors">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="text-lg font-black bg-gradient-to-r from-stone-900 dark:from-[#f0f0f0] to-indigo-600 dark:to-indigo-400 bg-clip-text text-transparent">
            KL
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors relative ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side - Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 text-stone-700 dark:text-[#f0f0f0] hover:bg-stone-100 dark:hover:bg-[#2a2a2a] rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-700 dark:text-[#f0f0f0] hover:bg-stone-100 dark:hover:bg-[#2a2a2a] rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-stone-200 dark:border-[#404040] pt-4">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-semibold"
                      : "text-stone-700 dark:text-[#f0f0f0] hover:bg-stone-100 dark:hover:bg-[#2a2a2a]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
