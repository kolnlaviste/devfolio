"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 dark:border-[#404040] bg-white dark:bg-[#0a0a0a] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-stone-600 dark:text-[#b0b0b0] text-sm">
              Designed & built by Koln Laviste
            </p>
            <p className="text-stone-400 dark:text-stone-600 text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Right - Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-stone-100 dark:bg-[#2a2a2a] hover:bg-indigo-600 dark:hover:bg-indigo-500 text-stone-700 dark:text-[#f0f0f0] hover:text-white rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
