import React from 'react'
import Media from 'react-media'
import '../styles/About.css'

function About() {
  return (
    <Media queries={{mobile: "(max-width: 430px)"}}>
      {matches => matches.mobile?
        <section>
          <div>mobile view</div>
        </section>
        :
        <section style={{display:"flex", justifyContent:"center"}}>
          <span style={{display:"grid", width:"min(85%, 1080px)", gridTemplateColumns:"1fr 1fr"}}>
            <span style={{gridColumn:"1", display:"grid", gridTemplateRows:"auto auto", gap:"16px" }}>
              <header style={{gridRow:"1", display:"flex", flexDirection:"column"}}>
                <h2 className='DisplayTitle ' style={{whiteSpace:"nowrap", color:"var(--primaryColour2)", fontSize:"clamp(32px, 532%, 85.3px)"}}>Little Lemon</h2>
                <h3 className='SubTitle ' style={{whiteSpace:"nowrap", color:"var(--primaryColour1)", fontSize:"clamp( 26.7px, 331%, 53.4px)", marginTop:"-16px"}}>Chicago</h3>
              </header>
              <span style={{gridRow:"2", display:"flex", }}>
                <p className='ParagraphText ' style={{color:"var(--primaryColour1)", fontSize:"clamp( 10.7px, 200%, 21.4px)"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum
                </p>
              </span>
            </span>
            <span style={{gridColumn:"2"}}>
              <img src= {require("../../assets/MarioAndAdrianA.jpg")} alt='Mario the owner and Adrian the head chef cooking together.' height={100}/>
              <img src= {require('../../assets/restaurant.jpg')} alt='our dining space.' height={100}/>
            </span>
          </span>
        </section>
      }
    </Media>
  )
}

export default About
