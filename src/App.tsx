import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MyWork from "./components/MyWork";
import BookMe from "./components/BookMe";
import ContactMe from "./components/ContactMe";

const App: React.FC = () => {
  return (
    <div className="relative">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <MyWork />
      <BookMe />
      <ContactMe />
    </div>
  );
};

export default App;
