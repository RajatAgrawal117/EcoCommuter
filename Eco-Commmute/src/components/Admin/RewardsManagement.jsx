import React, { useState } from "react";

const RewardsManagement = () => {
  // Placeholder current points per km values
  const [rewards, setRewards] = useState({
    cycling: "20/5", // 20 points per 5 km
    walking: "15/5", // 15 points per 5 km
    running: "25/5", // 25 points per 5 km
  });

  // Temporary state to store new inputs
  const [newRewards, setNewRewards] = useState({
    cycling: "",
    walking: "",
    running: "",
  });

  // Update input values dynamically
  const handleInputChange = (activity, value) => {
    setNewRewards({ ...newRewards, [activity]: value });
  };

  // Assign new points per km
  const handleAssignRewards = () => {
    const updatedRewards = { ...rewards };

    Object.keys(newRewards).forEach((activity) => {
      if (newRewards[activity]) {
        updatedRewards[activity] = newRewards[activity]; // Update rewards if input is not empty
      }
    });

    setRewards(updatedRewards);
    setNewRewards({ cycling: "", walking: "", running: "" }); // Clear input fields
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Rewards Management</h1>

      <div style={styles.blocksContainer}>
        {/* Cycling Block */}
        <div style={styles.block}>
          <h2 style={styles.blockTitle}>Cycling</h2>
          <input
            type="text"
            placeholder="Enter points per km (e.g., 20)"
            value={newRewards.cycling}
            onChange={(e) => handleInputChange("cycling", e.target.value)}
            style={styles.input}
          />
          <p style={styles.currentReward}>Current Points: {rewards.cycling} points/km</p>
        </div>

        {/* Walking Block */}
        <div style={styles.block}>
          <h2 style={styles.blockTitle}>Walking</h2>
          <input
            type="text"
            placeholder="Enter points per km (e.g., 15)"
            value={newRewards.walking}
            onChange={(e) => handleInputChange("walking", e.target.value)}
            style={styles.input}
          />
          <p style={styles.currentReward}>Current Points: {rewards.walking} points/km</p>
        </div>

        {/* Running Block */}
        <div style={styles.block}>
          <h2 style={styles.blockTitle}>Running</h2>
          <input
            type="text"
            placeholder="Enter points per km (e.g., 25)"
            value={newRewards.running}
            onChange={(e) => handleInputChange("running", e.target.value)}
            style={styles.input}
          />
          <p style={styles.currentReward}>Current Points: {rewards.running} points/km</p>
        </div>
      </div>

      <button style={styles.button} onClick={handleAssignRewards}>
        Assign New Points
      </button>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    width: "1300px",
    padding: "70px"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#333",
  },
  blocksContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    marginBottom: "2rem",
    
    
  },
  block: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    textAlign: "center",
    border: "1px solid #ddd",
  },
  blockTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#007bff",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  currentReward: {
    fontSize: "1rem",
    color: "#555",
  },
  button: {
    display: "block",
    margin: "0 auto",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default RewardsManagement;