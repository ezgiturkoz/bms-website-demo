const slides = [...document.querySelectorAll('.hero-slide')];
const arrows = [...document.querySelectorAll('[data-hero-step]')];
const status = document.querySelector('#hero-status');
let current = 0;
let timer;

// Keep rotating independently of pointer, keyboard focus and scroll position.
// CSS removes zoom/dissolve motion when the visitor prefers reduced motion.
function show(index, manual=false) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  if (manual && status) status.textContent = slides[current].getAttribute('aria-label');
  // Give a manually selected image a full interval before advancing again.
  clearTimeout(timer);
  timer = setTimeout(() => show(current + 1), 6500);
}

if (slides.length > 1) {
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => show(current + Number(arrow.dataset.heroStep), true));
    arrow.hidden = false;
  });
  show(current);
}
