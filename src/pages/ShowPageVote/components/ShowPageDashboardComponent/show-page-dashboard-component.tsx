import React from 'react';
import './show-page-dashboard-component.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ShowPageDashboardComponent = () => {

    const data = {
        labels: ['Candidato 1', 'Candidato 2', 'Candidato 3', 'Candidato 4'],
        datasets: [
            {
                data: [25, 25, 25, 25], // valores dos dados
                backgroundColor: ['#031d3d', '#4e4b98', '#00a4b2', '#4CAF50'], // cores das fatias
                hoverBackgroundColor: ['#031d3d', '#4e4b98', '#00a4b2', '#4CAF50'], // cores do hover
            },
        ],
    };

    return (
        <div className='show-page-dashboard-component'>

            <div className='show-page-dashboard-image-bg' />

            <div className='show-page-dashboard-container'>
                <div className='show-page-dashboard-text'>
                    <h2 className='show-page-dashboard-text-title'>Seleção de shows da próxima semana</h2>
                    <h3 className='show-page-dashboard-text-subtitle'>Em % de votos válidos</h3>
                </div>

                <div className='show-page-dashboard-graphic'>
                    <Pie data={data} className='graphic-pie' color='black' />
                </div>

                <div className='show-page-dashboard-graphic-details-container'>
                    <div className='show-page-dashboard-graphic-details-item'>
                        <span className='show-page-dashboard-graphic-details-text-votes'>votos:</span> 100
                    </div>
                </div>
            </div>

        </div>
    );
}


export default ShowPageDashboardComponent;