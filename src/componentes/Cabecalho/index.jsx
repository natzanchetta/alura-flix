import styled from "styled-components"
import Menu from "../Menu"
import Logo from "../Logo"

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #262626;
    height: 125px;
    align-items: center;
    padding: 0 50px 0 50px;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0 3px 8px #2271D1;
`

const Cabecalho = () => {
    return (
        <CabecalhoEstilizado>
            <Logo />
            <Menu />
        </CabecalhoEstilizado>
    )
}

export default Cabecalho