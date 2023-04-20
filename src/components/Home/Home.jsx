import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider';
import Stories from '../Stories/Stories';

export default function Home() {

  return (
    <div>
        <Hero />
        {/* <Slider /> */}
        <Stories />
</div>
 )
}