const API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

const ticketmasterService = {
  searchEvents: async (keyword: string) => {
    try {
      const response = await fetch(`${BASE_URL}events?apikey=${API_KEY}&keyword=${keyword}`);
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
      const response = await fetch(`${BASE_URL}events?apikey=${API_KEY}&sort=date,asc`);
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
  getAllEvents: async ({ location, category }: { location: string; category: string }) => {
    try {
      const categoryParam = category !== 'All categories' ? `&classificationName=${category}` : '';
      const response = await fetch(
        `${BASE_URL}events?apikey=${API_KEY}&city=${location}${categoryParam}`
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
