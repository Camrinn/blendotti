import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BookMe: React.FC = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Photo Animation
    gsap.fromTo(
      photoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
    );

    // Button Animation
    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-gray-800 to-black text-white flex items-center justify-center overflow-hidden">
      {/* Sidebar padding to account for the Navbar */}
      <div className="w-48 lg:w-64 flex-shrink-0"></div>

      {/* Center Content */}
      <div className="flex flex-col items-center space-y-8">
        {/* Photo with Shadow */}
        <div
          ref={photoRef}
          className="h-64 w-64 lg:h-72 lg:w-72 bg-cover bg-center rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          style={{
            backgroundImage: "url('assets/haircut14.jpg')", // Replace with actual photo path
          }}
        ></div>

        {/* Button */}
        <a
          ref={buttonRef}
          href="https://buds-barbershop.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-300 shadow-lg transform hover:scale-110 transition duration-300"
        >
          Book Me
        </a>
      </div>
    </div>
  );
};

export default BookMe;
