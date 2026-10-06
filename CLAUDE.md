# pool-default — template de site para pool builders (EUA)

## O que é
Template de site de construtora de piscinas residenciais nos EUA. O design vem do clone `~/site-build` (tag `v1.0-modelo`), documentado em `SITE-MESTRE.md`. O que cada seção faz, que dado consome e como a copy é escrita está em `docs/NICHO-TEMPLATE.md`. Cada cliente nasce de uma cópia deste projeto em `~/clientes/<slug>`.

**Nunca entra aqui:** conteúdo de cliente (texto, nome, número, foto, cor, link) nem nada do site de referência (logo, fotos, textos, fonte paga).

## Três decisões técnicas
1. **Todo texto e dado do cliente num arquivo só: `content/site.ts`** (tipos em `content/types.ts`). Para montar um cliente, troca-se esse arquivo e as imagens em `public/cliente/`, sem mexer em componente.
2. **Modo guia:** com `?guide=1` na URL, cada seção mostra uma faixa com o propósito, a regra de copy e o dado mínimo (`content/guide.ts`, componente `components/Section/GuideBand`). Sem o parâmetro, o site aparece limpo.
3. **Cada seção tem `enabled: true/false`** no `site.ts` e some quando desligada ou quando falta o dado mínimo (NICHO-TEMPLATE §6), sem quebrar o layout.

## Stack
- Next.js 16 (App Router, TypeScript). Antes de usar uma API do Next, confira `node_modules/next/dist/docs/` (ver AGENTS.md).
- CSS puro: tokens em `styles/tokens.css` + CSS Modules. Sem Tailwind, sem shadcn.
- Framer Motion só em movimento do design (header, círculo, letras do H2, parallax).
- Fonte Inter Tight via `next/font/google`.
- Servidor dev fixo na **porta 3100** (`npm run dev`).

## Pastas
```
app/                  layout.tsx (metadata do site.ts), page.tsx (ordem das seções)
content/              site.ts (dados), types.ts, guide.ts
components/Section/   Section (âncora, cor do header, faixa guia) + GuideBand
components/<Seção>/   Hero, About, Trust, Portfolio, Styles, Why, Pricing, Process,
                      Quote, Testimonials, Areas, Faq, Consultation, Footer, MobileCta
components/ui/        Tagline, LinkArrow, Pill, Button, Logo, Media, Accordion, RotatingCircle
components/JsonLd.tsx JSON-LD só com dados reais (ignora [PLACEHOLDER])
docs/                 NICHO-TEMPLATE.md, PROMPTS-TEMPLATE.md, PROGRESS.md
```

## Regras de trabalho
1. Dado e texto só em `content/site.ts`. Nenhum texto hardcoded em componente (exceto rótulos de interface como "Call", "Back to top").
2. Tokens primeiro: nenhum valor de cor, fonte ou espaço solto em componente.
3. Seção nova = componente + campo no `types.ts`/`site.ts` (placeholder ou null) + entrada no `guide.ts` + seção no NICHO-TEMPLATE.
4. Placeholder sempre entre colchetes, explicando o que entra: `[PLACEHOLDER — ...]`.
5. Nunca inventar conteúdo de cliente. Clichês proibidos: "crystal clear", "oasis", "dive in", "paradise", "backyard dreams".
6. Conferir em 1440 e 375, com e sem `?guide=1`. `npm run build` e `npm run lint` sem erro antes de cada commit.
7. Sem sombra, sem gradiente, cantos retos (exceto pílulas e círculos).

## Convenção de commits
- `conteudo:` dados, textos e fotos.
- `template:` qualquer mudança de sistema (componente, CSS, seção, tipo, bug).

## Sessões
Toda tarefa grande começa com `/retomar` e termina com `/salvar` antes do `/clear`.

## Comandos
```
npm run dev      # localhost:3100
npm run build
npm run lint
```

@AGENTS.md
