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