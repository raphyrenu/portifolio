import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "Web Developer",
    "Game Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "3D Designer",
    "Designer",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(roleInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Add or remove the "dark" class on the <html> element
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? (darkMode ? "bg-primary" : "bg-white") : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className={`text-[18px] font-bold cursor-pointer flex ${darkMode ? "text-white" : "text-black"
              }`}
          >
            Charles &nbsp;
            <span className="sm:block hidden">
              {" "}
              | {roles[currentRoleIndex]}
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? (darkMode ? "text-white" : "text-black") : "text-secondary"
                } hover:${darkMode ? "text-white" : "text-black"} text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain invert dark:hidden"
            onClick={() => setToggle(!toggle)}
          />
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain hidden dark:flex"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 ${darkMode ? "bg-gray-900" : "bg-white"} absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? (darkMode ? "text-white" : "text-black") : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dark mode toggle switch */}
        <div className="flex items-center ml-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className={`w-11 h-6 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"} transition-all duration-300 ease-in-out`}>
              <span
                className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${darkMode ? "translate-x-full" : ""
                  }`}
              ></span>
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
