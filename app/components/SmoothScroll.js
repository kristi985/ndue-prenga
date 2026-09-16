"use client";

import { MotionConfig } from "motion/react";

export default function SmoothScroll({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
