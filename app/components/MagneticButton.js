"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

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
  onPointerMove,
  onPointerLeave,
  onPointerCancel,
  onBlur,
  style,
  variant = "primary",
  size = "md",
  className = "",
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    onPointerMove?.(e);
    if (e.defaultPrevented || e.pointerType !== "mouse" || reduceMotion || rest.disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  const wrapperProps = {
    ...rest,
    ref,
    onClick,
    style: { display: "inline-flex", ...style },
    onPointerMove: handleMove,
    onPointerLeave: (event) => {
      resetPosition();
      onPointerLeave?.(event);
    },
    onPointerCancel: (event) => {
      resetPosition();
      onPointerCancel?.(event);
    },
    onBlur: (event) => {
      resetPosition();
      onBlur?.(event);
    },
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
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      style={{ x: reduceMotion ? 0 : springX, y: reduceMotion ? 0 : springY }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      tabIndex={-1}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href} {...wrapperProps}>{content}</a>;
  }
  return (
    <button type="button" {...wrapperProps}>
      {content}
    </button>
  );
}
