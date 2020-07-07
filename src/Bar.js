import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.6)',
            borderColor: 'red',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,199,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(25,85,80,0.6)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [25, 49, -20, 91, 46, 85, 100]
        }
    ],



};

function BarChart() {
    return ( <
        div className = "bar-chart" >
        <
        h2 > Bar Example(custom size) < /h2> <
        Bar data = { data }
        width = { 100 }
        height = { 250 }
        options = {
            {
                maintainAspectRatio: false
            }
        }
        /> <
        /div>
    );
}

export default BarChart;