import { Tagline, telHref } from "@/components/ui";
import ConsultForm from "@/components/ConsultForm/ConsultForm";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Consultation.module.css";

export default function Consultation() {
  const { consultation, contact } = site;
  if (!consultation.enabled || (!contact.phone && !consultation.endpoint)) return null;

  return (
    <Section guideKey="consultation" id="consultation" className={`${styles.consultation} theme-dark`} header="cream">
      <div className="padding-global">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <Tagline>{consultation.tagline}</Tagline>
            <h2 className={styles.heading}>{consultation.heading}</h2>
            <p className={styles.body}>{consultation.body}</p>
            {contact.phone && (
              <a href={telHref(contact.phone)} className={styles.phone}>
                {contact.phone}
              </a>
            )}
          </div>
          <ConsultForm tone="dark" />
        </div>
      </div>
    </Section>
  );
}
