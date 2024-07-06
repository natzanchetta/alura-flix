import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao"
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import EstilosGlobais from "./componentes/EstilosGlobais";

function AppRoutes() {
    return (
      <BrowserRouter>
        <EstilosGlobais />
        <Routes>
              <Route path="/" element={<PaginaPadrao />}>
                <Route index element={<Home />} />
                <Route path="novovideo" element={<NovoVideo />} />
              </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;