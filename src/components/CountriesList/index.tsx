/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestCountriesAPI from "../../services/RestCountriesAPI";

import { Container, Content, CountryContent, Title, Info } from "./styles";

import { ICountriesList } from "../../Types/ICountries";

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

  return (
    <Container>
      <Content>
        {
          countries.map((country) => (
            <CountryContent 
              onClick={() => navigate('/country')}
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
