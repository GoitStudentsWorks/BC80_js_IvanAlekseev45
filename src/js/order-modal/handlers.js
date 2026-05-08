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

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const dessertId = getSelectedDessertId();

  if (!dessertId) {
    iziToast.error({
      message: 'Не вдалося визначити десерт для замовлення',
      position: 'topRight',
      color: '#FA5053',
      class: 'custom-toast',
    });

    return;
  }

  const formData = new FormData(form);

  const rawPhone = formData.get('phone').trim();

const orderData = {
  name: formData.get('name').trim(),
  phone: rawPhone.replace(/\D/g, ''),
  dessertId,
  comment: formData.get('comment').trim(),
};

const phonePattern = /^380[0-9]{9}$/;

if (!phonePattern.test(orderData.phone)) {
  iziToast.error({
    message: 'Введіть телефон у форматі 380961234568',
    position: 'center',
    color: '#FA5053',
    messageColor: '#ffffff',
    class: 'custom-toast',
  });

  return;
}
  try {
    await postOrder(orderData);

    iziToast.success({
      message: 'Замовлення успішно відправлено!',
      position: 'topRight',
      color: '#24922E',
      messageColor: '#ffffff',
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
    color: '#FA5053',
    messageColor: '#ffffff',
    class: 'custom-toast',
  });
  }
};