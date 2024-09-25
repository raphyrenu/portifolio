import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, darkMode }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`w-full p-[1px] rounded-[20px] shadow-card 
        dark:bg-tertiary  bg-white
      `}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col 
          dark:bg-tertiary dark:text-white bg-white text-black
        `}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ darkMode }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-white-100 text-black-800`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} dark:text-white-100 text-black-800`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] dark:text-white-100 text-black-800 `}
      >
        I'm a full-stack web developer dedicated to creating visually appealing, functional, and scalable web applications. Currently, I’m studying software development and Embedded Systems at Rwanda Coding Academy
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
