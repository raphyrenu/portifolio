import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = ({ darkMode }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    "3D visuals, user interfaces <br /> and web applications",
    "full-stack web applications <br /> and APIs",
    "mobile applications <br /> and game development",
    "graphic designs <br /> and animations",
    "interactive user experiences <br />",
    // Add more skills or variations as needed
  ];

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Change skill every 3 seconds

    return () => clearInterval(skillInterval); // Clear interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} ${darkMode ? 'text-gray-800' : 'text-white-100'}`}>
            Hi, I'm <span className="text-[#915EFF]">Charles</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 ${darkMode ? 'text-gray-800' : 'text-white-100'}`}>
            I develop <span dangerouslySetInnerHTML={{ __html: skills[currentSkillIndex] }} />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className={`w-[35px] h-[64px] rounded-3xl border-4 ${darkMode ? 'border-gray-300' : 'border-secondary'} flex justify-center items-start p-2`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${darkMode ? 'bg-gray-300' : 'bg-secondary'} mb-1`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
