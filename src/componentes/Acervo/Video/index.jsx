import { useContext } from "react"
import styled from "styled-components"
import { CategoriasContext } from "../../../context/CategoriasContext"
import { VideosContext } from "../../../context/VideosContext"

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
    background-color: transparent;
`

const VideoRodape = styled.footer`
    background-color: #000;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
    border: 3px solid ${props => props.cor};
    box-shadow: 1px 1px 1px ${props => props.cor}, -1px -1px 1px ${props => props.cor};
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

const Video = ({ video, aoEdicaoSolicitada }) => {
    const { categorias } = useContext(CategoriasContext)
    const { deletarVideo } = useContext(VideosContext);
    const categoria = categorias.find(categoria => categoria.nome === video.categoria);

    const handleDeletarVideo = async () => {
        const confirmacao = confirm("Tem certeza que deseja excluir este item?");
            if (confirmacao) {
                try {
                const response = await fetch(`http://localhost:3000/videos/${video.id}`, {
                    method: "DELETE",
                    headers: {
                    "Content-Type": "application/json"
                    },
                });
                
                if (!response.ok) {
                    throw new Error("Erro ao deletar vídeo");
                }
            
                deletarVideo(video.id);
                } catch (error) {
                console.error("Erro ao deletar vídeo:", error);
                }
            }       
      };

    return (
        <VideoContainer id={`video-${video.id}`}>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
                <VideoImagem src={video.imagem} alt={video.titulo} cor={categoria.cor} />
            </a>
            <figcaption>
                <VideoRodape cor={categoria.cor}>
                    <Botao onClick={handleDeletarVideo}>
                        <img src="/icones/deletar.png" alt="Icone de deletar" />
                        DELETAR
                    </Botao>
                    <Botao onClick={() => aoEdicaoSolicitada(video)}>
                        <img src="/icones/editar.png" alt="Icone de editar" />
                        EDITAR
                    </Botao>
                </VideoRodape>
            </figcaption>
        </VideoContainer>
    )
}

export default Video