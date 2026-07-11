// Nikunj Stores — shared interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Product detail tabs
  const tabButtons = document.querySelectorAll('.tab-headers button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      tabPanels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // Quantity selector
  const qty = document.querySelector('.qty-selector');
  if (qty) {
    const display = qty.querySelector('span');
    let count = parseInt(display.textContent, 10) || 1;
    qty.querySelector('.qty-minus').addEventListener('click', () => {
      count = Math.max(1, count - 1);
      display.textContent = count;
    });
    qty.querySelector('.qty-plus').addEventListener('click', () => {
      count += 1;
      display.textContent = count;
    });
  }

  // Thumbnail gallery swap
  const thumbs = document.querySelectorAll('.thumb-row img');
  const mainImg = document.querySelector('.main-image img');
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      if (mainImg) mainImg.src = thumb.src.replace('/150/150', '/700/620');
    });
  });
});
