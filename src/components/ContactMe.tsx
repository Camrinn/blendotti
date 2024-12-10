import React from "react";

const ContactMe: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Sidebar padding to account for the Navbar */}
      <div className="w-48 lg:w-64 flex-shrink-0"></div>

      {/* Contact Form */}
      <div className="flex flex-col items-center space-y-8 text-center px-8 lg:px-16">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold">Contact Me</h1>
        <p className="text-gray-400 text-sm lg:text-lg">
          Let’s connect! Reach out to me directly on Instagram or send me an email.
        </p>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/blendotti/" // Replace with the Instagram profile link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition duration-300"
        >
          Message Me on Instagram
        </a>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700"></div>

        {/* Email Section */}
        <a
          href="mailto:owner-email@example.com" // Replace with the owner's email
          className="text-sm lg:text-lg text-gray-400 hover:text-gray-200 transition duration-200"
        >
          Or email me at: <span className="underline">owner-email@example.com</span>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
