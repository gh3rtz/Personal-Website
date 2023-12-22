// Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onButtonClick = () => {
    // using JavaScript method to get PDF file
    fetch("myCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating a new object of the PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "myCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <section
      id="navbar"
      className={`${
        scrollY > 0
          ? "fixed bg-opacity-70 backdrop-filter backdrop-blur-md"
          : ""
      } dark:bg-gray-900 transition-all duration-300 w-full top-0 z-10`}
    >
      <div className="text-2xl container flex items-center justify-between mx-auto px-8">
        <a href="https://givarihertz.com" className="flex items-center">
          <h1 className="font-bold uppercase dark:text-white">
            Givari{" "}
            <span className="text-orange-500 font-bold dark:">Hertz</span>
          </h1>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={onButtonClick}
            className={`text-2xl hover:bg-black hover:text-white focus:outline-none font-medium
              rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:text-white dark:hover:text-orange-500 ${
                scrollY > 0 ? "dark:hover:bg-opacity-70" : ""
              }`}
          >
            myCV
          </button>

          {/* Toggle Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className={`text-2xl hover:text-orange-500 focus:outline-none font-medium
              rounded-lg px-5 py-2.5 text-center dark:text-white dark:hover:text-orange-500 transition-all duration-300`}
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="items-center justify-bet_ween hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:flex-row">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 text-gray-700 hover:font-bold
                  focus:outline-none
                  font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0 dark:text-white cursor-pointer ${
                    scrollY > 0 ? "dark:hover:bg-opacity-70" : ""
                  }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="porto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 text-gray-700 hover:font-bold
                  focus:outline-none font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0 dark:text-white cursor-pointer ${
                    scrollY > 0 ? "dark:hover:bg-opacity-70" : ""
                  }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 text-gray-700 hover:font-bold
                  focus:outline-none font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0 dark:text-white cursor-pointer ${
                    scrollY > 0 ? "dark:hover:bg-opacity-70" : ""
                  }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
