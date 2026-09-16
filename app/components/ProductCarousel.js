"use client";

import { useReducer } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const INITIAL_STATE = { index: 0, requested: 0, loaded: [], failed: [] };

function selectImage(state, requested) {
  return {
    ...state,
    requested,
    index: state.loaded.includes(requested) ? requested : state.index,
  };
}

function carouselReducer(state, action) {
  switch (action.type) {
    case "select":
      return selectImage(state, action.index);
    case "move":
      return selectImage(state, (state.requested + action.direction + action.total) % action.total);
    case "loaded": {
      const showImage = state.requested === action.index ||
        (state.failed.includes(state.requested) && !state.loaded.includes(state.index));
      return {
        ...state,
        index: showImage ? action.index : state.index,
        loaded: state.loaded.includes(action.index) ? state.loaded : [...state.loaded, action.index],
        failed: state.failed.filter((index) => index !== action.index),
      };
    }
    case "failed":
      return {
        ...state,
        index: state.index === action.index
          ? (state.loaded.find((index) => index !== action.index) ?? state.index)
          : state.index,
        loaded: state.loaded.filter((index) => index !== action.index),
        failed: state.failed.includes(action.index) ? state.failed : [...state.failed, action.index],
      };
    default:
      return state;
  }
}

/**
 * Karrusel me shigjeta për produktet me disa foto.
 */
export default function ProductCarousel({ images, alt }) {
  const [state, dispatch] = useReducer(carouselReducer, INITIAL_STATE);
  const { index, requested, failed } = state;
  const reduceMotion = useReducedMotion();

  const total = images.length;

  const go = (dir) => {
    dispatch({ type: "move", direction: dir, total });
  };

  const onKeyDown = (event) => {
    if (total < 2 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    switch (event.key) {
      case "ArrowLeft":
        go(-1);
        break;
      case "ArrowRight":
        go(1);
        break;
      case "Home":
        dispatch({ type: "select", index: 0 });
        break;
      case "End":
        dispatch({ type: "select", index: total - 1 });
        break;
      default:
        return;
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="product-thumb carousel-thumb"
      role="group"
      aria-roledescription="karusel"
      aria-label={alt}
      aria-busy={requested !== index && !failed.includes(requested)}
      tabIndex={total > 1 ? 0 : undefined}
      onKeyDown={onKeyDown}
    >
      {/* Keep the current photo visible until the requested photo is loaded. */}
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="carousel-slide"
          aria-hidden={i !== index}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src={src}
            alt={`${alt} - foto ${i + 1}`}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            onLoad={() => dispatch({ type: "loaded", index: i })}
            onError={() => dispatch({ type: "failed", index: i })}
          />
        </motion.div>
      ))}

      {/* Shtresa e errët poshtë (si karta të tjera) */}
      <div className="carousel-overlay" />

      {/* Shigjeta majtas */}
      {total > 1 && (
        <>
          <button
            type="button"
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
            type="button"
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
                type="button"
                className={`carousel-dot ${i === index ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch({ type: "select", index: i });
                }}
                aria-label={`Foto ${i + 1} nga ${total}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
