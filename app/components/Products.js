"use client";

import { useId, useState } from "react";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import AnimatedHeading from "./AnimatedHeading";
import AmbientBackground from "./AmbientBackground";
import ProductCarousel from "./ProductCarousel";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const FILTERS = [
  { id: "all", label: "Të gjitha" },
  { id: "construction", label: "Për ndërtim" },
  { id: "joinery", label: "Për marangozëri" },
  { id: "cutting", label: "Prerje druri" },
];

const PRODUCTS = [
  {
    category: "construction",
    tag: "Për ndërtim",
    uses: ["Kallëpe betoni"],
    title: "Betoforme",
    img: BP + "/images/betoforme.jpg",
    desc: "Panele me veshje fenolike në të dyja anët, për kallëpe betoni. Na kontaktoni për përmasat, trashësinë dhe sasinë që i përshtatet projektit tuaj.",
  },
  {
    category: "construction",
    tag: "Për ndërtim",
    uses: ["Çati", "Veshje tavani"],
    title: "Binarë suedezë dhe tavanore",
    img: BP + "/images/binare.jpg",
    desc: "Binarë druri për çati dhe tavanore me bashkim femër–mashkull për veshjen e tavaneve. Lëndë e tharë dhe e përpunuar për montim të rregullt.",
  },
  {
    category: "construction",
    tag: "Për ndërtim",
    uses: ["Struktura çatie"],
    title: "Binarë dhe trarë për çati",
    images: [BP + "/images/binar-cati.jpg", BP + "/images/trare-cati.jpg"],
    desc: "Lëndë druri për realizimin e strukturave të çative. Na dërgoni gjatësinë, përmasat e prerjes dhe sasinë e kërkuar për një ofertë të përshtatur.",
  },
  {
    category: "construction",
    tag: "Për ndërtim",
    uses: ["Mbulesa çatie"],
    title: "Tjegulla Mladost",
    img: BP + "/images/tjegull-mladost.jpg",
    desc: "Tjegulla Mladost në ngjyrë kafe dhe të zezë, për mbulimin e çative. Na kontaktoni për modelin dhe sasinë që ju nevojitet.",
  },
  {
    category: "joinery",
    tag: "Për marangozëri",
    uses: ["Dyer dhe korniza", "Veshje"],
    title: "Lëndë druri e thatë",
    images: [BP + "/images/derrasa.jpg", BP + "/images/derrasa-2.jpg", BP + "/images/derrasa-3.jpg"],
    desc: "Lëndë druri e thatë në përmasa të ndryshme, për punime marangozërie, dyer, korniza dhe veshje. Përzgjidhni materialin sipas nevojave të punimit tuaj.",
  },
  {
    category: "joinery",
    tag: "Për marangozëri",
    uses: ["Punime të brendshme", "Struktura të lehta"],
    title: "Ristela druri",
    img: BP + "/images/ristel.jpg",
    desc: "Ristela druri në përmasa të ndryshme, për punime të brendshme dhe struktura të lehta. Na tregoni përmasat dhe sasinë e kërkuar.",
  },
  {
    category: "cutting",
    tag: "Shërbim prerjeje",
    uses: ["Prerje sipas projektit"],
    title: "Prerje sipas përmasave",
    img: BP + "/images/presa.jpg",
    desc: "Prerje druri sipas kërkesave të projektit tuaj. Dërgoni listën e përmasave dhe sasive që të konfirmojmë mundësinë e realizimit dhe çmimin.",
  },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");
  const resultsId = useId();
  const visibleProducts = PRODUCTS.filter((product) => activeFilter === "all" || product.category === activeFilter);

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

        <div className="product-filter-bar">
          <div className="product-filters" role="group" aria-label="Filtro produktet sipas përdorimit">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="product-filter-button"
                aria-pressed={activeFilter === filter.id}
                aria-controls={resultsId}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
                <span className="product-filter-number" aria-hidden="true">
                  {filter.id === "all" ? PRODUCTS.length : PRODUCTS.filter((product) => product.category === filter.id).length}
                </span>
              </button>
            ))}
          </div>
          <p className="product-filter-count" role="status" aria-live="polite" aria-atomic="true">
            {visibleProducts.length} {visibleProducts.length === 1 ? "produkt" : "produkte"}
          </p>
        </div>

        <div id={resultsId} className="product-grid">
          {visibleProducts.map((p) => {
            const number = PRODUCTS.indexOf(p) + 1;
            const titleId = `${resultsId}-product-${number}`;
            return (
              <article key={p.title} className="product-card" aria-labelledby={titleId}>
                {p.images ? (
                  <ProductCarousel images={p.images} alt={p.title} />
                ) : (
                  <RevealImage src={p.img} alt={p.title} />
                )}
                <div className="product-body">
                  <div className="product-meta">
                    <span className="product-category">{p.tag}</span>
                    <span className="pnum" aria-hidden="true">P.0{number}</span>
                  </div>
                  <h3 id={titleId}>{p.title}</h3>
                  <ul className="product-uses" aria-label="Përdorime">
                    {p.uses.map((use) => <li key={use} className="product-use">{use}</li>)}
                  </ul>
                  <p className="product-description">{p.desc}</p>
                  <div className="product-foot">
                    <a href="#kontakt" className="more" aria-label={`Kërko ofertë për ${p.title}`}>
                      Kërko ofertë
                      <span className="more-ico">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
