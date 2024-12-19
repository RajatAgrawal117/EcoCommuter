import React from 'react';
import '../../Styles/AdminDashboard.css';

function Dashboard() {
  return (
    
    <div className="dashboard">
   
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="dashboard-item">
        <h3>Total Registered Users</h3>
        <p className="number">1,234</p>
      </div>

      <div className="dashboard-item">
        <h3>Total Rewards Distributed</h3>
        <p className="number">5,678</p>
      </div>

      <div className="dashboard-item">
        <h3>Active Users Today</h3>
        <p className="number">456</p>
      </div>

      <div className="dashboard-graph">
        <h3>Pollution Trends Graph</h3>
        <img src="https://via.placeholder.com/600x300?text=Line+Graph" alt="Line Graph" />
      </div>
    </div>
  );
}

export default Dashboard;