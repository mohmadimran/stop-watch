import { useState, useEffect } from "react";

export default function StopWatch() {
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(0);

  const handleStartAndStop = () => {
    setFlag((prev) => !prev);
  };
  const handleReset = () => {
    setFlag(false);
    setValue(0);
  };
  useEffect(() => {
    let handleTimer;
    if (flag) {
      handleTimer = setInterval(() => {
        setValue((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(handleTimer);
    }
    return () => clearInterval(handleTimer);
  }, [flag]);

  const timeFormat = (val) => {
    let minute = Math.floor(val / 60);
    let second = val % 60;
    let format = `${minute}:${second < 10 ? 0 : ""}${second}`;
    return format ;
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>Stopwatch</h1>
          <p>Time: {timeFormat(value)}</p>
          <button onClick={handleStartAndStop}>
            {flag ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
