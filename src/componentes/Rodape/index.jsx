import styled from "styled-components"
import Logo from "../Logo"

const RodapeEstilizado = styled.footer`
    height: 125px;
    background-color: #000;
    display: flex;
    justify-content: center;
    border-top: 4px solid #2271D1;
    box-shadow: 3px 0 8px #2271D1;
    align-items: center;
`

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <Logo />
        </RodapeEstilizado>
    )
}

export default Rodape