
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
import { useState } from "react";

// Variants for Framer Motion scroll animations
const scrollVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

   const handleToggle = () => {
     setDarkMode((prev) => !prev);
     document.documentElement.classList.toggle("dark");
   };
  
  return (
    <>
      <div className="w-fit mt-0 ml-0">
        {/* Navbar is usually always visible, so no scroll animations here */}
        <Navbar darkMode={darkMode} handleToggle={handleToggle} />
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

