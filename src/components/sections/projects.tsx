"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { GitBranch, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

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

  // Get all unique technologies
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach((p) => p.technologies.forEach((t) => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  // Filter projects by selected tech
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projectsData;
    return projectsData.filter((p) => p.technologies.includes(selectedTech));
  }, [selectedTech]);

  // Designate first two projects as featured (large)
  const featuredProjects = filteredProjects.slice(0, 2);
  const regularProjects = filteredProjects.slice(2);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-500 font-semibold">
              Projects
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-[#f0f0f0] mt-2">
              Featured Work
            </h2>
          </motion.div>

          {/* Tech Filter */}
          <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTech === null
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                  : "bg-stone-200 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] hover:bg-stone-300 dark:hover:bg-[#333333]"
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === tech
                    ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                    : "bg-stone-200 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] hover:bg-stone-300 dark:hover:bg-[#333333]"
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {/* Featured Projects - Large Cards */}
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#404040] rounded-2xl overflow-hidden group cursor-pointer transition-colors"
              >
                <div className="relative h-full w-full flex flex-col">
                  {/* Image */}
                  <div className="relative w-full h-2/3 overflow-hidden bg-stone-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-[#f0f0f0] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-stone-600 dark:text-[#b0b0b0] line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-stone-100 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] rounded font-mono transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-stone-100 dark:bg-[#2a2a2a] text-stone-600 dark:text-[#b0b0b0] transition-colors">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-stone-100 rounded transition-colors"
                        >
                          <GitBranch className="w-4 h-4 text-stone-600" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-stone-100 rounded transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-stone-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Regular Projects - Smaller Cards */}
            {regularProjects.map((project, idx) => (
              <motion.div
                key={idx + 2}
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                className="md:col-span-2 bg-white dark:bg-[#1c1c1c] border border-stone-200 dark:border-[#404040] rounded-2xl overflow-hidden group cursor-pointer flex flex-col transition-colors"
              >
                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden bg-stone-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-[#f0f0f0] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-[#b0b0b0] line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-stone-100 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] rounded font-mono transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-stone-100 dark:bg-[#2a2a2a] text-stone-600 dark:text-[#b0b0b0] transition-colors">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-stone-100 rounded transition-colors"
                      >
                        <GitBranch className="w-4 h-4 text-stone-600" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-stone-100 rounded transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-stone-600" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
