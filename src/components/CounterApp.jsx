import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterApp = () => {
  const {counter, increment, reset, decrement,} = useCounter(0)

  return (
   <>
    <h1>Contador 🧮</h1>
    <h2>{counter}</h2>
    <button type="button" onClick={() => increment(5)} className="btn btn-primary">+1</button>
    <button type="button" onClick={() => reset()} className="btn btn-danger">Reset</button>
    <button type="button" onClick={() => decrement(5)} className="btn btn-primary">-1</button>
   </>
  )
}
