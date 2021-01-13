import './App.css';
import React, {useReducer} from 'react'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo'
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

export const CountContext = React.createContext();
// USEREDUCER + USECONTEXT
// PASTE REDUCER FUNCTION 
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


function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <DataFetchingTwo/>
    // <DataFetchingOne/>
    // <CountContext.Provider value ={{countState:count, countDispatch:dispatch}}>
    //   <div className="App">
    //     Count : {count}
    //   <ComponentA/>
    //   <ComponentB/>
    //   <ComponentC/>
    //   {/* <CounterThree/> */}
    //   {/* <CounterTwo/> */}
    //   {/* <CounterOne/> */}
    // </div>
    // </CountContext.Provider>
  );
}

export default App;
