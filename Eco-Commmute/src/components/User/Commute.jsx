import React, { useState, useEffect } from "react";

const Commute = () => {
  const [commutes, setCommutes] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [expandedCommute, setExpandedCommute] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching commute data from backend
  useEffect(() => {
    const fetchCommutes = async () => {
      try {
        // Simulated data
        const simulatedData = [
          {
            id: 1,
            name: "Commute 1",
            date: "2023-10-01",
            time: "08:00 AM",
            from: "Location A",
            to: "Location B",
            status: "Completed",
            mode: "Car",
            map: "Map will load here",
          },
          {
            id: 2,
            name: "Commute 2",
            date: "2023-10-02",
            time: "09:00 AM",
            from: "Location C",
            to: "Location D",
            status: "Pending",
            mode: "Bus",
            map: "Map will load here",
          },
        ];
        setCommutes(simulatedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching commute data:", error);
        setLoading(false);
      }
    };

    fetchCommutes();
  }, []);

  // Sorting functionality
  const sortedCommutes = [...commutes].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "status") {
      return a.status === "Completed" ? -1 : 1;
    }
    return 0;
  });

  const toggleDetails = (id) => {
    setExpandedCommute(expandedCommute === id ? null : id);
  };

  if (loading) {
    return <p>Loading commute data...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Commute History</h1>

      {/* Sort By Dropdown */}
      <div style={styles.sortByContainer}>
        <label htmlFor="sortBy" style={styles.label}>
          Sort By:
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={styles.sortByDropdown}
        >
          <option value="date">Date</option>
          <option value="status">Status</option>
        </select>
      </div>

      {/* Commutes List */}
      <div style={styles.commutesList}>
        {sortedCommutes.map((commute) => (
          <div key={commute.id} style={styles.commuteCard}>
            <div style={styles.cardHeader}>
              <h3>{commute.name}</h3>
              <p style={styles.commuteInfo}>
                {commute.date} | {commute.time} | From: {commute.from} | To:{" "}
                {commute.to} | Status: {commute.status}
              </p>
              <button
                onClick={() => toggleDetails(commute.id)}
                style={styles.toggleButton}
              >
                {expandedCommute === commute.id ? "Hide Details" : "Show Details"}
              </button>
            </div>

            {expandedCommute === commute.id && (
              <div style={styles.commuteDetails}>
                <p>
                  <strong>Mode of Transport:</strong> {commute.mode}
                </p>
                <div style={styles.mapContainer}>
                  <h4>Google Maps Route</h4>
                  <div style={styles.map}>{commute.map}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    width: "1300px",
    padding: "70px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#333",
    textAlign: "center",
  },
  sortByContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "1rem",
    marginRight: "0.5rem",
  },
  sortByDropdown: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "150px",
  },
  commutesList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  commuteCard: {
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    transition: "transform 0.3s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commuteInfo: {
    fontSize: "0.875rem",
    color: "black",
  },
  toggleButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  commuteDetails: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "black",
  },
  mapContainer: {
    marginTop: "1rem",
    width: "100%",
    height: "500px",
    backgroundColor: "#e1e1e1",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "1rem",
    fontStyle: "italic",
    padding: "10px",
  },
  map: {
    width: "1300px",
    height: "480px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    textAlign: "center",
    lineHeight: "300px",
    color: "#888",
    fontSize: "1.2rem",
  },
};

export default Commute;