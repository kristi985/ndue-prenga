"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import MagneticButton from "./MagneticButton";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const STEPS = [
  { n: "01", title: "Na shkruani", desc: "Na tregoni për projektin tuaj — sasi, lloj druri, përmasa dhe afat. Përmes formularit ose telefonit." },
  { n: "02", title: "Ju dërgojmë ofertën", desc: "Brenda 24 orëve ju dërgojmë ofertë të detajuar me çmime të qarta dhe kohë dorëzimi." },
  { n: "03", title: "Seleksionim në magazinë", desc: "Lënda seleksionohet në magazinën tonë — ajo që nuk bën hiqet dhe mbahet vetëm lëndë pa difekt." },
  { n: "04", title: "Dorëzim në kantier", desc: "Dërgesë me kamion në adresën tuaj, me mundësi shkarkimi. Gati për t'u përdorur." },
];

export default function Process() {
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
          <div className="cta-banner">
            <div className="cta-banner-inner">
              <div className="cta-banner-bg" aria-hidden="true">
                <Image
                  src={BP + "/images/galeri-logs.jpg"}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  style={{ objectFit: "cover" }}
                />
              </div>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
