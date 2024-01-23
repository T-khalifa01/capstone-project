import FooterNav from "./FooterNav";
import Contact from "./Contact";
import Socials from "./Socials";
import './styles/Footer.css'



function Footer() {
  /*const footernav = {
    flexDirection:"column"
  }*/
  return (
    <footer className="footer">
      <section className="footerMain">
        <article className="footerImg">
          <img src= 'restauranfood.jpg' alt='a waiter holding four sandwitches on a plate' height={100}/>
        </article>

        <article className="footerNav">
          <header>
            <h2 className="SectionTitle navSecHeader">Doormant Navigation</h2>
          </header>
          <FooterNav/>
        </article>

        <article className="footerContacts">
          <Contact/>
        </article>

        <article className="footerSocials">
          <Socials/>
        </article>
      </section>
    </footer>
  )
}

export default Footer;