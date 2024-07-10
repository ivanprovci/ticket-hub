export default function About() {
	return (
		//Parent Div
		<div>

		{/* Intro */}
		<div className="bg-blue-800 w-full p-8 flex-row"
				style={{height:'400px'
				}}>
					<div className="flex-col float-start  mt-10 space-y-8 ">
						<h2 className=" text-6xl font-bold text-white mt-2 ">Our Story</h2>
						<p className="font-semibold p-4 text-start text-white justify-start">TicketHub's success is rooted in strong partnerships, constant innovation and industry leadership. We work with clients worldwide, to connect them with their fans, helping to make more live memories, everyday.</p>
					</div>
		</div>

			{/* Accordion */}
			<div className=" p-11 flex justify-center">
				<div className="bg-blue-700 text-white rounded-t-lg rounded-b-2xl w-full lg:w-3/4 p-2">

						<div className="collapse collapse-arrow border-b-2 border-white">
  							<input type="radio" name="my-accordion-2" defaultChecked />
  								<div className="collapse-title text-2xl font-medium">What is TicketHub?</div>
  									<div className="collapse-content ">
    									<p className="text-md"> - TicketHub is your local events guider that showcases all of the events your looking for.</p>
  									</div>
						</div>
						<div className="collapse collapse-arrow border-b-2 border-white">
  							<input type="radio" name="my-accordion-2" />
  								<div className="collapse-title text-2xl font-medium">Why TicketHub?</div>
  									<div className="collapse-content">
   							 			<p className=" text-md">- Choose TicketHub as your ticketing partner to ensure secure and seamless ticketing experiences through our globally recognized platform and advanced technology. With TicketHub's extensive marketing tools and detailed analytics, we can optimize sales and enhance the visibility of our events, providing the best possible service to our audience.</p>
  									</div>
						</div>
						<div className="collapse collapse-arrow border-b-2 border-white">
  							<input type="radio" name="my-accordion-2" />
  								<div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  									<div className="collapse-content">
   							 			<p>hello</p>
  									</div>
						</div>
				</div>
			</div>




</div>

	)
}
