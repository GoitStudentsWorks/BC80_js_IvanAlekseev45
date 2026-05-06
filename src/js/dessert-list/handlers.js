import refs from './refs.js';
import getDesertsResponse from '../api-requests/getDesertsResponse.js';

const renderDesserts = async () => {
  try {
    const { desserts } = await getDesertsResponse();

    const markup = desserts.map(
      ({ id, name, description, price, category, image }) => {
        return `
        <li class="dessert-list__item">
            <img src="${image}" alt="${name}" />
            <div>
                <p>${category.name}</p>
                <p>${name}</p>
                <p>${description}</p>
                <p>${price}</p>
            </div>
        </li>
      `;
      },
    );

    refs.dessertList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
};

export default renderDesserts;
