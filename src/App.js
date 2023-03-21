import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import GlobalStyle from "./helpers/GlobalStyle";
import routes from "./routes/routes";

const router = createBrowserRouter(routes);
function App() {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
