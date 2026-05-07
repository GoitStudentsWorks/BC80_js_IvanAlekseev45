import {
  onInitBestsellers,
  onLeftBtnBestsellersClick,
  onResizeBestsellers,
  onRightBtnBestsellersClick,
} from './handlers';
import { refsBestsellers } from './refs';

document.addEventListener('DOMContentLoaded', onInitBestsellers);
window.addEventListener('resize', onResizeBestsellers);
refsBestsellers.leftBtn.addEventListener('click', onLeftBtnBestsellersClick);
refsBestsellers.rightBtn.addEventListener('click', onRightBtnBestsellersClick);
