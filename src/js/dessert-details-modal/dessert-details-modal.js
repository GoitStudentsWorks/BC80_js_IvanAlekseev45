// import 'css-star-rating/css/star-rating.min.css';

import { refs } from './refs.js';

import {
  onOpenDessertModalClick,
  onBackdropClick,
  onEscKeydown,
  onCloseBtnClick,
  onOrderBtnClick,
} from './handlers.js';

let modalRoot = null;

export const initDessertModal = () => {
  document.addEventListener('click', onOpenDessertModalClick);
};

export const openDessertModal = () => {
  modalRoot = document.createElement('div');
  modalRoot.classList.add('dessert-modal-backdrop');

  modalRoot.innerHTML = `
    <div class="dessert-modal" role="dialog" aria-modal="true">
      <button
        class="dessert-modal__close-btn"
        type="button"
        aria-label="Close modal"
      >
        <svg
          class="dessert-modal__close-icon"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <use href="/img/sprite.svg#icon-close"></use>
        </svg>
      </button>

      <div class="dessert-modal__content">
        <div class="loader">
          <div class="cup">
            <div class="cup-handle"></div>
            <div class="smoke one"></div>
            <div class="smoke two"></div>
            <div class="smoke three"></div>
          </div>
          <div class="load">Loading...</div>
        </div>
      </div>
    </div>
  `;

  refs.body.append(modalRoot);
  refs.body.classList.add('no-scroll');

  modalRoot.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeydown);

  const closeBtn = modalRoot.querySelector('.dessert-modal__close-btn');
  closeBtn.addEventListener('click', onCloseBtnClick);
};

export const closeDessertModal = () => {
  if (!modalRoot) {
    return;
  }

  modalRoot.remove();
  modalRoot = null;

  refs.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', onEscKeydown);
};

export const getModalRoot = () => {
  return modalRoot;
};

export const renderDessertModalContent = dessert => {
  if (!modalRoot) {
    return;
  }

  const content = modalRoot.querySelector('.dessert-modal__content');

  const { _id, name, price, rate, description, composition, image } = dessert;

  const compositionText = composition || '';

  content.innerHTML = `
    <img
      class="dessert-modal__image"
      src="${image}"
      alt="${name}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${name}</h2>

      <p class="dessert-modal__price">${price} грн</p>

      <div class="dessert-modal__rating">
        ${createStarsMarkup(rate)}
      </div>

      <p class="dessert-modal__description">
        ${description}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${compositionText}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${_id}"
      >
        Перейти до замовлення
      </button>
    </div>
  `;

  const orderBtn = content.querySelector('.dessert-modal__order-btn');
  orderBtn.addEventListener('click', onOrderBtnClick);
};

const normalizeRating = rate => {
  const numberRate = Number(rate);

  if (Number.isNaN(numberRate)) {
    return 0;
  }

  const roundedRate = Math.round(numberRate * 2) / 2;

  return Math.min(Math.max(roundedRate, 0), 5);
};

const createStarsMarkup = rate => {
  const normalizedRating = normalizeRating(rate);

  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 !== 0;

  return `
    <div
      class="rating medium star-svg color-default direction-ltr value-${fullStars} ${hasHalfStar ? 'half' : ''}"
      aria-label="Рейтинг ${normalizedRating} з 5"
    >
      <div class="star-container">
        ${Array.from(
          { length: 5 },
          () => `
            <div class="star">
              <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
              </svg>
            </div>
          `
        ).join('')}
      </div>
    </div>
  `;
};

initDessertModal();