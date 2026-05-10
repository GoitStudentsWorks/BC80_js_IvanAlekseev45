import feedbacksUrl from '../../img/star-rating.icons.svg?raw';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';
import { refsFeedback } from './refs.js';
import iziToast from 'izitoast';

const initFeedbackSwiper = () => {
  new Swiper('.feedback-swiper', {
    loop: true,
    speed: 600,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
      },
    },
  });
};

const reviewTemplate = review => {
  const integerPart = Math.floor(review.rate);
  const isHalf = review.rate % 1 !== 0 ? 'half' : '';

  return `
    <li class="swiper-slide feedback-item">
      <div class="rating star-svg value-${integerPart} ${isHalf} color-default">
        <div class="star-container">
          ${Array(5)
            .fill(0)
            .map(
              () => `
            <div class="star">
              <svg class="star-empty"><use href="#star-empty"></use></svg>
              <svg class="star-half"><use href="#star-half"></use></svg>
              <svg class="star-filled"><use href="#star-filled"></use></svg>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
      <p class="feedback-text">${review.description}</p>
      <p class="feedback-user-name">${review.author}</p>
    </li>
  `;
};

export const getFeedbacks = async initSwiper => {
  try {
    const { data } = await axios.get(
      'https://deserts-store.b.goit.study/api/feedbacks'
    );

    return data.feedbacks;
  } catch (err) {
    iziToast.error({
      message:
        'Йой, здається, розробники щось нахімічили з відгуками, спробуйте пізніше.',
      position: 'topRight',
      messageSize: 16,
      messageLineHeight: 26,
      closeOnClick: true,
      progressBar: false,
    });
  }
};

export const onInitFeedbacksPage = async () => {
  if (!document.querySelector('#stars-sprite')) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div id="stars-sprite" style="display:none">${feedbacksUrl}</div>`
    );
  }
  refsFeedback.loader.classList.remove('is-hidden');
  try {
    const feedbacks = await getFeedbacks();
    const markup = feedbacks.map(item => reviewTemplate(item)).join('');
    refsFeedback.reviewsList.innerHTML = markup;

    initFeedbackSwiper();
  } catch (err) {
    iziToast.error({
      message: 'Йой, щось пішло не так, спробуйте пізніше.',
      position: 'topRight',
      messageSize: 16,
      closeOnClick: true,
      progressBar: false,
    });
  } finally {
    refsFeedback.loader.classList.add('is-hidden');
  }
};
