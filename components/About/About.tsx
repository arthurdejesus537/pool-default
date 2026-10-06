import { RotatingCircle, Tagline } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./About.module.css";

export default function About() {
  const { about, brand, contact } = site;
  if (!about.enabled || !about.lead) return null;

  return (
    <Section guideKey="about" id="about" className={`${styles.about} theme-light`} header="ink">
      <div className="padding-global">
        <div className={styles.content}>
          <Tagline>{about.tagline}</Tagline>
          <div className={styles.text}>
            <p className={styles.lead}>{about.lead}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              <a href={contact.ctaHref} className={styles.inlineLink}>
                {contact.ctaLabel}
              </a>
            </p>
          </div>
          <div className={styles.circle}>
            <RotatingCircle text={brand.circleText} />
          </div>
        </div>
      </div>
    </Section>
  );
}
