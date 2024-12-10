import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

const App: React.FC = () => {
  return (
    <div className="relative">
      <NavBar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default App;
