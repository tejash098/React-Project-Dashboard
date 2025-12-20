import React from "react";
import img from "../../assets/Images/passport-photo.png";
import cv from "../../assets/files/Tejash_CV.pdf";
import "./Portfolio.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Landing = () => {
  return (
    <>
      <div className="landingPortfolio">
        <div className="img-section">
          <img src={img} alt="profile" />
        </div>

        <div className="content-section">
          <p>Hello, I'm</p>
          <h1>Tejash Kumar Singh</h1>
          <p>Frontend Developer</p>

          <a href={cv} download className="download-cv">
            Download CV
          </a>

          <div className="social-icons">
            <a
              href="https://github.com/tejash098"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <GitHubIcon fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/in/tejash-singh-892a15233/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
