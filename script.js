/* =============================================
   EMBER & SHORE THERAPY — SCRIPTS v2
   ============================================= */

(function() {
  'use strict';

  // --- Footer year ---
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Header scroll state ---
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    lastScroll = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav   = document.querySelector('.site-nav');

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open', !expanded);
    document.body.style.overflow = !expanded ? 'hidden' : '';
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item     = btn.closest('.faq-item');
      const answer   = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').classList.remove('open');
        }
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      answer.classList.toggle('open', !expanded);
      item.classList.toggle('active', !expanded);
    });
  });

  // --- Scroll reveal ---
  const revealMap = {
    '.section-header':       'reveal',
    '.brand-card':           'reveal-scale',
    '.brand-tagline':        'reveal',
    '.about-image-wrap':     'reveal-left',
    '.about-text':           'reveal-right',
    '.who-card':             'reveal',
    '.service-card':         'reveal',
    '.intake-callout':       'reveal',
    '.fees-card':            'reveal',
    '.timeline-step':        'reveal',
    '.faq-item':             'reveal',
    '.contact-info':         'reveal-left',
    '.contact-form-wrap':    'reveal-right',
  };

  const allRevealEls = [];

  Object.entries(revealMap).forEach(([selector, cls]) => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add(cls);
      allRevealEls.push(el);
    });
  });

  // Stagger children in grid sections
  const staggerGroups = [
    '.who-grid .who-card',
    '.services-grid .service-card',
    '.fees-grid .fees-card',
    '.faq-list .faq-item',
    '.timeline .timeline-step',
  ];

  staggerGroups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
    });
  });

  // Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px'
  });

  allRevealEls.forEach(el => observer.observe(el));

  // --- Contact form ---
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);

    const name    = data.get('name')?.trim();
    const email   = data.get('email')?.trim();
    const message = data.get('message')?.trim();

    if (!name || !email || !message) {
      success.style.color = 'var(--color-ember)';
      success.textContent = 'Please fill in all required fields.';
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending…';

    // Simulate submission — replace with real endpoint
    setTimeout(() => {
      success.style.color = 'var(--color-shore)';
      success.textContent = 'Message sent! We\'ll be in touch within one business day.';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
    }, 1400);
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href   = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 20;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // Update URL without jump
      history.pushState(null, '', href);
    });
  });

})();
