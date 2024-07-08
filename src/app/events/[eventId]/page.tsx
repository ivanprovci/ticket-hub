import { notFound } from "next/navigation"

export default function EventDetails({
	params,
}: {
	params: { eventId: string }
}) {
	//if the eventId is not a number, send the user to the not found page
	if (!parseInt(params.eventId)) {
		notFound()
	}
	return (
		<main>
			<h1>Event info with id= {params.eventId}</h1>
		</main>
	)
}
