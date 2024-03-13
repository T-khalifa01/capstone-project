import React from 'react'
import { Link } from 'react-router-dom';

function LinkItems(props) {

  //assigning props
    //data assignment
      let data = props.data;
      let header = props.header;
      let withHeader = props.withHeader;

    //props styles assignment
      let headerStyles = props.headerStyles;
      let ulStyles = props.ulStyles;
      let liStyles = props.liStyles;
      let aStyles = props.aStyles;

    //custom css class styling assingment
      let headerClass = props.headerClass;
      let ulClass = props.ulClass;
      let liClass = props.liClass;
      let aClass = props.aClass;


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


  //merging assingned styles with removed user agent styles
    let mergedUl = {...defaultUl,...ulStyles};
    let mergedLi = {...defaultLi,...liStyles};
    let mergedA = {...defaultA,...aStyles};

  //maping listItems
    let listItems = data.map((link) => {
      return(
        <li className={liClass} style={mergedLi} key={link.id}><Link className={aClass} to={link.to} style={mergedA}>{link.name}</Link></li>
      );
    });

  //list items with header
    let withH = () => {
      return(
        <>
          <header >
            <h2 className={headerClass} style={headerStyles}>{header}</h2>
          </header>
          <ul className={ulClass} style={mergedUl}>
            {listItems}
          </ul>
        </>
      )
    };

  //list items without header
    let withOutH = () => {
      return(
        <ul className={ulClass} style={mergedUl}>
          {listItems}
        </ul>
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