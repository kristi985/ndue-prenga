"use client";

import { motion } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import RevealImage from "./RevealImage";
import AnimatedHeading from "./AnimatedHeading";
import AmbientBackground from "./AmbientBackground";
import ProductCarousel from "./ProductCarousel";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const PRODUCTS = [
  {
    tag: "Më i kërkuari",
    title: "Betoforme",
    img: BP + "/images/betoforme.jpg",
    desc: "Betoforme me rimeso ahu (birch plywood) me film fenolik 120 g/m² në të dyja anët. Bërthamë nga shtresa ahu të kryqëzuara me ngjitje BFU 100 — për sipërfaqe betoni me cilësi të lartë.",
  },
  {
    tag: "Për strukturë",
    title: "Binar Suedes & Tavanore",
    img: BP + "/images/binare.jpg",
    desc: "Materiale për çati druri — binar suedes dhe tavanore me puthitje femër-mashkull nga pishe suedeze. Të tharë në furrë, të zgjedhur dhe të niveluar me kujdes për struktura të qëndrueshme dhe montim të pastër.",
  },
  {
    tag: "Për çati",
    title: "Binarë & Trarë për Çati",
    images: [BP + "/images/binar-cati.jpg", BP + "/images/trare-cati.jpg"],
    desc: "Binarë dhe trarë për çati druri — të tharë dhe të klasifikuar për strukturat mbajtëse të kulmeve. Të përzgjedhur për qëndrueshmëri dhe rezistencë në mot.",
  },
  {
    tag: "Universale",
    title: "Lëndë Druri e Thatë me Përmasa të Ndryshme",
    images: [BP + "/images/derrasa.jpg", BP + "/images/derrasa-2.jpg", BP + "/images/derrasa-3.jpg"],
    desc: "E tharë industrialisht — nuk kërcelet dhe nuk deformohet me lagështinë. Ideale për dyer, korniza dhe panelime, e lëmuar në të dyja anët dhe gati për punë.",
  },
  {
    tag: "Për dysheme",
    title: "Ristel me Dimensione",
    img: BP + "/images/ristel.jpg",
    desc: "Ristel druri me dimensione të ndryshme — për dysheme, ndarje kati dhe struktura të lehta. E tharë dhe e lëmuar, gati për montim në ambiente të brendshme dhe të jashtme.",
  },
  {
    tag: "Special",
    title: "Prerje sipas kërkesës",
    img: BP + "/images/presa.jpg",
    desc: "Prerje druri në përmasa, trashësi dhe profile specifike për projektin tënd. Saktësi e lartë dhe përshtatje e plotë me kërkesat e kantierit.",
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
