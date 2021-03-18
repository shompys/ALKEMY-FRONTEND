import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: #6c757d;
        text-decoration: none;
        list-style-type: none;
        outline: none;
        
    }
    
    img{
        /* max-width: 100%; */
        /* height: auto; */
        display: block;
    }
    input, button{
        border: none;
        background: transparent;
        border:1px solid rgba(129, 109, 158, 0.2); 
    }
    input:focus, textarea:focus, button:focus{
        border: 1px solid #6c757d;
    }
    button{
        cursor: pointer;
    }
    textarea{
        resize: none;
        border:1px solid rgba(129, 109, 158, 0.2);
    }
`;

export const mobile = `@media screen and (max-width: 768px)`;
export const tablet = `@media screen and (min-width: 768px)`;
export const desktop = `@media screen and (min-width: 1024px)`;
export const tv = `@media screen and (min-width: 1400px)`; 





// export const Input = styled.input.attrs(props => ({
//     type: "password"

// }))`
//     border: none;
//     background: transparent;
//     outline: none;
// `;

