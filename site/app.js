(() => {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;
  const saved = localStorage.getItem('hive-theme');
  if (saved === 'dark') document.body.classList.add('is-dark');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('is-dark');
    localStorage.setItem('hive-theme', document.body.classList.contains('is-dark') ? 'dark' : 'light');
  });
})();
