import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles";
import { IHistory } from "../../Types/IHIstory";
import { ICountriesList } from "../../Types/ICountries";

export function History() {
  const historyString = localStorage.getItem("@power-countries:history");
  const history: IHistory[] = JSON.parse(historyString || '[]') as IHistory[];

  console.log(history[0].time);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <table>
            <thead>
              <tr>
                <th>Bandeira</th>
                <th>País</th>
                <th>Região</th>
                <th>Capital</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {
                history.map((country) => (
                  <tr key={country.time.toString()}>
                    <td>
                      <img src={country.country.flags.svg} alt={country.country.flags.alt} />                  
                    </td>
                    <td>{country.country.translations.por.common}</td>
                    <td>{country.country.region}</td>
                    <td>{country.country.capital}</td>
                    <td>
                      {
                        new Intl.DateTimeFormat('pt-BR', { 
                          day: '2-digit', 
                          month: '2-digit', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit'
                        }).format(new Date(country.time))
                      }
                     </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
}
