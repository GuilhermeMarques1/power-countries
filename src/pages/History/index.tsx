import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

export function History() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <table>
            <thead>
              <tr>
                <th>País</th>
                <th>Região</th>
                <th>Capital</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>

            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
}
