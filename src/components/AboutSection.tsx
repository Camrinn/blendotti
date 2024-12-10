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
        My name is Gabriel Bendotti or commonly known as "Blendotti". 
        I am a Barber based in Philadelphia, Pennsylvania. 
        I began cutting hair in the midst of the Covid-19 pandemic in January of 2021 and since then have found my passion in the art of Barbery. 
        You can find me at The Men's Club Barbershop located in the Roxborough/Manayunk area of Philadelphia or at Bud’s Barbershop located in South Philly (Tuesdays only). 
        I am really looking forward to my journey of creating amazing artwork and memories with all of my clients. 
        Book me today to join me on the journey and become more than just a life long client..{" "}
          <span className="underline cursor-pointer">more details</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
