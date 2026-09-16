"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "motion/react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { theme, resolvedTheme, forcedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const reduceMotion = useReducedMotion();

  if (!mounted) {
    return <span aria-hidden="true" style={{ width: 42, height: 42, display: "inline-block" }} />;
  }

  const isDark = (forcedTheme ?? resolvedTheme ?? theme) === "dark";
  const label = isDark ? "Aktivizo pamjen e çelët" : "Aktivizo pamjen e errët";

  return (
    <button
      type="button"
      className="theme-toggle"
      disabled={Boolean(forcedTheme)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={reduceMotion ? false : { opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.15 }}
        style={{ display: "grid", placeItems: "center" }}
        aria-hidden="true"
      >
        {isDark ? (
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round" focusable="false"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
          </svg>
        ) : (
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round" focusable="false"
          >
            <path d="M20.9 13.15A9 9 0 0 1 10.85 3.1a9 9 0 1 0 10.05 10.05Z" />
          </svg>
        )}
      </motion.span>
    </button>
  );
}
