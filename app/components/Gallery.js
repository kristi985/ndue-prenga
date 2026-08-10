"use client";

import { motion } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import AmbientBackground from "./AmbientBackground";

const PHOTOS = [
  { src: "/images/galeri-sharra.jpg", tag: "Punishtja jonë" },
  { src: "/images/galeri-trare.jpg", tag: "Trarë të përzgjedhur" },
  { src: "/images/galeri-pirg.jpg", tag: "Stok i gjerë" },
  { src: "/images/galeri-logs.jpg", tag: "Lëndë e parë" },
  { src: "/images/galeri-punarrije.jpg", tag: "Përpunim me mjeshtëri" },
  { src: "/images/galeri-brinde.jpg", tag: "Brindë druri" },
  { src: "/images/galeri-lemim.jpg", tag: "Lëmim perfekt" },
  { src: "/images/paleta.jpg", tag: "Kantierë që furnizojmë" },
  { src: "/images/bredh.jpg", tag: "Nga pyjet e zgjedhura" },
];

export default function Gallery() {
  return (
    <section className="section gallery has-ambient" id="galeria">
      <AmbientBackground variant="wood" />
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Galeria</span>
          <AnimatedHeading text="Nga magazina jonë" className="section-title" />
          <p className="section-sub">
            Pamje nga depoja, stiva dhe përpunimi i drurit — cilësia që
            shihni në foto është ajo që merrni në kantier.
          </p>
        </Reveal>

        <RevealGroup className="gallery-grid">
          {PHOTOS.map((p) => (
            <RevealItem key={p.src}>
              <motion.figure
                className="gallery-item"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <img src={p.src} alt={p.tag} loading="lazy" />
                <figcaption className="g-tag">{p.tag}</figcaption>
              </motion.figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
