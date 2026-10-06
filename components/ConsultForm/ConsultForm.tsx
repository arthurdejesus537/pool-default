"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { site } from "@/content/site";
import styles from "./ConsultForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "zip", label: "ZIP code", type: "text", autoComplete: "postal-code" },
] as const;

async function send(endpoint: string | null, data: FormData) {
  if (!endpoint) {
    // Modo demo: nada é enviado.
    await new Promise((r) => setTimeout(r, 500));
    return;
  }
  if (endpoint.includes("script.google.com")) {
    // Google Apps Script (planilha) não devolve CORS: envia sem ler a resposta.
    await fetch(endpoint, { method: "POST", body: data, mode: "no-cors" });
    return;
  }
  const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(String(res.status));
}

/**
 * Formulário em etapas: perguntas de escolha → contato → agradecimento.
 * tone = cor do fundo onde ele está (muda o contraste dos botões).
 */
export default function ConsultForm({ tone, onDone }: { tone: "light" | "dark"; onDone?: () => void }) {
  const { consultation, contact } = site;
  const { steps } = consultation;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const total = steps.length + 1;
  const buttonTone = tone === "light" ? "ink" : "cream";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    Object.entries(answers).forEach(([k, v]) => data.set(k, v));
    data.set("page", typeof window !== "undefined" ? window.location.href : "");
    data.set("submitted_at", new Date().toISOString());
    setFirstName(String(data.get("name") ?? "").trim().split(/\s+/)[0]);
    setStatus("sending");
    try {
      await send(consultation.endpoint, data);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.panel} role="status">
        <p className={styles.thanks}>{consultation.thanks.heading.replace("{name}", firstName || "")}</p>
        <p className={styles.body}>{consultation.thanks.body}</p>
        {onDone && (
          <div className={styles.actions}>
            <Button tone={buttonTone} onClick={onDone}>
              Back to the site
            </Button>
          </div>
        )}
      </div>
    );
  }

  const current = steps[step];

  return (
    <div className={styles.panel} data-tone={tone}>
      <p className={styles.counter}>
        Step {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>

      {current ? (
        <fieldset className={styles.fieldset} key={current.name}>
          <legend className={styles.question}>{current.question}</legend>
          <div className={styles.chips}>
            {current.options.map((opt) => {
              const selected = answers[current.name] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  className={styles.chip}
                  aria-pressed={selected}
                  onClick={() => setAnswers((a) => ({ ...a, [current.name]: opt }))}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <div className={styles.actions}>
            <Button tone={buttonTone} disabled={!answers[current.name]} onClick={() => setStep((s) => s + 1)}>
              Continue
            </Button>
            {step > 0 && (
              <button type="button" className={styles.back} onClick={() => setStep((s) => s - 1)}>
                Back
              </button>
            )}
          </div>
        </fieldset>
      ) : (
        <form className={styles.form} onSubmit={onSubmit}>
          <p className={styles.question}>{consultation.contactQuestion}</p>
          <div className={styles.fields}>
            {fields.map((f) => (
              <label key={f.name} className={styles.field}>
                <span className={styles.label}>{f.label}</span>
                <input className={styles.input} name={f.name} type={f.type} autoComplete={f.autoComplete} required />
              </label>
            ))}
          </div>
          <div className={styles.actions}>
            <Button type="submit" tone={buttonTone} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : consultation.submitLabel}
            </Button>
            <button type="button" className={styles.back} onClick={() => setStep((s) => s - 1)}>
              Back
            </button>
          </div>
          {status === "error" && (
            <p className={styles.error} role="alert">
              Something went wrong. Please call {contact.phone ?? "us"}.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
