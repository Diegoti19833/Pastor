---
name: nelio-devocionais
description: >
  Use esta skill sempre que precisar criar, atualizar ou expandir a seção
  de Devocionais ("Por Estação da Vida") do site do Pastor Nélio da Silva.
  Acionar para pedidos como: "adicionar nova série devocional", "liberar prévias
  do devocionário", "criar card para empresários", "atualizar CTA de compra",
  "marcar série como Em Breve", ou qualquer edição na seção id="devocionais".
---

# Skill: Seção Devocionais — Por Estação da Vida
## Portal do Encorajamento · Pastor Nélio da Silva

---

## Localização no arquivo

**Arquivo:** `index.html`
**Seção HTML:** `<section class="devocionais" id="devocionais">`
**Posição:** Após `#mentoria`, antes de `#anseios`

---

## Séries canônicas do ministério

| Série | Público | Status padrão |
|-------|---------|--------------|
| Solteiro, mas Completo | Solteiros | Com prévias liberadas |
| Aliança Renovada | Casais | Prévias disponíveis |
| Caminhos de Consolo | Viúvos / Luto | Prévias disponíveis |
| Fé no Mercado | Empresários cristãos | Prévias disponíveis |

> Novas séries devem ser adicionadas com o mesmo padrão.

---

## Estrutura da seção

```html
<section class="devocionais" id="devocionais">
  <div class="container">

    <!-- Cabeçalho -->
    <div class="section-header">
      <span class="section-badge">Séries Devocionais</span>
      <h2 class="section-title">Devocionais por Estação da Vida</h2>
      <p class="section-desc">...</p>
    </div>

    <!-- Grid de cards -->
    <div class="devocionais-grid">

      <!-- Card destaque (primeira série, com prévias) -->
      <div class="devocional-card featured-dev">
        <div class="dev-badge">Novo</div>         <!-- opcional -->
        <div class="dev-img" style="background: linear-gradient(135deg, #COR1 0%, #COR2 100%)">
          <div class="dev-icon">EMOJI</div>
        </div>
        <div class="dev-body">
          <span class="dev-tag">Público-alvo</span>
          <h3>Nome da Série</h3>
          <p>Descrição em 2-3 linhas.</p>

          <!-- Bloco de prévias (só quando liberadas) -->
          <div class="dev-previas">
            <span class="previas-label">Prévias disponíveis:</span>
            <div class="previas-list">
              <a href="#" class="previa-item">📖 Devocional 1 — Título</a>
              <a href="#" class="previa-item">📖 Devocional 2 — Título</a>
              <a href="#" class="previa-item">📖 Devocional 3 — Título</a>
            </div>
          </div>

          <a href="#" class="btn btn-primary">Adquirir o Devocionário Completo</a>
        </div>
      </div>

      <!-- Cards secundários (séries sem prévias ainda) -->
      <div class="devocional-card">
        <div class="dev-img" style="background: linear-gradient(...)">
          <div class="dev-icon">EMOJI</div>
        </div>
        <div class="dev-body">
          <span class="dev-tag">Público-alvo</span>
          <h3>Nome da Série</h3>
          <p>Descrição breve.</p>
          <a href="#" class="btn btn-sm btn-outline-dark">Ver prévias →</a>
        </div>
      </div>

    </div><!-- /devocionais-grid -->

    <!-- Rodapé da seção -->
    <div class="devocionais-cta">
      <p>Todas as séries disponíveis também em formato impresso.</p>
      <a href="#livros" class="btn btn-outline-dark">Ver todos os livros →</a>
    </div>

  </div>
</section>
```

---

## Classes CSS — onde editar em `style.css`

| Classe | Função |
|--------|--------|
| `.devocionais` | Container da seção, fundo branco |
| `.devocionais-grid` | Grid 4 colunas (1.6fr 1fr 1fr 1fr). 1024px: 2 cols. Mobile: 1 col |
| `.devocional-card` | Card com borda, hover elevation, radius 12px |
| `.devocional-card.featured-dev` | Card destaque com sombra extra |
| `.dev-badge` | Badge "Novo" / "Em breve" no canto superior direito |
| `.dev-img` | Área de imagem/gradiente (140px normal, 200px no featured) |
| `.dev-icon` | Emoji centralizado, opacidade 0.7 |
| `.dev-body` | Padding 20px, conteúdo textual |
| `.dev-tag` | Tag de público-alvo (dourado, uppercase, small) |
| `.dev-previas` | Bloco de prévias com fundo dourado suave |
| `.previas-label` | Label "Prévias disponíveis:" em dourado |
| `.previas-list` | Flex coluna com gap 8px |
| `.previa-item` | Link de prévia estilizado como item de lista |
| `.devocionais-cta` | Rodapé centralizado com texto + botão |

---

## Paleta de gradientes por série

| Série | Gradiente inline recomendado |
|-------|------------------------------|
| Solteiro, mas Completo | `linear-gradient(135deg, #1A3A5C 0%, #C8973A 100%)` |
| Aliança Renovada | `linear-gradient(135deg, #C8973A 0%, #1A3A5C 100%)` |
| Caminhos de Consolo | `linear-gradient(135deg, #0F1E2E 0%, #6B7280 100%)` |
| Fé no Mercado | `linear-gradient(135deg, #1A3A5C 0%, #0F2A40 100%)` |
| Nova série (padrão) | `linear-gradient(135deg, #0F2A40 0%, #C8973A 100%)` |

---

## Emojis/ícones por público

| Público | Emoji |
|---------|-------|
| Solteiros | ✦ (símbolo do ministério) |
| Casais | 💍 |
| Viúvos / Luto | 🕊️ |
| Empresários | 💼 |
| Homens | 🛡️ |
| Família | 🏠 |
| Nova série genérica | 📖 |

---

## Regra das prévias (CRÍTICO)

> Quando o pastor disser "publicar as 3 primeiras como spoiler/prévia":

1. Usar o **card `featured-dev`** para essa série
2. Adicionar `<div class="dev-previas">` com até **3 itens** `<a class="previa-item">`
3. Título de cada prévia: `📖 Devocional N — Título do devocional`
4. CTA logo após: **"Adquirir o Devocionário Completo"**
5. **Nunca** usar a palavra "spoiler" no front-end; usar "Prévia", "Leitura de amostra" ou "Prévias disponíveis"

**Série sem prévia ainda:**
```html
<a href="#" class="btn btn-sm btn-outline-dark">Ver prévias →</a>
```

**Série em breve:**
```html
<div class="dev-badge">Em Breve</div>
<!-- sem bloco .dev-previas, sem botão de compra -->
<a href="#contato" class="btn btn-sm btn-outline-dark">Entrar na lista →</a>
```

---

## Como adicionar nova série devocional

1. Abrir `index.html`, localizar `<div class="devocionais-grid">`
2. Copiar um `.devocional-card` secundário:
```html
<div class="devocional-card">
  <div class="dev-img" style="background: linear-gradient(135deg, #COR1 0%, #COR2 100%)">
    <div class="dev-icon">EMOJI</div>
  </div>
  <div class="dev-body">
    <span class="dev-tag">Público-alvo</span>
    <h3>Nome da Nova Série</h3>
    <p>Descrição em 2 frases, tom pastoral, sem marketing genérico.</p>
    <a href="#" class="btn btn-sm btn-outline-dark">Ver prévias →</a>
  </div>
</div>
```
3. Inserir **antes** de `</div><!-- /devocionais-grid -->`
4. Atualizar gradiente, emoji, tag e texto.

> Máximo recomendado: **6 cards** no grid (o destaque mais 5 secundários).

---

## Como promover um card a "featured-dev"

1. Adicionar a classe `featured-dev` ao card: `class="devocional-card featured-dev"`
2. Remover o `featured-dev` do card anterior (apenas 1 destaque por vez)
3. Adicionar `<div class="dev-badge">Novo</div>` logo após a tag de abertura
4. Incluir o bloco `.dev-previas` se houver prévias disponíveis
5. Trocar o CTA para `btn btn-primary` (dourado sólido)

---

## Regras de conteúdo

1. **Não inventar títulos** de devocionais que não foram fornecidos pelo pastor.
2. Se só existir o nome da série, criar o card sem prévias e com CTA "Ver prévias →".
3. Cada série deve ter um **público claramente definido** na tag `.dev-tag`.
4. Descrição máxima: **3 linhas** de texto corrido.
5. Nunca misturar séries diferentes num mesmo card.
