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
    a: 'Dorëzimi varet nga sasia dhe distanca. Për porosi brenda Shqipërisë, zakonisht dorëzojmë brenda 2-5 ditë pune. Për porosi të mëdha ose speciale, koha mund të jetë 7-14 ditë.',
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
    a: 'Ne ofrojmë kryesisht dru pishe dhe bredhi për ndërtim — betoforme, binarë, trarë, dërrasa, paleta, lëndë për kulme dhe më shumë. Të gjitha të trajtuara dhe të gatshme për përdorim.',
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
        <h2 className="section-title">Pyetje të Shpeshta</h2>
        <p className="section-subtitle">
          Gjithçka që duhet të dini përpara se të porosisni
        </p>

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
                <span>{faq.q}</span>
                <svg
                  className={`faq-icon ${open === i ? 'rotated' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
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
