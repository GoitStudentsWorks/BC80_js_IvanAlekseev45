import getCategoryResponse from '../api-requests/getCategoryResponse.js';
import refs from './refs.js';

const renderCategory = async () => {
  try {
    const categories = await getCategoryResponse();

    const allBtn = `
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `;

    const markup = categories
      .map(({ _id, name }) => {
        return `
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${_id}">${name}</button>
        </li>
      `;
      })
      .join('');

    refs.dessertCategory.insertAdjacentHTML('beforeend', allBtn + markup);
  } catch (error) {
    console.log(error);
  }
};

export default renderCategory;
