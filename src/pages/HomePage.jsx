import React from 'react'
import Hero from '../components/Hero'
import WeekSpecials from '../components/WeekSpecials'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

function HomePage() {
  return (
    <>
      <Hero/>
      <WeekSpecials/>
      <Testimonials/>
      <About/>
    </>
  )
}

export default HomePage