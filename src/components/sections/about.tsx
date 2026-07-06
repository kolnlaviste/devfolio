"use client";

import { motion } from "framer-motion";
import { bioData } from "@/lib/data";
import { MapPin, Briefcase, CheckCircle } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left - Bio */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <p className="text-xs tracking-widest uppercase text-stone-500 font-semibold">
                About
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-stone-900 mt-2">
                Who I Am
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {bioData.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-stone-600 dark:text-[#b0b0b0] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Right - Facts */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="p-4 bg-white dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#404040] rounded-lg transition-colors"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-500 font-semibold">
                    Location
                  </p>
                  <p className="text-stone-900 dark:text-[#f0f0f0] font-medium mt-1">
                    {bioData.location}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-4 bg-white dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#404040] rounded-lg transition-colors"
            >
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-500 font-semibold">
                    Current Role
                  </p>
                  <p className="text-stone-900 dark:text-[#f0f0f0] font-medium mt-1">
                    Software Engineer at Coolmogo
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-green-700 dark:text-green-400 font-semibold">
                    Status
                  </p>
                  <p className="text-green-900 dark:text-green-300 font-medium mt-1">
                    {bioData.availability}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
