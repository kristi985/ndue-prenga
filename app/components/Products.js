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
    desc: "Panele me veshje fenolike në të dyja anët, për kallëpe betoni. Na kontaktoni për përmasat, trashësinë dhe sasinë që i përshtatet projektit tuaj.",
  },
  {
    tag: "Për strukturë",
    title: "Binarë suedezë dhe tavanore",
    img: BP + "/images/binare.jpg",
    desc: "Binarë druri për çati dhe tavanore me bashkim femër–mashkull për veshjen e tavaneve. Lëndë e tharë dhe e përpunuar për montim të rregullt.",
  },
  {
    tag: "Për çati",
    title: "Binarë dhe trarë për çati",
    images: [BP + "/images/binar-cati.jpg", BP + "/images/trare-cati.jpg"],
    desc: "Lëndë druri për realizimin e strukturave të çative. Na dërgoni gjatësinë, përmasat e prerjes dhe sasinë e kërkuar për një ofertë të përshtatur.",
  },
  {
    tag: "Për kulme",
    title: "Tjegulla Mladost",
    img: BP + "/images/tjegull-mladost.jpg",
    desc: "Tjegulla Mladost në ngjyrë kafe dhe të zezë, për mbulimin e çative. Na kontaktoni për modelin dhe sasinë që ju nevojitet.",
  },
  {
    tag: "Universale",
    title: "Lëndë druri e thatë",
    images: [BP + "/images/derrasa.jpg", BP + "/images/derrasa-2.jpg", BP + "/images/derrasa-3.jpg"],
    desc: "Lëndë druri e thatë në përmasa të ndryshme, për punime marangozërie, dyer, korniza dhe veshje. Përzgjidhni materialin sipas nevojave të punimit tuaj.",
  },
  {
    tag: "Për dysheme",
    title: "Ristela druri",
    img: BP + "/images/ristel.jpg",
    desc: "Ristela druri në përmasa të ndryshme, për punime të brendshme dhe struktura të lehta. Na tregoni përmasat dhe sasinë e kërkuar.",
  },
  {
    tag: "Special",
    title: "Prerje sipas përmasave",
    img: BP + "/images/presa.jpg",
    desc: "Prerje druri sipas kërkesave të projektit tuaj. Dërgoni listën e përmasave dhe sasive që të konfirmojmë mundësinë e realizimit dhe çmimin.",
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
            Nga betoformja te binarët strukturorë — çdo lloj lënde druri që i
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
