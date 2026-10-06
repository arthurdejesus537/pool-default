import { Button, Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const { pricing, contact } = site;
  if (!pricing.enabled || (pricing.items.length === 0 && !pricing.financing)) return null;

  return (
    <Section guideKey="pricing" id="pricing" className={`${styles.pricing} theme-light`} header="ink">
      <div className="padding-global">
        <div className={styles.top}>
          <Tagline>{pricing.tagline}</Tagline>
          <p className={styles.heading}>{pricing.heading}</p>
        </div>

        {pricing.items.length > 0 && (
          <ul className={styles.grid}>
            {pricing.items.map((item) => (
              <li key={`${item.name}-${item.price}`} className={styles.card}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.price}>{item.price}</p>
                {item.note && <p className={styles.note}>{item.note}</p>}
                {item.includes.length > 0 && (
                  <ul className={styles.includes}>
                    {item.includes.map((inc, i) => (
                      <li key={`${inc}-${i}`}>{inc}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.financing}>
          {pricing.financing ? (
            <p>
              <span className={styles.finLabel}>Financing</span>
              {pricing.financing.text}
              {pricing.financing.partner && <span className={styles.partner}> — {pricing.financing.partner}</span>}
            </p>
          ) : (
            <span />
          )}
          <Button href={pricing.financing?.href ?? contact.ctaHref} tone="ink">
            {pricing.financing?.href ? "Check financing" : contact.ctaLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
