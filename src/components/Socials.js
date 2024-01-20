import React from 'react'
import './styles/Socials.css'

function Socials() {
  return (
    <div className='socialsDiv'>
        <header className='socialsHeader'>
            <h2 className='SectionTitle socialsTitle'>Social Media Links</h2>
        </header>
        <section className='socialsSection'>
            <ul className='socialsUl'>
                <li className='socialsLi'><a className='socialsA LeadText' href="">Facebook</a></li>
                <li className='socialsLi'><a className='socialsA LeadText' href="">Instagram</a></li>
            </ul>
        </section>
  </div>
  )
}

export default Socials