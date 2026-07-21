"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

/**
 * Karrusel me shigjeta për produktet me disa foto.
 */
export default function ProductCarousel({ images, alt }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = images.length;

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="product-thumb carousel-thumb">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          className="carousel-slide"
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images[index]}
            alt={`${alt} - foto ${index + 1}`}
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 940px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Shtresa e errët poshtë (si karta të tjera) */}
      <div className="carousel-overlay" />

      {/* Shigjeta majtas */}
      {total > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Foto e mëparshme"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Shigjeta djathtas */}
          <button
            className="carousel-arrow carousel-arrow-next"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(1);
            }}
            aria-label="Foto tjetër"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Pikat (indikatorët) */}
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === index ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
