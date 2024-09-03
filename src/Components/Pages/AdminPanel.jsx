import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DashboardComponent from '../DashboardComponent/DashboardComponent';
import UserRequests from '../UserRequests/UserRequests';
import VeterinarianRequests from '../VeterinarianRequests/VeterinarianRequests';
import EventCreation from '../EventCreation/EventCreation';

// Inline styles for simplicity
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#e0e0e0',
  },
  mainContent: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const AdminPanel = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Admin Panel</h1>
      </header>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link
              to="dashboard"
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Dashboard
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="user-requests"
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              User Requests
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="veterinarian-requests"
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Veterinarian Requests
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="create-event"
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Create Event
            </Link>
          </li>
        </ul>
      </nav>
      <main style={styles.mainContent}>
        <Routes>
          <Route path="dashboard" element={<DashboardComponent />} />
          <Route path="user-requests" element={<UserRequests />} />
          <Route path="veterinarian-requests" element={<VeterinarianRequests />} />
          <Route path="create-event" element={<EventCreation />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;
