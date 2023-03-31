import React from 'react'

export default function Nav() {
  return (
    <nav className='flex justify-between 2xl:mx-40 my-10'>
        <div>Logo</div>
        <div className='flex gap-5'>
            <a href="">Home</a>
            <a href="">Course</a>
            <a href="">Price</a>
            <a href="">About</a>
        </div>
        <div>
            <button className='px-5 py-2 bg-blue-700 text-white font-bold rounded-full'>SIGN UP</button>
        </div>
    </nav>
  )
}
