import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
// set loading in order to tell the user that data is fetching in the backgroun
    const [loading, setLoading] = useState(true)
    // catching error if anything happens in fetching the data
    const [error, setError] = useState('')
    // and a variable to hold a post that we will be fetching from API
    const [post, setPost] = useState({})

    // make the API call and set the appropriate state
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //when a get request is made a promise is returned
    .then(response =>{
        setLoading(false)
        // to set the post into the post that has been fetched
        setPost(response.data)
        setError('')
    }).catch(error =>{
        setLoading(false)
        setPost({})
        setError('something went wrong')
    })
   },[])// empty dependency array so that we get the functionality of componentDidMount and
    // to ensure that it calls only once
    return (
        <div>
            {loading ? 'Loading...': post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
