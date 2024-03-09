import { AppRoutes } from "./route";
import { SearchProvider } from "./hooks/useSearch";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <SearchProvider>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <AppRoutes />
    </SearchProvider>
  );
}

export default App;
