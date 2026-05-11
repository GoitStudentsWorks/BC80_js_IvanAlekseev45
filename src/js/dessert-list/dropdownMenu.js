import refs from './refs';

refs.dropdownBtn.addEventListener('click', () => {
  refs.dropdown.classList.toggle('is-open');
});

refs.dropdown.addEventListener('click', e => {
  const btn = e.target.closest('.dessert-category__btn');
  if (!btn) return;

  refs.dropdownBtn.textContent = btn.textContent;
  refs.dropdown.classList.remove('is-open');
});

document.addEventListener('click', e => {
  if (!refs.dropdown.contains(e.target)) {
    refs.dropdown.classList.remove('is-open');
  }
});
