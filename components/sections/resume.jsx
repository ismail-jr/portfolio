import {
  BusinessCenterRounded,
  CircleOutlined,
  LensBlurRounded,
  MenuBookRounded,
} from "@mui/icons-material";
import React from "react";

const Resume = () => {
  return (
    <div className="resume p-6 ">
      <h1 className="text-4xl font-bold mb-10 relative">
        Resume
        <span className="absolute left-0 bottom-[-14px] w-16 h-1.5 bg-yellow-500 rounded"></span>
      </h1>
      <div className="flex pb-6">
        {/* First Column - 20% Width */}
        <div className="w-[5%] rounded-l-xl border-l-4 p-2">
          <MenuBookRounded className="text-yellow-500 " />
          <div className="pt-10">
            <LensBlurRounded className="text-yellow-500" />
          </div>
        </div>

        {/* Second Column - 80% Width */}
        <div className="w-[95%]">
          <h1 className="text-2xl font-bold pl-6">Education</h1>
          <h3 className="pl-6 pt-10 text-xl font-medium">
            University of Cape Coast
          </h3>
          <p className="text-yellow-500 pl-6 pt-2">2022 — 2026</p>
          <p className="text-slate-400 pl-6">
            Bachelor of Science Information Technology
          </p>
        </div>
      </div>

      <div className="flex pt-6">
        {/* First Column - 20% Width */}
        <div className="w-[5%] rounded-l-xl border-l-4 p-2">
          <BusinessCenterRounded className="text-yellow-500 " />
          <div className="pt-10">
            <CircleOutlined className="text-yellow-500" />
          </div>
        </div>

        {/* Second Column - 80% Width */}
        <div className="w-[95%]">
          <h1 className="text-2xl font-bold pl-6">Experience</h1>
          <h3 className="pl-6 pt-10 text-xl font-medium">
            Backend Engineer - KIG (Koudri inovation groupe)
          </h3>
          <p className="text-yellow-500 pl-6 pt-2">2024 — NOW</p>
          <p className="text-slate-400 pl-6">
            As a Backend Engineer, I develop and maintain scalable backend
            services, ensuring they are secure and efficient. I also manage VPS
            and cloud infrastructure, optimizing server performance and
            implementing robust security measures to protect data and systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
