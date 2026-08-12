const html5Banners = document.querySelectorAll('.html5-banner[data-banner-width]');

const resizeHtml5Banner = (banner) => {
  const sourceWidth = Number(banner.dataset.bannerWidth);
  const sourceHeight = Number(banner.dataset.bannerHeight);
  const frame = banner.querySelector('iframe');
  if (!sourceWidth || !sourceHeight || !frame) return;

  const scale = banner.clientWidth / sourceWidth;
  banner.style.setProperty('--banner-scale', scale);
  banner.style.height = `${sourceHeight * scale}px`;
  frame.style.width = `${sourceWidth}px`;
  frame.style.height = `${sourceHeight}px`;
};

const bannerObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => resizeHtml5Banner(entry.target));
});

html5Banners.forEach((banner) => {
  resizeHtml5Banner(banner);
  bannerObserver.observe(banner);
});

const hydrateIframe = (frame) => {
  const source = frame.dataset.src;
  if (!source || frame.hasAttribute('src')) return;
  frame.src = source;
  frame.removeAttribute('data-src');
};

const hydrateVideo = (video) => {
  if (video.dataset.hydrated === 'true') return false;

  let hasSource = false;
  video.querySelectorAll('source[data-src]').forEach((source) => {
    source.src = source.dataset.src;
    source.removeAttribute('data-src');
    hasSource = true;
  });

  if (!hasSource) return false;
  video.dataset.hydrated = 'true';
  video.load();
  return true;
};

const lazyFrames = document.querySelectorAll('iframe[data-src]');
const ambientVideos = document.querySelectorAll('video[data-autoplay]');
const controlledVideos = document.querySelectorAll('video[data-lazy-video]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window) {
  const mediaLoader = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.tagName === 'IFRAME') hydrateIframe(entry.target);
      if (entry.target.tagName === 'VIDEO') hydrateVideo(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '1800px 0px', threshold: 0.01 });

  lazyFrames.forEach((frame) => mediaLoader.observe(frame));
  ambientVideos.forEach((video) => mediaLoader.observe(video));
  controlledVideos.forEach((video) => mediaLoader.observe(video));
} else {
  lazyFrames.forEach(hydrateIframe);
  ambientVideos.forEach(hydrateVideo);
  controlledVideos.forEach(hydrateVideo);
}

controlledVideos.forEach((video) => {
  const prepare = () => hydrateVideo(video);
  video.addEventListener('pointerenter', prepare, { once: true });
  video.addEventListener('touchstart', prepare, { once: true, passive: true });
  video.addEventListener('click', () => {
    if (hydrateVideo(video)) video.play().catch(() => {});
  });
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        hydrateVideo(video);
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.3 });

  ambientVideos.forEach((video) => videoObserver.observe(video));
} else if (reduceMotion) {
  ambientVideos.forEach((video) => {
    video.controls = true;
  });
}

const backToTop = document.querySelector('.case-back-to-top');
const overviewBlock = document.querySelector('.case-overview');
const firstCaseBlock = overviewBlock || document.querySelector('.case-main > .case-section');
const contentEdge = document.querySelector('.case-inner');
const footer = document.querySelector('.footer');

const updateBackToTop = () => {
  if (!backToTop || !firstCaseBlock || !contentEdge || !footer) return;

  const headerHeight = document.querySelector('.topbar')?.offsetHeight || 0;
  const firstBlockEnd = overviewBlock
    ? firstCaseBlock.offsetTop + firstCaseBlock.offsetHeight
    : firstCaseBlock.offsetTop + Math.min(320, firstCaseBlock.offsetHeight * 0.25);
  const contentRight = contentEdge.getBoundingClientRect().right;
  const buttonBottom = parseFloat(getComputedStyle(backToTop).bottom) || 0;
  const floatingButtonBottom = window.innerHeight - buttonBottom;
  const footerTop = footer.getBoundingClientRect().top;
  const dockOffset = Math.max(0, floatingButtonBottom + buttonBottom - footerTop);

  backToTop.classList.toggle('is-visible', window.scrollY + headerHeight >= firstBlockEnd);
  backToTop.style.right = `${Math.max(12, window.innerWidth - contentRight)}px`;
  backToTop.style.setProperty('--dock-offset', `${dockOffset}px`);
};

// Case pages use a root <base> for shared assets. Intercept the local anchor
// so the floating control always scrolls within the current case instead of
// resolving #top against the portfolio home page.
backToTop?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

updateBackToTop();
window.addEventListener('scroll', updateBackToTop, { passive: true });
window.addEventListener('resize', updateBackToTop);
