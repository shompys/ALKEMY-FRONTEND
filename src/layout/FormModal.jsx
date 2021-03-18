import React from 'react';
import styled from 'styled-components';

function FormModal({addOperations}){

    const handleForm = (e) => {
        e.preventDefault();

        addOperations()
    }
    return(
    <Content>
        <form>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </Content>
    )
}

const Content = styled.div`
    /* position: absolute;
    background-color: rgba(0,0,0, .1);
    width: 100%;
    height:100vh; */
`;

export default FormModal;