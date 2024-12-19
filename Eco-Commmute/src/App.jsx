import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";
import AdminNavbar from "./components/Admin/AdminNavbar";
import UserNavbar from "./components/User/UserNavbar";
import UserManagement from "./components/Admin/UserManagement"; // Add this
import RewardsManagement from "./components/Admin/RewardsManagement"; // Add this
import PollutionTrends from "./components/Admin/PollutionTrends"; // Add this
import AppAnalytics from "./components/Admin/AppAnalytics"; // Add this
import Plan from "./components/User/Plan"; // Add this
import Commute from "./components/User/Commute"; // Add this
import Rewards from "./components/User/Rewards"; // Add this
import Profile from "./components/User/Profile"; // Add this
import Settings from "./components/User/Settings"; // Add this
import Logout from "./components/Logout";


const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Render different Navbar based on user role
  return (
    <>
      {user.role === "admin" ? <AdminNavbar /> : <UserNavbar />}
      {children}
    </>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
  
          {/* Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute user={user}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-management"
            element={
              <ProtectedRoute user={user}>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rewards-management"
            element={
              <ProtectedRoute user={user}>
                <RewardsManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pollution-trends"
            element={
              <ProtectedRoute user={user}>
                <PollutionTrends />
              </ProtectedRoute>
            }
          />
          <Route
            path="/app-analytics"
            element={
              <ProtectedRoute user={user}>
                <AppAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Logout"
            element={
              <ProtectedRoute user={user}>
                <Logout setUser={setUser} />
              </ProtectedRoute>
            }
          />
  
          {/* User Routes */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute user={user}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plan"
            element={
              <ProtectedRoute user={user}>
                <Plan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/commute"
            element={
              <ProtectedRoute user={user}>
                <Commute />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rewards"
            element={
              <ProtectedRoute user={user}>
                <Rewards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute user={user}>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Logout"
            element={
              <ProtectedRoute user={user}>
                <Logout setUser={setUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    );
  };
  
  export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/UserDashboard";
// import Navbar from "./components/UserNavbar";

// const ProtectedRoute = ({ children, user }) => {
//   if (!user) {
//     return <Navigate to="/" replace />;
//   }
//   return (
//     <>
//       <Navbar />
//       {children}
//     </>
//   );
// };

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn setUser={setUser} />} />
//         <Route
//           path="/admin-dashboard"
//           element={
//             <ProtectedRoute user={user}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-dashboard"
//           element={
//             <ProtectedRoute user={user}>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/UserDashboard";

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn setUser={setUser} />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/UserDashboard";
// import Navbar from "./components/Navbar";

// const ProtectedRoute = ({ children, user }) => {
//   if (!user) {
//     return <Navigate to="/" replace />;
//   }
//   return (
//     <>
//       <Navbar />
//       {children}
//     </>
//   );
// };

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn setUser={setUser} />} />
//         <Route
//           path="/admin-dashboard"
//           element={
//             <ProtectedRoute user={user}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-dashboard"
//           element={
//             <ProtectedRoute user={user}>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;