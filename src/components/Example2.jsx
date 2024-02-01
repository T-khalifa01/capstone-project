import React from 'react'
import './styles/Example2.css'

function Example2(props) {
  let dataObj = props.data;

  // const cont ={
  //   display: "flex",
  //   flexGrow: 1,
  //   alignSelf: "center",
  // }
  const Ul = props.ulstyle

  const l = props.lstyle

  const listItems = dataObj.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li style={l}>{itemText}</li>
  });

  return (
    <div className='cont' ><ul style={Ul}>{listItems}</ul></div>
  );
}

export default Example2