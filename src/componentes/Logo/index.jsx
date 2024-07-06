import styled from "styled-components"

const LogoEstilizada = styled.img`
    width: 170px;
`

const Logo = () => {
    return (
        <LogoEstilizada src="../../../public/Logo.svg" alt="AluraFlix Logo"/>
    )
}

export default Logo