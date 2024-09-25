import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Loading,SocialMedia} from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);
    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`relative z-0 dark:bg-primary dark:text-white bg-white text-black`}>
        {loading ? (
          <Loading /> 
        ) : (
          <>
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
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
