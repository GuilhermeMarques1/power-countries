/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestCountriesAPI from "../../services/RestCountriesAPI";

import { Container, Content, CountryContent, Title, Info } from "./styles";

import { ICountriesList } from "../../Types/ICountries";
import { IHistory } from "../../Types/IHIstory";

export function CountriesList() {
  const navigate = useNavigate();
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

  const handleButtonClick = (id: string) => {
    try {
      const newCountry: IHistory = {
        id: id,
        time: new Date(),
      };
      const historyString = localStorage.getItem("@power-countries:history");
      const history: IHistory[] = JSON.parse(historyString || '[]') as IHistory[];
      history.push(newCountry);      
      
      localStorage.setItem("@power-countries:history", JSON.stringify(history));
      navigate(`/country`, { state: { id: id } });
    } catch (error) {
      return;
    }
  }

  return (
    <Container>
      <Content>
        {
          countries.map((country) => (
            <CountryContent 
              onClick={() => handleButtonClick(country.name.official)}
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
  );
}
