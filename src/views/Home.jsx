import React from 'react';
import styled from 'styled-components';
import Dashboard from '../layout/Dashboard';
import FormModal from '../layout/FormModal';
import ItemList from '../layout/ItemList';
import svg from '../assets/svg';
import {formatUnixToDateWithHour} from '../libs/handleDate';

function Home() {
    const [serverStatus, setServerStatus] = React.useState(false);
    const [operations, setOperations] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [counter, setCounter] = React.useState(0);
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [dataEditOperation, setDataEditOperation] = React.useState({});

    const addOperations = async (object) => {
        const {concept, amount, type} = object;

        const urlApi = `http://192.168.0.222:4000/api/operations`;
        const options = {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                concept,
                amount,
                type
            })
        }
        
        const response = await fetch(urlApi, options);
        const data = await response.json();

        getOperations()
        console.log(data);

    }
    const deleteOperations = async (id) => {
        
        const urlApi = `http://192.168.0.222:4000/api/operations/${id}`;
        const options = {method: 'delete'}
        await fetch(urlApi,options);

        const refreshOperations = operations.filter(({id_operation}) => id_operation !== id );
        
        setOperations(refreshOperations)
        
    }
    const getOperations = async () => {
        const urlApi = `http://192.168.0.222:4000/api/operations`;
        try{
            const response = await fetch(urlApi)
            const data = await response.json()
            
            const format = data?.map((value) => ({...value, date: formatUnixToDateWithHour(value.date)}) );
            setServerStatus(true);
            setOperations(format);
        }catch(e){
            console.log('problems with serve')
        }
        
    }
    const updateOperations = async (object) => {
        
        const {idOperation, concept, amount} = object;
        const urlApi = `http://192.168.0.222:4000/api/operations/${idOperation}`;
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                concept,
                amount
            })
        }
        
        await fetch(urlApi, options)
        getOperations()
        
    }
    const lastTen = (regs) => regs.slice(-10).map((value, index, arr) => arr[arr.length-1-index])
    
    React.useEffect(() => {
        
        setTimeout(() => {
            getOperations()
        },1000)
        
    },[])

    React.useEffect(() => {
        const addOrSubstract = (acc, current) => {
            if(current.type) return acc + current.amount;
            return acc - current.amount
        }
        setCounter(operations?.length);
        setTotal(operations?.reduce(addOrSubstract,0));
        
    },[operations])

    const openModal = () => {
        setIsOpenModal(true);
        setIsEdit(false);
    }
    const openModalEdit = (operation) => {
        const {id_operation, concept, amount} = operation
        setDataEditOperation({id_operation, concept, amount});
        setIsOpenModal(true);
        setIsEdit(true);
    }
    
    if(!serverStatus){
        return(<Img src={svg.loading} alt="loading"/>)
    }
    return(<>
        

        <Content >
            {
                isOpenModal && <FormModal 
                isEdit={isEdit}
                dataEditOperation={dataEditOperation}
                addOperations={addOperations} 
                updateOperations={updateOperations} 
                closeModal={() => setIsOpenModal(false)}/>
            }

            <Dashboard total={total} counter={counter} operations={operations} openModal={openModal}/>

            {
                lastTen(operations).map((value) => 
                <ItemList key={value.id_operation} {...value} 
                deleteOperations={ () => deleteOperations(value.id_operation)} 
                openModal={() => openModalEdit(value)} />)
            }
        </Content>

    </>)
        
}
const Content = styled.div`
    width:100%;
    padding: 1rem;
    display:grid;
    gap: 1rem;
    
`;
const Img = styled.img`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);

`
export default Home;