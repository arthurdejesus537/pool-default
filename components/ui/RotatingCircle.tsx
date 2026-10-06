"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "./ui.module.css";

/** Texto em círculo que gira conforme a rolagem da página. */
export default function RotatingCircle({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (v) => -v * 0.25);

  return (
    <motion.svg
      className={styles.circle}
      viewBox="0 0 250 250"
      aria-hidden="true"
      style={reduce ? undefined : { rotate }}
    >
      <defs>
        <path id="circle-path" d="M125,125 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0" />
      </defs>
      <text>
        <textPath href="#circle-path" textLength="628" lengthAdjust="spacingAndGlyphs">
          {text}
        </textPath>
      </text>
    </motion.svg>
  );
}
