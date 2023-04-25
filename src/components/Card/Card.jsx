import React from 'react'
import './Card.css'
import CardData from './CardData'
import Card1 from '../../assets/Card1.jpeg'
import Card2 from '../../assets/Card2.jpeg'
import Card3 from '../../assets/Card3.jpeg'

export default function Card() {
  return (
    <>
    <div className='card'>
        <h2>Moringa connect</h2>
        <p>Moringa Connect is more than just a website – it's a hub of inspiration, support, and lifelong learning. Whether you're looking to reconnect with old friends, expand your professional network, or simply reminisce about the good old days, we have everything you need to stay connected and engaged. From alumni spotlights to exclusive events, our website offers a wealth of resources that will help you stay connected to your alma mater and fellow alumni. Join us today and experience the power of our alumni community!</p>
        <div className="cardcard">
          <CardData 
            image={Card1}
            heading='Alumni'
            text="The Moringa Alumni are an important part of our institution's community, and their ongoing engagement can benefit both the alumni and the institution. Alumni can provide valuable feedback, mentorship, and support to current students and recent graduates, while the institution can provide resources..."
            buttonLink='/alumni'
            buttonText='View more'
            />

          <CardData 
            image={Card2}
            heading='Community'
            text="Moringa Connect community is a group of individuals who have a shared history and connection through their alma mater. The alumni community is an important part of our institution's legacy and ongoing success. We provide a platform for alumni to connect with each other and build meaningful..."
            buttonLink='/community'
            buttonText='View more'
            />

          <CardData 
            image={Card3}
            heading='Projects'
            text="By donating to their alma mater, alumni can help support the institution's ongoing success and provide opportunities for future generations of students. By supporting the institution, alumni can help ensure that future generations have access to the same quality education and opportunities that they did..."
            buttonLink='/projects'
            buttonText='View more'
            />

        </div>
    </div>
    </>
  )
}
