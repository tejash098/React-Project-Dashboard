import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import OTPApp from "./Projects/OTP-generate/OTPApp";
function ProjectApp() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otp" element={<OTPApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default ProjectApp;
