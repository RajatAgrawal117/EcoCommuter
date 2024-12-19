import React, { useState } from "react";

const Plan = () => {
  const [routePlanName, setRoutePlanName] = useState("");
  const [mode, setMode] = useState("");
  const [time, setTime] = useState("");
  const [fromLocation, setFromLocation] = useState("");  // From location
  const [toLocation, setToLocation] = useState("");  // To location
  const [showMap, setShowMap] = useState(false);

  const handleSearch = () => {
    setShowMap(true); // Make Google Maps container visible
  };

  const handleFlip = () => {
    // Flip the values of 'fromLocation' and 'toLocation'
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Commute Plan</h1>

      {/* User Inputs */}
      <div style={styles.formContainer}>
        <div style={styles.formItem}>
          <label htmlFor="routeName" style={styles.label}>Route Plan Name:</label>
          <input
            id="routeName"
            type="text"
            placeholder="Enter Route Plan Name"
            value={routePlanName}
            onChange={(e) => setRoutePlanName(e.target.value)}
            style={styles.input}
          />
        </div>
         {/* From Location Input */}
         <div style={styles.formItem}>
          <label htmlFor="fromLocation" style={styles.label}>From Location:</label>
          <input
            id="fromLocation"
            type="text"
            placeholder="Enter From Location"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Flip Button */}
        <div style={styles.flipButtonContainer}>
          <button onClick={handleFlip} style={styles.flipButton}>swap</button>
        </div>

        {/* To Location Input */}
        <div style={styles.formItem}>
          <label htmlFor="toLocation" style={styles.label}>To Location:</label>
          <input
            id="toLocation"
            type="text"
            placeholder="Enter To Location"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formItem}>
          <label htmlFor="mode" style={styles.label}>Mode of Transport:</label>
          <select
            id="mode"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Mode</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Bus">Bus</option>
            <option value="Car">Car</option>
            <option value="Walking">Walking</option>
          </select>
        </div>

        <div style={styles.formItem}>
          <label htmlFor="time" style={styles.label}>Commute Time:</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={styles.input}
          />
        </div>

       
        {/* Search Button */}
        <div style={styles.buttonContainer}>
          <button onClick={handleSearch} style={styles.searchButton}>Search Route</button>
        </div>
      </div>

      {/* Google Maps Container */}
      {showMap && (
        <div style={styles.mapContainer}>
          <h3 style={styles.mapTitle}>Google Maps Route</h3>
          {/* Google Maps API integration will go here */}
          <div style={styles.map}>Map will load here</div>
        </div>
      )}
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
    color: "#333",
    marginBottom: "1rem",
  },
  formContainer: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  formItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "300px",
  },
  flipButtonContainer: {
    display: "flex",
    justifyContent: "left",
    marginTop: "-0.5rem", // Moves the button slightly up between the two fields
    
  },
  flipButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#f39c12",
    color: "white",
    fontSize: "10px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    
  },
  buttonContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  searchButton: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  mapContainer: {
    marginTop: "2rem",
    width: "1290px",
    maxWidth: "1800px",
    height: "800px",
    backgroundColor: "#dcdcdc",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  mapTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#333",
  },
  map: {
    width: "90%",
    height: "80%",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    textAlign: "center",
    lineHeight: "500px",
    color: "#888",
    fontSize: "1.2rem",
  },
};

export default Plan;