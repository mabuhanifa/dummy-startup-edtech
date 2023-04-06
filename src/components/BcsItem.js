import React from "react";
import bcs from "../images/bcs.avif";
export default function BcsItem() {
  return (
    <div className="md:flex justify-center">
      <div className="w-full">
        <img src={bcs} alt="" className="" />
      </div>
      <div className="w-full mt-10">
        <h1 className="text-4xl font-bold my-10">বিসিএস প্রিলি লাইভ কোর্স</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          tenetur incidunt officia esse explicabo tempora soluta quis. Cum
          delectus ut magnam, totam corrupti quia dolorum amet, autem a
          laudantium rem quidem aspernatur? Odio, incidunt perferendis
          accusantium quisquam provident quibusdam enim deserunt perspiciatis
          totam exercitationem eum sequi in nisi ab numquam!
        </p>
        <div className="md:flex mt-5">
          <div className=" my-10">
            <h2 className="text-xl font-bold my-5">Total Videos</h2>
            <p className="text-6xl font-black text-indigo-700">75</p>
          </div>
          <div className="md:mx-20 my-10">
            <h2 className="text-xl font-bold my-5">Total Hours Of Video</h2>
            <p className="text-6xl font-black text-indigo-700">50</p>
          </div>
          <div className=" my-10">
            <h2 className="text-xl font-bold my-5">Total PDF</h2>
            <p className="text-6xl font-black text-indigo-700">27</p>
          </div>
        </div>
      </div>
    </div>
  );
}
