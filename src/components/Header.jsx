import Nav from "./Nav";
import UsescreenSize from "./UseScreenSize";
import './styles/HeaderStyles.css'
import { navlinks, logoSVG, burgerIconsvg } from "./Data";

function Header() {

  let screenSize = UsescreenSize();
  let screenWidth = screenSize.Width;
  //let screenHeight = screenSize.Height;
  /*const headerStyle = {
    display : "flex",
    background : "aqua",
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
  const headerItemsStyles = {
    alingSelf: "stretch"
  }*/
  let navUlStyles ={
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  };
  // let mediaStyle = {
  //   '@media (maxWidth: 835px)': {
  //     justifyContent: 'flex-end',
  //   },
  // };
  // let navUlStyles = {...mediaStyle,...navUlStyle}
  const navAStyles = {
    color: "var(--primaryColour1)",
  };
  let aClass = "LeadText";

  let responsiveHeader =  <header className="header">
                            <section className="headerMain">
                              <section className="headerSVGcontainer">
                                {logoSVG}
                              </section>
                              <nav className='nav' >
                                <Nav navlists={navlinks} withHeader={false} fornav={true} listAStyles={navAStyles} listUlStyles={navUlStyles} aClass={aClass}/>
                              </nav>
                            </section>
                          </header>

  if (screenWidth <= 430) {
    let navUlStyles ={
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end",
      alignItems : "center",
    };
    responsiveHeader =  <header className="header">
                          <section className="headerMain">
                            <section className="menusec">
                              {burgerIconsvg}
                            </section>
                            <section className="headerSVGcontainer">
                              {logoSVG}
                            </section>
                            <nav className='nav' >
                              <Nav navlists={navlinks} withHeader={false} fornav={true} listAStyles={navAStyles} listUlStyles={navUlStyles} aClass={aClass}/>
                            </nav>
                          </section>
                        </header>
  }
  else if (screenWidth <= 835){
    let navUlStyles ={
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end",
      alignItems : "center",
    };
    responsiveHeader =  <header className="header">
                          <section className="headerMain">
                            <section className="menusec">
                              {burgerIconsvg}
                            </section>
                            <section className="headerSVGcontainer">
                              {logoSVG}
                            </section>
                            <nav className='nav' >
                              <Nav navlists={navlinks} withHeader={false} fornav={true} listAStyles={navAStyles} listUlStyles={navUlStyles} aClass={aClass}/>
                            </nav>
                          </section>
                        </header>
  }
  else {
    responsiveHeader =  <header className="header">
                          <section className="headerMain">
                            <section className="headerSVGcontainer">
                              {logoSVG}
                            </section>
                            <nav className='nav' >
                              <Nav navlists={navlinks} withHeader={false} fornav={true} listAStyles={navAStyles} listUlStyles={navUlStyles} aClass={aClass}/>
                            </nav>
                          </section>
                        </header>
  };
  return (
    responsiveHeader
  );
};

export default Header;