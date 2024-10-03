// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Service from './components/Service'
// import './App.css'

// function App() {

//   return (
//     <>
//       <div className='   w-fit   mt-0 ml-0'>
//         <Navbar />
//         <Hero />
//         <About />
//         <Service />
//         <Projects />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App

// --------------------------------------------

// import { useState, useEffect } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Service from "./components/Service";
// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   // Load initial mode from localStorage if available
//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "true") {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // Toggle dark mode
//   const handleToggle = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("darkMode", "true");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("darkMode", "false");
//     }
//   };

//   return (
//     <>
//       <div className={`w-fit mt-0 ml-0 ${darkMode ? "dark" : ""}`}>
//         <Navbar darkMode={darkMode} handleToggle={handleToggle} />
//         <Hero />
//         <About />
//         <Service />
//         <Projects />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;


////////////////////////////////

import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import "./App.css";

// Variants for Framer Motion scroll animations
const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const App = () => {
  return (
    <>
      <div className="w-fit mt-0 ml-0">
        {/* Navbar is usually always visible, so no scroll animations here */}
        <Navbar />

        {/* Motion Div for Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <Hero />
        </motion.div>

        {/* Motion Div for About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <About />
        </motion.div>

        {/* Motion Div for Service Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <Service />
        </motion.div>

        {/* Motion Div for Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <Projects />
        </motion.div>

        {/* Motion Div for Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <Contact />
        </motion.div>

        {/* Motion Div for Footer Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default App;


////////////////////////

