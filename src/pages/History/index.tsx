import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { CSVLink } from "react-csv";

import { Container, Content, DownloadButton } from "./styles";
import { IHistory } from "../../Types/IHIstory";
import { ICountriesList } from "../../Types/ICountries";

export function History() {
  const navigate = useNavigate();
  const historyString = localStorage.getItem("@power-countries:history");
  const history: IHistory[] = JSON.parse(historyString || '[]') as IHistory[];

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

  const csvData = history.map((country) => {
    return [
      country.country.translations.por.common,
      country.country.region,
      country.country.capital,
      new Intl.DateTimeFormat('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date(country.time))
    ]
  });
  csvData.unshift(['Nome', 'Região', 'Capital', 'Data']);

  return (
    <>
      <Header />
      <CSVLink data={csvData} >
        <DownloadButton>
          Download do histórico
        </DownloadButton>
      </CSVLink>
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
                  <tr key={country.time.toString()} onClick={() => handleButtonClick(country.country)}>
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
