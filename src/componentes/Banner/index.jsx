import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { VideosContext } from "../../context/VideosContext";
import { CategoriasContext } from "../../context/CategoriasContext";

const FundoEstilizado = styled.section`
    height: 42rem;
    background-image: url(${props => props.imagem});
    background-color: rgba(0, 0, 0, 0.7);
    border: 4px solid ${props => props.cor};
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #F5F5F5;
`
const DivisaoEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15%;
    width: 44vw;
`

const ContainerTitulo = styled.div`
    width: 23vw;
    max-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.cor};
`

const TituloCategoriaEstilizado = styled.h3`
    font-family: RobotoBold;
    font-size: 3rem;
`

const TituloVideoEstilizado = styled.h1`
    font-size: 3rem;
    margin-bottom: 0;
`

const ParagrafoEstilizado = styled.p`
    font-family: RobotoLight;
    line-height: 1.25;
`

const VideoEstilizado = styled.video`
    border: 3px solid ${props => props.cor};
    box-shadow: inset 2px 2px 8px ${props => props.cor}, inset -2px -2px 8px ${props => props.cor};
    width: 100%;
    max-height: auto;
`


const Banner = () => {
        const { categorias } = useContext(CategoriasContext)
        const { videos } = useContext(VideosContext);
        const [indiceAtual, setIndiceAtual] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % videos.length);
          }, 10000);
      
          return () => clearInterval(interval);
        }, [videos]);
      
        if (!videos || videos.length === 0) {
          return <div>Carregando...</div>;
        }
      
        const videoAtual = videos[indiceAtual];
        const categoria = categorias.find(categoria => categoria.nome === videoAtual.categoria);
    
    return (
        <FundoEstilizado imagem={videoAtual.imagem} cor={categoria.cor}> 
           <DivisaoEstilizada>
            <ContainerTitulo cor={categoria.cor}>
                <TituloCategoriaEstilizado>{videoAtual.categoria}</TituloCategoriaEstilizado>
            </ContainerTitulo>
            <TituloVideoEstilizado>{videoAtual.titulo}</TituloVideoEstilizado>
            <ParagrafoEstilizado>{videoAtual.descricao}</ParagrafoEstilizado>
           </DivisaoEstilizada>
           <DivisaoEstilizada>
            <VideoEstilizado src={videoAtual.link} cor={categoria.cor} controls loop muted />
           </DivisaoEstilizada>
        </FundoEstilizado>
    )
}

export default Banner