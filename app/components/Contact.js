"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    e.target.reset();
  };

  return (
    <section className="section contact" id="kontakt">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Kontakt</span>
          <h2 className="section-title" style={{ marginBottom: 22 }}>Le të flasim për projektin tënd</h2>
          <p>
            Na shkruani për llojin, sasinë dhe afatin e drurit që ju duhet.
            Përgjigjemi brenda 24 orëve me ofertë të qartë.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <div className="ico">☎</div>
              <div>
                <div className="t">Telefon</div>
                <div className="v">068 200 6400</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico">✉</div>
              <div>
                <div className="t">Email</div>
                <div className="v">info@ndueprenga.al</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico">⌖</div>
              <div>
                <div className="t">Magazina</div>
                <div className="v">SH56, Tiranë</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico">◷</div>
              <div>
                <div className="t">Orari</div>
                <div className="v">Hënë–Shtunë: 08:00 – 17:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success">
                ✓ Faleminderit! Mesazhi juaj u dërgua. Do t'ju kontaktojmë së shpejti.
              </div>
            )}

            <div className="form-row">
              <div className="field">
                <label htmlFor="emri">Emri juaj</label>
                <input id="emri" name="emri" type="text" placeholder="Emri Mbiemri" required />
              </div>
              <div className="field">
                <label htmlFor="tel">Telefon</label>
                <input id="tel" name="tel" type="tel" placeholder="+355..." required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="ju@shembull.al" />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="produkti">Produkti i kërkuar</label>
                <select id="produkti" name="produkti" defaultValue="">
                  <option value="" disabled>Zgjidh...</option>
                  <option>Betoforme</option>
                  <option>Binarë / Trarë</option>
                  <option>Dërrasa & Palë</option>
                  <option>Lëndë për kulme</option>
                  <option>Binarë Çatie</option>
                  <option>Presë sipas kërkesës</option>
                  <option>Tjetër / Shumë lloje</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="sasia">Sasia (në m², m³ ose copë)</label>
                <input id="sasia" name="sasia" type="text" placeholder="p.sh. 200 m²" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="mesazhi">Detajet e porosisë</label>
              <textarea
                id="mesazhi"
                name="mesazhi"
                placeholder="Përmasa, afat, adresa e dorëzimit..."
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              Dërgo kërkesën
              <span className="btn-ico">→</span>
            </button>

            <p className="form-note">
              Përgjigjemi zakonisht brenda 24 orëve. Të dhënat tuaja nuk ndahen me të tretë.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
