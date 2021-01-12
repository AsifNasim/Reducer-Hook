import React , {useReducer}from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'increament':
            return state+1
        case 'decreament':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    // since it user the same state transition we dont need to change the 
    // parameters of useReducer function
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            <div>count One - {count}</div>
            <button onClick= {() => dispatch('increament')}>increament</button>
            <button onClick= {() => dispatch('decreament')}>Decreament</button>
            <button onClick= {() => dispatch('reset')}>Reset</button>

            <div>
            <div>count Two - {countTwo}</div>
            <button onClick= {() => dispatchTwo('increament')}>increament</button>
            <button onClick= {() => dispatchTwo('decreament')}>Decreament</button>
            <button onClick= {() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
