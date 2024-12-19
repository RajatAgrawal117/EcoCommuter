
// src/components/AdminNavbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EcoCommute Admin</div>
      <ul className="nav-links">
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/user-management">User Management</Link></li>
        <li><Link to="/rewards-management">Rewards Management</Link></li>
        <li><Link to="/pollution-trends">Pollution Trends</Link></li>
        <li><Link to="/app-analytics">App Analytics</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
        {/* <li><Link onClick={handleLogout}>Logout</Link></li> */}
      </ul>
    </nav>
  );
};

export default AdminNavbar;