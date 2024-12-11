import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row h-auto w-screen bg-black text-white overflow-hidden">
      {/* Left Image Section */}
      <div
        className="flex-1 bg-cover bg-center relative h-64 lg:h-auto"
        style={{
          backgroundImage: "url('assets/aboutme.png')", // Replace with your image path
        }}
      >
        {/* Optional Gradient Overlay */}
        <div className="bg-gradient-to-r from-black via-black/50 h-full w-full absolute"></div>

        {/* Large Text Overlay */}
        <div className="absolute inset-0 flex mt-4items-center justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-[10rem] uppercase font-extrabold tracking-wide opacity-10 text-white">
            About Us
          </h2>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-16 py-8 space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
            Learn More <br /> About Us
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-sm md:text-base lg:text-lg text-gray-400 text-justify">
          My name is Gabriel Bendotti or commonly known as <strong>"Blendotti"</strong>.
          I am a Barber based in Philadelphia, Pennsylvania. I began cutting hair in the midst of the
          Covid-19 pandemic in January of 2021 and have since found my passion in the art of Barbery. <br /><br />
          You can find me at <strong>The Men's Club Barbershop</strong> located in the Roxborough/Manayunk area of
          Philadelphia or at <strong>Bud’s Barbershop</strong> located in South Philly (Tuesdays only). <br /><br />
          I am really looking forward to my journey of creating amazing artwork and memories with all of my clients.
          Book me today to join me on the journey and become more than just a lifelong client...{" "}
          <span className="underline cursor-pointer">more details</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
