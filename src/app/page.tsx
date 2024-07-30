"use client"

import React, { useEffect, useState } from "react"
import ticketmasterService from "../services/ticketmasterService"
import partyImage from "../assets/party.png"

export default function Home() {
	const [popularEvents, setPopularEvents] = useState([])

	useEffect(() => {
		const fetchPopularEvents = async () => {
			try {
				const data = await ticketmasterService.getPopularEvents()
				if (data._embedded) {
					setPopularEvents(data._embedded.events)
				}
			} catch (error) {
				console.error("Error fetching popular events", error)
			}
		}

		fetchPopularEvents()
	}, [])

	return (
		<div>
			{/* Hero section */}
			<div>
				<div className="bg-[url('../assets/party.png')] h-[500px] bg-center">
					<div
						className="bottom-0 left-0  right-0 top-0 h-full w-full overflow-hidden"
						style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
						<div className="flex h-full items-center justify-center">
							<div className="text-white text-center">
								<h2 className="mb-4 text-4xl font-semibold">
									Welcome to Ticket Hub
								</h2>
								<h4 className="mb-6 text-xl font-semibold">
									Check out to see all events near you!
								</h4>
								<a href="/events">
									<button
										type="button"
										className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
										data-twe-ripple-init
										data-twe-ripple-color="light">
										Find an Event
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<h1 className="text-center text-3xl font-bold mt-8 text-black">
					Explore Upcoming Events
				</h1>
				{/* Event Cards */}
				<div className="flex flex-wrap gap-4 mt-6 p-8 lg:px-24 justify-center items-stretch">
					{popularEvents.length > 0 ? (
						popularEvents.map((event: any) => (
							<div
								key={event.id}
								className="bg-cyan-400 shadow-lg  border-4 border-white rounded-lg overflow-hidden w-full md:w-2/3 lg:w-1/4 flex flex-col">
								<img
									src={event.images[0].url}
									alt={event.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4 min-h-max flex flex-col flex-1">
									<div className="flex-1">
										<h1 className="font-bold text-black text-2xl mb-2">
											{event.name}
										</h1>
										<p className="text-gray-600 mb-4">
											{event.dates.start.localDate}
										</p>
									</div>
									<a
										href={event.url}
										target="_blank"
										rel="noopener noreferrer">
										<button
											type="button"
											className="rounded border-2 border-blue-500 px-4 py-2 text-blue-500 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-500 hover:text-white">
											Buy Tickets
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
	)
}
