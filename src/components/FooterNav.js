import './styles/FooterNavStyles.css'

function FooterNav() {

    /*const navStyles = {
      alingSelf: "stretch"
    }
    const navUlStyles ={
      margin: 0,
      display: "flex",
      flexDirection: "row",
      listStyleType: "none",
    }
    const navLiStyles = {}*/
    return (
      <nav className='footernav' >
        <ul className='footernavUl' >
          <li><a className='footernavA LeadText' href="">Home</a></li>
          <li><a className='footernavA LeadText' href="">Menu</a></li>
          <li><a className='footernavA LeadText' href="">About</a></li>
          <li><a className='footernavA LeadText' href="">Reservations</a></li>
          <li><a className='footernavA LeadText' href="">Order Online</a></li>
          <li><a className='footernavA LeadText' href="">Login</a></li>
        </ul>
      </nav>
    )
  }

  export default FooterNav;