// Faixas do modo guia (?guide=1). Resumo do docs/NICHO-TEMPLATE.md §5–6.

export type GuideKey =
  | "hero"
  | "about"
  | "trust"
  | "portfolio"
  | "styles"
  | "why"
  | "pricing"
  | "process"
  | "quote"
  | "testimonials"
  | "areas"
  | "faq"
  | "consultation"
  | "footer";

export const guide: Record<GuideKey, { purpose: string; copy: string; min: string }> = {
  hero: {
    purpose: "Say in 2 seconds what you build, where, and the next step.",
    copy: "2 lines, max 4 words each, uppercase. Bold word = benefit or pool type. No company name.",
    min: "Headline + 1 photo",
  },
  about: {
    purpose: "Who they are and where they build.",
    copy: "Lead: one sentence with city/region. Then: what, for whom, service area, invitation.",
    min: "Lead + 1 paragraph",
  },
  trust: {
    purpose: "Fast proof right under the hero.",
    copy: "Only verifiable numbers: years, pools built, rating + count, license number. No source = remove.",
    min: "2 items with source",
  },
  portfolio: {
    purpose: "Show real, beautiful work.",
    copy: "Project or street name (never the homeowner), city, style in 1–3 words.",
    min: "3 projects with photo",
  },
  styles: {
    purpose: "Prove they build what the buyer wants.",
    copy: "Title = style name. Body: when to choose it, in buyer language, 1–2 sentences.",
    min: "3 styles",
  },
  why: {
    purpose: "Concrete differentiator vs. competitors.",
    copy: "3–4 factual sentences (crews, design, warranty, showroom). No 'quality and excellence'.",
    min: "Text + 1 photo",
  },
  pricing: {
    purpose: "Answer the question that kills conversion.",
    copy: "Price exactly as published. Note what changes it. Real financing partner and terms.",
    min: "1 published price or real financing",
  },
  process: {
    purpose: "Remove fear of months of construction.",
    copy: "4–6 steps from consultation to first swim. Timeline only if the client states it.",
    min: "3 steps",
  },
  quote: {
    purpose: "Human face and the owner's commitment.",
    copy: "Never write it. Owner's real words only; cut, don't rewrite.",
    min: "Real quote with author",
  },
  testimonials: {
    purpose: "Social proof from past buyers.",
    copy: "Exact text, cut at the strongest sentence. Author as shown at the source.",
    min: "2 testimonials with author and source",
  },
  areas: {
    purpose: "“Do you build in my city? Where can I see it?”",
    copy: "Cities as the client lists them. Exact address and hours.",
    min: "3 cities or 1 showroom with address",
  },
  faq: {
    purpose: "Sales section: answer objections. Feeds FAQPage JSON-LD.",
    copy: "5–8 real buyer questions (cost, timeline, financing, license, warranty). Facts only.",
    min: "4 answered questions",
  },
  consultation: {
    purpose: "Convert. The only job of the site.",
    copy: "Heading = primary CTA. Body = what happens next (only true promises). Short form.",
    min: "Phone or form endpoint",
  },
  footer: {
    purpose: "Contact, license and links.",
    copy: "Legal name, license number, main showroom.",
    min: "—",
  },
};
