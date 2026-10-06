import { Media } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Quote.module.css";

export default function Quote() {
  const { quote } = site;
  if (!quote.enabled || !quote.text || !quote.author) return null;

  return (
    <Section guideKey="quote" className={styles.quote} header="cream">
      <Media className={styles.bg} tone="dark" image={quote.image} label="" />
      <div className={styles.overlay} />
      <div className={`${styles.content} padding-global`}>
        <blockquote className={styles.text}>
          <p>{quote.text}</p>
          <footer className={styles.author}>{quote.author}</footer>
        </blockquote>
      </div>
    </Section>
  );
}
