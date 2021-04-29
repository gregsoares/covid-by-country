import axios from 'axios';

const fetchCountryData = (countryName) => {
  return axios
    .get(`https://corona.lmao.ninja/v2/jhucsse/counties/${countryName}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      const errMsg = new Error(err);
      console.log(errMsg);
    });
};

export const fetchData = (options) => {
  return options.countryName
    ? fetchCountryData(options.countryName)
    : 'no name given';
};
