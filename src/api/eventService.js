import axios from 'axios';

const API_URL = 'http://localhost:8080/api/events';

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, eventData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
