import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./helpers/GlobalStyle";
import MainPage from "./components/pages/MainPage";
import AuthPage from "./components/pages/AuthPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
