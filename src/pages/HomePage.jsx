import React from 'react'
import Hero from '../components/Hero'
import WeekSpecials from '../components/pageComponents/WeekSpecialsComp'
import About from '../components/pageComponents/AboutComp'
import Testimonials from '../components/pageComponents/Testimonials'

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