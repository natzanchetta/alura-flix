import { useContext } from "react"
import styled from "styled-components"
import { CategoriasContext } from "../../../context/CategoriasContext"

const VideoContainer = styled.figure`
    width: 29vw;
    margin: 0;
    box-sizing: border-box;
`

const VideoImagem = styled.img`
    width: 100%;
    height: 260px;
    border: 3px solid ${props => props.cor};
    border-radius: 7px 7px 0 0;
    box-shadow: inset 2px 2px 8px ${props => props.cor}, inset -2px -2px 8px ${props => props.cor};
`

const VideoRodape = styled.footer`
    background-color: #000;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
    border: 3px solid ${props => props.cor};
    box-shadow: 2px 2px 2px ${props => props.cor}, -2px -2px 2px ${props => props.cor};
`

const Botao = styled.button`
    background-color: #000;
    border: none;
    color: #FFF;
    cursor: pointer;
    display: flex;
    gap: 15px;
    align-items: center;
    height: 60px;
`

const Video = ({ video }) => {
    const { categorias } = useContext(CategoriasContext)
    const categoria = categorias.find(categoria => categoria.nome === video.categoria);

    return (
        <VideoContainer id={`video-${video.id}`}>
            <VideoImagem src={video.imagem} alt={video.titulo} cor={categoria.cor} />
            <figcaption>
                <VideoRodape cor={categoria.cor}>
                    <Botao>
                        <img src="/icones/deletar.png" alt="Icone de deletar" />
                        DELETAR
                    </Botao>
                    <Botao>
                        <img src="/icones/editar.png" alt="Icone de editar" />
                        EDITAR
                    </Botao>
                </VideoRodape>
            </figcaption>
        </VideoContainer>
    )
}

export default Video