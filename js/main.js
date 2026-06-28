/* ============================================================
   inHAUS clone — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Header: solid on scroll ---------- */
  const header = document.querySelector('.site-header');
  const onLight = header && header.classList.contains('on-light');
  function onScroll() {
    if (!header) return;
    const past = window.scrollY > (onLight ? 10 : window.innerHeight * 0.6);
    header.classList.toggle('solid', past);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  if (burger && menu) {
    const toggle = (force) => {
      const open = force !== undefined ? force : !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', String(open));
    };
    burger.addEventListener('click', () => toggle());
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur = 1400;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target % 1 === 0
            ? Math.round(target * eased)
            : (target * eased).toFixed(1);
          el.textContent = val + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Accordion ---------- */
  document.querySelectorAll('.acc-q').forEach((q) => {
    q.addEventListener('click', () => {
      const item = q.closest('.acc-item');
      const ans = item.querySelector('.acc-a');
      const isOpen = item.classList.contains('open');
      // close siblings
      const acc = item.closest('.accordion');
      acc.querySelectorAll('.acc-item.open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.acc-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      ans.style.maxHeight = isOpen ? null : ans.scrollHeight + 'px';
    });
  });

  /* ---------- Form (demo handling) ---------- */
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = form.querySelector('.form-success');
      if (ok) ok.classList.add('show');
      form.querySelectorAll('input, textarea, select').forEach((f) => {
        if (f.type !== 'checkbox') f.value = '';
      });
      if (ok) ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  /* ---------- Footer year ---------- */
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
