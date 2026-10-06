import { Accordion, LinkArrow, Media, Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Styles.module.css";

export default function Styles() {
  const { styles: pool, contact } = site;
  if (!pool.enabled || pool.items.length < 3) return null;

  return (
    <Section guideKey="styles" id="styles" className={`${styles.services} theme-light`} header="ink">
      <div className="padding-global">
        <div className={styles.grid}>
          <Media className={styles.mainImage} image={pool.image} />
          <div className={styles.side}>
            <Media ratio="474 / 569" image={pool.detailImage} />
            <div className={styles.list}>
              <Tagline>{pool.tagline}</Tagline>
              <Accordion items={pool.items} />
              <div className={styles.cta}>
                <LinkArrow href={contact.ctaHref}>{contact.ctaLabel}</LinkArrow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
