import React from 'react';
// import ReactDOM from 'react-dom';

import styled from 'styled-components';

function FormModal({addOperations, closeModal}){

    const handleForm = (e) => {
        e.preventDefault();

        addOperations()
    }
    return (
    <Content>
        
        <Form>
            <CloseIcon className="fas fa-window-close" onClick={() => closeModal()}></CloseIcon>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button type="submit">Ingresar</button>
        </Form>
    </Content>
    // document.getElementById('modal')
    )
}

const Content = styled.div`
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, .7);
    z-index: 9999;
    
`;
const CloseIcon = styled.i`
    position:absolute;
    right: 0;
    cursor:pointer;
`
const Form = styled.form`
    width: 500px;
    height: 500px;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
`;

export default FormModal;