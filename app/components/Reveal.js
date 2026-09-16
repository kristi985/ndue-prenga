"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: "0px 0px 100px 0px" };

export default function Reveal({ children, delay = 0, y = 12, className = "", as = "div" }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: reduced ? 0 : 0.35, ease: EASE, delay: reduced ? 0 : delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({ children, className = "", stagger = 0.06 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 12 },
        show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.35, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
