import styles from './Books.module.css'

const books = [
  {
    title: 'Anseios da Alma',
    desc: 'Reflexões profundas sobre a vida interior e a busca pela intimidade com Deus.',
    color: '#1A2E45',
  },
  {
    title: 'Homens de Valor',
    desc: 'Um guia bíblico para a masculinidade cristã autêntica — coragem, caráter e fé.',
    color: '#0D2B1F',
  },
  {
    title: 'Plantando no Reino',
    desc: 'Princípios bíblicos e estratégias práticas para plantar igrejas multiplicadoras.',
    color: '#2B1A0D',
  },
  {
    title: 'A Maravilhosa Graça',
    desc: 'Uma jornada transformadora pela graça de Deus que muda tudo na vida do crente.',
    color: '#1A0D2B',
  },
  {
    title: 'O Coração do Homem',
    desc: 'Como o evangelho alcança a essência masculina e reconecta o homem ao seu criador.',
    color: '#1C1A0A',
  },
  {
    title: 'Encorajamento Diário',
    desc: 'Palavras de encorajamento e verdades bíblicas para fortalecer sua caminhada de fé.',
    color: '#0A1C1C',
  },
]

export default function Books() {
  return (
    <section className={styles.books} id="livros">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Obras Publicadas</span>
          <h2 className={styles.title}>
            10 Livros que <em>Transformam Vidas</em>
          </h2>
          <p className={styles.subtitle}>
            Uma biblioteca de sabedoria bíblica e encorajamento prático
            para homens, líderes e famílias.
          </p>
        </div>

        <div className={styles.grid}>
          {books.map((book) => (
            <div key={book.title} className={styles.card}>
              {/* Book cover */}
              <div className={styles.cover} style={{ background: book.color }}>
                <div className={styles.coverInner}>
                  <div className={styles.coverDeco}>✦</div>
                  <h3 className={styles.coverTitle}>{book.title}</h3>
                  <p className={styles.coverAuthor}>Nélio da Silva</p>
                </div>
                <div className={styles.coverSpine} />
              </div>
              {/* Info */}
              <div className={styles.info}>
                <h4 className={styles.bookTitle}>{book.title}</h4>
                <p className={styles.bookDesc}>{book.desc}</p>
                <button className={styles.buyBtn} aria-label={`Adquirir ${book.title}`}>
                  Adquirir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
