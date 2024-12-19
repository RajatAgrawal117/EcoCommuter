import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user state
    setUser(null);
    // Redirect to sign-in page
    navigate("/");
  }, [setUser, navigate]);

  return <div>Logging out...</div>; // Optional loading message
};

export default Logout;