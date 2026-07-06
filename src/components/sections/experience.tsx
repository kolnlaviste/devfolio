"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-500 font-semibold">
              Experience
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-[#f0f0f0] mt-2">
              Work History
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-1 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-[#0a0a0a] rounded-full transition-colors" />

                <div className="bg-white dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#404040] rounded-xl p-6 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-[#f0f0f0]">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="text-sm text-stone-500 dark:text-stone-500 font-mono">
                        {exp.period}
                      </p>
                      <p className="text-xs text-stone-400 dark:text-stone-500">{exp.employment}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 dark:text-[#b0b0b0] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full font-medium transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Current Badge */}
                  {exp.current && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full transition-colors">
                      <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse" />
                      Currently here
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
