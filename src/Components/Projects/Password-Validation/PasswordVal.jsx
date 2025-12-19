import React, { useState } from "react";
import "./PasswordVal.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordVal = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length === 0) {
      setStrength("");
    } else if (value.length < 4) {
      setStrength("Weak");
    } else if (value.length < 7) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const handleConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
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
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmChange}
            className={confirmClass}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>

        {isSubmitted && confirmPassword && (
          <p className={passwordsMatch ? "match" : "mismatch"}>
            {passwordsMatch ? "Password Match" : "Mismatch"}
          </p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordVal;
