import { getBestsellers } from '../api-requests/getBestsellers';
import { refsBestsellers } from './refs';

export const onResizeBestsellers = event => {
  let newLimit = getLimitByScreen();
  if (limit === newLimit) return;
  limit = newLimit;
  onInitBestsellers();
};

let page = 1;
let total = 0;
let limit = getLimitByScreen();

export function getLimitByScreen() {
  const width = window.innerWidth;

  if (width >= 1440) return 3;

  if (width >= 768) return 2;

  return 1;
}
export async function onInitBestsellers(event) {
  const list = refsBestsellers.bestsellersList;
  const loader = refsBestsellers.loaderBestsellers;
  const wrapper = document.querySelector('.bestseller-loader-wrapper');

  const currentHeight = wrapper.offsetHeight;
  wrapper.style.height = `${currentHeight}px`;

  loader.style.display = 'block';
  list.style.visibility = 'hidden';
  list.innerHTML = '';
  try {
    const { desserts, totalItems } = await getBestsellers(page, limit);
    total = totalItems;
    renderBestsellers(desserts);
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = 'none';
    list.style.visibility = '';

    wrapper.style.height = 'auto';
  }
}

function renderBestsellers(array) {
  const markup = array
    .map(
      ({ image, category, description, name, price, _id }) =>
        `<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${image}"/>
    <p class="bestsellers-category">${category.name}</p>
    <h3 class="bestsellers-name">${name}</h3>
    <p class="bestsellers-description">${description}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${price} грн</p>
        <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${_id}">
        <svg class="bestsellers-button-svg" width="24" height="24" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`
    )
    .join('');
  refsBestsellers.bestsellersList.innerHTML = markup;
}

export function onLeftBtnBestsellersClick(event) {
  if (page <= 1) return;
  page -= 1;
  onInitBestsellers();
}

export function onRightBtnBestsellersClick(event) {
  const totalPages = Math.ceil(total / limit);
  if (page >= totalPages) return;
  page += 1;
  onInitBestsellers();
}
