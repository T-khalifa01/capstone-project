import React from 'react'
import Media from 'react-media'
import { Fragment } from 'react'
import './styles/HeroStyles.css'
import  restauranfood from '../assets/restauranfood.jpg'
import DynamicFontSize from './DynamicFontSize'
import Button from './Button'
import { useNavigate } from 'react-router-dom'


function Hero() {

  //handling button onClick event
    const navigate = useNavigate();
    
    const handleBtnClick = () => {
      navigate("/Reservations")
    }

  //styling layout desk
    let hero = {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "var(--primaryColour1)",
      minWidth: "280px",
    }
    let heroMain = {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      // gridTemplateRows: "repeat(3, max(155.6))",
      gridTemplateRows: "2fr 2fr 1fr",
      width: "min(860px, 80vw)",
    }
    let heroHeaderSec = {
      display: "flex",
      gridColumn: "1/span 4",
      gridRow: "1",
      flexDirection: "column",
      justifyContent: "center"
    }
    let heroTitle = {
      display: "flex",
      color: "var(--primaryColour2)",
      fontFamily: "var(--SecondaryFontFamily)",
      whiteSpace: "nowrap",
      fontSize: DynamicFontSize('titleContainerDesk', 60, 72.7, 85.4, 0.19),
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      paddingTop: "16px",
    }
    let subTitle = {
      display: "flex",
      color: "var(--highlightColour1)",
      fontFamily: "var(--SecondaryFontFamily)",
      whiteSpace: "nowrap",
      fontSize: "clamp(35px, 5vw, 53.4px)",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      marginTop: "-16px",
    }
    let heroDescSec = {
      gridColumn: "1/span 4",
      gridRow: "2",
      display: "flex",
      paddingTop: "16px",
      // alignItems:"center",
    }
    let herodesc = {
      display: "flex",
      color: "var(--highlightColour1)",
      fontSize: "clamp( 16.0px, 2vw , 21.4px)",
      // fontFamily: "var(--primaryFontFamily)",
      // fontSize: DynamicFontSize('descContainerTab', 10.7, 16.05, 21.4, 0.12),
      // fontStyle: "normal",
      // fontWeight: "400",
      // lineHeight: "32px",/*(16, 32)*/
      // paddingTop: "16px",
    }
    let btnSec = {
      gridColumn: "1/span 2",
      gridRow: "3",
      display: "flex",
      alignItems: "flex-start",
    }
    let heroPicSec = {
      display:"flex",
      gridColumn: "6/span 3",
      gridRow: "1/span 3",
      justifyContent: "center",
      alignItems: "center",
    }
    let heroPic = {
      borderRadius: "16px",
      display: "flex",
      width: "90%",
      height: "90%",
    }

    //setting picture hieght
    // let picwidth = DynamicFontSize('heropicture', 152, 204, 256, 0.9);
    // let picheight = () => {
    //   let wWidth = Number.parseFloat(picwidth);
    //   let hHeight = (wWidth * 1.7)  + "px";

    //   return (hHeight)
    // };

  //styling layout tab
    let titleTab = {
      display: "flex",
      color: "var(--primaryColour2)",
      fontFamily: "var(--SecondaryFontFamily)",
      whiteSpace: "nowrap",
      fontSize: DynamicFontSize('titleContainerTab', 40, 60, 72.7, 0.19),
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      paddingTop: "16px",
    }
    let heroPicTab = {
      borderRadius: "16px",
      display: "flex",
      width: "90%",
      height: DynamicFontSize('heropicTab', 152, 204, 306, 1.2),
      paddingTop: "8px",
      paddingBottom: "8px",
    }
    let herodescTab = {
      display: "flex",
      color: "var(--highlightColour1)",
      fontSize: "clamp( 16.0px, 2vw , 21.4px)",
    }

  //styling layout mobile
    let heroMainMobile = {
      display: "grid",
      gridTemplateRows: "repeat(7, 1fr)",
      gridTemplateColumns: "repeat(8, 1fr)",
      width:"90vw"
    }
    let headerSecMobile = {
      display: "flex",
      gridColumn: "1/span 8",
      gridRow: "1/span 2",
      flexDirection: "column",
    }
    let titleMobile = {
      display: "flex",
      color: "var(--primaryColour2)",
      fontFamily: "var(--SecondaryFontFamily)",
      whiteSpace: "nowrap",
      fontSize: "clamp(40px, 14vw, 64px)",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      paddingTop: "16px",
    }
    let subTitleMobile = {
      display: "flex",
      color: "var(--highlightColour1)",
      fontFamily: "var(--SecondaryFontFamily)",
      whiteSpace: "nowrap",
      fontSize: "clamp(26.7px, 7vw, 40px)",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      marginTop: "-16px",
    }
    let heroBody ={
      display: "flex",
      gridColumn:"1/span 8",
      gridRow: "3/span 5",
      flexDirection: "column",
      paddingTop: "24px",
    }
    let descSecMobile = {
      display : "grid",
      // gridColumn: "1/span 8",
      // gridRow: "3/span 4",
      justifyContent: "space-between",
      gridTemplateColumns: "repeat(12, 1fr)",
    }
    // let PicSecMobile = {
    //   display: "flex",
    //   gridColumn: "6/span 3",
    //   gridRow: "4/span 7",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }
    let btnSecMobile = {
      display: "flex",
      // gridColumn: "1/span 4",
      // gridRow: "7/span 1",
      alignItems: "flex-start",
      paddingTop: "16px",
    }
    let herodescMobile = {
      display: "flex",
      gridColumn: "1/span 7",
      color: "var(--highlightColour1)",
      fontSize: "clamp(16px, 4vw, 21.4px)",
      // paddingTop: "16px",
    }
    let heroPicMobile = {
      gridColumn: "8/span 5",
      justifySelf: "center",
      borderRadius: "16px",
      display: "flex",
      alignSelf : "center",
      width: "90%",
      height: DynamicFontSize('hpicMobile', 64, 152, 200, 1.1),
      //height: "90%",
    }

  return (
    <Media queries={{
      mobile: "(max-width: 430px)",
      tablet: "(min-width: 431px) and (max-width: 834px)",
      desktop: "(min-width: 835px)",
    }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
            <section style={hero}>
              <span style={heroMainMobile}>
                <header style={headerSecMobile} id='titleContainerMobile'>
                  <h2 className='DisplayTitle' style={titleMobile}>Little Lemon</h2>
                  <h3 className='SubTitle' style={subTitleMobile}>Chicago</h3>
                </header>
                <span style={heroBody}>
                  <span  style={descSecMobile}>
                    <p className='ParagraphText' style={herodescMobile}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <img id='hpicMobile' className='' style={heroPicMobile} src= {restauranfood} alt='a waiter holding four sandwitches on a plate' />
                  </span >
                  <span style={btnSecMobile}>
                    <Button Label={"Reserve Tabel"} size={"sm"} clickFn={ handleBtnClick} />
                  </span>
                </span>
              </span>
            </section>
          )}

          {matches.tablet && (
            <section style={hero}>
              <span style={heroMain}>
                <header id='titleContainerTab' style={heroHeaderSec}>
                  <h2  style={titleTab}>Little Lemon</h2>
                  <h3 style={subTitle}>Chicago</h3>
                </header>
                <span id='descContainerTab' style={heroDescSec}>
                  <p style={herodescTab} className='ParagraphText'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </span>
                <span style={btnSec}>
                  <Button Label={"Reserve Tabel"} clickFn={ handleBtnClick}/>
                </span>
                <span id='heropicTab' style={heroPicSec} >
                  <img style={heroPicTab} src= {restauranfood} alt='a waiter holding four sandwitches on a plate' />
                </span>
              </span>
            </section>
          )}

          {matches.desktop && (
            <section style={hero}>
              <span style={heroMain}>
                <header id='titleContainerDesk' style={heroHeaderSec}>
                  <h2 style={heroTitle}>Little Lemon</h2>
                  <h3 style={subTitle}>Chicago</h3>
                </header>
                <span style={heroDescSec}>
                  <p style={herodesc} className='ParagraphText'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </span>
                <span style={btnSec}>
                  <Button Label={"Reserve Tabel"} clickFn={ handleBtnClick}/>
                </span>
                <span style={heroPicSec}>
                  <img style={heroPic} src= {restauranfood} alt='a waiter holding four sandwitches on a plate' />
                </span>
              </span>
            </section>
          )}
        </Fragment>
      )}
    </Media>
  )
};

export default Hero;