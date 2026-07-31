"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * Rrethe të zbehura (blobs) që lëvizin ngadalë me scroll-in.
 * Jep efekt "ambient" premium pa qenë agresive.
 * Vendosen në sfond të seksioneve — absolute positioned.
 */
export default function AmbientBackground({ variant = "amber" }) {
  const { scrollYProgress } = useScroll();
  // Rrethi lëviz poshtë me scroll-in
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);

  const colors = {
    amber: {
      blob1: "rgba(255, 90, 31, 0.10)",
      blob2: "rgba(255, 122, 60, 0.08)",
    },
    forest: {
      blob1: "rgba(110, 130, 150, 0.10)",
      blob2: "rgba(255, 90, 31, 0.07)",
    },
  };
  const c = colors[variant] || colors.amber;

  return (
    <div className="ambient-bg" aria-hidden="true">
      <motion.div
        className="blob blob-1"
        style={{
          y: y1,
          background: `radial-gradient(circle, ${c.blob1}, transparent 70%)`,
        }}
      />
      <motion.div
        className="blob blob-2"
        style={{
          y: y2,
          background: `radial-gradient(circle, ${c.blob2}, transparent 70%)`,
        }}
      />
    </div>
  );
}
