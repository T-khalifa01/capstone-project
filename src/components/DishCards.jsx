import React from 'react'
import { noDishPng } from './Data'
import './styles/DishCards.css'

function DishCards(props) {
    const dishes = props.dishes
    const listingDish = dishes.map((dish) => {
        return(
            <article key={dish.id} className='dishcards'>
                <section className='dishImgSec'>
                <img src= {dish.dishPic} alt={dish.alt} height={100}/>
                </section>
                <section className='dishTextSec'>
                    <section className='dishNameSec'>
                        <h3 className='dishName CardTitle'>{dish.name}</h3>
                        <h3 className='dishPrice HighlightText'>{dish.price}</h3>
                    </section>
                    <section className='dishDescSec'>
                        <p className='dishDesc HighlightText'>{dish.description}</p>
                    </section>
                    <section className='dishButtonSec'>
                        <a href=' ' className='LeadText dishLink'>Order For Delivery</a>
                    </section>
                </section>
            </article>
        )
    })
  return (
    <>
        {listingDish}
    </>
  )
}

export default DishCards