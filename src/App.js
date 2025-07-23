import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import VantaWavesBackground from "./components/vantaWavesBackground";
import Contact from "./components/Contact/contact";
import Email from "./components/Contact/email";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 400px
      if (window.scrollY > 400) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Always render Navbar but hide/show with class */}
      <div className={showNavbar ? "navbar-visible" : "navbar-hidden"}>
        <Navbar />
      </div>

      <VantaWavesBackground />
      <Intro />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <div className="mb-3 text-center">
            <a
              href="https://github.com/arifhakim7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arifhakimasri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} Arif Hakim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
