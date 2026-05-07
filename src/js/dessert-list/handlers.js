import getDessertsResponse from '../api-requests/getDessertsResponse';
import dessertsMarkup from './dessertsMarkup';
import refs from './refs';
import renderDesserts from './renderDesserts';

let page = 1;
let categoryId = 'all';

const updateLoadMoreButton = totalItems => {
  const totalPages = Math.ceil(totalItems / 8);

  if (page < totalPages) {
    refs.dessertLoadMoreBtn.classList.remove('dessert-button-hidden');
    refs.dessertLoadMoreBtn.disabled = false;
  } else {
    refs.dessertLoadMoreBtn.classList.add('dessert-button-hidden');
    refs.dessertLoadMoreBtn.disabled = true;
  }
};

const handleCategoryFilter = async e => {
  const btn = e.target.closest('.dessert-category__btn');
  if (!btn) return;

  page = 1;
  categoryId = btn.dataset.id;

  document
    .querySelectorAll('.dessert-category__btn')
    .forEach(btn => btn.classList.remove('active__btn'));

  btn.classList.add('active__btn');

  refs.dessertList.innerHTML = '';

  const desserts = await getDessertsResponse(page, categoryId);
  dessertsMarkup(desserts.desserts);

  updateLoadMoreButton(desserts.totalItems);
};

const handleLoadMoreDesserts = async () => {
  refs.dessertLoadMoreBtn.classList.add('dessert-button-hidden');
  refs.dessertLoadMoreBtn.disabled = true;

  page += 1;

  try {
    const desserts = await getDessertsResponse(page, categoryId);

    dessertsMarkup(desserts.desserts);

    updateLoadMoreButton(desserts.totalItems);
  } catch (error) {
    console.log(error);
  }
};

export default { handleCategoryFilter, handleLoadMoreDesserts };
