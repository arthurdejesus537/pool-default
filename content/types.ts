// Formato de content/site.ts. Para montar um cliente, troca-se só site.ts e as imagens.

export type Link = { label: string; href: string };

/** Imagem do cliente. src null = placeholder cinza. */
export type Img = { src: string | null; alt: string };

export type HeadlinePart = { text: string; weight: "thin" | "bold" };

type Section = { enabled: boolean };

export type Site = {
  meta: { title: string; description: string; url: string | null; noindex: boolean };
  brand: {
    name: string;
    /** Logo do cliente (SVG/PNG em public/cliente). null = wordmark em texto.
     *  mono: true pinta o logo com a cor do texto (segue o tom do header e do footer). */
    logo: { src: string; width: number; height: number; mono?: boolean } | null;
    wordmark: string[];
    circleText: string;
  };
  contact: {
    phone: string | null;
    email: string | null;
    ctaLabel: string;
    ctaHref: string;
  };
  nav: Link[];
  hero: Section & { headline: HeadlinePart[][]; image: Img };
  about: Section & { tagline: string; lead: string; paragraphs: string[] };
  trust: Section & { items: { value: string; label: string; source: string }[] };
  portfolio: Section & {
    tagline: string;
    items: { name: string; place: string; style: string; year: string | null; badge: string | null; image: Img }[];
  };
  styles: Section & {
    tagline: string;
    image: Img;
    detailImage: Img;
    items: { title: string; body: string }[];
  };
  why: Section & { tagline: string; body: string; imageA: Img; imageB: Img };
  pricing: Section & {
    tagline: string;
    heading: string;
    items: { name: string; price: string; note: string | null; includes: string[] }[];
    financing: { text: string; partner: string | null; href: string | null } | null;
  };
  process: Section & {
    heading: string[];
    intro: string;
    steps: { title: string; body: string }[];
    duration: string | null;
    image: Img;
  };
  quote: Section & { text: string; author: string; image: Img };
  testimonials: Section & {
    tagline: string;
    rating: { value: string; count: string; source: string } | null;
    items: { quote: string; author: string; source: string }[];
  };
  areas: Section & {
    tagline: string;
    heading: string;
    cities: string[];
    showrooms: { name: string; address: string; hours: string | null; phone: string | null; mapHref: string | null }[];
  };
  faq: Section & { tagline: string; heading: string; items: { q: string; a: string }[] };
  consultation: Section & {
    tagline: string;
    heading: string;
    body: string;
    /** URL que recebe o POST do formulário (Formspree, Google Apps Script…). null = modo demo. */
    endpoint: string | null;
    /** Perguntas de múltipla escolha antes do contato (uma por etapa). */
    steps: { name: string; question: string; options: string[] }[];
    contactQuestion: string;
    submitLabel: string;
    /** {name} vira o primeiro nome digitado. */
    thanks: { heading: string; body: string };
    /** Carrossel do painel do formulário: frase curta sobre cada foto. */
    slides: { headline: string; image: Img }[];
  };
  footer: { legal: string; license: string | null; social: Link[]; credit: string | null };
};
