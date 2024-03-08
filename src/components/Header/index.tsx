import { useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar";

import logoImg from '../../assets/logo.svg';
import { Container, Content, Title, Logo, History } from './styles';

export function Header() {
  const navigate = useNavigate();

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
            <button onClick={() => navigate('history')}>
              Histórico
            </button>
          </History>
        </div>
      </Content>
    </Container>
  )
}
