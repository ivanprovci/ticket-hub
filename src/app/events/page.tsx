"use client"
// This is the Events search page. Users should be allowed to prompt search filters according to their location, date abd type of event.
// Once selected filters search button should display results as cards with corresponding options.
import React, { useState } from 'react';

	const categories = ['Category1', 'Category2', 'Category3', 'Category4']; 

	const SearchForm: React.FC = () => {
		const [isCategoryOpen, setIsCategoryOpen] = useState(false); 
		const [selectedCategory, setSelectedCategory] = useState('All categories'); 
		const [location, setLocation] = useState(''); 
		
		const toggleCategoryDropdown = () => { setIsCategoryOpen(!isCategoryOpen); }; 
		
		const handleCategoryClick = (category: string) => { setSelectedCategory(category); 
		setIsCategoryOpen(false); }; 
		
		const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => { setLocation(event.target.value); }; 
		
		const handleSubmit = (event: React.FormEvent) => { 
		event.preventDefault(); 
		console.log(`Category: ${selectedCategory}, Location: ${location}`);
		 }; 
		
		
		
	return (
		
		// Search filter form
		<form onSubmit={handleSubmit} className=" w-full lg:w-1/2 gap-2 flex justify-center items-center mx-auto mt-10 mb-4 p-8 bg-blue-600 shadow-md rounded-lg">
				<div className="mb-4"> 
					<label htmlFor="location" className="block text-md font-medium text-black mb-2"> 
						Location 
					</label>
		 			<input type="text" id="location" value={location} onChange={handleLocationChange} className="w-full bg-white px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter location" /> 
				</div> 
		{/* Categories Filter */}
			<div className="mb-4 "> 
					<label htmlFor="category" className="block text-md font-medium text-black mb-2">
 						Category 
					</label> 
						<button 
							type="button" 
							onClick={toggleCategoryDropdown} 
							className=" flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" > 
							{selectedCategory} 
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg> 	
						</button> 
	
						{isCategoryOpen && ( 
				<div className="absolute z-10  mt-2 bg-white rounded-md shadow-lg"> 
					<ul className="py-1 text-sm text-gray-700"> 
						{categories.map((category) => 
							(<li key={category}> 
								<button 
									type="button" 
									onClick={() => handleCategoryClick(category)} 
									className="block w-full px-4 py-2 text-left hover:bg-gray-100" > 
									{category} 
								</button> 
							</li> ))} 
						</ul>
 				</div>)} 
			</div> 
						<div className="mt-4 ">
						<button type="submit" className="w-full px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" > Search 
						</button> 
						</div>				
		</form>
		);
	}

	export default function Events() {
		return(
			// Parent div first, then Search div, then results div
	<div>
		<div className="bg-sky-500 w-full justify-center items-center text-center p-8 flex-col"
					style={{height:'400px'
					}}>
						<h2 className=" text-4xl font-bold text-white mt-2">Search for an event your looking for!</h2>
						<SearchForm/>
		</div>


				{/* Search Results Div */}
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
