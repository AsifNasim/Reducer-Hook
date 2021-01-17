import React , {useState}from 'react'
import useInput from '../hook/useInput';

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');
    const submitHandler = e =>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit = {submitHandler}>   
                <input {...bindFirstName}  type="text"  />
                <input {...bindLastName} type="text"  />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
