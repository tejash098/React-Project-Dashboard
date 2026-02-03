import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import OTPApp from "./Projects/OTP-generate/OTPApp";
import TodoApp from "./Projects/TODO-APP/TodoApp";
import PasswordVal from "./Projects/Password-Validation/PasswordVal";
import CaptchValid from "./Projects/Captcha-Valid/CaptchValid";
import CurrencyConverter from "./Projects/CurrencyConverter/CurrencyConverter";
import PasswordGenerate from "./Projects/Password-Generate/PasswordGenerate";
import About from "./Portfolio/About";
import Contact from "./Portfolio/Contact";
import Landing from "./Portfolio/Landing";
import BookLibrary from "./Projects/Book-Library/BookLibrary";
import QuizApp from "./Projects/Quiz-App/QuizApp";
import ExpenseManager from "./Projects/Expense-Manager/ExpenseManager";
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
          <Route path="/passwordGenerate" element={<PasswordGenerate/>}/>
          <Route path="/Portfolio" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/bookLibrary" element={<BookLibrary/>}/>
          <Route path="/quiz" element={<QuizApp/>}/>
          <Route path="/expense" element={<ExpenseManager/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default ProjectApp;
