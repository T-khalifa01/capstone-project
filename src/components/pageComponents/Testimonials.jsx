import React from 'react'
import CustomersCards from '../UserRatingCards'
import "../styles/Testimonials.css"
import { customers } from '../Data'

function Testimonials() {
    return (
        <section className='testimonials'>
            <header className='testimonialsheading'>
                <h2 className='DisplayTitle testimonialsTitle'>Testimonials</h2>
            </header>
            <section className='testimonialsContainer'>
                <section className='testimonialcards'>
                    <CustomersCards customers={customers} />
                </section>
            </section>
        </section>
    )
}

export default Testimonials