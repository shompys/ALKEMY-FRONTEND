import styled from 'styled-components';
import {tablet} from '../styled';

function ItemList({concept, amount, date, type, deleteOperations, openModal}){
    

    return (
        <Item >
            <ContentCenterFlex>
                <IconDollar className="fas fa-dollar-sign" type={type}></IconDollar>
                <Amount> {type ? `${amount?.toFixed(2)}` : `-${amount?.toFixed(2)}`}</Amount>
            </ContentCenterFlex>

            <Type type={type}>{type ? 'Ingreso' : 'Egreso'} </Type>

            <Labels>Fecha de alta: </Labels>

            <Date>{date}</Date>
            
            <Labels>Concepto: </Labels>
            <Concept>{concept}</Concept>
            
            <Edit onClick={() => openModal()}><IconEdit className="fas fa-edit"></IconEdit></Edit>
            <Delete onClick={deleteOperations}><IconDelete className="fas fa-trash-alt"></IconDelete></Delete>
        </Item>
    )
}
    const Item = styled.div`
        width:100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(20px, auto);
        gap: 1rem;
        background-color: #fff;
        box-shadow: 0 0 2px 1px #cfcfcf;
        border-radius: 5px;
        padding: 1rem;
    `;
    const ContentCenterFlex = styled.div`
        display:flex;
        align-items: center;
    `;

    const IconDollar = styled.i`
        padding-right: .5rem;
        font-size: 1.4em;
        color: ${({type}) => type ? '#4ba94b' : '#ff0400' };
        ${tablet}{
            
            font-size: 1.5em;
        }
    `; 
    const Amount = styled.span`
        font-size: .8em;
        font-weight:600;
        ${tablet}{
            font-size: .9em;
        }
        
        
    `;
    const Type = styled.span`
        
        font-size: .8em;
        justify-self:flex-end;
        align-self: center;
        padding: 5px 10px;
        border-radius: 20px;
        font-weight: bold;
        background-color: ${({type}) => type ? 'rgba(75, 169, 75, .2)' : 'rgba(255, 4, 0, .2)'};
        color: ${({type}) => type ? '#4ba94b' : '#ff0400'};
        
        ${tablet}{
            font-size: 1em;
        }
    `;

    
    const Labels = styled.label`
        font-size: .9rem;
    `;
    const Date = styled.span`
        font-size: .9rem;
    `;
    const Concept = styled.span`
        overflow: hidden;
        /* white-space: nowrap; */
        text-overflow:ellipsis;
        font-size: .9rem;
    `;
    const ButtonInterface = styled.button`
        height: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
    `;
    const IconInterface = styled.i`
        font-size: 1.5em;
    `;
    const Edit = styled(ButtonInterface)`
        background-color: rgb(4, 74, 197, .1);
    `;
    const Delete = styled(ButtonInterface)`
        background-color: rgba(255, 4, 0, .1);
    `;
    const IconEdit = styled(IconInterface)`
        color: #044AC5;
    `;
    const IconDelete = styled(IconInterface)`
        color: #ff0400;
    `;

export default ItemList;