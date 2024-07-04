import React from 'react';
import "../styles/socials.css";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import twitter from '../assets/logos.png';

const Socials = ({mainLink}) => {
  return (
    <>
      <div className="socials" ref={mainLink}>
        <div className="socials-container">
            <div className="social-heading">
                <h1>Follow Us On Socials</h1>
            </div>

            <div className="social-flex">
             

                <div className="social-card">
                    <a href='https://t.me/rfktoken'>
                <img src={telegram} />
                <p>Telegram</p>
                </a>
                </div>

                <div className="social-card">
                    <a href='https://x.com/RFKToken'>
                <img src={twitter} />
                <p>Twitter</p>
                </a>
                </div>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default Socials
