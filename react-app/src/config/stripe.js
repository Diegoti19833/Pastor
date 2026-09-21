// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DE PAGAMENTOS — STRIPE
// ═══════════════════════════════════════════════════════════════════════════
//
// Este site é estático (Apache/.htaccess, sem Node/PHP). Por isso a
// integração usa PAYMENT LINKS: o checkout roda inteiramente nos
// servidores do Stripe, então o site não manipula cartão nem precisa
// da chave secreta.
//
// ─── PASSO A PASSO ──────────────────────────────────────────────────────
//
// 1. Acesse https://dashboard.stripe.com/payment-links
// 2. Clique em "Novo" e cadastre o produto (nome, preço em BRL).
//    → Para os LIVROS físicos, marque "Coletar endereço de entrega".
//    → Para os ÁUDIOS, deixe desmarcado (produto digital).
// 3. Copie a URL gerada (formato https://buy.stripe.com/XXXXXXXX)
// 4. Cole no campo correspondente de PAYMENT_LINKS abaixo.
//
// Enquanto o campo estiver vazio, o botão do produto aparece como
// "Em breve" (desativado). Assim que a URL é colada, o botão vira
// "Comprar" automaticamente — não é preciso mexer em mais nada.
//
// IMPORTANTE: o painel do Stripe tem dois modos, Teste e Produção.
// Links criados no modo Teste (chave pk_test_) não cobram de verdade.
// Ao ir ao ar, gere os links novamente no modo Produção e troque a
// chave em .env para pk_live_...
//
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Chave publicável do Stripe.
 * Segura no navegador por design — só inicia pagamentos, não lê dados
 * nem movimenta valores. Definida em react-app/.env
 */
export const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || ''

/**
 * URLs de checkout por produto.
 * Cole aqui os links gerados no painel do Stripe.
 */
export const PAYMENT_LINKS = {
  // ── Livros — R$ 49,90 ───────────────────────────────────
  'livro-anseios-da-alma': 'https://buy.stripe.com/test_3cI3cx2TK3wu6LTfUk2VG00',
  'livro-homens-de-valor': 'https://buy.stripe.com/test_4gM9AV0LC4Ay7PX0Zq2VG01',
  'livro-plantando-no-reino': 'https://buy.stripe.com/test_00w9AVfGwaYW6LTbE42VG02',
  'livro-maravilhosa-graca': 'https://buy.stripe.com/test_cNi9AV65W3wueeldMc2VG03',
  'livro-coracao-do-homem': 'https://buy.stripe.com/test_00w6oJamc1om8U1bE42VG04',
  'livro-encorajamento-diario': 'https://buy.stripe.com/test_aFa5kFcuk9US4DL37y2VG05',

  // ── Áudios ──────────────────────────────────────────────
  'audio-anseios-da-alma': 'https://buy.stripe.com/test_aFa3cx3XOaYW4DL0Zq2VG06',
  'audio-motivacao-do-ceu': 'https://buy.stripe.com/test_14A5kFbqgd745HP37y2VG07',
  'audio-de-pastor-para-pastor': 'https://buy.stripe.com/test_6oUfZjcuk6IGc6d8rS2VG08',
}

/**
 * Retorna o link de checkout de um produto, ou null se ainda não
 * foi configurado. Só aceita URLs https do domínio do Stripe, para
 * evitar que um valor digitado errado vire um link quebrado em produção.
 *
 * @param {string} slug chave em PAYMENT_LINKS
 * @returns {string|null}
 */
export function getPaymentLink(slug) {
  const url = PAYMENT_LINKS[slug]
  if (!url || typeof url !== 'string') return null

  try {
    const { protocol, hostname } = new URL(url)
    const stripeHost =
      hostname === 'buy.stripe.com' || hostname.endsWith('.stripe.com')
    return protocol === 'https:' && stripeHost ? url : null
  } catch {
    return null
  }
}

/**
 * true quando pelo menos um produto já tem checkout ativo.
 * Usado para exibir o aviso de "loja em preparação".
 */
export function lojaEstaAtiva() {
  return Object.keys(PAYMENT_LINKS).some((slug) => getPaymentLink(slug) !== null)
}
