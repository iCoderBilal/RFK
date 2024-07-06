import React from 'react';
import "../styles/Marquee.css";
import {motion} from "framer-motion";
import  marqueeImg from '../assets/marquee-img.jpg';


const Marquee = () => {
  return (
    <>
      <div className="marquee" data-scroll data-scroll-section data-scroll-speed={.1}>
        <div className="marquee-container">
            <motion.div initial={{x:0}} animate={{x: "-100%"}} transition={{ease:'linear', duration:9, repeat:Infinity}} className='marquee-item'  >
              
              <h1>Empowering USA with RFKennedy Token</h1>
              <img src={marqueeImg}/>
              
              </motion.div>

              <motion.div initial={{x:0}} animate={{x: "-100%"}} transition={{ease:'linear', duration:9, repeat:Infinity}} className='marquee-item'  >
              
              <h1>Empowering USA with RFKennedy Token</h1>
              <img src={marqueeImg}/>
              
              </motion.div>

              <motion.div initial={{x:0}} animate={{x: "-100%"}} transition={{ease:'linear', duration:9, repeat:Infinity}} className='marquee-item'  >
              
              <h1>Empowering USA with RFKennedy Token</h1>
              <img src={marqueeImg}/>
              
              </motion.div>
           
        </div>
      </div>
    </>
  )
}

export default Marquee
