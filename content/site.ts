import type { Img, Site } from "./types";

// TEMPLATE — todo texto e dado do cliente fica aqui. Placeholders entre colchetes
// explicam o que entra. Regras de cada seção: docs/NICHO-TEMPLATE.md (§5 e §6).

const ph = (alt: string): Img => ({ src: null, alt });

export const site: Site = {
  meta: {
    title: "[POOL TYPE] Builder in [CITY, STATE] | [BRAND]",
    description: "[PLACEHOLDER — up to 155 characters: what you build, where, and the next step.]",
    url: null,
    noindex: true,
  },

  brand: {
    name: "[BRAND]",
    logo: null,
    wordmark: ["YOUR", "BRAND"],
    circleText: "[BRAND] • [BRAND] • [BRAND] • ",
  },

  contact: {
    phone: "[PHONE]",
    email: "[EMAIL]",
    ctaLabel: "Book a design consultation",
    ctaHref: "#consultation",
  },

  nav: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Styles", href: "#styles" },
    { label: "Pricing", href: "#pricing" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    enabled: true,
    headline: [
      [
        { text: "[HEADLINE]", weight: "thin" },
        { text: "[KEYWORD]", weight: "bold" },
      ],
      [{ text: "[SECOND LINE]", weight: "bold" }],
    ],
    image: ph("[Best horizontal photo of a finished pool]"),
  },

  about: {
    enabled: true,
    tagline: "About [BRAND]",
    lead: "[PLACEHOLDER — one sentence: what you build and in which city or region.]",
    paragraphs: [
      "[PLACEHOLDER — what the company builds and how, two or three sentences.]",
      "[PLACEHOLDER — who hires you and why, one or two sentences.]",
      "[PLACEHOLDER — service area: cities and regions served.]",
      "[PLACEHOLDER — invitation to book a consultation.]",
    ],
  },

  trust: {
    enabled: true,
    items: [
      { value: "[00]", label: "Years building pools", source: "[URL]" },
      { value: "[0,000+]", label: "Pools built", source: "[URL]" },
      { value: "[4.9]", label: "[Review platform] rating", source: "[URL]" },
      { value: "[ROC 000000]", label: "Licensed & insured", source: "[URL]" },
    ],
  },

  portfolio: {
    enabled: true,
    tagline: "Recent pools",
    items: Array.from({ length: 6 }, (_, i) => ({
      name: `[PROJECT ${i + 1}]`,
      place: "[CITY]",
      style: "[STYLE]",
      year: "[YEAR]",
      badge: i === 0 ? "[FEATURED]" : null,
      image: ph(`[Portfolio photo ${i + 1}]`),
    })),
  },

  styles: {
    enabled: true,
    tagline: "Pools we build",
    image: ph("[Large photo of a signature pool]"),
    detailImage: ph("[Detail photo: tile, water feature or spa]"),
    items: [
      { title: "Geometric", body: "[PLACEHOLDER — when to choose this style, one or two sentences.]" },
      { title: "Freeform", body: "[PLACEHOLDER — when to choose this style, one or two sentences.]" },
      { title: "Infinity edge", body: "[PLACEHOLDER — when to choose this style, one or two sentences.]" },
      { title: "Pool & spa", body: "[PLACEHOLDER — when to choose this style, one or two sentences.]" },
    ],
  },

  why: {
    enabled: true,
    tagline: "Why [BRAND]",
    body: "[PLACEHOLDER — three or four sentences of concrete differentiators: in-house crews, 3D design, warranty, showroom. Facts only.]",
    imageA: ph("[Portrait photo: crew at work or detail]"),
    imageB: ph("[Large photo of a finished backyard]"),
  },

  pricing: {
    enabled: true,
    tagline: "Pricing & financing",
    heading: "[PLACEHOLDER — short line about transparent pricing]",
    items: [
      {
        name: "[PACKAGE 1]",
        price: "Starting at $[00,000]",
        note: "[PLACEHOLDER — what changes the price.]",
        includes: ["[Included item]", "[Included item]", "[Included item]"],
      },
      {
        name: "[PACKAGE 2]",
        price: "Starting at $[00,000]",
        note: "[PLACEHOLDER — what changes the price.]",
        includes: ["[Included item]", "[Included item]", "[Included item]"],
      },
      {
        name: "[PACKAGE 3]",
        price: "Starting at $[00,000]",
        note: "[PLACEHOLDER — what changes the price.]",
        includes: ["[Included item]", "[Included item]", "[Included item]"],
      },
    ],
    financing: {
      text: "[PLACEHOLDER — financing terms exactly as the client offers them.]",
      partner: "[LENDER]",
      href: null,
    },
  },

  process: {
    enabled: true,
    heading: ["OUR", "PROCESS"],
    intro: "[PLACEHOLDER — one sentence on how a project runs from first call to first swim.]",
    steps: [
      { title: "Consultation", body: "[PLACEHOLDER — one sentence.]" },
      { title: "Design", body: "[PLACEHOLDER — one sentence.]" },
      { title: "Permits", body: "[PLACEHOLDER — one sentence.]" },
      { title: "Construction", body: "[PLACEHOLDER — one sentence.]" },
      { title: "First swim", body: "[PLACEHOLDER — one sentence.]" },
    ],
    duration: "[Typical timeline, only if the client states it]",
    image: ph("[Construction or design photo]"),
  },

  quote: {
    enabled: true,
    text: "“[PLACEHOLDER — the owner's real words. Never write this: copy it from the client's site, video or interview.]”",
    author: "– [NAME], [ROLE]",
    image: ph("[Atmospheric photo for the quote background]"),
  },

  testimonials: {
    enabled: true,
    tagline: "What clients say",
    rating: { value: "[4.9]", count: "[000]", source: "[Review platform]" },
    items: [1, 2, 3].map((n) => ({
      quote: `“[PLACEHOLDER — exact testimonial ${n}, cut at the strongest sentence, never rewritten.]”`,
      author: "[NAME, CITY]",
      source: "[SOURCE]",
    })),
  },

  areas: {
    enabled: true,
    tagline: "Service area",
    heading: "[PLACEHOLDER — where you build]",
    cities: ["[CITY]", "[CITY]", "[CITY]", "[CITY]", "[CITY]", "[CITY]"],
    showrooms: [
      {
        name: "[SHOWROOM]",
        address: "[STREET, CITY, STATE ZIP]",
        hours: "[HOURS]",
        phone: "[PHONE]",
        mapHref: null,
      },
    ],
  },

  faq: {
    enabled: true,
    tagline: "FAQ",
    heading: "Questions before you build",
    items: [
      { q: "How much does a pool cost?", a: "[PLACEHOLDER — answer with the client's real numbers.]" },
      { q: "How long does it take?", a: "[PLACEHOLDER — answer with the client's real timeline.]" },
      { q: "Do you offer financing?", a: "[PLACEHOLDER — answer with the client's real financing.]" },
      { q: "Are you licensed and insured?", a: "[PLACEHOLDER — license number and insurance.]" },
      { q: "What warranty do you offer?", a: "[PLACEHOLDER — warranty terms exactly as published.]" },
    ],
  },

  consultation: {
    enabled: true,
    tagline: "Start your project",
    heading: "Book a design consultation",
    body: "[PLACEHOLDER — what happens after the form is sent. Only promises the client keeps.]",
    endpoint: null,
    success: "Thanks — we received your request and will be in touch.",
  },

  footer: {
    legal: "©[YEAR] [LEGAL NAME]",
    license: "[LICENSE NUMBER]",
    social: [
      { label: "[SOCIAL 1]", href: "#" },
      { label: "[SOCIAL 2]", href: "#" },
    ],
    credit: null,
  },
};
