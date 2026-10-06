"use client";

import { useEffect, useState } from "react";
import { Logo, telHref } from "@/components/ui";
import { site } from "@/content/site";
import styles from "./Header.module.css";

type Tone = "ink" | "cream";

/** Lê o tema da seção que está atrás do header (data-header nas seções). */
function toneBehind(y: number): Tone {
  const sections = document.querySelectorAll<HTMLElement>("[data-header]");
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top <= y && r.bottom > y) return s.dataset.header as Tone;
  }
  return "ink";
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [tone, setTone] = useState<Tone>("ink");
  const [open, setOpen] = useState(false);
  const { nav, contact, brand } = site;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
      setTone(toneBehind(40));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const shownTone: Tone = open ? "cream" : tone;

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined} data-tone={shownTone}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)} aria-label={`${brand.name} home`}>
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={contact.ctaHref} className={styles.cta}>
            {contact.ctaLabel}
          </a>
        </nav>

        <div className={styles.mobileRight}>
          {contact.phone && (
            <a href={telHref(contact.phone)} className={styles.phone}>
              {contact.phone}
            </a>
          )}
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={styles.overlay} data-open={open || undefined} aria-hidden={!open}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contact.ctaHref}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={styles.overlayCta}
            >
              {contact.ctaLabel}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
