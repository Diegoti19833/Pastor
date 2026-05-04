import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import pastorPhoto from '../assets/pastor.jpg'

const stats = [
  { num: '50+', label: 'Anos de\nMinistério' },
  { num: '10k+', label: 'Homens\nImpactados' },
  { num: '12+', label: 'Igrejas\nPlantadas' },
  { num: '10', label: 'Livros\nPublicados' },
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = containerRef.current
      if (!el) return
      const { clientX, clientY, currentTarget } = e
      const { width, height } = currentTarget.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 15
      const y = (clientY / height - 0.5) * 8
      el.style.transform = `scale(1.04) translate(${x}px, ${y}px)`
    }
    const handleMouseLeave = () => {
      if (containerRef.current) containerRef.current.style.transform = 'scale(1.04) translate(0,0)'
    }
    const wrapper = document.getElementById('hero-wrapper')
    wrapper?.addEventListener('mousemove', handleMouseMove)
    wrapper?.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      wrapper?.removeEventListener('mousemove', handleMouseMove)
      wrapper?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className={styles.hero} id="inicio">
      {/* Full-screen photo background */}
      <div className={styles.photoWrapper} id="hero-wrapper">
        <img
          ref={containerRef}
          src={pastorPhoto}
          alt="Pastor Nélio da Silva"
          className={styles.photo}
        />
        {/* Gradient overlays */}
        <div className={styles.overlayLeft} />
        <div className={styles.overlayBottom} />
        <div className={styles.overlayTop} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>✦ Portal do Encorajamento</div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>Fortalecendo</span>
          <span className={styles.titleLine}>Almas</span>
          <span className={`${styles.titleLine} ${styles.titleGold}`}>
            Expandindo o&nbsp;Reino
          </span>
        </h1>

        <p className={styles.subtitle}>
          Há mais de cinco décadas, a Palavra de Deus transformando
          famílias, líderes e comunidades pelo Brasil e pelo mundo.
        </p>

        <div className={styles.actions}>
          <a href="#sobre" className={styles.btnPrimary}>
            Conheça o Ministério
          </a>
          <a href="#contato" className={styles.btnSecondary}>
            Receber Encorajamento ✦
          </a>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {stats.map((s) => (
            <div key={s.num} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden>
        <div className={styles.scrollLine} />
        <span>Role para baixo</span>
      </div>
    </section>
  )
}
