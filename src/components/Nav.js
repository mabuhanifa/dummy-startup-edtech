import React from "react";
import logo from '../images/logo.jpeg';
export default function Nav() {

  return (
    <nav className="flex justify-between mb-20">
      <div className="flex gap-x-10 justify-center items-center">
        <img src={logo} alt="" className="w-20 rounded"/>
      </div>
      <div className="flex gap-x-10 justify-center items-center">
        <a href="/">Home</a>
        <a href="/">Courses</a>
        <a href="/">Bank Job</a>
        <a href="/">BCS Preparation</a>
        <a href="/">About</a>
        <button className="px-5 py-2 bg-blue-700 text-white font-bold rounded-full">
          SIGN UP
        </button>
      </div>

    </nav>
  );
}
