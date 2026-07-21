"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { RevealGroup, RevealItem } from "./Reveal";
import Counter from "./Counter";

const STATS = [
  { num: 15, suffix: "+", label: "Vite eksperiencë" },
  { num: 100, suffix: "%", label: "Lëndë e garantuar" },
  { num: 48, suffix: "h", label: "Dorëzim i shpejtë" },
  { num: 100, suffix: "%", label: "Klientë të kënaqur" },
];

export default function Stats() {
  return (
    <section className="section stats-band" style={{ paddingBlock: "88px" }}>
      <div className="stats-band-bg">
        <Image
          src="/images/magazina.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
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
