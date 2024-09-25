import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === activeTab
  );

  const tabs = ["Frontend", "Backend", "Mobile", "Others"];

  return (
    <div className="tech-container flex flex-col items-center my-8"> {/* Center the container */}
     <h1 className={`${styles.sectionHeadText} dark:text-white-100 text-black-800 text-center`} >Tech Stack</h1>
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
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-4xl justify-items-center"> 
        {filteredTechnologies.map((technology) => (
          <div className="flex flex-col items-center w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
