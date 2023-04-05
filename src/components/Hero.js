import React from "react";

export default function Hero() {
  return (
    <div className="back-ground">
      <div className="px-20">
        <div>
          <h1 className="text-[75px] font-bold">
            পড়াশুনা <br /> এখন <br />
            আরো সহজ
          </h1>
        </div>
        <div>
          <button className="px-10 py-3 bg-blue-700 rounded-md mt-10 hover:bg-indigo-700 text-white uppercase font-bold mb-40">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
