"use client"
import Link from "next/link"
import React, {useState} from 'react'

const Nav = () => {

	const [open,setOpen] = useState(false);

	const toggleMenu = () => setOpen(!open);
	
    const topVariants = {

        closed:{
            rotate:0,  
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(255,255,255)", 

        },
    };

    const centeredVariants = {

        closed:{
            opacity:1,  
        },
        open:{
            opacity:0,       
        },
    };

    const bottomVariants = {

        closed:{
            rotate:0,  
        },
        opened:{
            rotate:-45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed:{
            x: "100vw",

        },
        opened: {
            x:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {

        closed:{
            x: -10,
            opacity:0,

        },
        opened: {
            x:0,
            opacity:1,
        },

    }


	return (
		
<div className="w-full h-20 bg-cyan-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full ">
            
			 {/* Logo */}
			 <div className=" flex justify-center items-center  "> 
                      <Link href="/" className=" text-2xl font-bold bg-blue-600 text-white rounded-full p-2">TH</Link>            
                 </div>

				{/* Hamburger Menu */}
				<div className="md:hidden flex items-center">
				<button onClick={toggleMenu} className="flex flex-col gap-2 items-center justify-center w-8 h-8 space-y-1"> 
				<span className={`block rounded h-1.5 w-8 bg-white transition-transform ${open ? "rotate-45" : ""}`} />
				<span className={`block rounded h-1.5 w-8 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
				<span className={`block rounded h-1.5 w-8 bg-white transition-transform ${open ? "-rotate-45" : ""}`} />
				</button>
				</div>


				
				 {/* Links */}
            	<ul className="hidden md:flex  items-center justify-center gap-6 text-white">
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
            	</ul>

            {/* Sign up button */}
            <Link href="/sign-up">
            
			<button className="bg-blue-400 rounded-md p-2 hover:bg-blue-500 text-white">Sign up</button>
			</Link>
		  </div>
        </div>
      </div>


		
		
			
		
	
	)
}

export default Nav
