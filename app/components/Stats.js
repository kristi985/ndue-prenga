"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { RevealGroup, RevealItem } from "./Reveal";
import Counter from "./Counter";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const STATS = [
  { num: 15, suffix: "+", label: "Vite eksperiencë" },
  { num: 100, suffix: "%", label: "Lëndë e garantuar" },
  { num: 48, suffix: "h", label: "Dorëzim i shpejtë" },
  { num: 180, suffix: "+", label: "Klientë të kënaqur" },
];

export default function Stats() {
  const bandRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  /* Parallax i butë në foton e magazinës */
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="section stats-band" style={{ paddingBlock: "88px" }} ref={bandRef}>
      <motion.div className="stats-band-bg" style={{ y: bgY, scale: 1.22 }}>
        <Image
          src={BP + "/images/magazina.jpg"}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="container">
        <RevealGroup className="stats-grid">
          {STATS.map((s) => (
            <RevealItem key={s.label}>
              <motion.div
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <div className="num">
                  <Counter value={s.num} suffix={s.suffix} />
                </div>
                <div className="label">{s.label}</div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
