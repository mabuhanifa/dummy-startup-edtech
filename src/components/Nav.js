import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg';
export default function Nav() {

  return (
    <nav className="flex justify-between mb-20">
      <div className="flex gap-x-10 justify-center items-center">
        <img src={logo} alt="" className="w-20 rounded"/>
      </div>
      <div className="flex gap-x-10 justify-center items-center font-bold">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/bankjob">Bank Job</Link>
        <Link to="/bcs">BCS Preparation</Link>
        <Link to="/about">About</Link>
        <button className="px-5 py-2 bg-blue-700 text-white font-bold rounded-full">
          SIGN UP
        </button>
      </div>

    </nav>
  );
}
