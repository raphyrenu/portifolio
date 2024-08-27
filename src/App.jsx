import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state here

  return (
    <BrowserRouter>
      {/* Main container with dark or white mode background and text colors */}
      <div className={`relative z-0 ${darkMode ? 'bg-primary text-white' : 'bg-white text-black'}`}>
        {/* Hero section background with pattern for white mode */}
        <div className={`${!darkMode ? '' : 'bg-hero-pattern bg-cover bg-no-repeat bg-center' }`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        {/* Other sections pass the darkMode state */}
        <About darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Experience darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Tech darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Works darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Feedbacks darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="relative z-0">
          <Contact darkMode={darkMode} setDarkMode={setDarkMode}/>
          <StarsCanvas darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
