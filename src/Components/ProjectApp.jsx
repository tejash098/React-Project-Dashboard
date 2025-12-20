import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import OTPApp from "./Projects/OTP-generate/OTPApp";
import TodoApp from "./Projects/TODO-APP/TodoApp";
import PasswordVal from "./Projects/Password-Validation/PasswordVal";
import CaptchValid from "./Projects/Captcha-Valid/CaptchValid";
import CurrencyConverter from "./Projects/CurrencyConverter/CurrencyConverter";

function ProjectApp() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otp" element={<OTPApp />} />
          <Route path="/todo" element={<TodoApp/>}/>
          <Route path="/password" element={<PasswordVal/>}/>
          <Route path="/captcha" element={<CaptchValid/>}/>
          <Route path="/currency" element={<CurrencyConverter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default ProjectApp;
