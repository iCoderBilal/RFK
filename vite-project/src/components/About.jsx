import React from 'react';
import "../styles/About.css";
import aboutImg from "../assets/hero.webp";

const About = ({mainLink}) => {
  return (
    <>
    <div className="about-section" ref={mainLink}>
        <div className="about-container">
            
            <div className="aboutheading">
                <h2>About the Token</h2>
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
