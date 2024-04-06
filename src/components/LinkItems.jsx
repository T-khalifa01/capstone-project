import React from 'react'
import { Link } from 'react-router-dom';

function LinkItems(props) {

  //assigning props
    //data assignment
      let data = props.data;
      let header = props.header;
      let withHeader = props.withHeader;
      //let asLink = props.asLink;

    //props styles assignment
      let hCStyles = props.hCStyles;
      let headerStyles = props.headerStyles;
      //let ulStyles = props.ulStyles;
      let liStyles = props.liStyles;
      let aStyles = props.aStyles;

    //custom css class styling assingment
      let hCClass = props.hCClass;
      let headerClass = props.headerClass;
      //let ulClass = props.ulClass;
      let liClass = props.liClass;
      let aClass = props.aClass;


  //removing user agent styles (default styles)
    //removing default ul tag style (user agent styles)
      // let defaultUl = {
      //   listStyleType: "none",
      //   marginBlockStart: "0em",
      //   marginBlockEnd: "0em",
      //   paddingInlineStart: "0px",
      // }

    //removing default li tag style (user agent styles)
      let defaultLi = {
        listStyleType: "none",
      }

    //removing a tag stles (user agent styles)
      let defaultA = {
        textDecoration: "none",
      }


  //merging assingned styles with removed user agent styles
    //let mergedUl = {...defaultUl,...ulStyles};
    let mergedLi = {...defaultLi,...liStyles};
    let mergedA = {...defaultA,...aStyles};

  //maping listItems
    //as links
      let listItems = data.map((link) => {
        return(
          <li className={liClass} style={mergedLi} key={link.id} id={link.id}><Link className={aClass} to={link.to} style={mergedA}>{link.name}</Link></li>
        );
      });
    //as lists
      let notLink = data.map((link) => {
        return(
          <li className={liClass} style={mergedLi} key={link.id} id={link.id}>{link.name}</li>
        );
      });

  //setting link or list
    const settingLink = () => {
      return(
      props.asLink ? listItems : notLink
      )
    }

  //list items with header
    let withH = () => {
      return(
        <>
          <header style={hCStyles} className={hCClass}>
            <h2 className={headerClass} style={headerStyles}>{header}</h2>
          </header>
          {settingLink()}
          {/* <ul className={ulClass} style={mergedUl}>
            {settingLink()}
          </ul> */}
        </>
      )
    };

  //list items without header
    let withOutH = () => {
      return(
        <>
          {settingLink()}
        </>
        // <ul className={ulClass} style={mergedUl}>
        //   {settingLink()}
        // </ul>
      );
    };

  //choosing with or without header
    let settingList = () => {
      return(
        <>
        {withHeader? withH() : withOutH()}
        </>
      );
    }
  return (
    settingList()
  )
}

export default LinkItems