import React from 'react';
import HeroImg from '../../assets/hero.png';
import './Hero.css';

export default function Hero() {

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div className='hero-container'>
      <div className='hero-img'>
        <img alt='Moringa Connect' src={HeroImg} />
        <div className='hero-text'>
          <h1>Welcome to Moringa Connect:</h1>
          <p>Reconnect | Experience | Opportunity</p>
        </div>
        <div className='arrow-container'>
        <div className='explore-text'>
            <p>Explore Page</p>
          </div>
          <div className='down-arrow-btn' onClick={handleScroll}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

