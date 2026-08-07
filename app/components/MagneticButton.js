"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Buton "magnetik" — tërhiqet pak nga mausi kur i afrohesh.
 * Efekt premium i kopjuar nga faqet Awwwards.
 *
 * Përdorim: <MagneticButton href="#kontakt" variant="primary">Tekst</MagneticButton>
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClass = size === "lg" ? "btn-lg" : "";
  const variantClass =
    variant === "ghost"
      ? "btn-ghost"
      : variant === "dark"
        ? "btn-dark"
        : variant === "wa"
          ? "btn-wa"
          : variant === "none"
            ? ""
            : "btn-primary";

  const content = (
    <motion.span
      ref={ref}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href} {...rest}>{content}</a>;
  }
  return (
    <button onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
