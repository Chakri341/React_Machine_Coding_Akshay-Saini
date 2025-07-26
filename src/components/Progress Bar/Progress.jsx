import { useEffect, useState } from "react";
import "./ProgressBar.css";

const Progress = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(progress);
    // setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="progress-bar-outer">
      <div
        className="progress-bar-inner"
        style={{ width: `${animatedProgress}%` }}
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={progress}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Progress;
