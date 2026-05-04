---
name: nelio-mentoria
description: >
  Use esta skill sempre que precisar criar, atualizar ou expandir a seção
  de Mentoria ("A Mesa Redonda") do site do Pastor Nélio da Silva.
  Acionar para pedidos como: "adicionar novo curso", "mudar o texto da mentoria
  individual", "incluir novo evento ou retiro", "atualizar a citação do pastor",
  "adicionar nova feature card", ou qualquer edição na seção id="mentoria".
---

# Skill: Seção Mentoria — A Mesa Redonda
## Portal do Encorajamento · Pastor Nélio da Silva

---

## Localização no arquivo

**Arquivo:** `index.html`
**Seção HTML:** `<section class="mentoria" id="mentoria">`
**Posição:** Após a seção `#ministerio` (Pilares), antes da seção `#devocionais`

---

## Estrutura da seção

```html
<section class="mentoria" id="mentoria">
  <div class="container">

    <!-- Cabeçalho da seção -->
    <div class="section-header">
      <span class="section-badge">Formação de Líderes</span>
      <h2 class="section-title">A Mesa Redonda</h2>
      <p class="section-desc">Descrição geral da mentoria...</p>
    </div>

    <!-- Grid principal: 2 colunas -->
    <div class="mentoria-grid">

      <!-- Card destaque: Mentoria Individual (fundo azul) -->
      <div class="mentoria-hero-card">
        <div class="mentoria-icon-wrap">
          <!-- SVG ícone -->
        </div>
        <h3>Nome do tipo de mentoria</h3>
        <p>Descrição...</p>
        <ul class="mentoria-list">
          <li>✦ Benefício 1</li>
          <li>✦ Benefício 2</li>
          <li>✦ Benefício 3</li>
        </ul>
        <a href="#contato" class="btn btn-primary">CTA</a>
      </div>

      <!-- Coluna de cards secundários -->
      <div class="mentoria-cards-col">
        <div class="mentoria-feature-card">
          <div class="mf-icon"><!-- SVG --></div>
          <div>
            <h4>Nome do recurso</h4>
            <p>Descrição breve.</p>
            <a href="#" class="pillar-link">Link →</a>
          </div>
        </div>
        <!-- Repetir .mentoria-feature-card para cada recurso -->
      </div>

    </div><!-- /mentoria-grid -->

    <!-- Citação do Pastor (rodapé da seção) -->
    <div class="mentoria-quote">
      <blockquote>"Citação..."</blockquote>
      <cite>— Pastor Nélio da Silva</cite>
    </div>

  </div>
</section>
```

---

## Classes CSS — onde editar em `style.css`

| Classe | Função |
|--------|--------|
| `.mentoria` | Container da seção, fundo `--color-light` (#F5F1EB) |
| `.mentoria-grid` | Grid 2 colunas (1fr 1fr). Mobile: 1 coluna |
| `.mentoria-hero-card` | Card destaque azul profundo com gradiente |
| `.mentoria-hero-card::before` | Aura dourada decorativa no canto |
| `.mentoria-icon-wrap` | Ícone 72×72px com fundo dourado translúcido |
| `.mentoria-list` | Lista de benefícios em dourado claro |
| `.mentoria-cards-col` | Coluna flex com gap entre cards secundários |
| `.mentoria-feature-card` | Card branco com ícone + texto + link |
| `.mf-icon` | Ícone 48×48px fundo dourado translúcido |
| `.mentoria-quote` | Bloco de citação branco com borda esquerda dourada |

---

## Identidade visual obrigatória

```css
/* Manter estas variáveis */
--color-primary: #1A3A5C;       /* Azul profundo */
--color-accent: #C8973A;        /* Dourado */
--color-accent-light: #F0D080;  /* Dourado claro */
--color-dark: #0F1E2E;          /* Fundo escuro */
--color-light: #F5F1EB;         /* Fundo da seção */
```

- **Fundo da seção:** `var(--color-light)` (off-white quente)
- **Card destaque:** `linear-gradient(135deg, #1A3A5C 0%, #0F2A40 100%)`
- **Ícone SVG:** Usar traço, não preenchimento. `stroke="currentColor" stroke-width="1.5"`
- **Tipografia de títulos:** `font-family: var(--font-heading)` (Playfair Display)

---

## Ícones SVG recomendados por recurso

| Recurso | SVG path |
|---------|----------|
| Mentoria com pessoas | `M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2` + círculo cx=9 |
| Cursos Online | `M22 10v6M2 10l10-5 10 5-10 5z` + `M6 12v5c3 3 9 3 12 0v-5` |
| Grupos de Estudo | `rect x=3 y=3 w=18 h=18` + `M8 12h8M12 8v8` |
| Eventos/Retiros | `M12 20h9` + `M16.5 3.5a2.121...` (ícone de lápis/edição) |
| Livros/Leitura | `M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z` + `M22 3h-6a4 4 0 0 0-4 4v14` |

---

## Como adicionar um novo feature card

1. Abrir `index.html`, localizar `<div class="mentoria-cards-col">`
2. Copiar um bloco `.mentoria-feature-card` existente:
```html
<div class="mentoria-feature-card">
  <div class="mf-icon">
    <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <!-- path do ícone aqui -->
    </svg>
  </div>
  <div>
    <h4>Título do Novo Recurso</h4>
    <p>Descrição em 1-2 frases, tom pastoral e prático.</p>
    <a href="#" class="pillar-link">Texto do link →</a>
  </div>
</div>
```
3. Ajustar: título, descrição, link e ícone SVG.
4. Manter no máximo **4 cards** para não desbalancear o grid.

---

## Como atualizar a citação do pastor

Localizar `<div class="mentoria-quote">` e editar apenas:
```html
<blockquote>"Nova citação aqui."</blockquote>
<cite>— Pastor Nélio da Silva</cite>
```
- Sempre manter a assinatura `— Pastor Nélio da Silva`
- Tom: reflexivo, de liderança, bíblico ou pastoral
- Comprimento ideal: 1 a 2 frases

---

## CTAs adequados para esta seção

- `Entrar na Lista de Espera`
- `Quero ser Mentorado`
- `Participar da Mesa Redonda`
- `Ver cursos disponíveis`
- `Ver agenda de eventos`

---

## Regras de conteúdo

1. **Não inventar programas ou preços** que não foram confirmados pelo pastor.
2. Se mentoria ainda não está aberta, usar CTA de lista de espera em vez de compra direta.
3. Manter o tom de **estadista sênior** — não usar linguagem de marketing agressiva.
4. Cada feature card deve ter uma frase de **ação clara** no link (ex: "Ver cursos →", "Participar →").
