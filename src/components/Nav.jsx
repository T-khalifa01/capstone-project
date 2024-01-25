import './styles/NavStyles.css';

function Nav({navlink}) {

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
    <ul className='navUl' >
      <li><a className='navA SectionTitle' href="">{navlink.name}</a></li>
    </ul>
  )
}

export default Nav;