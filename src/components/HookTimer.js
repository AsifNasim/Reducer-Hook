import React , {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        const intervalRef = setInterval(()=>{
            setTimer(prevTimer => prevTimer+1)
        },1000)
        return () => {
            clearInterval(intervalRef)
        }
    }, [])
    return (
        <div>
            Hook Timer - {timer}   
            {/* this method doesnot work because interval is only scoped to useEffect 
            and is not available outside and because of this reason we use 'useRefs'
            useRefs not only able to access DOM node but also able to store any mutable
            value and also that value is persistent */}
            <button onClick = {()=> clearInterval(intervalRef)}>clear Interval</button>
        </div>
    )
}

export default HookTimer
