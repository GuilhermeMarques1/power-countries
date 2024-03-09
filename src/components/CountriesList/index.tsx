/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import RestCountriesAPI from "../../services/RestCountriesAPI";
import { Loading } from "../Loading";

import { Container, Content, CountryContent, Title, Info } from "./styles";

import { ICountriesList } from "../../Types/ICountries";
import { IHistory } from "../../Types/IHIstory";

export function CountriesList() {
  const navigate = useNavigate();
  const { search } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<ICountriesList[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = 
        await RestCountriesAPI
              .get('/all?fields=name,flags,currencies,capital,region,languages,population,translations');
      
      const allCountries = res.data as ICountriesList[];
      setCountries(allCountries);
      setIsLoading(false);
    }

    if(isLoading) fetchCountries();
  }, []);

  const handleButtonClick = (country: ICountriesList) => {
    try {
      const newCountry: IHistory = {
        country: country,
        time: new Date(),
      };
      const historyString = localStorage.getItem("@power-countries:history");
      const history: IHistory[] = JSON.parse(historyString || '[]') as IHistory[];
      history.push(newCountry);      
      
      localStorage.setItem("@power-countries:history", JSON.stringify(history));
      navigate(`/country`, { state: { country: country } });
    } catch (error) {
      return;
    }
  }

  const filteredCountries = countries.filter((country) =>
    country.translations.por.common.toLowerCase().includes(search.toLowerCase())
  );

  return isLoading ? 
    <Loading /> :
    (
      <Container>
        <Content>
          {
            filteredCountries.map((country) => (
              <CountryContent 
                onClick={() => handleButtonClick(country)}
                key={country.name.official}
              >
                <img src={country.flags.svg} alt={country.flags.alt} />
                <div>
                  <Title>{country.translations.por.common.toLocaleUpperCase()}</Title>
                  <Info>{country.region}</Info>
                  <Info>{country.capital}</Info>
                </div>
              </CountryContent>
            ))
          }
        </Content>
      </Container>
    )
};
