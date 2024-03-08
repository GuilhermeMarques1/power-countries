import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { CountryView } from "./pages/CountryView";
import { History } from "./pages/History";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/country" element={<CountryView />} />
      </Routes>
    </BrowserRouter>
  );
}
