import { getBestsellers } from '../api-requests/getBestsellers';
import { refsBestsellers } from './refs';
import { renderBestsellers } from './bestsellers';

export async function onInitBestsellers() {
  const loader = refsBestsellers.loaderBestsellers;

  loader.style.display = 'block';

  try {
    const { desserts } = await getBestsellers();
    renderBestsellers(desserts);
  } catch (error) {
    console.error(error);
  } finally {
    loader.style.display = 'none';
  }
}
