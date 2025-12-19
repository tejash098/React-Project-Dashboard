import React, { useEffect, useState } from "react";
import "./OTPApp.css";

const OTPApp = () => {
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [userOtp, setUserOtp] = useState("");
  const [status, setStatus] = useState("");

  const generateOTP = () => {
    const otp = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    setGeneratedOtp(otp);
    setUserOtp("");
    setStatus("");
  };

  const verifyOTP = () => {
    if (!generatedOtp) {
      setStatus("expired");
      return;
    }

    if (userOtp === generatedOtp) {
      setStatus("matched");
    } else {
      setStatus("not-matched");
    }
  };

  useEffect(() => {
    if (!generatedOtp) return;

    const timer = setTimeout(() => {
      setGeneratedOtp(null);
      setStatus("expired");
    }, 10000);

    return () => clearTimeout(timer);
  }, [generatedOtp]);

  return (
    <div className="otp-app">
      <h1>OTP App</h1>

      <button onClick={generateOTP}>Generate OTP</button>

      {generatedOtp && <h2>OTP: {generatedOtp}</h2>}

      <input
        type="text"
        placeholder="Enter OTP"
        value={userOtp}
        onChange={(e) => setUserOtp(e.target.value)}
        maxLength={6}
      />

      <button onClick={verifyOTP}>Verify OTP</button>

      {status === "matched" && <h3 style={{ color: "green" }}>OTP Matched</h3>}
      {status === "not-matched" && (
        <h3 style={{ color: "red" }}>OTP Not Matched</h3>
      )}
      {status === "expired" && <h3 style={{ color: "gray" }}>OTP Expired</h3>}
    </div>
  );
};

export default OTPApp;
