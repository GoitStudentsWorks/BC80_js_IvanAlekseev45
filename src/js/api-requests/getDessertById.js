import axios from 'axios';

const getDessertById = async id => {
  const url = 'https://deserts-store.b.goit.study/api';

  const { data } = await axios.get(`${url}/desserts/${id}`);

  return data;
};

export default getDessertById;