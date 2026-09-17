/* ==============================================
   Scroll: Header shadow on scroll
   ============================================== */
const header = document.getElementById('site-header');

const handleHeaderScroll = () => {
  if (window.scrollY > 20) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
};

window.addEventListener('scroll', handleHeaderScroll, { passive: true });

/* ==============================================
   Hamburger menu (mobile)
   ============================================== */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('site-nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  nav.classList.toggle('is-open', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Close nav when a link is clicked */
nav.querySelectorAll('.site-header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  });
});

/* ==============================================
   Fade-in on scroll (Intersection Observer)
   ============================================== */
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

fadeEls.forEach(el => fadeObserver.observe(el));

/* ==============================================
   Smooth scroll for anchor links
   ============================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const headerHeight = header.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ==============================================
   Works cards: fetch OG image via iframe preview
   (graceful no-op — placeholder handles fallback)
   ============================================== */

/* ==============================================
   Floating CTA (mobile)
   ============================================== */
const floatingCta = document.getElementById('floating-cta');
const heroSection = document.getElementById('hero');
const contactSection = document.getElementById('contact');

const handleFloatingCta = () => {
  const heroPast = heroSection.getBoundingClientRect().bottom < 0;
  const contactNotYet = contactSection.getBoundingClientRect().top > window.innerHeight;
  floatingCta.classList.toggle('is-visible', heroPast && contactNotYet);
};

window.addEventListener('scroll', handleFloatingCta, { passive: true });
