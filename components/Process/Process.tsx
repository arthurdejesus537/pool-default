"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LinkArrow, Media } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Process.module.css";

/** H2 que entra letra a letra de baixo para cima quando aparece na tela. */
function SplitHeading({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion();
  let index = 0;

  return (
    <motion.h2
      className={styles.heading}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, i) => (
        <span key={i} className={styles.headingLine} aria-hidden="true">
          {[...line].map((char, j) => {
            const delay = index++ * 0.03;
            return (
              <motion.span
                key={j}
                className={styles.char}
                variants={{
                  hidden: { y: reduce ? 0 : "100%" },
                  visible: { y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1], delay } },
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.h2>
  );
}

export default function Process() {
  const { process, contact } = site;
  if (!process.enabled || process.steps.length < 3) return null;

  return (
    <Section guideKey="process" id="process" className={`${styles.process} theme-sage`} header="cream">
      <div className="padding-global">
        <div className={styles.grid}>
          <div className={styles.left}>
            <SplitHeading lines={process.heading} />
            <div className={styles.body}>
              <p>{process.intro}</p>
              <ol className={styles.steps}>
                {process.steps.map((s, i) => (
                  <li key={`${s.title}-${i}`} className={styles.step}>
                    <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <strong className={styles.stepTitle}>{s.title}</strong>
                      {s.body}
                    </span>
                  </li>
                ))}
              </ol>
              {process.duration && <p className={styles.duration}>{process.duration}</p>}
              <div className={styles.cta}>
                <LinkArrow href={contact.ctaHref}>{contact.ctaLabel}</LinkArrow>
              </div>
            </div>
          </div>
          <Media className={styles.image} image={process.image} />
        </div>
      </div>
    </Section>
  );
}
