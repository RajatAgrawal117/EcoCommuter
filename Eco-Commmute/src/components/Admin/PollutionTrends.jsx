import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PollutionTrends = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Pollution Level (AQI)',
        data: [30, 45, 60, 50, 70, 80, 90],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pollution Trends Over Time',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Pollution Trends</h2>
      <div style={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
  },
};

export default PollutionTrends;