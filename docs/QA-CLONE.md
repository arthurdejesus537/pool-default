# QA final — clone vs. original (06/10/2026)

Comparado em 1440×900, 768×1024 e 375×812 com https://www.infinitybuilt.com.au/.

## Altura das seções em 1440 (px)

| Seção | Original | Cópia | Diferença |
| --- | --- | --- | --- |
| Hero | 1352 | 1272 | -80 (textos placeholder mais curtos) |
| Projetos | 878 | 871 | -7 |
| Serviços | 987 | 993 | +6 |
| Intro | 1012 | 970 | -42 (parágrafo placeholder mais curto) |
| Processo | 592 | 592 | 0 |
| Citação | 832 | 832 | 0 |
| Footer | 350 | ~350 | ajustado |

## O que bate
- Paleta, escala tipográfica, margens de 40/20px e grids assimétricos medidos.
- Header fixo que encolhe (logo 282 → 128) e troca de cor conforme a seção.
- Carrossel de projetos com setas circulares e selo em pílula.
- Lista de serviços em acordeão com divisórias de 1px.
- Título de seção entrando letra a letra; círculo de texto girando com a rolagem; parallax leve nas fotos.
- Menu hambúrguer em tela cheia no tablet e no celular. Sem rolagem lateral em 375, 768 e 1440.

## O que ainda difere (esperado)
- Fonte: Inter Tight no lugar da PP Neue Montreal (paga) — letras um pouco mais largas.
- Fotos: placeholders cinza no lugar das fotos de terceiros.
- Logo: wordmark placeholder "YOUR BRAND" no lugar do logo original.
- Alturas de hero e intro variam com o tamanho dos textos reais.
- Carrossel usa rolagem nativa com snap (sem Swiper): mais leve, mesmo comportamento.

## Melhorias em relação ao original
- No celular, o título do hero cabe na tela (o original corta "CUSTO").
- Respeita "reduzir movimento" do sistema.
- `noindex` até virar site de cliente.
