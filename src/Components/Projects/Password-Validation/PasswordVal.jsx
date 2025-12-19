import React, { useState } from "react";
import "./PasswordVal.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordVal = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [strength, setStrength] = useState("");
  const [confirmStrength, setConfirmStrength] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getStrength = (value) => {
    if (value.length === 0) return "";
    if (value.length < 4) return "Weak";
    if (value.length < 7) return "Medium";
    return "Strong";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(getStrength(value));
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmStrength(getStrength(value));
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const passwordsMatch =
    password === confirmPassword && confirmPassword.length > 0;

  let confirmClass = "";
  if (isSubmitted && confirmPassword.length > 0) {
    confirmClass = passwordsMatch ? "success" : "error";
  }

  return (
    <div className="passwordVal">
      <h1>Password Validation</h1>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>

        {strength && <p className={`strength ${strength}`}>{strength}</p>}

        <div className="field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmChange}
            className={confirmClass}
          />
          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>

        {confirmStrength && (
          <p className={`strength ${confirmStrength}`}>
            {confirmStrength}
          </p>
        )}

        {isSubmitted && confirmPassword && (
          <p className={passwordsMatch ? "match" : "mismatch"}>
            {passwordsMatch ? "Password Match" : "Mismatch"}
          </p>
        )}

        <button type="submit" disabled={confirmPassword.length < 4 || password.length < 4}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordVal;
