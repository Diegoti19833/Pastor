import { useEffect } from 'react'
import styles from './Mentoria.module.css'
import pastorPhoto from '../assets/pastor.jpg'

const benefits = [
  'Direção pastoral personalizada para o seu chamado',
  'Acompanhamento contínuo no crescimento espiritual e ministerial',
  'Acesso à experiência de décadas de liderança e plantação de igrejas',
  'Conversas profundas sobre Teologia, Vida e Prática Ministerial',
]

const WHATSAPP_LINK = 'https://wa.me/5541999999999'

const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'Cursos Online',
    desc: 'Conteúdos práticos e teológicos para líderes e pastores em formação.',
    link: `${WHATSAPP_LINK}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20online%20dispon%C3%ADveis.`,
    linkText: 'Ver cursos disponíveis →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: 'Grupos de Estudo',
    desc: 'Encontros em pequenos grupos para aprofundamento bíblico e comunhão de vida.',
    link: `${WHATSAPP_LINK}?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20participar%20dos%20grupos%20de%20estudo.`,
    linkText: 'Participar →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Recursos e Leituras',
    desc: 'Indicações bibliográficas cuidadosamente selecionadas para sua formação.',
    link: '/#livros',
    linkText: 'Ver recomendações →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Retiros e Eventos',
    desc: 'Encontros presenciais e retiros para líderes que desejam ir mais fundo.',
    link: `${WHATSAPP_LINK}?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20a%20agenda%20de%20retiros%20e%20eventos.`,
    linkText: 'Ver agenda →',
  },
]

const pillars = [
  {
    icon: '✦',
    title: 'Relacionamento Antes de Conteúdo',
    desc: 'Mentoria não é aula — é caminhada. O coração do processo é o relacionamento de confiança entre mentor e mentorado.',
  },
  {
    icon: '✦',
    title: 'Identidade no Chamado',
    desc: 'Antes de saber o que fazer, o líder precisa saber quem é. Trabalhamos a identidade que sustenta o ministério.',
  },
  {
    icon: '✦',
    title: 'Sabedoria na Prática',
    desc: 'Décadas de erros, acertos e aprendizados a serviço de quem está começando. A experiência como atalho.',
  },
  {
    icon: '✦',
    title: 'Dependência de Deus',
    desc: 'O fundamento de toda mentoria genuína é ensinar o mentorado a depender de Deus — não do mentor.',
  },
]

export default function Mentoria() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />

        <div className={styles.photoWrapper}>
          <img src={pastorPhoto} alt="Pastor Nélio DaSilva" className={styles.photo} />
          <div className={styles.overlayLeft} />
          <div className={styles.overlayBottom} />
          <div className={styles.overlayTop} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Formação de Líderes</span>
          <h1 className={styles.heroTitle}>
            A Mesa<br />
            <em>Redonda</em>
          </h1>
          <p className={styles.heroSub}>
            Mentoria Pastoral para Líderes e Plantadores
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container}>

        {/* INTRO */}
        <div className={styles.intro}>
          <p className={styles.lead}>
            Liderar é uma das tarefas mais solitárias que existem — mas
            não precisa ser assim.
          </p>
          <p className={styles.body}>
            Ao longo de décadas servindo como pastor, plantador de igrejas e coordenador
            ministerial na <strong>Presbyterian Church in America (PCA)</strong>, aprendi
            que os maiores avanços na vida de um líder raramente acontecem em
            conferências ou livros. Acontecem em conversas profundas, ao redor de
            uma mesa, com alguém que já caminhou antes.
          </p>
          <p className={styles.body}>
            A <strong>Mesa Redonda</strong> nasce desse princípio: criar espaços onde líderes,
            pastores e plantadores possam ser acompanhados, desafiados e encorajados
            com sabedoria pastoral e bíblica.
          </p>
        </div>

        {/* PULL QUOTES */}
        <div className={styles.pullQuotes}>
          {[
            'Todo líder precisa de alguém que já passou pelo que ele está passando.',
            'A mentoria encurta o caminho — sem cortar os processos necessários.',
            'Não ensinamos fórmulas. Caminhamos juntos.',
          ].map((phrase, i) => (
            <div key={i} className={styles.pullQuote}>
              <span className={styles.pullLine} aria-hidden />
              <p>{phrase}</p>
            </div>
          ))}
        </div>

        {/* MENTORIA INDIVIDUAL — destaque */}
        <div className={styles.heroCardBlock}>
          <div className={styles.heroCardIconWrap}>
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 className={styles.heroCardTitle}>Mentoria Individual</h2>
          <p className={styles.heroCardDesc}>
            Acompanhamento direto e personalizado com o Pastor Nélio. Para líderes
            que desejam orientação pastoral aprofundada no seu contexto específico
            de vida e ministério.
          </p>
          <ul className={styles.benefitList}>
            {benefits.map((b, i) => (
              <li key={i} className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✦</span>
                {b}
              </li>
            ))}
          </ul>
          <a 
            href={`${WHATSAPP_LINK}?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20mentoria%20pastoral%20individual.%20Gostaria%20de%20entrar%20na%20lista%20de%20espera.`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.btnPrimary}
          >
            Entrar na Lista de Espera
          </a>
        </div>

        {/* PILARES DA MENTORIA */}
        <div className={styles.pillarsSection}>
          <h2 className={styles.sectionTitle}>O Que Nos Guia</h2>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <div key={i} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURE CARDS — recursos */}
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Recursos Disponíveis</h2>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  {f.icon}
                </div>
                <div>
                  <h4 className={styles.featureTitle}>{f.title}</h4>
                  <p className={styles.featureDesc}>{f.desc}</p>
                  <a href={f.link} className={styles.featureLink}>{f.linkText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CITAÇÃO DO PASTOR */}
        <div className={styles.quoteBlock}>
          <blockquote className={styles.quote}>
            "Não me tornei o líder que sou por causa de talentos — mas por causa
            das pessoas que Deus colocou ao meu lado nos momentos certos.
            Quero ser esse alguém para outros."
          </blockquote>
          <cite className={styles.quoteCite}>— Pastor Nélio DaSilva</cite>
        </div>

        {/* CTA */}
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Você Está Pronto para Dar o Próximo Passo?</h2>
          <p className={styles.ctaDesc}>
            Se Deus está chamando você para um novo nível de liderança,
            não caminhe sozinho. A Mesa Redonda está aberta para você.
          </p>
          <div className={styles.ctaBtns}>
            <a 
              href={`${WHATSAPP_LINK}?text=Ol%C3%A1%2C%20queria%20saber%20mais%20sobre%20a%20Mesa%20Redonda.%20Quero%20ser%20mentorado.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnPrimary}
            >
              Quero ser Mentorado
            </a>
            <a href="/" className={styles.btnSecondary}>Conhecer o Ministério ✦</a>
          </div>
        </div>

      </div>
    </section>
  )
}
