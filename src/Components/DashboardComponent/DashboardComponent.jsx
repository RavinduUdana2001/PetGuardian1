import React, { useState, useEffect } from 'react';

// Inline styles for simplicity
const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    flex: '1',
    minWidth: '200px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  cardValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
};

const DashboardComponent = () => {
  // Hardcoded data
  const [data, setData] = useState({ users: 150, vetRequests: 35 });

  // Simulate fetching data
  useEffect(() => {
    const simulateFetchData = () => {
      setTimeout(() => {
        // Set data after simulated delay
        setData({ users: 150, vetRequests: 35 });
      }, 500); // Simulate a delay of 500ms
    };
    
    simulateFetchData();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>Dashboard</h2>
      </header>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Number of Users</div>
          <div style={styles.cardValue}>{data.users}</div>
          <div style={styles.cardDescription}>Total registered users</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Veterinarian Requests</div>
          <div style={styles.cardValue}>{data.vetRequests}</div>
          <div style={styles.cardDescription}>Pending requests from veterinarians</div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default DashboardComponent;
