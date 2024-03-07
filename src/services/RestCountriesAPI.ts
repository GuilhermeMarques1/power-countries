import axios from "axios";

const RestCountriesAPI = () => {
  const defaultOptions = {
    baseURL: 'https://restcountries.com/v3.1',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  const instace = axios.create(defaultOptions);

  return instace;
}

export default RestCountriesAPI();
