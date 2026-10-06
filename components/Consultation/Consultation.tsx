"use client";

import { useState, type FormEvent } from "react";
import { Button, Tagline, telHref } from "@/components/ui";
import Section from "@/components/Section/Section";
import { site } from "@/content/site";
import styles from "./Consultation.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "zip", label: "ZIP code", type: "text", autoComplete: "postal-code", required: true },
] as const;

export default function Consultation() {
  const { consultation, contact } = site;
  const [status, setStatus] = useState<Status>("idle");
  if (!consultation.enabled || (!contact.phone && !consultation.endpoint)) return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      if (consultation.endpoint) {
        const res = await fetch(consultation.endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        // Modo demo: sem endpoint, nada é enviado.
        await new Promise((r) => setTimeout(r, 500));
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

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

          {status === "sent" ? (
            <p className={styles.success} role="status">
              {consultation.success}
            </p>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              {fields.map((f) => (
                <label key={f.name} className={styles.field}>
                  <span className={styles.label}>{f.label}</span>
                  <input
                    className={styles.input}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required={f.required}
                  />
                </label>
              ))}
              <label className={`${styles.field} ${styles.full}`}>
                <span className={styles.label}>Tell us about your backyard (optional)</span>
                <textarea className={styles.input} name="message" rows={3} />
              </label>
              <div className={styles.actions}>
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : contact.ctaLabel}
                </Button>
                {status === "error" && (
                  <p className={styles.error} role="alert">
                    Something went wrong. Please call {contact.phone ?? "us"}.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
