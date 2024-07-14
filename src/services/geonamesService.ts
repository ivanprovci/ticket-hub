const GEONAMES_USERNAME = process.env.NEXT_PUBLIC_GEONAMES_USERNAME;
console.log('GeoNames Username:', GEONAMES_USERNAME); // Debugging statement
const BASE_URL = 'http://api.geonames.org/searchJSON';

const geonamesService = {
  getCitySuggestions: async (query: string) => {
    try {
      const response = await fetch(`${BASE_URL}?q=${query}&maxRows=10&username=${GEONAMES_USERNAME}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('GeoNames API response:', data); // Debugging statement
      return data.geonames;
    } catch (error) {
      console.error('Error fetching city suggestions from GeoNames', error);
      throw error;
    }
  },
};

export default geonamesService;
