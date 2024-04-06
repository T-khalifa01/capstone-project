import './styles/DishCards.css'
import Media from 'react-media'
import { Link } from 'react-router-dom'
import DynamicFontSize from './DynamicFontSize'


function DishCards(props) {
  let dishes = props.dishes
  let crdH = DynamicFontSize('dshcrd', 200, 512, 512, 2);
  return(
    <Media queries={{mobile: "(max-width: 430px)",}}>
      {matches => matches.mobile ?
      <>
        {dishes.map((dish, index) => (
          <article key={index} style={{backgroundColor:"var(--highlightColour1)", width:"min(100%, 396px)", height:"123px", display:"flex", justifyContent:"center", alignItems:"center", }}>
            <span style={{display:"grid", gridTemplateColumns:"repeat(12, 1fr)", width:"95%", height:"95%", borderBottom:"1px solid #FBDABB"}}>
              <span style={{gridColumn:"1/span 9", gap:"8px", display:"flex", flexDirection:"column"}}>
                <h3 className='CardTitle' style={{color:"var(--highlightColour2)", fontSize:"18px"}}>{dish.name}</h3>
                <p className='ParagraphText' style={{color:"var(--primaryColour1)", textOverflow:"ellipsis", fontSize:"16px", overflow:"hidden", WebkitBoxOrient:"vertical", display:"-webkit-box", WebkitLineClamp:"2",}}>{dish.description}</p>
                <h3 className='LeadText' style={{color:"var(--secondaryColour1)", fontSize:"18px"}}>{`${'$ '}${dish.price}`}</h3>
              </span>
              <span style={{gridColumn:"10/span 3", width:"100%", height:"90%", display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                <img src= {require(`../assets/dishPics/${dish.dishPicSrc}`)} alt={dish.alt} height={"83px"} width={"83px"}/>
              </span>
            </span>
          </article>
        ))}
      </>
      :
      <>
        {dishes.map((dish, index) => (
            <article id='dshcrd' key={index} className='' style={{overflow:"hidden", backgroundColor:"var(--highlightColour1)", display:"grid", gridTemplateRows:"min(50%, 256px) min(50%, 256px)", height: {crdH}, width:"clamp(100px, 100%, 256px)", borderRadius:"16px",  }}>

              <span className='' style={{gridColumn:"1",  display:"flex", width:"min(100%, 250px)", height:"min(100%, 250px)", overflow:"hidden"}}>
                <img src= {require(`../assets/dishPics/${dish.dishPicSrc}`)} alt={dish.alt} height={"100%"} width={"100%"} style={{overflow:"hidden"}}/>
              </span>

              <span className='' style={{gridRow:"2", width:"90%", height:"90%", display:"grid", justifySelf:"center", alignSelf:"center", gridTemplateRows:"min(40px, 17.3913%) min(150px, 65.2174%) min(40px, 17.3913%)", }}>

                <span className='' style={{gridRow:"1", width:"100%", height:"100%", display:"grid", gridTemplateColumns:"repeat(12, 1fr)", alignItems:"center"}}>
                  <h3 id='crdtitl' className=' CardTitle' style={{gridColumn:"1/span 7", display:"flex", fontSize:"clamp(12px, 140%, 24px)", color:"var(--primaryColour1)", whiteSpace:"nowrap"}}>{dish.name}</h3>
                  <h3 id='crdprce' className=' HighlightText' style={{gridColumn:"9/span 4", display:"flex", fontSize:"clamp(10.7px, 150%, 21.4px)", color:"var(--highlightColour2)", whiteSpace:"nowrap", justifyContent:"flex-end"}}>{`${'$  '}${dish.price}`}</h3>
                </span>

                <span className='' style={{gridRow:"2", overflow:"hidden", width:"100%", height:"100%", display:"flex"}}>
                  <p className=' ' style={{fontSize:"clamp( 10.7px, 132%, 21.4px)", overflow:"hidden", color:"var(--primaryColour1)"}}>{dish.description}</p>
                </span>

                <span className='' style={{gridRow:"3", alignItems:"center", width:"100%", height:"100%", display:"flex"}}>
                  <Link to={"/OrderOnline"} className='LeadText' style={{ textDecoration:"none", color:"var(--highlightColour2)", whiteSpace:"nowrap", fontSize:"clamp(12px, 150%, 24px)",}} >Order For Delivery</Link>
                </span>

              </span>

            </article>
          ))}
      </>
    }
    </Media>
  )
}

export default DishCards

// function DishCards(props) {
//   const dishes = props.dishes
//   const listingDish = dishes.map((dish) => {
//     return(
//       <article key={dish.id} className='dishcards' style={{overflow:"hidden", boxShadow:"-16, 16, 8, 0 rgba(0, 0, 0, 0.25)"}}>
//         <span className='dishImgSec' style={{width:"100%", overflow:"hidden"}}>
//           <img src= {require(`../assets/dishPics/${dish.dishPicSrc}`)} alt={dish.alt} height={"100%"} width={"100%"} style={{overflow:"hidden"}}/>
//         </span>
//         <span className='dishTextSec'>
//           <span className='dishNameSec'>
//             <h3 className='dishName CardTitle'>{dish.name}</h3>
//             <h3 className='dishPrice HighlightText'>{dish.price}</h3>
//           </span>
//           <span className='dishDescSec'>
//             <p className='dishDesc HighlightText'>{dish.description}</p>
//           </span>
//           <span className='dishButtonSec'>
//             <a href=' ' className='LeadText dishLink'>Order For Delivery</a>
//           </span>
//         </span>
//       </article>
//     )
//   })
//   return (
//     <>
//       {listingDish}
//     </>
//   )
// }

// export default DishCards