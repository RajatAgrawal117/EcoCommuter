import React, { useState } from "react";

const Rewards = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle redeem action
  const handleRedeem = () => {
    setShowModal(true); // Show the modal when redeem button is clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal when close button is clicked
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Rewards</h1>
      <p style={styles.description}>
        Total Points: <span style={styles.highlight}>1500</span>
      </p>
      <div style={styles.rewardCard}>
        <h3>🎁 Reward: Discount Coupon</h3>
        <p>Cost: 500 Points</p>
      </div>
      <div style={styles.rewardCard}>
        <h3>🎁 Reward: Free Coffee</h3>
        <p>Cost: 300 Points</p>
      </div>

      {/* Redeem Button - aligned to the right */}
      <div style={styles.redeemButtonContainer}>
        <button onClick={handleRedeem} style={styles.redeemButton}>
          Redeem
        </button>
      </div>

      {/* Modal for Redeem Confirmation */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalText}>Congrats! Item Redeemed</h3>
            <p style={styles.modalText}>Your item has been successfully redeemed.</p>
            <button onClick={closeModal} style={styles.closeButton}>
              Close
            </button>
          </div>
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
    backgroundColor: "#fff", // White background for container
    minHeight: "100vh",
    color: "#333", // Black text color
    width: "1300px",
    padding: "70px"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333", // Black text for title
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1rem",
    color: "#555", // Slightly lighter black for description
  },
  highlight: {
    fontSize: "1.5rem",
    color: "#27ae60", // Highlight color for points
  },
  rewardCard: {
    padding: "1.5rem",
    background: "#fff", // White background for reward card
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
  },
  redeemButtonContainer: {
    display: "flex",
    justifyContent: "flex-end", // Align to the right
    marginTop: "2rem",
  },
  redeemButton: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#27ae60", // Green background for redeem button
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background for modal overlay
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white", // White background for modal content
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  modalText: {
    color: "#333", // Black text color for modal
  },
  closeButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#e74c3c", // Red background for close button
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default Rewards;