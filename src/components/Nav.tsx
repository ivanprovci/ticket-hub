"use client"
import Link from "next/link"
import React, {useState} from 'react'

const Nav = () => {

	const [open,setOpen] = useState(false);

	const toggleMenu = () => setOpen(!open);
	
	return (
		
<div className="w-full h-20 bg-cyan-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full ">
            
			 {/* Logo */}
			 <div className=" flex justify-center items-center  "> 
                      <Link href="/" className=" text-2xl font-bold bg-blue-600 text-white rounded-full p-2">TH</Link>            
                 </div>

				{/* Hamburger Menu */}
				<div className="md:hidden flex items-center">
				<button onClick={toggleMenu} className="flex flex-col gap-2 items-center justify-center w-8 h-8 space-y-1"> 
				<span className={`block rounded h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${open ? "rotate-45  translate-y-3.5" : ""}`} />
				<span className={`block rounded h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
				<span className={`block rounded h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
				</button>
				</div>


				
				 {/* Links */}
            	<ul className={ ` md:flex text-center items-center justify-center gap-6 text-white ${open ? "flex flex-col absolute top-20 right-0 bg-cyan-500 w-full p-4" : "hidden md:flex"}`}>
              	<li>
                	<Link href="/events">
                 	 <p className="px-2 hover:underline">Events</p>
                	</Link>
              	</li>
              	<li>
                	<Link href="/about">
                 	 <p className="px-2 hover:underline">About Us</p>
                	</Link>
              	</li>
            	

            {/* Sign up button */}
            <Link href="/sign-up">
            
			<button className="bg-blue-500 rounded-md p-2 hover:bg-blue-700 text-white">Sign up</button>
			</Link>

            </ul>
		  </div>
        </div>
      </div>


		
		
			
		
	
	)
}

export default Nav
