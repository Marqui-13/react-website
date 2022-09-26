import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Canvas from "./Canvas.js";

const Header = ({}) => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, { y: "-500", x: "-500" });
  });
  

  return (
    
    <Canvas />
    // {/* <header id="home">
      
    //   <div className="overlay"></div>

    //   <div className="content">
    //     <div className="altweb">
    //     <h1 ref={boxRef}>Hi, I'm Marqui</h1>
    //       <a
    //         href="https://marqui-website-alternate.netlify.app/"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Checkout my alternate website
    //       </a>
    //     </div>

    //     <a
    //       className="resume-button"
    //       href="https://marqui-resume.on.fleek.co/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Download Resume
    //     </a>
    //   </div>
    //   <nav id="nav-wrap">
    //     <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
    //       Show navigation
    //     </a>
    //     <a className="mobile-btn" href="#home" title="Hide navigation">
    //       Hide navigation
    //     </a>

    //     <ul id="nav" className="nav">
    //       <li className="current">
    //         <a className="smoothscroll" href="#home">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a className="smoothscroll" href="#portfolio">
    //           Projects
    //         </a>
    //       </li>
    //       <li>
    //         <a className="smoothscroll" href="#contact">
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   <div className="row banner">
    //     <div className="banner-text"></div>
    //   </div>

    //   {/* <p className="scrolldown">
    //     <a className="smoothscroll" href="#about">
    //       <i className="icon-down-circle"></i>
    //     </a>
    //   </p> */}
    // // </header> */}
    
  );
};

export default Header;
