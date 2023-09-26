import React from "react";
import { useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";
import {
  container_center,
  progressbar_container,
  progressbar_percent,
} from "./counter.module.css";

function Counter({ setIsOpen }) {
  const [count, start, stop] = useCounter();

  const handleToggle = () => setIsOpen();

  useEffect(() => {
    if (count < 100) {
      start();
    }
  }, []);

  if (count === 100) {
    stop();
    handleToggle();
  }

  return (
    <div className={container_center}>
      <div className={progressbar_container}>
        <div
          style={{
            height: "100%",
            width: `${count}%`,
            backgroundColor: "rgb(255, 123, 0)",
            borderRadius: "5px",
            transition: "width 0.5s",
          }}
        ></div>
        <span className={progressbar_percent}>{count}%</span>
      </div>
    </div>
  );
}

export default Counter;
