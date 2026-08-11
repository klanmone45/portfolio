document.querySelectorAll('.project-card[href="#"]').forEach((card) => {
  card.addEventListener('click', (event) => event.preventDefault());
});

const backToTop = document.querySelector('.back-to-top');
const firstBlock = document.querySelector('.hero');
const contentEdge = document.querySelector('.section-width');
const footer = document.querySelector('.footer');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateBackToTop = () => {
  if (!backToTop || !firstBlock || !contentEdge || !footer) return;

  const headerHeight = document.querySelector('.topbar')?.offsetHeight || 0;
  const firstBlockEnd = firstBlock.offsetTop + firstBlock.offsetHeight;
  const contentRight = contentEdge.getBoundingClientRect().right;
  const buttonBottom = parseFloat(getComputedStyle(backToTop).bottom) || 0;
  const floatingButtonBottom = window.innerHeight - buttonBottom;
  const footerTop = footer.getBoundingClientRect().top;
  const dockOffset = Math.max(0, floatingButtonBottom + buttonBottom - footerTop);

  backToTop.classList.toggle('is-visible', window.scrollY + headerHeight >= firstBlockEnd);
  backToTop.style.right = `${Math.max(12, window.innerWidth - contentRight)}px`;
  backToTop.style.setProperty('--dock-offset', `${dockOffset}px`);
};

backToTop?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

updateBackToTop();
window.addEventListener('scroll', updateBackToTop, { passive: true });
window.addEventListener('resize', updateBackToTop);
