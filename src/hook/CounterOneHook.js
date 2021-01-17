import React  from 'react'
import useCounter from './useCounter'

function CounterOneHook() {
 const [count, increament, decreament, reset] =  useCounter(0,12);
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOneHook
