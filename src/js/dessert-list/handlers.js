import getDessertsResponse from '../api-requests/getDessertsResponse';
import dessertsMarkup from './dessertsMarkup';
import renderDesserts from './renderDesserts';
import loader from './loader';
import refs from './refs';

import iziToast from 'izitoast';

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
  loader.showLoader();

  try {
    const desserts = await getDessertsResponse(page, categoryId);
    dessertsMarkup(desserts.desserts);
    updateLoadMoreButton(desserts.totalItems);
  } catch {
    iziToast.error({
      message: 'Виникла помилка при зміні категорії, спробуйте пізніше.',
      position: 'topRight',
    });
  } finally {
    loader.hideLoader();
  }
};

const handleLoadMoreDesserts = async () => {
  refs.dessertLoadMoreBtn.classList.add('dessert-button-hidden');
  refs.dessertLoadMoreBtn.disabled = true;

  loader.showLoader();

  page += 1;

  try {
    const { desserts, totalItems } = await getDessertsResponse(
      page,
      categoryId,
    );

    dessertsMarkup(desserts);
    updateLoadMoreButton(totalItems);
  } catch {
    iziToast.error({
      message: 'Виникла помилка при завантаженні десертів, спробуйте пізніше.',
      position: 'topRight',
    });
  } finally {
    loader.hideLoader();
  }
};

export default { handleCategoryFilter, handleLoadMoreDesserts };
