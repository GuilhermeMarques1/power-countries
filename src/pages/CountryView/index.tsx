import { useLocation } from "react-router-dom";
import { ICountriesList } from "../../Types/ICountries";
import { BackButton } from "../../components/BackButton";

import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export function CountryView() {
  const { state } = useLocation();
  const country: ICountriesList = state && state.country as ICountriesList;

  return (
   <> 
      <Header />
      <BackButton />
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
                  country.capital.length ? 
                  <li><strong>Capital:</strong> {country.capital}</li> :
                  <></>
                }
                <li><strong>População:</strong> {country.population}</li>
                <li>
                  {Object.keys(country.languages).length > 0 && <strong>Línguas: </strong>}
                  {Object.keys(country.languages ?? {}).map((key, index, array) => (
                    country.languages && 
                      <span>
                        {country.languages[key]}
                        {index < array.length - 1 ? ', ' : ''}
                      </span>
                  ))}
                </li>
                <li>
                  {Object.keys(country.currencies).length > 0 && (<strong>Moeda: </strong>)} 
                  {Object.keys(country.currencies).map((key, index, array) => (
                    Object.keys(country.currencies).length > 0 &&
                      <span>
                        {country.currencies[key].name} ({country.currencies[key].symbol})
                        {index < array.length - 1? ', ' : ''}
                      </span>
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
