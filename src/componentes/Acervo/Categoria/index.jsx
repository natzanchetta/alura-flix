import styled from "styled-components"
import Video from "../Video"

const ContainerEstilizado = styled.section`
    background-color: #262626;
`
const ContainerTitulo = styled.div`
    width: 432px;
    max-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${(props) => props.backgroundColor};
`

const TituloEstilizado = styled.h3`
    color: #F5F5F5;
    font-family: RobotoBold;
    font-size: 2rem;
`

const ContainerVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

const Categoria = ({ nome, cor, videos = [] }) => {   
    return (
        <ContainerEstilizado>
            <ContainerTitulo backgroundColor={cor}>
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
                        borderColor={cor}
                    />
                )}
            </ContainerVideos>
        </ContainerEstilizado>
    )
}

export default Categoria