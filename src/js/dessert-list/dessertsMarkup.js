import refs from './refs';

const dessertsMarkup = desserts => {
  const markup = desserts
    .map(
      ({ _id, name, description, price, category, image }) => `
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">

          <div class='loader-sizes-skeleton'>
            <div class="loader dessert-loader">
              <div class="cup">
                <div class="cup-handle"></div>
                <div class="smoke one"></div>
                <div class="smoke two"></div>
                <div class="smoke three"></div>
              </div>
              <div class="load">..........................</div>
            </div>
          </div>

          <img class="dessert-list__image" src="${image}" alt="${name}" />
          <p class="dessert-list__category">${category.name}</p>

          <p class="dessert-list__title">${name}</p>
          <p class="dessert-list__description">${description}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${price} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${_id}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="/img/sprite.svg#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `,
    )
    .join('');

  refs.dessertList.insertAdjacentHTML('beforeend', markup);

  refs.dessertList.querySelectorAll('.dessert-list__image').forEach(img => {
    const loader = img.previousElementSibling;

    if (img.complete) {
      loader.style.display = 'none';
      img.classList.add('img__is-loaded');
      return;
    }

    img.addEventListener('load', () => {
      loader.style.display = 'none';
      img.classList.add('img__is-loaded');
    });

    img.addEventListener('error', () => {
      loader.style.display = 'none';
      img.classList.add('img__is-loaded');
    });
  });
};

export default dessertsMarkup;
