import styled from "styled-components"
import Categoria from "./Categoria"
import { CategoriasContext } from "../../context/CategoriasContext"
import { useContext, useState } from "react"
import { VideosContext } from "../../context/VideosContext"
import ModalEdicao from "../ModalEdicao"

const SecaoEstilizada = styled.section`
    background-color: #262626;
    padding: 20px 3.4vw 140px 3.4vw;
    display: flex;
    flex-direction: column;
    gap: 95px;
`

const Acervo = () => {
    const { categorias } = useContext(CategoriasContext);
    const { videos, deletarVideo } = useContext(VideosContext);

    const [videoSelecionado, setVideoSelecionado] = useState(null);

    if (!categorias || !videos) {
        return <div>Carregando...</div>;
    }

    return ( 
        <>
            <SecaoEstilizada>
                {categorias.map(categoria => 
                    <Categoria 
                        key={categoria.nome} 
                        nome={categoria.nome} 
                        cor={categoria.cor} 
                        videos={videos.filter(video => video.categoria === categoria.nome)}
                        videoSelecionado={setVideoSelecionado}
                        aoDeletar={deletarVideo}
                    />
                )}
            </SecaoEstilizada>
            {videoSelecionado && (
                <ModalEdicao 
                    videoParaEditar={videoSelecionado}
                    aoFechar={() => setVideoSelecionado(null)}
                />
            )}
        </>
    )
}

export default Acervo