(() => {
  const cocktail = document.querySelector('.sidebar__cocktail');
  const footer = document.querySelector('.page__footer');
  const content = document.querySelector('.page__content');
  if (!cocktail || !footer || !content) return;

  let scheduled = false;
  const update = () => {
    const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
    const bounds = content.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(cocktail).fontSize);
    const height = cocktail.getBoundingClientRect().height;
    const top = Math.max(window.innerHeight - overlap - gap - height, bounds.bottom + gap);
    cocktail.style.setProperty('--cocktail-top', `${top}px`);
    const right = document.documentElement.clientWidth - bounds.right;
    cocktail.style.setProperty('--cocktail-right-offset', `${Math.max(0, right)}px`);
    scheduled = false;
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  new ResizeObserver(schedule).observe(document.body);
  update();
})();
