import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../../api/eventService'; // Adjust path as needed
import { fetchRandomCatImage } from '../../api/imageService'; // Adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState(''); // 'success' or 'error'

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const data = await getAllEvents();
            const eventsWithImages = await Promise.all(data.map(async (event) => {
                const imageUrl = await fetchRandomCatImage();
                return { ...event, imageUrl };
            }));
            setEvents(eventsWithImages);
        } catch (error) {
            setPopupMessage(`Error fetching events: ${error.message}`);
            setPopupType('error');
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    const handleEventCreated = (newEvent) => {
        setEvents((prevEvents) => [newEvent, ...prevEvents]);
        setPopupMessage('Event added successfully!');
        setPopupType('success');
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>; // Display loading message
    }

    return (
        <div className="event-list container mt-5">
            <h2 className='fs-1 text-center mb-5'>Special Events</h2>
            {popupMessage && (
                <div className={`popup alert alert-${popupType === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                    {popupMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            {events.length === 0 ? (
                <p className="no-events text-center">No events found.</p> // Display no events message
            ) : (
                <div className="row">
                    {events.map((event) => (
                        <div key={event.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={event.imageUrl} alt="Event" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">{event.description}</p>
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
                .card:hover {
                    transform: scale(1.05);
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

export default EventList;
