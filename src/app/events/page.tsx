"use client";
import React, { useState } from 'react';
import ticketmasterService from '../../services/ticketmasterService';
import SearchForm from './SearchForm';

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState([]);

  const handleSearch = async (location: string, category: string) => {
    try {
      const data = await ticketmasterService.getAllEvents({ location, category });
      console.log('Fetched data:', data); // Debugging statement

      if (data._embedded && data._embedded.events) {
        const filteredEvents = data._embedded.events.filter((event: any) => {
          const eventLocation = event._embedded?.venues?.[0]?.city?.name?.toLowerCase() || '';
          const eventCategory = event.classifications?.[0]?.segment?.name?.toLowerCase() || '';

          console.log(`Event: ${event.name}, Location: ${eventLocation}, Category: ${eventCategory}`); // Debugging statement

          return (
            eventLocation.includes(location.toLowerCase()) &&
            (category === 'All categories' || eventCategory === category.toLowerCase())
          );
        });

        console.log('Filtered events:', filteredEvents); // Debugging statement
        setEvents(filteredEvents);
      } else {
        console.log('No events found in the fetched data.'); // Debugging statement
        setEvents([]); // No events found
      }
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  return (
    <div>
      <div
        className="bg-sky-500 w-full justify-center items-center text-center p-8 flex-col"
        style={{ height: '450px' }}
      >
        <h2 className="text-4xl font-bold text-white mt-2">Search for an event you're looking for!</h2>
        <SearchForm onSearch={handleSearch} />
      </div>

      {/* Search Results Div */}
      {events.length > 0 && (
        <div className="flex flex-wrap mt-6 p-8 lg:px-24 justify-center items-center space-y-6">
          {events.map((event: any) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 m-4"
            >
              <img
                src={event.images[0].url}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h1 className="font-bold text-2xl mb-2">{event.name}</h1>
                <p className="text-gray-600 mb-4">{event.dates.start.localDate}</p>
                <a href={`/events/${event.id}`}>
                  <button
                    type="button"
                    className="rounded border-2 border-blue-500 px-4 py-2 text-blue-500 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-500 hover:text-white"
                  >
                    Check Event
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
