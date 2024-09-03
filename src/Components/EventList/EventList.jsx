import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  eventItem: {
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
  },
};

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Event List</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} style={styles.eventItem}>
            <h3 style={styles.title}>{event.title}</h3>
            {event.image && <img src={event.image} alt={event.title} style={styles.image} />}
            <p style={styles.description}>{event.description}</p>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventList;
