import React from "react";

const About = () => {
  return (
    <>
      <div className="about p-6 ">
        <h1 className="text-4xl font-bold mb-10 relative">
          About Me
          <span className="absolute left-0 bottom-[-14px] w-16 h-1.5 bg-yellow-500 rounded"></span>
        </h1>
        <p className="about-p">
          I’m Jibriel Ismail software engineer and full stack web developer with
          5 years experience, from Ghana. I enjoy turning complex problems into
          simple, beautiful and intuitive designs.
        </p>
        <div className="my-4"></div>

        <p className="about-p">
          Specializing in Node.js, React.JS and Next.JS as framework. I focus on
          building secure, scalable systems, with a strong foundation in cloud
          cybersecurity. As a Backend Engineer at KIG (Koudri Innovation
          Groupe), I manage the backend, VPS, and cloud frameworks, ensuring the
          security and efficiency of e-commerce platforms. I also work with
          React.js to create seamless web applications, drawing from my
          experience as a React.js instructor on Udemy and a developer for
          Tessafold e.K, where I’ve successfully delivered various freelance
          projects. My expertise spans the full software development lifecycle,
          from design and architecture to deployment and maintenance, always
          aiming to deliver high-quality solutions that meet business and user
          needs.
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
                  Web Development
                </h2>
                <p className="text-gray-300 mt-2">
                  I create responsive, user-friendly web applications using
                  modern frameworks and technologies like React.js, Node.js, and
                  Django.
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
                  Mobile Development
                </h2>
                <p className="text-gray-300 mt-2">
                  I build seamless mobile applications for Android and iOS,
                  ensuring excellent performance and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <h1 className="text-3xl font-bold mb-16">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Testimonial 1 */}
          <div className="relative bg-gray-600 bg-opacity-20 backdrop-blur-md border border-gray-800 shadow-inner rounded-xl p-6 text-center">
            {/* Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src="/images/avatar-2.png"
                alt="Testimonial 1"
                className="w-20 h-20 rounded-full border-4 border-gray-800 object-cover"
              />
            </div>
            {/* Card Content */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-white">John Doe</h2>
              <p className="text-gray-300 mt-4">
                "Working with Jibriel has been an incredible experience. His
                expertise in full-stack development helped bring our project to
                life in record time. Highly recommended!"
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative bg-gray-600 bg-opacity-20 backdrop-blur-md border border-gray-800 shadow-inner rounded-xl p-6 text-center">
            {/* Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src="/images/avatar-1.png"
                alt="Testimonial 2"
                className="w-20 h-20 rounded-full border-4 border-gray-800 object-cover"
              />
            </div>
            {/* Card Content */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-white">Jane Smith</h2>
              <p className="text-gray-300 mt-4">
                "Jibriel's ability to solve complex problems and deliver
                scalable solutions is unmatched. A true professional and a
                pleasure to work with!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
