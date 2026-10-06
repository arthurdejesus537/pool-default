import { Media, Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Why.module.css";

export default function Why() {
  const { why } = site;
  if (!why.enabled || !why.body) return null;

  return (
    <Section guideKey="why" className={`${styles.intro} theme-dark`} header="cream">
      <div className="padding-global">
        <div className={styles.grid}>
          <div>
            <Media ratio="483 / 753" tone="dark" image={why.imageA} />
            <div className={styles.text}>
              <Tagline>{why.tagline}</Tagline>
              <p>{why.body}</p>
            </div>
          </div>
          <Media className={styles.mainImage} tone="dark" image={why.imageB} />
        </div>
      </div>
    </Section>
  );
}
