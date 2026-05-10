import getCategoryResponse from '../api-requests/getCategoryResponse.js';
import refs from './refs.js';

import iziToast from 'izitoast';

const renderCategory = async () => {
  try {
    const categories = await getCategoryResponse();

    const allBtn = `
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all" aria-label="Перейти до всіх категорій">Всі десерти</button>
    </li>
  `;

    const markup = categories
      .map(({ _id, name }) => {
        return `
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${_id}" aria-label="Перейти до категорії ${name}">${name}</button>
        </li>
      `;
      })
      .join('');

    refs.dessertCategory.insertAdjacentHTML('beforeend', allBtn + markup);
  } catch {
    iziToast.error({
      message: 'Виникла помилка при завантаженні категорій, спробуйте пізніше.',
      position: 'topRight',
    });
  }
};

export default renderCategory;
