import React from 'react';
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className='flex justify-between 2xl:mx-40 my-10'>
        <div>Logo</div>
        <div className='flex gap-5'>
            <a href="/">Home</a>
            <a href="/">Course</a>
            <a href="/">Price</a>
            <a href="/">About</a>
        </div>
        <div className='flex gap-x-5'>
            <button className='px-5 py-2 bg-blue-700 text-white font-bold rounded-full'>SIGN UP</button>
            <div
            className="flex justify-center items-center cursor-pointer "
            
          >
            
              <BsSun className="inline text-xl" />
            
              <FaMoon className="inline text-xl" />
           
          </div>
        </div>
    </nav>
  )
}
