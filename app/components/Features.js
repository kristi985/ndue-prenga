"use client";

import { motion } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import AmbientBackground from "./AmbientBackground";

const FEATURES = [
  { icon: "◐", title: "Drurë të zgjedhur", desc: "Lënda vjen nga pyje të menaxhuar në mënyrë të qëndrueshme në Evropë, me origjinë të gjurmuar." },
  { icon: "◇", title: "Përmasa precize", desc: "Të gjitha produktet kontrollohen për tolerancë dhe cilësi para se të nisen drejt kantierit." },
  { icon: "◑", title: "Çmime transparente", desc: "Pa komisione të fshehura. Oferta e shkruar brenda 24 orëve, me çmime të qarta për sasi." },
  { icon: "◈", title: "Dorëzim i shpejtë", desc: "Rrugëtokë në të gjithë vendin. Zakonisht dorëzojmë brenda 24 orëve për porositë standarde." },
  { icon: "❖", title: "Ripërdorim i lartë", desc: "Betoformat tona janë të ripërdorshme deri në 10+ cikle — kursim real për kantierin." },
  { icon: "◆", title: "Garanci produktoresh", desc: "Çdo sasi shoqërohet me certifikatë cilësie dhe mbështetje teknike pas shitjes." },
];

export default function Features() {
  return (
    <section className="section features has-ambient" id="perse-ne">
      <AmbientBackground variant="forest" />
      <div className="container">
        <Reveal className="section-head">
          <div className="sh-left">
            <span className="eyebrow">02 — Pse NDUE PRENGA</span>
            <AnimatedHeading text="Arsyet për të na zgjedhur" className="section-title" />
          </div>
          <p className="section-sub">
            Nuk shesim vetëm dru — japim zgjidhje të besueshme për ndërtuesit,
            kantieristët dhe distributorët.
          </p>
        </Reveal>

        <RevealGroup className="feature-grid">
          {FEATURES.map((f, i) => (
            <RevealItem key={f.title}>
              <motion.div
                className="feature"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <span className="fnum">0{i + 1}</span>
                <div className="fico">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
