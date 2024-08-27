import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state here

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkMode ? 'bg-primary text-white' : 'bg-white text-black'}`}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero darkMode={darkMode} />
        </div>
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Tech darkMode={darkMode} />
        <Works darkMode={darkMode} />
        <Feedbacks darkMode={darkMode} />
        <div className='relative z-0'>
          <Contact darkMode={darkMode} />
          <StarsCanvas darkMode={darkMode} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
