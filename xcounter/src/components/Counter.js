import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(0)
  const incrementBtn = () => {
    setCount((prev) => prev + 1)
  }
  const decrementBtn = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={incrementBtn}>Increment</button>
        <button onClick={decrementBtn}>Decrement</button>
    </div>
  )
}

export default Counter