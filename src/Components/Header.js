// import { useEffect, useRef } from "react";
import React from "react";
import TypeWriter from "react-typewriter";
import videoBg from "../assets/videoBg.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'

//import {TweenMax, Power3} from "gsap"
 //import gsap from "gsap"

const Header = ({ data, icon, timeline, ease }) => {
  // let socialRef1 = useRef(null);
  // let socialRef2 = useRef(null);
  // let socialRef3 = useRef(null);


  // useEffect(() => {
  //   timeline.from([socialRef1, socialRef2, socialRef3], 2, {
  //     opacity: 0,
  //     y: 400,
  //     stagger: {
  //       amount: 0.4
  //     },
  //     ease: ease
  //   });
  // });

  if (data) {
    var name = data.name;
    var networks = data.social.map(function (network) {
      return (
        <>
        <li>
          <a href="https://www.linkedin.com/in/marqui-orr-793115219/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Marqui-13/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://app.radicle.xyz/">
            <FontAwesomeIcon icon={faSeedling} />
          </a>
        </li>
        <li>
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
        <h4 className="aboutd">
          I'm a developer and a student focusing on Web3, Blockchain, Quantum, Creative Coding, Responsive Full-Stack, & Game Development.
        </h4>
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

        <a
            className="resume-button"
            href="https://marqui-resume.on.fleek.co/"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
      </div>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

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

      <div className="row banner">
        <div className="banner-text"></div>
      </div>

      {/* <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p> */}
    </header>
  );
};

export default Header;
