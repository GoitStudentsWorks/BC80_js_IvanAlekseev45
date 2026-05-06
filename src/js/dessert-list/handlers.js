import refs from './refs.js';
import getDesertsResponse from '../api-requests/getDesertsResponse.js';
import getCategoryResponse from '../api-requests/getCategoryResponse.js';

const renderDesserts = async () => {
  try {
    const { desserts } = await getDesertsResponse();

    const markup = desserts
      .map(({ id, name, description, price, category, image }) => {
        return `
        <li class="dessert-list__item">
            <div class="dessert-list__wrapper">
                <img class='dessert-list__image' src="${image}" alt="${name}" />
                <p class="dessert-list__category">${category.name}</p>
            
                <p class="dessert-list__title">${name}</p>
                <p class="dessert-list__description">${description}</p>    
            </div>
            <div class="dessert-list__wrapper__bottom">
                <p class="dessert-list__price">${price} грн</p>
                <button class="dessert-list__btn" type="button">
                    <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true" >
                        <use href='/img/sprite.svg#icon-arrow_outward'></use>
                    </svg>
                </button>
            </div>
        </li>
      `;
      })
      .join('');

    refs.dessertList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
};

const renderCategory = async () => {
  try {
    const categories = await getCategoryResponse();

    const markup = categories
      .map(({ id, name }) => {
        return `
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button">${name}</button>
        </li>
      `;
      })
      .join('');

    refs.dessertCategory.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
};

export default { renderDesserts, renderCategory };
