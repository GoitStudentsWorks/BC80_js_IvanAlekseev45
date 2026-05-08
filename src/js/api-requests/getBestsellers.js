import axios from 'axios';
import iziToast from 'izitoast';

export const getBestsellers = async () => {
  try {
    const url = `https://deserts-store.b.goit.study/api`;

    const { data } = await axios.get(`${url}/desserts?type=popular&limit=18`);

    return data;
  } catch (err) {
    iziToast.error({
      message:
        'Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.',
      position: 'topRight',
      messageSize: 16,
      messageLineHeight: 26,
      closeOnClick: true,
      progressBar: false,
    });
  }
};
