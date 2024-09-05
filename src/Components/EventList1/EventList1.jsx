import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchRandomCatImage } from '../../api/imageService'; // Import the function
import 'bootstrap/dist/css/bootstrap.min.css';

const EventList1 = ({ onEventDeleted }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState(''); // 'success' or 'error'

    useEffect(() => {
        // Fetch events from the backend API
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/events');
                const eventsWithImages = await Promise.all(response.data.map(async (event) => {
                    const imageUrl = await fetchRandomCatImage(); // Fetch a random cat image
                    return { ...event, imageUrl };
                }));
                setEvents(eventsWithImages);
            } catch (err) {
                setError('Failed to fetch events.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/events/${id}`);
            setEvents(events.filter((event) => event.id !== id));
            onEventDeleted(); // Notify parent component or trigger any necessary action
            setPopupMessage('Event deleted successfully!');
            setPopupType('success');
        } catch (err) {
            setError('Failed to delete event.');
            console.error(err);
            setPopupMessage('Error deleting event.');
            setPopupType('error');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="event-list container mt-5">
            {popupMessage && (
                <div className={`popup alert alert-${popupType === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                    {popupMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            {events.length === 0 ? (
                <p className="no-events text-center">No events found.</p>
            ) : (
                <div className="row">
                    {events.map((event) => (
                        <div key={event.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src={event.imageUrl || 'https://via.placeholder.com/300'}
                                    alt={event.title}
                                    className="card-img-top"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/300'} // Fallback image
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">{event.description}</p>
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <style jsx>{`
                .event-list {
                    background: #f8f9fa;
                    border-radius: 10px;
                    padding: 20px;
                }
                .popup {
                    margin-bottom: 20px;
                }
                .card {
                    border-radius: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: transform 0.2s;
                }
                .card-img-top {
                    border-radius: 15px 15px 0 0;
                    object-fit: cover;
                    height: 200px;
                }
                .card-title {
                    font-size: 1.25rem;
                    color: #007bff;
                }
                .card-text {
                    font-size: 1rem;
                    color: #333;
                }
                .no-events {
                    font-size: 1.25rem;
                    color: #888;
                }
            `}</style>
        </div>
    );
};

export default EventList1;
