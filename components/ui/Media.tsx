"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Img } from "@/content/types";
import styles from "./ui.module.css";

type Props = {
  /** Proporção largura/altura, ex.: "1.95 / 1". Se omitido, ocupa a altura do pai. */
  ratio?: string;
  tone?: "light" | "dark";
  label?: string;
  /** Imagem do site.ts; src null mostra o placeholder com o alt como rótulo. */
  image?: Img;
  className?: string;
  style?: CSSProperties;
  parallax?: boolean;
};

/** Placeholder de mídia com parallax leve (a imagem é ~16% mais alta que o container). */
export default function Media({ ratio, tone = "light", label, image, className, style, parallax = true }: Props) {
  const src = image?.src ?? null;
  const alt = image?.alt ?? "";
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className={`${styles.media} ${tone === "dark" ? styles.mediaDark : ""} ${className ?? ""}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      <motion.div className={styles.mediaInner} style={parallax && !reduce ? { y } : undefined}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.mediaImg} src={src} alt={alt} />
        ) : (
          <span className={styles.mediaLabel}>{label ?? alt}</span>
        )}
      </motion.div>
    </div>
  );
}
