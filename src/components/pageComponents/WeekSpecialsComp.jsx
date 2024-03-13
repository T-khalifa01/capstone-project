import React from 'react'
import DishCards from '../DishCards'
import '../styles/WeekSpecials.css'
import { dishes } from '../Data'

function WeekSpecials() {

  return (
    // <section className='specialsSec'>
    //   <section className='specialsHeadingSec'>
    //     <header className='specialsHeading'>
    //       <h3 className='SectionTitle '>This Week's Specials</h3>
    //       <h3>view online menu</h3>
    //     </header>
    //   </section>
    //   <section className='specialsContainer'>
    //     <section className='specialsCards'>
    //       <DishCards details={dish} />
    //     </section>
    //   </section>
    // </section>
    <section className='specialsSec'>
      <section className='specialsHeadingSec'>
        <header className='specialsHeading'>
          <h3 className='SectionTitle '>This Week's Specials</h3>
          <h3>view online menu</h3>
        </header>
      </section>
      <section className='specialsContainer'>
        <section className='specialsCards'>
          <DishCards dishes={dishes} />
        </section>
      </section>
    </section>
  )
}

export default WeekSpecials