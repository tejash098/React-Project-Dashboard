import React, { useEffect, useState } from "react";
import "./CurrencyConverter.css";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [rates, setRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [Result, setResult] = useState(0);

  useEffect(() => {
    async function fetchRates() {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/17e0f6d8e948c7449314358c/latest/USD"
      );
      const data = await response.json();
      setRates(Object.entries(data.conversion_rates));
    }
    fetchRates();
  }, []);

  const hdlConvert = () => {
    const rateMap = Object.fromEntries(rates);

    const fromRate = rateMap[fromCurrency];
    const toRate = rateMap[toCurrency]; 

    const result = (Number(amount) * toRate) / fromRate;
    setResult(result.toFixed(2));
  };

  const hdlSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="currencyconvert">
      <h1>Currency Converter</h1>

      <div className="converter-card">
        <div className="field">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label>From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {rates.map(([code]) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          <div className="swap">
            <SwapHorizontalCircleIcon fontSize="large" onClick={hdlSwap}/>
          </div>

          <div className="field">
            <label>To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {rates.map(([code]) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="convert-btn" onClick={hdlConvert}>
          Convert
        </button>

        <p className="result">Result: {Result}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
