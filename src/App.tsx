import { AppRoutes } from "./route";
import { SearchProvider } from "./hooks/useSearch";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <SearchProvider>
      <GlobalStyle />
      <AppRoutes />
    </SearchProvider>
  );
}

export default App;
