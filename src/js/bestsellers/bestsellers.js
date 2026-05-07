import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { refsBestsellers } from './refs';
import { onInitBestsellers } from './handlers';

document.addEventListener('DOMContentLoaded', onInitBestsellers);

let swiper = null;

export function renderBestsellers(array) {
  const markup = array
    .map(
      ({ image, category, description, name, price, _id }) =>
        `<li class="bestsellers-list-item swiper-slide">
          <img class="bestsellers-image" src="${image}" alt="${name}"/>
          <p class="bestsellers-category">${category.name}</p>
          <h3 class="bestsellers-name">${name}</h3>
          <p class="bestsellers-description">${description}</p>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${price} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${_id}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="/img/sprite.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`
    )
    .join('');

  refsBestsellers.bestsellersList.innerHTML = markup;

  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }

  swiper = new Swiper('.swiper-bestsellers', {
    modules: [Navigation, Pagination],

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    navigation: {
      prevEl: '.page-left-btn',
      nextEl: '.page-right-btn',
    },

    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
