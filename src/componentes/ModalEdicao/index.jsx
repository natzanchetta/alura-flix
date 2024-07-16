import styled from "styled-components"
import Formulario from "../Formulario"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    width: 67.6vw;
    height: 71.25rem;
    color: #FFF;
    background-color: #03122F;
    border: 3px solid #6BD1FF;
    border-radius: 15px;
    display: flex;
    top: 100%;
    flex-direction: column;
    justify-content: center;
`

const BotaoFecharEstilizado = styled.button`
    cursor: pointer;
    width: 3.6vw;
    height: auto;
    background-color: #03122F;
    border: 0;
    img {
       width: 100%;
    }
`

const FormularioContainer = styled.div`
    width: 58.8%;
`

const ModalEdicao = ({ videoParaEditar, aoFechar }) => {
    
    return (
        <>
            <Overlay open={!!videoParaEditar} onClick={aoFechar} />
            <DialogEstilizado open={!!videoParaEditar}>
                <form method="dialog">
                    <BotaoFecharEstilizado onClick={aoFechar}>
                        <img src="/icones/fechar.png" alt="Icone de fechar" />
                    </BotaoFecharEstilizado>
                </form>
                <h1>EDITAR CARD:</h1>
                <FormularioContainer>
                    <Formulario videoParaEditar={videoParaEditar} aoFechar={aoFechar} />
                </FormularioContainer>
            </DialogEstilizado>
        </>
    )
}

export default ModalEdicao