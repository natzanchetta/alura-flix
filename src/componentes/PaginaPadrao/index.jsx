import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import EstilosGlobais from "../EstilosGlobais";
import Rodape from "../Rodape";

const PaginaPadrao = () => {
    return (
        <>
            <EstilosGlobais />
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )       
}

export default PaginaPadrao