import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Canvas from "./Canvas.js";

const Header = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, { y: "-500", x: "-500" });
  });
  

  return (
    
    <Canvas />
  );
};

export default Header;
