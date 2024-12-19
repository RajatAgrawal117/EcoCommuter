import React from "react";

const AppAnalytics = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Analytics Dashboard</h1>

      <div style={styles.analyticsGrid}>
        {/* Total Routes Calculated */}
        <div style={styles.analyticsCard}>
          <h2 style={styles.cardTitle}>Total Routes Calculated</h2>
          <div style={styles.dataContainer}>
            <p style={styles.dataText}>1,234 routes calculated</p>
          </div>
        </div>

        {/* Most Used Modes of Transport */}
        <div style={styles.analyticsCard}>
          <h2 style={styles.cardTitle}>Most Used Modes of Transport</h2>
          <div style={styles.dataContainer}>
            <p style={styles.dataText}>Bicycle: 45%</p>
            <p style={styles.dataText}>Bus: 30%</p>
            <p style={styles.dataText}>Car: 15%</p>
            <p style={styles.dataText}>Walking: 10%</p>
          </div>
        </div>

        {/* Total Pollution Data Fetched */}
        <div style={styles.analyticsCard}>
          <h2 style={styles.cardTitle}>Total Pollution Data Fetched</h2>
          <div style={styles.dataContainer}>
            <p style={styles.dataText}>42,000 data points</p>
          </div>
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
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "2rem",
  },
  analyticsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "2rem",
    width: "100%",
  },
  analyticsCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    textAlign: "center",
    border: "1px solid #ddd",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "1rem",
  },
  dataContainer: {
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#888",
    fontSize: "1.2rem",
    fontStyle: "italic",
    border: "1px dashed #ccc",
    padding: "1rem",
    height: "auto",
  },
  dataText: {
    color: "#333",
    fontSize: "1.2rem",
    fontStyle: "normal",
    margin: "0.5rem 0",
  },
};

export default AppAnalytics;