"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Img } from "@/content/types";
import styles from "./ConsultModal.module.css";

const INTERVAL = 6000; // troca lenta, como no site de referência

/** Carrossel com troca suave, frase sobre a foto e barrinhas de progresso. */
export default function Slides({ slides }: { slides: { headline: string; image: Img }[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (slides.length < 2 || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [slides.length, reduce]);

  return (
    <div className={styles.slides} style={{ ["--slide-ms" as string]: `${INTERVAL}ms` }}>
      {slides.map((s, i) => (
        <figure key={i} className={styles.slide} data-active={i === index || undefined} aria-hidden={i !== index}>
          {s.image.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={s.image.src} alt={s.image.alt} className={styles.slideImg} />
          ) : (
            <div className={styles.slidePlaceholder}>{s.image.alt}</div>
          )}
          <figcaption className={styles.headline}>{s.headline}</figcaption>
        </figure>
      ))}
      {slides.length > 1 && (
        <div className={styles.progress}>
          {slides.map((_, i) => (
            <button
              key={`${i}-${i === index}`}
              type="button"
              className={styles.bar}
              data-active={i === index || undefined}
              data-done={i < index || undefined}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
