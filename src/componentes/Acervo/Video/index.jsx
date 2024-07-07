import styled from "styled-components"

const VideoContainer = styled.figure`
    width: 432px;
    margin: 0;
    box-sizing: border-box;
`

const VideoImagem = styled.img`
    max-width: 100%;
    height: 260px;
`

const Rodape = styled.footer`
    background-color: #000;
    display: flex;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
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
    return (
        <VideoContainer id={`video-${video.id}`}>
            <VideoImagem src={video.imagem} alt={video.titulo} />
            <figcaption>
                <Rodape>
                    <Botao>
                        <img src="/icones/deletar.png" alt="Icone de deletar" />
                        DELETAR
                    </Botao>
                    <Botao>
                        <img src="/icones/editar.png" alt="Icone de editar" />
                        EDITAR
                    </Botao>
                </Rodape>
            </figcaption>
        </VideoContainer>
    )
}

export default Video