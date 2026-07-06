"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-400 z-50"
    />
  );
}
