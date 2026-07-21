"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Counter from "./Counter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { scrollYProgress } = useScroll({ offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="kryefaqja">
      <motion.div className="hero-bg" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="/images/hero-lumber.jpg"
          alt="Lëndë druri — pirg dërrasash"
          fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </motion.div>
      <div className="hero-overlay" />

      <motion.div
        className="container hero-inner"
        style={{ y: textY, opacity: textOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero-eyebrow" variants={item}>
          Betoforme · Binarë · Dërrasa · Mobilje
        </motion.span>

        <motion.h1 variants={item}>
          Lëndë drusore <em>për ndërtim</em> dhe mobilje.
        </motion.h1>

        <motion.p className="lead" variants={item}>
          Furnizojmë kantieret dhe marangozët me lëndë druri të përzgjedhur —
          të tharë, të klasifikuar dhe gati për punë. Çmime të drejta, dorëzim në vend.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a
            href="https://wa.me/355682006400?text=P%C3%ABrsh%C3%ABndetje!%20D%C3%ABshiroj%20nj%C3%AB%20ofert%C3%AB%20p%C3%ABr%20l%C3%ABnd%C3%AB%20druri."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Kërko ofertë në WhatsApp
          </a>
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
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
