import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-black text-white overflow-hidden">
      {/* Sidebar padding to make room for the Navbar */}
      <div className="w-48 lg:w-64 flex-shrink-0"></div>

      {/* Left Image Section */}
      <div
        className="flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('assets/aboutme.png')", // Replace with your image path
        }}
      >
        {/* Optional Gradient Overlay */}
        <div className="bg-gradient-to-r from-black via-black/50 h-full w-full absolute"></div>

        {/* Large Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl lg:text-[10rem] uppercase font-extrabold tracking-wide opacity-10 text-white">
            About Us
          </h2>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-6 space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Learn More <br /> About Us
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-sm lg:text-lg text-gray-400">
          We are dedicated to providing the freshest cuts and the sharpest looks.{" "}
          <span className="underline cursor-pointer">more details</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
