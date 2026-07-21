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
    title: "Binarë & Trarë",
    img: "/images/binare.jpg",
    desc: "Materiale për çati druri — binarë suedeze dhe tavanore me puthitje femër-mashkull nga pishe suedeze. Të tharë në furrë, të zgjedhur dhe të niveluar me kujdes për struktura të qëndrueshme dhe montim të pastër.",
  },
  {
    tag: "Universale",
    title: "Dërrasa & Palë",
    images: ["/images/derrasa.jpg", "/images/derrasa-2.jpg"],
    desc: "Dysheme druri nga pishe me trashësi 2 cm dhe 3.2 cm — e lëmuar, e thatë dhe gati për montim. Mund të përdoret si dysheme përfundimtare, ndarje kati apo nënshtrat për pllaka, parket dhe izolim termik, me qëndrueshmëri të lartë në kohë.",
  },
  {
    tag: "Për çati",
    title: "Binarë të Thatë për Çati",
    images: ["/images/binar-cati-1.jpg", "/images/binar-cati-2.jpg", "/images/binare-2.jpg", "/images/binare-3.jpg"],
    desc: "Binarë të thatë për çati, të impregnuar me antikrimb (tratament anti-ksilofag) — të lyer me solucion mbrojtës kundër insekteve dhe lagështirës për jetëgjatësi maksimale.",
  },
  {
    tag: "Për marangoz",
    title: "Dërrasa të Thata",
    img: "/images/drrasa-thata.jpg",
    desc: "Dërrasë bredhi e thatë 5 cm, ideale për punime marangozi — tavolina, dollapë, komodina dhe mobilje të brendshme. E staxhionuar dhe gati për përpunim.",
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
      <AmbientBackground variant="amber" />
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Katalogu</span>
          <AnimatedHeading text="Produktet tona të drurit" className="section-title" />
          <p className="section-sub">
            Nga betoformja te binarët strukturor — çdo lloj lënde druri që i
            nevojitet kantierit tënd, në një vend.
          </p>
        </Reveal>

        <RevealGroup className="product-grid">
          {PRODUCTS.map((p) => (
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
