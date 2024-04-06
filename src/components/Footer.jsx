// import Nav from "./Nav";
// import Contact from "./Contact";
// import Socials from "./Socials";
import { Link } from "react-router-dom";
import { emailSvg, phoneSvg, locationSvg,
         logoSVGMobile, } from "./Data";
import jsonData from "../data.json"
import DynamicFontSize from "./DynamicFontSize";
import LinkItems from "./LinkItems";
import Media from "react-media";
import { useState } from "react";


function Footer() {

  const [liClr, setLiclr] = useState("var(--secondaryColour2)")

  const handleLiMouseEnter = () => {
    setLiclr("var(--primaryColour1)")
  }
  const handleLiMouseleave = () => {
    setLiclr("var(--secondaryColour2)")
  }

  const {navlinks, socialMediaLinks, contactList, contactsList} = jsonData

  //styles
    // let hCStyles = {
    //   justifySelf:"center",
    // }
    // let headerStyles = {
    //   color:"var(--primaryColour2)",
    // }
    let nHStyles = {
      color:"var(--primaryColour2)",
      display:"flex",
      //fontSize:"clamp(18px, 100%, 26.7px)",
      fontSize:  DynamicFontSize('footerDNH', 16, 20, 26.7, 0.1553)
    }
    let ulStyles= {
      display: "grid",
      gridTemplateRows:"repeat(auto-fit)",
      gap:"12px",
      listStyleType: "none",
      marginBlockStart: "0em",
      marginBlockEnd: "0em",
      paddingInlineStart: "0px",
      gridRow:"1",
    }
    let liStyles= {
      listStyleType: "none",
      color: liClr,
    }
    let lnkStyles = {
      textDecoration: "none",
      color: liClr,
      fontSize:"clamp(12px, 2vw, 24px)",
    }
    let footerImg = {
      height: DynamicFontSize("ftCont", 74, 128, 320, 1.9),
      width:"90%",
      borderRadius:"8px",
    }

  //class
    let headerClass = "SectionTitle";
    let liClass = "FLiClass LeadText"

  //variables
    //let header = "Contact Us";
    let svgIcons = [emailSvg, phoneSvg, locationSvg]

  //setting icons
    // let licls1 = document.getElementById("cls1")
    // document.getElementsById("cls1").innerHTML = `${locationSvg} ${licls1}`

  return (
    <Media queries={{mobile: "(max-width: 430px)"}}>
      {matches => matches.mobile ?
        <footer style={{backgroundColor:"var(--highlightColour2)", display:"flex", justifyContent:"center", alignItems:"center",  }}>
          <span style={{  display:"grid", paddingBottom:"40px", gridTemplateRows:"repeat(2, auto)", gap:"20px", paddingTop:"20px", width:"70%", }} >
            <span style={{gridRow:"1", justifySelf:"center", backgroundColor:"#4D4D4D", borderRadius:"8px",}}>
              {logoSVGMobile}
            </span>
            <span style={{gridRow:"2", display:"grid", gap:"16px", gridTemplateRows:"repeat(2, auto)" }}>
              <ul style={ulStyles}>
                <LinkItems data={contactsList} withHeader={false} aslink={false}  liStyles={liStyles}  liClass={liClass}
                render={(item, index)=> (
                  <div>
                    {svgIcons[index]}
                    <span>{item.text}</span>
                  </div>
                )}
                />
              </ul>
            </span>
          </span>
        </footer>
        :
        <footer style={{display:"flex", backgroundColor:"var(--highlightColour2)", justifyContent:"center", alignItems:"center", }}>

          <span style={{display:"grid", width:"min(90%, 1080px)", height:"min(320px, 90%)", gridTemplateColumns:"min(18.1%, 195px) min(78.24%, 845px)", paddingTop:"24px", paddingBottom:"24px", gap:"clamp(16px, 3.0%, 40px)" }}>

            <span id="ftCont" style={{gridColumn:"1", display:"flex", flexBasis:"195px", justifyContent:"center", alignItems:"center", }}>
              <img style={footerImg} alt='' src={require(`../assets/logoPattern.png`)}/>
            </span>

            <span style={{gridColumn:"2", display:"grid", width:"min(845px, 100%)", gridTemplateColumns:"min-max()", gap:"clamp(8px, 3.3%, 32px)", paddingTop:"8px",}}>

              <span id="footerDNH" style={{  gridColumn:"1", display:"grid", gap:"24px", gridTemplateRows:"64px 256px", width:"min(100%, 170px)" }}>
                <h4 className={headerClass} style={nHStyles}>Dormant<br/>Navigation</h4>
                <ul style={{gridRow:"2", display: "grid", gridTemplateRows:"repeat(auto-fit, 28px)", gap:"12px", listStyleType: "none", marginBlockStart: "0em", marginBlockEnd: "0em", paddingInlineStart: "0px",}}>
                  {navlinks.map((list, index) => {
                    return(
                      <li id={list.id} key={index} style={liStyles} className={liClass}><Link to={list.to} style={lnkStyles} onMouseEnter={handleLiMouseEnter} onMouseLeave={handleLiMouseleave} >{list.name}</Link></li>
                    )
                  })}
                </ul>
              </span>

              <span id="footerDNH" style={{gridColumn:"2", display:"grid", gap:"24px", gridTemplateRows:"64px 256px",  }}>
                <h4 className={headerClass} style={nHStyles}>Contact</h4>
                <ul style={{gridRow:"2", display: "grid", gridTemplateRows:"repeat(auto-fit, 28px)", gap:"12px", listStyleType: "none", marginBlockStart: "0em", marginBlockEnd: "0em", paddingInlineStart: "0px",}}>
                  {contactList.map((list, index) => {
                    return(
                      <li id={list.id} key={index} style={liStyles} className={liClass} onMouseEnter={handleLiMouseEnter} onMouseLeave={handleLiMouseleave}>{list.name}</li>
                    )
                  })}
                </ul>
              </span>

              <span id="footerDNH" style={{gridColumn:"3", display:"grid", gap:"24px", gridTemplateRows:"64px 256px",  }}>
                <h4 className={headerClass} style={nHStyles}>Follow Us</h4>
                <ul style={{gridRow:"2", display: "grid", gridTemplateRows:"repeat(auto-fit, 28px)", gap:"12px", listStyleType: "none", marginBlockStart: "0em", marginBlockEnd: "0em", paddingInlineStart: "0px",}}>
                  {socialMediaLinks.map((list, index) => {
                    return(
                      <li id={list.id} key={index} style={liStyles} className={liClass} onMouseEnter={handleLiMouseEnter} onMouseLeave={handleLiMouseleave} >{list.name}</li>
                    )
                  })}
                </ul>
              </span>

            </span>
          </span>
        </footer>
      }
    </Media>
  )
}

export default Footer;