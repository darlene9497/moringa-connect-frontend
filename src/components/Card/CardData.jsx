import React from 'react'
import './Card.css'

export default function cardData(props) {
  return (
    <div className='t-card'>
        <div className="t-image">
        <img src={props.image} alt='image' />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <a href={props.buttonLink} className="button">{props.buttonText}</a>
    </div>
  )
}
