# PROMPTS-TEMPLATE — do clone ao template de pool builder

Rodar no Claude Code, dentro de `~/pool-default`, um prompt por vez. Sempre abrir `localhost:3100` com e sem `?guide=1` depois de cada etapa.

## 1. Limpeza
```
Remova do projeto tudo o que é específico do clone: textos de exemplo, link Journal,
docs do clone que não se aplicam (mantenha SITE-MESTRE.md como referência de design).
Nenhum texto do site de referência pode sobrar. npm run build. Commit "template: limpeza".
```

## 2. Estrutura de conteúdo e modo guia
```
Crie content/types.ts e content/site.ts com todos os dados do site num arquivo só,
seguindo a seção 5 do docs/NICHO-TEMPLATE.md. Cada seção tem enabled: true/false.
Crie content/guide.ts com propósito, regra de copy e dado mínimo por seção, e o
componente GuideBand que aparece só com ?guide=1. Fixe a porta 3100 no package.json.
Me mostre a estrutura antes de seguir.
```

## 3. Seções, uma a uma
Ordem: Header → Hero → About → Trust strip → Portfolio → Pool styles → Why us → Pricing → Process → Founder quote → Testimonials → Service area → FAQ → Consultation → Footer → CTA fixo no celular.
```
Implemente a seção [NOME] conforme a seção 5.[N] do docs/NICHO-TEMPLATE.md, usando os
tokens e componentes existentes. Dados só de content/site.ts; some quando enabled: false
ou sem o dado mínimo. Confira em 1440 e 375, com e sem ?guide=1. npm run build e
commit "template: seção [NOME]".
```

## 4. Revisão geral
```
Revise o template inteiro: todo texto em content/site.ts, toda seção desliga sem quebrar
o layout (teste desligando uma por uma), nenhum clichê proibido, build e lint sem erro,
responsivo em 375, 768 e 1440. Me mostre a lista do que corrigiu.
```

## 5. Salvar
```
Commit, tag v2.0-pool-default, repositório PRIVADO pool-default com gh repo create,
push da main e da tag. Me mostre o link.
```
