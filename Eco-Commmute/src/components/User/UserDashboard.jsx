import React from "react";
import '../../Styles/UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Total Points */}
        <div className="dashboard-card">
          <h3>Total Points</h3>
          <h1 className="highlight">1500</h1>
        </div>

        {/* Recent Commutes */}
        <div className="dashboard-card">
          <h3>Recent Commutes</h3>
          <p>🚲 Bicycle: Park to Home</p>
          <p>🚌 Bus: City Center to Office</p>
          <p>🚶‍♂️ Walking: Home to Store</p>
        </div>

        {/* Health Insights */}
        <div className="dashboard-card">
          <h3>Health Insights</h3>
          <p>Calories Burned: 350 kcal</p>
          <p>Pollution Exposure: 42 AQI</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;