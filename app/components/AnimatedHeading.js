"use client";

import { motion } from "motion/react";

/**
 * Titull që animon fjalë-pas-fjale kur hyn në viewport.
 * Çdo fjalë rritet nga poshtë (translateY + opacity).
 */
export default function AnimatedHeading({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
}) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      style={{ display: "contents" }}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
            <motion.span
              style={{ display: "inline-block", willChange: "transform" }}
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
