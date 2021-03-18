import React from 'react';
import styled from 'styled-components';
import {Line} from 'react-chartjs-2';
import {formatUnixToDateWithHour} from '../libs/handleDate';

function Charts({operations}){
    
    const allDate = operations.map(v => ({date: v.date, amount: v.amount, type: v.type}));

    const today = allDate.filter(v => v.date.substring(0,10) === formatUnixToDateWithHour(new Date()).substring(0,10));
    const todayOnlyHours = today.map(v => v.date.substring(11));

    
    const typeSum = today.filter( v => v.type === 1);
    const typeSub = today.filter( v => v.type === 0);
    const sumAmount = typeSum.map(v => v.amount);
    const subAmount = typeSub.map(v => v.amount);


    
    console.log(sumAmount)
    return (
        <Content>
            <Line
                data={{
                    labels: todayOnlyHours,
                    datasets: [{
                        label: 'Mi dinero',
                        fill: false,
                        data: [sumAmount, 0, subAmount],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 2
                    }]
                }}
            />
        </Content>
    )
}
const Content = styled.div`
   grid-column: 1/4;
`;

export default Charts;