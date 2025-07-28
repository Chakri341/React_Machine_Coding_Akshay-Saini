import React, { useEffect, useRef, useState } from 'react'
import './OtpInput.css'

const OtpInput = () => {
  const OTP_SIZE = 5;
  const [inputOtp, setInputOtp] = useState(new Array(OTP_SIZE).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChangeOtp = (e, index) => {
    e.preventDefault();
    const newOtp = [...inputOtp];
    const value = e.target.value.slice(-1);
    if (isNaN(value) || value === " ") return;
    newOtp[index] = value;
    setInputOtp(newOtp);

    if (value && index < OTP_SIZE - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (inputOtp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-header">
        <h1>OTP INPUT</h1>
      </div>
      <div className="otp-main-container">
        {inputOtp.map((digit, index) => {
          return (
            <input
              key={index}
              type="text"
              ref={(ele) => (inputRefs.current[index] = ele)}
              name="digit"
              className="otp-digit"
              value={inputOtp[index]}
              onChange={(e) => handleChangeOtp(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}


export default OtpInput;