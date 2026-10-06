import { Logo, telHref } from "@/components/ui";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const { brand, contact, nav, footer, areas } = site;
  const main = areas.showrooms.find((s) => s.address);

  return (
    <footer className={`${styles.footer} theme-light`} data-header="ink">
      <div className="padding-global">
        <div className={styles.top}>
          <a href="#top" className={styles.logo} aria-label={`${brand.name} home`}>
            <Logo />
          </a>

          <div className={styles.menus}>
            <div className={styles.col}>
              <div className={styles.colHeading}>Visit</div>
              {main && <p className={styles.address}>{main.address}</p>}
              {contact.phone && (
                <a href={telHref(contact.phone)} className={styles.link}>
                  {contact.phone}
                </a>
              )}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className={styles.link}>
                  {contact.email}
                </a>
              )}
            </div>

            <div className={styles.split}>
              <div className={styles.col}>
                <div className={styles.colHeading}>Explore</div>
                {nav.map((l) => (
                  <a key={l.href} href={l.href} className={styles.link}>
                    {l.label}
                  </a>
                ))}
              </div>
              <div className={styles.col}>
                <div className={styles.colHeading}>Connect</div>
                <a href={contact.ctaHref} className={styles.link}>
                  Consultation
                </a>
                {footer.social.map((l) => (
                  <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.credit}>
            {footer.legal}
            {footer.license ? ` | ${footer.license}` : ""}
          </span>
          <a href="#top" className={styles.backTop}>
            Back to top
            <svg viewBox="0 0 10 12" fill="none" aria-hidden="true">
              <path d="M5 12V1M1 5l4-4 4 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
          {footer.credit && <span className={styles.credit}>{footer.credit}</span>}
        </div>
      </div>
    </footer>
  );
}
