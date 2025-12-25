import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>Education</h1>
          <div className="education-grid">
            <div className="education-card">
              <h2>Bachelor of Technology</h2>
              <h3>Computer Science Engineering</h3>
              <p>Sikkim Manipal Institute of Technology</p>
              <p>2021 - 2025</p>
              <p>CGPA: 7.5</p>
            </div>
            <div className="education-card">
              <h2>Senior Secondary</h2>
              <h3>Physics, Chemistry, Mathematics</h3>
              <p>The Aryan International School</p>
              <p>2019 - 2021</p>
              <p>Percentage: 90%</p>
            </div>
            <div className="education-card">
              <h2>Secondary</h2>
              <h3>General</h3>
              <p>The Aryan International School</p>
              <p>2018 - 2019</p>
              <p>Percentage: 89%</p>
            </div>
          </div>
        </div>
        <div className="skills-content">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill-card">
                    <h2>HTML</h2>
                    <p>90%</p>
                </div>
                <div className="skill-card">
                    <h2>CSS</h2>
                    <p>80%</p>
                </div>
                <div className="skill-card">
                    <h2>JavaScript</h2>
                    <p>75%</p>
                </div>
                <div className="skill-card">
                    <h2>React</h2>
                    <p>70%</p>
                </div>
                <div className="skill-card">
                    <h2>Python</h2>
                    <p>90%</p>
                </div>
                <div className="skill-card">
                    <h2>Oracle SQL</h2>
                    <p>80%</p>
                </div>
                <div className="skill-card">
                    <h2>Django</h2>
                    <p>75%</p>
                </div>
                <div className="skill-card">
                    <h2>Git</h2>
                    <p>75%</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
