import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) return
    setSent(true)
  }

  return (
    <section className={styles.contact} id="contato">
      {/* Background pattern */}
      <div className={styles.bg} aria-hidden />

      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <span className="section-label">Encorajamento Semanal</span>
            <h2 className={styles.title}>
              Receba Encorajamento<br />
              <em>Direto no Seu E-mail</em>
            </h2>
            <p className={styles.desc}>
              Toda semana: uma palavra de Deus, uma reflexão bíblica e
              recursos exclusivos do ministério — gratuito, sem spam.
            </p>
            <div className={styles.perks}>
              {['📖 Reflexões bíblicas semanais', '🎧 Conteúdo para homens e líderes', '📚 Acesso antecipado a lançamentos'].map(p => (
                <span key={p} className={styles.perk}>{p}</span>
              ))}
            </div>
          </div>

          <div className={styles.formCol}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✦</div>
                <h3>Obrigado, {name}!</h3>
                <p>Você receberá encorajamento em breve. Que Deus abençoe sua semana!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Seu primeiro nome</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Ex: João"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Seu e-mail</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="joao@exemplo.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Quero Receber Encorajamento ✦
                </button>
                <p className={styles.privacy}>
                  Seus dados são protegidos. Cancele quando quiser.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
