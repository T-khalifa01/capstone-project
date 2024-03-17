import React from 'react'
import Media from 'react-media';
import { fullStrSvg, halfStrSvg, noStrSvg } from './Data';
import './styles/CustomersCards.css'


function CustomersCards(props) {
  let customers = props.customers;

  let ratingLevels = {0.5:halfStrSvg, 1:fullStrSvg, 0:noStrSvg};

  let reviews = customers.map((customer) => {
    return(
      <Media queries={{mobile: "(max-width: 430px)"}}>
        {matches => matches.mobile ?
          <article className='' key={customer.id} style={{display:"flex",
                                                          flexDirection:"column",
                                                          backgroundColor:"var(--highlightColour2)",
                                                          width: "min(100%, 387px)",
                                                          height: "160px",
                                                          borderRadius:"1rem",
                                                          justifyContent:"center",
                                                          alignItems:"center",
                                                          }} >
            <span style={{display:"grid", gridTemplateRows: "1rf, 4fr", width: "95%", height: "90%", flexGrow:"0",}}>
              <span className='' style={{display:"flex", flexDirection:"row",gridRow:"1", paddingTop:"px", paddingLeft:"24px", alignItems:"center" }}>
                {customer.rating.map((ratingPoint, index) =>
                  <span className='' key={index} >{ratingLevels[ratingPoint]}</span>
                )}
              </span>
              <span style={{gridRow:"2",display:"grid", gridTemplateColumns:"repeat(12, 1fr)", height:"96px" }}>
                <span className='' style={{gridColumn:"1/span 4", paddingLeft:"8px"}}>
                  <img style={{height:"90%", width:"90%", paddingLeft:"8px"}} src= {customer.profilePic} alt='a waiter holding four sandwitches on a plate' />
                </span>
                <span className='' style={{gridColumn:"5/span 8", paddingLeft:"8px", display:"grid", height:"100%", gridTemplateRows:"24px 66px", gap:"6px", }}>
                  <h3 className='CardTitle' style={{gridRow:"1", color:"var(--secondaryColour2)", fontSize:"clamp(12px, 5vw, 24px)", display:"flex", flexBasis:"24px", flexGrow:"1"}}>{customer.fullname}</h3>
                  <p className='ParagraphText ' style={{gridRow:"2", fontSize:"clamp(16px, 5.5vw, 20px)", color:"var(--highlightColour1)", overflow:"hidden", textOverflow:"ellipsis", WebkitLineClamp:"3", WebkitBoxOrient:"vertical", display:"-webkit-box",}}>{customer.comments}</p>
                </span>
              </span>
            </span>
          </article>
          :
          <article className='' key={customer.id} style={{ display:"flex",
                                                                    flexDirection:"column",
                                                                    backgroundColor:"var(--highlightColour2)",
                                                                    height:"200px",
                                                                    width:"300px",
                                                                    borderRadius:"16px",
                                                                    justifyContent:"center",
                                                                    alignItems:"center",}}>
            <span style={{display:"grid", gridTemplateRows:"88px 72px", width:"85%", height:"85%", gap:"10px" }}>
              <span style={{gridRow:"1", display:"grid", gridTemplateColumns:"repeat(12, 1fr)", }}>
                <span style={{gridColumn:"1/span 4", display:"flex" , justifyContent:"center", alignItems:"center"}}>
                  <img src= {customer.profilePic} alt='a waiter holding four sandwitches on a plate' style={{height:"90%", width:"90%", fontSize:"8px"}}/>
                </span>
                <span style={{gridColumn:"6/span 7", display:"grid", gridTemplateRows:"repeat(2, 1fr)"}}>
                  <span className='' style={{gridRow:"1", display:"flex", flexDirection:"row"}}>
                    {customer.rating.map((ratingPoint, index) =>
                      <span key={index} className='' style={{}} >{ratingLevels[ratingPoint]}</span>
                    )}
                  </span>
                  <h3 className='CardTitle' style={{gridRow:"2", display:"flex", color:"var(--secondaryColour2)", flexDirection:"row", alignItems:"flex-start" }}>{customer.fullname}</h3>
                </span>
              </span>
              <span className='' style={{gridRow:"2"}}>
                <p className='ParagraphText ' style={{color:"var(--highlightColour1)", textOverflow:"ellipsis", fontSize:"clamp(16px, 115%, 20px)", height:"100%", overflow:"hidden", WebkitBoxOrient:"vertical", display:"-webkit-box", WebkitLineClamp:"3",}}>{customer.comments}</p>
              </span>
            </span>
          </article>
        }
      </Media>
    )
  })
return (
  <>
    {reviews}
  </>
)}

export default CustomersCards