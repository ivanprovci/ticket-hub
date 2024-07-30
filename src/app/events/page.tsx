"use client"
import React, { useState, useEffect } from "react"
import ticketmasterService from "../../services/ticketmasterService"
import SearchForm from "./SearchForm"

const EventsPage: React.FC = () => {
	const [events, setEvents] = useState<any[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const eventsPerPage = 10
	const [searchParams, setSearchParams] = useState<{
		location: string
		country: string
		category: string
	}>({
		location: "",
		country: "",
		category: "All categories",
	})

	useEffect(() => {
		loadEvents(
			searchParams.location,
			searchParams.country,
			searchParams.category
		)
	}, [currentPage, searchParams])

	const loadEvents = async (
		location: string,
		country: string,
		category: string
	) => {
		console.log("Loading events with:", { location, country, category })
		try {
			const data = await ticketmasterService.searchEvents({
				location,
				country,
				category,
			})
			console.log("Loaded events data:", data)
			if (data._embedded && data._embedded.events) {
				setEvents(data._embedded.events)
			} else {
				console.warn("No events found")
				setEvents([])
			}
		} catch (error) {
			console.error("Error fetching events", error)
		}
	}

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1)
	}

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1)
	}

	const handleSearch = (
		location: string,
		country: string,
		category: string
	) => {
		console.log("Search parameters updated:", {
			location,
			country,
			category,
		})
		setSearchParams({ location, country, category })
		setCurrentPage(1)
	}

	const indexOfLastEvent = currentPage * eventsPerPage
	const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
	const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

	return (
		<div>
			<div
				className="bg-sky-700 w-full flex justify-center items-center text-center p-8 flex-col md:h-450"
				style={{ height: "600px" }}>
				<h2 className=" text-2xl lg:text-4xl font-bold text-white mt-2">
					Search for events:
				</h2>
				<SearchForm onSearch={handleSearch} />
			</div>

			{currentEvents.length > 0 ? (
				<div className="flex flex-wrap gap-4 mt-6 p-8 justify-center items-stretch">
					{currentEvents.map((event: any) => (
						<div
							key={event.id}
							className="bg-cyan-400  border-4 border-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3 lg:w-1/4 flex flex-col">
							<img
								src={event.images[0].url}
								alt={event.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4 min-h-max flex flex-col flex-1">
								<div className="flex-1">
									<h1 className="font-bold text-2xl mb-2 text-black">
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
					))}
				</div>
			) : (
				<div className="mt-6 p-8 lg:px-24 text-center">
					<p>No events found matching your criteria.</p>
				</div>
			)}

			{events.length > eventsPerPage && (
				<div className="flex justify-center items-center mt-4 mb-8">
					<button
						onClick={prevPage}
						disabled={currentPage === 1}
						className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg disabled:opacity-50">
						Previous
					</button>
					<button
						onClick={nextPage}
						disabled={currentEvents.length < eventsPerPage}
						className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg disabled:opacity-50">
						Next
					</button>
				</div>
			)}
		</div>
	)
}

export default EventsPage
