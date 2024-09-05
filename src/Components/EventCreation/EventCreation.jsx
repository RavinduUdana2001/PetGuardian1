import React, { useState } from 'react';
import { createEvent } from '../../api/eventService'; // Adjust this path similarly
import EventList1 from '../EventList1/EventList1'; // Import EventList1
import 'bootstrap/dist/css/bootstrap.min.css';

const EventCreation = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState(''); // 'success' or 'error'
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [events, setEvents] = useState([]); // State to manage events

    const handleSubmit = async (e) => {
        e.preventDefault();

        const event = { title, description };

        setIsSubmitting(true); // Start the submission process

        try {
            const result = await createEvent(event);
            setPopupMessage('Event created successfully!');
            setPopupType('success');
            setTitle('');
            setDescription('');
            setEvents((prevEvents) => [result, ...prevEvents]); // Update events state with the new event
        } catch (error) {
            setPopupMessage(`Failed to create event: ${error.message}`);
            setPopupType('error');
        } finally {
            setIsSubmitting(false); // End the submission process
        }
    };

    const handleEventDeleted = () => {
        // This function can be used to refresh or handle state updates if necessary
        // For example, you can re-fetch events or update local state
        // For simplicity, let's assume that the EventList1 component will handle its own state.
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-primary">
                <div className="card-body">
                    <h2 className="card-title text-primary text-center mb-4">Create Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title" className="font-weight-bold">Title:</label>
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description" className="font-weight-bold">Description:</label>
                            <textarea
                                id="description"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                rows="4" // Adjust the height of the textarea
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-4"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Event'}
                        </button>
                    </form>
                    {popupMessage && (
                        <div className={`alert alert-${popupType === 'success' ? 'success' : 'danger'} mt-4`}>
                            {popupMessage}
                        </div>
                    )}
                </div>
            </div>

            {/* Render the EventList1 component */}
            <EventList1 onEventDeleted={handleEventDeleted} />
        </div>
    );
};

export default EventCreation;
