import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { VideosContext } from "../../context/VideosContext";
import { CategoriasContext } from "../../context/CategoriasContext";

const FundoEstilizado = styled.section`
    position: relative;
    height: 42rem;
    background-color: #000;
    border-bottom: 4px solid ${props => props.cor};
    border-left: 4px solid ${props => props.cor};
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #F5F5F5;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.imagem});
        background-size: cover;
        background-position: center;
        opacity: 0.4;
        z-index: 0;
    }
`
const DivisaoEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15%;
    width: 44vw;
    z-index: 1;
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

const ThumbnailEstilizada = styled.img`
    border: 3px solid ${props => props.cor};
    box-shadow: inset 2px 2px 8px ${props => props.cor}, inset -2px -2px 8px ${props => props.cor};
    background-color: transparent;
    width: 100%;
    max-height: auto;
    border-radius: 4px;
`

const Banner = () => {
  const { categorias } = useContext(CategoriasContext);
  const { videos } = useContext(VideosContext);

  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos]);

  if (!videos || videos.length === 0 || !categorias || categorias.length === 0) {
    return <div>Carregando...</div>;
  }

  const videoAtual = videos[indiceAtual];
  if (!videoAtual) {
    return <div>Carregando...</div>;
  }

  const categoria = categorias.find(categoria => categoria.nome === videoAtual.categoria);
  if (!categoria) {
    return <div>Carregando...</div>;
  }

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
        <a href={videoAtual.link} target="_blank" rel="noopener noreferrer">
          <ThumbnailEstilizada src={videoAtual.imagem} alt={videoAtual.titulo} cor={categoria.cor} />
        </a>
      </DivisaoEstilizada>
    </FundoEstilizado>
  );
}

export default Banner;