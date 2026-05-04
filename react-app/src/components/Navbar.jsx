import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

// links com anchor são da home; page links navegam para outra rota
const links = [
  { label: 'Início', href: '#inicio', anchor: true },
  { label: 'Ministério', href: '#ministerio', anchor: true },
  { 
    label: 'Plantação de Igrejas', 
    href: '#plantacao', 
    anchor: false,
    subMenu: [
      { label: 'Plantar igrejas mudou a minha vida - uma jornada de fé, Chamado e Obediência', href: '/plantacao-de-igrejas' }
    ]
  },
  { label: 'Mentoria', href: '/mentoria', anchor: false },
  { label: 'Devocionais', href: '/devocionais', anchor: false },
  { label: 'Sobre', href: '#sobre', anchor: true },
  { label: 'Livros', href: '#livros', anchor: true },
  { label: 'Contato', href: '#contato', anchor: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ''
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) {
          const offset = target.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top: offset, behavior: 'smooth' })
        }
      }, 100)
    } else {
      const target = document.querySelector(href)
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    }
  }

  const toggleMenu = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const closeMenu = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo} onClick={(e) => handleAnchorClick(e, '#inicio')}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>
            <strong>Nélio DaSilva</strong>
            <small>Portal do Encorajamento</small>
          </span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href} className={l.subMenu ? styles.hasDropdown : ''}>
              {l.subMenu ? (
                <>
                  <button className={styles.link} onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle(styles.showDropdown); }}>
                    {l.label} ▼
                  </button>
                  <ul className={styles.dropdown}>
                    {l.subMenu.map(sub => (
                      <li key={sub.href}>
                        <Link to={sub.href} className={styles.subLink} onClick={closeMenu}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : l.anchor ? (
                <a href={l.href} className={styles.link} onClick={(e) => handleAnchorClick(e, l.href)}>
                  {l.label}
                </a>
              ) : (
                <Link to={l.href} className={styles.link} onClick={closeMenu}>
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contato" className={styles.cta} onClick={(e) => handleAnchorClick(e, '#contato')}>
          Receber Encorajamento
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          l.subMenu ? (
             <div key={l.href} className={styles.mobileSubMenuWrapper}>
               <div className={styles.mobileLink} style={{color: 'var(--gold)'}}>
                 {l.label}
               </div>
               <div className={styles.mobileSubLinks}>
                 {l.subMenu.map(sub => (
                   <Link key={sub.href} to={sub.href} className={styles.mobileSubLink} onClick={closeMenu}>
                     ↳ {sub.label}
                   </Link>
                 ))}
               </div>
             </div>
          ) : l.anchor ? (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={(e) => handleAnchorClick(e, l.href)}>
              {l.label}
            </a>
          ) : (
            <Link key={l.href} to={l.href} className={styles.mobileLink} onClick={closeMenu}>
              {l.label}
            </Link>
          )
        ))}
        <a href="#contato" className={styles.mobileCta} onClick={(e) => handleAnchorClick(e, '#contato')}>
          Receber Encorajamento
        </a>
      </div>
    </nav>
  )
}
