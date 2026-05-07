import axios from 'axios';
import { getLimitByScreen } from '../bestsellers/handlers';

export const getBestsellers = async (page, limit) => {
  const url = `https://deserts-store.b.goit.study/api`;

  const { data } = await axios.get(`${url}/desserts?type=popular`, {
    params: {
      page,
      limit,
    },
  });

  return data;
};
