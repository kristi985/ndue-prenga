"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Shirit i hollë ambër në krye të faqes që tregon sa ke scroll-uar.
 * I inspiruar nga faqet Awwwards Site of the Day.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}
