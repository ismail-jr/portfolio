import {
  BusinessCenterRounded,
  CircleOutlined,
  LensBlurRounded,
  MenuBookRounded,
} from "@mui/icons-material";
import React from "react";

const Resume = () => {
  return (
    <div className="resume p-6">
      {/* Resume Header */}
      <h1 className="text-4xl font-bold mb-10 relative">
        Resume
        <span className="absolute left-0 bottom-[-14px] w-16 h-1.5 bg-yellow-600 rounded"></span>
      </h1>

      {/* Education Section */}
      <div className="flex py-11">
        {/* Sidebar with Icon */}
        <div className="w-[5%] rounded-l-xl border-l-4 border-yellow-600 p-2 relative">
          <MenuBookRounded className="text-yellow-600" />
          <div className="absolute top-[4.5rem] left-1/2 transform -translate-x-1/2">
            <LensBlurRounded className="text-yellow-600" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-[95%]">
          <h1 className="text-2xl font-bold pl-6 text-gray-200">Education</h1>
          <div className="pt-10">
            <h3 className="pl-6 text-xl font-medium text-gray-300">
              University of Cape Coast
            </h3>
            <p className="text-yellow-600 pl-6 pt-2">2022 — 2026</p>
            <p className="p pl-6">
              Bachelor of Science in Information Technology
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="pt-6">
        <div className="flex">
          {/* Sidebar with Icon and Vertical Line */}
          <div className="w-[5%] rounded-l-xl border-l-4 border-yellow-600 p-2 relative">
            <BusinessCenterRounded className="text-yellow-600" />
          </div>

          {/* Content Section */}
          <div className="w-[95%]">
            <h1 className="text-2xl font-bold pl-6 text-gray-200">
              Experience
            </h1>

            {/* First Experience */}
            <div className="pt-10">
              <h3 className="pl-6 text-xl font-medium text-gray-300">
                Backend Engineer - KIG (Koudri Innovation Groupe)
              </h3>
              <p className="text-yellow-600 pl-6 pt-2">2024 — NOW</p>
              <p className="p pl-6">
                As a Backend Engineer, I develop and maintain scalable backend
                services, ensuring they are secure and efficient. I also manage
                VPS and cloud infrastructure, optimizing server performance and
                implementing robust security measures to protect data and
                systems.
              </p>
            </div>

            {/* Second Experience */}
            <div className="pt-10 flex items-start">
              <div className="pl-4">
                <h3 className="text-xl font-medium text-gray-300">
                  Software Engineer - Tech Solutions Inc.
                </h3>
                <p className="text-yellow-600 pt-2">2023 — 2024</p>
                <p className="p">
                  In this role, I developed full-stack web applications,
                  collaborated with cross-functional teams, and ensured seamless
                  integration of front-end interfaces with back-end systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills py-11">
        <h1 className="text-2xl font-bold py-6">My Skills</h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skill Item */}
          {[
            { name: "Frontend", value: 80 },
            { name: "Backend", value: 90 },
            { name: "AI/ML", value: 55 },
            { name: "Database", value: 75 },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-medium text-gray-300 mb-4">
                {skill.name}
              </h3>
              <div
                className="radial-progress text-yellow-600 border-yellow-600 border-4 w-20 h-20 mx-auto"
                style={{ "--value": skill.value }}
                role="progressbar"
              >
                {skill.value}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
