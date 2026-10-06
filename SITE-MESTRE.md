# SITE-MESTRE — sistema de design de referência

Referência: https://www.infinitybuilt.com.au/ (Webflow, Client-First, layout estático).
Medido em 06/10/2026 com o navegador em 1440×900, 768×1024 e 375×812.

Legenda: ✅ medido no original (estilo computado) · 🔶 estimado (medir antes de usar)

---

## 1. DNA do site

- **Editorial e silencioso.** Duas cores quase opostas (verde-creme e grafite), fotografia grande e quase nenhum ornamento.
- **Fotografia manda.** Imagens ocupam a largura útil inteira, cantos retos, sem moldura nem sombra.
- **Contraste de peso tipográfico.** Uma família só (neo-grotesca) indo de 100 (Thin) a 700 (Bold) na mesma linha: "INFINITELY" fino + "BETTER" grosso.
- **Rótulos pequenos em caixa alta e espaçados** (12px, tracking 0.16em) abrem cada seção. Títulos grandes são raros.
- **Seções alternam o fundo** (claro → escuro → claro → escuro → cinza → foto → claro), e o header inverte a cor junto.
- **Sem botões preenchidos.** CTA é texto com sublinhado de 1px e seta. Os únicos elementos arredondados são o selo "Coming soon" (pílula) e as setas do carrossel (círculo com borda).
- **Margem lateral fixa de 40px** e grid de 2 colunas assimétricas em quase todas as seções.

## 2. Paleta

| Token | Valor | Uso | |
| --- | --- | --- | --- |
| `--color-cream` | `#E7F1DB` (rgb 231 241 219) | Fundo claro (hero, serviços, footer) e texto sobre escuro | ✅ |
| `--color-ink` | `#272727` (rgb 39 39 39) | Fundo escuro (body, projetos, intro) e texto sobre claro | ✅ |
| `--color-sage` | `#898F8C` (rgb 137 143 140) | Fundo da seção de processo | ✅ |
| `--color-overlay` | `rgba(75, 75, 75, 0.45)` | Véu sobre a foto da citação | ✅ |
| `--color-line` | `currentColor` 1px | Divisórias (lista de serviços, footer) | ✅ |

Regras: nunca usar uma terceira cor de destaque; texto sempre `cream` sobre `ink`/`sage`/foto e `ink` sobre `cream`. Sem gradientes.

## 3. Tipografia

**Fonte original:** PP Neue Montreal (Pangram Pangram, paga) nos pesos 100, 400, 500 e 700 ✅. Não copiar os arquivos.
**Substituta gratuita:** **Inter Tight** (Google Fonts, pesos 100–900; tem o Thin necessário para o hero). Alternativa: Hanken Grotesk.
**Logo:** wordmark próprio em SVG (fonte display pesada). Não copiar; usar o nome do cliente em texto ou o logo dele.

| Papel | Tamanho | Peso | Altura de linha | Tracking | Caixa | |
| --- | --- | --- | --- | --- | --- | --- |
| Display hero (H1) | 72px | 100 + 700 | 0.91 (65.52px) | -0.02em (-1.44px) | alta | ✅ |
| H2 seção (processo) | 64px (768: 56px, 375: 40px) | 700 | 1.0 | -0.02em | alta | ✅ |
| Citação (H5) | 32px (375: 24px) | 500 | 1.15 (36.8px) | -0.02em | normal | ✅ |
| Item de serviço (H6) | 24px | 400/500 | 1.0 | normal | normal | ✅ |
| Título de projeto | 20px | 400 nome / 500 bairro | 1.1–1.25 | -0.03em (-0.6px) | alta | ✅ |
| Corpo | 16px | 400 (lead 500) | 1.25 (20px) | normal | normal | ✅ |
| Link do footer | 16px | 500 | 1.25 | normal | normal | ✅ |
| Nav | 14.08px (0.88rem) | 700 | 1.25 | -0.02em | alta | ✅ |
| Tagline / rótulo | 12px | 500 | 1.5 (18px) | 0.16em (1.92px) | alta | ✅ |
| Meta de projeto / créditos | 12px | 400 | 1.25 | normal / 0.02em | alta | ✅ |
| Título de coluna do footer | 10.08px (0.63rem) | 500 | 1.25 | 0.19em | alta | ✅ |

## 4. Espaçamento e grid

| Token | Valor | |
| --- | --- | --- |
| Margem lateral (`padding-global`) | 40px desktop e tablet · 20px celular | ✅ |
| Largura máxima | nenhuma (fluido; conteúdo = viewport − 80px) | ✅ |
| Seção large (padding-bottom do hero) | 112px · celular 48px | ✅ |
| Seção medium | 80px · celular 32px | ✅ |
| Seção small | 40px | ✅ |
| Gap de grid | 16 / 32 / 40 / 48px | ✅ |
| Header | padding 40px (topo) → 24px 40px ao rolar | ✅ |

Grids medidos em 1440 (conteúdo 1345px):

| Seção | Colunas | Gap | |
| --- | --- | --- | --- |
| Hero, texto | 1fr 1fr (rótulo à esquerda, texto começa a 231px, círculo à direita) | 32px | ✅ |
| Serviços | 831px / 474px (≈ 1.75fr 1fr) | 40px | ✅ |
| Intro | 482px / 846px (≈ 1fr 1.75fr) | 16px | ✅ |
| Processo | 537px / 768px (≈ 0.7fr 1fr) | 40px | ✅ |
| Footer | 464px / 833px; menu 1fr 1fr | 48px / 16px | ✅ |
| Carrossel de projetos | slides de 438px, gap 16px (3 por tela) | | ✅ |

## 5. Componentes

- **Tagline:** 12px/500, tracking 0.16em, caixa alta, padding-bottom 20px. ✅
- **CTA link ("Explore Our Projects", "Learn More"):** 16px/400, padding 8px 0 9px, gap 32px até a seta (SVG 14×15), sublinhado de 1px na largura toda. ✅ (sublinhado como borda 🔶 — confirmar se é pseudo-elemento)
- **Selo "Coming soon":** pílula, fundo `ink`, texto `cream` 12px/500 tracking 0.16em, padding 12px 20px, raio 160px, posicionado a 20px do canto superior direito da foto. ✅
- **Seta de carrossel:** círculo 50×50, borda 1px `cream`, padding 12px, gap 16px entre as duas; transição de cor 0.2s. ✅
- **Card de projeto:** foto 438×620 (≈ 0.71, retrato) com `object-fit: cover`, título "RUA | BAIRRO" 20px abaixo, meta "TIPO / ANO" 12px. ✅
- **Linha de serviço (acordeão):** altura 49px, borda superior 1px, número pequeno sobrescrito à esquerda + nome 24px. ✅ (conteúdo expandido 🔶)
- **Círculo de texto girando:** SVG 249×249 com texto em círculo, gira com a rolagem. ✅
- **Cantos:** 0 em tudo, exceto pílula e círculos. Sem sombras. ✅

## 6. Estrutura da home

| # | Seção | Fundo | Altura (1440) | Conteúdo | |
| --- | --- | --- | --- | --- | --- |
| 6.1 | Hero | cream | 1352px | Foto 1345×690 (aspect 1.95/1) começando em y=206; H1 em 2 linhas no canto inferior direito da foto (800px de largura); abaixo, grid com tagline + 4 parágrafos (599px) + círculo girando | ✅ |
| 6.2 | Projetos | ink | 878px | Tagline à esquerda, setas à direita (mesma linha); carrossel de cards | ✅ |
| 6.3 | Serviços | cream | 987px | Foto grande à esquerda (831px); à direita foto menor (474×569), tagline, 4 linhas de serviço e CTA | ✅ |
| 6.4 | Intro | ink | 1012px | Foto retrato à esquerda (483×753) com tagline + parágrafo embaixo; foto grande à direita (847px) | ✅ |
| 6.5 | Processo | sage | 592px | H2 64px animado, 3 parágrafos (508px), CTA "Learn More"; foto 768×614 à direita | ✅ |
| 6.6 | Citação | foto + véu 45% | 832px | Citação de 32px centralizada (1004px de largura) + assinatura | ✅ |
| 6.7 | Footer | cream | 350px | Logo grande (464×168) à esquerda; colunas WHO / WHAT / CONNECT; linha de 1px; créditos 12px | ✅ |

Todas as fotos ficam um pouco mais altas que o container (parallax leve: hero 828 em 690, serviços 1089 em 907). ✅

## 7. Header

- Fixo (`position: fixed`), transparente, sem fundo nem borda. ✅
- Topo: padding 40px; logo 282×102. Ao rolar: padding 24px 40px; logo 128×46. Transição `transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)`. ✅
- Links à direita: PROJECTS, PROCESS, ABOUT, JOURNAL, CONTACT; 14px/700 caixa alta, distribuídos num bloco de 684px (padding-left 64px). ✅
- **A cor inverte por seção:** `ink` sobre fundos claros, `cream` sobre escuros (troca por JS de acordo com a seção atrás do header). ✅
- Tablet e celular: hambúrguer, logo 192×69, padding 24px. ✅

## 8. Movimento

- Header encolhe ao rolar (0.4s, easing acima). ✅
- Cor do header acompanha a seção. ✅
- Círculo de texto gira conforme a rolagem. ✅
- H2 "OUR BUILDING PROCESS" entra letra a letra de baixo para cima ao aparecer. ✅ (tempo 🔶)
- Parallax leve nas fotos. ✅ (intensidade 🔶)
- Carrossel com arrasto e setas (Swiper). ✅
- Nada de 3D, WebGL ou animação contínua chamativa.

## 9. Responsivo

| | 1440 | 768 | 375 | |
| --- | --- | --- | --- | --- |
| Margem lateral | 40 | 40 | 20 | ✅ |
| Menu | links | hambúrguer | hambúrguer | ✅ |
| Grid do hero | 2 col | 2 col | 1 col | ✅ |
| Serviços | 2 col | 2 col (249/384) | 1 col | ✅ |
| H2 processo | 64 | 56 | 40 | ✅ |
| Citação | 32 | 32 | 24 | ✅ |
| Slide de projeto | 438 | 335 | 335 | ✅ |
| Seção medium/large | 80/112 | 🔶 | 32/48 | ✅ |

Defeito do original a **não** copiar: no celular o H1 de 72px estoura a largura ("CUSTO"). Na cópia, reduzir para ~48px abaixo de 480px.

## 10. Tokens CSS

```css
:root {
  --color-cream: #e7f1db;
  --color-ink: #272727;
  --color-sage: #898f8c;
  --color-overlay: rgba(75, 75, 75, 0.45);

  --font-sans: var(--font-inter-tight), "Helvetica Neue", Arial, sans-serif;

  --fs-display: 4.5rem;     /* 72 */
  --fs-h2: 4rem;            /* 64 */
  --fs-quote: 2rem;         /* 32 */
  --fs-h6: 1.5rem;          /* 24 */
  --fs-project: 1.25rem;    /* 20 */
  --fs-body: 1rem;          /* 16 */
  --fs-nav: 0.88rem;        /* 14.08 */
  --fs-tagline: 0.75rem;    /* 12 */
  --fs-micro: 0.63rem;      /* 10.08 */

  --lh-display: 0.91;
  --lh-tight: 1;
  --lh-quote: 1.15;
  --lh-body: 1.25;
  --lh-tagline: 1.5;

  --ls-tight: -0.02em;
  --ls-project: -0.03em;
  --ls-tagline: 0.16em;
  --ls-micro: 0.19em;

  --fw-thin: 100;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-bold: 700;

  --gutter: 2.5rem;         /* 40 */
  --section-lg: 7rem;       /* 112 */
  --section-md: 5rem;       /* 80 */
  --section-sm: 2.5rem;     /* 40 */
  --gap-xs: 1rem;           /* 16 */
  --gap-sm: 2rem;           /* 32 */
  --gap-md: 2.5rem;         /* 40 */
  --gap-lg: 3rem;           /* 48 */

  --radius-pill: 160px;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --dur-header: 0.4s;
  --dur-hover: 0.2s;
}
@media (max-width: 479px) {
  :root { --gutter: 1.25rem; --section-lg: 3rem; --section-md: 2rem; --fs-h2: 2.5rem; --fs-quote: 1.5rem; }
}
```

## 11. Estrutura de pastas

```
app/
  layout.tsx        fontes + header + footer
  page.tsx          monta as seções na ordem
  globals.css       importa tokens e base
styles/
  tokens.css
  base.css
components/
  Header/  Hero/  Projects/  Services/  Intro/  Process/  Quote/  Footer/
  ui/      Tagline, LinkArrow, Pill, MediaPlaceholder, RotatingCircle
```

## 12. Script de medição (console do navegador)

```js
(() => {
  const S = (e) => getComputedStyle(e);
  const R = (e) => { const r = e.getBoundingClientRect(); return `${Math.round(r.left)},${Math.round(r.top + scrollY)} ${Math.round(r.width)}x${Math.round(r.height)}`; };
  const type = (e) => { const s = S(e); return { fs: s.fontSize, fw: s.fontWeight, lh: s.lineHeight, ls: s.letterSpacing, tt: s.textTransform, c: s.color, ff: s.fontFamily.split(',')[0] }; };
  const out = { viewport: innerWidth, body: { bg: S(document.body).backgroundColor, ...type(document.body) } };
  out.headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(e => e.offsetHeight).map(e => ({ tag: e.tagName, txt: e.innerText.slice(0, 40), box: R(e), ...type(e) }));
  out.text = [...document.querySelectorAll('p, a, [class*=tagline]')].filter(e => e.offsetHeight).slice(0, 40).map(e => ({ tag: e.tagName, cls: e.className.toString(), txt: e.innerText.slice(0, 30), ...type(e) }));
  out.buttons = [...document.querySelectorAll('[class*=button], [class*=tag-wrapper]')].map(e => { const s = S(e); return { cls: e.className.toString(), box: R(e), pad: s.padding, radius: s.borderRadius, border: s.border, bg: s.backgroundColor }; });
  out.containers = [...document.querySelectorAll('[class*=padding-global], [class*=container], [class*=padding-section]')].map(e => { const s = S(e); return { cls: e.className.toString(), pad: s.padding, maxW: s.maxWidth, w: e.offsetWidth }; });
  out.sections = [...document.querySelectorAll('main > *, footer')].map(e => ({ cls: e.className.toString(), box: R(e), bg: S(e).backgroundColor }));
  out.grids = [...document.querySelectorAll('.w-layout-grid')].map(e => ({ cls: e.className.toString(), cols: S(e).gridTemplateColumns, gap: S(e).gap }));
  console.log(JSON.stringify(out, null, 2));
  return out;
})();
```

## 13. Checklist do que adaptar

- [ ] Fonte substituta (Inter Tight) com os pesos 100/400/500/700
- [ ] Logo do cliente no lugar do wordmark
- [ ] Todas as fotos trocadas por placeholder neutro (clone) ou fotos do cliente (template)
- [ ] Textos `[PLACEHOLDER]`
- [ ] H1 menor no celular (defeito do original)
- [ ] Menu e conteúdo do header conforme o cliente

## 14. O que não copiar

- Logo, wordmark e o SVG do círculo "INFINITY"
- Fotos, vídeos e renders
- Textos (nome, endereço, telefone, ABN, citação do diretor, nomes de projetos)
- Arquivos de fonte PP Neue Montreal
- Créditos de agência do footer
