import React, { useState } from 'react'
import './ChipsInput.css'

const ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");

  const handleRemoveChip = (id) => {
    setChips((prev) => prev.filter((_, index) => index !== id));
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (!input.trim()) return;
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("handle key down ==> ", input);
      setChips((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div className="chips-input-container">
      <div className="chips-header">
        <h1>Chips Input</h1>
      </div>
      <div className="chips-main-container">
        <input
          type="text"
          name="chip"
          id="chip"
          value={input}
          className="chip-input"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          placeholder="Type and press Enter"
        />
        <div className="chips-list">
          {chips.map((item, index) => {
            return (
              <div className="chip-item" key={index}>
                <span className="chip-name">{item}</span>
                <span
                  type="button"
                  className="chip-close-btn"
                  onClick={() => handleRemoveChip(index)}
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default ChipsInput;