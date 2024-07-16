import styled from "styled-components"
import Formulario from "../Formulario"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
`

const DialogEstilizado = styled.dialog`
    width: 67.6vw;
    height: 71.25rem;
    color: #FFF;
    background-color: #03122F;
    border: 3px solid #6BD1FF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    top: 100%;
    z-index: 2;
`

const BotaoFecharEstilizado = styled.button`
    cursor: pointer;
    width: 4.5vw;
    height: auto;
    background-color: #03122F;
    border: 0;
    align-self: flex-end;
    img {
       width: 100%;
    }
`

const TituloEstilizado = styled.h1`
    color: #2271D1;
    font-family: RobotoBlack;
    font-size: 3.75rem;
    align-self: center;
`

const FormularioContainer = styled.div`
    width: 58.8%;
    align-self: center;
`

const ModalEdicao = ({ videoParaEditar, aoFechar }) => {
    
    return (
        <>
            <Overlay open={!!videoParaEditar} onClick={aoFechar} />
            <DialogEstilizado open={!!videoParaEditar}>
                    <BotaoFecharEstilizado onClick={aoFechar}>
                        <img src="/icones/fechar.png" alt="Icone de fechar" />
                    </BotaoFecharEstilizado>
                <TituloEstilizado>EDITAR CARD:</TituloEstilizado>
                <FormularioContainer>
                    <Formulario videoParaEditar={videoParaEditar} aoFechar={aoFechar} context="modal" />
                </FormularioContainer>
            </DialogEstilizado>
        </>
    )
}

export default ModalEdicao