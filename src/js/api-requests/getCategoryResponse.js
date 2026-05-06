import axios from 'axios';

const getCategoryResponse = async () => {
  const url = 'https://deserts-store.b.goit.study/api';

  const { data } = await axios.get(`${url}/categories`);

  return data;
};

export default getCategoryResponse;
