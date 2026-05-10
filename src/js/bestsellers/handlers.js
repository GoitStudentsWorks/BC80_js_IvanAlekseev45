import { getBestsellers } from '../api-requests/getBestsellers';
import { refsBestsellers } from './refs';
import { renderBestsellers } from './bestsellers';
import iziToast from 'izitoast';

export async function onInitBestsellers() {
  const loader = refsBestsellers.loaderBestsellers;

  loader.style.display = 'block';

  try {
    const { desserts } = await getBestsellers();

    renderBestsellers(desserts);
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
  } finally {
    loader.style.display = 'none';
  }
}
