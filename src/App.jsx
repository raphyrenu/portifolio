import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state here

  return (
    <BrowserRouter>
      <div className={`relative z-0 dark:bg-primary dark:text-white bg-white text-black`}>
        <div className={`dark:bg-hero-pattern bg-hero-pattern2 bg-cover bg-no-repeat bg-center `}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero  />
        </div>
        <About  />
        <Experience />
        <Tech  />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );h
}

export default App;
