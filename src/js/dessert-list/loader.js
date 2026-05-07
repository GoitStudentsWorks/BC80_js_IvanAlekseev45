import refs from './refs';

const showLoader = () => {
  refs.dessertLoader.style.display = 'block';
};

const hideLoader = () => {
  refs.dessertLoader.style.display = 'none';
};

export default { showLoader, hideLoader };
