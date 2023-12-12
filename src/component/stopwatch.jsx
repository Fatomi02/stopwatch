import React,  {useEffect, useState} from "react";
import "./stopwatch.css";


const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const secs = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

    return (
        <>
        <div className="timer">
          <span id="hours">{hours.toString().padStart(2, "0")}:</span>
          <span id="mins">{minutes.toString().padStart(2, "0")}:</span>
          <span id="secs">{secs.toString().padStart(2, "0")}:</span>
          <span id="mills">{milliseconds.toString().padStart(2, "0")}</span>
        </div>
        <div className="control">
          <button onClick={reset}>Reset</button>
          <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
        </div>
        </>
      );
}

export default Stopwatch;
