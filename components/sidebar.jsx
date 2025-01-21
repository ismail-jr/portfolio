"use client";
import { useEffect, useState } from "react";
import {
  CalendarViewMonthOutlined,
  EmailOutlined,
  PhoneAndroidOutlined,
  RoomOutlined,
  ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import Image from "next/image";

const Sidebar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid server-side rendering issues
  }

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div className="side-bar w-full sm:w-72 h-auto p-6 rounded-xl shadow-lg border border-gray-600 bg-gray-900 flex flex-col space-y-6 overflow-y-auto scrollbar-hide relative">
        {/* Profile Section */}
        <div className="flex items-center sm:flex-col sm:items-center justify-between w-full">
          {/* Profile Image */}
          <div className="w-2/5 sm:w-3/5">
            <Image
              src="/images/Ismail.jpg"
              alt="Profile Image of Jibriel Ismail"
              width={600} // Increase width
              height={400} // Increase height
              className="rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" // Rounded corners, shadow, and scale effect
            />
          </div>

          {/* Name and Title */}
          <div className="w-3/5 sm:w-full sm:mt-4 pl-4 flex flex-col items-center justify-center sm:flex-col">
            <h2 className="text-xl font-bold text-white mb-4">
              JIBRIEL ISMAIL
            </h2>{" "}
            {/* Added margin-bottom */}
            <p className="text-white mt-2 sm:mt-0 sm:ml-4 rounded-lg shadow-sm shadow-yellow-500 p-2">
              Software Engineer
            </p>
          </div>

          {/* Toggle Button for Medium and Small Screens */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white sm:hidden flex items-center justify-center mt-4"
          >
            {isExpanded ? (
              <ArrowDropUp className="text-3xl" />
            ) : (
              <ArrowDropDown className="text-3xl" />
            )}
          </button>
        </div>

        {/* Sidebar Content */}
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } sm:block transition-all duration-300`}
        >
          <hr className="border-gray-700 mt-4" />

          {/* Contact Information */}
          <div className="space-y-6 mt-4">
            {/* Email */}
            <div className="flex items-start space-x-3">
              <EmailOutlined className="text-gray-600 p-1 text-3xl rounded-l-lg shadow-lg shadow-yellow-500" />
              <div>
                <h1 className="text-sm font-semibold text-white">EMAIL</h1>
                <a
                  href="mailto:ismail.jibriel.jr@gmail.com"
                  className="text-sm text-gray-500 hover:underline"
                >
                  ismail.jibriel.jr@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <PhoneAndroidOutlined className="text-gray-600 p-1 text-3xl rounded-l-lg shadow-lg shadow-yellow-500" />
              <div>
                <h1 className="text-sm font-semibold text-white">PHONE</h1>
                <a
                  href="tel:+233599329539"
                  className="text-sm text-gray-500 hover:underline"
                >
                  +233 599329539
                </a>
              </div>
            </div>

            {/* Birthday */}
            <div className="flex items-start space-x-3">
              <CalendarViewMonthOutlined className="text-gray-600 p-1 text-3xl rounded-l-lg shadow-lg shadow-yellow-500" />
              <div>
                <h1 className="text-sm font-semibold text-white">BIRTHDAY</h1>
                <p className="text-sm text-gray-500">OCT 21, 2002</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <RoomOutlined className="text-gray-600 p-1 text-3xl rounded-l-lg shadow-lg shadow-yellow-500" />
              <div>
                <h1 className="text-sm font-semibold text-white">LOCATION</h1>
                <p className="text-sm text-gray-500">Kumasi, Ghana</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 mt-4" />

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500"
            >
              <GitHub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <LinkedIn className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400"
            >
              <Twitter className="text-3xl" />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500"
            >
              <Instagram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
