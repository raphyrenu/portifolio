import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, SocialMedia } from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on the body
  React.useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`relative z-0 dark:bg-primary dark:text-white bg-white text-black`}>
        <div className={`dark:bg-hero-pattern bg-hero-pattern2 bg-cover bg-no-repeat bg-center`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
        </div>
        <SocialMedia />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
