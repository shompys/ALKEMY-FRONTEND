import React from 'react';
import styled from 'styled-components';
import Chart from '../layout/Chart';
import ItemList from '../layout/ItemList';


function Home() {
    const [operations, setOperations] = React.useState([]);
    
    const getOperations = async () => {
        const urlApi = `http://localhost:4000/api/operations`;
        const response = await fetch(urlApi)
        const data = await response.json()
        setOperations(data)
    }
    React.useEffect(() => {
        getOperations();
    },[])


    return(<>
        <Chart operations={operations} />
        {
            operations.map((value) => <ItemList key={value.id_operation} {...value}/>)
        }
        <ItemList />
    </>)
}
export default Home;