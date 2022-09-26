import React, { useRef, useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";



const App = () => {

  const [resumeData, setResumeData] = useState({});


  return (
    <div className="App">
      <Header data={resumeData.main} />
      {/* <About data={resumeData.main} />
      <Resume data={resumeData.resume} /> */}
      {/* <Portfolio data={resumeData.portfolio} /> */}
    {/* <Contact data={resumeData.main} /> */}
      {/* <Footer data={resumeData.main} /> */}
    </div>
  );
};

export default App;
