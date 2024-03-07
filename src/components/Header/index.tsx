import { SearchBar } from "../SearchBar";

import logoImg from '../../assets/logo.svg';
import { Container, Content, Title, Logo, History } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="power-countries-logo" />
          <Title>
            <h1>Power<span>.C</span>ountries</h1>
          </Title>
        </Logo>

        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchBar />
          <History>
            <p>Histórico</p>
          </History>
        </div>
      </Content>
    </Container>
  )
}
