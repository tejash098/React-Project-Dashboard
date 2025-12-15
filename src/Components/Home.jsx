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
                <h3 className="project-card-title">Project Alpha</h3>
                <p className="project-card-description">
                  Initial phase development with core features and
                  infrastructure setup.
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
