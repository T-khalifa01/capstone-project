import React from 'react'
import './styles/Contact.css'

function Contact(props) {
  //assingning props
  let contactLinks = props.contactLinks //list
  let withHeader = props.withHeader //bolian

  //assinging variables
  let header = "contact"

  let listingLink = contactLinks.map((contact) => {
    return <li className='contactLi' key={contact.id}><a className='contactA LeadText' href=" ">{contact.name}</a></li>
  })
  let withH = () =>{
    return(
      <div className='contactDiv' >
        <header className='contactHeader'>
          <h2 className='SectionTitle contactTitle'>{header}</h2>
        </header>
        <section className='contactSection'>
          <ul className='contactUl'>
            {listingLink}
          </ul>
        </section>
      </div>
    )
  }
  let withOutH = () =>{
    return(
      <div className='contactDiv' >
        <section className='contactSection'>
          <ul className='contactUl'>
            {listingLink}
          </ul>
        </section>
      </div>
    )
  }
  let settingcontacts =() => {
    return (
      <>
      { withHeader? withH(header,listingLink) : withOutH(listingLink) }
      </>
      )
  }
  return (
      settingcontacts()
  )
}

export default Contact