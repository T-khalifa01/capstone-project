import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section className='aboutSec'>
        <section className='aboutMain'>
            <section className='aboutTextSec'>
                <header className='aboutHeader'>
                    <h2 className='DisplayTitle aboutTitle'>Little Lemon</h2>
                    <h3 className='SubTitle aboutSubTitle'>Chicago</h3>
                </header>
                <section className='aboutDescSec'>
                    <p className='ParagraphText aboutDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </section>
            </section>
            <section className='aboutImgSec'>
                <img src= 'restauranfood.jpg' alt='a waiter holding four sandwitches on a plate' height={100}/>
                <img src= 'restauranfood.jpg' alt='a waiter holding four sandwitches on a plate' height={100}/>
            </section>
        </section>
    </section>
  )
}

export default About