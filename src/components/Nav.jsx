import { Fragment } from 'react';
import Media from 'react-media';
import './styles/NavStyles.css';
import { userFilledsvg, userOutlinedsvg, addToCartsvg, navlinks } from './Data';
import LinkItems from './LinkItems';


function Nav() {

  // let screenSize = UsescreenSize();
  // let screenWidth = screenSize.Width;

  //removing user agent styles (default styles)
    //removing default ul tag style (user agent styles)
    let defaultUl = {
      listStyleType: "none",
      marginBlockStart: "0em",
      marginBlockEnd: "0em",
      paddingInlineStart: "0px",
    };

    //removing default li tag style (user agent styles)
    let defaultLi = {
      listStyleType: "none",
    };

    //removing a tag stles (user agent styles)
    let defaultA = {
      textDecoration: "none",
    };

    let navUlStyles ={
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
    };
    const navAStyles = {
      color: "var(--primaryColour1)",
    };
    let aClass = "LeadText";

  //svg styles
    let svgUlStyles = {
      listStyleType: "none",
      marginBlockStart: "0em",
      marginBlockEnd: "0em",
      paddingInlineStart: "0px",
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    };
    let svgLStyles ={
      listStyleType: "none",
      paddingLeft: "16px"
    };
    let svgAStyles = {
      textDecoration: "none",
      color: "var(--primaryColour1)",
    };


  return (
    <Media queries={{
      mobile: "(max-width: 430px)",
      tablet: "(min-width: 431px) and (max-width: 834px)",
      desktop: "(min-width: 835px)",
    }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
              <ul style={svgUlStyles}>
                <li style={svgLStyles}><a href=' ' style={svgAStyles}>{userFilledsvg}</a></li>
              </ul>
          )}

          {matches.tablet && (
              <ul style={svgUlStyles}>
                <li style={svgLStyles}><a style={svgAStyles} href=' '>{addToCartsvg}</a></li>
                <li style={svgLStyles}><a  href=' ' style={svgAStyles}>{userOutlinedsvg}</a></li>
              </ul>
          )}

          {matches.desktop && (
            <LinkItems data={navlinks} withHeader={false} ulStyles={navUlStyles}  aStyles={navAStyles} aClass={aClass}/>
          )}
        </Fragment>
      )}
    </Media>
  );
}

export default Nav;