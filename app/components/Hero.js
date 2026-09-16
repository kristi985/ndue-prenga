import Image from "next/image";
import Counter from "./Counter";
import MagneticButton from "./MagneticButton";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="hero" id="kryefaqja">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Ndue Prenga · Lëndë druri</span>
          <h1>Druri <em>i duhur.</em><br />Për projektin tuaj.</h1>
          <p className="lead">
            Lëndë druri për ndërtim dhe marangozëri. Nga betoformja te binarët
            dhe dërrasat, gjeni materialin që i duhet punës suaj.
          </p>
          <div className="hero-actions">
            <MagneticButton
              href="https://wa.me/355682006400?text=P%C3%ABrsh%C3%ABndetje!%20D%C3%ABshiroj%20nj%C3%AB%20ofert%C3%AB%20p%C3%ABr%20l%C3%ABnd%C3%AB%20druri."
              target="_blank" rel="noopener noreferrer" variant="primary" size="lg"
              strength={0.12}
            >
              Kërko ofertë <span className="btn-ico" aria-hidden="true">↗</span>
            </MagneticButton>
            <a href="#produktet" className="hero-catalog-link">
              Eksploro produktet <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            SH56 · Vaqarr, Tiranë
          </p>
        </div>
        <figure className="hero-visual">
          <div className="measure-rule" aria-hidden="true"><span>00</span><span>10</span><span>20</span><span>30</span></div>
          <div className="hero-photo">
            <Image
              src={BP + "/images/binare.jpg"} alt="Binarë druri të stivuar, me strukturën e drurit në plan të afërt"
              fill priority sizes="(max-width: 800px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "64% center" }}
            />
            <a href="#produktet" className="hero-photo-label">
              <span><small>Nga katalogu ynë</small><strong>Binarë druri</strong></span>
              <span className="hero-photo-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <figcaption className="hero-caption"><span>Materiali bën diferencën.</span><span>NP / 01</span></figcaption>
        </figure>
      </div>
      <div className="container hero-bottom">
        <div className="hero-stat">
          <strong className="num"><Counter value={15} suffix="+" duration={1} /></strong>
          <span className="label">vite eksperiencë</span>
        </div>
        <div className="hero-stat">
          <strong className="num"><Counter value={180} suffix="+" duration={1} /></strong>
          <span className="label">klientë që na besojnë</span>
        </div>
        <div className="hero-service">
          <span className="hero-service-mark" aria-hidden="true">↗</span>
          <span>Projekti juaj, përmasat tuaja.<br /><a href="#kontakt">Prerje sipas kërkesës</a></span>
        </div>
      </div>
    </section>
  );
}
