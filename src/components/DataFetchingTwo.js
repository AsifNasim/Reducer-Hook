import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    error:'',
    post:{}
}

// the reducer function accepts two arguments state and action and return the updated state
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                post:{},
                error:'something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

      // make the API call and set the appropriate state
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //when a get request is made a promise is returned
    .then(response =>{
        dispatch({type:'FETCH_SUCCESS', payload:response.data})
    }).catch(error =>{
        dispatch({type:'FETCH_ERROR'})
    })
   },[])// empty dependency array so that we get the functionality of componentDidMount and
    // to ensure that it calls only once
    return (
        <div>
            {/* this is because they are all part of state object now */}
             {state.loading ? 'Loading...': state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
