"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

/**
 * Numërues që animon nga 0 → target kur hyn në viewport.
 * P.sh. <Counter value={2500} suffix="+" /> → "0" ... "2,500+"
 */
export default function Counter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 40,
    damping: 18,
    duration,
  });

  const display = useTransform(spring, (latest) => {
    return prefix + Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
