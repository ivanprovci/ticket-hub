export default function Home() {
	return (


// Hero section
<div>	
	<div className="overflow-hidden  bg-cover bg-no-repeat  text-center "
  		style={{
		backgroundImage: "url('')",
	 	height: '400px'}}>
  	<div className=" bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden "
    	style= {{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
    	<div className="flex h-full items-center justify-center">
      	<div className="text-white">
        	<h2 className="mb-4 text-4xl font-semibold">Welcome to Ticket Hub</h2>
        	<h4 className="mb-6 text-xl font-semibold">Check out to see all events near you!</h4>
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


{/* Event Cards */}
<div className="flex flex-col mt-6 p-8 lg:px-24  space-y-6 justify-center items-center ">

<div className="bg-blue-500 w-full  h-64 rounded-lg text-center space-y-24 p-6  ">
	<h1 className=" font-bold  text-4xl text-start "> Event Title</h1>
		<button
          type="button"
          className=" rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Check Event
        </button>
</div>

<div className="bg-blue-500 w-full h-64 rounded-lg text-center space-y-24 p-6  ">
	<h1 className=" font-bold  text-4xl text-start"> Event Title</h1>
		<button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Check Event
        </button>

</div>

<div className="bg-blue-500 w-full h-64 rounded-lg text-center space-y-24 p-6  ">
	<h1 className=" font-bold  text-4xl text-start"> Event Title</h1>
		<button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Check Event
        </button>

</div>



</div>






</div>  

	)
}
