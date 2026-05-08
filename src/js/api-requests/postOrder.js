import axios from 'axios';

const BASE_URL = 'https://deserts-store.b.goit.study/api';

const postOrder = async orderData => {
  const { data } = await axios.post(`${BASE_URL}/orders`, orderData);

  return data;
};

export default postOrder;