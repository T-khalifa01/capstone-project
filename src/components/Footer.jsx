import Nav from "./Nav";
import Contact from "./Contact";
import Socials from "./Socials";
import './styles/Footer.css'
import { navlinks, contactLinks, socialsLinks } from "./Data";



function Footer() {

  let navUlStyles= {
    display: "flex",
    margin: "0",
    listStyleType: "none",
    alignItems: "stretch",
    padding : "0px",
    justifyContent : "space-evenly",
    flexDirection : "column",
  }
  let navAStyles= {
    textDecoration: "none",
    color: "var(--highlightColour1)",
  }
  return (
    <footer className="footer">
      <section className="footerMain">
        <article className="footerImg">
          <img src= 'restauranfood.jpg' alt='a waiter holding four sandwitches on a plate' height={100}/>
        </article>

        <article className="fnav">
          <Nav  navlists={navlinks} withHeader={true} navUlStyles={navUlStyles} navAStyles={navAStyles} />
        </article>

        <article className="footerContacts">
          <Contact  contactLinks={contactLinks} withHeader={true} />
        </article>

        <article className="footerSocials">
          <Socials  socialsLinks={socialsLinks} withHeader={true} />
        </article>
      </section>
    </footer>
  )
}

export default Footer;