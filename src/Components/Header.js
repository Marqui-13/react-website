import { useEffect, useRef } from "react";
import React from "react";
import TypeWriter from "react-typewriter";
import videoBg from "../assets/videoBg.mp4";
//import {TweenMax, Power3} from "gsap"
import gsap from "gsap"

const Header = ({ data }) => {
  const socialRef = useRef();

  useEffect(() => {
    gsap.to(socialRef.current, {
      rotation: "+=0",
    });
  });

  if (data) {
    var name = data.name;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
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
          I'm a developer and a student focusing on Web3, Blockchain, &amp;
          Responsive Front-End/Back-End Development.
        </h4>
        <ul className="social" ref={socialRef}>{networks}</ul>
        <h4 className="altweb">
          <a
            href="https://marqui-website-alternate.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Checkout my alternate website
          </a>
        </h4>
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
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
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
