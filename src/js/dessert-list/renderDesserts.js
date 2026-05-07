import refs from './refs.js';
import getDessertsResponse from '../api-requests/getDessertsResponse.js';
import dessertsMarkup from './dessertsMarkup.js';

const renderDesserts = async (page = 1, category = 'all') => {
  try {
    const { desserts } = await getDessertsResponse(page, category);

    dessertsMarkup(desserts);

    refs.dessertLoadMoreBtn.classList.remove('dessert-button-hidden');
  } catch (error) {
    console.log(error);
  }
};

export default renderDesserts;
