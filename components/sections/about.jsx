import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleOpenModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTestimonial(null);
  };

  const testimonials = [
    {
      name: "Lucy Adom",
      date: "12 June, 2024",
      avatar: "/images/avatar-2.png",
      text: "I couldn't be happier with the e-commerce website developed by ISMAIL. As a single developer, ISMAIL not only understood my vision but brought it to life with a level of precision and creativity that exceeded my expectations. The website is not only visually stunning but also highly functional, providing an excellent shopping experience for our customers. ISMAIL's dedication and expertise made the entire process smooth, and the results speak for themselves. I highly recommend ISMAIL for anyone looking for a skilled and reliable developer.",
    },
    {
      name: "Peter Essibu",
      date: "14 January, 2025",
      avatar: "/images/avatar-1.png",
      text: "Working with ISMAIL on our startup website was a fantastic experience. As a solo developer, ISMAIL not only grasped the essence of our brand but also delivered a website that perfectly aligns with our vision. The modern design, user-friendly interface, and responsive layout have been instrumental in establishing our online presence. ISMAIL went above and beyond, providing valuable insights and creative solutions throughout the development process. I highly recommend ISMAIL to any startup or business looking for a dedicated and skilled developer.",
    },
  ];

  return (
    <>
      <div className="about p-6">
        <h1 className="text-4xl font-bold mb-10 relative">
          About Me
          <span className="absolute left-0 bottom-[-14px] w-16 h-1.5 bg-yellow-600 rounded"></span>
        </h1>
        <p className="p">
          Hi, I’m Jibriel Ismail, a Software Engineer and Full-Stack Web
          Developer with 3 years of experience, based in Ghana. I’m passionate
          about transforming complex problems into simple, elegant, and
          intuitive solutions that deliver real value to users.
        </p>
        <div className="my-4"></div>

        <p className="p">
          Specializing in Node.js, React.js, and Next.js, I focus on building
          secure, scalable systems with a solid foundation in cloud
          cybersecurity. As a Backend Engineer at Amalitech, I oversee backend
          architecture, manage VPS and cloud infrastructure, and ensure the
          security and performance of high-traffic e-commerce platforms. In
          addition to frontend development, I have extensive experience with
          React.js, creating seamless, user-friendly web applications. I’ve
          shared my expertise as a Next.js instructor on Headstater, empowering
          learners worldwide, and as a developer in UCC-GH, where I’ve delivered
          a range of successful freelance projects. My skill set spans the full
          software development lifecycle from system design and architecture to
          deployment and maintenance ensuring that I deliver high-quality,
          user-focused solutions that meet both business and technical goals. If
          you’re looking for a developer who’s dedicated to excellence,
          innovation, and bringing your vision to life, let’s connect!
        </p>
      </div>

      <section className="my-12">
        <h1 className="text-3xl font-bold mb-8 text-white">What I Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="relative bg-gray-600 bg-opacity-20 backdrop-blur-md border border-gray-800 shadow-inner rounded-xl p-6">
            <div className="flex items-start space-x-6">
              {/* SVG Icon */}
              <div className="w-40 h-20">
                <img
                  src="/images/icon-design.svg"
                  alt="Web Development"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Title and Description */}
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Software Engineer
                </h2>
                <p className="text-gray-300 mt-2">
                  As a Software Engineer, I design, develop, and maintain
                  software solutions, focusing on creating efficient, scalable,
                  and secure systems. My work spans the full development
                  lifecycle, ensuring high-quality software that meets both user
                  and business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative bg-gray-600 bg-opacity-20 backdrop-blur-md border border-gray-800 shadow-inner rounded-xl p-6">
            <div className="flex items-start space-x-6">
              {/* SVG Icon */}
              <div className="w-40 h-30">
                <img
                  src="/images/icon-dev.svg"
                  alt="Mobile Development"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Title and Description */}
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Full Stack Web Developer
                </h2>
                <p className="text-gray-300 mt-2">
                  As a Full Stack Web Developer, I build and maintain both
                  frontend and backend systems, ensuring seamless functionality,
                  scalability, and user-friendly experiences. I work with a
                  range of technologies to deliver complete, secure, and
                  efficient web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-12 text-center text-white">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-900 bg-opacity-20 backdrop-blur-md border border-gray-700 shadow-lg rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleOpenModal(testimonial)}
            >
              {/* Avatar */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-gray-800 object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h2>
                <p className="p mt-4">
                  {testimonial.text.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          className="bg-gray-900 border border-gray-700 text-white p-6 rounded-xl shadow-xl transition-all duration-300"
          sx={{
            width: "90%",
            maxWidth: "600px",
            margin: "100px auto",
            position: "relative",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
          <h2 className="text-2xl font-semibold mb-4">
            {selectedTestimonial?.name}
          </h2>
          <p className="text-gray-400 mb-4">{selectedTestimonial?.date}</p>
          <p className="p">{selectedTestimonial?.text}</p>
        </Box>
      </Modal>
    </>
  );
};

export default About;
