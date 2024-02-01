import React from 'react'
import './styles/Socials.css'

function Socials(props) {
	//assigninig props
    let socialsLinks = props.socialsLinks
    let withHeader = props.withHeader

	//assigning variables
    let header = "Socials"

	//maping data
    let socialLink = socialsLinks.map((sLink) => {
        return(
            <li className='socialsLi' key={sLink.id}><a className='socialsA LeadText' href=" ">{sLink.name}</a></li>
        )
    });

	//Socials with header
    let withH = () => {
        return(
            <div className='socialsDiv' >
                <header className='socialsHeader'>
                    <h2 className='SectionTitle socialsTitle'>{header}</h2>
                </header>
                <section className='socialsSection'>
                    <ul className='socialsUl'>
                        {socialLink}
                    </ul>
                </section>
            </div>
        )
    };

	//socials with out header
    let withOutH = () => {
        return(
            <div className='socialsDiv'>
                <section className='socialsSection'>
                    <ul className='socialsUl'>
                        {socialLink}
                    </ul>
                </section>
            </div>
        )
    };

	//choosing socials with or without header
    let settingSocials = () => {
        return(
            <>
            {withHeader? withH(header,socialLink) : withOutH(socialLink)}
            </>
        );
    };

  return (
    settingSocials()
  )
}

export default Socials