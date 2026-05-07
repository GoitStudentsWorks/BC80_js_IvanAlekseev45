import getDessertsResponse from '../api-requests/getDessertsResponse';
import dessertsMarkup from './dessertsMarkup';
import renderDesserts from './renderDesserts';
import loader from './loader';
import refs from './refs';

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

  refs.dessertList.innerHTML = '';
  loader.showLoader();

  await new Promise(resolve => requestAnimationFrame(resolve));

  try {
    const desserts = await getDessertsResponse(page, categoryId);
    dessertsMarkup(desserts.desserts);
    updateLoadMoreButton(desserts.totalItems);
  } catch (error) {
    console.log(error);
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
    const desserts = await getDessertsResponse(page, categoryId);

    dessertsMarkup(desserts.desserts);
    updateLoadMoreButton(desserts.totalItems);
  } catch (error) {
    console.log(error);
  } finally {
    loader.hideLoader();
  }
};

export default { handleCategoryFilter, handleLoadMoreDesserts };
