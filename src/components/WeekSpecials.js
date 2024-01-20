import React from 'react'
import DishCards from './DishCards'
import './styles/WeekSpecials.css'

function WeekSpecials() {
    const dish = [
        {name: "Greek Salad", price: "12.99", dishPic:"somepicture", description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Bruchetta", price: "5.99", dishPic:"somepicture", description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Lemon Dessert", price: "5.00", dishPic:"somepicture", description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Bruchetta", price: "5.99", dishPic:"somepicture", description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Lemon Dessert", price: "5.00", dishPic:"somepicture", description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]

  return (
    <section className='specialsSec'>
      <section className='specialsHeadingSec'>
        <header className='specialsHeading'>
          <h3 className='SectionTitle '>This Week's Specials</h3>
          <h3>view online menu</h3>
        </header>
      </section>
      <section className='specialsContainer'>
        <section className='specialsCards'>
          <DishCards details={dish} />
        </section>
      </section>
    </section>
  )
}

export default WeekSpecials