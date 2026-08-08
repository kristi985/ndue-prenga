'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: 'Si mund të porosis lëndë druri?',
    a: 'Mund të na kontaktoni përmes telefonit, WhatsApp-it, email-it ose formularit të kontaktit në faqe. Ne do t\'ju përgjigjemi brenda 24 orëve me një ofertë të personalizuar.',
  },
  {
    q: 'Sa zgjat dorëzimi i porosisë?',
    a: 'Për porositë brenda Shqipërisë, zakonisht dorëzojmë brenda 24 orësh. Për porosi të mëdha ose speciale, kohën e saktë e konfirmojmë me ofertën.',
  },
  {
    q: 'A keni çmime fikse?',
    a: 'Çmimet tona ndryshojnë në varësi të llojit të drurit, përmasave dhe sasisë së porositur. Ne ofrojmë çmime konkurruese dhe transparente. Na kontaktoni për një ofertë falas!',
  },
  {
    q: 'A mund të presni dru sipas përmasave të mia?',
    a: 'Po! Ne ofrojmë shërbimin e prerjes sipas kërkesës. Na dërgoni përmasat e dëshiruara dhe ne do t\'ju tregojmë mundësitë dhe çmimin.',
  },
  {
    q: 'Çfarë lloje druri keni?',
    a: 'Ne ofrojmë kryesisht dru pishe dhe bredhi për ndërtim — betoforme, binarë, trarë, dërrasa, tjegulla, lëndë për kulme dhe më shumë. Të gjitha të trajtuara dhe të gatshme për përdorim.',
  },
  {
    q: 'A bëni dorëzim jashtë Shqipërisë?',
    a: 'Aktualisht operojmë kryesisht në Shqipëri. Për porosi ndërkombëtare, ju lutemi na kontaktoni direkt për të diskutuar mundësitë.',
  },
  {
    q: 'Cilat janë mënyrat e pagesës?',
    a: 'Pranojmë pagesa me para në dorë, transfertë bankare dhe për klientët e rregullt ofrojmë edhe pagesë me këste. Detajet diskutohen gjatë porosisë.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="sh-left">
            <span className="eyebrow">04 — FAQ</span>
            <h2 className="section-title">Pyetje të Shpeshta</h2>
          </div>
          <p className="section-sub">
            Gjithçka që duhet të dini përpara se të porosisni
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q">{faq.q}</span>
                <span className={`faq-icon ${open === i ? 'rotated' : ''}`} aria-hidden="true">
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
