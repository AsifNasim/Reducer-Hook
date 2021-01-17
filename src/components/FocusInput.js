import React, {useEffect, useRef} from 'react'

function FocusInput() {
    const inputRef = useRef(null);
    useEffect(()=>{
        // this current is able to access the input dom
        inputRef.current.focus();
    },[])
    return (
        <div>
            <input type="text" ref = {inputRef} />
        </div>
    )
}

export default FocusInput
