import React from "react";

const Settings = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Settings</h1>
      <p style={styles.list}>Notification Preferences: Enabled</p>
      <p style={styles.list}>Dark Mode: Disabled</p>
      <p style={styles.list}>Language: English</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    width: "1300px",
    padding: "70px",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  list: {
    margin: "30px",
    fontSize: "20px",
    color: "#555",
  },
};

export default Settings;