"use client";
import Link from "next/link";
import React, { useState } from 'react';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';
const pb = new PocketBase(pocketbaseUrl);

const SigninPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      console.log('User logged in successfully:', authData);
      setSuccess('Login successful!');
      setTimeout(() => {
        router.push('/'); 
      }, 2000);
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="bg-sky-700 w-full p-8 flex justify-center items-center" style={{height:'600px'}}>
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 gap-2 border-2 border-cyan-300 flex flex-col justify-center items-center mt-10 mb-10 p-8 bg-indigo-500 shadow-md rounded-lg text-white">
        <h1 className="mb-1 text-white font-bold text-4xl">Log in!</h1>
        <hr className="w-1/3 h-0 bg-cyan-300 rounded"></hr>

        {success && <div className="text-green-500">{success}</div>} {/* Display success message */}
        {error && <div className="text-red-500">{error}</div>}

        <div className="mt-4 mb-2 w-full md:w-2/3 p-0 flex flex-col text-center">
          <label className="text-lg pb-1">Email</label>
          <input type="email" 
            className="bg-white rounded-md text-black p-1" 
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2 w-full md:w-2/3 p-0 flex flex-col text-center">
          <label className="text-lg pb-1">Password</label>
          <input type="password"
            className="bg-white rounded-md text-black p-1" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="p-2 mt-2 mb-4 w-1/2 bg-sky-500 hover:bg-blue-600 hover:border-2 hover:border-white rounded">Submit</button>
        <hr className="w-1/3 h-0 bg-cyan-300 rounded"></hr>

        <div className="w-full mt-4 p-2 text-center">
          <span>No account? Click to <Link className="text-blue-400 underline" href="/sign-up">Sign up</Link></span>
        </div>
      </form>
    </div>
  )
}

export default SigninPage;
