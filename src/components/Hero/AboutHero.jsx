import React from 'react';
import HeroImg from '../../assets/moringa.png';
//import LogoImg from '../../assets/logo.png';
import './Hero.css';

export default function AboutHero() {

  function handleLoginClick() {
    console.log('Login button clicked!');
  }

  function handleJoinClick() {
    console.log('Join button clicked!');
  }

  return (
    <div className='hero-container'>
      <div className='hero-img'>
        <img alt='Moringa Connect' src={HeroImg} />
        {/* <div className='hero-buttons'>
          <button className='hero-btn-orange' onClick={handleLoginClick}>Login</button>
          <button className='hero-btn-orange' onClick={handleJoinClick}>Join Us</button>
        </div> */}
        {/* <img alt='Moringa Logo' src={LogoImg} className='hero-logo' /> */}
      </div>
    </div>
  )
}

