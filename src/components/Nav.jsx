import './styles/NavStyles.css';

function Nav(props) {

  //props Data asingment

  let navLists = props.navlists;
  let withHeader = props.withHeader;


  //Nav default styling

  let navUlStyles = props.navUlStyles;
  let navAStyles = props.navAStyles;

  //default root class assingment
  let AClass = props.AClass;

  //variable assingment
  let header = "Dormant Navigation";

  //main nav mapping
  let listingNav = navLists.map((list) => {
    return <li key={list.id}><a style={navAStyles} className={AClass} href=" ">{list.name}</a></li>
  });

  let withH = () =>{
    return(
      <div>
        <header>
          <h2>{header}</h2>
        </header>
        <ul style={navUlStyles} >
          {listingNav}
        </ul>
      </div>
    );
  };

  let withOutH = () => {
    return(
      <ul style={navUlStyles} >
        {listingNav}
      </ul>
    );
  };

  let settingnav =() => {
    return(
      <>
        {withHeader? withH(header,listingNav) : withOutH(listingNav)}
      </>
    );
  };
  return (
    settingnav()
  );
};

export default Nav;