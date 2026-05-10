import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getFeedbacks, onInitFeedbacksPage } from './handlers.js';
import { refsFeedback } from './refs.js';
import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', onInitFeedbacksPage);

const mediaQueryFeedbacks = window.matchMedia('(min-width: 768px)');

function moveButtons(isDesktop) {
  const buttons = document.querySelector('.feedback-button-wrapper');
  const paginateBox = document.querySelector('.nav-paginations-feedbacks');
  const swiperEl = document.querySelector('.feedback-slider-container');

  if (isDesktop) {
    swiperEl.appendChild(buttons);
  } else {
    paginateBox.appendChild(buttons);
  }
}
moveButtons(mediaQueryFeedbacks.matches);
mediaQueryFeedbacks.addEventListener('change', e => moveButtons(e.matches));
