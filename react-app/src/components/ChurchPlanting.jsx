import { useEffect } from 'react'
import styles from './ChurchPlanting.module.css'
import pastorPhoto from '../assets/pastor.jpg'

const keyPhrases = [
  'Foram as lutas que forjaram o homem.',
  'Foram os desafios que moldaram o líder.',
  'Foi a dependência de Deus que formou o plantador.',
]

const pillars = [
  {
    icon: '✦',
    title: 'Chamado Inabalável',
    desc: 'Não é estratégia — é convicção. Plantar igrejas começa com a certeza do chamado que sustenta nos momentos de crise.',
  },
  {
    icon: '✦',
    title: 'Caráter Forjado',
    desc: 'Os desafios moldam o plantador. Cada vale é uma escola de perseverança, fé e dependência total de Deus.',
  },
  {
    icon: '✦',
    title: 'Território Espiritual',
    desc: 'Plantar igrejas é entrar em conflito real. Oposição, escassez e solidão são parte do processo — e Deus está em cada etapa.',
  },
  {
    icon: '✦',
    title: 'Milagres Silenciosos',
    desc: 'Uma sala pequena se tornando lugar de adoração. Vidas do zero sendo discipuladas. Comunidades alcançadas pelo Evangelho.',
  },
]

const encouragements = [
  'Você não precisa ter tudo pronto.',
  'Você não precisa ter todos os recursos.',
  'Você não precisa ter todas as respostas.',
  'Mas você precisa estar disponível.',
  'Precisa depender de Deus.',
  'E precisa dar o primeiro passo.',
]

export default function ChurchPlanting() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />

        {/* Foto do pastor — lado direito, igual à home */}
        <div className={styles.photoWrapper}>
          <img src={pastorPhoto} alt="Pastor Nélio da Silva" className={styles.photo} />
          <div className={styles.overlayLeft} />
          <div className={styles.overlayBottom} />
          <div className={styles.overlayTop} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Plantação de Igrejas</span>
          <h1 className={styles.heroTitle}>
            Plantar Igrejas<br />
            <em>Mudou a Minha Vida</em>
          </h1>
          <p className={styles.heroSub}>
            Uma Jornada de Fé, Chamado e Obediência
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Plantar igrejas nunca foi apenas um ministério para mim.
            Sempre foi um chamado que transformou e moldou a minha vida.
          </p>
          <p className={styles.body}>
            Desde 1986, quando Deus me deu o privilégio de plantar a primeira
            igreja presbiteriana de língua portuguesa pela minha denominação
            (PCA) nos Estados Unidos, iniciei uma jornada que jamais imaginei
            a profundidade, os desafios e as recompensas que traria. Ao longo
            dos anos, servindo também como Coordenador de Plantação de Igrejas
            entre brasileiros e portugueses na <strong>Presbyterian Church in America (PCA)</strong>,
            caminhei por uma variedade de vales e montes, vitórias e muitas lutas — e hoje
            ao olhar para traz posso afirmar com convicção: <strong>cada batalha valeu a pena!</strong>
          </p>
        </div>

        {/* ── PULL QUOTES ── */}
        <div className={styles.pullQuotes}>
          {keyPhrases.map((phrase, i) => (
            <div key={i} className={styles.pullQuote}>
              <span className={styles.pullLine} aria-hidden />
              <p>{phrase}</p>
            </div>
          ))}
        </div>

        {/* ── TERRITORY BLOCK ── */}
        <div className={styles.territoryBlock}>
          <h2 className={styles.sectionTitle}>Entrar em Território Espiritual</h2>
          <p className={styles.body}>
            O que eu não sabia, mas imediatamente ganhei essa convicção:{' '}
            <strong>Plantar igrejas é entrar fortemente em um efervescente território espiritual.</strong>
          </p>
          <p className={styles.body}>
            É lidar com oposição, escassez, solidão e, incontáveis vezes, com
            incompreensão. Mas também é testemunhar milagres silenciosos, vidas
            transformadas e comunidades sendo alcançadas pelo maravilhoso poder
            do Evangelho.
          </p>
          <blockquote className={styles.blockquote}>
            "É ver uma sala pequena se tornar um lugar de adoração. É discipular
            pessoas do ponto zero. É chorar, orar, persistir… e ver Deus fazer
            aquilo que só Ele pode fazer."
          </blockquote>
        </div>

        {/* ── 4 PILLARS ── */}
        <div className={styles.pillarsSection}>
          <h2 className={styles.sectionTitle}>O Que Aprendi ao Longo da Caminhada</h2>
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

        {/* ── ENCOURAGEMENT BLOCK ── */}
        <div className={styles.encourageBlock}>
          <h2 className={styles.sectionTitle}>Se Deus Está Chamando Você…</h2>
          <p className={styles.body}>
            O Senhor Jesus, o Senhor da Igreja, continua procurando por aqueles
            dispostos a dizer: <em>"Eis-me aqui, envia-me a mim."</em>
          </p>
          <p className={styles.body}>
            Se você sente que o Senhor o está chamando para plantar uma igreja,
            deixe-me encorajá-lo:
          </p>
          <ul className={styles.encourageList}>
            {encouragements.map((item, i) => (
              <li
                key={i}
                className={`${styles.encourageItem} ${i >= 3 ? styles.encouragePositive : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── PORTAL BLOCK ── */}
        <div className={styles.portalBlock}>
          <p className={styles.body}>
            A plantação de igrejas continua sendo uma das ferramentas mais poderosas
            para a expansão do Reino de Deus. Ainda hoje, existem cidades, comunidades
            e povos esperando por uma igreja viva, relevante e cheia da vitalidade
            insubstituível da ação do Espírito.
          </p>
          <p className={styles.body}>
            O <strong>Portal do Encorajamento</strong> nasce com esse propósito:
            caminhar ao seu lado, compartilhar princípios, erros, aprendizados e
            estratégias que foram refinadas ao longo de décadas de ministério.
          </p>
          <p className={styles.body}>
            Se Deus está colocando esse desejo em seu coração, não ignore.
            Pode ser o início de algo muito maior do que você possa imaginar.
          </p>
        </div>

        {/* ── CLOSING STATEMENT ── */}
        <div className={styles.closingBlock}>
          <p className={styles.closingStrong}>
            Plantar igrejas é difícil — mas é glorioso.
          </p>
          <p className={styles.closingText}>
            E não há nada mais extraordinário do que ser instrumento nas mãos de
            Deus para levantar uma comunidade que exalta o nome de Cristo e
            espalha o Seu perfume e Glória!
          </p>
          <p className={styles.closingText}>
            Vamos juntos. Conte conosco aqui no Portal do Encorajamento. Não temos
            todas as respostas. Mas sabemos Quem as tem — e Ele está pronto para
            nos estender a Mão ao assumirmos o compromisso de depender única e
            tão somente da Sua imensa Graça.
          </p>
          <div className={styles.seara}>
            <span className={styles.searaLine} aria-hidden />
            <p>A Seara é imensa e a Colheita está pronta para a Ceifa!</p>
            <span className={styles.searaLine} aria-hidden />
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Deus Está Chamando Você?</h2>
          <p className={styles.ctaDesc}>
            Se esse chamado está crescendo no seu coração, não caminhe sozinho.
            O Portal do Encorajamento está aqui para apoiá-lo.
          </p>
          <div className={styles.ctaBtns}>
            <a href="#contato" className={styles.btnPrimary}>Fale com o Pastor Nélio</a>
            <a href="#inicio" className={styles.btnSecondary}>Conheça o Ministério ✦</a>
          </div>
        </div>

      </div>
    </section>
  )
}
