"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Portfolio from "./sections/resume";
import Resume from "./sections/portfolio";
import Contact from "./sections/contact";
import About from "./sections/about";

const MainSection = () => {
  const [activeSection, setActiveSection] = useState("about");

  const variants = {
    hidden: { opacity: 0 }, // Initial state (fade out)
    visible: { opacity: 1 }, // Active state (fade in)
    exit: { opacity: 0 }, // Exit state (fade out)
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {activeSection === "about" && (
          <motion.div
            key="about" // Unique key
            className="about p-6 rounded-2xl shadow-xl border border-gray-600"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <About />
          </motion.div>
        )}

        {activeSection === "resume" && (
          <motion.div
            key="resume" // Unique key
            className="resume p-6 rounded-2xl shadow-xl border border-gray-600 bg-white"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <Resume />
          </motion.div>
        )}
        {activeSection === "portfolio" && (
          <motion.div
            key="portfolio" // Unique key
            className="portfolio p-6 rounded-2xl shadow-xl border border-gray-600 bg-white"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <Portfolio />
          </motion.div>
        )}

        {activeSection === "contact" && (
          <motion.div
            key="contact" // Unique key
            className="contact p-6 rounded-2xl shadow-xl border border-gray-600 bg-white"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainSection;
