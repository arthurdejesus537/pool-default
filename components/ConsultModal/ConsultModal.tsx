"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ConsultForm from "@/components/ConsultForm/ConsultForm";
import { site } from "@/content/site";
import Slides from "./Slides";
import styles from "./ConsultModal.module.css";

/**
 * Painel do formulário sobre o site com fundo desfocado.
 * Abre em qualquer clique num link para contact.ctaHref (ex.: #consultation).
 */
export default function ConsultModal() {
  const { consultation, contact } = site;
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!consultation.enabled) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a");
      if (!a || a.getAttribute("href") !== contact.ctaHref) return;
      e.preventDefault();
      lastFocus.current = a;
      setSession((n) => n + 1);
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consultation.enabled, contact.ctaHref]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [open]);

  if (!consultation.enabled) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <motion.div
            className={styles.card}
            role="dialog"
            aria-modal="true"
            aria-label={consultation.heading}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            {consultation.slides.length > 0 && <Slides slides={consultation.slides} />}
            <div className={styles.formSide}>
              <button ref={closeRef} type="button" className={styles.close} aria-label="Close" onClick={() => setOpen(false)} />
              <p className={styles.tagline}>{consultation.heading}</p>
              <ConsultForm key={session} tone="light" onDone={() => setOpen(false)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
