import React from 'react'
import { useState } from 'react';
import './OTPApp.css'
const OTPApp = () => {
    const [otp, setOtp] = useState('');
    const generateOTP = (e) => {
        e.preventDefault();
        const otp = Math.floor(Math.random() * 1000000);
        setOtp(otp);
    }
  return (
    <div className='otp-app'>
        <h1>OTPApp</h1>
        <form onSubmit={generateOTP}>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <button type='submit'>Generate OTP</button>
        </form>
        <div>
            <h2>OTP : {otp} </h2>
        </div>
    </div>
  )
}

export default OTPApp