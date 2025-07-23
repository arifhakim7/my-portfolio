import React from 'react';
import './intro.css';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section
      id="home"
      className="intro d-flex justify-content-center align-items-center text-center text-white"
      style={{ minHeight: '100vh' }}
    >
      <motion.div className="container">
        <h5 className="mb-2">Hello, my name is</h5>
        <h1 className="display-3 fw-bold text-warning">Arif Hakim</h1>
        <h4 className="mb-3 fw-semibold">Graduate · Innovator · Creator</h4>
        <p className="lead mb-4">
          Passionate to craft and build amazing digital products
        </p>
        <a
          href="/files/Resume - Arif Hakim Bin Asri.pdf" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline-warning btn-lg">View Resume</button>
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
