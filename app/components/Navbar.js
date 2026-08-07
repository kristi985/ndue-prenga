"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
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

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    if (open) {
      setHidden(false);
      return;
    }
    if (y > prev && y > 160) setHidden(true);
    else if (y < prev) setHidden(false);
  });

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: "-110%", opacity: 0 }}
      animate={{ y: hidden ? "-110%" : "0%", opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
