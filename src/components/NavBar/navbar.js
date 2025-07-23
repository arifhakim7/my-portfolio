import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Keep your custom styles if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-black fixed-top">
      <div className="container">
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#FFD43B", fontSize: "24px" }} />
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto mb-2 text-end">
            <li className="nav-item">
              <Link
                to="home"
                smooth
                duration={500}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth
                duration={500}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                smooth
                duration={500}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth
                duration={500}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                Contact Me
              </Link>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
