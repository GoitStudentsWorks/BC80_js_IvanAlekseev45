import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import postOrder from '../api-requests/postOrder.js';

import { closeOrderModal, getSelectedDessertId } from './order-modal.js';

export const onBackdropClick = event => {
  if (event.target.classList.contains('order-modal-backdrop')) {
    closeOrderModal();
  }
};

export const onEscKeydown = event => {
  if (event.key === 'Escape') {
    closeOrderModal();
  }
};

export const onCloseBtnClick = () => {
  closeOrderModal();
};

export const onOrderFormSubmit = async event => {
  event.preventDefault();

  const form = event.currentTarget;
  const dessertId = getSelectedDessertId();

  if (!dessertId) {
    iziToast.error({
      message: 'Не вдалося визначити десерт для замовлення',
      position: 'topRight',
      color: '#FFC9C9',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    return;
  }

  const formData = new FormData(form);

  const name = formData.get('name').trim();
  const rawPhone = formData.get('phone').trim();
  const phone = rawPhone.replace(/\D/g, '');
  const comment = formData.get('comment').trim();

  if (!name) {
    iziToast.error({
      message: 'Введіть ім’я',
      position: 'center',
      color: '#f5b6b6',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    return;
  }

  if (name.length < 2) {
    iziToast.error({
      message: 'Ім’я має містити щонайменше 2 символи',
      position: 'center',
      color: '#f5b6b6',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    return;
  }

  const phonePattern = /^380[0-9]{9}$/;

  if (!phonePattern.test(phone)) {
    iziToast.error({
      message: 'Введіть телефон у форматі 380961234568',
      position: 'center',
      color: '#f5b6b6',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    return;
  }

  if (!comment) {
    iziToast.error({
      message: 'Введіть коментар',
      position: 'center',
      color: '#f5b6b6',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    return;
  }

  if (comment.length < 5) {
    iziToast.error({
      message: 'Коментар має містити щонайменше 5 символів',
      position: 'center',
      color: '#f5b6b6',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    return;
  }

  const orderData = {
    name,
    phone,
    dessertId,
    comment,
  };

  try {
    await postOrder(orderData);

    iziToast.success({
      message: 'Замовлення успішно відправлено!',
      position: 'topRight',
      color: '#aefcd2',
      messageColor: '#000000',
      class: 'custom-toast',
    });

    form.reset();
    closeOrderModal();
  } catch (error) {
    console.log('Error in order submit:', error);
    console.log('Server response:', error.response?.data);
    console.log('Status:', error.response?.status);

    iziToast.error({
      message:
        error.response?.data?.message ||
        'Не вдалося надіслати заявку. Спробуйте ще раз.',
      position: 'topRight',
      color: '#f5b6b6',
      messageColor: '#000000',
      class: 'custom-toast',
    });
  }
};