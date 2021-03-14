import React from 'react';
import {Line} from 'react-chartjs-2';

function Charts(props){
    
    // const [data, setData] = React.useState(props);

    // console.log(amount)
    return (
        <Line
            data={{
                labels: ['Ingresos', 'Egresos'],
                datasets: [{
                    label: '# of Votes',
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(46, 206, 40, .8)',
                        'rgba(202, 18, 18, 0.7)'
                    ],
                    borderColor: [
                        'rgba(46, 206, 40, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            }}
            
        />
    )
}
export default Charts;