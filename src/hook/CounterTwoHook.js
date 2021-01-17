import React  from 'react'
import useCounter from './useCounter'

function CounterTwoHook() {
 const [count, increament, decreament, reset] =  useCounter(0,6);
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwoHook
