const API_KEY = '9XsAZGszX3TfvKUnYx7Ny0QP51mZR6n6';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

const ticketmasterService = {
  getEventDetails: async (eventId: string) => {
    try {
      const response = await fetch(`${BASE_URL}events/${eventId}?apikey=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching event details from Ticketmaster', error);
      throw error;
    }
  },
  getPopularEvents: async () => {
    try {
      const response = await fetch(`${BASE_URL}events?apikey=${API_KEY}&sort=date,asc&startDateTime=${new Date().toISOString().slice(0, 19)}Z`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching popular events from Ticketmaster', error);
      throw error;
    }
  },
  searchEvents: async ({ location, category }: { location: string; category: string }) => {
    try {
      const categoryParam = category !== 'All categories' ? `&classificationName=${category}` : '';
      const response = await fetch(
        `${BASE_URL}events?apikey=${API_KEY}&city=${location}${categoryParam}&sort=date,asc&startDateTime=${new Date().toISOString().slice(0, 19)}Z`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching events from Ticketmaster', error);
      throw error;
    }
  },
};

export default ticketmasterService; 
