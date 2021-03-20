import styled from 'styled-components';
import {miniMobile} from '../styled';
// import Charts from './Chart';

function Dashboard({total, counter, operations, openModal}){
    return(
        <Content>
            <ContentFaceIcon>
                {
                    total === 0 ? <FaceIcon className="far fa-meh" total={total}></FaceIcon> 
                    : total > 0 ? <FaceIcon className="far fa-smile" total={total}></FaceIcon> 
                    : <FaceIcon className="far fa-frown" total={total}></FaceIcon>
                }
            </ContentFaceIcon>

            <ContentData>
                <Label>Disponible </Label>
                
                <Span>$ {total?.toFixed(2)}</Span>
    
                <Label>{counter} registros totales</Label>
            </ContentData>

            <Button onClick={() => openModal()}>Ingresar Registro</Button>
            {/* <Charts operations={operations}/> */}
            
        </Content>
    )

}

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px,1fr));
    column-gap: 1rem;
    row-gap: 2rem;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #cfcfcf;
    border-radius: 5px;
    
`;
const ContentFaceIcon = styled.div`
    /* border-radius: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 3px .5px #d0d3d3;
`;

const FaceIcon = styled.i`
    
    font-size: 4em;
    color: ${({total}) => total === 0 ? '#6c757d' : total > 0 ? '#4ba94b' : '#ff0400'};
    
`
const ContentData = styled.div`
    display: grid;
    gap: .5rem;
   
`;

const Label = styled.label`
    font-size: .8em;
    
`;

const Span = styled.span`
    ${miniMobile}{
    font-size: 1.3em;
    }
    font-size: 1.5em;
    font-weight: 600;
    width: 220px;
`;
const Button = styled.button`
    grid-column: 1/-1;
    font-weight: 600;
    color: #044AC5;
    background-color: rgba(4, 74, 197, .1);
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export default Dashboard;