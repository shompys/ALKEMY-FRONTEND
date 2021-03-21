import React from 'react';
import styled from 'styled-components';
import {tablet} from '../styled'
import {validateAmount, validateConcept, validateType} from '../libs/fieldValidator';

function FormModal({addOperations, closeModal, updateOperations, isEdit, dataEditOperation}){
    
    const [entry, setEntry] = React.useState({});
    const [error, setError] = React.useState({});
    const handleOnChange = e => {
        
        e.target.name === 'concept' && setError({...error, [e.target.name]: validateConcept(e.target.value)});
        e.target.name === 'amount' && setError({...error, [e.target.name]: validateAmount(e.target.value)});
        e.target.name === 'type' && setError({...error, [e.target.name]: validateType(e.target.value)});

        setEntry(
            {...entry,
            [e.target.name] : e.target.value
        })
    }
    const handleFormEdit = (e) => {
        e.preventDefault();

        if(error?.concept === '' && error?.amount === ''){
            updateOperations({...entry, idOperation: dataEditOperation.id_operation})
            e.target.reset();
            setEntry({});
            closeModal();
            return;
        }

    }
    const handleForm = (e) => {
        e.preventDefault();
        
        if(error?.concept === '' && error?.amount === '' && error?.type === ''){
            addOperations(entry)
            e.target.reset();
            setEntry({});
            closeModal();
            return;
        }
        
        
    }
    const placeholderEffect = e => {
        const labelSt = e.target.parentElement.style;
        const spanSt = e.target.previousElementSibling.style;

        labelSt.boxShadow=" 0px 0px 2px 2px rgba(4, 74, 197, .1)";
        spanSt.color= 'rgba(4, 74, 197, 1)'
        spanSt.top='-9px';
        spanSt.left='3px';
        spanSt.fontSize='.8em';
        spanSt.backgroundColor='#fff';
        spanSt.padding= '0 5px';
        spanSt.zIndex= '0';
        labelSt.transition = 'all .5s ease';
        spanSt.transition= 'all .5s ease';
    }

    const handleErrorAndPlaceholder = e => {
        if(e.target.value.trim().length === 0){

            e.target.value = e.target.value.trim();
            //evitamos que en el estado me deje espacios en blanco
            setEntry({ ...entry, [e.target.name] : e.target.value });

            const labelSt = e.target.parentElement.style;
            const spanSt = e.target.previousElementSibling.style;
            labelSt.boxShadow="none";
            spanSt.color='#A2A2A2';
            spanSt.top='15px';
            spanSt.left='15px';
            spanSt.fontSize='.9em';
            spanSt.backgroundColor= 'transparent';
            spanSt.padding= '0 0';
            labelSt.transition = 'all .5s ease';
            spanSt.transition= "all .5s ease";
        }

        e.target.name === 'concept' && setError({...error, [e.target.name]: validateConcept(e.target.value)});
        e.target.name === 'amount' && setError({...error, [e.target.name]: validateAmount(e.target.value)});
        e.target.name === 'type' && setError({...error, [e.target.name]: validateType(e.target.value)});
    }
    
    return(
    <Content >
        
        <Form onSubmit={ isEdit ? handleFormEdit : handleForm }>
            
            <CloseIcon className="fas fa-window-close" onClick={() => closeModal()}></CloseIcon>
            
            <ContentPosition>
                <Label >
                    <Span >Concepto</Span>
                    
                    <Input type="text" name="concept" autoComplete="off"
                    onChange={handleOnChange}
                    onFocus={placeholderEffect} 
                    onBlur={handleErrorAndPlaceholder}/>
                         
                </Label>
                {
                    error.concept === undefined ? undefined 
                    : !error.concept ? <OkIcon className="far fa-check-circle"></OkIcon>
                    : <ErrorIcon className="far fa-times-circle"></ErrorIcon>
                }
                <Error>{error?.concept}</Error>
            </ContentPosition>

            <ContentPosition>
                <Label>
                    <Span>Cantidad</Span>

                    <Input type="text" name="amount" autoComplete="off"
                    onChange={handleOnChange}
                    onFocus={placeholderEffect} 
                    onBlur={handleErrorAndPlaceholder}/>
                        
                </Label>

                {
                    error.amount === undefined ? undefined 
                    : !error.amount ? <OkIcon className="far fa-check-circle"></OkIcon>
                    : <ErrorIcon className="far fa-times-circle"></ErrorIcon>
                }

                <Error>{error?.amount}</Error>
            </ContentPosition>

            {
                !isEdit && (
                <ContentPosition>
                    
                    <LabelSelect >
                        <SpanType htmlFor="type">Seleccione el tipo de entrada</SpanType>
                        <Select name="type" id="type" autoComplete="off"
                                onChange={handleOnChange}
                                onFocus={placeholderEffect}
                                onBlur={handleErrorAndPlaceholder}>
                            <option value=""></option>
                            <option value="1">Ingresos</option>
                            <option value="0">Egresos</option>
                        </Select>
                    </LabelSelect>

                    <Error>{error?.type}</Error>
                </ContentPosition>
                )
            }

            {   
                isEdit ? (error?.concept === '' && error?.amount === '') 
                ? <Button type="submit">Editar Registro</Button> 
                : <Button type="submit">Completa los campos</Button> 
                : (error?.concept === '' && error?.amount === '' && error?.type === '')
                ? <Button type="submit">Cargar Registro</Button> 
                : <Button type="submit">Completa los campos</Button>
            }
        </Form>
    </Content>
    
    )
}

const Content = styled.div`
    display: grid;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, .7);
    z-index: 5000;
    
`;

const Form = styled.form`
    box-shadow: 0 0 2px 1px #acaaaa;
    border-radius: 10px;
    padding: 5rem 1rem;
    display: grid;
    justify-items: center;
    gap: 2rem;
    width: 90%;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 6000;
    
    ${tablet}{
        padding: 4rem 2rem;
        width: 350px;
    }
`;

//----

//---

const CloseIcon = styled.i`
    
    position:absolute;
    font-size: 1.5em;
    top: 10;
    right: 10px;
    cursor:pointer;
`
const ContentPosition = styled.div`
    position: relative;
`
const OkIcon = styled.i`
    position: absolute;
    color: #4ba94b;
    font-size: 1.3em;
    right: 10px;
    top: 30%;
`
const ErrorIcon = styled.i`
    position: absolute;
    color: #ff0400;
    font-size: 1.3em;
    right: 10px;
    top: 30%;
`
const Error = styled.p`
    color: #ff0400;
    position: absolute;
    font-size: .8em;
    left: 5px;
`
const Label = styled.label`
    
    display:block;
    position:relative;
    border: 1px solid rgba(4, 74, 197, .3);
    width: 18rem;
    border-radius: 0.2rem;
    
`;

const Span = styled.span`
    position: absolute;
    cursor:text;
    top: 15px;
    left: 15px;
    font-size: .9rem;
`;
const Input = styled.input`
    display: block;
    border: none;
    width: 100%;
    padding: 15px;
    outline: none;
`;

const SpanType = styled(Span)`
    z-index: -5000;
    cursor: pointer;
`
const LabelSelect = styled(Label)`
    &:after{
        content: '';
        border: 5px solid transparent;
        border-top-color: rgba(4, 74, 197, .5);
        display: inline-block;
        position: absolute;
        right: 20px;
        top: 45%;
        cursor: pointer;
        z-index: -5000;
    }
`
const Select = styled.select`
    display: block;
    border: none;
    width: 100%;
    padding: 15px;
    cursor: pointer;
    appearance: none;
    background-color: rgba(255,255,255,0);

`
const Button = styled.button`
    grid-column: 1/-1;
    font-weight: 600;
    color: #044AC5;
    background-color: rgb(4, 74, 197, .1);
    width: 18rem;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
`;
// export const Input = styled.input.attrs(props => ({
//     type: "password"

// }))`
//     border: none;
//     background: transparent;
//     outline: none;
// `;
export default FormModal;