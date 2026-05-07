import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getDessertById } from '../api-requests/getDessertsByCategoryId.js';

import {
  openDessertModal,
  closeDessertModal,
  renderDessertModalContent,
  getModalRoot,
} from './dessert-details-modal.js';

export const onOpenDessertModalClick = async event => {
  const openModalBtn = event.target.closest('.js-dessert-modal-open');

  if (!openModalBtn) {
    return;
  }

  const dessertId = openModalBtn.dataset.id;

  if (!dessertId) {
    iziToast.error({
      message: 'Не вдалося визначити десерт. Спробуйте ще раз.',
      position: 'topRight',
    });

    return;
  }

  openDessertModal();

  try {
    const dessert = await getDessertById(dessertId);
    renderDessertModalContent(dessert);
  } catch (error) {
    closeDessertModal();

    iziToast.error({
      message: 'Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.',
      position: 'topRight',
    });

    console.log(error);
  }
};

export const onBackdropClick = event => {
  const modalRoot = getModalRoot();

  if (event.target === modalRoot) {
    closeDessertModal();
  }
};

export const onEscKeydown = event => {
  if (event.key === 'Escape') {
    closeDessertModal();
  }
};

export const onCloseBtnClick = () => {
  closeDessertModal();
};

export const onOrderBtnClick = () => {
  closeDessertModal();

  const orderModalOpenEvent = new CustomEvent('open-order-modal');
  document.dispatchEvent(orderModalOpenEvent);
};