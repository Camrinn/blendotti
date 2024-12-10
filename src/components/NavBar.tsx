import React from "react";
import SocialIcons from "./SocialIcons";

const NavBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-48 bg-black text-white flex flex-col justify-between px-6 py-10">
      {/* Logo Section */}
      <div className="text-2xl font-bold tracking-wide leading-tight">
      <img
      src="assets/logo4.png">
      </img>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <a href="#home" className="hover:text-gray-400">HOME</a>
        <a href="#about-me" className="hover:text-gray-400">ABOUT ME</a>
        <a href="#my-work" className="hover:text-gray-400">MY WORK</a>
        <a href="#book-me" className="hover:text-gray-400">BOOK ME</a>
        <a href="#promotions" className="hover:text-gray-400">PROMOTIONS</a>
        <a href="#contact-me" className="hover:text-gray-400">CONTACT ME</a>
      </nav>

      {/* Social Links */}
     <SocialIcons />
    </div>
  );
};

export default NavBar;
