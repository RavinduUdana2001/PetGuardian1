import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '20px',
  },
};

const EventCreation = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && description) {
      try {
        // Confirm the submission
        const confirmSubmission = window.confirm('Are you sure you want to create this event?');
        if (!confirmSubmission) return;

        // Prepare form data
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('description', description);

        // Send POST request to the backend
        const response = await fetch('http://localhost:8080/api/events', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Show success message
          setMessage('Event created successfully!');
          setError('');

          // Clear form fields
          setTitle('');
          setImage(null);
          setDescription('');

          // Redirect to the event list page after 2 seconds
          setTimeout(() => navigate('/events'), 2000);
        } else {
          throw new Error('Failed to create event.');
        }
      } catch (error) {
        // Handle errors
        setError(error.message);
        setMessage('');
      }
    } else {
      // Handle form validation errors
      setError('Please fill in all required fields.');
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="image">Event Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="description">Event Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
        >
          Create Event
        </button>
      </form>
      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default EventCreation;
