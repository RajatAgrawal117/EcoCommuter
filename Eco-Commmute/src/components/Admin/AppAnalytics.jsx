import React from "react";

const AppAnalytics = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Analytics</h1>

      {/* Total Routes Calculated */}
      <div style={styles.analyticsBox}>
        <h2 style={styles.boxTitle}>Total Routes Calculated</h2>
        <div style={styles.dataContainer}>
          {/* Placeholder for backend data */}
        </div>
      </div>

      {/* Most Used Modes of Transport */}
      <div style={styles.analyticsBox}>
        <h2 style={styles.boxTitle}>Most Used Modes of Transport</h2>
        <div style={styles.dataContainer}>
          {/* Placeholder for backend data */}
        </div>
      </div>

      {/* Total Pollution Data Fetched */}
      <div style={styles.analyticsBox}>
        <h2 style={styles.boxTitle}>Total Pollution Data Fetched</h2>
        <div style={styles.dataContainer}>
          {/* Placeholder for backend data */}
        </div>
      </div>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center boxes horizontally
    gap: "1rem", // Space between boxes
    width: "1300px",
    padding: "70px"
    
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
  },
  analyticsBox: {
    width: "100%",
    maxWidth: "900px", 
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    textAlign: "center",
    border: "1px solid #ddd",
    height:"450px"
  },
  boxTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "1rem",
  },
  dataContainer: {
    height: "350px", // Placeholder height for backend data
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#888",
    fontSize: "1rem",
    fontStyle: "italic",
    border: "1px dashed #ccc",
  },
};

export default AppAnalytics;