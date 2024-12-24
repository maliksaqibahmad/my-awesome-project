import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04'], // Dates
  datasets: [
    {
      label: 'Stock Price',
      data: [100, 110, 120, 130], // Example stock prices
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Stock Price Over Time',
    },
  },
};

const BudgetChart: React.FC = () => {
  return (
    <div>
      <h2>Budget Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BudgetChart;