import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <div>
                <strong>Nélio da Silva</strong>
                <small>Portal do Encorajamento</small>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Fortalecendo almas, edificando vidas e expandindo o Reino de Deus
              há mais de 50 anos — do Brasil às nações.
            </p>
            <p className={styles.verse}>
              "Pois dele, por ele e para ele são todas as coisas. A ele seja
              a glória para sempre! Amém." — <em>Romanos 11.36</em>
            </p>
          </div>

          {/* Links */}
          <div className={styles.linksGroup}>
            <h4>Navegação</h4>
            <ul>
              {['Início', 'Ministério', 'Sobre', 'Livros', 'Contato'].map(l => (
                <li key={l}>
                  <a href={`#${l === 'Início' ? 'inicio' : l.toLowerCase()}`}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4>Ministérios</h4>
            <ul>
              <li><a href="#ministerio">Homens de Valor</a></li>
              <li><a href="#ministerio">Plantação de Igrejas</a></li>
              <li><a href="#ministerio">Pregação e Ensino</a></li>
              <li><a href="#livros">Livros</a></li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4>Conecte-se</h4>
            <ul>
              <li><a href="https://wa.me/55" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Pastor Nélio da Silva — Todos os direitos reservados.</span>
          <span>Orlando, FL · EUA</span>
        </div>
      </div>

    </footer>
  )
}
