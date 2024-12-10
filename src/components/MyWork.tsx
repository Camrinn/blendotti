import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyWork: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = galleryRef.current;

    if (element) {
      // Horizontal scrolling effect
      gsap.to(element, {
        x: () => -(element.scrollWidth - window.innerWidth), // Scroll horizontally
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: () => `+=${element.scrollWidth}`, // Match gallery width for scrolling
          scrub: 1,
          pin: true,
        },
      });

      // Fade-in animation for images
      gsap.fromTo(
        element.querySelectorAll(".gallery-item"),
        { opacity: 0, scale: 0.8 }, // Start state
        {
          opacity: 1,
          scale: 1, // End state
          duration: 0.2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            toggleActions: "play none none reverse", // Smooth fade-in and reverse
          },
        }
      );
    }
  }, []);

  return (
    
    <div className="flex h-screen w-screen bg-black text-white overflow-hidden">
      {/* Sidebar padding to make room for the Navbar */}
      <div className="w-48 lg:w-64 flex-shrink-0"></div>

      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-6 space-y-6">
        {/* Logo/Title */}
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Check Out <br /> My Work.
          </h1>
        </div>

      {/* Horizontal Scrolling Gallery */}
      <div
        ref={galleryRef}
        className="flex space-x-6 py-6 pr-6 lg:pr-16 pl-48 lg:pl-64 overflow-hidden w-[calc(200vw)]" // Adjusted width for scrolling
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="gallery-item h-64 w-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('/assets/haircut${index + 1}.jpg')`, // Replace with actual paths
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyWork;
