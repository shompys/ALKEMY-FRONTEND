import React from 'react';
import styled from 'styled-components';
import Dashboard from '../layout/Dashboard';
// import Chart from '../layout/Chart';
import FormModal from '../layout/FormModal';
import ItemList from '../layout/ItemList';
import {formatUnixToDateWithHour} from '../libs/handleDate';


function Home() {
    
    const [operations, setOperations] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [counter, setCounter] = React.useState(0);

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

        const response = await fetch(urlApi)
        const data = await response.json()
        const format = data.map((value) => ({...value, date: formatUnixToDateWithHour(value.date)}) );
        
        setOperations(format);
    }

    const lastTen = (regs) => regs.slice(-10).map((value, index, arr) => arr[arr.length-1-index])
    
    React.useEffect(() => {
        getOperations();
    },[])

    React.useEffect(() => {
        const addOrSubstract = (acc, current) => {
            if(current.type) return acc + current.amount;
            return acc - current.amount
        }
        setCounter(operations.length);
        setTotal(operations.reduce(addOrSubstract,0));
        
    },[operations])

    return(<>
        <Content>
            
            <FormModal addOperations={addOperations}/>
            <Dashboard total={total} counter={counter} operations={operations}/>
            {/* <Chart operations={operations} /> */}
            {
                lastTen(operations).map((value) => <ItemList key={value.id_operation} {...value} deleteOperations={ () => deleteOperations(value.id_operation)}/>)
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
export default Home;