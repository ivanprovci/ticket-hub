"use client";

import React, { useEffect, useState } from 'react';
import ticketmasterService from '../services/ticketmasterService';

export default function Home() {
  const [popularEvents, setPopularEvents] = useState([]);

  useEffect(() => {
    const fetchPopularEvents = async () => {
      try {
        const data = await ticketmasterService.getPopularEvents();
        if (data._embedded) {
          setPopularEvents(data._embedded.events);
        }
      } catch (error) {
        console.error('Error fetching popular events', error);
      }
    };

    fetchPopularEvents();
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div>
        <div
          className="overflow-hidden bg-cover bg-no-repeat text-center"
          style={{
            backgroundImage: "url('')",
            height: '400px',
          }}
        >
          <div
            className="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Welcome to Ticket Hub</h2>
                <h4 className="mb-6 text-xl font-semibold">Check out to see all events near you!</h4>
                <a href="/events">
                  <button
                    type="button"
                    className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Find an Event
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl font-bold mt-8 text-black">Explore Popular Events Below</h1>
        {/* Event Cards */}
        <div className="flex flex-wrap mt-6 p-8 lg:px-24 justify-center items-center space-y-6">
          {popularEvents.length > 0 ? (
            popularEvents.map((event: any) => (
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
                  <h1 className="font-bold text-black text-2xl mb-2">{event.name}</h1>
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
            ))
          ) : (
            <p>Loading events...</p>
          )}
        </div>
      </div>
    </div>
  );
}
