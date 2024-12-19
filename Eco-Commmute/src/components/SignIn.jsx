// import React from "react";
// import { auth, googleProvider, signInWithPopup } from "../firebase";
// import { useNavigate } from "react-router-dom";

// const SignIn = ({ setUser }) => {
//   const navigate = useNavigate();
//   const adminEmails = ["jwanilmodi10@gmail.com", "agrawalrajat357@gmail.com"]; // Add admin emails here

//   const handleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Add a role property to the user object based on their email
//       user.role = adminEmails.includes(user.email) ? "admin" : "user";

//       setUser(user); // Set the logged-in user globally
//       if (user.role === "admin") {
//         navigate("/admin-dashboard");
//       } else {
//         navigate("/user-dashboard");
//       }
//     } catch (error) {
//       console.error("Sign-in failed:", error.message);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20%" }}>
//       <h1>Welcome to EcoCommute</h1>
//       <p>Please sign in to continue</p>
//       <button onClick={handleSignIn} style={{ padding: "10px 20px", cursor: "pointer" }}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default SignIn;


import React from "react";
import { auth, googleProvider, signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../Styles/SignIn.css"; // Importing the CSS

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const adminEmails = ["jwanilmodi10@gmail.com", "agrawalrajat357@gmail.com"]; // Add admin emails here

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Add a role property to the user object based on their email
      user.role = adminEmails.includes(user.email) ? "admin" : "user";

      setUser(user); // Set the logged-in user globally
      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Sign-in failed:", error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1>Welcome to EcoCommute</h1>
        <p>Please sign in to continue</p>
        <button onClick={handleSignIn} className="signin-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;