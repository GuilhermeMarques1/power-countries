import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestCountriesAPI from "../../services/RestCountriesAPI";
import { ICountriesList } from "../../Types/ICountries";

import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export function CountryView() {
  const { state } = useLocation();
  const id = state && state.id;

  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState<ICountriesList>();

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await RestCountriesAPI.get(`/name/${id}`);

      const [countryData] = res.data as ICountriesList[];

      setCountry(countryData);
      setIsLoading(false);
    }

    if(isLoading) fetchCountry();
  }, []);

  return (
   <> 
      <Header />
      <Container>
        {
          country ?
          <Content>
            <img src={country.flags.svg} alt={country.flags.alt} />
            <div>
              <h1>{country.name.official}</h1>
              <ul>
                <li><strong>Região:</strong> {country.region}</li>
                {
                  country.capital && 
                  <li><strong>Capital:</strong> {country.capital}</li>
                }
                <li><strong>População:</strong> {country.population}</li>
                <li>
                  {Object.keys(country.languages ?? {}).map((key, index, array) => (
                    country.languages &&
                    <>
                      <strong>Línguas: </strong> 
                      <span>
                        {country.languages[key]}
                        {index < array.length - 1 ? ', ' : ''}
                      </span>
                    </>
                  ))}
                </li>
                <li>
                  {Object.keys(country.currencies ?? {}).map((key, index, array) => (
                    country.currencies &&
                    <>
                      <strong>Moeda: </strong>
                      <span>
                        {country.currencies[key].name} ({country.currencies[key].symbol})
                        {index < array.length - 1? ', ' : ''}
                      </span>
                    </>
                  ))}
                </li>
              </ul>
            </div>
          </Content>:
          <></>
        }
      </Container>
    </>
  );
}
