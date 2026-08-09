/* =========================================================
   1. SCROLL REVEAL
   Your CSS already hides every <section> (opacity:0) and shows
   it when it gets the "visible" class. This is the missing half:
   watch each section, and add "visible" the first time it
   scrolls into view.
   ========================================================= */
const sections = document.querySelectorAll('section');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Skip the animation entirely and just show everything —
  // respects users who've asked their OS to reduce motion.
  sections.forEach((section) => section.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  sections.forEach((section) => revealObserver.observe(section));
} else {
  // Old browser without IntersectionObserver support
  sections.forEach((section) => section.classList.add('visible'));
}

/* =========================================================
   2. DARK MODE TOGGLE
   Expects a button with class "dark-mode-btn" somewhere in the
   page, e.g.: <button class="dark-mode-btn" aria-pressed="false"
   aria-label="Toggle dark mode">🌙</button>
   Preference is remembered across visits via localStorage.
   ========================================================= */
const darkModeBtn = document.querySelector('.dark-mode-btn');

function applyDarkMode(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  if (darkModeBtn) {
    darkModeBtn.setAttribute('aria-pressed', String(isDark));
    darkModeBtn.textContent = isDark ? '☀️' : '🌙';
  }
}

// Restore saved preference on load
const savedTheme = localStorage.getItem('theme');
applyDarkMode(savedTheme === 'dark');

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    applyDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* =========================================================
   3. BACK TO TOP BUTTON
   Expects a button with class "top-btn" somewhere in the page,
   e.g.: <button class="top-btn" aria-label="Back to top">↑</button>
   Your CSS shows it via ".top-btn.show" once the user has
   scrolled down; this toggles that class and handles the click.
   ========================================================= */
const topBtn = document.querySelector('.top-btn');

if (topBtn) {
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('show', window.scrollY > 400);
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });
}