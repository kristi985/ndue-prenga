'use client';

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

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
  const id = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="sh-left">
            <span className="eyebrow">Përpara porosisë</span>
            <h2 className="section-title">Pyetje të Shpeshta</h2>
          </div>
          <p className="section-sub">
            Gjithçka që duhet të dini përpara se të porosisni
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const questionId = `${id}-question-${i}`;
            const answerId = `${id}-answer-${i}`;

            return (
              <div key={faq.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <h3 className="faq-heading">
                  <button
                    type="button"
                    id={questionId}
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq-q">{faq.q}</span>
                    <span className={`faq-icon ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className="faq-answer"
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeInOut' }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
