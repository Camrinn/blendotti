import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="relative flex h-[calc(100vh-4rem)] w-screen bg-black text-white overflow-hidden">
      {/* Sidebar padding for larger screens */}
      <div className="hidden md:block w-48 lg:w-64 flex-shrink-0"></div>

      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-16 py-6 space-y-6">
        {/* Logo/Title */}
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Fresh Cuts. <br /> Fresh Look.
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-sm lg:text-lg text-gray-400">
          Philly's Finest.{" "}
          <span className="underline cursor-pointer">more details</span>
        </p>
      </div>

      {/* Right Image Section */}
      <div
        className="flex-1 bg-cover bg-center relative z-0"
        style={{
          backgroundImage: "url('assets/haircut6.jpg')",
        }}
      >
        {/* Optional Gradient Overlay */}
        <div className="bg-gradient-to-l from-black via-black/50 h-full w-full absolute"></div>

        {/* Large Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl lg:text-[6rem] uppercase font-extrabold tracking-wide mr-10 opacity-10 text-white">
            Blendotti
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
