import React from 'react';
import {Line} from 'react-chartjs-2';

function Charts(props){
    
    const [data, setData] = React.useState(props);

    // console.log(amount)
    return (
        <Line 
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [],
                    backgroundColor: [
                        'rgba(118, 140, 238, 0.2)',
                        'rgba(15, 91, 141, 0.2)',
                        'rgba(202, 161, 58, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 0, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 3
                }]
            }}
            
        />
    )
}
export default Charts;