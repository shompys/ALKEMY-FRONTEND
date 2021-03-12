import styled from 'styled-components';
import {mobile, tablet, desktop, tv} from '../styled';

const Item = styled.div`
    ${mobile}{
        width:100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))

    }
    
`;

function ItemList({concept, amount, date, type}){
    return (
        <Item >
            <span>{concept}</span>
            <span>{amount}</span>
            <span>{date}</span>
            <span>{type}</span>
        </Item>

        
    )
}
export default ItemList;