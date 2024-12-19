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
  container: {fontFamily: "'Arial', sans-serif",width: "1300px",
    padding: "10px" , height: "700px", fontSize:"30px"},
  title: { fontSize: "2rem", marginBottom: "1rem", color: "white" },
  list:{
    margin: "30px",
    fontSize:"20px"

  }

};

export default Settings;