"use client";

import { useSyncExternalStore } from "react";
import { guide, type GuideKey } from "@/content/guide";
import styles from "./GuideBand.module.css";

const subscribe = () => () => {};
const isGuide = () => new URLSearchParams(window.location.search).get("guide") === "1";

/** Faixa com propósito, regra de copy e dado mínimo da seção. Só aparece com ?guide=1. */
export default function GuideBand({ k }: { k: GuideKey }) {
  const show = useSyncExternalStore(subscribe, isGuide, () => false);
  if (!show) return null;
  const g = guide[k];

  return (
    <aside className={styles.band} aria-label={`Guide: ${k}`}>
      <strong className={styles.key}>{k}</strong>
      <span>
        <b>Job:</b> {g.purpose}
      </span>
      <span>
        <b>Copy:</b> {g.copy}
      </span>
      <span>
        <b>Minimum data:</b> {g.min}
      </span>
    </aside>
  );
}
