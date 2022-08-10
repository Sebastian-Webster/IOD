import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
    }
}

const DataFetchWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.data)
        .then(result => {
            dispatch({type: 'FETCH_SUCCESS', payload: result})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])

    return (
        <>
            {state.loading ?
                <h1>Loading...</h1>
            : state.error ? 
                <h1 style={{color: 'red'}}>{state.error}</h1>
            :
                <h3>{state.post.title}</h3>
            }
        </>
    )
}

export default DataFetchWithUseReducer