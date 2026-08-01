"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * Rrethe të zbehura (blobs) që lëvizin ngadalë me scroll-in.
 * Jep efekt "ambient" premium pa qenë agresive.
 * Vendosen në sfond të seksioneve — absolute positioned.
 */
export default function AmbientBackground({ variant = "wood" }) {
  const { scrollYProgress } = useScroll();
  // Rrethi lëviz poshtë me scroll-in
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);

  const colors = {
    wood: {
      blob1: "rgba(217, 169, 95, 0.14)",
      blob2: "rgba(139, 94, 52, 0.10)",
    },
    forest: {
      blob1: "rgba(217, 169, 95, 0.10)",
      blob2: "rgba(61, 107, 79, 0.11)",
    },
  };
  const c = colors[variant] || colors.wood;

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
