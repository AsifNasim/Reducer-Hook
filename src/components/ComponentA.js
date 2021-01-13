import React, {useContext} from 'react'
import { CountContext } from '../App'


function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component A Count {countContext.countState}
            <button onClick= {() => countContext.countDispatch('increament')}>increament</button>
            <button onClick= {() => countContext.countDispatch('decreament')}>Decreament</button>
            <button onClick= {() => countContext.countDispatch('reset')}>Reset</button>

        </div>
    )
}

export default ComponentA
