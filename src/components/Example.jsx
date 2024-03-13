import React from 'react'
import './styles/Example.css'
//import Example2 from './Example2.jsx'
// import { navlinks } from './Data.js'
// import UsescreenSize from './UseScreenSize.js'
// import Nav from './Nav.jsx'
import Button from './Button.jsx'
import Hero from './Hero.jsx'
//import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

/*const profiles = [
    {name:"Kim Soun", rating:3.5, profilePic:"somepicture", comments:"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
    {name:"Atlas Sparta", rating:4.5, profilePic:"somepicture", comments:"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
    {name:"precious Nkenna", rating:3.0, profilePic:"somepicture", comments:"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
    {name:"Nate Willson", rating:5.0, profilePic:"somepicture", comments:"4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}
];
const notprofiles = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }
    profiles.map((value,index) => (
        for(let i = 0; i <= index; i++) {
            
        }
    ))*/



//function Example( ) {
  // const stuff = [
  //   {
  //     id : 1,
  //     title : "menubar",
  //     price : "23.34",
  //     desc : "fghjkds"
  //   },
  //   {
  //     id : 2,
  //     title : "menubar2",
  //     price : "23.345",
  //     desc : "fghjkds1"
  //   },
  //   {
  //     id : 3,
  //     title : "menubar3",
  //     price : "23.346",
  //     desc : "fghjkds2"
  //   }
  // ]
  // const navUl = {
  //   display: "flex",
  //   margin: 0,
  //   listStyleType: "none",
  //   alignItems: "stretch",
  //   padding: 0,
  //   flexGrow: 1,
  //   justifyContent:"space-evenly",
  // }
//   const l = {
//     textDecoration: "none",
//     fontFamily: "var(--primaryFontFamily)",
//     fontSize:"large",
//     fontWeight: "normal",
//     color: "var(--primaryColour1)",
//     listStyleType: "none",
// }
//const Ul = {
  // display: "flex",
  //margin: "0px",
  //listStyleType: "none",
  // alignItems: "stretch",
  //padding: "0px",
  // flexGrow: 1,
  // justifyContent: "spaceEvenly",
//}
// const navUlStyles ={
//   display: "flex",
//   margin: 0,
//   listStyleType: "none",
//   padding: 0,
//   flexGrow: 1,
//   justifyContent: "space-evenly",
// }
// const navAStyles = {
//   textDecoration: "none",
//   color: "var(--primaryColour1)",
// }
// let AClass = "SectionTitle"
// let screenSize = UsescreenSize();
//   return (
    // <div className='mainBorder'>
    // <div className='border'></div>
    // <div className='boxcontainer'>
    //     <div className='innerbox'>

    //     </div>
    // </div>
    // <div className='border'></div>
    // </div>
//     <div>
//       {/* <Example2 data={ExampleData} lstyle={l} ulstle={Ul}/> */}
//       <h1>width: {screenSize.Width}</h1>
//       <h1>height: {screenSize.Height}</h1>
//       <Nav navlists={navlinks} withHeader={false} listAStyles={navAStyles} listUlStyles={navUlStyles} AClass={AClass} fornav={true} />
//     </div>
//   );
// }

//export default Example

// function Example( ) {
//   const navUlStyles ={
//     display: "flex",
//     margin: 0,
//     listStyleType: "none",
//     padding: 0,
//     flexGrow: 1,
//     justifyContent: "space-evenly",
//   }
//   const navAStyles = {
//     textDecoration: "none",
//     color: "var(--primaryColour1)",
//   }
//   let AClass = "SectionTitle"
//   let screenSize = UsescreenSize();
//     return (
//       <div>
//       {/* <Example2 data={ExampleData} lstyle={l} ulstle={Ul}/> */}
//       <h1>width: {screenSize.Width}</h1>
//       <h1>height: {screenSize.Height}</h1>
//       <Nav navlists={navlinks} withHeader={false} listAStyles={navAStyles} listUlStyles={navUlStyles} AClass={AClass} fornav={true} />
//     </div>
//   );
// }
// export default Example;



function Example() {
  // return (
  //   <>
  //   {/* <Link to={"/"} > <Button Label={"button"}  disabled/></Link> */}
  //   <Button Label={"Second"}  destination={"/About"} disabled={true}/>
  //   <Button Label={"disabled"}  destination={"/About"} />
  //   </>
  // )
  return(
    <>
      <Hero/>
      <div style={{justifyContent:"center", display:"flex"}}>
        <div style={{backgroundColor:"red", width:"200px",height:"200px", display:"flex", justifyContent:"center",'@media (minWidth: 700px)': {backgroundColor:'black',}}}></div>
      </div>
      <div style={{
      width: '100%',
      height: '100px',
      backgroundColor: 'lightblue',
      '@media (minWidth: 768px)': { // Media query for screens with minimum width of 768px
        backgroundColor: 'lightgreen',
      }
    }}>
      This is a responsive div.
    </div>
    </>
  )
}

export default Example