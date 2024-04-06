import React from 'react'
import DishCards from '../DishCards'
import '../styles/WeekSpecials.css'
// import { dishes } from '../Data'
import Media from 'react-media'
import Button from '../Button'
import jsonData from '../../data.json'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function WeekSpecials() {

  const [dishData, setDishData] = useState('Specials');

  const navigate = useNavigate();

  const handlebtnClick = (data) => {
    setDishData(data);
  };
  const handleCMenu = () => {
    navigate("/Menu")
  }


  return (
    <Media queries={{mobile: "(max-width: 430px)"}}>
      {matches => matches.mobile ?
          <section style={{display:"flex", flexDirection:"column", paddingBottom:"20px", gap:"8px"}}>
            <div style={{display:"flex", justifyContent:"center", }}>
              <span style={{display:"flex", flexDirection:"column", width:"95%", overflow:"hidden", gap:"8px", backgroundColor:"var(--highlightColour1)", paddingTop:"16px", paddingBottom:"16px", borderBottom: "1px solid rgba(51, 51, 51, 0.25)"}}>
                <h2 className='SectionTitle' style={{color:"var(--highlightColour2)"}} >ORDER FOR DELIVERY!</h2>
                <span style={{display:"flex", flexDirection:"row", overflowX:"auto", gap:"8px"}}>
                  <Button Label={"specials"} clickFn={handlebtnClick} clickFnD={"Specials"} />
                  <Button Label={"Lunch"} clickFn={handlebtnClick} clickFnD={"Lunch"} />
                  <Button Label={"Main"} clickFn={handlebtnClick} clickFnD={"Main"} />
                  <Button Label={"Desserts"} clickFn={handlebtnClick} clickFnD={"Desserts"} />
                  <Button Label={"A La Carte"} clickFn={handlebtnClick} clickFnD={"A La Carte"} />
                  <Button Label={"Sides"} clickFn={handlebtnClick} clickFnD={"Sides"}/>
                </span>
              </span>
            </div>

            <div style={{display:"flex", justifyContent:"center", }}>
              <span style={{width:"95%", display:"flex", justifyContent:"center", flexDirection:"column", gap:"10px" }}>
                <h2 className='SectionTitle' style={{color:"var(--primaryColour1)", }}>This Week's Specials</h2> 
                <span style={{display:"flex", flexDirection:"column", borderBottom:"2px solid rgba(51, 51, 51, 0.25)", borderTop:"1px solid rgba(51, 51, 51, 0.25)", justifyContent:"center"}}>
                  <DishCards dishes={jsonData.dishes[dishData]}/>
                </span>
              </span>
            </div>
          </section>
        :
          <section style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
            <span style={{display:"grid", gridTemplateRows:"64px auto", width:"min(860px, 80%)", paddingTop:"20px", paddingBottom:"20px", }}>
              <header style={{gridRow:"1", display:"flex", justifyContent:"space-between", alignItems:"center", height:"40px", }}>
                <h2 className='SectionTitle' style={{color:"var(--primaryColour1)", }}>This week's Specials</h2>
                <Button Label={"Online Menu"} clickFn={handleCMenu} />
              </header>
              <span style={{gridRow:"2", display:"grid", gridTemplateColumns:"repeat(3, minMax( 100px, 250px))", gap:"6.3953%"}}>
                <DishCards dishes={jsonData.dishes[dishData]}/>
              </span>
            </span>
          </section>
        }
    </Media>
  )
}

export default WeekSpecials;