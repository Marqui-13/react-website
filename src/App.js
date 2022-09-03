import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import "./App.css";
import { gsap, Power3 } from 'gsap';

// add gsap animations to h3 in header section
// add gsap animations to 'check out my website' text moving up to its current position 
// add gsap animations to social network links rotating in from different directions
// add gsap animations to react down arrow icon
// add video/image bg to the about section
// add gsap animations to react up arrow icon
// add gsap animations to mail icon in contact section 360 spin 
// + more features



const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header timeline= {tl} ease= {ease} data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
    <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
