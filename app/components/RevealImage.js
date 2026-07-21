"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Foto që zbulohet me efekt "wipe" kur hyn në viewport,
 * dhe bën lehtë parallax (lëviz më ngadalë se scroll-i).
 *
 * Përdor IntersectionObserver manual si fallback nëse
 * whileInView nuk aktivizohet (psh. me smooth scroll).
 */
export default function RevealImage({
  src,
  alt,
  width = 800,
  height = 550,
  sizes = "(max-width: 620px) 100vw, (max-width: 940px) 50vw, 33vw",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // Fallback: IntersectionObserver për të siguruar që foto zbulohet gjithmonë
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Aktivizo menjëherë nëse tashmë është në viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "100px" }
    );
    io.observe(el);

    // Safety net: nëse për ndonjë arsye nuk aktivizohet pas 2s, shfaqeni
    const timeout = setTimeout(() => setShown(true), 2000);

    return () => {
      io.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="product-thumb" ref={ref}>
      <motion.div
        className="reveal-mask"
        initial={false}
        animate={{
          clipPath: shown ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      >
        <motion.div style={{ y, scale, width: "100%", height: "100%" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
