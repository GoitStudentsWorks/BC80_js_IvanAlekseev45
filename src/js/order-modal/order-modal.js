import { refs } from './refs.js';
import spriteUrl from '../../img/sprite.svg?url';

import {
  onBackdropClick,
  onEscKeydown,
  onCloseBtnClick,
  onOrderFormSubmit,
} from './handlers.js';

let orderModalRoot = null;
let selectedDessertId = null;

export const initOrderModal = () => {
  document.addEventListener('open-order-modal', event => {
    const { dessertId } = event.detail || {};

    if (!dessertId) {
      return;
    }

    openOrderModal(dessertId);
  });
};

export const openOrderModal = dessertId => {
  selectedDessertId = dessertId;

  orderModalRoot = document.createElement('div');
  orderModalRoot.classList.add('order-modal-backdrop');

  orderModalRoot.innerHTML = `
    <div
      class="order-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <button
        class="order-modal__close-btn js-order-modal-close"
        type="button"
        aria-label="Close modal"
      >
        <svg
          class="order-modal__close-icon"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <use href="${spriteUrl}#icon-close"></use>
        </svg>
      </button>

      <h2 class="order-modal__title" id="order-modal-title">
        Оформлення замовлення
      </h2>

      <form class="order-form js-order-form" novalidate>
      <label class="order-form__label">
        <span class="order-form__label-text">Ім'я*</span>
        <input
          class="order-form__input"
          type="text"
          name="name"
            placeholder="Вікторія"
          />
        </label>

        <label class="order-form__label">
          <span class="order-form__label-text">Телефон*</span>
          <input
            class="order-form__input"
            type="tel"
            name="phone"
            placeholder="38 0__ ______"
          />
        </label>

        <label class="order-form__label">
          <span class="order-form__label-text">Коментар*</span>
          <textarea
            class="order-form__textarea"
            name="comment"
            placeholder="Ваш коментар"
          ></textarea>
        </label>

        <button class="order-form__submit-btn" type="submit">
          Надіслати заявку
        </button>
      </form>
    </div>
  `;

  refs.body.append(orderModalRoot);
  refs.body.classList.add('no-scroll');

  orderModalRoot.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeydown);

  const closeBtn = orderModalRoot.querySelector('.js-order-modal-close');
  closeBtn.addEventListener('click', onCloseBtnClick);

  const form = orderModalRoot.querySelector('.js-order-form');
  form.addEventListener('submit', onOrderFormSubmit);
};

export const closeOrderModal = () => {
  if (!orderModalRoot) {
    return;
  }

  const closeBtn = orderModalRoot.querySelector('.js-order-modal-close');
  closeBtn?.removeEventListener('click', onCloseBtnClick);

  const form = orderModalRoot.querySelector('.js-order-form');
  form?.removeEventListener('submit', onOrderFormSubmit);

  orderModalRoot.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscKeydown);

  orderModalRoot.remove();
  orderModalRoot = null;
  selectedDessertId = null;

  refs.body.classList.remove('no-scroll');
};

export const getSelectedDessertId = () => {
  return selectedDessertId;
};

initOrderModal();
