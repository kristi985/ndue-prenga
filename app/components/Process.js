"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import MagneticButton from "./MagneticButton";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const STEPS = [
  { n: "01", title: "Na shkruani", desc: "Na tregoni për projektin tuaj — sasi, lloj druri, përmasa dhe afat. Përmes formularit ose telefonit." },
  { n: "02", title: "Marrëm ofertën", desc: "Brenda 24 orëve ju dërgojmë ofertë të detajuar me çmime të qarta dhe kohë dorëzimi." },
  { n: "03", title: "Seleksionim në magazinë", desc: "Lënda seleksionohet në magazinën tonë — ajo që nuk bën hiqet dhe mbahet vetëm lëndë pa difekt." },
  { n: "04", title: "Dorëzim në kantier", desc: "Dërgesë me kamion në adresën tuaj, me mundësi shkarkimi. Gati për t'u përdorur." },
];

export default function Process() {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  /* Parallax i butë në foton e CTA banner-it */
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="section process" id="procesi">
      <div className="container">
        <Reveal className="section-head">
          <div className="sh-left">
            <span className="eyebrow">03 — Si funksionon</span>
            <AnimatedHeading text="Nga kërkesa te dorëzimi" className="section-title" />
          </div>
          <p className="section-sub">
            Procesi ynë është i thjeshtë dhe transparent — katër hapa dhe lënda
            është te ju.
          </p>
        </Reveal>

        <RevealGroup className="steps">
          {STEPS.map((s) => (
            <RevealItem key={s.n}>
              <motion.div
                className="step"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <motion.div
            className="cta-banner"
            ref={ctaRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cta-banner-inner">
              <motion.div className="cta-banner-bg" style={{ y: bgY }} aria-hidden="true">
                <Image
                  src={BP + "/images/galeri-logs.jpg"}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <div>
                <h2>Gati të filloni?</h2>
                <p>Merrni një ofertë falas sot — pa angazhim.</p>
              </div>
              <div className="actions">
                <MagneticButton href="#kontakt" variant="primary" size="lg">
                  Kërko ofertë
                  <span className="btn-ico">→</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
