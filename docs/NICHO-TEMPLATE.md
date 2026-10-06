# NICHO-TEMPLATE — site de pool builder (EUA)

Blueprint do template `~/pool-default`. Todo cliente novo nasce daqui. O design vem do clone (`SITE-MESTRE.md`); este documento define **o que** cada seção faz, **que dado** consome e **como** a copy é escrita.

---

## 1. O único trabalho do site

**Agendar uma consulta de design** (Book a design consultation). Pedido de orçamento é a mesma ação com outro nome. Todo CTA primário leva ao formulário `#consultation` ou ao telefone. Nada compete com ele: sem newsletter, sem "saiba mais" solto, sem pop-up.

## 2. A jornada do comprador

Quem compra uma piscina residencial nos EUA gasta de US$ 60 mil a mais de US$ 200 mil, pesquisa por semanas e compara 3 a 5 construtoras. Cada pergunta dele tem uma seção que responde:

| Pergunta do comprador | Seção | Ordem |
| --- | --- | --- |
| "Quem são vocês e vocês fazem o que eu quero?" | Hero + About | 1 |
| "Posso confiar?" (anos, volume, licença, nota) | Trust strip | 2 |
| "O trabalho é bonito?" | Portfolio | 3 |
| "Que tipo de piscina vocês constroem?" | Pool styles | 4 |
| "Por que vocês e não o concorrente?" | Why us | 5 |
| "Quanto custa? Consigo financiar?" | Pricing & financing | 6 |
| "Como funciona do projeto à entrega? Quanto demora?" | Process | 7 |
| "O dono assina embaixo?" | Founder quote | 8 |
| "Outros clientes gostaram?" | Testimonials | 9 |
| "Vocês atendem a minha cidade? Onde fica o showroom?" | Service area & showrooms | 10 |
| "E as dúvidas que sobraram?" | FAQ | 11 |
| "Como eu começo?" | Consultation form | 12 |

## 3. Princípios de conversão

1. **Um CTA primário** em todo o site: o mesmo texto (`contact.ctaLabel`) no header, no hero, no fim de pricing, no processo e no formulário.
2. **CTA fixo no celular:** barra no rodapé da tela com "Call" e o CTA primário, sempre visível abaixo de 768px.
3. **Preço visível quando existir:** faixa ("Starting at $X") ou pacotes. Preço escondido faz o comprador ir embora para o concorrente que mostra.
4. **Financiamento visível:** na seção de preço, com o parceiro e a condição, se o cliente oferecer.
5. **Prova social perto do CTA:** trust strip logo abaixo do hero; depoimentos logo antes da área atendida e do formulário.
6. **FAQ é seção de venda:** responde objeções (preço, prazo, licença, garantia, inverno/clima, manutenção), não curiosidades.
7. **Formulário curto:** nome, telefone, e-mail, CEP (ZIP) e mensagem opcional. Nada além disso.
8. **Telefone clicável** (`tel:`) no header do celular, na barra fixa, nas showrooms e no footer.

## 4. O que muda em relação ao site modelo

| Ação | Item do modelo | Vira |
| --- | --- | --- |
| **Manter** | Header fixo que encolhe e troca de cor | Header + link de CTA à direita |
| **Manter** | Hero com foto grande e título fino/grosso | Hero + linha de CTA (primário + telefone) |
| **Adaptar** | Bloco "About" do hero (tagline + texto + círculo) | About do pool builder |
| **Adaptar** | Carrossel de projetos | Portfolio de piscinas (nome do projeto, cidade, estilo, ano) |
| **Adaptar** | Lista de serviços em acordeão | Pool styles (geometric, freeform, infinity edge, spa…) |
| **Adaptar** | Intro com duas fotos | Why us (diferenciais com fonte) |
| **Adaptar** | Processo (H2 animado + texto + foto) | Process com etapas numeradas e prazo |
| **Adaptar** | Citação do fundador sobre foto | Founder quote (só com palavras reais do dono) |
| **Manter** | Footer | Footer + licença + horário |
| **Criar** | — | Trust strip (números com fonte) |
| **Criar** | — | Pricing & financing |
| **Criar** | — | Testimonials (texto exato + autor + fonte) |
| **Criar** | — | Service area & showrooms |
| **Criar** | — | FAQ (acordeão, com JSON-LD FAQPage) |
| **Criar** | — | Consultation form |
| **Criar** | — | CTA fixo no celular |
| **Criar** | — | Modo guia (`?guide=1`) |
| **Remover** | Link "Journal" do menu | — (só volta se o cliente tiver blog ativo) |

## 5. Cada seção

Formato: **trabalho · layout (componente de origem) · dados (`content/site.ts`) · placeholder · regras de copy**.
Copy sempre em inglês americano, frases curtas, números concretos, voz de quem constrói. **Clichês proibidos:** "crystal clear", "oasis", "dive in", "paradise", "backyard dreams", "make a splash", "luxury redefined", "unparalleled".

### 5.1 Header
- **Trabalho:** navegação curta + CTA sempre à mão.
- **Layout:** `Header` do clone; links à direita + link de CTA sublinhado; no celular, hambúrguer.
- **Dados:** `brand.name`, `brand.logo`, `nav[]`, `contact.ctaLabel`, `contact.phone`.
- **Logo:** se o logo do cliente for de uma cor só, use `brand.logo.mono: true` — ele vira máscara pintada com a cor do texto e acompanha o tom do header e do footer. Logo colorido: `mono` ausente.
- **Celular:** abaixo de 480px o telefone sai do header (fica na barra fixa); o CTA da barra usa reticências se não couber.
- **Placeholder:** `[BRAND]`, `nav` padrão (Portfolio, Styles, Pricing, Process, FAQ).
- **Copy:** CTA com verbo + objeto: "Book a design consultation". Nunca "Contact us".

### 5.2 Hero
- **Trabalho:** dizer em 2 segundos o que constrói, onde, e qual o próximo passo.
- **Layout:** `Hero` do clone (foto 1.95:1, título fino + grosso no canto inferior direito) + linha de CTA abaixo da foto.
- **Dados:** `hero.headline` (linhas com partes thin/bold), `hero.image`, `contact.ctaLabel`, `contact.phone`.
- **Placeholder:** `[HEADLINE]` thin + `[KEYWORD]` bold.
- **Copy:** 2 linhas, até 4 palavras por linha, caixa alta. A palavra bold é o benefício ou o tipo de piscina. Ex.: "CUSTOM POOLS / BUILT TO LAST". Proibido nome da empresa no título.

### 5.3 About
- **Trabalho:** quem são e onde atuam, em 4 parágrafos curtos.
- **Layout:** grid do hero (tagline · texto · círculo de texto).
- **Dados:** `about.tagline`, `about.lead`, `about.paragraphs[]`, `brand.circleText`.
- **Copy:** lead de 1 frase com cidade/região. Depois: o que constroem, para quem, área atendida, convite com link para o formulário.

### 5.4 Trust strip
- **Trabalho:** prova rápida logo abaixo do hero.
- **Layout:** novo; 2 a 4 colunas com número grande + rótulo tagline, divisória de 1px.
- **Dados:** `trust.items[] { value, label, source }`.
- **Copy:** só número verificável: anos no mercado, piscinas construídas, nota média e total de avaliações, número da licença (ROC/CSLB etc.). Sem fonte = item fora.

### 5.5 Portfolio
- **Trabalho:** mostrar trabalho real e bonito.
- **Layout:** carrossel `Projects` do clone; selo pílula opcional ("Featured", "New").
- **Dados:** `portfolio.items[] { name, place, style, year, image, badge }`.
- **Copy:** nome = nome do projeto ou da rua/bairro, nunca do dono da casa. Estilo em 1–3 palavras.

### 5.6 Pool styles
- **Trabalho:** mostrar que constroem o que o comprador quer.
- **Layout:** `Services` do clone (foto grande + foto menor + acordeão numerado + CTA).
- **Dados:** `styles.items[] { title, body }`, `styles.image`, `styles.detailImage`.
- **Copy:** título = nome do estilo (Geometric, Freeform, Infinity edge, Pool & spa, Remodel). Corpo: 1–2 frases sobre quando escolher esse estilo, em linguagem do comprador.

### 5.7 Why us
- **Trabalho:** o diferencial concreto contra o concorrente.
- **Layout:** `Intro` do clone (foto retrato + texto + foto grande).
- **Dados:** `why.tagline`, `why.body`, `why.imageA`, `why.imageB`.
- **Copy:** 3–4 frases com fatos: equipe própria x terceirizada, design 3D, garantia, showroom. Nada de "quality and excellence".

### 5.8 Pricing & financing
- **Trabalho:** tirar a dúvida que mais derruba conversão.
- **Layout:** novo; tagline + título + 1 a 3 colunas de pacote (nome, preço, nota, itens incluídos) + faixa de financiamento + CTA.
- **Dados:** `pricing.items[] { name, price, note, includes[] }`, `pricing.financing { text, partner }`.
- **Copy:** preço exatamente como o cliente publica ("Starting at $54,900"). Nota explica o que muda o preço. Financiamento com parceiro e condição reais.

### 5.9 Process
- **Trabalho:** reduzir o medo do desconhecido (obra no quintal por meses).
- **Layout:** `Process` do clone (H2 animado + texto + foto) com etapas numeradas.
- **Dados:** `process.heading`, `process.intro`, `process.steps[] { title, body }`, `process.duration`, `process.image`.
- **Copy:** 4–6 etapas: consulta, design, permits, escavação, construção, entrega. Prazo só se o cliente informar.

### 5.10 Founder quote
- **Trabalho:** rosto humano e compromisso do dono.
- **Layout:** `Quote` do clone (foto de fundo + véu + citação 32px).
- **Dados:** `quote.text`, `quote.author`, `quote.image`.
- **Copy:** **nunca escrever.** Só palavras reais do dono (site, vídeo, entrevista). Pode cortar, não reescrever.

### 5.11 Testimonials
- **Trabalho:** prova social de quem já comprou.
- **Layout:** novo; tagline + resumo da nota + 3 colunas de depoimento com divisória.
- **Dados:** `testimonials.rating { value, count, source }`, `testimonials.items[] { quote, author, source }`.
- **Copy:** texto exato. Pode cortar na frase mais forte. Autor como aparece na fonte (ex.: "Sarah M., Scottsdale").

### 5.12 Service area & showrooms
- **Trabalho:** "vocês atendem minha cidade?" e "onde posso ver ao vivo?".
- **Layout:** novo; esquerda tagline + título + lista de cidades em colunas; direita showrooms (nome, endereço, horário, telefone, link de mapa).
- **Dados:** `areas.cities[]`, `areas.showrooms[] { name, address, hours, phone, mapHref }`.
- **Copy:** cidades como o cliente lista. Endereço completo e horário exatos.

### 5.13 FAQ
- **Trabalho:** responder objeções e alimentar o JSON-LD FAQPage.
- **Layout:** novo; esquerda tagline + título; direita acordeão do `Services`.
- **Dados:** `faq.items[] { q, a }`.
- **Copy:** 5–8 perguntas reais de comprador: custo, prazo, financiamento, licença, garantia, manutenção, quintal pequeno/inclinado. Respostas só com fatos do cliente.

### 5.14 Consultation form
- **Trabalho:** converter.
- **Layout:** novo; fundo escuro; esquerda título + texto + telefone; direita formulário com linhas de 1px.
- **Dados:** `consultation.heading`, `consultation.body`, `consultation.endpoint` (URL que recebe o POST, ex.: Formspree), `consultation.success`.
- **Copy:** título com o CTA primário. Texto diz o que acontece depois ("We'll call within one business day" só se for verdade).

### 5.15 Footer
- **Dados:** `brand`, showroom principal, `contact`, `nav`, `footer.social[]`, `footer.legal`, `footer.license`.

### 5.16 CTA fixo no celular
- **Dados:** `contact.phone`, `contact.ctaLabel`. Some se não houver nenhum dos dois.

## 6. O dado mínimo de cada seção

Sem o dado mínimo, a seção fica `enabled: false` e some do site sem quebrar o layout.

| Seção | Dado mínimo |
| --- | --- |
| Hero | headline + 1 foto |
| About | lead + 1 parágrafo |
| Trust strip | 2 itens com fonte |
| Portfolio | 3 projetos com foto |
| Pool styles | 3 estilos |
| Why us | texto + 1 foto |
| Pricing | 1 preço publicado **ou** financiamento real |
| Process | 3 etapas |
| Founder quote | citação real com autor |
| Testimonials | 2 depoimentos com autor e fonte |
| Service area | 3 cidades **ou** 1 showroom com endereço |
| FAQ | 4 perguntas com resposta factual |
| Consultation | telefone **ou** endpoint do formulário |

## 7. SEO (sites de cliente)

- `title`: "[Pool type] Builder in [City, State] | [Brand]". `description`: até 155 caracteres com cidade e CTA.
- JSON-LD `HomeAndConstructionBusiness` (um por showroom) e `FAQPage`, só com dados reais.
- `noindex` enquanto for demo de venda.
