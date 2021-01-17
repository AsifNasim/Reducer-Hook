import React , {useState, useMemo} from 'react';



function Counter(){
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increamentOne = () =>{
        setCounterOne(counterOne+1);
    }

    const increamentTwo = () =>{
        setCounterTwo(counterTwo+1);
    }

    const isEven = useMemo( () =>{
        // the first argument of useMemo is function, and the second argument is 
        // dependency array whose value is need to be cached so other value will only doesnt get
        // affected if there value is not dependent on the value of dependency array 
        let i =0;
        while(i < 200000000) i++;
        return counterOne % 2 === 0
    },[counterOne])
    return (

        <div>
        <div>
            <button onClick= {increamentOne}>counter {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick= {increamentTwo}>counter {counterTwo}</button>
        </div>
        </div>

       
    )
}

export default Counter;