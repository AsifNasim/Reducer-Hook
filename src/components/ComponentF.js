import React, {useContext} from 'react'
import { CountContext } from '../App'


function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component F Count {countContext.countState}
            <button onClick= {() => countContext.countDispatch('increament')}>increament</button>
            <button onClick= {() => countContext.countDispatch('decreament')}>Decreament</button>
            <button onClick= {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
