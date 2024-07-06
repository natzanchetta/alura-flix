import styled from "styled-components"

const LogoEstilizada = styled.img`
    width: 170px;
    max-height: 40px;
`

const Logo = () => {
    return (
        <LogoEstilizada src="../../../public/Logo.png" alt="AluraFlix Logo"/>
    )
}

export default Logo