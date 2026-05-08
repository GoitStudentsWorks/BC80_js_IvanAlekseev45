import refs from './refs.js';
import getDessertsResponse from '../api-requests/getDessertsResponse.js';
import dessertsMarkup from './dessertsMarkup.js';
import loader from './loader.js';
import iziToast from 'izitoast';

const renderDesserts = async (page = 1, category = 'all') => {
  loader.showLoader();

  try {
    const { desserts } = await getDessertsResponse(page, category);

    dessertsMarkup(desserts);

    loader.hideLoader();

    refs.dessertLoadMoreBtn.classList.remove('dessert-button-hidden');
  } catch {
    iziToast.error({
      message: 'Виникла помилка при завантаженні десертів, спробуйте пізніше.',
      position: 'topRight',
    });
  }
};

export default renderDesserts;
