"use client";

import { motion } from "framer-motion";
import { bioData } from "@/lib/data";
import { Mail, GitBranch, CheckCircle, Share2 } from "lucide-react";
import Link from "next/link";

export default function Contact() {
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
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-500 font-semibold">
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-[#f0f0f0] mt-2">
              Let's Work Together
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-stone-600 dark:text-[#b0b0b0] mt-6 max-w-xl mx-auto"
          >
            Whether you have a project in mind or just want to chat, feel free to reach out. I'm always interested in new opportunities and collaborations.
          </motion.p>

          {/* Email CTA */}
          <motion.div variants={itemVariants} className="mt-12">
            <a
              href={`mailto:${bioData.email}`}
              className="inline-flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
              >
                {bioData.email}
              </motion.div>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center gap-6 mt-12"
          >
            <motion.a
              variants={itemVariants}
              href={bioData.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-stone-100 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white rounded-full transition-colors"
            >
              <GitBranch size={24} />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href={bioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-stone-100 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white rounded-full transition-colors"
            >
              <Share2 size={24} />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href={`mailto:${bioData.email}`}
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-stone-100 dark:bg-[#2a2a2a] text-stone-700 dark:text-[#f0f0f0] hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white rounded-full transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full transition-colors"
          >
            <CheckCircle size={18} />
            <span className="font-semibold">{bioData.availability}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
