import { useState } from 'react'

let intervalID = null;

export function useCounter(initialValue = 0, delay = 50, step = 1) {
  const [count, setCount] = useState(initialValue)
 
  const start = () => {
    const id = setInterval(() => {
      setCount(prev => prev + step)
    }, delay)
    intervalID = id;
  }

  const stop = () => {
    clearInterval(intervalID)
  }


  return [count, start, stop]
}
