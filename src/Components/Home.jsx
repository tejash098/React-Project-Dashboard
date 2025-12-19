import React from "react";

const Home = () => {
  return (
    <>
      <main className="content">
        <div className="content-inner">
          <div className="landing">
            <div className="landing-header">
              <h1 className="landing-title">Welcome to Projects Dashboard</h1>
              <p className="landing-description">
                Manage and monitor all your projects from one central location.
                Select a project from the sidebar to get started.
              </p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <h3 className="project-card-title">OTP-App</h3>
                <p className="project-card-description">
                  OTP-App is a simple application that generates a random OTP
                  and displays it on the screen.
                </p>
              </div>
              <div className="project-card">
                <h3 className="project-card-title">CAPTCHA-Valid</h3>
                <p className="project-card-description">
                  CAPTCHA-Valid is a simple application that generates a random
                  CAPTCHA and validates it.
                </p>
              </div>
              <div className="project-card">
                <h3 className="project-card-title">Password-Validator</h3>
                <p className="project-card-description">
                  Password-Validator is a simple application that validates a
                  password.
                </p>
              </div>
              <div className="project-card">
                <h3 className="project-card-title">TODO-App</h3>
                <p className="project-card-description">
                  TODO-App is a simple application that allows you to add,
                  remove, and update tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
