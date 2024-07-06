import React from 'react';
import "../styles/Features.css";
import security from '../assets/atm-card.png';
import community from '../assets/group-chat.png';
import privacy from '../assets/privacy.png';
import {motion} from "framer-motion";



const Features = ({mainLink}) => {
  return (
<>
<div className="features" ref={mainLink}>
    <div className="features-container">
        <div className="features-heading">
            <h1>Why Choose RFK Token? </h1>
        </div>

        <div className="features-flex">
            <motion.div className="feature-card"
            initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0, transition: {duration: 1, delay: 0.2}}}
            
            viewport={{once: true}}
            
            >
                <img src={security} alt="" />
                <h2>Secure Transactions</h2>
            </motion.div>


            <motion.div className="feature-card"
                  initial={{opacity:0, y:-50}}
                  whileInView={{opacity:1, y:0, transition: {duration: 1, delay: 0.2}}}
                  
                  viewport={{once: true}}>
                <img src={community} alt="" />
                <h2>Community Driven</h2>
            </motion.div>

            <motion.div className="feature-card"
                  initial={{opacity:0, y:-50}}
                  whileInView={{opacity:1, y:0, transition: {duration: 1, delay: 0.2}}}
                  
                  viewport={{once: true}}
            >
                <img src={privacy} alt="" />
                <h2>Enhanced Privacy</h2>
            </motion.div>
        </div>
    </div>
</div>
</>
  )
}

export default Features
