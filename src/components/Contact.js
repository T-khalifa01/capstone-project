import React from 'react'
import './styles/Contact.css'

function Contact() {
  return (
    <div className='contactDiv'>
      <header className='contactHeader'>
        <h2 className='SectionTitle contactTitle'>Contacts</h2>
      </header>
      <section className='contactSection'>
        <ul className='contactUl'>
            <li className='contactLi'><a className='contactA LeadText' href="">Address</a></li>
            <li className='contactLi'><a className='contactA LeadText' href="">Phone Number</a></li>
            <li className='contactLi'><a className='contactA LeadText' href="">Email</a></li>
        </ul>
      </section>
    </div>
  )
}

export default Contact