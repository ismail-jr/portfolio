"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../navbar";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./contact";

const About = () => {
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
            className="about p-6 rounded-lg shadow-xl border border-gray-600"
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
            <h1 className="text-2xl font-bold mb-4">About</h1>
            <p>
              This is the about section of the portfolio. It provides an
              overview of who I am and what I do.
            </p>
          </motion.div>
        )}

        {activeSection === "portfolio" && (
          <motion.div
            key="portfolio" // Unique key
            className="portfolio p-6 rounded-lg shadow-xl border border-gray-600 bg-white"
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
            <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
            <Portfolio />
          </motion.div>
        )}

        {activeSection === "resume" && (
          <motion.div
            key="resume" // Unique key
            className="resume p-6 rounded-lg shadow-xl border border-gray-600 bg-white"
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
            <h1 className="text-2xl font-bold mb-4">Resume</h1>
            <Resume />
          </motion.div>
        )}

        {activeSection === "contact" && (
          <motion.div
            key="contact" // Unique key
            className="contact p-6 rounded-lg shadow-xl border border-gray-600 bg-white"
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
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
