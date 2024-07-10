import styled from "styled-components"

const LogoEstilizada = styled.img`
    width: 170px;
    max-height: 40px;
`

const Logo = () => {
    return (
        <LogoEstilizada src="/Logo.svg" alt="AluraFlix Logo"/>
    )
}

export default Logo