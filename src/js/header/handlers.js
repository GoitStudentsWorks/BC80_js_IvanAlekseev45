import { refsHeader } from './refs';

export const openBurgerMenu = () => {
  refsHeader.burgerMenu.classList.add('is-open');

  document.body.classList.add('no-scroll');
};

export const closeBurgerMenu = () => {
  refsHeader.burgerMenu.classList.remove('is-open');

  document.body.classList.remove('no-scroll');
};
