import React from "react";

export default function Nav() {

  return (
    <nav className="flex justify-between mb-20">
      <div className="flex gap-x-10 justify-center items-center">Logo</div>
      <div className="flex gap-x-10 justify-center items-center">
        <a href="/">Home</a>
        <a href="/">Course</a>
        <a href="/">Price</a>
        <a href="/">About</a>
        <button className="px-5 py-2 bg-blue-700 text-white font-bold rounded-full">
          SIGN UP
        </button>
      </div>

    </nav>
  );
}
