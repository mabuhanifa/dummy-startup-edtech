import React from "react";
import student from "../images/student.jpg";
export default function About() {
  return (
    <div>
      <div className="md:flex justify-center">
        <div className="w-full">
          <img src={student} alt="" className="" />
        </div>
        <div className="w-full md:mt-40">
          <span>____ WHO WE ARE</span>
          <h1 className="text-4xl font-bold my-10">শিক্ষা হোক সময়োপযোগী</h1>
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
              <h2 className="text-xl font-bold my-5">Total Courses</h2>
              <p className="text-6xl font-black text-indigo-700">5</p>
            </div>
            <div className="md:mx-10 my-10">
              <h2 className="text-xl font-bold my-5">Total Hours Of Video</h2>
              <p className="text-6xl font-black text-indigo-700">240</p>
            </div>
            <div className=" my-10">
              <h2 className="text-xl font-bold my-5">Total Instructor</h2>
              <p className="text-6xl font-black text-indigo-700">7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
