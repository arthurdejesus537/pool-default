"use client";

import { useRef } from "react";
import { Media, Pill, Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const track = useRef<HTMLUListElement>(null);
  const { portfolio } = site;
  if (!portfolio.enabled || portfolio.items.length < 3) return null;

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <Section guideKey="portfolio" id="portfolio" className={`${styles.projects} theme-dark`} header="cream">
      <div className="padding-global">
        <div className={styles.top}>
          <Tagline>{portfolio.tagline}</Tagline>
          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} aria-label="Previous project" onClick={() => scrollBy(-1)}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <button type="button" className={styles.arrow} aria-label="Next project" onClick={() => scrollBy(1)}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ul ref={track} className={styles.track}>
        {portfolio.items.map((p, i) => (
          <li key={i} className={styles.card}>
            <div className={styles.imageWrap}>
              <Media ratio="438 / 554" tone="dark" image={p.image} parallax={false} />
              {p.badge && (
                <span className={styles.badge}>
                  <Pill>{p.badge}</Pill>
                </span>
              )}
            </div>
            <h3 className={styles.title}>
              <span className={styles.name}>{p.name}</span>
              {p.place && (
                <>
                  <span className={styles.sep}> | </span>
                  <span className={styles.place}>{p.place}</span>
                </>
              )}
            </h3>
            <p className={styles.meta}>{[p.style, p.year].filter(Boolean).join(" / ")}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
