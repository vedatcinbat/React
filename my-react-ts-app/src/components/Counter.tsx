import React, {useState} from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const incrementBy = (amount: number) => {
        setCount(prev => prev + amount)
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <>
        <div>Counter : {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={() => incrementBy(10)}>Increment 10</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter