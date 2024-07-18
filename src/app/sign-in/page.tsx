"use client"
import Link from "next/link";
import React, { useState } from 'react'

const SigninPage: React.FC = () => {

const [email, setEmail] = useState('');

const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    console.log({email, password});

};


  return (
    <div className="bg-sky-700 w-full p-8 flex justify-center items-center" style={{height:'600px'}}>

        <form  onSubmit={handleSubmit} className="w-full lg:w-1/2 gap-2  border-2 border-cyan-300 flex flex-col justify-center items-center  mt-10 mb-10 p-8 bg-indigo-500 shadow-md rounded-lg text-white">
            <h1 className="mb-1  text-white font-bold text-4xl">Log in!</h1>
            <hr className="w-1/3 h-0 bg-cyan-300 rounded"></hr>

                 <div className=" mt-4 mb-2 w-full md:w-2/3 p-0  flex flex-col text-center">
                    <label className="text-lg pb-1">Email</label>
                        <input type="text" 
                        className="bg-white  rounded-md text-black p-1 " placeholder="Enter email address" 
                        value={email}
                        onChange= {(e)=> setEmail(e.target.value)}
                        />
                 </div>

                 <div className="mb-2 w-full md:w-2/3 p-0  flex flex-col text-center">
                    <label className=" text-lg pb-1"> Password</label>
                         <input type="text"
                         className="bg-white rounded-md text-black p-1" placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                 </div>

                 <button type="submit" className="p-2 mt-2 mb-4 w-1/2 bg-sky-500 hover:bg-blue-600 hover:border-2  hover:border-white rounded">Submit</button>

                
                 <hr className="w-1/3 h-0 bg-cyan-300 rounded"></hr>

                <div className="w-full  mt-4 p-2 text-center">
                   <span> 
                 <p className="font-sans text-sm"/>No account? Click to <Link className="text-blue-400 underline" href="/sign-up">Sign up </Link>
                 </span>
                 </div>
        </form>

    </div>
  )
}

export default SigninPage