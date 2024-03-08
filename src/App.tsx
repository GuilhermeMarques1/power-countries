import { Header } from "./components/Header"
import { CountriesList } from "./components/CountriesList";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CountriesList />
    </>
  );
}

export default App;
