// src/api/imageService.js
const CAT_API_ENDPOINT = 'https://api.thecatapi.com/v1/images/search?limit=1';
const CAT_API_KEY = 'live_0cuTKUatVV7TahyLEOf6oRUjxNS2G01mHbh1wHsJIUaihgnStWvDcZjVJP0g6pvH'; // If you need an API key

export const fetchRandomCatImage = async () => {
    try {
        const response = await fetch(CAT_API_ENDPOINT, {
            headers: { 'x-api-key': CAT_API_KEY } // Include API key if required
        });
        const data = await response.json();
        return data[0]?.url || 'https://via.placeholder.com/300'; // Fallback URL
    } catch (error) {
        console.error('Error fetching cat image:', error);
        return 'https://via.placeholder.com/300'; // Fallback URL
    }
};
