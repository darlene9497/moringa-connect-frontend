import React from 'react';
import HeroImg from '../../assets/moringa.png';
//import LogoImg from '../../assets/logo.png';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className='hero-container'>
      <div className='hero-img'>
        <img alt='Moringa Connect' src={HeroImg} />
        <div className='hero-buttons'>
          <button className='hero-btn-orange' onClick={(navigate(`/login`))}>Login</button>
          <button className='hero-btn-orange' onClick={(navigate(`/signup`))}>Join Us</button>
        </div>
        {/* <img alt='Moringa Logo' src={LogoImg} className='hero-logo' /> */}
      </div>
    </div>
  )
}

