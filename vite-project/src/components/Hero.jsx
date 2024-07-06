import React from 'react';
import "../styles/Hero.css";
import heroImg from '../assets/hero.webp';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero-section' data-scroll data-scroll-section data-scroll-speed={-.4} >
      <div className="hero-container">
        

        <div className="hero-text">
<h1><span className='herobold'>Introducing RFKennedy</span> Token Empowering the <span className='herobold'>Future</span> of Digital Finance with Innovation</h1>


<button>Buy Now 💰</button>
        </div>

       
      </div>
    </div>
  )
}

export default Hero;
