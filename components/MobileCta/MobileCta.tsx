import { telHref } from "@/components/ui";
import { site } from "@/content/site";
import styles from "./MobileCta.module.css";

/** Barra fixa no rodapé da tela, só no celular: ligar + CTA primário. */
export default function MobileCta() {
  const { contact } = site;
  if (!contact.phone && !contact.ctaLabel) return null;

  return (
    <div className={styles.bar}>
      {contact.phone && (
        <a href={telHref(contact.phone)} className={styles.call}>
          Call
        </a>
      )}
      <a href={contact.ctaHref} className={styles.cta}>
        {contact.ctaLabel}
      </a>
    </div>
  );
}
