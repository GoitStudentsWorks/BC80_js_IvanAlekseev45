const getImgWidth = () => {
  if (window.matchMedia('(min-width: 1440px)').matches) return 278;
  if (window.matchMedia('(min-width: 768px)').matches) return 312;

  return 303;
};

const getImgHeight = () => {
  if (window.matchMedia('(min-width: 1440px)').matches) return 209;
  if (window.matchMedia('(min-width: 768px)').matches) return 234;

  return 227;
};

export default { getImgWidth, getImgHeight };
