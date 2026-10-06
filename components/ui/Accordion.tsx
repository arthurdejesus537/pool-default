"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";

/** Lista numerada com divisória de 1px; um item aberto por vez. */
export default function Accordion({
  items,
  numbered = true,
  size = "lg",
}: {
  items: { title: string; body: string }[];
  numbered?: boolean;
  size?: "lg" | "md";
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className={styles.item}>
            <button
              type="button"
              className={styles.head}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {numbered && <span className={styles.num}>{i + 1}</span>}
              <span className={size === "lg" ? styles.titleLg : styles.titleMd}>{item.title}</span>
              <span className={styles.icon} aria-hidden="true" />
            </button>
            <div className={styles.body} data-open={isOpen || undefined}>
              <div>
                <p className={numbered ? styles.indent : undefined}>{item.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
