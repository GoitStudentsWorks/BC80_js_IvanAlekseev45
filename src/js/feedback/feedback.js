import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getFeedbacks, onInitFeedbacksPage } from './handlers.js';
import { refsFeedback } from './refs.js';
import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', onInitFeedbacksPage);
