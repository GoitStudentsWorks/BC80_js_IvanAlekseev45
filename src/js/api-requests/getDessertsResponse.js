import axios from 'axios';

const getDessertsResponse = async (page = 1, category = 'all') => {
  axios.defaults.baseURL = `https://deserts-store.b.goit.study/api`;

  const url =
    category === 'all' ? `/desserts` : `/desserts?category=${category}`;

  const { data } = await axios.get(`${url}`, {
    params: {
      page,
      limit: 8,
    },
  });

  return data;
};

export default getDessertsResponse;
