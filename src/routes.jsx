import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao"
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import EstilosGlobais from "./componentes/EstilosGlobais";
import { VideosProvider } from "./context/VideosContext";
import { CategoriasProvider } from "./context/CategoriasContext";

function AppRoutes() {
    return (
      <BrowserRouter>
        <CategoriasProvider>
        <VideosProvider>
        <EstilosGlobais />
        <Routes>
              <Route path="/" element={<PaginaPadrao />}>
                <Route index element={<Home />} />
                <Route path="novovideo" element={<NovoVideo />} />
              </Route>
        </Routes>
        </VideosProvider>
        </CategoriasProvider>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;