import React from 'react'
import './styles/HeroStyles.css'
import  restauranfood from '../assets/restauranfood.jpg'
function Hero() {
  return (
    <section className='Hero'>
      <section className='heroMain'>
        <section className='heroTextSec'>
            <header>
                <h2 className='DisplayTitle heroTitle'>Little Lemon</h2>
                <h3 className='SubTitle heroSubTitle'>Chicago</h3>
            </header>
            <p className='HeroDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section className='heroPicSec'>
            <img src= {restauranfood} alt='a waiter holding four sandwitches on a plate' style={{height:"20rem", width:"16rem"}}/>
        </section>
      </section>
    </section>
  )
}

export default Hero