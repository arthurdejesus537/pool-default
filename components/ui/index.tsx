import type { ReactNode } from "react";
import { site } from "@/content/site";
import styles from "./ui.module.css";

export function Tagline({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h2" | "p" | "div" }) {
  return <Tag className={styles.tagline}>{children}</Tag>;
}

export function LinkArrow({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className={styles.linkArrow}>
      <span>{children}</span>
      <svg className={styles.linkArrowIcon} viewBox="0 0 14 15" fill="none" aria-hidden="true">
        <path d="M0 7.5h13M7.5 2l5.5 5.5L7.5 13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </a>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className={styles.pill}>{children}</span>;
}

/** CTA em pílula (mesma forma do selo do modelo). tone = cor de fundo. */
export function Button({
  href,
  children,
  tone = "cream",
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  tone?: "cream" | "ink";
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  const cls = `${styles.button} ${tone === "ink" ? styles.buttonInk : styles.buttonCream}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}

/** Wordmark em SVG: o texto escala para ocupar a largura do container, em duas linhas. */
export function Wordmark({ lines, label }: { lines: string[]; label: string }) {
  return (
    <span className={styles.wordmark} aria-label={label} role="img">
      <svg viewBox="0 0 282 102" aria-hidden="true">
        {lines.map((line, i) => (
          <text
            key={i}
            x="0"
            y={46 + i * 52}
            fontSize="56"
            textLength={Math.round((282 * line.length) / Math.max(...lines.map((l) => l.length)))}
            lengthAdjust="spacingAndGlyphs"
          >
            {line}
          </text>
        ))}
      </svg>
    </span>
  );
}

/** Logo do cliente se houver; senão, o wordmark em texto. */
export function Logo() {
  const { logo, wordmark, name } = site.brand;
  if (logo?.mono) {
    return (
      <span
        role="img"
        aria-label={name}
        className={styles.logoMono}
        style={{
          aspectRatio: `${logo.width} / ${logo.height}`,
          maskImage: `url(${logo.src})`,
          WebkitMaskImage: `url(${logo.src})`,
        }}
      />
    );
  }
  if (logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={styles.logoImg} src={logo.src} width={logo.width} height={logo.height} alt={name} />;
  }
  return <Wordmark lines={wordmark} label={name} />;
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export { default as Media } from "./Media";
export { default as RotatingCircle } from "./RotatingCircle";
export { default as Accordion } from "./Accordion";
