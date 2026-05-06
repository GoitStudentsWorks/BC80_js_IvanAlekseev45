import refs from './refs';
import renderCategory from './renderCategory';
import renderDesserts from './renderDesserts';
import handleCategoryFilter from './handlers';

renderCategory();
renderDesserts();

refs.dessertCategory.addEventListener('click', handleCategoryFilter);
