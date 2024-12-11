import React, { useState } from "react";
import SocialIcons from "./SocialIcons";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white z-50">
      {/* Navbar for larger screens */}
      <div className="flex justify-between items-center px-6 py-4 md:hidden">
        <div className="text-2xl font-bold tracking-wide leading-tight">
          <img
            src="assets/logo4.png"
            alt="Logo"
            className="w-32 h-auto md:w-48"
          />
        </div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <nav className="flex flex-col space-y-4 px-6 py-4 bg-black md:hidden">
          <button
            onClick={() => {
              scrollToSection("hero");
              setIsOpen(false);
            }}
            className="hover:text-gray-400"
          >
            HOME
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="hover:text-gray-400"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => {
              scrollToSection("work");
              setIsOpen(false);
            }}
            className="hover:text-gray-400"
          >
            MY WORK
          </button>
          <button
            onClick={() => {
              scrollToSection("book");
              setIsOpen(false);
            }}
            className="hover:text-gray-400"
          >
            BOOK ME
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="hover:text-gray-400"
          >
            CONTACT ME
          </button>
          <SocialIcons />
        </nav>
      )}

      {/* Sidebar for larger screens */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-48 bg-black flex-col justify-between px-6 py-10">
        <div className="text-2xl font-bold tracking-wide leading-tight">
          <img
            src="assets/logo4.png"
            alt="Logo"
            className="w-32 h-auto md:w-48"
          />
        </div>
        <nav className="flex flex-col space-y-4">
          <button onClick={() => scrollToSection("hero")} className="hover:text-gray-400">
            HOME
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-gray-400">
            ABOUT ME
          </button>
          <button onClick={() => scrollToSection("work")} className="hover:text-gray-400">
            MY WORK
          </button>
          <button onClick={() => scrollToSection("book")} className="hover:text-gray-400">
            BOOK ME
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-400">
            CONTACT ME
          </button>
        </nav>
        <SocialIcons />
      </div>
    </div>
  );
};

export default NavBar;
