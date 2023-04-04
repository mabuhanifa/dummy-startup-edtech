import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <div className='my-10'>
        <Slider />
        </div>
        <Footer />
    </div>
  )
}
