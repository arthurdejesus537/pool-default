import { LinkArrow, Tagline, telHref } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Areas.module.css";

export default function Areas() {
  const { areas } = site;
  const showrooms = areas.showrooms.filter((s) => s.address);
  if (!areas.enabled || (areas.cities.length < 3 && showrooms.length === 0)) return null;

  return (
    <Section guideKey="areas" id="areas" className={`${styles.areas} theme-dark`} header="cream">
      <div className="padding-global">
        <div className={styles.grid}>
          <div>
            <Tagline>{areas.tagline}</Tagline>
            <p className={styles.heading}>{areas.heading}</p>
            {areas.cities.length > 0 && (
              <ul className={styles.cities}>
                {areas.cities.map((c, i) => (
                  <li key={`${c}-${i}`}>{c}</li>
                ))}
              </ul>
            )}
          </div>

          {showrooms.length > 0 && (
            <ul className={styles.showrooms}>
              {showrooms.map((s) => (
                <li key={`${s.name}-${s.address}`} className={styles.showroom}>
                  <h3 className={styles.showroomName}>{s.name}</h3>
                  <p>{s.address}</p>
                  {s.hours && <p className={styles.hours}>{s.hours}</p>}
                  {s.phone && (
                    <p>
                      <a href={telHref(s.phone)} className={styles.phone}>
                        {s.phone}
                      </a>
                    </p>
                  )}
                  {s.mapHref && (
                    <div className={styles.map}>
                      <LinkArrow href={s.mapHref}>Get directions</LinkArrow>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
