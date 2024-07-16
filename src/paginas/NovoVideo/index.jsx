import styled from "styled-components"
import Formulario from "../../componentes/Formulario"

const SecaoEstilizada = styled.section`
    background-color: #262626;
    color: #FFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerTitulosEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 54.3%;
`

const TituloPrincipal = styled.h1`
    font-size: 3.75rem;
    font-family: RobotoBlack;
    margin: 50px 0 0 0;
`

const TituloSecundario = styled.p`
    font-size: 1.25rem;
`

const DivisaoEstilizada = styled.div`
    width: 81.3%;
    flex-wrap: wrap;
    margin-bottom: 4.4rem;
`

const TituloTerciario = styled.h3`
    font-family: SourceSansProSemibold;
    font-size: 2.25rem;
    margin-bottom: 4rem;
`

const NovoVideo = () => {
    return (
        <>
            <SecaoEstilizada>
                <ContainerTitulosEstilizado>
                    <TituloPrincipal>NOVO VÍDEO</TituloPrincipal>
                    <TituloSecundario>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</TituloSecundario>
                </ContainerTitulosEstilizado>
                <DivisaoEstilizada>
                    <TituloTerciario>Criar Card</TituloTerciario>
                    <Formulario context="page" />
                </DivisaoEstilizada>
            </SecaoEstilizada>
        </>
    )       
}

export default NovoVideo