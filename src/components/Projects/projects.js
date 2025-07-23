import React from 'react';
import './projects.css';
import Diabetease from '../../assets/diabetease.png';

const Projects = () => {
  return (
    <section className="project-section d-flex align-items-center justify-content-center py-5" id="project">
      <div className="container mt-5">
        <h2 className="projectHeader fw-bold text-center display-4 mb-5">Recent Project</h2>

        <div className="row align-items-center p-4">
          {/* Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="project-img-wrapper">
              <img src={Diabetease} alt="Diabetease Mobile App" className="img-fluid project-img" />
            </div>
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h2 className="project-title">
              <span className="fw-bold">Diabetease</span><br />
              <span className="fw-bold">Recipe-Sharing App</span>
            </h2>
            <p className="project-desc">
              Full stack diabetic-friendly recipe sharing app built with Flutter and Firebase.
            </p>
            <div className="project-links mt-4">
            <a
              href="https://github.com/arifhakim7/diabetease_mobile_app"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEARN MORE
            </a>
          </div>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default Projects;
