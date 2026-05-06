import refs from './refs';
import renderDesserts from './renderDesserts';

const handleCategoryFilter = e => {
  const btn = e.target.closest('.dessert-category__btn');
  if (!btn) return;

  const categoryId = btn.dataset.id;
  console.log(categoryId);

  document
    .querySelectorAll('.dessert-category__btn')
    .forEach(btn => btn.classList.remove('active__btn'));

  btn.classList.add('active__btn');

  if (categoryId === 'all') {
    refs.dessertList.innerHTML = '';
    renderDesserts();
    return;
  }

  // renderCategoryById(categoryId);
};

export default handleCategoryFilter;
