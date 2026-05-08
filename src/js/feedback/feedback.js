import axios from 'axios';
import 'css-star-rating/css/star-rating.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { refsFeedback } from './refs.js';

const getFeedbacks = async () => {
  try {
    const response = await axios.get(
      'https://deserts-store.b.goit.study/api/feedbacks'
    );

    const feedbacksArray = response.data.feedbacks;
    console.log(feedbacksArray);
    if (Array.isArray(feedbacksArray)) {
      const markup = feedbacksArray.map(item => reviewTemplate(item)).join('');
      refsFeedback.reviewsList.innerHTML = markup;
      const swiper = new Swiper('.feedback-swiper', {
        loop: true,
        speed: 600,

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.button-next', // Перевір, щоб у твоїх кнопок були ці класи
          prevEl: '.button-prev',
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

getFeedbacks();

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
              <svg class="star-empty"><use href="./img/sprite.svg#icon-star"></use></svg>
              <svg class="star-half"><use href="./img/sprite.svg#icon-star"></use></svg>
              <svg class="star-filled"><use href="./img/sprite.svg#icon-star"></use></svg>
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
