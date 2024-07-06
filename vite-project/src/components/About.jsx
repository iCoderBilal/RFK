import React from 'react';
import "../styles/About.css";
import aboutImg from "../assets/hero.webp";
import {motion} from "framer-motion";


const About = ({mainLink}) => {
  return (
    <>
    <div className="about-section" ref={mainLink} data-scroll data-scroll-section data-scroll-speed={.1}>
        <div className="about-container">
            
            <div className="aboutheading">
                <motion.h2 
                 initial={{opacity:0, x: -50}}
                 whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                      delay: 0.2 
                    }
                  }}

                  viewport={{once: true}}
                  
                  
                
          
                >About the Token</motion.h2>
            </div>

            <div className="about-flex">
                <div className="left">

                    <img src={aboutImg} />
                </div>
                <div className="right">
                    <p>The RFK Token is a revolutionary digital asset inspired by the enduring legacy of Robert F. Kennedy, a prominent politician and advocate for social justice and equality. This token embodies the principles and values that RFK stood for, aiming to create a more equitable and inclusive financial future.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About





