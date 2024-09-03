import React, { useState, useEffect } from 'react';

// Inline styles for simplicity
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    marginBottom: '10px',
  },
  requestTitle: {
    fontSize: '1.2rem',
    color: '#333',
  },
  requestDetails: {
    fontSize: '1rem',
    color: '#666',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#007BFF',
  },
  noResults: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
  },
};

const VeterinarianRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching veterinarian requests
    const simulateFetchRequests = () => {
      setTimeout(() => {
        // Hardcoded data for simulation
        const simulatedRequests = [
          {
            title: 'Request A',
            vetName: 'Dr. Alice Johnson',
            date: '2024-08-15T00:00:00Z',
            description: 'Description for veterinarian request A.',
          },
          {
            title: 'Request B',
            vetName: 'Dr. Bob Smith',
            date: '2024-08-16T00:00:00Z',
            description: 'Description for veterinarian request B.',
          },
        ];
        setRequests(simulatedRequests);
        setLoading(false);
      }, 1000); // Simulate a delay
    };
    
    simulateFetchRequests();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>Veterinarian Requests</h2>
      </header>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : requests.length > 0 ? (
        requests.map((request, index) => (
          <div key={index} style={styles.requestCard}>
            <div style={styles.requestTitle}>{request.title}</div>
            <div style={styles.requestDetails}>
              <p><strong>Veterinarian:</strong> {request.vetName}</p>
              <p><strong>Request Date:</strong> {new Date(request.date).toLocaleDateString()}</p>
              <p><strong>Description:</strong> {request.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noResults}>No veterinarian requests found.</p>
      )}
    </div>
  );
};

export default VeterinarianRequests;
