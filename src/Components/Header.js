import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Canvas from "./Canvas.js";

<<<<<<< HEAD
const Header = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, { y: "-500", x: "-500" });
  });
  

  return (
    
    <Canvas />
    // {/* <header id="home">
      
    //   <div className="overlay"></div>
=======
const Header = ({ data, icon, timeline, ease }) => {

  if (data) {
    var name = data.name;
    var networks = data.social.map(function (network) {
      return (
        <>
        <li className="hidden">
          <a href="https://www.linkedin.com/in/marqui-orr-793115219/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="hidden">
          <a href="https://github.com/Marqui-13/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="hidden">
          <a href="https://app.radicle.xyz/">
            <FontAwesomeIcon icon={faSeedling} />
          </a>
        </li>
        <li className="hidden">
          <a href="https://codepen.io/marqui-13/">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
      </>
      );
    });
  }

  return (
    <header id="home">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="content">
        <h1 style={{ color: "#fff" }}>
          <TypeWriter typing={0.37}>{name ? `I'm ${name}.` : null}</TypeWriter>
        </h1>
        <h5 className="aboutd">
          I'm a developer and a student focusing on Web3, Blockchain, Quantum, Creative Coding, Responsive Full-Stack, & Game Development.
        </h5>
        <ul className="social">{networks}</ul>
        <h4 className="altweb">
          <a
            href="https://marqui-website-alternate.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Checkout my alternate website
          </a>
        </h4>
>>>>>>> fdc6a1c208e1c4baad917f9dd098392e9daf5bb1

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

<<<<<<< HEAD
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
=======
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
>>>>>>> fdc6a1c208e1c4baad917f9dd098392e9daf5bb1

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
