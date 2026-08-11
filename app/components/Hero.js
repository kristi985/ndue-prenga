"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "motion/react";
import Counter from "./Counter";
import MagneticButton from "./MagneticButton";

const EASE = [0.22, 1, 0.36, 1];

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

/* Stagger i titullit — fjalë-pas-fjale me mask reveal */
const titleStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const MARQUEE = [
  "Betoforme",
  "Binarë Suedes",
  "Trarë Çatie",
  "Lëndë e Thatë",
  "Ristel",
  "Tendë Druri",
  "Tjegulla",
];

/* Rrotullim ciklik i vlerës në intervalin [min, max) */
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/* Fjalë e maskuar që zbulohet poshtë-lart me një rrotullim të lehtë */
function MaskWord({ children, em = false }) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "top",
        paddingBottom: "0.12em",
        marginBottom: "-0.12em",
      }}
    >
      <motion.span
        style={{
          display: "inline-block",
          willChange: "transform",
          transformOrigin: "0% 100%",
        }}
        variants={{
          hidden: { y: "112%", rotate: 3 },
          show: {
            y: "0%",
            rotate: 0,
            transition: { duration: 0.95, ease: EASE },
          },
        }}
      >
        {em ? <em>{children}</em> : children}
      </motion.span>
    </span>
  );
}

/* Marquee që reagon me shpejtësinë e scroll-it (velocity) + pauzë në hover */
function VelocityMarquee() {
  const baseX = useMotionValue(0);
  const trackRef = useRef(null);
  const halfWidth = useRef(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const boost = useTransform(smooth, [0, 1200], [0, 3.5]);
  const skewX = useTransform(smooth, [-1400, 0, 1400], [2, 0, -2]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) halfWidth.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    const t = setTimeout(measure, 1000); // rimat pas ngarkimit të fonteve/imazheve
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (paused || reduced || !halfWidth.current) return;
    const d = Math.min(delta, 50);
    const px = 1.5 * (d / 16.67) * (1 + Math.abs(boost.get()));
    const pct = (px / halfWidth.current) * 100;
    baseX.set(wrap(-50, 0, baseX.get() - pct));
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div
      className="marquee"
      aria-hidden="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div className="marquee-track" ref={trackRef} style={{ x, skewX }}>
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <span className="marquee-item" key={i}>
            {m} <i>✦</i>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const finePointer = useRef(true);
  const reduced = useReducedMotion();
  const [glowOn, setGlowOn] = useState(false);

  const { scrollYProgress } = useScroll({ offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  /* Cursor glow — spotlight i hollë që ndjek mausin */
  const glowX = useMotionValue(-600);
  const glowY = useMotionValue(-600);
  const glowSX = useSpring(glowX, { stiffness: 55, damping: 18 });
  const glowSY = useSpring(glowY, { stiffness: 55, damping: 18 });

  useEffect(() => {
    finePointer.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  const handleMouseMove = (e) => {
    if (reduced || !finePointer.current) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
    if (!glowOn) setGlowOn(true);
  };

  return (
    <section className="hero" id="kryefaqja" ref={sectionRef} onMouseMove={handleMouseMove}>
      {/* Ken Burns i butë (scale settle) + parallax në scroll */}
      <motion.div
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        initial={{ scale: 1.18, opacity: 0.55 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <motion.div className="hero-bg" style={{ y: bgY, scale: bgScale }}>
          <Image
            src={BP + "/images/hero-lumber.jpg"}
            alt="Lëndë druri — pirg dërrasash"
            fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
      </motion.div>
      <div className="hero-overlay" />

      {/* Spotlight i hollë pas kursorit */}
      {glowOn && !reduced && (
        <motion.div className="hero-glow" style={{ x: glowSX, y: glowSY }} aria-hidden="true" />
      )}

      <motion.div
        className="container hero-inner"
        style={{ y: textY, opacity: textOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero-eyebrow" variants={item}>
          Furnizim lënde druri — betoforme · binarë · dërrasa
        </motion.span>

        <motion.h1 variants={titleStagger}>
          <MaskWord>Lëndë{"\u00A0"}</MaskWord>
          <MaskWord em>drusore</MaskWord>
          <br />
          <MaskWord>e{"\u00A0"}thatë,{"\u00A0"}</MaskWord>
          <MaskWord>e{"\u00A0"}përzgjedhur.</MaskWord>
        </motion.h1>

        <motion.p className="lead" variants={item}>
          Furnizojmë kantieret dhe marangozët me lëndë druri të përzgjedhur —
          të tharë, të klasifikuar dhe gati për punë. Çmime të drejta, dorëzim në vend.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <MagneticButton
            href="https://wa.me/355682006400?text=P%C3%ABrsh%C3%ABndetje!%20D%C3%ABshiroj%20nj%C3%AB%20ofert%C3%AB%20p%C3%ABr%20l%C3%ABnd%C3%AB%20druri."
            target="_blank"
            rel="noopener noreferrer"
            variant="wa"
            size="lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Kërko ofertë në WhatsApp
          </MagneticButton>
          <MagneticButton href="#produktet" variant="ghost" size="lg">
            Shiko produktet
            <span className="btn-ico">↓</span>
          </MagneticButton>
        </motion.div>

        <motion.div className="hero-stats" variants={item}>
          <div className="hero-stat">
            <div className="num"><Counter value={15} suffix="+" /></div>
            <div className="label">Vite eksperiencë</div>
          </div>
          <div className="hero-stat">
            <div className="num"><Counter value={180} suffix="+" /></div>
            <div className="label">Klientë të besueshëm</div>
          </div>
          <div className="hero-stat">
            <div className="num">100%</div>
            <div className="label">Lëndë e garantuar</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span>41.3076°N / 19.7575°E</span>
        <span>SH56 · Vaqarr · Tiranë</span>
        <span>Hënë–Shtunë 08:00–17:00</span>
        <a href="tel:+355682006400">Tel +355 68 200 6400</a>
      </motion.div>

      <VelocityMarquee />
    </section>
  );
}
