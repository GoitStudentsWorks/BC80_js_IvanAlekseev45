import axios from 'axios';

export const getBestsellers = async () => {
  const url = `https://deserts-store.b.goit.study/api`;

  const { data } = await axios.get(`${url}/desserts?type=popular&limit=18`);

  return data;
};
