// ================================
// THIRTHALA RAJKUMAR – PORTFOLIO JS
// ================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Theme Toggle ──────────────────────────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // ── Sticky Navbar ─────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Mobile Menu ───────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // ── Scroll Reveal ─────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach(el => observer.observe(el));

  // ── Typed Tagline ─────────────────────────────────────────
  const taglines = ['AI Engineer', 'Backend Developer', 'ML Enthusiast', 'Problem Solver'];
  let tIdx = 0, cIdx = 0, deleting = false;
  const typedEl = document.getElementById('typed');

  function type() {
    const word = taglines[tIdx];
    if (!deleting) {
      typedEl.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typedEl.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % taglines.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();

  // ── Smooth Active Nav Link ────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}`
        ? 'var(--accent)'
        : '';
    });
  });

  // ── Contact Form ──────────────────────────────────────────
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'var(--accent)';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      form.reset();
    }, 3000);
  });

  // ── Skill Tag Hover Ripple ────────────────────────────────
  document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseover', () => {
      tag.style.transform = 'scale(1.05)';
    });
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = '';
    });
  });

  // ── Hero Parallax Glow ────────────────────────────────────
  const heroGlow = document.querySelector('.hero-glow');
  document.addEventListener('mousemove', (e) => {
    if (!heroGlow) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    heroGlow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });

  // ── Cursor Dot (Desktop only) ─────────────────────────────
  if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.id = 'cursor-dot';
    cursor.style.cssText = `
      position:fixed;width:6px;height:6px;background:var(--accent);
      border-radius:50%;pointer-events:none;z-index:10000;
      transform:translate(-50%,-50%);transition:transform 0.1s ease;
      mix-blend-mode:difference;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(4)');
      el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
    });
  }

  // ── GitHub Stats Fallback ─────────────────────────────────
  const githubImgs = document.querySelectorAll('.github-stat-img');
  githubImgs.forEach(img => {
    img.addEventListener('error', function() {
      this.parentElement.innerHTML = `
        <div style="padding:32px;text-align:center;color:var(--text-dim);font-family:var(--font-mono);font-size:12px;">
          📊 View on GitHub Profile
        </div>`;
    });
  });

});
