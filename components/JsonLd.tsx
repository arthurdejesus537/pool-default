import { site } from "@/content/site";

const isReal = (v: string | null | undefined): v is string => !!v && !/\[.*\]/.test(v);

/** JSON-LD só com dados reais: campos com [PLACEHOLDER] ficam de fora. */
export default function JsonLd() {
  const { brand, contact, areas, faq, meta } = site;
  const graph: object[] = [];

  if (isReal(brand.name)) {
    const showrooms = areas.showrooms.filter((s) => isReal(s.address));
    const base = {
      "@type": "HomeAndConstructionBusiness",
      name: brand.name,
      ...(isReal(meta.url) && { url: meta.url }),
      ...(isReal(contact.phone) && { telephone: contact.phone }),
      ...(isReal(contact.email) && { email: contact.email }),
      ...(areas.cities.filter(isReal).length > 0 && {
        areaServed: areas.cities.filter(isReal).map((c) => ({ "@type": "City", name: c })),
      }),
    };
    if (showrooms.length === 0) graph.push(base);
    showrooms.forEach((s) =>
      graph.push({
        ...base,
        name: `${brand.name} — ${s.name}`,
        address: s.address,
        ...(isReal(s.phone) && { telephone: s.phone }),
        ...(isReal(s.hours) && { openingHours: s.hours }),
      }),
    );
  }

  const qa = faq.items.filter((i) => isReal(i.q) && isReal(i.a));
  if (faq.enabled && qa.length >= 4) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: qa.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    });
  }

  if (graph.length === 0) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
