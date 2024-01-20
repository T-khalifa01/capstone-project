import './styles/NavStyles.css';

function Nav() {

  /*const navStyles = {
    alingSelf: "stretch"
  }
  const navUlStyles ={
    margin: 0,
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
  }
  const navLiStyles = {

  }*/
  return (
    <nav className='nav' >
      <ul className='navUl' >
        <li><a className='navA SectionTitle' href="">Home</a></li>
        <li><a className='navA SectionTitle' href="">Menu</a></li>
        <li><a className='navA SectionTitle' href="">About</a></li>
        <li><a className='navA SectionTitle' href="">Reservations</a></li>
        <li><a className='navA SectionTitle' href="">Order-Online</a></li>
        <li><a className='navA SectionTitle' href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav;