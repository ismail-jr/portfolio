import React from "react";

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <ul className="flex space-x-7 -mt-20 p-5 bg-navbar rounded-xl">
        <li>
          <button
            onClick={() => setActiveSection("about")}
            className={`pt-3 ${
              activeSection === "about"
                ? "text-yellow-500 font-bold"
                : "text-gray-300 font-bold"
            }`}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("portfolio")}
            className={`pt-3 ${
              activeSection === "portfolio"
                ? "text-yellow-500 font-bold"
                : "text-gray-300 font-bold"
            }`}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("resume")}
            className={`pt-3 ${
              activeSection === "resume"
                ? "text-yellow-500 font-bold"
                : "text-gray-300 font-bold"
            }`}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("contact")}
            className={`pt-3 ${
              activeSection === "contact"
                ? "text-yellow-500 font-bold"
                : "text-gray-300 font-bold"
            }`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
