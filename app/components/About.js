import Image from "next/image";
import Reveal from "./Reveal";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  return (
    <section className="section about" id="rreth-nesh" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <figure className="about-figure">
            <div className="about-image">
              <Image
                src={BP + "/images/presa.jpg"}
                alt="Dërrasë druri gjatë prerjes me sharrë."
                fill
                sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1280px) 46vw, 560px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <figcaption className="about-caption">Prerje sipas përmasave</figcaption>
          </figure>
        </Reveal>

        <Reveal className="about-copy">
          <span className="eyebrow">Rreth Ndue Prenga</span>
          <h2 className="section-title about-title" id="about-title">
            Druri, në përmasat e projektit tuaj.
          </h2>
          <div className="about-body">
            <p>
              Ndue Prenga furnizon lëndë druri për ndërtim dhe marangozëri në
              Vaqarr, Tiranë. Nga dërrasat te binarët dhe betoformja, përzgjedhja
              nis nga nevojat e punimit tuaj.
            </p>
            <p>
              Na tregoni materialin, sasinë dhe përmasat që kërkoni. Për prerje
              sipas përmasave dhe ofertë, flisni drejtpërdrejt me ne.
            </p>
          </div>
          <div className="about-location">SH56 · Vaqarr · Tiranë</div>
          <a className="about-link" href="#kontakt">
            Flasim për projektin tuaj <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
