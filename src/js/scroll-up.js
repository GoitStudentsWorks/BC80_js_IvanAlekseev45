const btn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1500) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
});

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
