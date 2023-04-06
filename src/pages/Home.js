import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import About from "./About";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="my-10">
          <Slider />
        </div>
        <About/>
      </div>
    </>
  );
}
