import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  darkMode,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`p-5 rounded-2xl sm:w-[360px] w-full dark:bg-tertiary bg-white-200 `}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer 
                dark:black-gradient white-gradient
              `}
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className={`font-bold text-[24px] dark:text-white text-black `}>{name}</h3>
          <p className={`mt-2 text-[14px] dark:text-secondary text-black`}>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ darkMode }) => {
  // State to control showing all projects or limited projects
  const [showAll, setShowAll] = useState(false);

  // Limit the number of projects to show initially
  const displayedProjects = showAll ? projects : projects.slice(0, 6); // Showing 6 projects initially

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}  dark:text-white text-black`}>My work</p>
        <h2 className={`${styles.sectionHeadText} dark:text-white text-black`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] dark:text-secondary text-black-200 `}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {displayedProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={`project-${index}`}
          >
            <ProjectCard
              index={index}
              {...project}
              darkMode={darkMode}
            />
          </a>
        ))}
      </div>

      {/* View More / View Less Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-full bg-blue-500 text-white font-bold text-[16px] dark:bg-blue-700"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
