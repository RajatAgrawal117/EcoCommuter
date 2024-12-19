// Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ userType }) => {
//   const adminLinks = [
//     { to: '/admin-dashboard', label: 'Dashboard' },
//     { to: '/user-management', label: 'User Management' },
//     { to: '/rewards-management', label: 'Rewards Management' },
//     { to: '/pollution-trends', label: 'Pollution Trends' },
//     { to: '/app-analytics', label: 'App Analytics' },
//     { to: '/logout', label: 'Logout' },
//   ];

//   const userLinks = [
//     { to: '/dashboard', label: 'Dashboard' },
//     { to: '/plan', label: 'Plan' },
//     { to: '/commute', label: 'Commute' },
//     { to: '/rewards', label: 'Rewards' },
//     { to: '/profile', label: 'Profile' },
//     { to: '/settings', label: 'Settings' },
//     { to: '/logout', label: 'Logout' },
//   ];

//   const links = userType === 'admin' ? adminLinks : userLinks;

//   return (
//     <nav className="navbar">
//       <div className="logo">EcoCommute</div>
//       <ul className="nav-links">
//         {links.map((link, index) => (
//           <li key={index}>
//             <Link to={link.to}>{link.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;





import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EcoCommute</div>
      <ul className="nav-links">
        <li><Link to="/user-dashboard">Dashboard</Link></li>
        <li><Link to="/plan">Plan</Link></li>
        <li><Link to="/commute">Commute</Link></li>
        <li><Link to="/rewards">Rewards</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;




// import React from "react";
// import { signOut } from "../firebase";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await signOut();
//     navigate("/");
//   };

//   return (
//     <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
//       <h2 style={{ color: "green" }}>EcoCommute</h2>
//       <ul style={{ display: "flex", gap: "1rem" }}>
//         <li>Dashboard</li>
//         <li>Plan</li>
//         <li>Commute</li>
//         <li>Rewards</li>
//         <li>Profile</li>
//         <li>Settings</li>
//         <li onClick={handleLogout} style={{ cursor: "pointer" }}>
//           Logout
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;