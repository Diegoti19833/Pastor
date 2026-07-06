import { useEffect } from 'react'
import styles from './Loja.module.css'

// ── PRODUTOS: LIVROS ──────────────────────────────────────────────────────────
// Edite o campo "link" de cada item para apontar para o link de pagamento/compra.
const livros = [
  {
    titulo: 'Anseios da Alma',
    desc: 'Reflexões profundas sobre a vida interior e a busca pela intimidade com Deus.',
    cor: '#1A2E45',
    link: '#',
  },
  {
    titulo: 'Homens de Valor',
    desc: 'Um guia bíblico para a masculinidade cristã autêntica — coragem, caráter e fé.',
    cor: '#0D2B1F',
    link: '#',
  },
  {
    titulo: 'Plantando no Reino',
    desc: 'Princípios bíblicos e estratégias práticas para plantar igrejas multiplicadoras.',
    cor: '#2B1A0D',
    link: '#',
  },
  {
    titulo: 'A Maravilhosa Graça',
    desc: 'Uma jornada transformadora pela graça de Deus que muda tudo na vida do crente.',
    cor: '#1A0D2B',
    link: '#',
  },
  {
    titulo: 'O Coração do Homem',
    desc: 'Como o evangelho alcança a essência masculina e reconecta o homem ao seu criador.',
    cor: '#1C1A0A',
    link: '#',
  },
  {
    titulo: 'Encorajamento Diário',
    desc: 'Palavras de encorajamento e verdades bíblicas para fortalecer sua caminhada de fé.',
    cor: '#0A1C1C',
    link: '#',
  },
]

// ── PRODUTOS: ÁUDIOS ──────────────────────────────────────────────────────────
const audios = [
  {
    titulo: 'Anseios da Alma — Acesso Completo',
    desc: 'Série completa de mensagens em áudio para despertar a alma e reacender a fome por Deus.',
    icone: '🎙',
    detalhe: '112 episódios',
    link: '#',
  },
  {
    titulo: 'Motivação do Céu — Acesso Completo',
    desc: 'Mensagens diretas ao coração, com propósito e direção para a caminhada cristã.',
    icone: '☁️',
    detalhe: '10 episódios',
    link: '#',
  },
  {
    titulo: 'De Pastor para Pastor — Acesso Completo',
    desc: 'Conteúdo pastoral voltado para líderes, com ensino prático e encorajamento ministerial.',
    icone: '📖',
    detalhe: 'Série completa',
    link: '#',
  },
]

export default function Loja() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroContent}>
          <span className={styles.badge}>🛍 Loja Oficial</span>
          <h1 className={styles.heroTitle}>
            Loja do <em>Encorajamento</em>
          </h1>
          <p className={styles.heroSub}>
            Livros e séries de áudio para fortalecer sua fé, sua família
            e seu chamado — direto do ministério de Nélio DaSilva.
          </p>
        </div>
      </div>

      <div className={styles.container}>

        {/* ── LIVROS ── */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Obras Publicadas</span>
          <h2 className={styles.sectionTitle}>Livros</h2>
          <p className={styles.sectionSubtitle}>
            Conteúdo transformador sobre graça, masculinidade cristã,
            plantação de igrejas e encorajamento espiritual.
          </p>
        </div>

        <div className={styles.gridLivros}>
          {livros.map((livro) => (
            <div key={livro.titulo} className={styles.cardLivro}>
              <div className={styles.capa} style={{ background: livro.cor }}>
                <div className={styles.capaInner}>
                  <div className={styles.capaDeco}>✦</div>
                  <h3 className={styles.capaTitulo}>{livro.titulo}</h3>
                  <p className={styles.capaAutor}>Nélio DaSilva</p>
                </div>
                <div className={styles.capaLombada} />
              </div>
              <div className={styles.infoLivro}>
                <h4 className={styles.livroTitulo}>{livro.titulo}</h4>
                <p className={styles.livroDesc}>{livro.desc}</p>
                <div className={styles.linhaPreco}>
                  <a
                    href={livro.link}
                    className={styles.btnComprar}
                    aria-label={`Comprar ${livro.titulo}`}
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦ ✦ ✦</span>
        </div>

        {/* ── ÁUDIOS ── */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Séries em Áudio</span>
          <h2 className={styles.sectionTitle}>Áudios</h2>
          <p className={styles.sectionSubtitle}>
            Acesso completo às séries de mensagens em áudio — ouça quando
            e onde quiser, no seu tempo com Deus.
          </p>
        </div>

        <div className={styles.gridAudios}>
          {audios.map((audio) => (
            <div key={audio.titulo} className={styles.cardAudio}>
              <div className={styles.audioIcone} aria-hidden>{audio.icone}</div>
              <div className={styles.audioInfo}>
                <span className={styles.audioDetalhe}>{audio.detalhe}</span>
                <h4 className={styles.audioTitulo}>{audio.titulo}</h4>
                <p className={styles.audioDesc}>{audio.desc}</p>
              </div>
              <div className={styles.linhaPrecoAudio}>
                <a
                  href={audio.link}
                  className={styles.btnComprar}
                  aria-label={`Comprar ${audio.titulo}`}
                >
                  Comprar acesso
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── RODAPÉ ── */}
        <div className={styles.ctaFooter}>
          <div className={styles.ctaIcon} aria-hidden>✦</div>
          <p className={styles.ctaText}>
            Dúvidas sobre algum produto ou sobre formas de pagamento?
            Entre em contato — será um prazer ajudar você.
          </p>
          <p className={styles.ctaAuthor}>— Nélio DaSilva</p>
        </div>

      </div>
    </section>
  )
}
