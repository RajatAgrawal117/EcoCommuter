import React, { useState } from "react";

const Profile = () => {
  // Random data for now
  const [user, setUser] = useState({
    displayName: "John Doe",
    email: "johndoe@example.com",
    commutesDone: 10,
    age: 30,
    gender: "Male",
    address: "123 Main Street, City",
    dob: "1993-01-01", // Example date of birth
    dateJoined: "2023-01-01",
  });

  const [name, setName] = useState(user.displayName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [address, setAddress] = useState(user.address);
  const [dob, setDob] = useState(user.dob);
  const [editMode, setEditMode] = useState(false); // Toggle edit mode

  const handleEditClick = () => {
    setEditMode(true); // Enable edit mode
  };

  const handleSaveClick = () => {
    setUser({
      ...user,
      displayName: name,
      age: age,
      gender: gender,
      address: address,
      dob: dob,
    });
    setEditMode(false); // Save changes and disable edit mode
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Profile</h1>

      {/* User Profile Information */}
      <div style={styles.profileCard}>
        <div style={styles.profileItem}>
          <h3 style={styles.label}>Name:</h3>
          {editMode ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          ) : (
            <p style={styles.text}>{name}</p>
          )}
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Email:</h3>
          <p style={styles.text}>{user.email}</p>
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Commutes Done:</h3>
          <p style={styles.text}>{user.commutesDone}</p>
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Age:</h3>
          {editMode ? (
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={styles.input}
            />
          ) : (
            <p style={styles.text}>{age}</p>
          )}
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Gender:</h3>
          {editMode ? (
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={styles.input}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p style={styles.text}>{gender}</p>
          )}
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Address:</h3>
          {editMode ? (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={styles.input}
            />
          ) : (
            <p style={styles.text}>{address}</p>
          )}
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Date of Birth:</h3>
          {editMode ? (
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={styles.input}
            />
          ) : (
            <p style={styles.text}>{dob}</p>
          )}
        </div>

        <div style={styles.profileItem}>
          <h3 style={styles.label}>Date Joined:</h3>
          <p style={styles.text}>{user.dateJoined}</p>
        </div>

        {/* Edit and Save Button */}
        <div style={styles.buttonContainer}>
          {editMode ? (
            <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
          ) : (
            <button onClick={handleEditClick} style={styles.editButton}>Edit</button>
          )}
        </div>
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
    backgroundColor: "#fff", // White background for profile
    minHeight: "100vh",
    color: "#333", // Black text color for everything
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#333", // Black text for title
  },
  profileCard: {
    background: "#fff", // White background for profile card
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  profileItem: {
    marginBottom: "1rem", // Reduced space between each profile detail
    borderBottom: "1px solid #ddd", // Add line separating each field
    paddingBottom: "10px", // Padding below each field
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px", // Reduced space between label and input
  },
  text: {
    margin: 0,
    color: "#333", // Black text color for displayed info
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    backgroundColor: "#fff", // White background for inputs when editing
    color: "#333", // Black text inside input
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  editButton: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  saveButton: {
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
};

export default Profile;