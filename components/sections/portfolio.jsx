import React, { useState } from "react";
import Image from "next/image";
import { Portfolio } from "../../public/portfolio";
import { Visibility } from "@mui/icons-material";

const PortfolioComponent = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredPortfolio =
    activeCategory === "All"
      ? Portfolio
      : Portfolio.filter((item) => item.category === activeCategory);

  const categories = ["All", "Backend", "Frontend", "AI/ML", "PFE"];

  return (
    <div className="portfolio p-6">
      <h1 className="text-4xl font-bold mb-10 relative">
        Portfolio
        <span className="absolute left-0 bottom-[-14px] w-16 h-1.5 bg-yellow-600 rounded"></span>
      </h1>

      {/* Navbar */}
      <nav className="flex gap-6 mb-10 text-sm">
        {categories.map((category) => (
          <a
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`cursor-pointer transition-colors ${
              activeCategory === category
                ? "text-yellow-600 font-bold"
                : "text-gray-400 hover:text-gray-300 font-bold"
            }`}
          >
            {category}
          </a>
        ))}
      </nav>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPortfolio.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative group">
              <Image
                src={project.Image}
                alt={`Project ${project.id}`}
                width={500}
                height={300}
                className="object-cover"
                placeholder="blur"
                blurDataURL={project.Image}
              />
              {/* Overlay with Eye Icon */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600"
                >
                  <Visibility className="text-5xl" />
                </a>
              </div>
            </div>
            {/* Description */}
            <div className="p-4">
              <h1 className="text-xl font-bold text-gray-400">
                {project.description}
              </h1>
              <p className="text-gray-500 text-lg mt-2">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;
