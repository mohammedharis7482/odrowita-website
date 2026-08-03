/* =========================================================
   ODROWITA — Shared site behaviour
   Used across all pages. Every feature checks for its
   elements before running, so pages without them are unaffected.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Header: solid background after scrolling past hero ----------
     Pages with a photo hero (e.g. Home) start with a transparent header
     and toggle to solid on scroll. Pages that hardcode is-solid on the
     <header> (About, Services, Contact — no photo behind the nav) want it
     permanently solid, so the scroll listener must never touch them. */
  var header = document.querySelector('.site-header');
  if (header && !header.classList.contains('is-solid')) {
    var threshold = 80;
    var setHeaderState = function () {
      if (window.scrollY > threshold) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    };
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  /* ---------- Mobile nav drawer ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileNavClose = document.querySelector('.mobile-nav-close');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    mobileNav.removeAttribute('inert');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('inert', '');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', openMobileNav);
    if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });
  }

  /* ---------- Scroll-down cue ---------- */
  var scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    scrollCue.addEventListener('click', function () {
      var next = document.querySelector('.hero').nextElementSibling;
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- Fade-up-on-scroll reveal ----------
     The hidden (opacity:0) styling only activates via the
     .js-reveal-ready class below, added here — so content stays
     visible by default if this script never runs (e.g. blocked). */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveal-ready');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Contact form: mailto submission ---------- */
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var name = (data.get('name') || '').toString().trim();
      var company = (data.get('company') || '').toString().trim();
      var email = (data.get('email') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();
      var message = (data.get('message') || '').toString().trim();

      var subject = 'Enquiry from ' + (name || 'website contact form');
      var bodyLines = [
        'Name: ' + name,
        'Company: ' + company,
        'Email: ' + email,
        'Phone: ' + phone,
        '',
        message
      ];

      var mailto = 'mailto:Info@odrowita.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }
})();
