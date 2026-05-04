import styles from './Ministry.module.css'

import churchIcon from '../assets/church_photo.png'
import menIcon from '../assets/men_photo.png'
import bibleIcon from '../assets/bible_photo.png'
import booksIcon from '../assets/books_photo.png'

const pillars = [
  {
    icon: churchIcon,
    tag: 'Fundação',
    title: 'Plantação de Igrejas',
    text: 'Pioneiro na plantação de igrejas de língua portuguesa nos EUA, Nélio estabeleceu comunidades sólidas em Nova York, Connecticut e New Jersey, sempre com raízes profundas na teologia reformada.',
    highlight: '12+ Comunidades Plantadas',
  },
  {
    icon: menIcon,
    tag: 'Impacto',
    title: 'Homens de Valor',
    text: 'Fundado em 2008, o ministério Homens de Valor já alcançou mais de 10 mil homens em 18 anos de existência, com o propósito de trazer o homem para uma relação mais íntima com Deus, família e sociedade.',
    highlight: '+10.000 Homens Impactados',
  },
  {
    icon: bibleIcon,
    tag: 'Ensinamento',
    title: 'Pregação e Ensino Bíblico',
    text: 'Com 50 anos de ministério, Nélio combina profundidade teológica reformada, humor, histórias marcantes e uma extraordinária facilidade de conectar-se com a audiência — do leigo ao líder.',
    highlight: '50+ Anos de Ministério',
  },
  {
    icon: booksIcon,
    tag: 'Literatura',
    title: 'Autor de 10 Livros',
    text: 'Conteúdo transformador sobre graça, masculinidade cristã, plantação de igrejas e encorajamento espiritual para a vida cotidiana, disponíveis em português.',
    highlight: '10 Obras Publicadas',
  },
]

export default function Ministry() {
  return (
    <section className={styles.ministry} id="ministerio">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Áreas de Atuação</span>
          <h2 className={styles.title}>
            Caminhos de <em>Crescimento</em>
          </h2>
          <p className={styles.subtitle}>
            Cada área do ministério é uma porta para avançar na fé,
            na liderança e no propósito de Deus.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <div key={p.title} className={`${styles.card} ${i === 1 ? styles.cardFeatured : ''}`}>
              <div className={styles.cardIcon}>
                <img src={p.icon} alt="" className={styles.iconImg} />
              </div>
              <span className={styles.cardTag}>{p.tag}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
              <div className={styles.cardHighlight}>{p.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
