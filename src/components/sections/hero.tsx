"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 relative"
    >
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <motion.div
          className="space-y-8 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2"
          >
            <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">Hey, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-7xl sm:text-8xl font-black text-stone-900 dark:text-[#f0f0f0] leading-tight tracking-tight">
              Koln Laviste
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-600 dark:text-[#b0b0b0]">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-stone-600 dark:text-[#b0b0b0] max-w-lg leading-relaxed"
          >
            Building modern, scalable applications with cutting-edge technologies. Passionate about clean code, great UX, and solving complex problems with elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="#projects">
              <button className="pulse-glow w-full sm:w-auto px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                Explore Work
                <ArrowRight size={18} />
              </button>
            </Link>
            <a href="/assets/resume.pdf" download="koln-laviste-resume.pdf">
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
