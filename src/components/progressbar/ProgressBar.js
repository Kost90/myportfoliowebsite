import React, { useEffect, useState } from 'react'
import {container_center, progressbar_container, progressbar_percent, progressBarAnimation} from './Progressbar.module.css'

function ProgressBar({data}) {

const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < data) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval); 
  }, [count, data]);

  return (
    <div className={progressbar_container}>
      <div
        style={{
          height: "100%",
          width: `${count}%`,
          backgroundColor: "rgb(255, 123, 0)",
          borderRadius: "5px",
          transition: "width 0.5s",
        }}
      >
      </div>
      <span className={progressbar_percent}>{count}%</span>
    </div>
  )
}

export default ProgressBar