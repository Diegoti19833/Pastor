---
name: nelio-website
description: >
  Use this skill whenever the user asks to build, create, generate, or update any
  React component or page for the site of Pastor Nélio da Silva / Portal do Encorajamento.
  Trigger this skill for requests like "cria a home do Nélio", "faz o componente de
  mentoria", "gera a página sobre", "constrói a seção de vídeos", "cria a navbar",
  "faz o rodapé", "build the hero section", or any request that involves React code
  for this specific ministry website. Also trigger when the user mentions
  "Portal do Encorajamento", "neliodasilva.com", or "site do pastor".
---

# Skill: Site do Pastor Nélio da Silva — Portal do Encorajamento

## Contexto do Ministério

**Pastor:** Nélio da Silva (75 anos, ~50 anos de ministério)  
**Ministério:** Portal do Encorajamento  
**Domínio alvo:** neliodasilva.com  
**Tagline:** "Fortalecendo almas. Edificando vidas. Expandindo o Reino."  
**Público-alvo primário:** Homens cristãos, líderes, pastores, teologia reformada  
**Redes sociais existentes:**  
- YouTube: @portaldoencorajamento (529 subs), @prneliodasilva, @encorajamentodiarionelioda1185  
- Instagram: @neliodasilva_, @neliodasilva2023, @NeliodaSilva2, @neliocesardasilva  

**Áreas de ministério:**
1. Plantação de Igrejas
2. Ministério com Homens
3. Crescimento de Igreja
4. Anseios da Alma (seção premium/central)
5. Vídeos e Áudios
6. Artigos
7. Cursos Online
8. Missões (Portugal e outros países)

---

## Identidade Visual

### Paleta de cores (usar CSS variables)
```css
:root {
  --color-primary: #1A3A5C;       /* Azul profundo — autoridade, seriedade */
  --color-accent: #C8973A;        /* Dourado — espiritualidade, legado */
  --color-accent-light: #F0D080;  /* Dourado claro — destaques sutis */
  --color-dark: #0F1E2E;          /* Fundo escuro */
  --color-light: #F5F1EB;         /* Off-white quente — clean, acolhedor */
  --color-text: #2C2C2C;          /* Texto principal */
  --color-muted: #6B7280;         /* Texto secundário */
  --color-white: #FFFFFF;
}
```

### Tipografia
- **Headings:** `Playfair Display` ou `Lora` (serif — autoridade pastoral)
- **Body:** `Inter` ou `Open Sans` (legível, moderno)
- **Imports Google Fonts:** `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap`

### Tom visual
- Sóbrio, profundo, não superficial
- Inspirado em: maxwellleadership.com, andystanley.com, timothykeller.com, erwinmcmanus.com
- "Estadista Sênior + Pensador Moderno"
- Mobile-first (90% do acesso será mobile)

---

## Estrutura de Páginas / Componentes

### 5 Abas Essenciais
1. **Home** — Herói com gancho emocional, funil de conteúdo
2. **Mentoria** — "A Mesa Redonda", cursos, grupos
3. **Livros** — Estante de autoridade + leitura recomendada
4. **Multimídia** — Vídeos, podcasts, séries (estilo "Netflix espiritual")
5. **Sobre** — Legado, história, 50 anos de ministério

### Componentes reutilizáveis essenciais
- `Navbar` — Logo + 5 abas + botão CTA "Receber Encorajamento"
- `HeroSection` — Foto profissional + frase forte + 2 botões CTA
- `ContentCard` — Card de sermão/vídeo/artigo (thumb, título, categoria)
- `PillarSection` — Blocos das 5 áreas de ministério (ícone + título + descrição)
- `EmailCapture` — Captura de e-mail com frase de encorajamento
- `TestimonialCard` — Depoimentos de impacto do ministério
- `Footer` — Links, redes sociais, créditos

---

## Funil da Home Page

```
1. Hero (foto + frase de 50 anos + CTA)
        ↓
2. Caminhos de Crescimento (5 pilares com ícones)
        ↓
3. Destaques da Semana (último devocional, vídeo, artigo)
        ↓
4. Mini Bio de Autoridade ("50 anos de ministério")
        ↓
5. Captura de E-mail ("Receba encorajamento semanal")
        ↓
6. Podcast / mensagem semanal
        ↓
7. Livros e eventos
```

---

## SEO Topics (para usar em meta tags e textos)
- "Sucesso na vida pessoal e profissional"
- "Liderança bíblica para homens"
- "Como os homens cristãos lideram suas famílias"
- "Teologia reformada explicada"
- "Como os homens crescem espiritualmente"
- "Disciplina cristã para homens"

---

## Regras de Geração de Componentes React

### Padrão de código
- **React funcional** com hooks (`useState`, `useEffect` quando necessário)
- **Tailwind CSS** para estilização (utility-first)
- Quando Tailwind não for suficiente, usar `<style>` inline com CSS variables
- **Mobile-first** — sempre começar pelo layout mobile e expandir com `md:` e `lg:`
- Exportação default do componente
- Props com valores padrão para facilitar uso isolado

### Estrutura de cada componente
```jsx
import { useState } from "react";

// Google Fonts no head se necessário
const fontLink = `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap`;

export default function NomeDoComponente({ prop1 = "valor padrão" }) {
  // lógica aqui

  return (
    <section style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* JSX aqui */}
    </section>
  );
}
```

### Textos de placeholder a usar
- Frases do ministério: "Há 50 anos encorajando vidas a viverem o propósito de Deus."
- Bio curta: "Pastor, missionário, autor. 50 anos transformando vidas através da Palavra."
- CTA e-mail: "Receba encorajamento semanal direto no seu e-mail."
- Botão primário: "Começar Jornada" ou "Receber Encorajamento"
- Botão secundário: "Conheça o Ministério"

### Ícones
- Usar `lucide-react` (disponível no ambiente): `import { BookOpen, Users, Mic, Heart, GraduationCap } from "lucide-react"`
- Ícones por área:
  - Plantação de Igrejas: `Building2`
  - Ministério com Homens: `Users`
  - Anseios da Alma: `Heart`
  - Crescimento de Igreja: `TrendingUp`
  - Cursos Online: `GraduationCap`
  - Vídeos: `Play`
  - Artigos: `BookOpen`
  - Missões: `Globe`

---

## Instruções de Uso da Skill

Quando o usuário pedir um componente ou página:

1. **Identifique** qual componente/página está sendo pedido
2. **Consulte** as referências de contexto acima (ministério, visual, funil)
3. **Gere** o componente React completo, funcional e estilizado
4. **Inclua** dados de exemplo realistas (não genéricos) baseados no ministério do Nélio
5. **Garanta** mobile-first e use a paleta de cores definida
6. **Entregue** como arquivo `.jsx` no diretório de saída

Se o usuário fornecer fotos ou imagens do pastor:
- Use `URL.createObjectURL()` ou aceite a URL como prop
- Defina sempre uma imagem de fallback placeholder com gradiente azul/dourado

Se o usuário pedir a página completa (todas as seções):
- Divida em componentes separados
- Crie um `App.jsx` que importa e monta todos
- Entregue todos os arquivos

---

## Referências de Sites para Benchmark
- https://www.deiveleonardo.com.br/
- https://www.maxwellleadership.com/
- https://andystanley.com/
- https://timothykeller.com/
- https://erwinmcmanus.com/

Padrões observados nesses sites:
- Central de conteúdo (sermões/podcasts) impulsionando visitas recorrentes
- Seção de autoridade (sobre/livros) para estabelecer credibilidade
- Eventos ou treinamentos convertendo público em comunidade
- Biblioteca de recursos gerando tráfego orgânico (SEO)
- Captura de e-mail para construção de público fiel a longo prazo
- Loja virtual para livros, cursos online, mentoria
