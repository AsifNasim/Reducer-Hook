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
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DotTitleOne from './components/DotTitleOne';
import DotTitleTwo from './components/DocTitleTwo';
import CounterOneHook from './hook/CounterOneHook';
import CounterTwoHook from './hook/CounterTwoHook';
import UserForm from './components/UserForm';

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
      // <CountContext.Provider value ={{countState:count, countDispatch:dispatch}}>
      <div className="App">
          <UserForm/>
      {/* <CounterTwoHook/>
    <CounterOneHook/> */}
       {/* <DotTitleTwo />
       <DotTitleOne/>
       <HookTimer/>
       <ClassTimer/>
       <FocusInput/>
       <Counter/>
     <DataFetchingTwo/>
     <DataFetchingOne/>
{/*      */}
         {/* Count : {count}  */}
       {/* <ComponentA/>
      <ComponentB/>   
      <ComponentC/> */}
       {/* <CounterThree/> */}
       {/* <CounterTwo/> */}
     {/* <CounterOne/> */}
     </div>
    // </CountContext.Provider>
  );
}

export default App;
