import axios from 'axios';

const getDesertsResponse = async () => {
  const url = `https://deserts-store.b.goit.study/api`;

  const { data } = await axios.get(`${url}/desserts`);

  return data;
};

export default getDesertsResponse;
