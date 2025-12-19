import React, { useState, useEffect } from "react";
import "./CaptchValid.css";

const CaptchValid = () => {
  const [captcha, setCaptcha] = useState(null);
  const [captchaValue, setcaptchaValue] = useState("");
  const [valResult, setValResult] = useState("");

  const generateCaptcha = () => {
    let char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    let value = "";
    for (let index = 0; index < 6; index++) {
      let randomNo = Math.floor(Math.random() * char.length);
      value += char[randomNo];
    }
    setCaptcha(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCaptcha(null);
      setcaptchaValue("");
      setValResult("Expired");
    }, 10000);

    return () => clearTimeout(timer);
  }, [captcha]);

  const hdlValidation = () => {
    if (captcha === captchaValue) {
      setValResult("matched");
    } else {
      setValResult("mismatched");
    }
  };

  return (
    <>
      <div className="captchaValid">
        <h1>Captcha Validation</h1>
        <button onClick={generateCaptcha}>Generate Captcha</button>
        {captcha && <p>{captcha}</p>}
        <input
          type="text"
          placeholder="Enter Captcha"
          value={captchaValue}
          onChange={(e) => setcaptchaValue(e.target.value)}
        />
        {valResult === "matched" && <p style={{ color: "green" }}>Matched</p>}
        {valResult === "mismatched" && (
          <p style={{ color: "red" }}>Mismatched</p>
        )}
        {valResult === "Expired" && <p style={{ color: "#818181" }}>Expired</p>}
        <button onClick={hdlValidation}>Submit</button>
      </div>
    </>
  );
};

export default CaptchValid;
