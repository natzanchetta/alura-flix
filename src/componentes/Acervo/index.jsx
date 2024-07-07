import styled from "styled-components"
import Categoria from "./Categoria"
import videos from "/videos.json"

const SecaoEstilizada = styled.section`
    background-color: #262626;
    padding: 20px 50px 160px 50px;
    display: flex;
    flex-direction: column;
    gap: 95px;
`

const Acervo = () => {
    const categorias = [
        {
          nome: 'FRONT END',
          cor: '#6BD1FF'
        },
        {
          nome: 'BACK END',
          cor: '#00C86F'
        },
        {
          nome: 'MOBILE',
          cor: '#FFBA05'
        }
    ]

    const videosDoAcervo = [...videos]

    return ( 
        <SecaoEstilizada>
            {categorias.map(categoria => 
                <Categoria 
                    key={categoria.nome} 
                    nome={categoria.nome} 
                    cor={categoria.cor} 
                    videos={videosDoAcervo}
                />
            )}
        </SecaoEstilizada>
    )
}

export default Acervo