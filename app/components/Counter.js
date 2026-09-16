"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
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
  const reduceMotion = useReducedMotion();
  // Keep the real value readable before hydration and without JavaScript.
  const motionValue = useMotionValue(value);

  const display = useTransform(motionValue, (latest) => {
    return prefix + Math.round(latest).toLocaleString("sq-AL") + suffix;
  });

  useEffect(() => {
    if (reduceMotion || duration <= 0) {
      motionValue.set(value);
      return;
    }
    if (!inView) return;

    const animation = animate(motionValue, [0, value], {
      duration,
      ease: "easeOut",
      onComplete: () => motionValue.set(value),
    });

    return () => animation.stop();
  }, [inView, value, duration, reduceMotion, motionValue]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
