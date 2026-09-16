"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { theme, resolvedTheme, forcedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (!mounted) {
    return <span style={{ width: 42, height: 42, display: "inline-block" }} />;
  }

  const isDark = (forcedTheme ?? resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      disabled={Boolean(forcedTheme)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Kalo në light mode" : "Kalo në dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            style={{ display: "grid", placeItems: "center" }}
          >
            ☀️
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            style={{ display: "grid", placeItems: "center" }}
          >
            🌙
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
