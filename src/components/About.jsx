import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, darkMode }) => {
  const backgroundClass = 'bg-tertiary';
  const textColorClass = darkMode ? 'text-white-100' : 'text-black-800';

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-full p-[1px] rounded-[20px] shadow-card ${backgroundClass}`}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col `}
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
          <h3 className={`text-[20px] font-bold text-center ${textColorClass}`}>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = ({ darkMode }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}  ${darkMode ? 'text-white-100' : 'text-black-800'}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${darkMode ? 'text-white-100' : 'text-black-800'}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${
          darkMode ? 'text-white-100' : 'text-black-800' // Ensure text is visible in light mode
        }`}
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} darkMode={darkMode} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
