"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";

const LINKS = [
  { href: "#produktet", label: "Produktet", n: "01" },
  { href: "#perse-ne", label: "Pse ne", n: "02" },
  { href: "#procesi", label: "Procesi", n: "03" },
  { href: "#kontakt", label: "Kontakt", n: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const toggleRef = useRef(null);
  const directionRef = useRef(0);
  const anchorRef = useRef(0);
  const menuId = useId();
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    if (open || focused || reduceMotion || y <= 160) {
      setHidden(false);
      anchorRef.current = y;
      directionRef.current = 0;
      return;
    }

    const direction = Math.sign(y - prev);
    if (!direction) return;
    if (direction !== directionRef.current) {
      directionRef.current = direction;
      anchorRef.current = prev;
    }
    // Require deliberate movement in one direction instead of 1px jitter.
    if (Math.abs(y - anchorRef.current) < 20) return;
    setHidden(direction > 0);
    anchorRef.current = y;
  });

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      setHidden(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={false}
      animate={{ y: hidden && !open && !focused && !reduceMotion ? "-110%" : "0%", opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
      onFocusCapture={() => {
        setFocused(true);
        setHidden(false);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="nav-pill">
        <a href="#kryefaqja" className="brand" onClick={() => setOpen(false)}>
          <Logo size={32} />
          <span className="brand-text">NDUE PRENGA</span>
          <span className="brand-tag">SH56 — TIRANË</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              <span className="nav-n">{l.n}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <MagneticButton href="tel:+355682006400" variant="none" className="nav-phone" strength={0.25}>
            +355 68 200 6400
          </MagneticButton>
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            className="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                <span className="nav-n">{l.n}</span>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
