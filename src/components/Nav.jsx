import { Fragment } from 'react';
import Media from 'react-media';
import './styles/NavStyles.css';
import { userFilledsvg, userOutlinedsvg, addToCartsvg, } from './Data';
import jsonData from "../data.json"
import LinkItems from './LinkItems';


function Nav() {

  const {navlinks} = jsonData
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
      // let defaultLi = {
      //   listStyleType: "none",
      // };

    //removing a tag stles (user agent styles)
      // let defaultA = {
      //   textDecoration: "none",
      // };

  //setting styles
    //ul tag style
      let navUlStyles ={
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
      };

    //li tag style
      let navAStyles = {
        color: "var(--primaryColour1)",
      };

  //merging styles
    //ul tag styles
      let mergedUl = {...defaultUl,...navUlStyles}
  //setting classname
    //a tag className
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
            <ul style={mergedUl}>
              <LinkItems data={navlinks} withHeader={false} aStyles={navAStyles} aClass={aClass} asLink={true}/>
            </ul>
          )}
        </Fragment>
      )}
    </Media>
  );
}

export default Nav;