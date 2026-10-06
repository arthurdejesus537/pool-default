import { Button, Media, telHref } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const { hero, contact } = site;
  if (!hero.enabled) return <div id="top" className={styles.spacer} data-header="ink" />;

  return (
    <Section guideKey="hero" id="top" className={`${styles.hero} theme-light`} header="ink">
      <div className="padding-global">
        <div className={styles.imageWrap}>
          <div className={styles.frame}>
            <Media ratio="1.95 / 1" image={hero.image} className={styles.media} />
            <h1 className={styles.headline}>
              {hero.headline.map((line, i) => (
                <span key={i} className={styles.line}>
                  {line.map((part, j) => (
                    <span key={j} className={part.weight === "thin" ? styles.thin : styles.bold}>
                      {part.text}
                      {j < line.length - 1 ? " " : ""}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>
          <div className={styles.ctaRow}>
            <Button href={contact.ctaHref}>{contact.ctaLabel}</Button>
            {contact.phone && (
              <a href={telHref(contact.phone)} className={styles.phone}>
                or call {contact.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
