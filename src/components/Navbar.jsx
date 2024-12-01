import React, { useState } from "react";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-black text-white dark:bg-gray-500 dark:text-black px-10 md:px-16 lg:px-24 sticky top-0 z-50 border-b-2 border-cyan-100 dark:border-black`}
    >
      <div className="container py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold md:text-left text-center md:inline gradient-text cursor-pointer">
          Puskar
        </div>

        {/* Main Nav Items - hidden on small screens */}
        <div className={`hidden md:flex space-x-6`}>
          <a href="#home" className="hover:text-gray-400 dark:font-semibold">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 dark:font-semibold">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400 dark:font-semibold">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400 dark:font-semibold">
            Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1kCmtI01fhrUlM3fJ3OihRJVlhdFcUtdt/view?usp=drive_link"
            className="hover:text-gray-400 dark:font-semibold"
          >
            Academy
          </a>
          <a href="#contact" className="hover:text-gray-400 dark:font-semibold">
            Contact
          </a>
        </div>

        {/* Contact Me and Dark Mode Toggle + Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Contact Me and Dark Mode */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div
                className="relative inline-block w-12 h-6 mt-1 mb-2 md:mt-3 mr-4 cursor-pointer"
                onClick={handleToggle}
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-full transition bg-gray-300  dark:bg-gray-300 "></div>
                <div
                  className={`absolute top-0 left-0 h-6 w-6 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 ease-in-out transform ${
                    darkMode ? "translate-x-6 bg-gray-800" : ""
                  }`}
                ></div>
              </div>

              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                  {isOpen ? (
                    <FaTimes className="text-2xl" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
            <button className="hidden lg:block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 mb-2">
              <a href="#contact">Connect Me</a>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu - Visible when Hamburger is clicked */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-black dark:bg-white text-white dark:text-black px-8 py-4 shadow-lg">
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="#home"
                className="hover:text-gray-400 dark:font-semibold"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 dark:font-semibold"
                onClick={toggleMenu}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-gray-400 dark:font-semibold"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-gray-400 dark:font-semibold"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1kCmtI01fhrUlM3fJ3OihRJVlhdFcUtdt/view?usp=drive_link"
                className="hover:text-gray-400 dark:font-semibold"
                onClick={toggleMenu}
              >
                Academy
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400 dark:font-semibold"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
