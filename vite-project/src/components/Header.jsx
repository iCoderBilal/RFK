import React, { useRef } from 'react';
import "../styles/Header.css";
import usa from "../assets/usa.png";

const Header = ({link1, link2, link3}) => {
 
  return (
    <>
   <div className="header">
    <div className="header-container">
      <div className="logo">
        <img src={usa} />
        <a>RFK</a>
      </div>

      <div className="links">
        <a onClick={link1}>About</a>
        <a onClick={link2}>Features </a>
        <a onClick={link3}>Contact</a>
      </div>
    </div>
   </div>
    </>
  )
}

export default Header
