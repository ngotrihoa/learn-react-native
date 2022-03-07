const getSelectedCountries = (countries) => {
  return countries.filter((item) => item.selected);
};

export { getSelectedCountries };
