import Logo from "./Logo";

export default function Footer() {
  // Koordinatat e biznesit (Lagjja e Re, Vaqarr, Tiranë)
  const lat = 41.3075989;
  const lon = 19.7575329;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lon}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-word" aria-hidden="true">
          NDUE<span>PRENGA</span>
        </div>

        {/* Harta e lokacionit */}
        <div className="footer-map">
          <div className="footer-map-wrap">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
              title="Hap hartën në Google Maps"
            >
              <img
                src="/images/harta.jpg"
                alt="Harta — NDUE PRENGA, SH56 Tiranë"
                loading="lazy"
                className="footer-map-img"
              />
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-cta"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Hap në Google Maps
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-about">
            <div className="brand">
              <Logo size={40} />
              <span className="brand-text">NDUE PRENGA</span>
            </div>
            <p>
              Furnizues i lëndës së drurit për ndërtim dhe mobilje — betoforme,
              binarë, dërrasa dhe më tepër. Cilësi, çmime të drejta dhe dorëzim i shpejtë.
            </p>
          </div>

          <div className="footer-col">
            <h4>Produktet</h4>
            <ul>
              <li><a href="#produktet">Betoforme</a></li>
              <li><a href="#produktet">Binarë & Trarë</a></li>
              <li><a href="#produktet">Dërrasa</a></li>
              <li><a href="#produktet">Presë speciale</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kompania</h4>
            <ul>
              <li><a href="#perse-ne">Pse ne</a></li>
              <li><a href="#procesi">Procesi</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakti</h4>
            <ul>
              <li><a href="tel:+355682006400">📞 +355 68 200 6400</a></li>
              <li><a href="mailto:kristiprenga301@gmail.com">✉️ kristiprenga301@gmail.com</a></li>
              <li>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  📍 SH56, Tiranë
                </a>
              </li>
              <li>🕒 Hënë–Shtunë: 08:00–17:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NDUE PRENGA. Të gjitha të drejtat të rezervuara.</span>
          <span className="footer-coords">41.3076°N / 19.7575°E — SH56, Vaqarr, Tiranë</span>
        </div>
      </div>
    </footer>
  );
}
