import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CodingProfiles from "./components/sections/CodingProfiles";
import Certifications from "./components/sections/Certifications";
import Achievements from "./components/sections/Achievements";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
