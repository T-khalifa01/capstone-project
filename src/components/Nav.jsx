import { Fragment } from 'react';
import Media from 'react-media';
import './styles/NavStyles.css';
import UsescreenSize from './UseScreenSize';
import { userFilledsvg, userOutlinedsvg, addToCartsvg, } from './Data';


//list of defined passable props

// navlists : (type: object) the main list items;
// listUlstyles : (type: objects) styles how the ul tag shuld be displayed;
// listListyles : (type: objects) styles how the li tag shuld be displayed;
// listAStyles : (type: objects) styles how the a tag shuld be displayed;
// ulClass : (type: string) adds css classes to the ul tag;
// liClass : (type: string) adds css classes to the li tag;
// aClass : (type: string) adds css classes to the a tag;
//  withHeader : (type: boolian) defines if lists should come with a header;
//  fornav : (type: boolian) defines if the component should render for the top main navigation making it dynamic;
//  navHeader : (type: string) states the header

function Nav(props) {

  //props Data asingment
  let navLists = props.navlists; //list items.
  let withHeader = props.withHeader; //to specify either with or without header. boolean value.
  let fornav = props.fornav; //to specify either dynamic(for main nav) or static pure list. boolean value.
  let navHeader = props.navHeader;

  //html tag jsx styling
  let listUlStyles = props.listUlStyles; //for the ul tag.
  let listLiStyles = props.listLiStyles; //for the li tag.
  let listAStyles = props.listAStyles; //for the a tag.

  //custom css class styling assingment
  let ulClass = props.ulClass;
  let liClass = props.liClass;
  let aClass = props.aClass;

  //variable assingment
  let screenSize = UsescreenSize();
  let screenWidth = screenSize.Width;
  // let screenHeight = screenSize.Height;

  //removing user agent styles (default styles)
    //removing default ul tag style (user agent styles)
    let defaultUl = {
      listStyleType: "none",
      marginBlockStart: "0em",
      marginBlockEnd: "0em",
      paddingInlineStart: "0px",
    }

    //removing default li tag style (user agent styles)
    let defaultLi = {
      listStyleType: "none",
    }

    //removing a tag stles (user agent styles)
    let defaultA = {
      textDecoration: "none",
    }

  //combining assingned styles with removed user agent styles
  //merging ul styles
  let mergedUl = {...defaultUl,...listUlStyles};
  let mergedLi = {...defaultLi,...listLiStyles};
  let mergedA = {...defaultA,...listAStyles};

  //mapping main list items
  let listingNav = navLists.map((list) => {
    return <li key={list.id} className={liClass}><a style={mergedA} className={aClass} href=" ">{list.name}</a></li>
  });

  //nav items with header, for footer
  let withH = () =>{
    return(
      <div>
        <header>
          <h2>{navHeader}</h2>
        </header>
        <ul style={mergedUl} className={ulClass} >
          {listingNav}
        </ul>
      </div>
    );
  };

  //nav items without header, just the list only
  let withOutH = () => {
    let withOutHDefault = () => {
      return (
        <ul style={mergedUl} className={ulClass} >
          {listingNav}
        </ul>
      );
    };

    //dynamic headr nav items for mobile to desktop view
  // let topnav = () => {
  //   let topNavList =  <ul style={mergedUl} >
  //                       {listingNav}
  //                     </ul>

  //   if (screenWidth <= 430) {
  //     topNavList =  <ul style={mergedUl}>
  //                     <li style={mergedLi}><a style={mergedA} href=' '>{userFilledsvg}</a></li>
  //                   </ul>
  //   }
  //   else if (screenWidth <= 835) {
  //     topNavList =  <ul style={mergedUl}>
  //                     <li style={mergedLi}><a style={mergedA} href=' '>{addToCartsvg}</a></li>
  //                     <li style={mergedLi}><a style={mergedA} href=' '>{userOutlinedsvg}</a></li>
  //                   </ul>
  //   } else {
  //     topNavList =  <ul style={mergedUl} >
  //                     {listingNav}
  //                   </ul>
  //   }
  //   return(topNavList)
  // };
  let topnav = () => {
    render() {
      return (
        <Media queries={{
          mobile: "(maxWidth: 430px)",
          tablet: "(maxWidth: 835px)",
          desktop: "(minWidth: 836px)",
        }}>
          {matches => (
            <Fragment>
              {matches.mobile &&  <ul style={mergedUl}>
                                    <li style={mergedLi}><a style={mergedA} href=' '>{userFilledsvg}</a></li>
                                  </ul>},

              {matches.tablet &&  <ul style={mergedUl}>
                                    <li style={mergedLi}><a style={mergedA} href=' '>{addToCartsvg}</a></li>
                                    <li style={mergedLi}><a style={mergedA} href=' '>{userOutlinedsvg}</a></li>
                                  </ul>},

              {matches.desktop && <ul style={mergedUl} >
                                    {listingNav}
                                  </ul>}
            </Fragment>
          )}

        </Media>
      );
    };
  };

    //setting either dynamic or just the plain list items
    let settingwithOutH = () => {
      return(
        <>
          {fornav? topnav() : withOutHDefault()}
        </>
      );
    };

    //returning either dynamic or static list items
    return(
      <>
        {settingwithOutH()}
      </>
    );
  };

  //setting either with header or without
  let settingnav =() => {
    return(
      <>
        {withHeader? withH() : withOutH()}
      </>
    );
  };
  return (
    settingnav()
  );
};

export default Nav;