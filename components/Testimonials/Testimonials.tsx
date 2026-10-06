import { Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const { testimonials } = site;
  const items = testimonials.items.filter((t) => t.quote && t.author && t.source);
  if (!testimonials.enabled || items.length < 2) return null;
  const { rating } = testimonials;

  return (
    <Section guideKey="testimonials" id="reviews" className={`${styles.testimonials} theme-light`} header="ink">
      <div className="padding-global">
        <div className={styles.top}>
          <Tagline>{testimonials.tagline}</Tagline>
          {rating && (
            <p className={styles.rating}>
              <span className={styles.ratingValue}>{rating.value}</span>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>
                {rating.count} reviews on {rating.source}
              </span>
            </p>
          )}
        </div>
        <ul className={styles.grid}>
          {items.map((t, i) => (
            <li key={i} className={styles.item}>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <p className={styles.author}>
                {t.author} · {t.source}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
