import React from 'react';
import styled from 'styled-components';
import Chart from '../layout/Chart';
import FormModal from '../layout/FormModal';
import ItemList from '../layout/ItemList';
import {formatUnixToDateWithHour} from '../libs/handleDate';


function Home() {
    const [operations, setOperations] = React.useState([]);
    const [lastTenOperations, setLastTenOperations] = React.useState([]);

    const deleteOperations = async (id) => {
        
        const urlApi = `http://192.168.0.222:4000/api/operations/${id}`
        const options = {method: 'delete'}
        const response = await fetch(urlApi,options);
        const data = await response.json();
        console.log(data);

        const refreshOperations = operations.filter(({id_operation}) => id_operation !== id );

        setOperations(refreshOperations);
        
    }
    
    const getOperations = async () => {
        const urlApi = `http://192.168.0.222:4000/api/operations`;
        const response = await fetch(urlApi)
        const data = await response.json()
        const format = data.map((value) => ({...value, date: formatUnixToDateWithHour(value.date)}) );
        setOperations(format);
        
        const lastTen = format.slice(operations.length-10);
        const lastIsFirst = lastTen.map((v,i,array) => array[array.length-1-i]);
        setLastTenOperations(lastIsFirst);
    }
    React.useEffect(() => {
        getOperations();
    },[])


    return(<>
        {/* <Chart operations={operations} /> */}
        <FormModal/>
        <button></button>
        <Content>
            {
                lastTenOperations.map((value) => <ItemList key={value.id_operation} {...value} deleteOperations={ () => deleteOperations(value.id_operation)}/>)
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