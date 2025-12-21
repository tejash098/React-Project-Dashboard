import React, { useRef, useState } from "react";
import PasswordIcon from '@mui/icons-material/Password';
import "./PasswordGenerate.css";

const PasswordGenerate = () => {
  const [SymbolInclude, setSymbolInclude] = useState(false);
  const [NumberInclude, setNumberInclude] = useState(false);
  const [Length, setLength] = useState(13);
  const [Result, setResult] = useState("");

  const copyValue = useRef();

  const PwdGenerate = () => {
    let char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let num = "1234567890";
    let sym = "!@#$%^&*()";
    let res = "";

    if (SymbolInclude) {
      char += sym;
    }
    if (NumberInclude) {
      char += num;
    }
    for (let index = 0; index < Length; index++) {
      let idx = Math.floor(Math.random() * char.length);
      res += char[idx];
    }

    setResult(res);
  };

  const hdlCopy = () => {
    navigator.clipboard.writeText(copyValue.current.value)
  };

  return (
    <>
      <div className="passwordGenerate">
        <h1><PasswordIcon fontSize="large"/> Password Generator</h1>

        <div className="password-card">
          <div className="password-row">
            <input
              type="text"
              placeholder="Generated password"
              value={Result}
              ref={copyValue}
              readOnly
            />
            <button type="button" className="copy-btn" onClick={hdlCopy}>
              Copy
            </button>
          </div>

          <div className="control">
            <label>
              Length
              <span className="length-value">{Length}</span>
            </label>
            <input
              type="range"
              min="6"
              max="20"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                onChange={() => setSymbolInclude(!SymbolInclude)}
              />
              Include Symbols
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => setNumberInclude(!NumberInclude)}
              />
              Include Numbers
            </label>
          </div>

          <button type="button" className="generate-btn" onClick={PwdGenerate}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerate;
