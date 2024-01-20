import React from 'react'
import './styles/CustomersCards.css'

const ratingLevels = {0.5:"#", 1: "&", 0:" "}
function CustomersCards({customer}) {
    /*const CardInfo = props.details.map((value,index) => {
        () => {
            const ratingOutput = []
            const ratingInt = value.rating
            if (Number.isInteger(ratingInt)) {
                ratingOutput.push('&'*ratingInt)
            } else{
                parseInt(ratingInt)
                ratingOutput.push("&"*ratingInt + "$")
            }
            return (
                ratingOutput
            )
        }
    })*/
  return (
    <article className='userCards'>
        <section className='rating'>
            {customer.rating.map((ratingPoint, index) =>
                <h2 className='ratingStars' key={index} >{ratingLevels[ratingPoint]}</h2>
            )}
        </section>
        <section className='profile'>
            <img src= {customer.profilePic} alt='a waiter holding four sandwitches on a plate' style={{height:"4rem", width:"4rem"}}/>
            <h3 className='userName'>{customer.fullname}</h3>
        </section>
        <section className='commentsSec'>
            <p className='HighlightText userComments'>{customer.comments}</p>
        </section>
    </article>
)}

export default CustomersCards