"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

export default function Skills() {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-500 font-semibold">
              Skills
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-[#f0f0f0] mt-2">
              What I Work With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(skillsData).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="p-6 bg-white dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#404040] rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-lg font-bold text-stone-900 dark:text-[#f0f0f0]">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.lucideIcon;
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-stone-100 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] text-sm font-medium rounded-full flex items-center gap-1.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default"
                        >
                          <SkillIcon className="w-3.5 h-3.5" />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
