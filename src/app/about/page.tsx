export default function About() {
	return (
		//Parent Div
		<div>

		{/* Intro */}
		<div className=" bg-gradient-to-br from-blue-800 to-blue-500 w-full p-8 border-b-2 flex flex-row"
				style={{height:'350px'
				}}>
					<div className="flex-col float-start  mt-10 space-y-8 ">
						<h2 className=" text-6xl font-bold text-white mt-2 ">Our Story</h2>
						<p className="font-semibold p-4 text-start text-white justify-start">TicketHub's success is rooted in strong partnerships, constant innovation and industry leadership. We work with clients worldwide, to connect them with their fans, helping to make more live memories, everyday.</p>
					</div>
		</div>
		{/* Our Values */}
		<div className="bg-gradient-to-bl from-blue-500 to-sky-700 w-full  p-8 border-b-2 flex-row "
				>
					<div className="flex flex-col  mt-2 space-y-8 ">
						<h2 className=" text-6xl font-bold text-white mt-2 text-center lg:text-end  mr-6 mb-4">Our Values</h2>

						<div className="  flex flex-col lg:flex lg:flex-row w-full  h-full gap-6 p-6  ">

							<div className=" flex flex-col text-white h-full border-2 rounded  w-full  p-3 text-center bg-blue-800 transition-transform hover:-translate-y-5">
								<h1 className=" font-bold mb-3 text-xl">Innovation</h1>
								<p className="font-sm text-md">Encouraging creativity and the development of new ideas to drive progress and improvement.</p>
								</div>

							<div className=" flex flex-col text-white h-full border-2 rounded  w-full  p-3 text-center bg-blue-800 transition-transform hover:-translate-y-7">
								<h1 className=" font-bold mb-3 text-xl">Integrity</h1>
								<p className="font-sm text-md">Acting with honesty and maintaining strong moral principles within organization.</p>
								</div>

							<div className=" flex flex-col text-white h-full border-2 rounded  w-full  p-3 text-center bg-blue-800 transition-transform hover:-translate-y-7">
								<h1 className=" font-bold mb-3 text-xl">Customer-Centric</h1>
								<p className="font-sm text-md">Putting the needs and satisfaction of customers at the forefront of decision-making.</p>
								</div>	

							<div className=" flex flex-col text-white h-full border-2 rounded  w-full  p-3 text-center bg-blue-800 transition-transform hover:-translate-y-7">
								<h1 className=" font-bold mb-3 text-xl">Transparency</h1>
								<p className="font-sm text-md">Ensuring open and honest communication to organizational stakeholders.</p>
								</div>	

						</div>
						
					</div>
		</div>
	{/* Why TicketHub */}
		<div className="bg-gradient-to-br from-sky-700 to-blue-700 w-full  border-b-2 p-8 flex flex-row mb-4"
				>
					<div className="flex flex-col float-start  mt-6 space-y-8  w-full h-full">
						<h2 className=" text-6xl font-bold text-white mt-2 ">Why TicketHub?</h2>
						<p className="font-semibold p-4 text-start text-white justify-start ">Choose TicketHub as your ticketing partner to ensure secure and seamless ticketing experiences through our globally recognized platform and advanced technology. With TicketHub's extensive marketing tools and detailed analytics, we can optimize sales and enhance the visibility of our events, providing the best possible service to our audience.</p>
					</div>
		</div>
		
			{/* FAQ Accordion */}
			<div className="flex justify-center items-center mt-3 p-3">
			<h1 className="text-4xl text-white font-bold font-sans">FAQs</h1>
			</div>
			<div className=" p-11 flex  justify-center">
		
				<div className="bg-blue-700 text-white rounded-t-lg rounded-b-2xl w-full lg:w-3/4 p-2">

						<div className="collapse collapse-arrow border-b-2 border-white">
  							<input type="radio" name="my-accordion-2" defaultChecked />
  								<div className="collapse-title text-2xl font-medium">What is TicketHub?</div>
  									<div className="collapse-content ">
    									<p className="text-md font-serif"> - TicketHub is your local events guider that showcases all of the events your looking for.</p>
  									</div>
						</div>
						
						<div className="collapse collapse-arrow border-b-2 border-white">
  							<input type="radio" name="my-accordion-2" />
  								<div className="collapse-title text-2xl font-medium">How do I buy ticket's on TicketHub?</div>
  									<div className="collapse-content">
   							 			<p className="text-md font-serif">- You can only purchase tickets by signing up. After logging in, search for an event you want to attend and follow the checkout process buy selecting "Buy Ticket".</p>
  									</div>
						</div>
						<div className="collapse collapse-arrow border-b-2 border-white">
  							<input type="radio" name="my-accordion-2" />
  								<div className="collapse-title text-2xl font-medium">What payment method's are accepted?</div>
  									<div className="collapse-content">
   							 			<p className=" text-md font-serif">- TicketHub accepts all major credit cards and debit cards. As well as digital payment methods such as PayPal. Specific payment options may vary by region.</p>
  									</div>
						</div>
				</div>
			</div>




</div>

	)
}
