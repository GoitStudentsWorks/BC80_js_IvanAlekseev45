import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bestsellersUrl from '../../img/sprite.svg';

import { refsBestsellers } from './refs';
import { onInitBestsellers } from './handlers';

document.addEventListener('DOMContentLoaded', onInitBestsellers);

let swiper = null;

function equalizeSlideHeights() {
  const items = document.querySelectorAll('.bestsellers-list-item');

  items.forEach(item => {
    item.style.height = 'auto';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.justifyContent = 'space-between';
  });

  requestAnimationFrame(() => {
    let maxHeight = 0;
    items.forEach(item => {
      if (item.offsetHeight > maxHeight) maxHeight = item.offsetHeight;
    });
    items.forEach(item => (item.style.height = maxHeight + 'px'));
  });
}

export function renderBestsellers(array) {
  const markup = array
    .map(
      ({ image, category, description, name, price, _id }) =>
        `<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${image}" alt="${name}"/>
                <p class="bestsellers-category">${category.name}</p>
                <h3 class="bestsellers-name">${name}</h3>
                <p class="bestsellers-description">${description}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${price} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${_id}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${bestsellersUrl}#icon-arrow_outward"></use>
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

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      prevEl: '.page-left-btn',
      nextEl: '.page-right-btn',
    },

    on: {
      init() {
        equalizeSlideHeights();
      },
      resize() {
        equalizeSlideHeights();
      },
    },
  });
}
