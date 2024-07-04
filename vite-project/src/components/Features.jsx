import React from 'react';
import "../styles/Features.css";
import security from '../assets/atm-card.png';
import community from '../assets/group-chat.png';
import privacy from '../assets/privacy.png';



const Features = ({mainLink}) => {
  return (
<>
<div className="features" ref={mainLink}>
    <div className="features-container">
        <div className="features-heading">
            <h1>Why Choose RFK Token? </h1>
        </div>

        <div className="features-flex">
            <div className="feature-card">
                <img src={security} alt="" />
                <h2>Secure Transactions</h2>
            </div>


            <div className="feature-card">
                <img src={community} alt="" />
                <h2>Community Driven</h2>
            </div>

            <div className="feature-card">
                <img src={privacy} alt="" />
                <h2>Enhanced Privacy</h2>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Features
