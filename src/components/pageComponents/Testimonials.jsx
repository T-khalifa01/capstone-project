import React from 'react'
import Media from 'react-media'
import CustomersCards from '../UserRatingCards'
import "../styles/Testimonials.css"
import jsonData from "../../data.json"
//import { customers } from '../Data'
// import AtlasSparta from '../../assets/userpics/AtlasSparta.png';
// import KimSoun from '../../assets/userpics/KimSoun.png';
// import NateWillson from '../../assets/userpics/NateWillson.png';
// import preciousNkenna from '../../assets/userpics/preciousNkenna.png';

function Testimonials() {

  const {customers} = jsonData
  return (
    <Media queries={{mobile: "(max-width: 430px)"}}>
      {matches => matches.mobile?
        <section style={{backgroundColor:"var(--highlightColour1)", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottom:"2px solid rgba(51, 51, 51, 0.25)", borderTop:"1px solid rgba(51, 51, 51, 0.25)", }}>
          <span style={{display:"grid", width:"90%", height:"90%", gridTemplateRows:"repeat(2, auto)", gap:"32px",}}>
            <span style={{gridRow:"1", display:"flex", flexDirection:"row", justifyContent:"center",}}>
              <h2 className='SectionTitle ' style={{color:"var(--primaryColour1)", paddingTop:"24px", fontSize:"clamp(16px, 6.5vw, 26.7px)" }}>Testimonials</h2>
            </span>
            <span style={{gridRow:"2", display:"grid", gridTemplateRows:"repeat(auto-fit, auto)", gap:"20px", paddingBottom:"40px" }}>
              <CustomersCards customers={customers} />
            </span>
          </span>
        </section>
        :
        <section className='' style={{display:"flex", backgroundColor:"var(--highlightColour1)", justifyContent:"center", alignItems:"center",}}>
          <span style={{display:"grid", width:"min(85%, 1080px)", height:"90%", gridTemplateRows:"repeat(2, auto)", gap:"32px", }}>
            <header className='' style={{gridRow:"1", display:"flex", justifyContent:"center", }}>
              <h2 className='SectionTitle ' style={{color:"var(--primaryColour1)", fontSize:"clamp(20px, 4vw, 40px)", paddingTop:"32px", }}>Testimonials</h2>
            </header>
            <div className='' style={{gridRow:"2", display:"grid", gridAutoFlow:"column", gap:"16px", overflow:"hidden", borderRadius:"16px", marginBottom:"24px", overflowX: "auto"}}>
              <CustomersCards customers={customers} />
            </div>
          </span>
        </section>
      }
    </Media>
  )
}

export default Testimonials