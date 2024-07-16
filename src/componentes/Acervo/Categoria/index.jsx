import styled from "styled-components"
import Video from "../Video"

const ContainerEstilizado = styled.section`
    background-color: #262626;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`
const ContainerTitulo = styled.div`
    width: 29vw;
    max-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${(props) => props.cor};
`

const TituloEstilizado = styled.h3`
    color: #F5F5F5;
    font-family: RobotoBold;
    font-size: 2rem;
`

const ContainerVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Categoria = ({ cor, nome, videos, videoSelecionado, aoDeletar }) => { 
        
    return (
        <ContainerEstilizado>
            <ContainerTitulo cor={cor}>
               <TituloEstilizado>{nome}</TituloEstilizado>
            </ContainerTitulo>
            <ContainerVideos>
                {videos.map(video => 
                    <Video 
                        key={video.id}
                        titulo={video.titulo}
                        categoria={video.categoria}
                        link={video.link}
                        video={video}
                        aoEdicaoSolicitada={videoSelecionado}
                        aoDeletar={aoDeletar}
                    />
                )}
            </ContainerVideos>
        </ContainerEstilizado>
    )
}

export default Categoria