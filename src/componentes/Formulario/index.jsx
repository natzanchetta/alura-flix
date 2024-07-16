import { useState, useContext, useEffect } from 'react';
import { VideosContext } from '../../context/VideosContext';
import { CategoriasContext } from '../../context/CategoriasContext';
import styled, { css } from 'styled-components';

const FormularioEstilizado = styled.form`
    display: flex;
    flex-direction: column;
    gap: 43px;
    font-family: SourceSansProSemibold;
    font-size: 1.25rem;
    width: 100%;
`

const CampoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 108px;
    gap: 1rem;
    input,
    textarea,
    select {
        border: 2px solid;
        border-radius: 10px;
        height: 3.8rem;
        background-color: transparent;
        resize: none;
        color: #FFF;
        padding-left: 7px;
        option {
          background-color: #333;
          color: #FFF;
        }
    }
`
const BotoesContainer = styled.div`
    width: 100%;
    ${({ context }) => context === 'modal' && css`
        display: flex;
        justify-content: space-between;
    `}
    ${({ context }) => context === 'page' && css`
        display: flex;    
        gap: 30px;
    `}
`

const BotaoEstilizado = styled.button`
    width: 180px;
    height: 54px;
    border: 2px solid ${({ cor }) => cor || '#FFF'};
    border-radius: 15px;
    font-family: SourceSansProBlack;
    color: #FFF;
    background-color: transparent;
    cursor: pointer;
    ${({ context }) => context === 'modal' && css`
        box-shadow: inset 2px 2px 8px #2271D1, inset -2px -2px 8px #2271D1;
        color: #2271D1;
        background-color: #000;
    `}
`

const Formulario = ({ videoParaEditar, aoFechar, context = 'page' }) => {
  const { videos, setVideos } = useContext(VideosContext);
  const { categorias } = useContext(CategoriasContext);
  
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState(categorias[0]?.nome || '');
  const [imagem, setImagem] = useState('');
  const [link, setLink] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (videoParaEditar) {
      setTitulo(videoParaEditar.titulo);
      setCategoria(videoParaEditar.categoria);
      setImagem(videoParaEditar.imagem);
      setLink(videoParaEditar.link);
      setDescricao(videoParaEditar.descricao);
    } else {
      if (categorias.length > 0) {
        setCategoria(categorias[0].nome);
      }
    }
  }, [videoParaEditar, categorias]);

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = extractVideoId(link);

    const novoVideo = {  
      titulo, 
      categoria, 
      imagem, 
      link, 
      descricao,
      id 
    };

    if (videoParaEditar) {
      try {
        if (videoParaEditar.link !== link) {
          const videosAtualizados = videos.filter(video => video.id !== videoParaEditar.id);

          const response = await fetch('http://localhost:3000/videos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoVideo)
          });

          if (!response.ok) {
            throw new Error('Erro ao adicionar vídeo');
          }

          const videoAdicionado = await response.json();
          setVideos([...videosAtualizados, videoAdicionado]);

          alert('Vídeo adicionado com sucesso!');
        } else {
          const response = await fetch(`http://localhost:3000/videos/${videoParaEditar.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoVideo)
          });

          if (!response.ok) {
            throw new Error('Erro ao atualizar vídeo');
          }

          const videoAtualizado = await response.json();
          const videosAtualizados = videos.map(video =>
            video.id === videoParaEditar.id ? videoAtualizado : video
          );
          setVideos(videosAtualizados);

          alert('Vídeo atualizado com sucesso!');
        }

        aoFechar();
      } catch (error) {
        console.error('Erro ao salvar vídeo:', error);
      }
    } else {
      try {
        const response = await fetch('http://localhost:3000/videos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novoVideo)
        });

        if (!response.ok) {
          throw new Error('Erro ao adicionar vídeo');
        }

        const videoAdicionado = await response.json();
        setVideos([...videos, videoAdicionado]);

        alert('Vídeo adicionado com sucesso!');
      } catch (error) {
        console.error('Erro ao adicionar vídeo:', error);
      }

      setTitulo('');
      setCategoria(categorias[0]?.nome || '');
      setImagem('');
      setLink('');
      setDescricao('');
    }
  };

  const limparCampos = () => {
    setTitulo('');
    setCategoria('');
    setImagem('');
    setLink('');
    setDescricao('');
  };

    return (
        <FormularioEstilizado onSubmit={handleSubmit} context={context}>
            <CampoContainer>
                <label>Título</label>
                <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder='insira o título'
                required
                />
            </CampoContainer>
            <CampoContainer>
                <label>Categoria</label>
                <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                placeholder='selecione uma categoria'
                required
                >
                {categorias.map(categoria => (
                    <option key={categoria.nome} value={categoria.nome}>{categoria.nome}</option>
                ))}
                </select>
            </CampoContainer>
            <CampoContainer>
                <label>Imagem</label>
                <input
                type="url"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                placeholder='insira o link da imagem'
                required
                />
            </CampoContainer>
            <CampoContainer>
                <label>Vídeo</label>
                <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder='insira o link do vídeo'
                required
                />
            </CampoContainer>
            <CampoContainer>
                <label>Descrição</label>
                <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder='sobre o que é esse vídeo?'
                required
                />
            </CampoContainer>
            <BotoesContainer context={context}>
                <BotaoEstilizado type="submit" cor="#2271D1" context={context}>{videoParaEditar ? 'EDITAR' : 'ADICIONAR'} </BotaoEstilizado>
                <BotaoEstilizado type='reset' cor="#FFF" onClick={limparCampos}>LIMPAR</BotaoEstilizado>
            </BotoesContainer>
        </FormularioEstilizado>
    )
}

export default Formulario