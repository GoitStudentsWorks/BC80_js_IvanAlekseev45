import refs from './refs';
import renderCategory from './renderCategory';
import renderDesserts from './renderDesserts';
import handlers from './handlers';
import './dropdownMenu';

renderCategory();
renderDesserts();

refs.dessertCategory.addEventListener('click', handlers.handleCategoryFilter);
refs.dessertLoadMoreBtn.addEventListener(
  'click',
  handlers.handleLoadMoreDesserts,
);
