import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <div className="2xl:px-40 xl:px-20 px-10 py-10">
        <Nav />
        <Hero />
        <div className="my-10">
          <Slider />
        </div>
      </div>
      <Footer />
    </>
  );
}
