import axios from 'axios';

const getDessertsResponse = async (page = 1, category = 'all') => {
  const url =
    category === 'all'
      ? `https://deserts-store.b.goit.study/api/desserts`
      : `https://deserts-store.b.goit.study/api/desserts?category=${category}`;

  const { data } = await axios.get(`${url}`, {
    params: {
      page,
      limit: 8,
    },
  });

  return data;
};

export default getDessertsResponse;
