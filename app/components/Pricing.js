'use client';

import { motion } from 'motion/react';

const products = [
  { name: 'Betoformë', sizes: '3m / 4m', unit: 'copa', range: '800 — 1,200', note: 'Pishë e trajtuar' },
  { name: 'Binarë', sizes: '8×8 / 10×10 cm', unit: 'ml', range: '350 — 550', note: 'Gjatësi 4-6m' },
  { name: 'Trarë', sizes: '12×12 / 15×15 cm', unit: 'ml', range: '600 — 950', note: 'Për struktura mbajtëse' },
  { name: 'Dërrasë', sizes: '2.5 / 3 cm', unit: 'm²', range: '1,200 — 1,800', note: 'E planifikuar' },
  { name: 'Lëndë kulmi', sizes: '5×5 / 6×8 cm', unit: 'ml', range: '180 — 320', note: 'Mahi & tela' },
  { name: 'Paleta druri', sizes: 'Standard', unit: 'copa', range: '600 — 900', note: '120×80 cm' },
];

export default function Pricing() {
  return (
    <section className="section pricing" id="cmime">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Çmimet</span>
          <h2 className="section-title">Çmime Orientuese</h2>
          <p className="section-sub">
            Çmimet ndryshojnë në bazë të sasisë dhe përmasave. Na kontaktoni për ofertë të saktë.
          </p>
        </div>

        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Produkti</th>
                <th>Përmasat</th>
                <th>Njësia</th>
                <th>Çmimi (Lekë)</th>
                <th>Shënim</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <motion.tr
                  key={p.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <td className="pricing-name">{p.name}</td>
                  <td>{p.sizes}</td>
                  <td>{p.unit}</td>
                  <td className="pricing-range">{p.range}</td>
                  <td className="pricing-note">{p.note}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pricing-footer">
          * Të gjitha çmimet janë orientuese dhe përfshijnë TVSH-në. Transporti llogaritet veçmas.
        </p>
      </div>
    </section>
  );
}
