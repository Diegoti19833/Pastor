import styles from './About.module.css'

const credentials = [
  { icon: '🏛️', label: 'Igreja Presbiteriana do Brasil', sub: 'Ordenado em 1977' },
  { icon: '🇺🇸', label: 'Presbyterian Church in America (PCA)', sub: 'Membro desde 1988 — NY' },
  { icon: '⛪', label: '12+ Igrejas Plantadas', sub: 'Primeira Igreja Portuguesa nos EUA — 1986' },
  { icon: '👨‍👩‍👧‍👦', label: 'Ministério Homens de Valor', sub: 'Fundado em 2008 · +10 mil homens alcançados' },
]

const timeline = [
  { year: '1977', event: 'Ordenado pela Igreja Presbiteriana do Brasil em Mato Grosso do Sul' },
  { year: '1980', event: 'Transferência para os Estados Unidos — início de 46 anos de ministério americano' },
  { year: '1986', event: 'Planta a primeira igreja de língua portuguesa nos EUA pela PCA' },
  { year: '1988', event: 'Membro do Metropolitan Presbytery em New York' },
  { year: '2000s', event: 'Sob a Redeemer Presbyterian Church, lidera movimento de 12+ novas comunidades' },
  { year: '2008', event: 'Funda o Ministério Homens de Valor' },
  { year: 'Hoje', event: 'Residente em Orlando, FL · 10 livros publicados · Casado com Tereza há 46 anos' },
]

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Sobre o Pastor</span>
          <h2 className={styles.title}>
            Mais de 50 Anos<br />
            <em>Transformando Vidas</em>
          </h2>
        </div>

        {/* Main bio + photo */}
        <div className={styles.bioGrid}>
          <div className={styles.photoCol}>
            <div className={styles.photoFrame}>
              <img
                src="/pastor.jpg"
                alt="Pastor Nélio DaSilva"
                className={styles.photo}
              />
              <div className={styles.photoQuote}>
                <blockquote>
                  "Deus não chama os capacitados.<br />
                  <strong>Ele capacita os chamados.</strong>"
                </blockquote>
                <cite>— Nélio DaSilva</cite>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <p className={styles.lead}>
              Nélio DaSilva, matogrossense do sul, ordenado pela Igreja Presbiteriana
              do Brasil em <strong>1977</strong>. Se transferiu para os Estados Unidos
              em <strong>1980</strong> e atualmente é membro da{' '}
              <strong>Presbyterian Church in America (PCA)</strong> e membro do
              Metropolitan Presbytery em New York desde <strong>1988</strong>.
              Reside nos Estados Unidos há <strong>46 anos</strong> e atualmente com
              residência em Orlando, FL.
            </p>
            <p>
              Nélio plantou a primeira igreja de língua portuguesa nos Estados Unidos
              pela PCA em <strong>1986</strong>. Plantou mais outras duas igrejas nos
              estados de Connecticut e New Jersey. Sob os auspícios da{' '}
              <strong>Redeemer Presbyterian Church</strong> em NY, liderou um movimento
              de plantação de novas igrejas resultando em{' '}
              <strong>mais de 12 novas comunidades</strong>.
            </p>
            <p>
              É fundador do <strong>Ministério Homens de Valor</strong>, tendo seu
              início em <strong>2008</strong>. Após alcançar mais de{' '}
              <strong>10 mil homens</strong> e completando 18 anos de existência,
              o ministério segue com o seu foco na sua proposta de alcançar o coração
              do homem a fim de trazê-lo para uma mais íntima relação com Deus,
              família e sociedade.
            </p>
            <p>
              É um apaixonado pela maravilhosa graça de Deus. É um encorajador nato.
              Nélio traz uma combinação de <strong>humor, histórias marcantes,
              forte ensino bíblico</strong> e uma grande facilidade de se conectar
              com a sua audiência.
            </p>
            <p>
              Tem <strong>10 livros publicados</strong>. É casado com{' '}
              <strong>Tereza</strong>, há 46 anos. Eles têm três filhos adultos,{' '}
              <strong>Leonardo, Marcus e Michael</strong>. E três netos,{' '}
              <strong>Kingston, Phoenix e Atticus</strong>.
            </p>

            {/* Credentials grid */}
            <div className={styles.credentials}>
              {credentials.map((c) => (
                <div key={c.label} className={styles.credItem}>
                  <span className={styles.credIcon}>{c.icon}</span>
                  <div>
                    <strong>{c.label}</strong>
                    <small>{c.sub}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timelineSection}>
          <h3 className={styles.timelineTitle}>Linha do Tempo</h3>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{item.year}</span>
                <div className={styles.timelineDot} />
                <p className={styles.timelineEvent}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
