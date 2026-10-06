import { Accordion, Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Faq.module.css";

export default function Faq() {
  const { faq } = site;
  const items = faq.items.filter((i) => i.q && i.a);
  if (!faq.enabled || items.length < 4) return null;

  return (
    <Section guideKey="faq" id="faq" className={`${styles.faq} theme-light`} header="ink">
      <div className="padding-global">
        <div className={styles.grid}>
          <div>
            <Tagline>{faq.tagline}</Tagline>
            <p className={styles.heading}>{faq.heading}</p>
          </div>
          <Accordion items={items.map((i) => ({ title: i.q, body: i.a }))} numbered={false} size="md" />
        </div>
      </div>
    </Section>
  );
}
