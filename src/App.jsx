import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Lifted dark mode state

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkMode ? 'bg-white' : 'bg-primary'}`}>
        <div className={darkMode ? '' : 'bg-hero-pattern bg-cover bg-no-repeat bg-center'}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Pass darkMode and setDarkMode as props */}
          <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
