// =============================================
// Portal do Encorajamento — script.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR scroll effect ----
  const navbar = document.getElementById('navbar');
  const scrollHandler = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const activateLink = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', activateLink, { passive: true });

  // ---- Mobile hamburger menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
    const isOpen = navLinksContainer.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
      navLinksContainer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ---- Media tabs ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Could load different content here per tab
    });
  });

  // ---- Email form ----
  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = emailForm.querySelector('button[type="submit"]');
      btn.textContent = '✓ Inscrito com sucesso!';
      btn.style.background = '#27ae60';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Quero Receber';
        btn.style.background = '';
        btn.disabled = false;
        emailForm.reset();
      }, 4000);
    });
  }

  // ---- Scroll-reveal animation ----
  const revealElements = document.querySelectorAll(
    '.pillar-card, .content-card, .media-card, .book-card, .testimonial-card, .section-header'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${(i % 6) * 0.08}s, transform 0.6s ease ${(i % 6) * 0.08}s`;
    revealObserver.observe(el);
  });

  // ---- Counter animation for hero stats ----
  const statNums = document.querySelectorAll('.stat-num');
  let countersStarted = false;

  const animateCounter = (el) => {
    const target = el.textContent;
    const isPlus = target.includes('+');
    const num = parseInt(target.replace(/\D/g, ''));
    let current = 0;
    const step = num / 50;
    const timer = setInterval(() => {
      current += step;
      if (current >= num) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (isPlus ? '+' : '');
      }
    }, 30);
  };

  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      statNums.forEach(el => animateCounter(el));
    }
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroObserver.observe(heroStats);

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
