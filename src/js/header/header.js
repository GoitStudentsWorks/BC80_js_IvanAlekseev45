import { refsHeader } from './refs.js';

import { openBurgerMenu } from './handlers.js';

import { closeBurgerMenu } from './handlers.js';

refsHeader.burgerBtn.addEventListener('click', openBurgerMenu);

refsHeader.closeBurgerBtn.addEventListener('click', closeBurgerMenu);

refsHeader.burgerOrderBtn.addEventListener('click', closeBurgerMenu);

refsHeader.burgerLogoLinkMain.addEventListener('click', closeBurgerMenu);

refsHeader.burgerLinkSection.forEach(link =>
  link.addEventListener('click', closeBurgerMenu)
);
