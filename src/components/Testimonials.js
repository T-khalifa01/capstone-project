import React from 'react'
import CustomersCards from './CustomersCards'
import "./styles/Testimonials.css"

function Testimonials() {
    const customers = [
        {fullname:"Kim Soun", rating:[1,1,1,0.5,0], profilePic:"somepicture", comments:"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {fullname:"Atlas Sparta", rating:[1,1,1,1,0.5], profilePic:"somepicture", comments:"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {fullname:"precious Nkenna", rating:[1,1,1,0,0], profilePic:"somepicture", comments:"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {fullname:"Nate Willson", rating:[1,1,1,1,1], profilePic:"somepicture", comments:"4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
    ]
    return (
        <section className='testimonials'>
            <header className='testimonialsheading'>
                <h2 className='DisplayTitle testimonialsTitle'>Testimonials</h2>
            </header>
            <section className='testimonialsContainer'>
                <section className='testimonialcards'>
                    {customers.map((customer, index) =>
                        <CustomersCards key={index} customer={customer} />
                    )}
                </section>
            </section>
        </section>
    )
}

export default Testimonials