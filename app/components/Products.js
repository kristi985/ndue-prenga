"use client";

import { motion } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import RevealImage from "./RevealImage";
import AnimatedHeading from "./AnimatedHeading";
import AmbientBackground from "./AmbientBackground";
import ProductCarousel from "./ProductCarousel";

const PRODUCTS = [
  {
    tag: "Më i kërkuari",
    title: "Betoforme",
    img: "/images/betoforme.jpg",
    desc: "Betoforme me rimeso ahu (birch plywood) me film fenolik 120 g/m² në të dyja anët. Bërthamë nga shtresa ahu të kryqëzuara me ngjitje BFU 100 — për sipërfaqe betoni me cilësi të lartë.",
  },
  {
    tag: "Për strukturë",
    title: "Binar Suedes & Tavanore",
    img: "/images/binare.jpg",
    desc: "Materiale për çati druri — binar suedes dhe tavanore me puthitje femër-mashkull nga pishe suedeze. Të tharë në furrë, të zgjedhur dhe të niveluar me kujdes për struktura të qëndrueshme dhe montim të pastër.",
  },
  {
    tag: "Për çati",
    title: "Binarë & Trarë për Çati",
    images: ["/images/binar-cati.jpg", "/images/trare-cati.jpg"],
    desc: "Binarë dhe trarë për çati druri — të tharë dhe të klasifikuar për strukturat mbajtëse të kulmeve. Të përzgjedhur për qëndrueshmëri dhe rezistencë në mot.",
  },
  {
    tag: "Universale",
    title: "Dërrasë Druri e Thatë që Nuk Deformohet",
    images: ["/images/derrasa.jpg", "/images/derrasa-2.jpg", "/images/derrasa-3.jpg"],
    desc: "Falë tharjes industriale të kontrolluar, kjo dërrasë druri mban formën e saj përgjithmonë — nuk kërcelet, nuk përdredhet dhe nuk hapet me ndryshimet e lagështisë. Ideale për dyer druri, korniza, panelime dhe çdo projekt ku kërkohet stabilitet i plotë në kohë. E lëmuar në të dyja anët, gati për ngjyrosje, llaç apo vernik, në trashësi dhe përmasa të ndryshme me prerje sipas kërkesës suaj.",
  },
  {
    tag: "Për dysheme",
    title: "Ristel me Dimensione",
    img: "/images/ristel.jpg",
    desc: "Ristel druri me dimensione të ndryshme — për dysheme, ndarje kati dhe struktura të lehta. E tharë dhe e lëmuar, gati për montim në ambiente të brendshme dhe të jashtme.",
  },
  {
    tag: "Special",
    title: "Prerje sipas kërkesës",
    img: "/images/presa.jpg",
    desc: "Prerje druri në përmasa, trashësi dhe profile specifike për projektin tënd. Përpunim CNC me saktësi milimetrike.",
  },
];

export default function Products() {
  return (
    <section className="section products has-ambient" id="produktet">
      <AmbientBackground variant="wood" />
      <div className="container">
        <Reveal className="section-head">
          <div className="sh-left">
            <span className="eyebrow">01 — Katalogu</span>
            <AnimatedHeading text="Produktet tona të drurit" className="section-title" />
          </div>
          <p className="section-sub">
            Nga betoformja te binarët strukturor — çdo lloj lënde druri që i
            nevojitet kantierit tënd, në një vend.
          </p>
        </Reveal>

        <RevealGroup className="product-grid">
          {PRODUCTS.map((p, i) => (
            <RevealItem key={p.title}>
              <motion.article
                className="product-card"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {p.images ? (
                  <ProductCarousel images={p.images} alt={p.title} />
                ) : (
                  <RevealImage src={p.img} alt={p.title} />
                )}
                <span className="tag-over">{p.tag}</span>
                <div className="product-body">
                  <span className="pnum">P.0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="product-foot">
                    <a href="#kontakt" className="more">
                      Kërko ofertë
                      <span className="more-ico">→</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
