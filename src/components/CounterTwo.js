import React , {useReducer}from 'react'

// intitial state will now become the object
const initialState = {
    firstCounter: 0,
    secondCounter:10
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increament':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decreament':
            return {...state,firstCounter:state.firstCounter- action.value}
        case 'increament1':
            return {...state,secondCounter:state.secondCounter+action.value}
        case 'decreament1':
            return {...state,secondCounter:state.secondCounter- action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            
            {/* convert string action into object action */}
            <button onClick= {() => dispatch({type:'increament', value:1})}>increament 1</button>
            <button onClick= {() => dispatch({type:'decreament', value:1})}>Decreament 1</button>

            <button onClick= {() => dispatch({type:'increament', value:5})}>increament 5</button>
            <button onClick= {() => dispatch({type:'decreament', value:5})}>Decreament 5</button>

            <button onClick= {() => dispatch({type:'increament1', value:10})}>increament 10</button>
            <button onClick= {() => dispatch({type:'decreament1', value:10})}>Decreament 10</button>
            <button onClick= {() => dispatch({type:'reset'})}>Reset</button>

        </div>
    )
}

export default CounterTwo
