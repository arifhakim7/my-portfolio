import React from 'react'
import "./skills.css"
import Firebase from "../../assets/firebase.png"
import JS from "../../assets/js.png"
import Java from "../../assets/java.png"
import GitHub from "../../assets/github.png"
import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import Python from "../../assets/python.png"
import Flutter from "../../assets/flutter.png"
import ReactLogo from "../../assets/react.png"
import { motion } from "framer-motion"  

const skillsData = [
  { src: Html, name: "HTML" },
  { src: Css, name: "CSS" },
  { src: JS, name: "JavaScript" },
  { src: ReactLogo, name: "React" },
  { src: Java, name: "Java" },
  { src: Firebase, name: "Firebase" },
  { src: GitHub, name: "Git" },
  { src: Python, name: "Python" },
  { src: Flutter, name: "Flutter" },
];

const Skills = () => {
  return (
    <section id='about' className="d-flex justify-items-center justify-content-center p-4">
      <div className="container mt-5">
      <h2 className="aboutHeader fw-bold text-center display-4 p-4">About me</h2>
      <div className='d-flex flex-column flex-md-row align-items-md-center gap-3'>
      {/* Slide in paragraph from the left */}
          <motion.p 
            className="aboutPara p-5 col-12 col-md-6 mb-3"
            style={{ maxWidth: "700px" }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            I’m a developer with a passion for building accessible, pixel-perfect user interfaces that seamlessly combine design and engineering. 
            I thrive at the intersection of aesthetics and functionality, creating experiences that are not only visually compelling but also 
            optimized for performance and usability. Throughout my academic journey and internship experience, I’ve had the opportunity to develop 
            various software projects that helped me strengthen both my technical and problem-solving skills. These hands-on experiences have deepened 
            my understanding of real-world development practices and team collaboration.
            <br/> 
            <br/>Outside of coding, I enjoy staying active and social — whether it’s playing football, going on hikes to explore nature, 
            spending quality time with friends, or unwinding with video games. These activities help me maintain a balanced and motivated lifestyle.
          </motion.p>

      <div className="skillBoxes col-12 col-md-6 mb-3">
  {/* First Row - 3 items */}
      <div className="row justify-content-center">
        {skillsData.slice(0, 3).map((skill, index) => (
          <div className="col-3 col-sm-0.5 col-md-1 col-lg-3 mb-4">
                  <motion.div 
                    className="skillBox p-3 rounded"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
              <div className="d-flex flex-column align-items-center">
              <img src={skill.src} 
              alt={skill.name} 
              className="img-fluid skill-icon"/>
              <div className="skillName mt-2 text-center">{skill.name}</div>
            </div>
            </motion.div>
          </div>
        ))}
      </div>

  {/* 2nd Row - 3 items */}
      <div className="row justify-content-center">
        {skillsData.slice(3, 6).map((skill, index) => (
          <div className="col-3 col-sm-0.5 col-md-1 col-lg-3 mb-4">
                  <motion.div 
                    className="skillBox p-3 rounded"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
              <div className="d-flex flex-column align-items-center">
              <img src={skill.src} 
              alt={skill.name} 
              className="img-fluid skill-icon"/>
              <div className="skillName mt-2 text-center">{skill.name}</div>
            </div>
            </motion.div>
          </div>
        ))}
      </div>
    
    {/* 3rd Row - 3 items */}
      <div className="row justify-content-center">
        {skillsData.slice(6, 10).map((skill, index) => (
          <div className="col-3 col-sm-0.5 col-md-1 col-lg-3 mb-4">
                  <motion.div 
                    className="skillBox p-3 rounded"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
              <div className="d-flex flex-column align-items-center">
              <img src={skill.src} 
              alt={skill.name} 
              className="img-fluid skill-icon"/>
              <div className="skillName mt-2 text-center">{skill.name}</div>
            </div>
            </motion.div>
          </div>
        ))}
      </div>
</div>  
      </div>
      </div>
      </section>
      
  );
}

export default Skills                                                           