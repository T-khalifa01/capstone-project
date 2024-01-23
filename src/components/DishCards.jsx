import React from 'react'
import './styles/DishCards.css'

function DishCards(props) {
  return (
    <>
    {props.details.map((value,index) => (
        <article key={index} className='dishcards'>
            <section className='dishImgSec'>
            <img src= {value.dishPic} alt='a waiter holding four sandwitches on a plate' height={100}/>
            </section>
            <section className='dishTextSec'>
                <section className='dishNameSec'>
                    <h3 className='dishName CardTitle'>{value.name}</h3>
                    <h3 className='dishPrice HighlightText'>{value.price}</h3>
                </section>
                <section className='dishDescSec'>
                    <p className='dishDesc HighlightText'>{value.description}</p>
                </section>
                <section className='dishButtonSec'>
                    <a className='LeadText dishLink'>Order For Delivery</a>
                </section>
            </section>
        </article>
    ))}
    </>
  )
}

export default DishCards