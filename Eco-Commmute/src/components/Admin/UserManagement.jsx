import React, { useState } from "react";

const UserManagement = () => {
  // Placeholder user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@gmail.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com", role: "User" },
    { id: 3, name: "Robert Brown", email: "robertbrown@gmail.com", role: "User" },
    { id: 4, name: "Alice Green", email: "alicegreen@gmail.com", role: "Admin" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered users based on the search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Management</h1>
      <input
        type="text"
        placeholder="Search users by name, email, or role"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{user.name}</td>
              <td style={styles.tableCell}>{user.email}</td>
              <td style={styles.tableCell}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredUsers.length === 0 && (
        <p style={styles.noResults}>No users match your search query.</p>
      )}
    </div>
  );
};

// Inline CSS styles
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
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
  },
  searchBar: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  tableHeader: {
    padding: "0.75rem",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "0.75rem",
    textAlign: "left",
    color: "#555",
  },
  noResults: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#888",
    textAlign: "center",
  },
};

export default UserManagement;