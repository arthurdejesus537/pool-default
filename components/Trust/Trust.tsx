import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Trust.module.css";

export default function Trust() {
  const { trust } = site;
  const items = trust.items.filter((i) => i.value && i.source);
  if (!trust.enabled || items.length < 2) return null;

  return (
    <Section guideKey="trust" className={`${styles.trust} theme-light`} header="ink">
      <div className="padding-global">
        <ul className={styles.grid} style={{ ["--cols" as string]: items.length }}>
          {items.map((item) => (
            <li key={`${item.label}-${item.value}`} className={styles.item}>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
