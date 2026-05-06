import { getBestsellers } from '../api-requests/getBestsellers';
import { refsBestsellers } from './refs';

let page = 1;
export async function onInitBestsellers(event) {
  refsBestsellers.loaderBestsellers.style.display = 'block';
  try {
    const { desserts } = await getBestsellers(page);
    renderBestsellers(desserts);
  } catch (error) {
    console.log(error);
  } finally {
    refsBestsellers.loaderBestsellers.style.display = 'none';
  }
}

function renderBestsellers(array) {
  const markup = array.map(
    ({ image, category, description, name, price, _id }) =>
      `<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${image}"/>
    <p class="bestsellers-category">${category.name}</p>
    <h2 class="bestsellers-name">${name}</h2>
    <p class="bestsellers-description">${description}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${price} грн</p>
        <button class="bestsellers-modal-btn" type="button" data-id="${_id}">
        <svg class="bestsellers-button-cvg" width="13" height="13" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`
  );
  refsBestsellers.bestsellersList.innerHTML = markup;
}
