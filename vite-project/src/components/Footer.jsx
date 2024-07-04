import React from 'react';
import '../styles/Footer.css';
import usa from "../assets/usa.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <img src={usa} alt="USA FLAG" />
            <h1>RFK</h1>
            </div>
            <p>RFK Token is a revolutionary digital asset inspired by the legacy of Robert F. Kennedy, promoting economic freedom, transparency, and community empowerment. Join us in shaping a brighter and more inclusive financial future.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
