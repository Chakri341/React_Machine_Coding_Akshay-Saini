import React from "react";
import Progress from "./Progress.jsx";
import "./ProgressBar.css";

const ProgressBar = () => {
  const levels = [0, 5, 10, 20, 40, 60, 80, 100];

  return (
    <div className="progress-main-container">
      <div className="progress-header">
        <h1>Progress Bar</h1>
      </div>
      <div className="progress-container">
        {levels.map((item) => (
          <Progress key={item} progress={item} />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
