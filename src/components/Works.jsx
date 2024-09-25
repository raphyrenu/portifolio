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
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`p-5 rounded-2xl sm:w-[360px] w-full dark:bg-tertiary bg-white-200`}
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
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "API Based", "Others", "Frontend", "Mobile", "Full Stack"];

  const filteredProjects = activeTab === "All" ? projects : projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-white text-black`}>My work</p>
        <h2 className={`${styles.sectionHeadText} dark:text-white text-black`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] dark:text-secondary text-black-200`}
        >
          Following projects showcase my skills and experience through
          real-world examples of my work
        </motion.p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs flex justify-center gap-5 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-semibold rounded-lg transition-colors duration-300 ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {filteredProjects.map((project, index) => (
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
    </>
  );
};

export default SectionWrapper(Works, "");
